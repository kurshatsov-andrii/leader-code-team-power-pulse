import { ErrorContainer } from './PageNotFound.styled';
import { Button, ButtonsList } from 'components/Buttons';
import { Text, TextContent, Title } from '../Typography';

const PageNotFound = () => {
  return (
    <ErrorContainer>
      <TextContent gap="20">
        <Title tag="h1" size="error">
          404
        </Title>
        <Text>
          Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.
        </Text>
        <ButtonsList>
          <Button to="/" border="invers" width="204" size="big">
            Go Home
          </Button>
        </ButtonsList>
      </TextContent>
    </ErrorContainer>
  );
};

export default PageNotFound;
