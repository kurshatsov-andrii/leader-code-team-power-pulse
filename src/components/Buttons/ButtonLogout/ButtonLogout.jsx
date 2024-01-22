import { useDispatch } from 'react-redux';
import { logOutUser } from '../../../redux/auth/operations';
import Icon from '../../Icon/Icon';
import { Logout } from './ButtonLogout.styled';
import { bodyUnlock } from '../../../helpers/menuFunctions';

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    bodyUnlock();
    dispatch(logOutUser());
  };

  return (
    <Logout onClick={handleLogOut}>
      <span>Logout</span>
      <Icon name="logout" />
    </Logout>
  );
};

export default ButtonLogout;
