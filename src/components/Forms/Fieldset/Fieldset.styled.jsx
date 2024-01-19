import styled from 'styled-components';

export const Fields = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => Number(props['data-gap']) + 'px'};
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  em {
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
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

  @media screen and (max-width: 767px) {
    &.col_automob > label,
    &.col_automob > fieldset {
      width: auto;
    }
    &.col_1mob > label,
    &.col_1mob > fieldset {
      width: 100%;
    }
    &.col_2mob > label,
    &.col_2mob > fieldset {
      width: calc((100% - 14px) / 2);
    }
    &.col_3mob > label,
    &.col_3mob > fieldset {
      width: calc((100% - (14px * 2)) / 3);
    }
    &.col_4mob > label,
    &.col_4mob > fieldset {
      width: calc((100% - (14px * 3)) / 4);
    }
    &.col_5mob > label,
    &.col_5mob > fieldset {
      width: calc((100% - (14px * 4)) / 5);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    &.col_autotab > label,
    &.col_autotab > fieldset {
      width: auto;
    }
    &.col_1tab > label,
    &.col_1tab > fieldset {
      width: 100%;
    }
    &.col_2tab > label,
    &.col_2tab > fieldset {
      width: calc((100% - 14px) / 2);
    }
    &.col_3tab > label,
    &.col_3tab > fieldset {
      width: calc((100% - (14px * 2)) / 3);
    }
    &.col_4tab > label,
    &.col_4tab > fieldset {
      width: calc((100% - (14px * 3)) / 4);
    }
    &.col_5tab > label,
    &.col_5tab > fieldset {
      width: calc((100% - (14px * 4)) / 5);
    }
  }

  @media screen and (min-width: 1440px) {
    &.col_auto > label,
    &.col_auto > fieldset {
      width: auto;
    }
    &.col_1 > label,
    &.col_1 > fieldset {
      width: 100%;
    }
    &.col_2 > label,
    &.col_2 > fieldset {
      width: calc((100% - 14px) / 2);
    }
    &.col_3 > label,
    &.col_3 > fieldset {
      width: calc((100% - (14px * 2)) / 3);
    }
    &.col_4 > label,
    &.col_4 > fieldset {
      width: calc((100% - (14px * 3)) / 4);
    }
    &.col_5 > label,
    &.col_5 > fieldset {
      width: calc((100% - (14px * 4)) / 5);
    }
  }
`;

export const FieldsLabel = styled.legend`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  color: rgba(239, 237, 232, 0.5);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;
