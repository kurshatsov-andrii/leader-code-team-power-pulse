import { useNavigate } from 'react-router';
import sprite from '../../images/sprite.svg';
import {
  Content,
  HomeBtn,
  LeftSide,
  Section,
  StyledLink,
  Svg,
  Text404,
  Title404,
} from './ErrorPage.styled';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate('/');
  };

  return (
    <Section>
      <StyledLink to="/">
        <Svg>
          <use href={`${sprite}#icon-logo-white`}></use>
        </Svg>
      </StyledLink>
      <LeftSide>
        <Content>
          <Title404>404</Title404>
          <Text404>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text404>
          <HomeBtn type="button" onClick={handleHomeBtn}>
            Go Home
          </HomeBtn>
        </Content>
      </LeftSide>
    </Section>
  );
};

export default ErrorPage;
