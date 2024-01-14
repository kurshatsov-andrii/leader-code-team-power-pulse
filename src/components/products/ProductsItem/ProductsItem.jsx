import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';

const openModal = () => {};

export const ProductsItem = ({ id, weight, calories, category, title, isRecommended }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>DIET</p>
        <div>
          <div></div>
          <p>{isRecommended ? 'Recommended' : 'Not recommended'}</p>
        </div>
        <button type="button" onClick={() => dispatch(openModal(id))}>
          Add
          <svg>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
      <div>
        <div>
          <svg>
            <use href={`${sprite}#icon-running-figure`}></use>
          </svg>
        </div>
        <p>{title}</p>
      </div>
      <ul>
        <li>
          <p>
            Calories:<span>{calories}</span>
          </p>
        </li>
        <li>
          <p>
            Category:<span>{category}</span>
          </p>
        </li>
        <li>
          <p>
            Weight:<span>{weight}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
