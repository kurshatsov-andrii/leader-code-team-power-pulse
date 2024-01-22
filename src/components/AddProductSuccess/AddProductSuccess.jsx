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

const AddProductSuccess = ({ onClick, calories }) => {
  return (
    <AddProductSuccessWrap>
      <ImgAvocado src={avocado} alt="avocado" loading="lazy" />
      <Title>Well done</Title>
      <Calories>
        Calories: <CaloriesQuantity>{calories}</CaloriesQuantity>
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
