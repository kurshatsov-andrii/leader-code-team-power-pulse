import{u as t,j as n}from"./index-5c64609a.js";const a=t.div`
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
`,p=({children:i})=>n.jsx(a,{children:i}),d=t.div`
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
`,x=t.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  &:first-child {
    justify-content: flex-start;
  }
`,o=t.div`
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
    width: 200px;
    padding: 14px 24px;
    gap: 12px;
  }
`,r=t.div`
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
`,s=t.div`
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
`;export{r as C,p as H,d as S,o as V,x as a,s as b};
