import{b as d,r as h,j as e,L as u,c as x}from"./index-5d03c4a8.js";import{b as g,H as f}from"./SignUpForm.styled-8ef7f061.js";import{B as j,a as w,T as y}from"./TextContent-00c54203.js";import{T as S}from"./Text.styled-9b178087.js";import{T as i}from"./Text-b0b97ebc.js";import{F as T,c as b}from"./Form-3a051878.js";import{I as r}from"./InputFile-f2e29502.js";import"./Fieldset.styled-78fa5d6f.js";import"./Form.styled-5ed7cc80.js";const I=()=>{const o=d(),[n,t]=h.useState(!1),l=async m=>{t(!0);const s=m.target,a={};new FormData(s).forEach((p,c)=>{a[c]=p});try{await o(x(a))}finally{t(!1),setTimeout(()=>{b(s)},310)}};return e.jsx(g,{children:e.jsxs(T,{onSubmit:l,isloading:n,children:[e.jsx(r,{type:"text",name:"name",placeholder:"Name",min:"2",required:!0}),e.jsx(r,{type:"email",name:"email",placeholder:"Email",required:!0}),e.jsx(r,{type:"password",name:"password",placeholder:"Password",min:6,max:16,required:!0}),e.jsxs(j,{children:[e.jsx(w,{width:"190",size:"big",children:"Sign Up"}),e.jsxs(i,{color:"rgba(239, 237, 232, 0.60)",size:"small",children:["Already have an account? ",e.jsx(u,{to:"/signin",children:"Sign In"})]})]})]})})},v=()=>e.jsx(f,{children:e.jsxs(y,{width:"496",gap:"16",children:[e.jsx(S,{size:"h3",children:"Sign Up"}),e.jsx(i,{color:"rgba(239, 237, 232, 0.30)",children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(I,{})]})});export{v as default};
