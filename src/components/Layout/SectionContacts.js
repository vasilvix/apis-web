import Container from '../UI/Container';
import Row from '../UI/Row';
import classes from './SectionContacts.module.css';

const manualLs7FileName = 'Подключение базы и ровера по APIS на Landstar7.pdf'; 
const manualNoFixFileName = 'Что делать, если нет фиксированного решения при работе по технологии APIS.pdf'; 

const SectionContacts = () => {
  return (
    <section className={classes['section-contacts']} id="section-contacts">
      <Container>
        <Row>
          <div className={classes.contacts}>
            <a href={`download/${encodeURI(manualLs7FileName)}`} download className={classes['contacts__item']}>
              <span>
                Инструкция. Подключение базы и ровера по APIS на Landstar7
              </span>
            </a>
            <a href={`download/${encodeURI(manualNoFixFileName)}`} download className={classes['contacts__item']}>
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
        </Row>
      </Container>
    </section>
  );
}

export default SectionContacts;