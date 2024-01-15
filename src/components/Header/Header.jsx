import Logo from '../Logo/Logo';
import { HeaderContainer, Container } from './Header.styled';
import { useAuth } from '../../hooks/useAuth.js';
import { LogoutButton } from '../Buttons';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/diary">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Dairy
        </StyledLink>
        <StyledLink to="/products">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Products
        </StyledLink>
        <StyledLink to="/exercises">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Exercises
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
