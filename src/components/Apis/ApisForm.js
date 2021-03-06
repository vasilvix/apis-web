import React, { useState, useEffect } from 'react';

import classes from './ApisForm.module.css';
import serialNumberImage from '../../assets/images/popup-img-min.png';

import Input from '../UI/Input';

const ApisForm = React.forwardRef((props, ref) => {
  const [snHints, setSnHints] = useState([]);

  useEffect(() => {
    if (localStorage.serialNumbers) {
      setSnHints(JSON.parse(localStorage.serialNumbers));
    }
  }, []);

  const onSnHintAddHandler = (sn) => {
    if (!snHints.includes(sn)) {
      const updatedSnHints = [...snHints, sn];
      setSnHints(() => updatedSnHints);
      localStorage.serialNumbers = JSON.stringify(updatedSnHints);
    }
  }

  const onSnHintDeleteHandler = (sn) => {
    const filteredSnHints = snHints.filter(h => h !== sn)
    setSnHints(() => filteredSnHints);
    localStorage.serialNumbers = JSON.stringify(filteredSnHints);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const sn = ref.current.value;
    props.onSubmit(sn);
    onSnHintAddHandler(sn)
  }

  return (
    <form
      onSubmit={submitHandler}
      className={classes['apis-form']}
      id='apis-check-form'
    >
      <Input
        ref={ref}
        label={'Введите серийный номер'}
        hints={snHints}
        onHintDelete={onSnHintDeleteHandler}
        advice={{
          text: 'Серийный номер здесь:',
          image: serialNumberImage
        }}
        isDisabled={props.isDisabled}
      />
      {!props.isDisabled && <button className={classes.btn}>Проверить</button>}
    </form>
  );
});

export default ApisForm;