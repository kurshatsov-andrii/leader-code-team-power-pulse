import{u as i,j as e}from"./index-485a1890.js";const n=i.div`
  display: inline-flex;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 767px) {
    padding-top: 30px;
    margin-bottom: 400px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 10vh;
    margin-bottom: 400px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 14vh;
  }
`,o=({children:t})=>e.jsx(n,{children:t}),r=i.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  max-width: 100%;

  @media screen and (max-width: 767px) {
    position: absolute;
    width: 85%;
    right: 20px;
    bottom: 0px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    width: 70%;
    right: 20px;
    bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    right: 32px;
    bottom: 5%;
    width: 45%;
    max-width: 750px;
  }
`,p=i.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  &:first-child {
    justify-content: flex-start;
  }
`,d=i.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  border-radius: 12px;
  background: #303030;

  @media screen and (max-width: 767px) {
    width: 164px;
    padding: 14px 18px;
    gap: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    padding: 14px 24px;
    gap: 12px;
  }
`,s=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  border-radius: 12px;
  width: 170px;
  background: var(--orange-light-color);
  padding: 14px 28px;
  strong {
    width: 100%;
    &:after {
      content: 'cal';
      margin-left: 10px;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  @media screen and (max-width: 767px) {
    width: 120px;
    padding: 12px 20px;
  }
`,l=i.div`
  display: block;
  width: 100%;
  max-width: 364px;
  height: auto;
  form {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
  }
`,x=i.form`
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
`,c=i.label`
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
`,g=i.p`
  display: block;
  color: rgba(239, 237, 232, 0.6);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;
  margin-bottom: 4px;
`,h=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  color: inherit;
`,m=i.input`
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
`,f=i.div`
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
`;export{s as C,o as H,h as I,c as L,r as S,d as V,p as a,l as b,x as c,g as d,m as e,f};
