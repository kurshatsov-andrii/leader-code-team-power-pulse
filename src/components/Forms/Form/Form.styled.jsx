import styled from 'styled-components';

export const CustomForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  transition: 0.3s;

  @media screen and (min-width: 1440px) {
    gap: 20px 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    gap: 20px 20px;
  }
  @media screen and (max-width: 767px) {
    gap: 20px 20px;
  }
`;
