import{j as t,d as p,L as f,e as d,r as c}from"./index-9872a3c4.js";import{a as B}from"./Text.styled-e68562d2.js";const T=({to:s,border:e,size:n,full:r,blank:o,disabled:a,width:i,onClick:l,children:u})=>{const x={big:n==="big",small:n==="small",border_invers:e==="invers",border:e,full:r},j=Object.keys(x).filter(b=>x[b]).join(" "),m=s?t.jsx(f,{to:s,target:o?"_blank":void 0,children:t.jsx("span",{children:u})}):l?t.jsx("button",{type:"button",disabled:a,onClick:l,children:t.jsx("span",{children:u})}):t.jsx("button",{type:"submit",disabled:a,children:t.jsx("span",{children:u})});return t.jsx(p,{width:i,className:j,children:m})},g=({children:s})=>t.jsx(d,{children:s}),v=({width:s,justify:e="flex-start",gap:n="20",children:r})=>{const[o,a]=c.useState(!1);return c.useEffect(()=>{const i=setTimeout(()=>{a(!0)},20);return()=>{clearTimeout(i)}},[]),t.jsx(B,{"data-width":s,"data-justify":e,"data-gap":n,visibility:o?"true":"false",children:r})};export{g as B,v as T,T as a};