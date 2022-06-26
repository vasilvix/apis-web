import React from 'react';

import MoreArrow from '../UI/MoreArrow';
import classes from './ApisResult.module.css';

import ResultItem from './ResultItem';

const helpLink = 'https://prin.ru';

const ApisResult = (props) => {
  const isError = !props.isCheckResultHasError;
  const isDelay = props.result.isDelay;

  if (isError && !isDelay) {
    const advice = {};

    advice.text = (
      <React.Fragment>
        Рекомендуем почитать статью
        <br />
        <a href={helpLink}>
          “Подключение базы и ровера по APIS”
        </a>
      </React.Fragment>
    );

    return (
      <div className={`${classes['apis-result']} ${classes['apis-result_error']}`}>
        <div className={classes['result-items']}>
          <ResultItem
            label={'Время проверки: '}
            content={props.result.checkTime}
            isError={isError}
          />
          <ResultItem
            content={'Приёмник не подключен к серверу'}
            isError={isError}
            advice={advice}
          />
        </div>
      </div>
    );
  }

  const mainInfo = (
    <div className={classes['result-items']}>
      <ResultItem
        label={'Время проверки: '}
        content={props.result.checkTime}
        isError={isError}
      />
      <ResultItem
        label={'Качество подключения: '}
        content={props.result.connectionQuality}
        isError={isError}
      />
      <ResultItem
        label={'Режим: '}
        content={props.result.mode}
        isError={isError}
      />
      <ResultItem
        label={'Формат поправок: '}
        content={props.result.correctionFormat}
        advice={props.result.correctionFormatAdvice}
        isError={isError}
      />
    </div>
  );

  const moreInfo = (
    <div className={classes['result-items']}>
      <ResultItem
        label={'Подключен к серверу: '}
        content={props.result.connectionDateTime}
        isError={isError}
      />
      <ResultItem
        label={'Получено: '}
        content={props.result.received}
        isError={isError}
      />
      <ResultItem
        label={'Отправлено: '}
        content={props.result.sent}
        isError={isError}
      />
    </div>
  );

  return (
    <div className={classes['apis-result']}>
      {mainInfo}
      <MoreArrow isActive={props.isShowMore} showMore={props.onShowMore} />
      {props.isShowMore && moreInfo}
    </div>
  );
}

export default ApisResult;