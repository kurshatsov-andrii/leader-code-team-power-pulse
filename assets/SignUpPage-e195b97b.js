import{b as d,r as h,j as e,L as u,c as x}from"./index-8dd05b50.js";import{b as g,H as f}from"./SignUpForm.styled-f72f56e0.js";import{a as i,T as j}from"./Text-923eee50.js";import{T as w}from"./Text.styled-6f4f5f4c.js";import{F as y,I as s,c as S}from"./InputText-cc84f5a1.js";import"./InputText.styled-a8b7ebb5.js";import{B as T,a as b}from"./ButtonsList-05ff8fc1.js";const I=()=>{const o=d(),[n,r]=h.useState(!1),l=async m=>{r(!0);const t=m.target,a={};new FormData(t).forEach((c,p)=>{a[p]=c});try{await o(x(a))}finally{r(!1),setTimeout(()=>{S(t)},310)}};return e.jsx(g,{children:e.jsxs(y,{onSubmit:l,isloading:n,children:[e.jsx(s,{type:"text",name:"name",placeholder:"Name",min:"2",required:!0}),e.jsx(s,{type:"email",name:"email",placeholder:"Email",required:!0}),e.jsx(s,{type:"password",name:"password",placeholder:"Password",min:"6",max:"16",icon:"password",required:!0}),e.jsxs(T,{children:[e.jsx(b,{width:"190",size:"big",children:"Sign In"}),e.jsxs(i,{color:"rgba(239, 237, 232, 0.60)",size:"small",children:["Already have an account? ",e.jsx(u,{to:"/signin",children:"Sign In"})]})]})]})})},D=()=>e.jsx(f,{children:e.jsxs(j,{width:"496",gap:"16",children:[e.jsx(w,{size:"h3",children:"Sign Up"}),e.jsx(i,{color:"rgba(239, 237, 232, 0.30)",children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(I,{})]})});export{D as default};
