import{j as l,r as x,I as g}from"./index-485a1890.js";import{c as L,L as b,d as w,I,e as $,f as j}from"./InputText.styled-e59258b8.js";const C=/[^A-zА-яЁё+ ()-]/,y=/^\+49\d{9}$/,M=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,m={empty:"This field is empty!",name:"The name cannot contain numbers",phone:"Wrong Phone format!",email:"Wrong E-Mail format!",checkbox:"This field is required!",radio:"Select one of the values",max:"Maximum is: ",min:"Minimum is:",maxLange:"Field must be no more than ",minLange:"Field must be at least "},f=n=>{const e=n;let t=`Success ${e.name}`;const a=e.type==="radio"?e.closest("fieldset"):e.closest("label");a.classList.remove("invalid"),a.classList.add("valid");const s=o=>{const i=a.querySelector("em");if(i){i.innerHTML=`<em><svg width="14" height="14" view-box="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99998 13.6666C3.31798 13.6666 0.333313 10.682 0.333313 6.99998C0.333313 3.31798 3.31798 0.333313 6.99998 0.333313C10.682 0.333313 13.6666 3.31798 13.6666 6.99998C13.6666 10.682 10.682 13.6666 6.99998 13.6666ZM6.22931 9.98998L10.9426 5.27598L9.99998 4.33331L6.22931 8.10465L4.34331 6.21865L3.40065 7.16131L6.22931 9.98998Z" fill='currentColor'></path></svg>${o}</em>`;return}a.insertAdjacentHTML("beforeend",`<em><svg width="14" height="14" view-box="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99998 13.6666C3.31798 13.6666 0.333313 10.682 0.333313 6.99998C0.333313 3.31798 3.31798 0.333313 6.99998 0.333313C10.682 0.333313 13.6666 3.31798 13.6666 6.99998C13.6666 10.682 10.682 13.6666 6.99998 13.6666ZM6.22931 9.98998L10.9426 5.27598L9.99998 4.33331L6.22931 8.10465L4.34331 6.21865L3.40065 7.16131L6.22931 9.98998Z" fill='currentColor'></path></svg>${o}</em>`)};s(t);const r=o=>{t=o,s(o),a.classList.remove("valid"),a.classList.add("invalid")};return e.value.length?e.type==="number"?(e.min&&Number(e.value)<e.min&&r(`${m.min} ${e.min}`),e.max&&Number(e.value)>e.max&&r(`${m.max} ${e.max}`)):(e.min&&Number(e.value.length)<e.min&&r(`${m.minLange} ${e.min} characters`),e.max&&Number(e.value.length)>e.max&&r(`${m.maxLange} ${e.max} characters`),e.name==="name"&&C.test(e.value)&&r(m.name),e.type==="tel"&&!y.test(e.value)&&r(m.phone),e.type==="email"&&!M.test(e.value)&&r(m.email)):r(m.empty),t},E=n=>{let e=0;return n.querySelectorAll("[required]").forEach(a=>{f(a).includes("Success")||(e+=1)}),e},F=n=>{n.querySelectorAll("input").forEach(t=>{if(t.name!=="subject"){const a=t.type==="radio"?t.closest("fieldset"):t.closest("label"),s=a.querySelector("em");a.classList.remove("valid","invalid"),s&&s.remove(),t.value=""}})},Z=({isloading:n,enctype:e,children:t,onSubmit:a})=>{const s=r=>{r.preventDefault(),!(E(r.target)>0)&&a&&a(r)};return l.jsx(L,{action:"#",method:"post",noValidate:!0,onSubmit:s,enctype:e,"data-loading":n?"true":"false",children:t})},q=({type:n,name:e,required:t,label:a,placeholder:s,value:r="",min:o,max:i,icon:u,onChange:c})=>{const[p,h]=x.useState(r),v=d=>{t&&f(d.target),h(d.target.value),c&&c(d)};return l.jsx(l.Fragment,{children:l.jsx(S,{type:n,name:e,label:a,value:p,required:t,placeholder:s,min:o,max:i,icon:u,onChange:v})})},S=({type:n,name:e,label:t,value:a,placeholder:s,min:r,max:o,icon:i,required:u,onChange:c})=>l.jsxs(b,{children:[t&&l.jsx(w,{children:t}),l.jsxs(I,{children:[l.jsx($,{type:n,name:e,value:a,required:u,placeholder:s,min:r,max:o,"data-icon":i,onChange:c}),i&&l.jsx(j,{children:l.jsx(g,{name:i})})]})]});export{Z as F,q as I,F as c};
