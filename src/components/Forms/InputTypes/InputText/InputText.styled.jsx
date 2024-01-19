import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  width: 100%;
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
      color: var(--error-color);
    }
    input {
      border: 1px solid var(--error-color);
    }
  }
  &.valid {
    em {
      color: var(--success-color);
    }
    input {
      border: 1px solid var(--success-color);
    }
  }
`;

export const LabelText = styled.p`
  display: block;
  color: rgba(239, 237, 232, 0.6);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  color: inherit;
`;

export const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  color: inherit;
  background: var(--black);
  border-radius: 12px;
  height: 52px;
  padding-left: 14px;
  padding-right: ${(props) => (props['data-icon'] ? `48px` : '14px')};
  opacity: ${(props) => (props['disabled'] ? 0.5 : 1)};
  pointer-events: ${(props) => (props['disabled'] ? 'none' : 'all')};
  font-size: 16px;
  line-height: 1;
  user-select: none;
  outline: none;
  width: 100%;
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: 0.3s;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &::placeholder {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    opacity: 0.6;
    transition: 0.3s ease-out;
  }
  &:focus {
    border: 1px solid var(--orange-color);
    &::placeholder {
      opacity: 0;
    }
  }
  &:hover {
    /* border: 1px solid var(--orange-color); */
    border: ${(props) => !props['disabled'] && '1px solid var(--orange-color)'};
  }
`;

export const InputIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  right: 14px;
  width: 20px;
  height: 20px;
  svg {
    width: auto;
    height: 100%;
    fill: currentColor;
    margin: 0;
    padding: 0;
  }
`;
