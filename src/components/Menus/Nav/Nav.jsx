import { NavLink } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';

const Nav = () => {
  const { menuClose } = useMenu();

  return (
    <ul>
      <li>
        <NavLink to="/diary" onClick={menuClose} activeclassname="active">
          Diary
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" onClick={menuClose} activeclassname="active">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/exercises" onClick={menuClose} activeclassname="active">
          Exercises
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
