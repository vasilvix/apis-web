import classes from './AdvicePopup.module.css';
import questionIcon from '../../assets/images/question-icon.svg';

const AdvicePopup = ({ text, image }) => {
  return (
    <div className={classes.question}>
      <div className={classes['question__icon']}>
        <img src={questionIcon} alt='Advice popup' />
      </div>

      <div className={classes.popup}>
        <h4>
          {text}
        </h4>
        {image && <img src={image} alt="" />}
      </div>
    </div>
  )
}

export default AdvicePopup;