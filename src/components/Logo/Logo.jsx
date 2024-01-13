import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { LogoContainer } from './Logo.styled';

const Logo = () => {
  const [logoColor, setLogoColor] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/404') {
      setLogoColor('var(--white-color)');
      return;
    }
    setLogoColor('var(--orange-color)');
  }, [location.pathname]);

  return (
    <LogoContainer>
      <Link to="./">
        <Icon name="logo" color={logoColor} />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
