import{u as s,j as i,b as q,f as k,r as l,B as D,i as z,k as W}from"./index-67b672d6.js";import{S as L}from"./Section-016d6e39.js";import{T as m}from"./Text.styled-2266dd4b.js";import{F as o,T as M}from"./Fieldset-5200942b.js";import{F as S}from"./Form-c8a58505.js";import{I as t}from"./InputDate-80252b8b.js";import"./Fieldset.styled-4db743ee.js";import{T as U,B as F,a as P}from"./TextContent-c4ac4c39.js";import{T as x}from"./Text-e58bf81b.js";import"./Form.styled-9b4f29a7.js";import"./defineProperty-a444a65b.js";const B=s.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  z-index: 1;
  gap: 64px;

  @media screen and (max-width: 1439px) {
    gap: 38px;
  }
`,E=({children:a})=>i.jsx(B,{children:a}),I=s.main`
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
`,R=({children:a})=>i.jsx(I,{children:a}),N=s.aside`
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
`,C=s.div`
  display: block;
  width: 100%;
  max-width: 450px;
`,H=s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  position: relative;
  margin-top: 30px;
  gap: 4px;
`,V=s.div`
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
`,w=s.div`
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
`,G=()=>{const a=q(),{userData:r}=k(u=>u.auth),[n,e]=l.useState("User Name"),[h,d]=l.useState("0"),[v,c]=l.useState("0"),[b,p]=l.useState(""),[A,f]=l.useState(!1);l.useEffect(()=>{r&&(e(r.name),d(r.targetTime),c(r.bmr))},[r]);const y=new FileReader;y.onloadend=()=>{p(y.result)};const T=async u=>{u.preventDefault();const g=u.target.files[0];y.readAsDataURL(g),f(!0);try{await a(z(g))}catch(j){j.response&&j.response.status===404&&p(null)}finally{f(!1)}};return i.jsx(N,{children:i.jsxs(C,{children:[i.jsx(S,{children:i.jsx(t,{type:"file",name:"avatar",isLoading:A,avatar:b,onChange:T})}),i.jsxs(H,{children:[i.jsx(m,{tag:"h3",size:"user",children:n}),i.jsx(x,{align:"center",color:"rgba(239, 237, 232, 0.30)",children:"User"})]}),i.jsxs(V,{children:[i.jsxs(w,{children:[i.jsx(x,{size:"small",icon:"knife",children:"Daily calorie intake"}),i.jsx(m,{size:"h5",children:v})]}),i.jsxs(w,{children:[i.jsx(x,{size:"small",icon:"dumbbell",children:"Daily physical activity"}),i.jsxs(m,{size:"h5",children:[h," min"]})]}),i.jsx(x,{size:"big",color:"rgba(239, 237, 232, 0.30)",icon:"alarm",children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),i.jsx(U,{justify:"flex-end",children:i.jsx(D,{})})]})})},J=()=>{const a=q(),[r,n]=l.useState(!1),e=k(d=>d.auth.userData),h=async d=>{n(!0);const v=d.target,c={};new FormData(v).forEach((b,p)=>{c[p]=b});try{await a(W(c))}finally{n(!1)}};return i.jsxs(S,{onSubmit:h,isloading:r,children:[i.jsxs(o,{col:"2",colTablet:"2",colMobil:"1",children:[i.jsx(t,{type:"text",name:"name",label:"Name",value:e&&e.name?e.name:"",placeholder:"Name",required:!0}),i.jsx(t,{type:"email",name:"email",label:"Email",value:e&&e.email?e.email:"",placeholder:"E-mail",disabled:!0})]}),i.jsxs(o,{col:"4",colTablet:"4",colMobil:"2",children:[i.jsx(t,{type:"number",name:"height",label:"Height",placeholder:"0",min:"35",value:e&&e.height>0?e.height:"",required:!0}),i.jsx(t,{type:"number",name:"currentWeight",label:"Current Weight",placeholder:"0",min:"35",value:e&&e.currentWeight>0?e.currentWeight:"",required:!0}),i.jsx(t,{type:"number",name:"desiredWeight",label:"Desired Weight",placeholder:"0",min:"35",value:e&&e.desiredWeight>0?e.desiredWeight:"",required:!0}),i.jsx(t,{type:"date",name:"birthday",label:"Date of birth",value:e&&e.birthday?e.birthday:new Date,required:!0,icon:"calendar"})]}),i.jsxs(o,{col:"3",colTablet:"3",colMobil:"1",children:[i.jsxs(o,{label:"Blood",col:"auto",colTablet:"auto",colMobil:"auto",children:[i.jsx(t,{type:"radio",name:"blood",label:"1",value:"1",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===1?!0:void 0}),i.jsx(t,{type:"radio",name:"blood",label:"2",value:"2",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===2?!0:void 0}),i.jsx(t,{type:"radio",name:"blood",label:"3",value:"3",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===3?!0:void 0}),i.jsx(t,{type:"radio",name:"blood",label:"4",value:"4",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===4?!0:void 0})]}),i.jsxs(o,{label:"Sex",col:"auto",colTablet:"auto",colMobil:"auto",children:[i.jsx(t,{type:"radio",name:"sex",label:"Male",value:"male",required:e&&e.sex===""?"required":void 0,checked:e&&e.sex==="male"?!0:void 0}),i.jsx(t,{type:"radio",name:"sex",label:"Female",value:"female",required:e&&e.sex===""?"required":void 0,checked:e&&e.sex==="female"?!0:void 0})]})]}),i.jsxs(o,{label:"Activity level",col:"1",colTablet:"1",colMobil:"1",children:[i.jsx(t,{type:"radio",name:"levelActivity",label:"Sedentary lifestyle (little or no physical activity)",value:"1",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===1?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Light activity (light exercises/sports 1-3 days per week)",value:"2",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===2?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Moderately active (moderate exercises/sports 3-5 days per week)",value:"3",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===3?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Very active (intense exercises/sports 6-7 days per week)",value:"4",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===4?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Extremely active (very strenuous exercises/sports and physical work)",value:"5",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===5?!0:void 0})]}),i.jsx(F,{children:i.jsx(P,{width:"144",size:"big",children:"Save"})})]})},ae=()=>i.jsxs(L,{children:[i.jsx(M,{children:i.jsx(m,{tag:"h1",size:"h3",children:"Profile Settings"})}),i.jsxs(E,{children:[i.jsx(R,{children:i.jsx(J,{})}),i.jsx(G,{})]})]});export{ae as default};
