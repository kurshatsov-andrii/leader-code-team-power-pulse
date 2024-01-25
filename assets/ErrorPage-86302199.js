import{e as r,j as e}from"./index-1f0aebe6.js";import{S as i}from"./Section-6523b641.js";import{B as o}from"./Button-11c85080.js";import{T as a,B as n}from"./TextContent-400b6f52.js";import{T as s}from"./Text.styled-11537f6c.js";import{T as d}from"./Text-fc202585.js";import{d as p,a as c,t as h,b as m,m as l,c as x}from"./hero-mobile-2x-cfd6d0a7.js";const g=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  background: blue;
  min-width: 220px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -60%);

  @media screen and (max-width: 767px) {
    padding-right: 20px;
    width: 64%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-right: 32px;
    width: 54%;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 96px;
    width: 46%;
  }

  > * {
    z-index: 2;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 500%;
    height: 10000px;
    background: var(--orange-color);
    right: 0px;
    z-index: 0;
  }
`,u=()=>e.jsx(g,{children:e.jsxs(a,{gap:"20",children:[e.jsx(s,{tag:"h1",size:"error",children:"404"}),e.jsx(d,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(n,{children:e.jsx(o,{to:"/",border:"invers",width:"204",size:"big",children:"Go Home"})})]})}),y=()=>{const t={desctop:p,desctopretina:c,tablet:h,tabletretina:m,mobil:l,mobilretina:x};return e.jsx(e.Fragment,{children:e.jsx(i,{backgrounds:t,children:e.jsx(u,{})})})};export{y as default};
