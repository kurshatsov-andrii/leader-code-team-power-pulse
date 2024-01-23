import{u as s,b as g,f as n,j as t,F as b,a as j,G as y,r as $,H as k,L as w}from"./index-58ae4a8e.js";import{d as l}from"./device-385ab3fc.js";import{s as x,a as L,b as v,c as C}from"./selectors-b58aa764.js";const P=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,S=s.div`
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.5) 0%, rgba(4, 4, 4, 0.5) 100%),
    url(${i=>i.$imageURL}),
    lightgray -38.124px 0px / 139.843% 99.51% no-repeat;
  background-position: center;
  background-size: cover;
  padding: 45px 105px;

  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;

  @media (${l.tablet}) {
    width: 224px;
  }
  @media (${l.desktop}) {
    width: 237px;
  }
`,z=s.ul`
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  @media (${l.tablet}) {
    gap: 20px 16px;
  }
  @media (${l.desktop}) {
    justify-content: center;
  }
`,D=s.h2`
  color: #efede8;

  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  line-height: 24px;
`,E=s.p`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  line-height: 18px;
`,R=s.ul`
  height: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 32px;
`,U=s.li`
  width: 14px;
  height: 14px;
  display: flex;

  &.active {
    width: 14px;
    height: 14px;
    position: relative;
    border-radius: 50%;
    border: 1px solid ${i=>i.theme.orangeColor};
  }
  &.active p {
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 50%;
    background: ${i=>i.theme.orangeColor};
  }
`,I=s.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(239, 237, 232, 0.1);
`;function N({currentPage:i,pagesCount:a}){const o=g(),c=n(x),r=[];if(a>10)if(i>5)for(let e=i-4;e<=i+5&&(r.push(e),e!=a);e++);else for(let e=1;e<=10&&(r.push(e),e!=a);e++);else for(let e=1;e<=a;e++)r.push(e);return t.jsx(R,{children:r.map(e=>t.jsx(U,{className:e===c?"active":"nothing",children:t.jsx(I,{onClick:()=>o(b(e)),children:t.jsx("p",{})})},e))})}const T=()=>{const i=n(L),a=n(v),o=n(x),c=n(C),r=g(),e=j(),{category:p,subcategory:f}=y();return $.useEffect(()=>{r(k({filter:p,page:o}))},[p,f,r,o]),i?"loading":t.jsxs(P,{children:[t.jsx(z,{children:a&&a.map(({name:d,filter:h,imgURL:u,_id:m})=>t.jsx("li",{children:t.jsx(w,{to:`/exercises/${p}/${d}`,state:{from:e},children:t.jsxs(S,{$imageURL:u,alt:d,children:[t.jsx(D,{children:d}),t.jsx(E,{children:h})]})})},m))}),c>1&&t.jsx(N,{currentPage:o,pagesCount:c})]})},M=T;export{M as default};
