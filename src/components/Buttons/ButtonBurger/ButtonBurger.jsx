import MediaQuery from 'react-responsive';
import { Burger } from './ButtonBurger.styled';
import { useMenu } from '../../../hooks/useMenu';
import { useSelector } from 'react-redux';

const ButtonBurger = () => {
  const { activeClass, menuToggle } = useMenu();
  const { profile } = useSelector((state) => state.profile);
  const isFilled = profile && Number(profile.blood) > 0 ? true : false;
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
