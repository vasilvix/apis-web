import { useState } from 'react';

import MoreArrow from '../UI/MoreArrow';
import classes from './ApisResult.module.css';

import ResultItem from './ResultItem';

const getMsJsonDate = (date) => {
  const re = /-?\d+/;
  const m = re.exec(date);
  return parseInt(m[0], 10);
}

const ApisResult = (props) => {

  const [isShowMore, setIsShowMore] = useState(false);

  const showMoreHandler = () => {
    setIsShowMore(!isShowMore);
  }

  const isBase = props.result.StType === 0;
  const connectionQuality = props.result.StStaus === 0
    ? 'нет задержки'
    : 'Задержка передачи данных';
  const serverStatus = `подключен ${props.result.TcpIPName}`;
  const mode = isBase
    ? 'База'
    : `Ровер (подключен к базе ${props.result.MobileRelatedRefID}`
  const connectionDate = new Date(getMsJsonDate(props.result.ConTime));
  const connectionDateLocal = connectionDate.toLocaleDateString();
  const connectionTimeLocal = connectionDate.toLocaleTimeString();
  const connectionDateTimeLocal = `${connectionDateLocal} ${connectionTimeLocal}`;
  const received = `${(isBase ? props.result.RovBytes : props.result.SendBytes).toFixed(2)} кБ`;
  const sent = `${(isBase ? props.result.SendBytes : props.result.RovBytes).toFixed(2)} кБ`;
  const correctionFormatAdvice = {
    text: props.result.Codetype === 'CMR'
      ? 'Только GPS и ГЛОНАСС'
      : 'GPS, ГЛОНАСС, Galileo, Beidou'
  };

  const moreInfo = (
    <div className={classes['result-items']}>
      <ResultItem
        label={'Получено'}
        content={received}
      />
      <ResultItem
        label={'Отправлено'}
        content={sent}
      />
      <ResultItem
        label={'Формат поправок'}
        content={props.result.Codetype}
        advice={correctionFormatAdvice}
      />
      <ResultItem
        label={'Время подключения'}
        content={connectionDateTimeLocal}
      />
    </div>
  );

  return (
    <div className={classes['apis-result']}>
      <div className={classes['result-items']}>
        <ResultItem
          label={'Качество подключения'}
          content={connectionQuality}
        />
        <ResultItem
          label={'Статус сервера'}
          content={serverStatus}
        />
        <ResultItem
          label={'Режим'}
          content={mode}
        />
      </div>
      <MoreArrow isActive={isShowMore} showMore={showMoreHandler} />
      {isShowMore && moreInfo}
    </div>
  );
}

export default ApisResult;