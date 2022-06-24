import React from 'react';

import classes from './ApisForm.module.css';
import serialNumberImage from '../../assets/images/popup-img-min.png';

import Input from '../UI/Input';

const ApisForm = (props) => {

  const serialNumberInput = React.createRef();
  
  const submitHandler = async (event) => {
    event.preventDefault();
    const sn = serialNumberInput.current.value;
    props.apisCheckHandler(sn);
  }

  return (
    <form onSubmit={submitHandler} className={classes['apis-form']}>
      <Input
        ref={serialNumberInput}
        type={'number'}
        label={'Введите серийный номер'}
        suggestions={props.suggestions}
        advice={{
          text: 'Серийный номер здесь:',
          image: serialNumberImage
        }}
      />
      <button className={classes.btn}>Проверить</button>
    </form>
  );
}

export default ApisForm;