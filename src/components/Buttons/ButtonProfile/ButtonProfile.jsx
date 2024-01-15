import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import { ButtonProfileElement } from './ButtonProfile.styled';

const ButtonProfile = () => {
  return (
    <Link to="/profile">
      <ButtonProfileElement>
        <Icon name="profile" />
      </ButtonProfileElement>
    </Link>
  );
};

export default ButtonProfile;
