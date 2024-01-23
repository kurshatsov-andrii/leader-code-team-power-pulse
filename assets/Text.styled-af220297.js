import{e as i,j as t}from"./index-1556e77a.js";const p=i.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${e=>e["data-width"]?e["data-width"]+"px":"100%"};
  position: relative;
  justify-content: ${e=>e["data-justify"]};
  align-items: center;
  align-content: flex-start;
  gap: ${e=>e["data-gap"]+"px"};
  opacity: ${e=>e.visibility==="true"?1:0};
  transition: opacity 0.6s ease-out;
`,d=i.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${e=>e["data-width"]?e["data-width"]+"px":"100%"};
  position: relative;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 32px;

  @media screen and (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
  }
`,s=i.span`
  display: inline-block;
  position: relative;
  font-family: 'RobotoMedium';
  font-weight: 500;

  &::first-letter {
    text-transform: capitalize;
  }

  span {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    z-index: 1;
    svg {
      position: absolute;
      width: 120%;
      z-index: -1;
    }
  }

  &.size_h1 {
    font-size: 70px;
    line-height: 1.1;
    letter-spacing: 0.7px;

    @media screen and (max-width: 767px) {
      font-size: 38px;
      line-height: 1.05263;
      letter-spacing: 0.38px;
    }

    @media screen and (min-width: 768px) {
      font-size: 70px;
      line-height: 1.1;
      letter-spacing: 0.7px;
    }
  }

  &.size_h2 {
    font-family: 'RobotoBold';
    font-weight: 700;
    letter-spacing: -1px;

    @media screen and (max-width: 767px) {
      font-size: 24px;
      line-height: 1;
    }

    @media screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 1.04167;
    }
  }

  &.size_h3 {
    font-family: 'RobotoBold';
    font-weight: 700;

    @media screen and (max-width: 767px) {
      font-size: 24px;
      line-height: 1.16667;
    }

    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 1.375;
    }
  }

  &.size_h4 {
    font-family: 'RobotoBold';
    font-style: normal;
    font-weight: 700;

    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 1.111111;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.333333;
    }
  }

  &.size_h5,
  &.size_h6 {
    font-family: 'RobotoBold';
    font-style: normal;
    font-weight: 700;

    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 1.111111;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.333333;
    }
  }

  &.size_error {
    @media screen and (max-width: 767px) {
      font-size: 66px;
      line-height: 1;
      letter-spacing: 0.66px;
    }

    @media screen and (min-width: 768px) {
      font-size: 160px;
      line-height: 0.93;
      letter-spacing: 1.6px;
    }
  }

  &.size_user {
    font-family: 'RobotoRegular';
    font-style: normal;
    font-weight: 400;

    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 1.111111;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.333333;
    }
  }
`,r=({tag:e,size:n,children:a})=>{const o=e||"strong";return t.jsx(o,{children:t.jsx(s,{className:`size_${n||"h1"}`,children:a})})},x=i.p`
  display: block;
  position: relative;
  font-family: inherit;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  white-space: pre-line;
  padding-left: ${e=>e["data-icon"]&&"36px"||"0px"};
  color: ${e=>e["data-color"]};
  text-align: ${e=>e["data-center"]==="center"?"center":"left"};
  svg {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  a {
    color: var(--white-color);
    border-bottom: 1px solid var(--white-color);
    transition: 0.3s;
    &:hover,
    &:focus {
      color: var(--orange-light-color);
      border-bottom: 1px solid var(--orange-light-color);
    }
  }

  @media screen and (max-width: 767px) {
    font-size: ${e=>e["data-size"]==="small"?"12px":"14px"};
    line-height: 1.2857;

    padding-left: ${e=>e["data-icon"]&&"28px"||"0px"};
    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${e=>e["data-size"]==="small"?"12px":"18px"};
    line-height: 1.5;
  }
`;export{r as T,p as a,x as b,d as c};
