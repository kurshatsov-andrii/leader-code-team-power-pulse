import{u as o,N as x,b as h,j as e,F as m,e as u,G as f,a as k,r as d,O as b}from"./index-1bdd8062.js";import{d as n}from"./device-385ab3fc.js";import{T as w}from"./Text.styled-9ae59979.js";const j=o.div`
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
`,v=o.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;
  height: 28px;
  @media (${n.tablet}) {
    margin-top: 0;
    margin-right: 32px;
  }
`,$=o.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,y=o(x)`
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
`,B=()=>{const t=["Body parts","Muscles","Equipment"],a=h();return e.jsx(v,{children:t.map((i,s)=>e.jsx($,{children:e.jsx(y,{to:`/exercises/${i}`,onClick:()=>a(m(1)),children:i})},s))})},L="/leader-code-team-power-pulse/assets/waist-1x-7e099386.jpg",E="/leader-code-team-power-pulse/assets/waist-2x-034cb754.jpg",z=o.div`
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
  @media (${n.desktop}) {
    background-image: url(${t=>t.$backgrounds.desktop&&t.$isActive?t.$backgrounds.desktop:"none"});
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(${t=>t.$backgrounds.desktopretina&&t.$isActive?t.$backgrounds.desktopretina:"none"});
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
`;const P=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 90px;
  margin-left: 20px;
  margin-bottom: 40px;
  @media (${n.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-top: 144px;
    margin-bottom: 64px;
    gap: 0;
    justify-content: space-between;
  }
  @media (${n.desktop}) {
    margin-left: 110px;
    margin-right: 60px;
  }
`,M=o.button`
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

  @media (${n.tablet}) {
    top: 102px;
  }
`,N=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...t,children:e.jsx("path",{d:"M8.5 14L2 7.5M2 7.5L8.5 1M2 7.5H15",stroke:"#EFEDE8",strokeOpacity:.4,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})});function O(){var r;const t=u(),{category:a="Body parts",subcategory:i}=f(),s=k(),[p,g]=d.useState("/exercise");return d.useEffect(()=>{var c;(c=s.state)!=null&&c.from&&g(s.state.from);const l=i?`${a}/${i}`:a;t(l,{replace:!0})},[t,a,i,(r=s.state)==null?void 0:r.from]),e.jsx(e.Fragment,{children:e.jsx(z,{$isActive:!!i,$backgrounds:{desktop:L,desktopretina:E},children:e.jsxs(j,{children:[e.jsxs(P,{children:[i&&e.jsxs(M,{to:p,children:[e.jsx(N,{})," Back"]}),e.jsx(w,{tag:"h1",size:"h3",children:i||"Exercises"}),e.jsx(B,{})]}),e.jsx(b,{})]})})})}export{O as default};
