import{b as g,e as h,r as u,j as s,L as x,l as f,g as j,d as w}from"./index-9e1b2b0d.js";import{b as S,H as b}from"./SignUpForm.styled-ad59fa73.js";import{B as y,a as I,T}from"./TextContent-f93fe5da.js";import{T as L}from"./Text.styled-fcc3ccf8.js";import{T as i}from"./Text-382a4c20.js";import"./Fieldset.styled-7ebbc34a.js";/* empty css                         */import{F as U}from"./Form-9dd4d59c.js";import{I as a}from"./InputDate-0e274058.js";import"./InputValidation-9c6085f6.js";import"./index-42934379.js";import"./defineProperty-8501a314.js";const D=()=>{const t=g(),o=h(),[n,e]=u.useState(!1),l=async m=>{e(!0);const c=m.target,r={};new FormData(c).forEach((p,d)=>{r[d]=p});try{await t(f(r)),await t(j()),await t(w())}finally{e(!1),setTimeout(()=>{o("/diary")},10)}};return s.jsx(S,{children:s.jsxs(U,{onSubmit:l,isloading:n,children:[s.jsx(a,{type:"email",name:"email",placeholder:"Email",required:!0}),s.jsx(a,{type:"password",name:"password",placeholder:"Password",min:"6",max:"16",icon:"password",required:!0}),s.jsxs(y,{children:[s.jsx(I,{width:"190",size:"big",children:"Sign In"}),s.jsxs(i,{color:"rgba(239, 237, 232, 0.60)",size:"small",children:["Don`t have an account? ",s.jsx(x,{to:"/signup",children:"Sign Up"})]})]})]})})},R=()=>s.jsx(b,{children:s.jsxs(T,{width:"496",gap:"16",children:[s.jsx(L,{size:"h3",children:"Sign In"}),s.jsx(i,{color:"rgba(239, 237, 232, 0.30)",children:"Welcome! Please enter your credentials to login to the platform:"}),s.jsx(D,{})]})});export{R as default};
