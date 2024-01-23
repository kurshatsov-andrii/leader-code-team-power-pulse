import{e as r,D as o,j as e}from"./index-6642b840.js";const $="#4fa94d",b={"aria-busy":!0,role:"progressbar"},x=r.div`
  display: ${a=>a.$visible?"flex":"none"};
`,m="http://www.w3.org/2000/svg",t=242.776657104492,y=1.6,u=o`
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
`;r.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${u} ${y}s linear infinite;
`;const k=o`
to {
   transform: rotate(360deg);
 }
`;r.svg`
  animation: ${k} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;r.polyline`
  stroke-width: ${a=>a.width}px;
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
`;const v=({wrapperStyle:a={},visible:s=!0,wrapperClass:n="",height:c=100,width:d=100,color:i=$,ariaLabel:l="three-circles-loading",outerCircleColor:p,innerCircleColor:h,middleCircleColor:f})=>e.jsx(x,{style:a,$visible:s,className:n,"data-testid":"three-circles-wrapper","aria-label":l,...b,children:e.jsxs("svg",{version:"1.1",height:`${c}`,width:`${d}`,xmlns:m,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:p||i,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:f||i,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:h||i,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),C=o`
to {
   stroke-dashoffset: 136;
 }
`;r.polygon`
  stroke-dasharray: 17;
  animation: ${C} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;r.svg`
  transform-origin: 50% 65%;
`;const w=()=>e.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:e.jsx(v,{height:50,width:50,color:"var(--orange-color)",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})});export{w as C};
