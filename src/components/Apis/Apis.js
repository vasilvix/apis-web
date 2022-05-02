import React, { useState } from 'react';

import ApisForm from "./ApisForm";
import ApisResult from "./ApisResult";
import Checkbox from '../UI/Checkbox';
import classes from './Apis.module.css';

const dummyResponse = { "result": "0", "message": "查询成功", "data": [{ "Codetype": "CMR", "ConTime": "/Date(1651264737016+0300)/", "IsExist": true, "MobileRelatedRefID": "", "RovBytes": 782.414063, "SendBytes": 58538.11, "ServerCurrentNum": 10, "ServerTotalNum": 11, "StID": "951034", "StStaus": 0, "StType": 0, "TcpIPName": "193.124.131.10" }] };
const dummySnSuggestions = ['328309', '322323'];

const getMsJsonDate = (date) => {
  const re = /-?\d+/;
  const m = re.exec(date);
  return parseInt(m[0], 10);
}

const Apis = () => {
  const [checkResult, setCheckResult] = useState({});
  const [isPeriodicUpdateActive, setIsPeriodicUpdateActive] = useState(false);

  const periodicUpdateCheckboxHandler = () => {
    setIsPeriodicUpdateActive(!isPeriodicUpdateActive);
  }

  const apisCheckHandler = async (sn) => {

    // const response = await fetch(
    //   'http://apis.prin.ru:6001/weixin/QueryCorsInfo.ashx?'
    //   + new URLSearchParams({
    //     sn: sn,
    //     t: Math.random()
    //   })
    // );
    // if (response.ok) {
    //   const json = await response.json();
    // }

    const json = dummyResponse;
    const apisData = json.data[0];

    const isBase = apisData.StType === 0;
    const connectionDateObject = new Date(getMsJsonDate(apisData.ConTime));
    const connectionQuality = apisData.StStaus === 0
      ? 'нет задержки'
      : 'Задержка передачи данных';
    const serverStatus = `подключен ${apisData.TcpIPName}`;
    const mode = isBase
      ? 'База'
      : `Ровер (подключен к базе ${apisData.MobileRelatedRefID}`
    const connectionDateTime = `${connectionDateObject.toLocaleDateString()} ${connectionDateObject.toLocaleTimeString()}`;
    const received = `${(isBase ? apisData.RovBytes : apisData.SendBytes).toFixed(2)} кБ`;
    const sent = `${(isBase ? apisData.SendBytes : apisData.RovBytes).toFixed(2)} кБ`;
    const correctionFormat = apisData.Codetype;
    const correctionFormatAdvice = {
      text: apisData.Codetype === 'CMR'
        ? 'Только GPS и ГЛОНАСС'
        : 'GPS, ГЛОНАСС, Galileo, Beidou'
    };

    setCheckResult(() => {
      return {
        connectionQuality,
        serverStatus,
        mode,
        connectionDateTime,
        received,
        sent,
        correctionFormat,
        correctionFormatAdvice,
      }
    });
  }

  const result = (
    <React.Fragment>
      <Checkbox
        isActive={isPeriodicUpdateActive}
        onClick={periodicUpdateCheckboxHandler}
      />
      <ApisResult result={{ ...checkResult }} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={classes.apis}>
        <h1>
          Проверка <br />
          статуса APIS
        </h1>
        <ApisForm
          apisCheckHandler={apisCheckHandler}
          suggestions={dummySnSuggestions}
        />
        {Object.keys(checkResult).length !== 0 && result}
      </div>
    </React.Fragment>
  );
}

export default Apis;