// Зміни зміни

import Section from 'components/Section/Section';
import PageNotFound from 'components/PageNotFound/PageNotFound';

//backgrounds
import desctop from '../../images/hero-1x.jpg';
import desctopretina from '../../images/hero-2x.jpg';
import tablet from '../../images/hero-tablet-1x.jpg';
import tabletretina from '../../images/hero-tablet-2x.jpg';
import mobil from '../../images/hero-mobile-1x.jpg';
import mobilretina from '../../images/hero-mobile-2x.jpg';

const ErrorPage = () => {
  const errorPageBackgrounds = {
    desctop,
    desctopretina,
    tablet,
    tabletretina,
    mobil,
    mobilretina,
  };
  return (
    <>
      <Section backgrounds={errorPageBackgrounds}>
        <PageNotFound />
      </Section>
    </>
  );
};

export default ErrorPage;
