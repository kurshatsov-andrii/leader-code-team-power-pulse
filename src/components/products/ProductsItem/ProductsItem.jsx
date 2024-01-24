import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { Arrow } from '../../Exercises/Arrow';
import { ExerciseIcon } from '../../Exercises/ExerciseIcon';
import AddProductForm from '../../AddProductForm/AddProductForm';
import AddProductSuccess from '../../AddProductSuccess/AddProductSuccess';
import BasicModalWindow from '../../BasicModalWindow/BasicModalWindow';
import {
  AddButton,
  CardHeader,
  CardHeaderWrapper,
  CardInfo,
  CardTitle,
  CategoryWrapper,
  DietWrapper,
  RecomendedWrapper,
} from './ProductsItem.styled';
import { useState } from 'react';

export const ProductsItem = ({ id, weight, calories, category, title, isRecomended }) => {
  const [isModalOpen, setOpenModal] = useState(false);
  const [showSuccessWindow, setShowSuccesWindow] = useState(false);

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  const toggleSuccessWindow = () => {
    setShowSuccesWindow((prevState) => !prevState);
  };

  const [consumedCalories, setConsumedCalories] = useState('');

  const getCaloriesAmount = (caloriesAmount) => {
    setConsumedCalories(caloriesAmount);
  };

  return (
    <>
      {isModalOpen && (
        <BasicModalWindow onClick={toggleModal}>
          <AddProductForm
            id={id}
            productName={title}
            calories={calories}
            onClick={toggleModal}
            onClickSuccess={toggleSuccessWindow}
            transferCaloriesAmount={getCaloriesAmount}
          />
        </BasicModalWindow>
      )}
      {showSuccessWindow && (
        <BasicModalWindow onClick={toggleSuccessWindow}>
          {<AddProductSuccess onClick={toggleSuccessWindow} calories={consumedCalories} />}{' '}
        </BasicModalWindow>
      )}
      <div>
        <CardHeader>
          <DietWrapper>
            <p>Diet</p>
          </DietWrapper>
          <CardHeaderWrapper>
            <StyleSheetManager shouldForwardProp={isPropValid}>
              <RecomendedWrapper recommendation={isRecomended}>
                <div></div>
                <p>{isRecomended ? 'Recommended' : 'Not recommended'}</p>
              </RecomendedWrapper>
            </StyleSheetManager>
            <AddButton type="button" onClick={toggleModal}>
              Add
              <Arrow />
            </AddButton>
          </CardHeaderWrapper>
        </CardHeader>
        <CardTitle>
          <div>
            <ExerciseIcon />
          </div>
          <p>{title}</p>
        </CardTitle>
        <CardInfo>
          <li>
            <p>
              Calories:<span>{calories}</span>
            </p>
          </li>
          <li>
            <CategoryWrapper>
              Category:<span>{category}</span>
            </CategoryWrapper>
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
