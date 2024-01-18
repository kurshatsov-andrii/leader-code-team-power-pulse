// import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import AddProductForm from '../../AddProductForm/AddProductForm';
import AddProductSuccess from '../../AddProductSuccess/AddProductSuccess';
import BasicModalWindow from '../../BasicModalWindow/BasicModalWindow';
import { AddButton, CardHeader, CardInfo, CardTitle, IconRunningFigure } from './ProductsItem.styled';
import { useState } from 'react';

export const ProductsItem = ({ weight, calories, category, title, isRecomended }) => {
  const [isModalOpen, setOpenModal] = useState(false);
  const [showSuccessWindow, setShowSuccesWindow] = useState(false);

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  const toggleSuccessWindow = () => {
    setShowSuccesWindow((prevState) => !prevState);
  };

  //   const dispatch = useDispatch();

  //item id
  // const openModal = () => {
  //   setIsOpenModal(true);
  // };

  return (
    <>
      {isModalOpen && (
        <BasicModalWindow onClick={toggleModal}>
          <AddProductForm productName={title} calories={calories} onClick={toggleModal} onClickSuccess={toggleSuccessWindow} />
        </BasicModalWindow>
      )}
      {showSuccessWindow && <BasicModalWindow onClick={toggleSuccessWindow}>{<AddProductSuccess onClick={toggleSuccessWindow} />} </BasicModalWindow>}
      <div>
        <CardHeader>
          <p>DIET</p>
          <div>
            <div></div>
            <p>{isRecomended ? 'Recommended' : 'Not recommended'}</p>
          </div>
          <AddButton type="button" onClick={toggleModal}>
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
