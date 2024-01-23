import styled from 'styled-components';

export const ProductFormWrapper = styled.div``;

export const ProductForm = styled.form`
  padding: 48px 12px;

  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`;
export const LabelName = styled.label`
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const InputName = styled.input`
  padding: 8px 14px;
  width: 257px;
  border: 1px solid #e6533c;
  border-radius: 12px;
  color: rgba(239, 237, 232, 0.3);
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 214px;
  }
`;

export const LabelQuantity = styled.label`
  position: relative;
  display: block;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-top: 0;
  }
`;

export const InputQuantity = styled.input`
  padding: 8px 14px;
  width: 257px;
  border: 1px solid #e6533c;
  border-radius: 12px;
  color: #efede8;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 125px;
  }
`;

export const GramsWrap = styled.p`
  position: absolute;
  top: 10px;
  right: 33px;
  margin: 0;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const CaloriesWrap = styled.div`
  margin-top: 16px;
`;

export const CaloriesTitle = styled.p`
  display: inline-block;
  margin: 0 4px 0 0;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const CaloriesAmount = styled.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const ButtonWrap = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const ButtonAdd = styled.button`
  padding: 12px 32px;
  margin-right: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;
  color: #efede8;
  background-color: #e6533c;
  border: none;
  border-radius: 12px;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #ef8964;
  }

  @media screen and (min-width: 375px) {
    margin-right: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
    margin-right: 16px;
  }
`;

export const ButtonCancel = styled.button`
  padding: 12px 36px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;
  color: #efede8;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  transition: border 250ms ease-out;

  &:hover {
    border: 1px solid #e6533c;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 40px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
