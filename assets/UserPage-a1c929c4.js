import{j as e,e as u,a as L,f as T,r as i,B as N,h as I,i as R,g as M,c as H}from"./index-8a3a50d9.js";import{S as V}from"./Section-e5fc9547.js";import{a as O,T as S}from"./Text.styled-b7fc2dcd.js";import{F as A,a as G}from"./Form-a5e7ad1a.js";import{I as a}from"./InputDate-514e74c5.js";import{F as J,a as K}from"./Fieldset.styled-6a51245f.js";/* empty css                         */import{T as Q,B as X}from"./TextContent-ee517050.js";import{T as w}from"./Text-29c48f98.js";import{B as Y}from"./Button-0bbdb877.js";import"./index-1ca6ec82.js";import"./defineProperty-179e1ab7.js";const Z=({width:r,justify:t="flex-start",gap:l="20",children:o})=>e.jsx(O,{"data-width":r,"data-justify":t,"data-gap":l,children:o}),x=({label:r,col:t="auto",colTablet:l="1",colMobil:o="1",gap:m="14",children:h})=>{const n={col_auto:t==="auto",col_1:t==="1",col_2:t==="2",col_3:t==="3",col_4:t==="4",col_5:t==="5",col_autotab:t==="auto",col_1tab:l==="1",col_2tab:l==="2",col_3tab:l==="3",col_4tab:l==="4",col_5tab:l==="5",col_automob:t==="auto",col_1mob:o==="1",col_2mob:o==="2",col_3mob:o==="3",col_4mob:o==="4",col_5mob:o==="5"},v=Object.keys(n).filter(p=>n[p]).join(" ");return e.jsxs(J,{"data-col":t,"data-coltablet":l,"data-colmobil":o,"data-gap":m,className:v,children:[r&&e.jsx(K,{children:r}),h]})},$=u.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  z-index: 1;
  gap: 64px;

  @media screen and (max-width: 1439px) {
    gap: 38px;
  }
`,ee=({children:r})=>e.jsx($,{children:r}),te=u.main`
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
`,ae=({children:r})=>e.jsx(te,{children:r}),ie=u.aside`
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
`,re=u.div`
  display: block;
  width: 100%;
  max-width: 450px;
`,se=u.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  position: relative;
  margin-top: 30px;
  gap: 4px;
`,le=u.div`
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
`,W=u.div`
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
`,oe=()=>{const r=L(),{userData:t}=T(s=>s.auth),[l,o]=i.useState("User Name"),[m,h]=i.useState("0"),[n,v]=i.useState("0"),[p,b]=i.useState(""),[y,g]=i.useState(!1);i.useEffect(()=>{t&&(o(t.name),h(t.targetTime),v(t.bmr))},[t]);const f=new FileReader;f.onloadend=()=>{b(f.result)};const q=async s=>{s.preventDefault();const j=s.target.files[0];f.readAsDataURL(j),g(!0);try{await r(I(j))}catch(c){c.response&&c.response.status===404&&b(null)}finally{g(!1)}};return e.jsx(ie,{children:e.jsxs(re,{children:[e.jsx(A,{children:e.jsx(a,{type:"file",name:"avatar",isLoading:y,avatar:p,onChange:q})}),e.jsxs(se,{children:[e.jsx(S,{tag:"h3",size:"user",children:l}),e.jsx(w,{align:"center",color:"rgba(239, 237, 232, 0.30)",children:"User"})]}),e.jsxs(le,{children:[e.jsxs(W,{children:[e.jsx(w,{size:"small",icon:"knife",children:"Daily calorie intake"}),e.jsx(S,{size:"h5",children:n})]}),e.jsxs(W,{children:[e.jsx(w,{size:"small",icon:"dumbbell",children:"Daily physical activity"}),e.jsxs(S,{size:"h5",children:[m," min"]})]}),e.jsx(w,{size:"big",color:"rgba(239, 237, 232, 0.30)",icon:"alarm",children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx(Q,{justify:"flex-end",children:e.jsx(N,{})})]})})},de=()=>{const r=L(),{userData:t}=T(U=>U.auth),[l,o]=i.useState(""),[m,h]=i.useState(""),[n,v]=i.useState(""),[p,b]=i.useState(""),[y,g]=i.useState(""),[f,q]=i.useState(new Date),[s,j]=i.useState(0),[c,B]=i.useState(""),[d,z]=i.useState(0),[E,k]=i.useState(!1);i.useEffect(()=>{t&&(o(t.name),h(t.email),v(t.height),b(t.currentWeight),g(t.desiredWeight),q(t.birthday),j(t.blood),B(t.sex),z(t.levelActivity))},[t]);const F=async U=>{k(!0);const _=U.target,D={};new FormData(_).forEach((P,C)=>{D[C]=P});try{await r(R(D)),await r(M()),await r(H())}finally{G(_),k(!1)}};return e.jsxs(A,{onSubmit:F,isloading:E,children:[e.jsxs(x,{col:"2",colTablet:"2",colMobil:"1",children:[e.jsx(a,{type:"text",name:"name",label:"Name",value:l,placeholder:"Name",required:!0}),e.jsx(a,{type:"email",name:"email",label:"Email",value:m,placeholder:"E-mail",disabled:!0})]}),e.jsxs(x,{col:"4",colTablet:"4",colMobil:"2",children:[e.jsx(a,{type:"number",name:"height",label:"Height",placeholder:"0",min:"35",value:n===0?"":n,required:!0}),e.jsx(a,{type:"number",name:"currentWeight",label:"Current Weight",placeholder:"0",min:"35",value:p===0?"":p,required:!0}),e.jsx(a,{type:"number",name:"desiredWeight",label:"Desired Weight",placeholder:"0",min:"35",value:y===0?"":y,required:!0}),e.jsx(a,{type:"date",name:"birthday",label:"Date of birth",value:f,required:!0,icon:"calendar"})]}),e.jsxs(x,{col:"3",colTablet:"3",colMobil:"1",children:[e.jsxs(x,{label:"Blood",col:"auto",colTablet:"auto",colMobil:"auto",children:[e.jsx(a,{type:"radio",name:"blood",label:"1",value:"1",required:s===0?"required":void 0,checked:s===1?!0:void 0}),e.jsx(a,{type:"radio",name:"blood",label:"2",value:"2",required:s===0?"required":void 0,checked:s===2?!0:void 0}),e.jsx(a,{type:"radio",name:"blood",label:"3",value:"3",required:s===0?"required":void 0,checked:s===3?!0:void 0}),e.jsx(a,{type:"radio",name:"blood",label:"4",value:"4",required:s===0?"required":void 0,checked:s===4?!0:void 0})]}),e.jsxs(x,{label:"Sex",col:"auto",colTablet:"auto",colMobil:"auto",children:[e.jsx(a,{type:"radio",name:"sex",label:"Male",value:"male",required:c===""?"required":void 0,checked:c==="male"?!0:void 0}),e.jsx(a,{type:"radio",name:"sex",label:"Female",value:"female",required:c===""?"required":void 0,checked:c==="female"?!0:void 0})]})]}),e.jsxs(x,{label:"Activity level",col:"1",colTablet:"1",colMobil:"1",children:[e.jsx(a,{type:"radio",name:"levelActivity",label:"Sedentary lifestyle (little or no physical activity)",value:"1",required:d===0?"required":void 0,checked:d===1?!0:void 0}),e.jsx(a,{type:"radio",name:"levelActivity",label:"Light activity (light exercises/sports 1-3 days per week)",value:"2",required:d===0?"required":void 0,checked:d===2?!0:void 0}),e.jsx(a,{type:"radio",name:"levelActivity",label:"Moderately active (moderate exercises/sports 3-5 days per week)",value:"3",required:d===0?"required":void 0,checked:d===3?!0:void 0}),e.jsx(a,{type:"radio",name:"levelActivity",label:"Very active (intense exercises/sports 6-7 days per week)",value:"4",required:d===0?"required":void 0,checked:d===4?!0:void 0}),e.jsx(a,{type:"radio",name:"levelActivity",label:"Extremely active (very strenuous exercises/sports and physical work)",value:"5",required:d===0?"required":void 0,checked:d===5?!0:void 0})]}),e.jsx(X,{children:e.jsx(Y,{width:"144",size:"big",children:"Save"})})]})},je=()=>e.jsxs(V,{children:[e.jsx(Z,{children:e.jsx(S,{tag:"h1",size:"h3",children:"Profile Settings"})}),e.jsxs(ee,{children:[e.jsx(ae,{children:e.jsx(de,{})}),e.jsx(oe,{})]})]});export{je as default};
