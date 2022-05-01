import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg'

import Container from '../UI/Container';
import Row from '../UI/Row';

const Header = () => {
  return (
    <header className={classes.header} id="header">
      <Container>
        <Row>
          <a href="https://prin.ru" className={classes.logo}>
            <img src={logo} alt="АО ПРИН" />
          </a>
        </Row>
      </Container>
    </header>
  );
}

export default Header;