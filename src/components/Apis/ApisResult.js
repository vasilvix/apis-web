import { useState } from 'react';

import MoreArrow from '../UI/MoreArrow';
import classes from './ApisResult.module.css';

import ResultItem from './ResultItem';

const ApisResult = (props) => {

  const [isShowMore, setIsShowMore] = useState(false);

  const showMoreHandler = () => {
    setIsShowMore(!isShowMore);
  }

  const moreInfo = (
    <div className={classes['result-items']}>
      <ResultItem
        label={'Получено'}
        content={props.result.received}
      />
      <ResultItem
        label={'Отправлено'}
        content={props.result.sent}
      />
      <ResultItem
        label={'Формат поправок'}
        content={props.result.correctionFormat}
        advice={props.result.correctionFormatAdvice}
      />
      <ResultItem
        label={'Время подключения'}
        content={props.result.connectionDateTime}
      />
    </div>
  );

  return (
    <div className={classes['apis-result']}>
      <div className={classes['result-items']}>
        <ResultItem
          label={'Качество подключения'}
          content={props.result.connectionQuality}
        />
        <ResultItem
          label={'Статус сервера'}
          content={props.result.serverStatus}
        />
        <ResultItem
          label={'Режим'}
          content={props.result.mode}
        />
      </div>
      <MoreArrow isActive={isShowMore} showMore={showMoreHandler} />
      {isShowMore && moreInfo}
    </div>
  );
}

export default ApisResult;