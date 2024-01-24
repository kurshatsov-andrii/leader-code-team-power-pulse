import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ButtonAdd,
  ButtonCancel,
  ButtonWrap,
  CaloriesAmount,
  CaloriesTitle,
  CaloriesWrap,
  GramsWrap,
  InputName,
  InputQuantity,
  LabelName,
  LabelQuantity,
  ProductForm,
  ProductFormWrapper,
} from './AddProductForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addDiaryProduct, getDiaryList } from '../../redux/diary/operations';
import { selectDiaryDate } from '../../redux/diary/selectors';

const AddProductForm = ({ id, productName, calories, onClick, onClickSuccess, transferCaloriesAmount }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState('');

  const caloriesAmount = Math.round((quantity * calories) / 100);

  const options = {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  const selectedCalendarDate = useSelector(selectDiaryDate);

  const productData = {
    productId: id,
    amount: quantity,
    date: selectedCalendarDate,
  };

  const onClickBtnAdd = (e) => {
    e.preventDefault();

    if (caloriesAmount <= 0) {
      setQuantity('');
      toast.error('Weight must be greater than 0', options);
      return;
    }

    dispatch(addDiaryProduct(productData))
      .unwrap()
      .then(() => dispatch(getDiaryList))
      .catch((error) => console.log(error));

    onClick();
    onClickSuccess();
    transferCaloriesAmount(caloriesAmount);
  };

  const onClickBtnCancel = () => {
    onClick();
  };

  return (
    <ProductFormWrapper>
      <ProductForm>
        <LabelName>
          <InputName type="text" value={productName} name="productName" disabled />
        </LabelName>
        <LabelQuantity>
          <InputQuantity type="number" value={quantity} name="productQuantity" onChange={(e) => setQuantity(e.target.value)} placeholder="0" />
          <GramsWrap>grams</GramsWrap>
        </LabelQuantity>
        <CaloriesWrap>
          <CaloriesTitle>Calories:</CaloriesTitle>
          <CaloriesAmount>{caloriesAmount}</CaloriesAmount>
        </CaloriesWrap>
        <ButtonWrap>
          <ButtonAdd type="submit" onClick={onClickBtnAdd}>
            Add to diary
          </ButtonAdd>
          <ButtonCancel type="button" onClick={onClickBtnCancel}>
            Cancel
          </ButtonCancel>
        </ButtonWrap>
      </ProductForm>
    </ProductFormWrapper>
  );
};
export default AddProductForm;
