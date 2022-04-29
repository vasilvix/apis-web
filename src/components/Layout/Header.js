import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <header className={classes.header} id="header">
      <div className={classes.container}>
        <div className={classes.row}>
          <a href="https://prin.ru" className={classes.logo}>
            <img src={logo} alt="АО ПРИН" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;