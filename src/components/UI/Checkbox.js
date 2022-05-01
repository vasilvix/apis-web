import classes from './Checkbox.module.css';
import Container from './Container';
import Row from './Row';

const Checkbox = (props) => {
  return (
    <Container>
      <Row>
        <div className={classes['checkbox-wrap']} onClick={props.onClick}>
          <span>
            Обновлять данные онлайн<span>:</span><span>?</span>
          </span>
          <div
            className={`${classes['checkbox-btn']} ${props.isActive ? classes['active'] : ''}`}>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Checkbox;