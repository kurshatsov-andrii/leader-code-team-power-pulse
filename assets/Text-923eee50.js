import{r as a,j as r}from"./index-8dd05b50.js";import{a as x,b as l}from"./Text.styled-6f4f5f4c.js";const m=({width:t,justify:e="flex-start",gap:s="20",children:i})=>{const[o,n]=a.useState(!1);return a.useEffect(()=>{const u=setTimeout(()=>{n(!0)},20);return()=>{clearTimeout(u)}},[]),r.jsx(x,{"data-width":t,"data-justify":e,"data-gap":s,visibility:o?"true":"false",children:i})},T=({color:t="inherit",size:e,children:s})=>r.jsx(l,{"data-color":t,"data-size":e,children:s});export{m as T,T as a};
