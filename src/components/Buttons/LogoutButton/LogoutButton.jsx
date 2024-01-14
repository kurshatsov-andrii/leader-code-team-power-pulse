import Icon from '../../Icon/Icon';
import { Logout } from './LogoutButton.styled';

const LogoutButton = () => {
  return (
    <Logout onClick={() => alert('Logout тут будет')}>
      <span>Logout</span>
      <Icon name="logout" />
    </Logout>
  );
};

export default LogoutButton;
