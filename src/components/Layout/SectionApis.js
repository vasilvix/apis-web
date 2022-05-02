import classes from './SectionApis.module.css';

import Container from '../UI/Container';
import Row from '../UI/Row';
import Apis from '../Apis/Apis';

const SectionApis = () => {
  return (
    <section className={classes['section-apis']} id="section-apis">
      <Container>
        <Row>
          <Apis />
        </Row>
      </Container>
    </section>
  );
}

export default SectionApis;