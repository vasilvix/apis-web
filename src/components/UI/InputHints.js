import classes from './InputHints.module.css';

import InputHintItem from './InputHintItem';

const InputHints = (props) => {
  const inputHints = props.items.map(i => {
    return <InputHintItem
      key={i}
      content={i}
      onPick={props.onPick}
      onDelete={props.onDelete}
    />
  });

  return (
    <div
      className={classes['input__list']}
    >
      {inputHints}
    </div>);
}

export default InputHints;