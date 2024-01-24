import{e as d,j as e,a as A,f as B,r as a,B as C,h as I,i as R,g as H,c as V}from"./index-0a8fbc9a.js";import{S as G}from"./Section-0e3314b1.js";import{T as y}from"./Text.styled-f3f40cac.js";import{F as n,T as J}from"./Fieldset-68ff4121.js";import{F as L,a as K}from"./Form-fd53e7b2.js";import{I as t}from"./InputDate-7b46e797.js";import"./Fieldset.styled-faf51755.js";/* empty css                         */import{T as O,B as Q}from"./TextContent-fbf736f8.js";import{T as f}from"./Text-6abc0f03.js";import{B as X}from"./Button-86465238.js";import"./InputValidation-704be027.js";import"./index-30683d75.js";import"./defineProperty-8501a314.js";const Y=d.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  z-index: 1;
  gap: 64px;

  @media screen and (max-width: 1439px) {
    gap: 38px;
  }
`,Z=({children:l})=>e.jsx(Y,{children:l}),_=d.main`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 1439px) {
    width: 100%;
    order: 2;
  }

  @media screen and (min-width: 1440px) {
    width: calc(60% - 64px);
    order: 1;
  }
`,$=({children:l})=>e.jsx(_,{children:l}),ee=d.aside`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 1440px) {
    border-left: 1px solid rgba(239, 237, 232, 0.2);
    padding-left: 50px;
    width: 40%;
    order: 2;
  }

  @media screen and (max-width: 1439px) {
    width: 100%;
    order: 1;
    align-items: center;
  }
`,te=d.div`
  display: block;
  width: 100%;
  max-width: 450px;
`,ie=d.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  position: relative;
  margin-top: 30px;
  gap: 4px;
`,ae=d.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  position: relative;
  margin: 32px 0px;
  gap: 32px 0px;
  @media screen and (max-width: 767px) {
    gap: 20px 0px;
  }
`,W=d.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 48%;

  position: relative;
  padding: 14px;
  gap: 28px 0px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: var(--orange-color);
  @media screen and (max-width: 767px) {
    gap: 14px 0px;
    padding: 12px 10px;
  }
`,re=()=>{const l=A(),{userData:i}=B(r=>r.auth),[b,g]=a.useState("User Name"),[j,w]=a.useState("0"),[u,S]=a.useState("0"),[p,x]=a.useState(""),[m,h]=a.useState(!1);a.useEffect(()=>{i&&(g(i.name),w(i.targetTime),S(i.bmr))},[i]);const c=new FileReader;c.onloadend=()=>{x(c.result)};const q=async r=>{r.preventDefault();const v=r.target.files[0];c.readAsDataURL(v),h(!0);try{await l(I(v))}catch(o){o.response&&o.response.status===404&&x(null)}finally{h(!1)}};return e.jsx(ee,{children:e.jsxs(te,{children:[e.jsx(L,{children:e.jsx(t,{type:"file",name:"avatar",isLoading:m,avatar:p,onChange:q})}),e.jsxs(ie,{children:[e.jsx(y,{tag:"h3",size:"user",children:b}),e.jsx(f,{align:"center",color:"rgba(239, 237, 232, 0.30)",children:"User"})]}),e.jsxs(ae,{children:[e.jsxs(W,{children:[e.jsx(f,{size:"small",icon:"knife",children:"Daily calorie intake"}),e.jsx(y,{size:"h5",children:u})]}),e.jsxs(W,{children:[e.jsx(f,{size:"small",icon:"dumbbell",children:"Daily physical activity"}),e.jsxs(y,{size:"h5",children:[j," min"]})]}),e.jsx(f,{size:"big",color:"rgba(239, 237, 232, 0.30)",icon:"alarm",children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx(O,{justify:"flex-end",children:e.jsx(C,{})})]})})},se=()=>{const l=A(),{userData:i}=B(U=>U.auth),[b,g]=a.useState(""),[j,w]=a.useState(""),[u,S]=a.useState(""),[p,x]=a.useState(""),[m,h]=a.useState(""),[c,q]=a.useState(new Date),[r,v]=a.useState(0),[o,z]=a.useState(""),[s,E]=a.useState(0),[M,k]=a.useState(!1);a.useEffect(()=>{i&&(g(i.name),w(i.email),S(i.height),x(i.currentWeight),h(i.desiredWeight),q(i.birthday),v(i.blood),z(i.sex),E(i.levelActivity))},[i]);const P=async U=>{k(!0);const T=U.target,D={};new FormData(T).forEach((F,N)=>{D[N]=F});try{await l(R(D)),await l(H()),await l(V())}finally{K(T),k(!1)}};return e.jsxs(L,{onSubmit:P,isloading:M,children:[e.jsxs(n,{col:"2",colTablet:"2",colMobil:"1",children:[e.jsx(t,{type:"text",name:"name",label:"Name",value:b,placeholder:"Name",required:!0}),e.jsx(t,{type:"email",name:"email",label:"Email",value:j,placeholder:"E-mail",disabled:!0})]}),e.jsxs(n,{col:"4",colTablet:"4",colMobil:"2",children:[e.jsx(t,{type:"number",name:"height",label:"Height",placeholder:"0",min:"35",value:u===0?"":u,required:!0}),e.jsx(t,{type:"number",name:"currentWeight",label:"Current Weight",placeholder:"0",min:"35",value:p===0?"":p,required:!0}),e.jsx(t,{type:"number",name:"desiredWeight",label:"Desired Weight",placeholder:"0",min:"35",value:m===0?"":m,required:!0}),e.jsx(t,{type:"date",name:"birthday",label:"Date of birth",value:c,required:!0,icon:"calendar"})]}),e.jsxs(n,{col:"3",colTablet:"3",colMobil:"1",children:[e.jsxs(n,{label:"Blood",col:"auto",colTablet:"auto",colMobil:"auto",children:[e.jsx(t,{type:"radio",name:"blood",label:"1",value:"1",required:r===0?"required":void 0,checked:r===1?!0:void 0}),e.jsx(t,{type:"radio",name:"blood",label:"2",value:"2",required:r===0?"required":void 0,checked:r===2?!0:void 0}),e.jsx(t,{type:"radio",name:"blood",label:"3",value:"3",required:r===0?"required":void 0,checked:r===3?!0:void 0}),e.jsx(t,{type:"radio",name:"blood",label:"4",value:"4",required:r===0?"required":void 0,checked:r===4?!0:void 0})]}),e.jsxs(n,{label:"Sex",col:"auto",colTablet:"auto",colMobil:"auto",children:[e.jsx(t,{type:"radio",name:"sex",label:"Male",value:"male",required:o===""?"required":void 0,checked:o==="male"?!0:void 0}),e.jsx(t,{type:"radio",name:"sex",label:"Female",value:"female",required:o===""?"required":void 0,checked:o==="female"?!0:void 0})]})]}),e.jsxs(n,{label:"Activity level",col:"1",colTablet:"1",colMobil:"1",children:[e.jsx(t,{type:"radio",name:"levelActivity",label:"Sedentary lifestyle (little or no physical activity)",value:"1",required:s===0?"required":void 0,checked:s===1?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Light activity (light exercises/sports 1-3 days per week)",value:"2",required:s===0?"required":void 0,checked:s===2?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Moderately active (moderate exercises/sports 3-5 days per week)",value:"3",required:s===0?"required":void 0,checked:s===3?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Very active (intense exercises/sports 6-7 days per week)",value:"4",required:s===0?"required":void 0,checked:s===4?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Extremely active (very strenuous exercises/sports and physical work)",value:"5",required:s===0?"required":void 0,checked:s===5?!0:void 0})]}),e.jsx(Q,{children:e.jsx(X,{width:"144",size:"big",children:"Save"})})]})},ge=()=>e.jsxs(G,{children:[e.jsx(J,{children:e.jsx(y,{tag:"h1",size:"h3",children:"Profile Settings"})}),e.jsxs(Z,{children:[e.jsx($,{children:e.jsx(se,{})}),e.jsx(re,{})]})]});export{ge as default};
