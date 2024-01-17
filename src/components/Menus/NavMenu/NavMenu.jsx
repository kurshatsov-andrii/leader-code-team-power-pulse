import MediaQuery from 'react-responsive';
import { Nav } from 'components/Menus';
import { NavigationMenu } from './NavMenu.styled';

const NavMenu = () => {
  return (
    <MediaQuery minWidth={1440}>
      <NavigationMenu>
        <Nav />
      </NavigationMenu>
    </MediaQuery>
  );
};

export default NavMenu;
