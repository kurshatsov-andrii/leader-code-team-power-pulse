import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/diary">Diary</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/exercises">Exercises</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
