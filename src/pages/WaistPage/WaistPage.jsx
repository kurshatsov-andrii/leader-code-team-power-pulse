//backgrounds
import desctop from '../../images/hero-1x.jpg';
import desctopretina from '../../images/hero-2x.jpg';
import tablet from '../../images/hero-tablet-1x.jpg';
import tabletretina from '../../images/hero-tablet-2x.jpg';
import mobil from '../../images/hero-mobile-1x.jpg';
import mobilretina from '../../images/hero-mobile-2x.jpg';

import Section from 'components/Section/Section';
import { Title } from 'components/Typography';

const WaistPage = () => {
  return (
    <Section
      backgrounds={{
        desctop,
        desctopretina,
        tablet,
        tabletretina,
        mobil,
        mobilretina,
      }}
    >
      <Title tag="h1" size="h3">
        Waist
      </Title>
    </Section>
  );
};

export default WaistPage;
