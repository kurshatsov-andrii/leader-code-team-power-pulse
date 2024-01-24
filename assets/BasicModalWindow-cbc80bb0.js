import{j as e,e as s,r as C,t as a}from"./index-44d4326e.js";import{s as h}from"./sprite-7d58a2e8.js";const f=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",children:e.jsx("path",{d:"M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1",fill:"#E6533C",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})}),u=n=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...n,children:[e.jsx("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),e.jsx("path",{d:"M18.8234 8.7254C18.6138 8.47501 18.2403 8.44209 17.9899 8.65089L16.349 10.0294L15.5943 8.15964C15.5675 8.08946 15.5267 8.03054 15.4799 7.97856C15.3257 7.63546 15.058 7.34088 14.6889 7.1702C14.5286 7.09742 14.3631 7.05843 14.1977 7.03937C14.1613 7.02031 14.1283 6.99518 14.0868 6.98219L11.199 6.17729C11.037 6.13311 10.8741 6.1617 10.7407 6.23967C10.5821 6.29339 10.4461 6.40862 10.3811 6.57584L9.29378 9.37175C9.17594 9.67586 9.3267 10.019 9.63168 10.1385C9.93492 10.2564 10.2789 10.1047 10.3976 9.79975L11.316 7.43879L12.6312 7.80441C12.5991 7.8564 12.5645 7.90491 12.5385 7.96036L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7786L8.7488 15.214L5.31955 16.3611C4.9314 16.6513 4.84909 17.198 5.13587 17.5862C5.42439 17.9752 5.97282 18.0575 6.36011 17.7707L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2718C10.1576 16.2251 10.2078 16.1878 10.2416 16.1297L11.4633 14.0816L13.6319 15.9296L11.3116 18.5444C10.9919 18.9049 11.024 19.4602 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181 16.4425C15.6082 16.342 15.6619 16.2259 15.6983 16.1046C15.7199 16.0388 15.7199 15.9703 15.7251 15.9019C15.7251 15.8672 15.7381 15.836 15.7355 15.804C15.7277 15.5648 15.6307 15.3327 15.4349 15.1672L13.4395 13.4655C13.5834 13.3286 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007 11.2778C15.5181 11.3758 15.551 11.4719 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473 11.7111C15.856 11.7154 15.8664 11.7163 15.8768 11.7189C15.9305 11.7379 15.9851 11.7561 16.0414 11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.737C16.2459 11.7362 16.2467 11.7362 16.2467 11.7362C16.2649 11.7318 16.2831 11.7353 16.3013 11.7275C16.3975 11.6911 16.4711 11.6296 16.5344 11.5577L18.8893 9.55889C19.1397 9.34835 19.034 8.9758 18.8234 8.7254Z",fill:"#EFEDE8"}),e.jsx("path",{d:"M15.8458 7.30102C16.7574 7.30102 17.4963 6.56206 17.4963 5.65051C17.4963 4.73896 16.7574 4 15.8458 4C14.9343 4 14.1953 4.73896 14.1953 5.65051C14.1953 6.56206 14.9343 7.30102 15.8458 7.30102Z",fill:"#EFEDE8"})]}),x=s.div`
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
`,p=s.div`
  position: relative;
  border-radius: 12px;
  background-color: #10100f;
  border: 1px solid #efede833;
`,L=s.button`
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
`,g=s.svg`
  width: 100%;
  height: 100%;
  stroke: #efede8;
`,v=n=>{const{children:r,onClick:t}=n,d=()=>{t()},c=({currentTarget:o,target:i})=>{o===i&&t()};C.useEffect(()=>{const o=i=>{i.code==="Escape"&&t()};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t]);const l=e.jsx(x,{onClick:c,children:e.jsxs(p,{children:[e.jsx(L,{onClick:d,children:e.jsx(g,{children:e.jsx("use",{href:`${h}#icon-x`})})}),r]})});return a.createPortal(l,document.querySelector("#root_modal"))};export{f as A,v as B,u as E};
