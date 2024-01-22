import MediaQuery from 'react-responsive';
import { Burger } from './ButtonBurger.styled';
import { useMenu } from '../../../hooks/useMenu';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const ButtonBurger = () => {
  const { activeClass, menuToggle } = useMenu();
  const { userData } = useSelector((state) => state.auth);
  const [userBirthday, setUserBirthday] = useState(null);

  useEffect(() => {
    if (userData) {
      setUserBirthday(userData.birthday);
    }
  }, [userData]);

  return (
    <MediaQuery maxWidth={1439}>
      {userBirthday && (
        <Burger className={activeClass} onClick={menuToggle}>
          <hr />
        </Burger>
      )}
    </MediaQuery>
  );
};

export default ButtonBurger;
