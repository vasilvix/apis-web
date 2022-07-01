import React, { useEffect, useState, useRef } from 'react';

import ApisForm from "./ApisForm";
import ApisResult from "./ApisResult";
import Checkbox from '../UI/Checkbox';
import classes from './Apis.module.css';
import LoadingModal from '../UI/LoadingModal';

const getMsJsonDate = (date) => {
  const re = /-?\d+/;
  const m = re.exec(date);
  return parseInt(m[0], 10);
}

const parseApisResponse = (apisResponse) => {
  const result = {};
  if (apisResponse.data[0].IsExist) {
    const {
      StType,
      ConTime,
      StStaus,
      MobileRelatedRefID,
      RovBytes,
      SendBytes,
      Codetype,
    } = apisResponse.data[0];
    const isBase = StType === 0;
    const connectionDate = new Date(getMsJsonDate(ConTime));
    result.isDelay = StStaus === 2;
    result.connectionQuality = !result.isDelay ?
      'Стабильное' :
      'Нестабильное';
    result.mode = isBase ?
      'База' :
      `Ровер (подключен к базе ${MobileRelatedRefID})`
    result.connectionDateTime = connectionDate.toLocaleString('ru-RU');
    result.received = `${(isBase ? RovBytes : SendBytes).toFixed(2)} кБ`;
    result.sent = `${(isBase ? SendBytes : RovBytes).toFixed(2)} кБ`;
    result.correctionFormat = Codetype;
    result.correctionFormatAdvice = {
      text: Codetype === 'CMR' ?
        'Только GPS и ГЛОНАСС' :
        'GPS, ГЛОНАСС, Galileo, Beidou',
    };
  }

  return result;
}

const Apis = () => {
  const [checkResult, setCheckResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckResultHasError, setIsCheckResultHasError] = useState(false);
  const [isResultShowMore, setResultShowMore] = useState(false);
  const [isCheckSuccess, setIsCheckSuccess] = useState(false);
  const [isCheckResultShown, setIsCheckResultShown] = useState(false);
  const [isAutoUpdateEnabled, setIsAutoUpdateActive] = useState(false);

  let timerId = useRef();
  const serialNumber = useRef();

  useEffect(() => {
    if (isAutoUpdateEnabled) {
      timerId.current = setInterval(() => {
        apisCheckHandler(serialNumber.current.value);
      }, 5000)
    } else {
      clearInterval(timerId.current)
    }
  }, [isAutoUpdateEnabled])

  const periodicUpdateCheckboxHandler = () => {
    if (serialNumber.current.value !== '') {
      setIsAutoUpdateActive(!isAutoUpdateEnabled);
    }
  }

  const resultShowMoreHandler = () => {
    setResultShowMore((isResultShowMore) => !isResultShowMore)
  }

  const apisCheckHandler = async (sn) => {
    setIsCheckResultShown(false);
    setIsLoading(true);
    const params = new URLSearchParams([['sn', sn]]);
    const response = await fetch('http://localhost:3001/check/?' + params);
    setIsLoading(false);
    let result = checkResult;
    if (response.ok) {
      const json = await response.json();
      result = parseApisResponse(json);
    }

    result.checkTime = new Date().toLocaleString('ru-RU');
    setCheckResult(() => result);
    setIsCheckSuccess(Object.keys(result).length > 1);
    setIsCheckResultHasError(Object.keys(result).length > 1 && !result.isDelay);
    setIsCheckResultShown(true);
  }

  const result = (
    <React.Fragment>
      <Checkbox
        isActive={isAutoUpdateEnabled}
        onClick={periodicUpdateCheckboxHandler}
      />
      <ApisResult
        isCheckResultHasError={isCheckResultHasError}
        isShowMore={isResultShowMore}
        onShowMore={resultShowMoreHandler}
        result={{ ...checkResult }}
      />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {isLoading && <LoadingModal />}
      <div className={classes.apis}>
        <h1>
          Проверка <br />
          статуса APIS
        </h1>
        <ApisForm
          ref={serialNumber}
          onSubmit={apisCheckHandler}
          isCheckSuccess={isCheckSuccess}
          isDisabled={isAutoUpdateEnabled}
        />
        {isCheckResultShown && result}
      </div>
    </React.Fragment>
  );
}

export default Apis;