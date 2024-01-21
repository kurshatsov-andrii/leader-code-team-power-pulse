import{u as e,w as i}from"./index-cdfc87f0.js";e.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;i`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 9px 18px;
  background-color: #3e85f3;
    font-family: Inter;
    border-radius: 16px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;e.button`
  width: 195px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;const r=e.label`
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
`,a=e.p`
  display: block;
  color: rgba(239, 237, 232, 0.6);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;
  margin-bottom: 4px;
`,n=e.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  color: inherit;
`,l=e.input`
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
  padding-right: ${t=>t["data-icon"]?"48px":"14px"};
  opacity: ${t=>t.disabled?.5:1};
  pointer-events: ${t=>t.disabled?"none":"all"};
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
    border: ${t=>!t.disabled&&"1px solid var(--orange-color)"};
  }
`,c=e.div`
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
`,p=e.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  input {
    color: ${t=>t["data-selected"]===!0?"rgba(0,0,0,0)":"var(--white-color)"};
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
`,d=e.i`
  display: block;
  width: 12px;
  position: absolute;
  right: 20px;
`,s=e.div`
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
`,x=e.menu`
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
`,f=e.label`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`,h=e.input`
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
`,g=e.span`
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
`,b=e.div`
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
`,u=e.label`
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
`,m=e.fieldset`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  gap: ${t=>Number(t["data-gap"])+"px"};
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
`,w=e.legend`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  color: rgba(239, 237, 232, 0.5);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;export{s as A,m as F,n as I,r as L,b as M,x as O,f as R,p as S,w as a,a as b,l as c,c as d,d as e,h as f,g,u as h};
