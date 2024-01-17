import{u as i}from"./index-7e1af324.js";const o=i.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  transition: 0.3s;
  position: relative;
  &:before {
    content: '';
    opacity: ${t=>t["data-loading"]==="true"?1:0};
    visibility: ${t=>t["data-loading"]==="true"?"visible":"hidden"};
    pointer-events: ${t=>t["data-loading"]==="true"?"all":"none"};
    transition: 0.3s;
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
  }
  &:after {
    content: '';
    opacity: ${t=>t["data-loading"]==="true"?1:0};
    visibility: ${t=>t["data-loading"]==="true"?"visible":"hidden"};
    pointer-events: ${t=>t["data-loading"]==="true"?"all":"none"};
    transition: 0.3s;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-top: -20px;
    border-left: 4px solid var(--orange-color);
    border-top: 4px solid rgba(0, 0, 0, 0);
    border-right: 4px solid var(--orange-color);
    border-bottom: 4px solid rgba(0, 0, 0, 0);
    border-radius: 40px;
    z-index: 3;
    animation: spinner 0.8s linear infinite;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    gap: 20px 20px;
  }
  @media screen and (max-width: 767px) {
    gap: 20px 20px;
  }
`,r=i.label`
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
`,n=i.p`
  display: block;
  color: rgba(239, 237, 232, 0.6);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;
  margin-bottom: 4px;
`,a=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  color: inherit;
`,l=i.input`
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
    border: 1px solid var(--orange-color);
  }
`,p=i.div`
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
`,s=i.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
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
`,d=i.i`
  display: block;
  width: 12px;
  position: absolute;
  right: 20px;
`,c=i.div`
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  cursor: pointer;
  z-index: 2;
  pointer-events: all;
`,x=i.menu`
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
`;export{c as A,o as C,a as I,r as L,x as O,s as S,n as a,l as b,p as c,d};
