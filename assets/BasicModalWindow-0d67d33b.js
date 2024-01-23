import{u as n,r as l,w as p,j as e}from"./index-2f6530e7.js";import{s as h}from"./sprite-09dcdad8.js";const x=n.div`
  height: 100vh;
  width: 100vw;
  background: rgba(04, 04, 04, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`,u=n.div`
  position: relative;
  border-radius: 12px;
  background-color: #10100f;
  border: 1px solid #efede833;
`,m=n.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  padding: 0;
  line-height: 0;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,f=n.svg`
  width: 100%;
  height: 100%;
  stroke: #efede8;
`,k=r=>{const{children:s,onClick:o}=r,d=()=>{o()},c=({currentTarget:t,target:i})=>{t===i&&o()};l.useEffect(()=>{const t=i=>{i.code==="Escape"&&o()};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[o]);const a=e.jsx(x,{onClick:c,children:e.jsxs(u,{children:[e.jsx(m,{onClick:d,children:e.jsx(f,{children:e.jsx("use",{href:`${h}#icon-x`})})}),s]})});return p.createPortal(a,document.querySelector("#root_modal"))};export{k as B};
