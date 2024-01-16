import { useState } from 'react';
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

const AddProductForm = ({ productName, calories, onClose }) => {
  const [quantity, setQuantity] = useState(0);

  const caloriesAmount = Math.round((quantity * calories) / 100);

  return (
    <ProductFormWrapper>
      <ProductForm>
        <LabelName>
          <InputName type="text" value={productName} name="productName" disabled />
        </LabelName>
        <LabelQuantity>
          <InputQuantity type="number" value={quantity} name="productQuantity" onChange={(e) => setQuantity(e.target.value)} />
          <GramsWrap>grams</GramsWrap>
        </LabelQuantity>
        <CaloriesWrap>
          <CaloriesTitle>Calories:</CaloriesTitle>
          <CaloriesAmount>{caloriesAmount}</CaloriesAmount>
        </CaloriesWrap>
        <ButtonWrap>
          <ButtonAdd type="submit">Add to diary</ButtonAdd>
          <ButtonCancel type="button" onClick={onClose}>
            Cancel
          </ButtonCancel>
        </ButtonWrap>
      </ProductForm>
    </ProductFormWrapper>
  );
};
export default AddProductForm;
