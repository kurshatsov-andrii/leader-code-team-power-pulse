import MediaQuery from 'react-responsive';
import { Nav } from 'components/Menus';
import { NavigationMenu } from './NavMenu.styled';
import { useSelector } from 'react-redux';

const NavMenu = () => {
  const { profile } = useSelector((state) => state.profile);
  const isFilled = profile && Number(profile.blood) > 0 ? true : false;
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
