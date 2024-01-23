import styled from 'styled-components';

export const ProductsNotFoundContainer = styled.div`
  @media screen and (max-width: 374px) {
    width: 100%;
  }

  width: 335px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--normal-color);

  span {
    color: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    margin-top: 132px;

    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
