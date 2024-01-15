//backgrounds
import desctop from '../../images/hero-1x.jpg';
import desctopretina from '../../images/hero-2x.jpg';
import tablet from '../../images/hero-tablet-1x.jpg';
import tabletretina from '../../images/hero-tablet-2x.jpg';
import mobil from '../../images/hero-mobile-1x.jpg';
import mobilretina from '../../images/hero-mobile-2x.jpg';

import Section from 'components/Section/Section';
import { Title } from 'components/Typography';

import { Input } from 'components/Forms';

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

      {/* НОВЫЕ ИНПУТЫ  ------------------------------------*/}

      <Input type="text" name="search" placeholder="Search..." icon="search" onChange={() => console.log('вызываем onChange')} required />

      <Input
        type="select"
        name="<имя>"
        placeholder="<Выбери чего-то там>"
        onChange={() => console.log('Чего-то происходит при выборе варианта')}
        options={['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6', 'Опция 7', 'Опция 8', 'Опция 9', 'Опция 10']}
      />

      {/* НОВЫЕ ИНПУТЫ  ------------------------------------*/}
    </Section>
  );
};

export default WaistPage;
