import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  transition:
    border-bottom 0.3s ease-out,
    background-color 0.3s ease-out;
  z-index: 10;
  border-bottom: 1px solid rgba(239, 237, 232, 0);
  background-color: rgba(239, 237, 232, 0);

  &.isAuth {
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  }

  &.fix {
    background-color: var(--black-color);
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  }

  @media screen and (max-width: 767px) {
    min-height: 60px;
  }

  @media screen and (min-width: 768px) {
    min-height: 84px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 375px;
    padding: 0px 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0px 96px;
  }
`;
