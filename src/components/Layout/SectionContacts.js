import classes from './SectionContacts.module.css';

const SectionContacts = () => {
  return (
    <section className={classes['section-contacts']} id="section-contacts">
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.contacts}>
            <a href="download/PodklyucheniyeBazyIRoveraPoAPISNaLandstar7.docx" download className={classes['contacts__item']}>
              <span>
                Инструкция. Подключение базы и ровера по APIS на Landstar7
              </span>
            </a>
            <a href="download/ChtoDelatEsliNetFiksirovannogoResheniyaPriRabotePoTekhnologiiAPIS.docx" download className={classes['contacts__item']}>
              <span>
                Инструкция. Что делать, если нет фиксированного решения при работе по технологии APIS?
              </span>
            </a>
            <a href="https://t.me/prin_support_bot" target="_blank" rel="noopener noreferrer" className={`${classes['contacts__item']} ${classes['contacts__item_tg']}`}>
              <span>
                Телеграм-бот <br />
                техподдержки
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContacts;