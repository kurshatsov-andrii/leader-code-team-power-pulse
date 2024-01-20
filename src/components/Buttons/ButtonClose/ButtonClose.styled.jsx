import styled from 'styled-components';

export const CloseBtn = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-size: 0;
  height: 24px;
  justify-content: center;
  position: relative;
  margin-left: auto;
  transform: rotate(0deg);
  transition: 0.3s;
  width: 24px;
  z-index: 3;
  &:hover,
  &:focus {
    transform: rotate(90deg);
  }
  &:before,
  &:after {
    background: var(--white-color);
    border-radius: 2px;
    content: '';
    height: 2px;
    pointer-events: none;
    position: absolute;
    width: 18px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
