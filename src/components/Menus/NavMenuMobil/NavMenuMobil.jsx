import MediaQuery from 'react-responsive';
import { useMenu } from '../../../hooks/useMenu';
import { Overlay, Menu } from '../../Menus/NavMenuMobil/NavMenuMobil.styled';
import { ButtonLogout, ButtonClose } from 'components/Buttons';
import { Nav } from '../../Menus';

const NavMenuMobil = () => {
  const { activeClass, menuClose, isMenuOpen } = useMenu();

  return (
    <MediaQuery maxWidth={1439}>
      {isMenuOpen && (
        <Overlay className={activeClass} onClick={menuClose}>
          <Menu className={activeClass} onClick={(e) => e.stopPropagation()}>
            <ButtonClose onClick={menuClose} />
            <Nav />
            <ButtonLogout />
          </Menu>
        </Overlay>
      )}
    </MediaQuery>
  );
};

export default NavMenuMobil;
//
