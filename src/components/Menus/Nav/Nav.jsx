import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';

const Nav = () => {
  const { menuClose } = useMenu();

  const handlePageChange = (e) => {
    // const href = e.target.href;
    // const currentPath = window.location.pathname;
    console.log(e.target);
    // console.log(currentPath);

    menuClose();
  };

  return (
    <ul>
      <li>
        <Link to="/diary" onClick={handlePageChange}>
          Diary
        </Link>
      </li>
      <li>
        <Link to="/products" onClick={handlePageChange}>
          Products
        </Link>
      </li>
      <li>
        <Link to="/exercises" onClick={handlePageChange}>
          Exercises
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
