// import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import BasicModalWindow from '../../BasicModalWindow/BasicModalWindow';
import { AddButton, CardHeader, CardInfo, CardTitle, IconRunningFigure } from './ProductsItem.styled';
import { useState } from 'react';

export const ProductsItem = ({ weight, calories, category, title, isRecomended }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  //   const dispatch = useDispatch();

  //item id
  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      {isOpenModal && <BasicModalWindow></BasicModalWindow>}
      <div>
        <CardHeader>
          <p>DIET</p>
          <div>
            <div></div>
            <p>{isRecomended ? 'Recommended' : 'Not recommended'}</p>
          </div>
          <AddButton type="button" onClick={openModal}>
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
    </>
  );
};
