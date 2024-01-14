import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  background: blue;
  min-width: 220px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -60%);

  @media screen and (max-width: 767px) {
    padding-right: 20px;
    width: 64%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-right: 32px;
    width: 54%;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 96px;
    width: 46%;
  }

  > * {
    z-index: 2;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 500%;
    height: 10000px;
    background: var(--orange-color);
    right: 0px;
    z-index: 0;
  }
`;
