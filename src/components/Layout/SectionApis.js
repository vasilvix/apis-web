import classes from './SectionApis.module.css';

import ApisForm from "../Apis/ApisForm";
import ApisResult from "../Apis/ApisResult";

const SectionApis = () => {
  return (
    <section class={classes['section-apis']} id="section-apis">
      <div class={classes.container}>
        <div class={classes.row}>
          <div class={classes.apis}>
            <h1>
              Проверка <br />
              статуса APIS
            </h1>
            <ApisForm />
            <ApisResult />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionApis;