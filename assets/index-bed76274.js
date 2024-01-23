import{e as l,j as e,J as C,r as m,a as F,f as S,G as D,K as U}from"./index-8c2a198c.js";import{d as v}from"./device-385ab3fc.js";import{B as q,E as H}from"./ExerciseIcon-3512698a.js";import{b as N,a as G}from"./selectors-b58aa764.js";import"./sprite-51bc4961.js";const V=l.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
  height: 487px;
  @media (${v.tablet}) {
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
  @media (${v.desktop}) {
    width: 850px;
  }
`,K=l.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.cardBorderColor};
  background: ${t=>t.theme.cardColor};
  @media (${v.desktop}) {
    width: 405px;
  }
`,O=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,J=l.p`
  padding: 5px 7.5px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  background: ${t=>t.theme.cardColor};
`,Z=l.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${t=>t.theme.orangeColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  background: transparent;
`,Q=l.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,X=l.p`
  font-size: 20px;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::first-letter {
    text-transform: capitalize;
  }
`,Y=l.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,L=l.p`
  color: ${t=>t.theme.prpertyNameColort};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  &::first-letter {
    text-transform: capitalize;
  }
`,W=l.span`
  color: ${t=>t.theme.whiteColor};
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  text-transform: capitalize;
`,_=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",children:e.jsx("path",{d:"M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1",fill:"#E6533C",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})});var B=typeof window>"u"?m.useEffect:m.useLayoutEffect,ee=({isPlaying:t,duration:r,startAt:a=0,updateInterval:i=0,onComplete:n,onUpdate:s})=>{let[o,u]=m.useState(a),h=m.useRef(0),x=m.useRef(a),f=m.useRef(a*-1e3),c=m.useRef(null),d=m.useRef(null),p=m.useRef(null),g=j=>{let b=j/1e3;if(d.current===null){d.current=b,c.current=requestAnimationFrame(g);return}let k=b-d.current,y=h.current+k;d.current=b,h.current=y;let E=x.current+(i===0?y:(y/i|0)*i),T=x.current+y,z=typeof r=="number"&&T>=r;u(z?r:E),z||(c.current=requestAnimationFrame(g))},w=()=>{c.current&&cancelAnimationFrame(c.current),p.current&&clearTimeout(p.current),d.current=null},$=m.useCallback(j=>{w(),h.current=0;let b=typeof j=="number"?j:a;x.current=b,u(b),t&&(c.current=requestAnimationFrame(g))},[t,a]);return B(()=>{if(s==null||s(o),r&&o>=r){f.current+=r*1e3;let{shouldRepeat:j=!1,delay:b=0,newStartAt:k}=(n==null?void 0:n(f.current/1e3))||{};j&&(p.current=setTimeout(()=>$(k),b*1e3))}},[o,r]),B(()=>(t&&(c.current=requestAnimationFrame(g)),w),[t,r,i]),{elapsedTime:o,reset:$}},te=(t,r,a)=>{let i=t/2,n=r/2,s=i-n,o=2*s,u=a==="clockwise"?"1,0":"0,1",h=2*Math.PI*s;return{path:`m ${i},${n} a ${s},${s} 0 ${u} 0,${o} a ${s},${s} 0 ${u} 0,-${o}`,pathLength:h}},M=(t,r)=>t===0||t===r?0:typeof r=="number"?t-r:0,re=t=>({position:"relative",width:t,height:t}),ie={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},P=(t,r,a,i,n)=>{if(i===0)return r;let s=(n?i-t:t)/i;return r+a*s},R=t=>{var r,a;return(a=(r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(i,n,s,o)=>`#${n}${n}${s}${s}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))!=null?a:[]},ne=(t,r)=>{var a;let{colors:i,colorsTime:n,isSmoothColorTransition:s=!0}=t;if(typeof i=="string")return i;let o=(a=n==null?void 0:n.findIndex((d,p)=>d>=r&&r>=n[p+1]))!=null?a:-1;if(!n||o===-1)return i[0];if(!s)return i[o];let u=n[o]-r,h=n[o]-n[o+1],x=R(i[o]),f=R(i[o+1]),c=!!t.isGrowing;return`rgb(${x.map((d,p)=>P(u,d,f[p]-d,h,c)|0).join(",")})`},oe=t=>{let{duration:r,initialRemainingTime:a,updateInterval:i,size:n=180,strokeWidth:s=12,trailStrokeWidth:o,isPlaying:u=!1,isGrowing:h=!1,rotation:x="clockwise",onComplete:f,onUpdate:c}=t,d=m.useRef(),p=Math.max(s,o??0),{path:g,pathLength:w}=te(n,p,x),{elapsedTime:$}=ee({isPlaying:u,duration:r,startAt:M(r,a),updateInterval:i,onUpdate:typeof c=="function"?b=>{let k=Math.ceil(r-b);k!==d.current&&(d.current=k,c(k))}:void 0,onComplete:typeof f=="function"?b=>{var k;let{shouldRepeat:y,delay:E,newInitialRemainingTime:T}=(k=f(b))!=null?k:{};if(y)return{shouldRepeat:y,delay:E,newStartAt:M(r,T)}}:void 0}),j=r-$;return{elapsedTime:$,path:g,pathLength:w,remainingTime:Math.ceil(j),rotation:x,size:n,stroke:ne(t,j),strokeDashoffset:P($,0,w,r,h),strokeWidth:s}},A=t=>{let{children:r,strokeLinecap:a,trailColor:i,trailStrokeWidth:n}=t,{path:s,pathLength:o,stroke:u,strokeDashoffset:h,remainingTime:x,elapsedTime:f,size:c,strokeWidth:d}=oe(t);return C.createElement("div",{style:re(c)},C.createElement("svg",{viewBox:`0 0 ${c} ${c}`,width:c,height:c,xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:s,fill:"none",stroke:i??"#d9d9d9",strokeWidth:n??d}),C.createElement("path",{d:s,fill:"none",stroke:u,strokeLinecap:a??"round",strokeWidth:d,strokeDasharray:o,strokeDashoffset:h})),typeof r=="function"&&C.createElement("div",{style:ie},r({remainingTime:x,elapsedTime:f,color:u})))};A.displayName="CountdownCircleTimer";const se=l.button`
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

  @media (${v.tablet}) {
    margin-top: auto;
    align-self: flex-end;
  }
`,ae=({children:t})=>e.jsx(se,{children:t}),le=l.button`
  padding: 0;
  margin-top: 14px;
  margin-bottom: 8px;
  background-color: transparent;
`,ce=({children:t,type:r,onClick:a})=>e.jsx(le,{type:r,onClick:a,children:t}),de=()=>e.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[e.jsx("title",{children:"play"}),e.jsx("path",{fill:"#E6533C",stroke:"#E6533C",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1",d:"M4 10.4c0-2.24 0-3.36 0.436-4.216 0.383-0.753 0.995-1.365 1.748-1.748 0.856-0.436 1.976-0.436 4.216-0.436h11.2c2.24 0 3.36 0 4.216 0.436 0.753 0.383 1.364 0.995 1.748 1.748 0.436 0.856 0.436 1.976 0.436 4.216v11.2c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.364-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-11.2c-2.24 0-3.36 0-4.216-0.436-0.753-0.384-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-11.2z"}),e.jsx("path",{fill:"#efede8",stroke:"#efede8",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.3",d:"M11.917 10.75l8.167 5.25-8.167 5.25v-10.5z"})]}),pe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[e.jsx("path",{d:"M4 10.4C4 8.15979 4 7.03969 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C7.03969 4 8.15979 4 10.4 4H21.6C23.8402 4 24.9603 4 25.816 4.43597C26.5686 4.81947 27.1805 5.43139 27.564 6.18404C28 7.03969 28 8.15979 28 10.4V21.6C28 23.8402 28 24.9603 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.9603 28 23.8402 28 21.6 28H10.4C8.15979 28 7.03969 28 6.18404 27.564C5.43139 27.1805 4.81947 26.5686 4.43597 25.816C4 24.9603 4 23.8402 4 21.6V10.4Z",fill:"#E6533C",stroke:"#E6533C",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.6663 20V12M19.333 20V12",stroke:"#EFEDE8",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),I=l.div`
  padding: 48px 0;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${v.tablet}) {
    padding: 48px 32px 0 32px;
    align-items: flex-start;
    flex-direction: row;
  }
`,ue=l(I)`
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  @media (${v.tablet}) {
    height: 450px;
  }
`,xe=l.div`
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
`,he=l.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 14px;
  margin-bottom: 4px;
`,fe=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 335px;
`,ge=l.span`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 40px;
`,me=l.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,we=l.ul`
  display: flex;
  width: 335px;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (${v.tablet}) {
    width: 344px;
  }
`,be=l.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 147px;
  height: 68px;
  padding: 12px 18px 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media (${v.tablet}) {
    width: 168px;
    height: 70px;
  }
`,ke=l.span`
  color: rgba(239, 237, 232, 0.4);

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,je=l.span`
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
`,ve=({exerciseTask:t})=>{const[r,a]=m.useState(!0),i=()=>{a(p=>!p)},{name:n,bodyPart:s,equipment:o,gifUrl:u,target:h,burnedCalories:x,time:f}=t,c=f?f*60:3*60,d=[{title:"Name",value:n},{title:"Target",value:h},{title:"Body Part",value:s},{title:"Equipment",value:o}];return e.jsxs(I,{children:[e.jsxs(fe,{children:[e.jsx(xe,{$gifUrl:u,src:u,alt:`Exercise ${n}`}),e.jsx(he,{children:"time"}),e.jsx(A,{strokeWidth:4,duration:c,isPlaying:!r,size:124,colors:"#E6533C",onComplete:()=>{i()},onUpdate:p=>{console.log(p)},children:({remainingTime:p})=>{const g=Math.floor(p%3600/60),w=p%60;return`${g>=10?g:`0${g}`}:${w>=10?w:`0${w}`}`}}),e.jsx(ce,{type:"button",onClick:i,children:r?e.jsx(de,{}):e.jsx(pe,{})}),e.jsxs(ge,{children:["Burned calories: ",e.jsx(me,{children:x})]})]}),e.jsxs(ue,{children:[e.jsx(we,{children:d.map(({title:p,value:g},w)=>e.jsxs(be,{children:[e.jsx(ke,{children:p}),e.jsx(je,{children:g})]},w))}),e.jsx(ae,{children:"Add to Diary"})]})]})},ye=()=>{const t=F(),r=S(N),a=S(G),[i,n]=m.useState(null),{category:s,subcategory:o}=D();if(m.useEffect(()=>{t(U({category:s,subcategory:o}))},[t,s,o]),a)return"loading";const u=x=>{n(x)},h=()=>{n(null)};return e.jsxs(e.Fragment,{children:[r&&i&&e.jsx(q,{onClick:h,children:e.jsx(ve,{exerciseTask:i})}),e.jsx(V,{children:r&&r.map(({_id:x,name:f,bodyPart:c,target:d,burnedCalories:p,time:g,equipment:w})=>e.jsxs(K,{children:[e.jsxs(O,{children:[e.jsx(J,{children:"WORKOUT"}),e.jsxs(Z,{onClick:()=>u({_id:x,name:f,bodyPart:c,target:d,equipment:w,time:g,burnedCalories:p}),children:[e.jsx("p",{children:"Start"}),e.jsx(_,{})]})]}),e.jsxs("div",{children:[e.jsxs(Q,{children:[e.jsx(H,{}),e.jsx(X,{children:f})]}),e.jsxs(Y,{children:[e.jsx("li",{children:e.jsxs(L,{children:["Burned calories: ",e.jsx(W,{children:p})]})}),e.jsx("li",{children:e.jsxs(L,{children:["Body part: ",e.jsx(W,{children:c})]})}),e.jsx("li",{children:e.jsxs(L,{color:"black",children:["Target: ",e.jsx(W,{children:d})]})})]})]})]},x))})]})},We=ye;export{We as default};
