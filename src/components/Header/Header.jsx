import Logo from '../Logo/Logo';
import { HeaderContainer, Container } from './Header.styled';
import { useAuth } from '../../hooks/useAuth.js';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderContainer className={isLoggedIn ? 'isAuth' : undefined}>
      <Container>
        <Logo />
        {isLoggedIn && <p>sdsdsdsd</p>}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
