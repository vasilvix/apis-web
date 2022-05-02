import React from 'react';

import classes from './Input.module.css';
import InputList from '../UI/InputList'
import AdvicePopup from '../UI/AdvicePopup';
import { ReactComponent as InputClose } from '../../assets/images/input-close.svg';


const Input = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <div className={classes['number-text']}>
        <span>
          {props.label}
        </span>
        {props.advice && <AdvicePopup image={props.advice.image} text={props.advice.text} />}
      </div>
      <div className={classes.input}>
        <div className={classes['input__main']}>
          <input type={props.type} required />
          <div className={classes['input__main-close']}>
            <InputClose />
          </div>
        </div>
        <InputList items={props.suggestions} />
      </div>
    </React.Fragment>
  );
});

export default Input;