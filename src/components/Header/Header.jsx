import MediaQuery from 'react-responsive';
import { MenuProvider } from '../../hooks/useMenu';
import Logo from '../Logo/Logo';
import { HeaderContainer, Container } from './Header.styled';
import { useAuth } from '../../hooks/useAuth.js';
import { ButtonBurger, ButtonLogout } from '../Buttons';
import { NavMenuMobil, NavMenu, UserMenu } from 'components/Menus';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer className={isLoggedIn ? 'isAuth' : undefined}>
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
