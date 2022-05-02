import { useRef } from 'react';

import classes from './ApisForm.module.css';
import serialNumberImage from '../../assets/images/popup-img-min.png';

import Input from '../UI/Input';

const ApisForm = (props) => {

  const serialNumber = useRef();
  
  const submitHandler = async (event) => {
    event.preventDefault();
    props.apisCheckHandler('3380912');
  }

  return (
    <form onSubmit={submitHandler} className={classes['apis-form']}>
      <Input
        ref={serialNumber}
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