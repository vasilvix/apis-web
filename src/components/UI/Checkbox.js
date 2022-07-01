import classes from './Checkbox.module.css';
import Container from './Container';
import Row from './Row';

const Checkbox = (props) => {
  return (
    <div className={classes['checkbox-container']}>
      <Container>
        <Row>
          <div className={classes['checkbox-wrap']} onClick={props.onClick}>
            <span>
              Обновлять данные онлайн<span>:</span><span>?</span>
            </span>
            <div
              className={`${classes['checkbox-btn']} ${props.isActive ? classes['active'] : ''}`}>
              <span className={`${props.isActive ? classes['active'] : ''}`}>
                Да
              </span>
              <span className={`${props.isActive ? '' : classes['active']}`}>
                Нет
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Checkbox;