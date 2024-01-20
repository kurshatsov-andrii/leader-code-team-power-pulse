import { useSelector } from 'react-redux';
import { getCalories } from '../../redux/diary/selectors';

import sprite from '../../images/sprite.svg';
import avocado from '../../images/avocado.png';

import {
  AddProductSuccessWrap,
  BtnNext,
  Calories,
  CaloriesQuantity,
  DiaryLink,
  DiarySvg,
  DiaryText,
  ImgAvocado,
  Title,
} from './AddProductSuccess.styled';

const AddProductSuccess = ({ onClick }) => {
  const consumedCalories = useSelector(getCalories);

  return (
    <AddProductSuccessWrap>
      <ImgAvocado src={avocado} alt="avocado" loading="lazy" />
      <Title>Well done</Title>
      <Calories>
        Calories: <CaloriesQuantity>{consumedCalories}</CaloriesQuantity>
      </Calories>
      <BtnNext type="button" onClick={onClick}>
        Next product
      </BtnNext>
      <DiaryLink to="/diary">
        <DiaryText>To the diary</DiaryText>
        <DiarySvg>
          <use href={`${sprite}#icon-arrow`}></use>
        </DiarySvg>
      </DiaryLink>
    </AddProductSuccessWrap>
  );
};

export default AddProductSuccess;
