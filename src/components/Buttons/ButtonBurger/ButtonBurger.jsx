import MediaQuery from 'react-responsive';
import { Burger } from './ButtonBurger.styled';
import { useMenu } from '../../../hooks/useMenu';

const ButtonBurger = () => {
  const { activeClass, menuToggle } = useMenu();
  return (
    <MediaQuery maxWidth={1439}>
      <Burger className={activeClass} onClick={menuToggle}>
        <hr />
      </Burger>
    </MediaQuery>
  );
};

export default ButtonBurger;
