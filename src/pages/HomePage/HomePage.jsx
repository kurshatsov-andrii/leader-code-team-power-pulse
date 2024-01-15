//backgrounds
import desctop from '../../images/hero-1x.jpg';
import desctopretina from '../../images/hero-2x.jpg';
import tablet from '../../images/hero-tablet-1x.jpg';
import tabletretina from '../../images/hero-tablet-2x.jpg';
import mobil from '../../images/hero-mobile-1x.jpg';
import mobilretina from '../../images/hero-mobile-2x.jpg';

import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import Icon from 'components/Icon/Icon';
import { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Button, ButtonsList } from 'components/Buttons';
import { TextContent, Title } from 'components/Typography';
import { HeroContentWrapper, HeroSidebar } from 'components/HomePageComponents';

const MainPage = () => {
  const [isMainRoute, setIsMainRoute] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/signup' || location.pathname === '/signin') {
      setIsMainRoute(false);
      return;
    }
    setIsMainRoute(true);
  }, [location.pathname]);

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
      {isMainRoute && (
        <HeroContentWrapper>
          <TextContent width="634" gap="30">
            <Title tag="h1">
              Transforming your{' '}
              <span>
                body
                <Icon name="line" color="var(--orange-light-color)" />
              </span>{' '}
              shape with Power Pulse
            </Title>
            <ButtonsList>
              <Button to="/signup" width="190" size="big">
                Sign Up
              </Button>
              <Button to="/signin" width="190" size="big" border>
                Sign In
              </Button>
            </ButtonsList>
          </TextContent>
        </HeroContentWrapper>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <HeroSidebar />
    </Section>
  );
};

export default MainPage;
