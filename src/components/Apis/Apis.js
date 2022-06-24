import React, { useState } from 'react';

import ApisForm from "./ApisForm";
import ApisResult from "./ApisResult";
import Checkbox from '../UI/Checkbox';
import classes from './Apis.module.css';
import LoadingModal from '../UI/LoadingModal';

const dummySnSuggestions = ['328309', '322323'];

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
    result.connectionQuality = !result.isDelay ? 'Хорошее' : 'Задержка передачи данных';
    result.mode = isBase ? 'База' : `Ровер (подключен к базе ${MobileRelatedRefID})`
    result.connectionDateTime = connectionDate.toLocaleString('ru-RU');
    result.received = `${(isBase ? RovBytes : SendBytes).toFixed(2)} кБ`;
    result.sent = `${(isBase ? SendBytes : RovBytes).toFixed(2)} кБ`;
    result.correctionFormat = Codetype;
    result.correctionFormatAdvice = {
      text: Codetype === 'CMR' 
      ? 'Только GPS и ГЛОНАСС' 
      : 'GPS, ГЛОНАСС, Galileo, Beidou',
    };
  }

  return result;
}

const Apis = () => {
  const [checkResult, setCheckResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckSuccess, setIsCheckSuccess] = useState(false);
  const [isCheckResultShown, setIsCheckResultShown] = useState(false);
  const [isPeriodicUpdateActive, setIsPeriodicUpdateActive] = useState(false);

  const periodicUpdateCheckboxHandler = () => {
    setIsPeriodicUpdateActive(!isPeriodicUpdateActive);
    console.log(isPeriodicUpdateActive)
  }

  const apisCheckHandler = async (sn) => {
    setIsCheckResultShown(false);
    !isPeriodicUpdateActive && setCheckResult(() => { return {} });
    !isPeriodicUpdateActive && setIsCheckSuccess(true);

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
    setIsCheckResultShown(true);
    setIsCheckSuccess(Object.keys(result).length > 1 && !result.isDelay);
  }

  const result = (
    <React.Fragment>
      <Checkbox
        isActive={isPeriodicUpdateActive}
        onClick={periodicUpdateCheckboxHandler}
      />
      <ApisResult isCheckSuccess={isCheckSuccess} result={{ ...checkResult }} />
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
          apisCheckHandler={apisCheckHandler}
          suggestions={dummySnSuggestions}
        />
        {isCheckResultShown && result}
      </div>
    </React.Fragment>
  );
}

export default Apis;