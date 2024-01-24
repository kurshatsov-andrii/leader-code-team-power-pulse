import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
  }
`;

export const FilterLabel = styled.div`
  visibility: hidden;
  display: flex;
  height: 18px;
  padding-left: 1px;
  padding-right: 1px;
  align-items: center;
  position: absolute;
  right: 96px;
  top: 42px;

  p {
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    line-height: 1.28px;
  }

  @media screen and (min-width: 1440px) {
    visibility: visible;
  }
`;

export const InputContainer = styled.input`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 14px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--normal-color);
  background-color: transparent;
  color: var(--white-color);
  font-size: 14px;
  line-height: 1.28;
  transition: all 100ms linear;
  cursor: pointer;

  &::placeholder {
    color: var(--white-color);
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    width: 234px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ResetButton = styled.button`
  position: absolute;
  background-color: transparent;
  padding: 0;
  top: 14px;
  right: 40px;

  svg {
    width: 18px;
    height: 18px;
    stroke: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    top: 17px;
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 0;
  width: 18px;
  height: 18px;

  svg {
    transition: all 100ms linear;
    stroke: var(--white-color);
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus {
    svg {
      stroke: var(--hover-color);
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 17px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 374px) {
    justify-content: space-around;
  }
`;
