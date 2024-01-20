import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import Icon from '../../Icon/Icon';
import { Logout } from './ButtonLogout.styled';

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Logout onClick={handleLogOut}>
      <span>Logout</span>
      <Icon name="logout" />
    </Logout>
  );
};

export default ButtonLogout;
