import { HeroContentWrapper, SignUpForm } from 'components/HomePageComponents';
import { Text, TextContent, Title } from '../../components/Typography';
const SignUpPage = () => {
  return (
    <HeroContentWrapper>
      <TextContent width="496" gap="16">
        <Title size="h3">Sign Up</Title>
        <Text color="rgba(239, 237, 232, 0.30)">
          Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.
        </Text>
        <SignUpForm />
      </TextContent>
    </HeroContentWrapper>
  );
};

export default SignUpPage;
