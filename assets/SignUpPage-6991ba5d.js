import{b as h,r as g,j as r,L as u,c as x,l as f,g as j,d as w}from"./index-9e1b2b0d.js";import{b as S,H as T}from"./SignUpForm.styled-ad59fa73.js";import{B as U,a as b,T as y}from"./TextContent-f93fe5da.js";import{T as I}from"./Text.styled-fcc3ccf8.js";import{T as m}from"./Text-382a4c20.js";import{F as L,c as D}from"./Form-9dd4d59c.js";import{I as a}from"./InputDate-0e274058.js";import"./Fieldset.styled-7ebbc34a.js";/* empty css                         */import"./InputValidation-9c6085f6.js";import"./index-42934379.js";import"./defineProperty-8501a314.js";const E=()=>{const s=h(),[p,i]=g.useState(!1),c=async d=>{i(!0);const o=d.target,e={},n={};new FormData(o).forEach((l,t)=>{e[t]=l,(t==="email"||t==="password")&&(n[t]=l)});try{await s(x(e)),await s(f(n))}finally{await s(j(e)),await s(w(e)),i(!1),setTimeout(()=>{D(o)},500)}};return r.jsx(S,{children:r.jsxs(L,{onSubmit:c,isloading:p,children:[r.jsx(a,{type:"text",name:"name",placeholder:"Name",min:"2",required:!0}),r.jsx(a,{type:"email",name:"email",placeholder:"Email",required:!0}),r.jsx(a,{type:"password",name:"password",placeholder:"Password",min:6,max:16,required:!0}),r.jsxs(U,{children:[r.jsx(b,{width:"190",size:"big",children:"Sign Up"}),r.jsxs(m,{color:"rgba(239, 237, 232, 0.60)",size:"small",children:["Already have an account? ",r.jsx(u,{to:"/signin",children:"Sign In"})]})]})]})})},G=()=>r.jsx(T,{children:r.jsxs(y,{width:"496",gap:"16",children:[r.jsx(I,{size:"h3",children:"Sign Up"}),r.jsx(m,{color:"rgba(239, 237, 232, 0.30)",children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),r.jsx(E,{})]})});export{G as default};
