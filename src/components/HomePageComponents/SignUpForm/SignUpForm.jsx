import { SignUp } from './SignUpForm.styled';
import { Form, Input } from 'components/Forms';
import { Button, ButtonsList } from 'components/Buttons';
import { Text } from 'components/Typography';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <SignUp>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Name" icon="calory" min="2" required />
        <Input type="number" name="sdsdsdsd" placeholder="count" min="10" max="20" required />
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

export default SignUpForm;
