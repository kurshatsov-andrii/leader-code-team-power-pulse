import { SignUp } from '../SignUpForm/SignUpForm.styled';
import { Form, Input } from 'components/Forms';
import { Button, ButtonsList } from 'components/Buttons';
import { Text } from 'components/Typography';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { clearAllInputs } from 'components/Forms/Form/FormValidation';

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 750);

    setTimeout(() => {
      clearAllInputs(e.target);
    }, 800);

    setTimeout(() => {
      alert('Липовая логинизация завершена )))');
    }, 1000);
  };

  return (
    <SignUp>
      <Form onSubmit={handleSubmit} isloading={isLoading}>
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" min="6" max="16" icon="password" required />
        <ButtonsList>
          <Button width="190" size="big">
            Sign In
          </Button>
          <Text color="rgba(239, 237, 232, 0.60)" size="small">
            Don`t have an account? <Link to="/signup">Sign Up</Link>
          </Text>
        </ButtonsList>
      </Form>
    </SignUp>
  );
};

export default SignInForm;
