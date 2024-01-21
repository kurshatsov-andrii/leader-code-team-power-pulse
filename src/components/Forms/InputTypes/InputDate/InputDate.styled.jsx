import styled, { createGlobalStyle } from 'styled-components';

export const Label = styled.label`
  display: block;
  width: 100%;
  input {
    display: flex;
    width: 100%;
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

export const CalendarGlobalStyles = createGlobalStyle`

  .react-datepicker-popper {
    z-index: 100!important;
  }

  .react-datepicker-wrapper {
    position: relative;
    width:100%;
  }

  .react-datepicker__tab-loop__end{
    display: none;
  }

  .react-datepicker {
    font-family: "Roboto", sans-serif;
    font-size: 14px!important;
    background-color: #EF8964!important;
    color: #fff!important;
    border: 1px solid #EF8964!important;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: #EF8964!important;
    border-bottom: 1px solid rgba(255,255,255,0.3)!important;
    border-top-left-radius: 0.3rem;
    padding: 8px 0;
    position: relative;
  }


  .react-datepicker__header .react-datepicker__day-name, 
  .react-datepicker__header .react-datepicker__day, 
  .react-datepicker__header .react-datepicker__time-name {
    color: rgba(255,255,255,0.5)!important;
  }


  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, 
  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
    border-top: none;
    border-bottom-color: #EF8964!important
  }

  .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {
    border-bottom: none;
    border-top-color: #EF8964!important;
  }

  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    color: #fff!important;
  }

  .react-datepicker__day-name, .react-datepicker__day, 
  .react-datepicker__time-name {
    color: #fff!important;
  }

  .react-datepicker__day--outside-month{
    opacity: 0.5!important;
  }
  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    width: 30px!important;
    height: 30px!important;
    line-height: 30px!important;
  }
  .react-datepicker__day--selected, 
  .react-datepicker__day--in-selecting-range, 
  .react-datepicker__day--in-range, 
  .react-datepicker__month-text--selected, 
  .react-datepicker__month-text--in-selecting-range, 
  .react-datepicker__month-text--in-range, 
  .react-datepicker__quarter-text--selected, 
  .react-datepicker__quarter-text--in-selecting-range, 
  .react-datepicker__quarter-text--in-range, 
  .react-datepicker__year-text--selected, 
  .react-datepicker__year-text--in-selecting-range, 
  .react-datepicker__year-text--in-range {
    border-radius: 20px!important;
    background-color: #040404!important;
    color: #fff!important;
  }


.react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
  border-radius: 20px!important;
  background-color: #f5aa8f!important;
}

  .react-datepicker__day--keyboard-selected, 
  .react-datepicker__month-text--keyboard-selected, 
  .react-datepicker__quarter-text--keyboard-selected, 
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 20px!important;
    background-color: #f5aa8f!important;
    color: #fff!important;
  }

  .react-datepicker__year-read-view--down-arrow, 
  .react-datepicker__month-read-view--down-arrow, 
  .react-datepicker__month-year-read-view--down-arrow, 
  .react-datepicker__navigation-icon::before {
    border-color: #ffffff!important;
  }

`;
