import{u as a,h,j as e,I as c,r as n,a as g,O as y}from"./index-7e1af324.js";import{d as k,a as C,t as v,b as w,m as S,c as T}from"./hero-mobile-2x-cfd6d0a7.js";import{S as L}from"./Section-19e6ffe5.js";import{B as M,a as p}from"./ButtonsList-0625d5af.js";import{T as d,a as z}from"./Text-f87f41c6.js";import{T as l}from"./Text.styled-8c7da544.js";import{S as B,a as f,V as I,C as N,H as E}from"./SignUpForm.styled-39bd888b.js";import"./InputSelecte.styled-a6425b8f.js";const H="#4fa94d",P={"aria-busy":!0,role:"progressbar"},R=a.div`
  display: ${r=>r.$visible?"flex":"none"};
`,V="http://www.w3.org/2000/svg",t=242.776657104492,X=1.6,O=h`
12.5% {
  stroke-dasharray: ${t*.14}px, ${t}px;
  stroke-dashoffset: -${t*.11}px;
}
43.75% {
  stroke-dasharray: ${t*.35}px, ${t}px;
  stroke-dashoffset: -${t*.35}px;
}
100% {
  stroke-dasharray: ${t*.01}px, ${t}px;
  stroke-dashoffset: -${t*.99}px;
}
`;a.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${O} ${X}s linear infinite;
`;const U=h`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${U} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
  stroke-width: ${r=>r.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const W=({wrapperStyle:r={},visible:i=!0,wrapperClass:s="",height:x=100,width:m=100,color:o=H,ariaLabel:$="three-circles-loading",outerCircleColor:u,innerCircleColor:b,middleCircleColor:j})=>e.jsx(R,{style:r,$visible:i,className:s,"data-testid":"three-circles-wrapper","aria-label":$,...P,children:e.jsxs("svg",{version:"1.1",height:`${x}`,width:`${m}`,xmlns:V,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:u||o,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:j||o,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:b||o,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),q=h`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${q} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const A=()=>e.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:e.jsx(W,{height:50,width:50,color:"var(--orange-color)",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}),D=()=>e.jsxs(B,{children:[e.jsx(f,{children:e.jsxs(I,{children:[e.jsx(c,{name:"playBig"}),e.jsxs(d,{gap:"0",children:[e.jsx(l,{size:"h5",children:"350+"}),e.jsx(z,{color:"rgba(239, 237, 232, 0.65)",children:"Video tutorial"})]})]})}),e.jsx(f,{children:e.jsx(N,{children:e.jsxs(d,{gap:"4",children:[e.jsx(c,{name:"calory"}),e.jsx(l,{size:"h2",children:"500"})]})})})]}),ee=()=>{const[r,i]=n.useState(!0),s=g();return n.useEffect(()=>{if(s.pathname==="/signup"||s.pathname==="/signin"){i(!1);return}i(!0)},[s.pathname]),e.jsxs(L,{backgrounds:{desctop:k,desctopretina:C,tablet:v,tabletretina:w,mobil:S,mobilretina:T},children:[r&&e.jsx(E,{children:e.jsxs(d,{width:"634",gap:"30",children:[e.jsxs(l,{tag:"h1",children:["Transforming your"," ",e.jsxs("span",{children:["body",e.jsx(c,{name:"line",color:"var(--orange-light-color)"})]})," ","shape with Power Pulse"]}),e.jsxs(M,{children:[e.jsx(p,{to:"/signup",width:"190",size:"big",children:"Sign Up"}),e.jsx(p,{to:"/signin",width:"190",size:"big",border:!0,children:"Sign In"})]})]})}),e.jsx(n.Suspense,{fallback:e.jsx(A,{}),children:e.jsx(y,{})}),e.jsx(D,{})]})};export{ee as default};
