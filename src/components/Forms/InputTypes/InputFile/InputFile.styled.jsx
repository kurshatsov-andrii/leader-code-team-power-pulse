import styled from 'styled-components';

export const File = styled.label`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 150px;
  height: 150px;
  border-radius: 150px;
  position: relative;
  background: none;
  cursor: pointer;
  color: var(--orange-color);
  > svg {
    z-index: 1;
    position: absolute;
    bottom: -14px;
    transition: 0.2s;
  }
  input {
    display: none;
  }
  > div,
  > div a {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    pointer-events: none;
  }
  &:hover,
  &:focus {
    color: var(--orange-light-color);
    > div a {
      border: 1px solid var(--orange-light-color);
    }
  }
`;
