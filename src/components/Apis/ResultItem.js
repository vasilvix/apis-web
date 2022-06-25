import classes from './ResultItem.module.css';

import AdvicePopup from '../UI/AdvicePopup';
import React from 'react';


const ResultItem = ({ label, content, advice, isError }) => {

  let adviceContent = null;
  if (advice !== undefined) {
    adviceContent = <AdvicePopup {...advice} />
  }

  return (
    <div className={classes['result-items__item']}>
      <div className={classes['result-items__item-content']}>
        <b>{label}</b>
        <span className={isError ? classes['error'] : undefined}>
          {content}
        </span>
        {adviceContent}
      </div>
    </div>
  );
}

export default ResultItem;