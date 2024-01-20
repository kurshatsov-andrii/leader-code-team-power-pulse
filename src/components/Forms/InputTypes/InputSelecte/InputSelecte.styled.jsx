import styled from 'styled-components';

export const SelectLabel = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  input {
    color: ${(props) => (props['data-selected'] === true ? `rgba(0,0,0,0)` : 'var(--white-color)')};
  }
  menu {
    transform: translate(0px, 10px);
    transition: 0.4s;
    opacity: 0;
    visibility: 0;
    pointer-events: none;
  }
  &.open {
    menu {
      transform: translate(0px, 0px);
      opacity: 1;
      visibility: 1;
      pointer-events: all;
    }
    i {
      transform: rotate(180deg);
    }
  }
  i {
    transition: 0.4s;
    transform: rotate(0deg);
  }
  em {
    display: inline-flex;
    justify-content: flex-start;
    padding-top: 4px;
    align-items: center;
    align-content: center;
    position: relative;
    gap: 4px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.12px;
    transition: 0.3s;
    svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
      margin: 0;
      padding: 0;
    }
  }
  &.invalid {
    em {
      color: var(--error-color) !important;
    }
    input {
      border: 1px solid var(--error-color) !important;
    }
  }
  &.valid {
    em {
      color: var(--success-color) !important;
    }
    input {
      border: 1px solid var(--success-color) !important;
    }
  }
  :hover {
    input {
      border: 1px solid var(--orange-color);
    }
  }
`;

export const SelectIcon = styled.i`
  display: block;
  width: 12px;
  position: absolute;
  right: 20px;
`;

export const Area = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 5px 14px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 12px;

  cursor: pointer;
  z-index: 2;
  pointer-events: all;
`;

export const Options = styled.menu`
  display: block;
  border-radius: 12px;
  z-index: 1;
  width: 100%;
  height: auto;
  min-height: 100px;
  position: absolute;
  top: calc(100% + 4px);
  left: 0px;
  background: #1c1c1c;
  color: inherit;
  padding: 14px;
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    max-height: 248px;
    overflow-x: hidden;

    //CUSTOM SCROLLBAR
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      width: 8px; /* scrollbar width */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(239, 237, 232, 0.1); /* color of thumb */
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0); /* track background */
      border-radius: 4px;
    }

    li {
      width: 100%;
      padding: 4px 0px;
      cursor: pointer;
      &:hover,
      &:focus {
        color: var(--orange-light-color);
      }
    }
  }
`;
