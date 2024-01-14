import Logo from '../Logo/Logo';
import { HeaderContainer, Container } from './Header.styled';
import { useAuth } from '../../hooks/useAuth.js';
import { LogoutButton } from '../Buttons';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderContainer className={isLoggedIn ? 'isAuth' : undefined}>
      <Container>
        <Logo />
        {isLoggedIn && (
          <div>
            <LogoutButton />
          </div>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
