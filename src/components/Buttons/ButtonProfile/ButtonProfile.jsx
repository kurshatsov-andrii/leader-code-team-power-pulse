import { NavLink } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import { ButtonProfileElement } from './ButtonProfile.styled';

const ButtonProfile = () => {
  return (
    <ButtonProfileElement>
      <NavLink to="/profile" activeclassname="active">
        <Icon name="profile" />
      </NavLink>
    </ButtonProfileElement>
  );
};

export default ButtonProfile;
