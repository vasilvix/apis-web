import classes from './InputList.module.css';

import InputListItem from './InputListItem';

const InputList = (props) => {

  const inputListItems = props.items.map(i => <InputListItem key={i} content={i}/>);

  return <div className={classes['input__list']}>{inputListItems}</div>;
}

export default InputList;