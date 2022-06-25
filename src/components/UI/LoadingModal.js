import React from "react";
import ReactDOM from "react-dom";

import classes from './LoadingModal.module.css'

const Backdrop = () => {
  return (
    <div className={`${classes['overlay']} ${classes['active']}`}>
    </div>
  );
}

const ModalOverlay = () => {
  return (
    <div className={`${classes['modal']} ${classes['modal_loading']} ${classes['active']}`}>
      <div className={classes['loading-icon']}>
      </div>
      <h4>
        Пожалуйста, подождите<br />
        Получаем ответ от сервера
      </h4>
    </div>
  );
}

const LoadingModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
    </React.Fragment >
  );
}

export default LoadingModal;