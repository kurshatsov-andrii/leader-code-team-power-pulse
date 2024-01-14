import { HeroContentWrapper, SignInForm } from 'components/HomePageComponents';
import { Text, TextContent, Title } from '../../components/Typography';

const SignInPage = () => {
  return (
    <HeroContentWrapper>
      <TextContent width="496" gap="16">
        <Title size="h3">Sign In</Title>
        <Text color="rgba(239, 237, 232, 0.30)">Welcome! Please enter your credentials to login to the platform:</Text>
        <SignInForm />
      </TextContent>
    </HeroContentWrapper>
  );
};

export default SignInPage;
