import{j as t,B as p,L as f,d,r as c}from"./index-5fab2f80.js";import{a as B,b as T}from"./Text.styled-964ef118.js";const g=({to:s,border:e,size:a,full:r,blank:o,disabled:n,width:i,onClick:l,children:u})=>{const x={big:a==="big",small:a==="small",border_invers:e==="invers",border:e,full:r},j=Object.keys(x).filter(m=>x[m]).join(" "),b=s?t.jsx(f,{to:s,target:o?"_blank":void 0,children:t.jsx("span",{children:u})}):l?t.jsx("button",{type:"button",disabled:n,onClick:l,children:t.jsx("span",{children:u})}):t.jsx("button",{type:"submit",disabled:n,children:t.jsx("span",{children:u})});return t.jsx(p,{width:i,className:j,children:b})},h=({children:s})=>t.jsx(d,{children:s}),v=({width:s,justify:e="flex-start",gap:a="20",children:r})=>{const[o,n]=c.useState(!1);return c.useEffect(()=>{const i=setTimeout(()=>{n(!0)},20);return()=>{clearTimeout(i)}},[]),t.jsx(B,{"data-width":s,"data-justify":e,"data-gap":a,visibility:o?"true":"false",children:r})},L=({color:s="inherit",size:e,children:a})=>t.jsx(T,{"data-color":s,"data-size":e,children:a});export{h as B,v as T,L as a,g as b};
