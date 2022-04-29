import classes from './ApisResult.module.css';
import { ReactComponent as MoreArrowImage } from '../../assets/images/more-arrow.svg';

import ResultItem from './Result/ResultItem';

const ApisResult = () => {
  return (
    <div className={classes['apis-result']}>
      <div className={classes['result-items']}>
        <ResultItem
          label={"Качество подключения"}
          content={"нет задержки"}
        />
        <ResultItem
          label={"Статус сервера"}
          content={"подключен 193.128.131.10"}
        />
        <ResultItem
          label={"Режим"}
          content={"Ровер. Подключен к базе 951126"}
        />
      </div>
      <div className={classes.more}>
        <span>
          Больше информации
        </span>
        <div className={classes['more__arrow']}>
          <MoreArrowImage />
        </div>
      </div>
      <div className={classes['result-items']}>
        <ResultItem
          label={"Получено"}
          content={"73,567 кБ"}
        />
        <ResultItem
          label={"Отправлено"}
          content={"5,596 кБ"}
        />
        <ResultItem
          label={"Формат поправок"}
          content={"CMR"}
          advice={{ text: "Только GPS и ГЛОНАСС" }}
        />
        <ResultItem
          label={"Время"}
          content={"11 марта в 11:05:05"}
        />
      </div>
    </div>
  );
}

export default ApisResult;