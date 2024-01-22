import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 1439px) {
    width: 100%;
    order: 2;
  }

  @media screen and (min-width: 1440px) {
    width: calc(60% - 64px);
    order: 1;
  }
`;
