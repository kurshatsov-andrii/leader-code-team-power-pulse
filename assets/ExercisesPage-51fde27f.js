import{j as t,e as o,N as x,a as h,E as m,L as u,d as f,F as k,u as b,r as d,O as w}from"./index-0324fbaf.js";import{T as v}from"./Text.styled-d6edde6d.js";import{d as n}from"./device-385ab3fc.js";const $=e=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...e,children:t.jsx("path",{d:"M8.5 14L2 7.5M2 7.5L8.5 1M2 7.5H15",stroke:"#EFEDE8",strokeOpacity:.4,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})}),j=o.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;
  height: 28px;
  @media (${n.tablet}) {
    margin-top: 0;
    margin-right: 32px;
  }
`,L=o.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,y=o(x)`
  background: transparent;
  color: rgba(239, 237, 232, 0.4);
  border: none;
  height: 28px;
  transition: 0.3s;
  &:hover {
    color: ${e=>e.theme.beigeColor};
  }
  &.active {
    color: #efede8;
    & {
      position: relative;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: #ef8964;
    }
  }
`,B=()=>{const e=["Body parts","Muscles","Equipment"],a=h();return t.jsx(j,{children:e.map((i,s)=>t.jsx(L,{children:t.jsx(y,{to:`/exercises/${i}`,onClick:()=>a(m(1)),children:i})},s))})},E="/leader-code-team-power-pulse/assets/waist-1x-7e099386.jpg",z="/leader-code-team-power-pulse/assets/waist-2x-034cb754.jpg",C=o.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,P=o.div`
  position: relative;
  top: 0;
  left: auto;
  width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  overflow-y: hidden;
  z-index: 1;
  background-position: right center;
  background-size: auto 100%;
  @media (${n.desktop}) {
    background-image: url(${e=>e.$backgrounds.desktop&&e.$isActive?e.$backgrounds.desktop:"none"});
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(${e=>e.$backgrounds.desktopretina&&e.$isActive?e.$backgrounds.desktopretina:"none"});
    }
  }
`;o.h1`
  color: #efede8;
  padding-top: 40px;
  padding-left: 20px;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  @media (${n.tablet}) {
    font-size: 32px;
    line-height: 44px;
  }
`;const M=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 90px;
  margin-left: 20px;
  margin-bottom: 20px;
  @media (${n.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-top: 144px;
    margin-bottom: 32px;
    gap: 0;
    justify-content: space-between;
  }
  @media (${n.desktop}) {
    margin-left: 110px;
    margin-right: 60px;
  }
`,N=o(u)`
  width: fit-content;
  background: transparent;
  padding: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(239, 237, 232, 0.4);
  font-size: 16px;
  line-height: 1.5;
  position: absolute;
  top: 68px;
  transition: 0.3s;

  &:hover {
    color: ${e=>e.theme.beigeColor};
    svg {
      & path {
        transition: 0.3s;
        stroke: ${e=>e.theme.beigeColor};
      }
    }
  }

  @media (${n.tablet}) {
    top: 102px;
  }
`;function S(){var r;const e=f(),{category:a="Body parts",subcategory:i}=k(),s=b(),[p,l]=d.useState("/exercise");return d.useEffect(()=>{var c;(c=s.state)!=null&&c.from&&l(s.state.from);const g=i?`${a}/${i}`:a;e(g,{replace:!0})},[e,a,i,(r=s.state)==null?void 0:r.from]),t.jsx(t.Fragment,{children:t.jsx(P,{$isActive:!!i,$backgrounds:{desktop:E,desktopretina:z},children:t.jsxs(C,{children:[t.jsxs(M,{children:[i&&t.jsxs(N,{to:p,children:[t.jsx($,{})," Back"]}),t.jsx(v,{tag:"h1",size:"h3",children:i||"Exercises"}),t.jsx(B,{})]}),t.jsx(w,{})]})})})}export{S as default};
