import classes from './ResultItem.module.css';

import AdvicePopup from '../UI/AdvicePopup';

const ResultItem = ({ label, content, advice }) => {

  let adviceContent = null;
  if (advice !== undefined) {
    adviceContent = <AdvicePopup {...advice} />
  }

  return (
    <div className={classes['result-items__item']}>
      <div className={classes['result-items__item-content']}>
        <b>{`${label}: `}</b>
        <span>{`${content}`}</span>
        {adviceContent}
      </div>
    </div>
  );
}

export default ResultItem;