import styled from 'styled-components';

export const Burger = styled.button`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  margin-left: 16px;
  cursor: pointer;
  hr,
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--orange-color);
    border-radius: 2px;
    transition: 0.4s ease-out;
  }
  hr {
    display: block;
    width: 16px;
    height: 2px;
    color: var(--orange-color);
    border: none;
    background: var(--orange-color);
    transform: translate(-4px, 0%);
    opacity: 1;
  }
  &:before {
    transform: translate(0px, -9px) rotate(0deg);
  }
  &:after {
    transform: translate(0px, 9px) rotate(0deg);
  }
  &.isOpen {
    hr {
      transform: translate(60%, 0%);
      opacity: 0;
    }
    &:before {
      transform: translate(0px, 0px) rotate(45deg);
    }
    &:after {
      transform: translate(0px, 0px) rotate(-45deg);
    }
  }
`;
