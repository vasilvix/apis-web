import React, { useState } from 'react';

import classes from './SectionApis.module.css';

import ApisForm from "../Apis/ApisForm";
import ApisResult from "../Apis/ApisResult";
import Container from '../UI/Container';
import Row from '../UI/Row';
import Checkbox from '../UI/Checkbox';

const dummyResponse = { "result": "0", "message": "查询成功", "data": [{ "Codetype": "CMR", "ConTime": "/Date(1651264737016+0300)/", "IsExist": true, "MobileRelatedRefID": "", "RovBytes": 782.414063, "SendBytes": 58538.11, "ServerCurrentNum": 10, "ServerTotalNum": 11, "StID": "951034", "StStaus": 0, "StType": 0, "TcpIPName": "193.124.131.10" }] };
const dummySnSuggestions = ['328309', '322323'];

const SectionApis = () => {
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
    setCheckResult(() => { return json.data[0] })
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
    <section className={classes['section-apis']} id="section-apis">
      <Container>
        <Row>
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
        </Row>
      </Container>
    </section>
  );
}

export default SectionApis;