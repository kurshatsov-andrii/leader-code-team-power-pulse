import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../images/sprite.svg';

export const Header = () => {
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
