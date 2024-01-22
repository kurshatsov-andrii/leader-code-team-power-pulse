import { SignUp } from './SignUpForm.styled';
import { Form, Input } from 'components/Forms';
import { Button, ButtonsList } from 'components/Buttons';
import { Text } from 'components/Typography';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { clearAllInputs } from 'components/Forms/Form/FormValidation';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../../../redux/auth/operations';
import { refreshUser } from '../../../redux/auth/operations';
import { getUserProfile } from '../../../redux/userProfile/operations';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const form = e.target;
    const registerationData = {};
    const loginData = {};
    new FormData(form).forEach((value, key) => {
      registerationData[key] = value;
      if (key === 'email' || key === 'password') {
        loginData[key] = value;
      }
    });
    try {
      await dispatch(registerUser(registerationData));
      await dispatch(loginUser(loginData));
    } finally {
      await dispatch(getUserProfile(registerationData));
      await dispatch(refreshUser(registerationData));
      setIsLoading(false);
      setTimeout(() => {
        clearAllInputs(form);
      }, 500);
    }
  };

  return (
    <SignUp>
      <Form onSubmit={handleSubmit} isloading={isLoading}>
        <Input type="text" name="name" placeholder="Name" min="2" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" min={6} max={16} required />
        <ButtonsList>
          <Button width="190" size="big">
            Sign Up
          </Button>
          <Text color="rgba(239, 237, 232, 0.60)" size="small">
            Already have an account? <Link to="/signin">Sign In</Link>
          </Text>
        </ButtonsList>
      </Form>
    </SignUp>
  );
};

export default SignUpForm;
