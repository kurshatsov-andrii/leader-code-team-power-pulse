import MediaQuery from 'react-responsive';
import { Burger } from './ButtonBurger.styled';
import { useMenu } from '../../../hooks/useMenu';
import { useSelector } from 'react-redux';

const ButtonBurger = () => {
  const { activeClass, menuToggle } = useMenu();
  const birthday = useSelector((state) => state.profile.profile.birthday) || null;
  const isFilled = birthday ? true : false;

  return (
    <MediaQuery maxWidth={1439}>
      {isFilled && (
        <Burger className={activeClass} onClick={menuToggle}>
          <hr />
        </Burger>
      )}
    </MediaQuery>
  );
};

export default ButtonBurger;
