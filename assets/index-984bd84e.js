import{e as o,x as W,r as h,j as t,a as q,Q as I,S as P,L as Z,f as A,K as O,T as G}from"./index-8a3a50d9.js";import{d as S}from"./device-385ab3fc.js";import{A as B,B as E,E as J}from"./BasicModalWindow-fc1f4859.js";import{b as N,a as $}from"./selectors-b58aa764.js";import{f as Q}from"./format-4e6081aa.js";import{B as _}from"./Button-0bbdb877.js";import"./sprite-cb8f6b38.js";const ee=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
  height: 487px;
  @media (${S.tablet}) {
    overflow-y: scroll;
    width: 710px;
    gap: 32px 16px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ef8964;
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }
  }
  @media (${S.desktop}) {
    width: 850px;
    margin-left: 100px;
  }
`,te=o.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.cardBorderColor};
  background: ${e=>e.theme.cardColor};
  @media (${S.desktop}) {
    width: 405px;
  }
`,re=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,ie=o.p`
  padding: 5px 7.5px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  background: ${e=>e.theme.cardColor};
`,ne=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.orangeColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  background: transparent;
  transition: 0.3s;

  &:hover {
    color: ${e=>e.theme.beigeColor};
    svg {
      & path {
        transition: 0.3s;
        stroke: ${e=>e.theme.beigeColor};
      }
    }
  }
`,oe=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,se=o.p`
  font-size: 20px;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::first-letter {
    text-transform: capitalize;
  }
`,ae=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,U=o.p`
  color: ${e=>e.theme.prpertyNameColort};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  &::first-letter {
    text-transform: capitalize;
  }
`,V=o.span`
  color: ${e=>e.theme.whiteColor};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  text-transform: capitalize;
`;var F=typeof window>"u"?h.useEffect:h.useLayoutEffect,le=({isPlaying:e,duration:r,startAt:n=0,updateInterval:i=0,onComplete:s,onUpdate:a})=>{let[l,d]=h.useState(n),m=h.useRef(0),f=h.useRef(n),g=h.useRef(n*-1e3),c=h.useRef(null),p=h.useRef(null),b=h.useRef(null),v=j=>{let x=j/1e3;if(p.current===null){p.current=x,c.current=requestAnimationFrame(v);return}let y=x-p.current,z=m.current+y;p.current=x,m.current=z;let u=f.current+(i===0?z:(z/i|0)*i),k=f.current+z,w=typeof r=="number"&&k>=r;d(w?r:u),w||(c.current=requestAnimationFrame(v))},L=()=>{c.current&&cancelAnimationFrame(c.current),b.current&&clearTimeout(b.current),p.current=null},C=h.useCallback(j=>{L(),m.current=0;let x=typeof j=="number"?j:n;f.current=x,d(x),e&&(c.current=requestAnimationFrame(v))},[e,n]);return F(()=>{if(a==null||a(l),r&&l>=r){g.current+=r*1e3;let{shouldRepeat:j=!1,delay:x=0,newStartAt:y}=(s==null?void 0:s(g.current/1e3))||{};j&&(b.current=setTimeout(()=>C(y),x*1e3))}},[l,r]),F(()=>(e&&(c.current=requestAnimationFrame(v)),L),[e,r,i]),{elapsedTime:l,reset:C}},ce=(e,r,n)=>{let i=e/2,s=r/2,a=i-s,l=2*a,d=n==="clockwise"?"1,0":"0,1",m=2*Math.PI*a;return{path:`m ${i},${s} a ${a},${a} 0 ${d} 0,${l} a ${a},${a} 0 ${d} 0,-${l}`,pathLength:m}},K=(e,r)=>e===0||e===r?0:typeof r=="number"?e-r:0,de=e=>({position:"relative",width:e,height:e}),pe={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},M=(e,r,n,i,s)=>{if(i===0)return r;let a=(s?i-e:e)/i;return r+n*a},D=e=>{var r,n;return(n=(r=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(i,s,a,l)=>`#${s}${s}${a}${a}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))!=null?n:[]},xe=(e,r)=>{var n;let{colors:i,colorsTime:s,isSmoothColorTransition:a=!0}=e;if(typeof i=="string")return i;let l=(n=s==null?void 0:s.findIndex((p,b)=>p>=r&&r>=s[b+1]))!=null?n:-1;if(!s||l===-1)return i[0];if(!a)return i[l];let d=s[l]-r,m=s[l]-s[l+1],f=D(i[l]),g=D(i[l+1]),c=!!e.isGrowing;return`rgb(${f.map((p,b)=>M(d,p,g[b]-p,m,c)|0).join(",")})`},ue=e=>{let{duration:r,initialRemainingTime:n,updateInterval:i,size:s=180,strokeWidth:a=12,trailStrokeWidth:l,isPlaying:d=!1,isGrowing:m=!1,rotation:f="clockwise",onComplete:g,onUpdate:c}=e,p=h.useRef(),b=Math.max(a,l??0),{path:v,pathLength:L}=ce(s,b,f),{elapsedTime:C}=le({isPlaying:d,duration:r,startAt:K(r,n),updateInterval:i,onUpdate:typeof c=="function"?x=>{let y=Math.ceil(r-x);y!==p.current&&(p.current=y,c(y))}:void 0,onComplete:typeof g=="function"?x=>{var y;let{shouldRepeat:z,delay:u,newInitialRemainingTime:k}=(y=g(x))!=null?y:{};if(z)return{shouldRepeat:z,delay:u,newStartAt:K(r,k)}}:void 0}),j=r-C;return{elapsedTime:C,path:v,pathLength:L,remainingTime:Math.ceil(j),rotation:f,size:s,stroke:xe(e,j),strokeDashoffset:M(C,0,L,r,m),strokeWidth:a}},Y=e=>{let{children:r,strokeLinecap:n,trailColor:i,trailStrokeWidth:s}=e,{path:a,pathLength:l,stroke:d,strokeDashoffset:m,remainingTime:f,elapsedTime:g,size:c,strokeWidth:p}=ue(e);return W.createElement("div",{style:de(c)},W.createElement("svg",{viewBox:`0 0 ${c} ${c}`,width:c,height:c,xmlns:"http://www.w3.org/2000/svg"},W.createElement("path",{d:a,fill:"none",stroke:i??"#d9d9d9",strokeWidth:s??p}),W.createElement("path",{d:a,fill:"none",stroke:d,strokeLinecap:n??"round",strokeWidth:p,strokeDasharray:l,strokeDashoffset:m})),typeof r=="function"&&W.createElement("div",{style:pe},r({remainingTime:f,elapsedTime:g,color:d})))};Y.displayName="CountdownCircleTimer";const me=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  border: 1px solid var(--orange-color);
  border-radius: 12px;

  padding: 12px 32px;
  margin-left: 16px;

  color: var(--white-color);
  background: var(--orange-color);
  transition: 0.2s;
  transform: translate(0px, 0px);
  outline: none;
  &:hover,
  &:focus {
    background: var(--orange-light-color);
    border: 1px solid var(--orange-light-color);
  }
  &:disabled {
    opacity: 0.5;
  }
  @media (${S.tablet}) {
    margin-top: auto;
    align-self: flex-end;
  }
`,he=({onSubmit:e,isPause:r,children:n})=>t.jsx(me,{onClick:e,disabled:!r,children:n}),fe=o.button`
  padding: 0;
  margin-top: 14px;
  margin-bottom: 8px;
  background-color: transparent;
  :hover {
    fill: var(--orange-light-color);
    stroke: var(--orange-light-color);
  }
`,ge=({children:e,type:r,onClick:n})=>t.jsx(fe,{type:r,onClick:n,children:e}),be=()=>t.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[t.jsx("title",{children:"play"}),t.jsx("path",{fill:"#E6533C",stroke:"#E6533C",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1",d:"M4 10.4c0-2.24 0-3.36 0.436-4.216 0.383-0.753 0.995-1.365 1.748-1.748 0.856-0.436 1.976-0.436 4.216-0.436h11.2c2.24 0 3.36 0 4.216 0.436 0.753 0.383 1.364 0.995 1.748 1.748 0.436 0.856 0.436 1.976 0.436 4.216v11.2c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.364-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-11.2c-2.24 0-3.36 0-4.216-0.436-0.753-0.384-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-11.2z"}),t.jsx("path",{fill:"#efede8",stroke:"#efede8",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.3",d:"M11.917 10.75l8.167 5.25-8.167 5.25v-10.5z"})]}),ve=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("path",{d:"M4 10.4C4 8.15979 4 7.03969 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C7.03969 4 8.15979 4 10.4 4H21.6C23.8402 4 24.9603 4 25.816 4.43597C26.5686 4.81947 27.1805 5.43139 27.564 6.18404C28 7.03969 28 8.15979 28 10.4V21.6C28 23.8402 28 24.9603 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.9603 28 23.8402 28 21.6 28H10.4C8.15979 28 7.03969 28 6.18404 27.564C5.43139 27.1805 4.81947 26.5686 4.43597 25.816C4 24.9603 4 23.8402 4 21.6V10.4Z",fill:"#E6533C",stroke:"#E6533C",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12.6663 20V12M19.333 20V12",stroke:"#EFEDE8",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),R=o.div`
  padding: 48px 0;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${S.tablet}) {
    padding: 48px 32px 0 32px;
    align-items: flex-start;
    flex-direction: row;
  }
`,je=o(R)`
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  @media (${S.tablet}) {
    height: 450px;
  }
`,ye=o.div`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(${e=>e.$gifUrl}),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
  background-position: center;
  background-size: cover;
`,ke=o.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 14px;
  margin-bottom: 4px;
`,we=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 335px;
`,Ce=o.span`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 40px;
`,ze=o.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,Se=o.ul`
  display: flex;
  width: 335px;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (${S.tablet}) {
    width: 344px;
  }
`,Le=o.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 147px;
  height: 68px;
  padding: 12px 18px 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media (${S.tablet}) {
    width: 168px;
    height: 70px;
  }
`,We=o.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,Ue=o.span`
  color: #efede8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
`,Ve={0:()=>"",1:e=>`${e} minute `,2:e=>`${e} minutes `,3:e=>`${e} minutes `},Xe=e=>{const r=Math.floor(e/60),n=Math.floor(e-r*60);return`${Ve[r](r)}${n===0?"":`${n} seconds`}`},Ae={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},Ee=({exerciseTask:e,onClick:r,onComplete:n,setResult:i})=>{const s=q(),[a,l]=h.useState(!0),[d,m]=h.useState({exerciseId:e._id,time:0,calories:0}),f=()=>{l(u=>!u)},g=u=>{if(u.preventDefault(),d.time<5){I.error("Minimum 5 sec.",Ae);return}const k=Q(new Date,"dd-MM-yyyy"),w={...d,date:k};i({time:Xe(d.time),calories:d.calories}),delete w.calories,s(P(w)),m({exerciseId:null,time:0,calories:0}),r(),n()},{name:c,bodyPart:p,equipment:b,gifUrl:v,target:L,burnedCalories:C,time:j}=e,x=j*60,y=u=>{const k=x-u,w=Math.round(k*C/x);m(H=>({...H,time:k,calories:w}))},z=[{title:"Name",value:c},{title:"Target",value:L},{title:"Body Part",value:p},{title:"Equipment",value:b}];return t.jsxs(R,{children:[t.jsxs(we,{children:[t.jsx(ye,{$gifUrl:v,src:v,alt:`Exercise ${c}`}),t.jsx(ke,{children:"time"}),t.jsx(Y,{strokeWidth:4,duration:x,isPlaying:!a,size:124,colors:"#E6533C",onComplete:()=>f(),onUpdate:u=>y(u),children:({remainingTime:u})=>{const k=Math.floor(u%3600/60),w=u%60;return`${k>=10?k:`0${k}`}:${w>=10?w:`0${w}`}`}}),t.jsx(ge,{type:"button",onClick:f,children:a?t.jsx(be,{}):t.jsx(ve,{})}),t.jsxs(Ce,{children:["Burned calories: ",t.jsx(ze,{children:d.calories})]})]}),t.jsxs(je,{children:[t.jsx(Se,{children:z.map(({title:u,value:k},w)=>t.jsxs(Le,{children:[t.jsx(We,{children:u}),t.jsx(Ue,{children:k})]},w))}),t.jsx(he,{onSubmit:g,isPause:a,children:"Add to Diary"})]})]})},Fe=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 48px 84px;

  @media (${S.tablet}) {
    margin: 64px 134px;
  }
`,Ke=o.img`
  padding: 28px 0;
  @media (${S.tablet}) {
    padding: 32px 0;
  }
`,De=o.span`
  color: #efede8;

  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`,X=o.span`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;
`,Te=o(X)`
  margin-bottom: 16px;
  @media (${S.tablet}) {
    margin-bottom: 32px;
  }
`,T=o(X)`
  color: #e6533c;
`,qe=o(Z)`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,Be="data:image/png;base64,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",Me="/leader-code-team-power-pulse/assets/like-2x-0a7f921f.png",Ye=({onComplete:e,result:r})=>t.jsxs(Fe,{children:[t.jsx(Ke,{src:"/src/images/like-1x.png",srcSet:`${Be} 1x, ${Me} 2x`,alt:"like"}),t.jsx(De,{children:"Well done"}),t.jsxs(X,{children:["Your time: ",t.jsx(T,{children:r.time})]}),t.jsxs(Te,{children:["Burned calories: ",t.jsx(T,{children:r.calories})," "]}),t.jsx(_,{onClick:()=>e(),children:"Next exercise"}),t.jsxs(qe,{to:"/diary",onClick:()=>e(),children:["To the diary ",t.jsx(B,{})]})]}),Re=()=>{const e=q(),r=A(N),n=A($),[i,s]=h.useState(null),[a,l]=h.useState(!1),[d,m]=h.useState({time:null,calories:0}),{category:f,subcategory:g}=O();if(h.useEffect(()=>{e(G({category:f,subcategory:g}))},[e,f,g]),n)return"loading";const c=()=>{l(!a),d.time&&m({time:null,calories:0})},p=v=>{s(v)},b=()=>{s(null)};return t.jsxs(t.Fragment,{children:[r&&i&&t.jsx(E,{onClick:b,children:t.jsx(Ee,{exerciseTask:i,onClick:b,onComplete:c,setResult:m})}),a&&!i&&t.jsx(E,{onClick:c,children:t.jsx(Ye,{onComplete:c,result:d})}),t.jsx(ee,{children:r&&r.map(({_id:v,name:L,bodyPart:C,target:j,burnedCalories:x,time:y,gifUrl:z,equipment:u})=>t.jsxs(te,{children:[t.jsxs(re,{children:[t.jsx(ie,{children:"WORKOUT"}),t.jsxs(ne,{onClick:()=>p({_id:v,name:L,bodyPart:C,target:j,equipment:u,gifUrl:z,time:y,burnedCalories:x}),children:[t.jsx("p",{children:"Start"}),t.jsx(B,{})]})]}),t.jsxs("div",{children:[t.jsxs(oe,{children:[t.jsx(J,{}),t.jsx(se,{children:L})]}),t.jsxs(ae,{children:[t.jsx("li",{children:t.jsxs(U,{children:["Burned calories: ",t.jsx(V,{children:x})]})}),t.jsx("li",{children:t.jsxs(U,{children:["Body part: ",t.jsx(V,{children:C})]})}),t.jsx("li",{children:t.jsxs(U,{color:"black",children:["Target: ",t.jsx(V,{children:j})]})})]})]})]},v))})]})},Ne=Re;export{Ne as default};
