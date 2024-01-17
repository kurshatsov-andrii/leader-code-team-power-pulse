import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { AddButton, CardHeader, CardInfo, CardTitle, IconRunningFigure } from './ProductsItem.styled';

const openModal = () => {};

export const ProductsItem = ({ id, weight, calories, category, title, isRecomended }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <CardHeader>
        <p>DIET</p>
        <div>
          <div></div>
          <p>{isRecomended ? 'Recommended' : 'Not recommended'}</p>
        </div>
        <AddButton type="button" onClick={() => dispatch(openModal(id))}>
          Add
          <svg>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </AddButton>
      </CardHeader>
      <CardTitle>
        <IconRunningFigure>
          <svg>
            <use href={`${sprite}#icon-running-figure`}></use>
          </svg>
        </IconRunningFigure>
        <p>{title}</p>
      </CardTitle>
      <CardInfo>
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
      </CardInfo>
    </div>
  );
};
