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
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Dairy
        </StyledLink>
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Products
        </StyledLink>
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Exercises
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
