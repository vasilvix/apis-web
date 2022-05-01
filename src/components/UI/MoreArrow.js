import classes from './MoreArrow.module.css';
import { ReactComponent as MoreArrowImage } from '../../assets/images/more-arrow.svg';

const MoreArrow = (props) => {

  return (
    <div className={classes.more} onClick={props.showMore}>
      <span>
        Больше информации
      </span>
      <div className={`${classes['more__arrow']} ${props.isActive ? classes.active : ''}`}>
        <MoreArrowImage />
      </div>
    </div>
  );
}

export default MoreArrow;