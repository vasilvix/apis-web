import React, { useState } from 'react';

import classes from './Input.module.css';
import InputHints from './InputHints'
import AdvicePopup from '../UI/AdvicePopup';
import { ReactComponent as InputClose } from '../../assets/images/input-close.svg';

const ClearInput = (props) => {
  return (
    <button
      form=''
      className={classes['input__main-close']}
      onClick={props.onClick}
    >
      <InputClose />
    </button>
  );
}

const Input = React.forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState('');
  const [isHintsActive, setIsHintsActive] = useState(false);

  const inputRegexValidator = /^\d+$/;

  const inputChangeHandler = (event) => {
    const currentInput = event.target.value;
    if ((inputRegexValidator.test(currentInput) && currentInput.length <= 7) ||
      currentInput === '') {
      setInputValue(currentInput);
      setIsHintsActive(false);
    }
  }

  const onClearInputHandler = () => {
    setInputValue('');
    setIsHintsActive(false);
  }

  const showHints = () => {
    if (inputValue === '') {
      setIsHintsActive(true);
    }
  }

  const onHintPickHandler = (value) => {
    setInputValue(value);
    setIsHintsActive(false);
  }

  const onHintDelete = (value) => {
    props.onHintDelete(value);
    if (props.hints.length === 0) {
      setIsHintsActive(false);
    }
  }

  return (
    <React.Fragment>
      <div className={classes['number-text']}>
        <span>
          {props.label}
        </span>
        {props.advice && <AdvicePopup image={props.advice.image} text={props.advice.text} />}
      </div>
      <div className={`${classes['input']} ${isHintsActive ? classes['active'] : undefined}`}>
        <div className={classes['input__main']}>
          <input
            ref={ref}
            value={inputValue}
            onChange={inputChangeHandler}
            onClick={showHints}
            type={props.type}
            required
          />
          {inputValue && <ClearInput onClick={onClearInputHandler} />}
        </div>
        {
          props.hints.length > 0 &&
          isHintsActive &&
          <InputHints
            items={props.hints}
            onPick={onHintPickHandler}
            onDelete={onHintDelete}
          />
        }
      </div>
    </React.Fragment>
  );
});

export default Input;