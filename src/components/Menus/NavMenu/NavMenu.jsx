import MediaQuery from 'react-responsive';
import { Nav } from 'components/Menus';
import { NavigationMenu } from './NavMenu.styled';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const NavMenu = () => {
  const { userData } = useSelector((state) => state.auth);
  const [userBirthday, setUserBirthday] = useState(null);

  useEffect(() => {
    if (userData) {
      setUserBirthday(userData.birthday);
    }
  }, [userData]);

  return (
    <MediaQuery minWidth={1440}>
      {userBirthday && (
        <NavigationMenu>
          <Nav />
        </NavigationMenu>
      )}
    </MediaQuery>
  );
};

export default NavMenu;
