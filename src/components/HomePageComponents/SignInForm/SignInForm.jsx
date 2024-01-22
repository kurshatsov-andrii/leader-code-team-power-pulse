import { SignUp } from '../SignUpForm/SignUpForm.styled';
import { Form, Input } from 'components/Forms';
import { Button, ButtonsList } from 'components/Buttons';
import { Text } from 'components/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { clearAllInputs } from 'components/Forms/Form/FormValidation';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/auth/operations';
import { getUserProfile } from '../../../redux/userProfile/operations';
import { refreshUser } from '../../../redux/auth/operations';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const form = e.target;
    const loginData = {};
    new FormData(form).forEach((value, key) => {
      loginData[key] = value;
    });
    try {
      await dispatch(loginUser(loginData));
      await dispatch(getUserProfile());
      await dispatch(refreshUser());
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        navigate('/diary');
      }, 10);
    }
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
