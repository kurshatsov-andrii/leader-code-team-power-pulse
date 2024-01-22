import{u as d,j as e,b as W,f as L,r as a,B as C,i as I,k as R,g as H,d as V}from"./index-6b6e08b5.js";import{S as G}from"./Section-f113a8ff.js";import{T as h}from"./Text.styled-c9017138.js";import{F as n,T as J}from"./Fieldset-8199dd6e.js";import{F as z}from"./Form-740fba66.js";import{I as t}from"./InputDate-8c76618a.js";import"./Fieldset.styled-50c6b427.js";/* empty css                         */import{T as K,B as O,a as Q}from"./TextContent-f57547c7.js";import{T as m}from"./Text-66567fae.js";import"./InputValidation-9c6085f6.js";import"./index-5b31cc82.js";import"./defineProperty-8501a314.js";const X=d.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  z-index: 1;
  gap: 64px;

  @media screen and (max-width: 1439px) {
    gap: 38px;
  }
`,Y=({children:l})=>e.jsx(X,{children:l}),Z=d.main`
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
`,_=({children:l})=>e.jsx(Z,{children:l}),$=d.aside`
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
`,ee=d.div`
  display: block;
  width: 100%;
  max-width: 450px;
`,te=d.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  position: relative;
  margin-top: 30px;
  gap: 4px;
`,ie=d.div`
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
`,D=d.div`
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
`,ae=()=>{const l=W(),{userData:i}=L(r=>r.auth),[v,f]=a.useState("User Name"),[b,y]=a.useState("0"),[g,j]=a.useState("0"),[w,u]=a.useState(""),[S,p]=a.useState(!1);a.useEffect(()=>{i&&(f(i.name),y(i.targetTime),j(i.bmr))},[i]);const c=new FileReader;c.onloadend=()=>{u(c.result)};const q=async r=>{r.preventDefault();const x=r.target.files[0];c.readAsDataURL(x),p(!0);try{await l(I(x))}catch(o){o.response&&o.response.status===404&&u(null)}finally{p(!1)}};return e.jsx($,{children:e.jsxs(ee,{children:[e.jsx(z,{children:e.jsx(t,{type:"file",name:"avatar",isLoading:S,avatar:w,onChange:q})}),e.jsxs(te,{children:[e.jsx(h,{tag:"h3",size:"user",children:v}),e.jsx(m,{align:"center",color:"rgba(239, 237, 232, 0.30)",children:"User"})]}),e.jsxs(ie,{children:[e.jsxs(D,{children:[e.jsx(m,{size:"small",icon:"knife",children:"Daily calorie intake"}),e.jsx(h,{size:"h5",children:g})]}),e.jsxs(D,{children:[e.jsx(m,{size:"small",icon:"dumbbell",children:"Daily physical activity"}),e.jsxs(h,{size:"h5",children:[b," min"]})]}),e.jsx(m,{size:"big",color:"rgba(239, 237, 232, 0.30)",icon:"alarm",children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx(K,{justify:"flex-end",children:e.jsx(C,{})})]})})},re=()=>{const l=W(),{userData:i}=L(U=>U.auth),[v,f]=a.useState(""),[b,y]=a.useState(""),[g,j]=a.useState(""),[w,u]=a.useState(""),[S,p]=a.useState(""),[c,q]=a.useState(new Date),[r,x]=a.useState(0),[o,A]=a.useState(""),[s,B]=a.useState(0),[E,k]=a.useState(!1);a.useEffect(()=>{i&&(f(i.name),y(i.email),j(i.height),u(i.currentWeight),p(i.desiredWeight),q(i.birthday),x(i.blood),A(i.sex),B(i.levelActivity))},[i]);const M=async U=>{k(!0);const P=U.target,T={};new FormData(P).forEach((F,N)=>{T[N]=F});try{await l(R(T)),await l(H()),await l(V())}finally{k(!1)}};return e.jsxs(z,{onSubmit:M,isloading:E,children:[e.jsxs(n,{col:"2",colTablet:"2",colMobil:"1",children:[e.jsx(t,{type:"text",name:"name",label:"Name",value:v,placeholder:"Name",required:!0}),e.jsx(t,{type:"email",name:"email",label:"Email",value:b,placeholder:"E-mail",disabled:!0})]}),e.jsxs(n,{col:"4",colTablet:"4",colMobil:"2",children:[e.jsx(t,{type:"number",name:"height",label:"Height",placeholder:"0",min:"35",value:g,required:!0}),e.jsx(t,{type:"number",name:"currentWeight",label:"Current Weight",placeholder:"0",min:"35",value:w,required:!0}),e.jsx(t,{type:"number",name:"desiredWeight",label:"Desired Weight",placeholder:"0",min:"35",value:S,required:!0}),e.jsx(t,{type:"date",name:"birthday",label:"Date of birth",value:c,required:!0,icon:"calendar"})]}),e.jsxs(n,{col:"3",colTablet:"3",colMobil:"1",children:[e.jsxs(n,{label:"Blood",col:"auto",colTablet:"auto",colMobil:"auto",children:[e.jsx(t,{type:"radio",name:"blood",label:"1",value:"1",required:r===0?"required":void 0,checked:r===1?!0:void 0}),e.jsx(t,{type:"radio",name:"blood",label:"2",value:"2",required:r===0?"required":void 0,checked:r===2?!0:void 0}),e.jsx(t,{type:"radio",name:"blood",label:"3",value:"3",required:r===0?"required":void 0,checked:r===3?!0:void 0}),e.jsx(t,{type:"radio",name:"blood",label:"4",value:"4",required:r===0?"required":void 0,checked:r===4?!0:void 0})]}),e.jsxs(n,{label:"Sex",col:"auto",colTablet:"auto",colMobil:"auto",children:[e.jsx(t,{type:"radio",name:"sex",label:"Male",value:"male",required:o===""?"required":void 0,checked:o==="male"?!0:void 0}),e.jsx(t,{type:"radio",name:"sex",label:"Female",value:"female",required:o===""?"required":void 0,checked:o==="female"?!0:void 0})]})]}),e.jsxs(n,{label:"Activity level",col:"1",colTablet:"1",colMobil:"1",children:[e.jsx(t,{type:"radio",name:"levelActivity",label:"Sedentary lifestyle (little or no physical activity)",value:"1",required:s===0?"required":void 0,checked:s===1?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Light activity (light exercises/sports 1-3 days per week)",value:"2",required:s===0?"required":void 0,checked:s===2?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Moderately active (moderate exercises/sports 3-5 days per week)",value:"3",required:s===0?"required":void 0,checked:s===3?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Very active (intense exercises/sports 6-7 days per week)",value:"4",required:s===0?"required":void 0,checked:s===4?!0:void 0}),e.jsx(t,{type:"radio",name:"levelActivity",label:"Extremely active (very strenuous exercises/sports and physical work)",value:"5",required:s===0?"required":void 0,checked:s===5?!0:void 0})]}),e.jsx(O,{children:e.jsx(Q,{width:"144",size:"big",children:"Save"})})]})},be=()=>e.jsxs(G,{children:[e.jsx(J,{children:e.jsx(h,{tag:"h1",size:"h3",children:"Profile Settings"})}),e.jsxs(Y,{children:[e.jsx(_,{children:e.jsx(re,{})}),e.jsx(ae,{})]})]});export{be as default};
