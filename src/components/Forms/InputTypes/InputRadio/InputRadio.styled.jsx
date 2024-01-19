import styled from 'styled-components';

export const RadioWrapper = styled.label`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Radio = styled.input`
  display: none;
  &:checked ~ {
    .mark-radio {
      border: 2px solid #ef8964;
      &:before {
        transform: scale(1);
      }
    }
    .mark-checkbox {
      border: 2px solid #ef8964;
      background: #ef8964;
      &:before {
        transform: scale(1) rotate(-48deg) translate(1px, -1px);
      }
    }
  }
`;

export const RadioLabel = styled.span`
  position: relative;
  padding: 2px;
  padding-left: 28px;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.3;
  opacity: 0.8;
  cursor: pointer;
  z-index: 2;
  transition: 0.2s;
  user-select: none;
  &:hover,
  &:focus {
    opacity: 1;
    ~ {
      .mark-radio,
      .mark-checkbox {
        border: 2px solid #ef8964;
      }
    }
  }
`;

export const Mark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid #636366;
  position: absolute;
  left: 0px;
  top: 1px;
  z-index: 1;
  transition: 0.2s;
  &.mark-radio {
    border-radius: 20px;
    &:before {
      content: '';
      display: block;
      position: relative;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      transition: 0.2s;
      background: #ef8964;
      transform: scale(0);
    }
  }
  &.mark-checkbox {
    border-radius: 4px;
    &:before {
      content: '';
      display: block;
      position: relative;
      width: 7px;
      height: 4px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transition: 0.2s;
      transform: scale(0) rotate(-48deg) translate(1px, -1px);
    }
  }
`;
