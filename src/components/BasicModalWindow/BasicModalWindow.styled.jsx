import styled from 'styled-components';

export const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(04, 04, 04, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 12px;
  background-color: #10100f;
  border: 1px solid #efede833;
`;

export const ModalBtnClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  padding: 0;
  line-height: 0;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const ModalSvgClose = styled.svg`
  width: 100%;
  height: 100%;
  stroke: #efede8;
`;
