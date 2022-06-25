import classes from './InputHintItem.module.css';

import { ReactComponent as InputClose } from '../../assets/images/input-close.svg';

const InputHintItem = (props) => {

  const pickHandler = () => {
    props.onPick(props.content);
  }

  const deleteHandler = () => {
    props.onDelete(props.content);
  }

  return (
    <div className={classes['input__list-item']}>
      <span onClick={pickHandler}>{props.content}</span>
      <button
        form=''
        onClick={deleteHandler}
        className={classes['input__list-item-close']}
      >
        <InputClose />
      </button>
    </div >
  );
}

export default InputHintItem;