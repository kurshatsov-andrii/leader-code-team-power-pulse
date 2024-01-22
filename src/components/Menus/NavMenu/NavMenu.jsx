import MediaQuery from 'react-responsive';
import { Nav } from 'components/Menus';
import { NavigationMenu } from './NavMenu.styled';
import { useSelector } from 'react-redux';

const NavMenu = () => {
  const birthday = useSelector((state) => state.profile.profile.birthday) || null;
  const isFilled = birthday ? true : false;
  return (
    <MediaQuery minWidth={1440}>
      {isFilled && (
        <NavigationMenu>
          <Nav />
        </NavigationMenu>
      )}
    </MediaQuery>
  );
};

export default NavMenu;
