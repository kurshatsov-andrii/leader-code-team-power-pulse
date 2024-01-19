import MediaQuery from 'react-responsive';
import { MenuProvider } from '../../hooks/useMenu';
import Logo from '../Logo/Logo';
import { HeaderContainer, Container } from './Header.styled';
import { useAuth } from '../../hooks/useAuth.js';
import { useState, useEffect } from 'react';
import { ButtonBurger, ButtonLogout } from '../Buttons';
import { NavMenuMobil, NavMenu, UserMenu } from 'components/Menus';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const headerClasses = [isLoggedIn ? 'isAuth' : undefined, isScrolled ? 'fix' : undefined].join(' ');

  return (
    <HeaderContainer className={headerClasses}>
      <Container>
        <Logo />
        {isLoggedIn && (
          <>
            <MenuProvider>
              <NavMenu />
              <UserMenu />
              <ButtonBurger />
              <NavMenuMobil />
              <MediaQuery minWidth={1440}>
                <ButtonLogout />
              </MediaQuery>
            </MenuProvider>
          </>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
