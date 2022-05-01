import classes from './InputListItem.module.css';
import { ReactComponent as InputClose } from '../../assets/images/input-close.svg';

const InputListItem = (props) => {
  return (
    <div className={classes['input__list-item']}>
      <span>{props.content}</span>
      <div className={classes['input__list-item-trigger']}></div>
      <div className={classes['input__list-item-close']}>
        <InputClose />
      </div>
    </div>
  );
}

export default InputListItem;