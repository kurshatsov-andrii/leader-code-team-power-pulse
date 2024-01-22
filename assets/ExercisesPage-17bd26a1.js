import{u as o,N as x,b as h,j as e,F as m,L as u,e as f,G as k,a as b,r as d,O as w}from"./index-105832ed.js";import{d as a}from"./device-385ab3fc.js";import{T as j}from"./Text.styled-d2186859.js";const v=o.div`
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
`,L=o.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;
  height: 28px;
  @media (${a.tablet}) {
    margin-top: 0;
    margin-right: 32px;
  }
`,y=o.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,$=o(x)`
  background: transparent;
  color: rgba(239, 237, 232, 0.4);
  border: none;
  height: 28px;
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
`,B=()=>{const t=["Body parts","Muscles","Equipment"],n=h();return e.jsx(L,{children:t.map((i,s)=>e.jsx(y,{children:e.jsx($,{to:`/exercises/${i}`,onClick:()=>n(m(1)),children:i})},s))})},E="/leader-code-team-power-pulse/assets/waist-1x-7e099386.jpg",z="/leader-code-team-power-pulse/assets/waist-2x-034cb754.jpg",P=o.div`
  position: relative;
  top: 0;
  left: auto;
  width: 100%;
  min-height: 95%;
  background-repeat: no-repeat;
  overflow-y: hidden;
  z-index: 1;
  background-position: right center;
  background-size: auto 100%;
  @media (${a.desktop}) {
    background-image: url(${t=>t.backgrounds.desktop&&t.isActive?t.backgrounds.desktop:"none"});
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(${t=>t.backgrounds.desktopretina&&t.isActive?t.backgrounds.desktopretina:"none"});
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

  @media (${a.tablet}) {
    font-size: 32px;
    line-height: 44px;
  }
`;const M=o.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
  @media (${a.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-top: 72px;
    margin-bottom: 64px;
    gap: 0;
    justify-content: space-between;
  }
  @media (${a.desktop}) {
    margin-left: 110px;
    margin-right: 60px;
  }
`,N=o(u)`
  width: fit-content;
  background: transparent;
  position: absolute;
  padding: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(239, 237, 232, 0.4);
  font-size: 16px;
  line-height: 1.5;

  top: -30px;

  @media (${a.tablet}) {
    top: -46px;
  }
`,A=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...t,children:e.jsx("path",{d:"M8.5 14L2 7.5M2 7.5L8.5 1M2 7.5H15",stroke:"#EFEDE8",strokeOpacity:.4,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})});function S(){var r;const t=f(),{category:n="Body parts",subcategory:i}=k(),s=b(),[p,l]=d.useState("/exercise");return d.useEffect(()=>{var c;(c=s.state)!=null&&c.from&&l(s.state.from);const g=i?`${n}/${i}`:n;t(g,{replace:!0})},[t,n,i,(r=s.state)==null?void 0:r.from]),e.jsx(e.Fragment,{children:e.jsx(P,{isActive:!!i,backgrounds:{desktop:E,desktopretina:z},children:e.jsxs(v,{children:[e.jsxs(M,{children:[i&&e.jsxs(N,{to:p,children:[e.jsx(A,{})," Back"]}),e.jsx(j,{tag:"h1",size:"h3",children:i||"Exercises"}),e.jsx(B,{})]}),e.jsx(w,{})]})})})}export{S as default};
