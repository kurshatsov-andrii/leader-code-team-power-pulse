import{e as s,j as e,H as S,r as m,a as A,Q as q,J as V,L as G,f as W,F as O,K}from"./index-1556e77a.js";import{d as $}from"./device-385ab3fc.js";import{B as M,E as J}from"./ExerciseIcon-8e7d2afc.js";import{b as Q,a as Y}from"./selectors-b58aa764.js";import{f as Z}from"./sprite-eca0d1cb.js";import{B as X}from"./Button-fb7feb47.js";const _=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
  height: 487px;
  @media (${$.tablet}) {
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
  @media (${$.desktop}) {
    width: 850px;
    margin-left: 100px;
  }
`,ee=s.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.cardBorderColor};
  background: ${t=>t.theme.cardColor};
  @media (${$.desktop}) {
    width: 405px;
  }
`,te=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,re=s.p`
  padding: 5px 7.5px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  background: ${t=>t.theme.cardColor};
`,ie=s.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${t=>t.theme.orangeColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  background: transparent;
`,ne=s.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,oe=s.p`
  font-size: 20px;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::first-letter {
    text-transform: capitalize;
  }
`,se=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,L=s.p`
  color: ${t=>t.theme.prpertyNameColort};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  &::first-letter {
    text-transform: capitalize;
  }
`,z=s.span`
  color: ${t=>t.theme.whiteColor};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  text-transform: capitalize;
`,F=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",children:e.jsx("path",{d:"M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1",fill:"#E6533C",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})});var I=typeof window>"u"?m.useEffect:m.useLayoutEffect,ae=({isPlaying:t,duration:r,startAt:o=0,updateInterval:i=0,onComplete:n,onUpdate:l})=>{let[a,x]=m.useState(o),u=m.useRef(0),h=m.useRef(o),b=m.useRef(o*-1e3),d=m.useRef(null),c=m.useRef(null),f=m.useRef(null),v=w=>{let g=w/1e3;if(c.current===null){c.current=g,d.current=requestAnimationFrame(v);return}let k=g-c.current,p=u.current+k;c.current=g,u.current=p;let j=h.current+(i===0?p:(p/i|0)*i),C=h.current+p,T=typeof r=="number"&&C>=r;x(T?r:j),T||(d.current=requestAnimationFrame(v))},E=()=>{d.current&&cancelAnimationFrame(d.current),f.current&&clearTimeout(f.current),c.current=null},y=m.useCallback(w=>{E(),u.current=0;let g=typeof w=="number"?w:o;h.current=g,x(g),t&&(d.current=requestAnimationFrame(v))},[t,o]);return I(()=>{if(l==null||l(a),r&&a>=r){b.current+=r*1e3;let{shouldRepeat:w=!1,delay:g=0,newStartAt:k}=(n==null?void 0:n(b.current/1e3))||{};w&&(f.current=setTimeout(()=>y(k),g*1e3))}},[a,r]),I(()=>(t&&(d.current=requestAnimationFrame(v)),E),[t,r,i]),{elapsedTime:a,reset:y}},le=(t,r,o)=>{let i=t/2,n=r/2,l=i-n,a=2*l,x=o==="clockwise"?"1,0":"0,1",u=2*Math.PI*l;return{path:`m ${i},${n} a ${l},${l} 0 ${x} 0,${a} a ${l},${l} 0 ${x} 0,-${a}`,pathLength:u}},D=(t,r)=>t===0||t===r?0:typeof r=="number"?t-r:0,ce=t=>({position:"relative",width:t,height:t}),de={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},H=(t,r,o,i,n)=>{if(i===0)return r;let l=(n?i-t:t)/i;return r+o*l},P=t=>{var r,o;return(o=(r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(i,n,l,a)=>`#${n}${n}${l}${l}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))!=null?o:[]},pe=(t,r)=>{var o;let{colors:i,colorsTime:n,isSmoothColorTransition:l=!0}=t;if(typeof i=="string")return i;let a=(o=n==null?void 0:n.findIndex((c,f)=>c>=r&&r>=n[f+1]))!=null?o:-1;if(!n||a===-1)return i[0];if(!l)return i[a];let x=n[a]-r,u=n[a]-n[a+1],h=P(i[a]),b=P(i[a+1]),d=!!t.isGrowing;return`rgb(${h.map((c,f)=>H(x,c,b[f]-c,u,d)|0).join(",")})`},xe=t=>{let{duration:r,initialRemainingTime:o,updateInterval:i,size:n=180,strokeWidth:l=12,trailStrokeWidth:a,isPlaying:x=!1,isGrowing:u=!1,rotation:h="clockwise",onComplete:b,onUpdate:d}=t,c=m.useRef(),f=Math.max(l,a??0),{path:v,pathLength:E}=le(n,f,h),{elapsedTime:y}=ae({isPlaying:x,duration:r,startAt:D(r,o),updateInterval:i,onUpdate:typeof d=="function"?g=>{let k=Math.ceil(r-g);k!==c.current&&(c.current=k,d(k))}:void 0,onComplete:typeof b=="function"?g=>{var k;let{shouldRepeat:p,delay:j,newInitialRemainingTime:C}=(k=b(g))!=null?k:{};if(p)return{shouldRepeat:p,delay:j,newStartAt:D(r,C)}}:void 0}),w=r-y;return{elapsedTime:y,path:v,pathLength:E,remainingTime:Math.ceil(w),rotation:h,size:n,stroke:pe(t,w),strokeDashoffset:H(y,0,E,r,u),strokeWidth:l}},U=t=>{let{children:r,strokeLinecap:o,trailColor:i,trailStrokeWidth:n}=t,{path:l,pathLength:a,stroke:x,strokeDashoffset:u,remainingTime:h,elapsedTime:b,size:d,strokeWidth:c}=xe(t);return S.createElement("div",{style:ce(d)},S.createElement("svg",{viewBox:`0 0 ${d} ${d}`,width:d,height:d,xmlns:"http://www.w3.org/2000/svg"},S.createElement("path",{d:l,fill:"none",stroke:i??"#d9d9d9",strokeWidth:n??c}),S.createElement("path",{d:l,fill:"none",stroke:x,strokeLinecap:o??"round",strokeWidth:c,strokeDasharray:a,strokeDashoffset:u})),typeof r=="function"&&S.createElement("div",{style:de},r({remainingTime:h,elapsedTime:b,color:x})))};U.displayName="CountdownCircleTimer";const ue=s.button`
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
  @media (${$.tablet}) {
    margin-top: auto;
    align-self: flex-end;
  }
`,he=({onSubmit:t,isPause:r,children:o})=>e.jsx(ue,{onClick:t,disabled:!r,children:o}),ge=s.button`
  padding: 0;
  margin-top: 14px;
  margin-bottom: 8px;
  background-color: transparent;
  :hover {
    fill: var(--orange-light-color);
    stroke: var(--orange-light-color);
  }
`,me=({children:t,type:r,onClick:o})=>e.jsx(ge,{type:r,onClick:o,children:t}),fe=()=>e.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[e.jsx("title",{children:"play"}),e.jsx("path",{fill:"#E6533C",stroke:"#E6533C",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1",d:"M4 10.4c0-2.24 0-3.36 0.436-4.216 0.383-0.753 0.995-1.365 1.748-1.748 0.856-0.436 1.976-0.436 4.216-0.436h11.2c2.24 0 3.36 0 4.216 0.436 0.753 0.383 1.364 0.995 1.748 1.748 0.436 0.856 0.436 1.976 0.436 4.216v11.2c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.364-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-11.2c-2.24 0-3.36 0-4.216-0.436-0.753-0.384-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-11.2z"}),e.jsx("path",{fill:"#efede8",stroke:"#efede8",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.3",d:"M11.917 10.75l8.167 5.25-8.167 5.25v-10.5z"})]}),we=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[e.jsx("path",{d:"M4 10.4C4 8.15979 4 7.03969 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C7.03969 4 8.15979 4 10.4 4H21.6C23.8402 4 24.9603 4 25.816 4.43597C26.5686 4.81947 27.1805 5.43139 27.564 6.18404C28 7.03969 28 8.15979 28 10.4V21.6C28 23.8402 28 24.9603 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.9603 28 23.8402 28 21.6 28H10.4C8.15979 28 7.03969 28 6.18404 27.564C5.43139 27.1805 4.81947 26.5686 4.43597 25.816C4 24.9603 4 23.8402 4 21.6V10.4Z",fill:"#E6533C",stroke:"#E6533C",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.6663 20V12M19.333 20V12",stroke:"#EFEDE8",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),N=s.div`
  padding: 48px 0;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${$.tablet}) {
    padding: 48px 32px 0 32px;
    align-items: flex-start;
    flex-direction: row;
  }
`,be=s(N)`
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  @media (${$.tablet}) {
    height: 450px;
  }
`,ke=s.div`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(${t=>t.$gifUrl}),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
  background-position: center;
  background-size: cover;
`,je=s.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 14px;
  margin-bottom: 4px;
`,ve=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 335px;
`,ye=s.span`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 40px;
`,Ce=s.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,$e=s.ul`
  display: flex;
  width: 335px;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (${$.tablet}) {
    width: 344px;
  }
`,Ee=s.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 147px;
  height: 68px;
  padding: 12px 18px 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media (${$.tablet}) {
    width: 168px;
    height: 70px;
  }
`,Se=s.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,Te=s.span`
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
`,Le={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},ze=({exerciseTask:t,onClick:r,onComplete:o})=>{const i=A(),[n,l]=m.useState(!0),[a,x]=m.useState({exerciseId:t._id,time:0,calories:0}),u=()=>{l(p=>!p)},h=p=>{if(p.preventDefault(),a.time<60){q.error("Minimum 1 min.",Le);return}const j=Z(new Date,"dd-mm-yyyy");i(V({...a,date:j})),x({exerciseId:null,time:0,calories:0}),r(),o()},{name:b,bodyPart:d,equipment:c,gifUrl:f,target:v,burnedCalories:E,time:y}=t,w=y*60,g=p=>{const j=w-p,C=Math.round(j*E/w);x(T=>({...T,time:j,calories:C}))},k=[{title:"Name",value:b},{title:"Target",value:v},{title:"Body Part",value:d},{title:"Equipment",value:c}];return e.jsxs(N,{children:[e.jsxs(ve,{children:[e.jsx(ke,{$gifUrl:f,src:f,alt:`Exercise ${b}`}),e.jsx(je,{children:"time"}),e.jsx(U,{strokeWidth:4,duration:w,isPlaying:!n,size:124,colors:"#E6533C",onComplete:()=>u(),onUpdate:p=>g(p),children:({remainingTime:p})=>{const j=Math.floor(p%3600/60),C=p%60;return`${j>=10?j:`0${j}`}:${C>=10?C:`0${C}`}`}}),e.jsx(me,{type:"button",onClick:u,children:n?e.jsx(fe,{}):e.jsx(we,{})}),e.jsxs(ye,{children:["Burned calories: ",e.jsx(Ce,{children:a.calories})]})]}),e.jsxs(be,{children:[e.jsx($e,{children:k.map(({title:p,value:j},C)=>e.jsxs(Ee,{children:[e.jsx(Se,{children:p}),e.jsx(Te,{children:j})]},C))}),e.jsx(he,{onSubmit:h,isPause:n,children:"Add to Diary"})]})]})},Be=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 48px 84px;

  @media (${$.tablet}) {
    margin: 64px 134px;
  }
`,We=s.img`
  padding: 28px 0;
  @media (${$.tablet}) {
    padding: 32px 0;
  }
`,Me=s.span`
  color: #efede8;

  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`,B=s.span`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;
`,Ie=s(B)`
  margin-bottom: 16px;
  @media (${$.tablet}) {
    margin-bottom: 32px;
  }
`,R=s(B)`
  color: #e6533c;
`,De=s(G)`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,Pe=({onComplete:t,time:r="3 minutes",calories:o=150})=>e.jsxs(Be,{children:[e.jsx(We,{src:"/src/images/like-1x.png",srcSet:"/src/images/like-1x.png 1x, /src/images/like-2x.png 2x",alt:"like"}),e.jsx(Me,{children:"Well done"}),e.jsxs(B,{children:["Your time: ",e.jsx(R,{children:r})]}),e.jsxs(Ie,{children:["Burned calories: ",e.jsx(R,{children:o})," "]}),e.jsx(X,{to:"/products",onClick:()=>t(!1),children:"Next product"}),e.jsxs(De,{to:"/diary",onClick:()=>t(!1),children:["To the diary ",e.jsx(F,{})]})]}),Re=()=>{const t=A(),r=W(Q),o=W(Y),[i,n]=m.useState(null),[l,a]=m.useState(!1),{category:x,subcategory:u}=O();if(m.useEffect(()=>{t(K({category:x,subcategory:u}))},[t,x,u]),o)return"loading";const h=()=>{a(!l)},b=c=>{n(c)},d=()=>{n(null)};return e.jsxs(e.Fragment,{children:[r&&i&&e.jsx(M,{onClick:d,children:e.jsx(ze,{exerciseTask:i,onClick:d,onComplete:h})}),l&&!i&&e.jsx(M,{onClick:h,children:e.jsx(Pe,{onComplete:h})}),e.jsx(_,{children:r&&r.map(({_id:c,name:f,bodyPart:v,target:E,burnedCalories:y,time:w,gifUrl:g,equipment:k})=>e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(re,{children:"WORKOUT"}),e.jsxs(ie,{onClick:()=>b({_id:c,name:f,bodyPart:v,target:E,equipment:k,gifUrl:g,time:w,burnedCalories:y}),children:[e.jsx("p",{children:"Start"}),e.jsx(F,{})]})]}),e.jsxs("div",{children:[e.jsxs(ne,{children:[e.jsx(J,{}),e.jsx(oe,{children:f})]}),e.jsxs(se,{children:[e.jsx("li",{children:e.jsxs(L,{children:["Burned calories: ",e.jsx(z,{children:y})]})}),e.jsx("li",{children:e.jsxs(L,{children:["Body part: ",e.jsx(z,{children:v})]})}),e.jsx("li",{children:e.jsxs(L,{color:"black",children:["Target: ",e.jsx(z,{children:E})]})})]})]})]},c))})]})},Ve=Re;export{Ve as default};
