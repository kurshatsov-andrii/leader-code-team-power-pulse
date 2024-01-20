import{u as r,j as i,b as j,d as w,r as o,B as k,e as A,f as S,i as T}from"./index-5c64609a.js";import{S as z}from"./Section-587f1029.js";import{T as h}from"./Text.styled-14b66b8c.js";import{F as s,T as U}from"./Fieldset-f62612d7.js";import{F as q}from"./Form-4f9b897f.js";import{I as t}from"./InputFile-df550c3b.js";import"./Fieldset.styled-fb7523c7.js";import{T as W,B as L,a as M}from"./TextContent-e53f9d99.js";import{T as u}from"./Text-c76187a1.js";import"./Form.styled-02cf0a19.js";import"./InputValidation-9c6085f6.js";const D=r.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  z-index: 1;
  gap: 64px;

  @media screen and (max-width: 1439px) {
    gap: 38px;
  }
`,E=({children:a})=>i.jsx(D,{children:a}),F=r.main`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1439px) {
    width: 100%;
    order: 2;
  }

  @media screen and (min-width: 1440px) {
    width: calc(60% - 64px);
    order: 1;
  }
`,P=({children:a})=>i.jsx(F,{children:a}),B=r.aside`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

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
`,I=r.div`
  display: block;
  width: 100%;
  max-width: 450px;
`,R=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  position: relative;
  margin-top: 30px;
  gap: 4px;
`,N=r.div`
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
`,g=r.div`
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
`,C=()=>{const a=j(),{profile:d}=w(x=>x.profile),[p,e]=o.useState("User Name"),[m,l]=o.useState(""),[v,n]=o.useState(!1);o.useEffect(()=>{d&&e(d.name)},[d]);const c=new FileReader;c.onloadend=()=>{l(c.result)};const b=async x=>{x.preventDefault();const y=x.target.files[0];c.readAsDataURL(y),n(!0);try{await a(A(y))}catch(f){f.response&&f.response.status===404&&l(null)}finally{n(!1)}};return i.jsx(B,{children:i.jsxs(I,{children:[i.jsx(q,{children:i.jsx(t,{type:"file",name:"avatar",isLoading:v,avatar:m,onChange:b})}),i.jsxs(R,{children:[i.jsx(h,{tag:"h3",size:"user",children:p}),i.jsx(u,{align:"center",color:"rgba(239, 237, 232, 0.30)",children:"User"})]}),i.jsxs(N,{children:[i.jsxs(g,{children:[i.jsx(u,{size:"small",icon:"knife",children:"Daily calorie intake"}),i.jsx(h,{size:"h5",children:"0"})]}),i.jsxs(g,{children:[i.jsx(u,{size:"small",icon:"dumbbell",children:"Daily physical activity"}),i.jsx(h,{size:"h5",children:"0 min"})]}),i.jsx(u,{size:"big",color:"rgba(239, 237, 232, 0.30)",icon:"alarm",children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),i.jsx(W,{justify:"flex-end",children:i.jsx(k,{})})]})})},H=()=>{const a=j(),[d,p]=o.useState(!1),{profile:e}=w(l=>l.profile);o.useEffect(()=>{a(S())},[a]);const m=async l=>{p(!0);const v=l.target,n={};new FormData(v).forEach((c,b)=>{n[b]=c});try{await a(T(n))}finally{p(!1)}};return i.jsxs(q,{onSubmit:m,isloading:d,children:[i.jsxs(s,{col:"2",colTablet:"2",colMobil:"1",children:[i.jsx(t,{type:"text",name:"name",label:"Name",value:e&&e.name?e.name:"",placeholder:"Name",required:!0}),i.jsx(t,{type:"email",name:"email",label:"Email",value:e&&e.email?e.email:"",placeholder:"E-mail",disabled:!0})]}),i.jsxs(s,{col:"4",colTablet:"4",colMobil:"2",children:[i.jsx(t,{type:"number",name:"height",label:"Height",placeholder:"0",min:"35",value:e&&e.height>0?e.height:"",required:!0}),i.jsx(t,{type:"number",name:"currentWeight",label:"Current Weight",placeholder:"0",min:"35",value:e&&e.currentWeight>0?e.currentWeight:"",required:!0}),i.jsx(t,{type:"number",name:"desiredWeight",label:"Desired Weight",placeholder:"0",min:"35",value:e&&e.desiredWeight>0?e.desiredWeight:"",required:!0}),i.jsx(t,{type:"date",name:"birthday",label:"Date of birth",value:e&&e.birthday?e.birthday.split("T")[0]:"",required:!0,icon:"calendar"})]}),i.jsxs(s,{col:"3",colTablet:"3",colMobil:"1",children:[i.jsxs(s,{label:"Blood",col:"auto",colTablet:"auto",colMobil:"auto",children:[i.jsx(t,{type:"radio",name:"blood",label:"1",value:"1",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===1?!0:void 0}),i.jsx(t,{type:"radio",name:"blood",label:"2",value:"2",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===2?!0:void 0}),i.jsx(t,{type:"radio",name:"blood",label:"3",value:"3",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===3?!0:void 0}),i.jsx(t,{type:"radio",name:"blood",label:"4",value:"4",required:e&&e.blood===0?"required":void 0,checked:e&&e.blood===4?!0:void 0})]}),i.jsxs(s,{label:"Sex",col:"auto",colTablet:"auto",colMobil:"auto",children:[i.jsx(t,{type:"radio",name:"sex",label:"Male",value:"male",required:e&&e.sex===""?"required":void 0,checked:e&&e.sex==="male"?!0:void 0}),i.jsx(t,{type:"radio",name:"sex",label:"Female",value:"female",required:e&&e.sex===""?"required":void 0,checked:e&&e.sex==="female"?!0:void 0})]})]}),i.jsxs(s,{label:"Activity level",col:"1",colTablet:"1",colMobil:"1",children:[i.jsx(t,{type:"radio",name:"levelActivity",label:"Sedentary lifestyle (little or no physical activity)",value:"1",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===1?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Light activity (light exercises/sports 1-3 days per week)",value:"2",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===2?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Moderately active (moderate exercises/sports 3-5 days per week)",value:"3",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===3?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Very active (intense exercises/sports 6-7 days per week)",value:"4",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===4?!0:void 0}),i.jsx(t,{type:"radio",name:"levelActivity",label:"Extremely active (very strenuous exercises/sports and physical work)",value:"5",required:e&&e.levelActivity===0?"required":void 0,checked:e&&e.levelActivity===5?!0:void 0})]}),i.jsx(L,{children:i.jsx(M,{width:"144",size:"big",children:"Save"})})]})},ee=()=>i.jsxs(z,{children:[i.jsx(U,{children:i.jsx(h,{tag:"h1",size:"h3",children:"Profile Settings"})}),i.jsxs(E,{children:[i.jsx(P,{children:i.jsx(H,{})}),i.jsx(C,{})]})]});export{ee as default};
