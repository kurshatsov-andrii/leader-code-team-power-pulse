import{u as l,j as e,J as $,r as m,b as D,f as z,G as I,K as U}from"./index-1bdd8062.js";import{d as k}from"./device-385ab3fc.js";import{b as q,a as H}from"./selectors-b58aa764.js";import{B as N}from"./BasicModalWindow-b2a02c97.js";import"./sprite-7aa0ff58.js";const G=l.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
  height: 487px;
  @media (${k.tablet}) {
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
  @media (${k.desktop}) {
    width: 850px;
  }
`,V=l.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.cardBorderColor};
  background: ${t=>t.theme.cardColor};
  @media (${k.desktop}) {
    width: 405px;
  }
`,Z=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,K=l.p`
  padding: 5px 7.5px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  background: ${t=>t.theme.cardColor};
`,O=l.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${t=>t.theme.orangeColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  background: transparent;
`,J=l.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,Q=l.p`
  font-size: 20px;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::first-letter {
    text-transform: capitalize;
  }
`,X=l.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,T=l.p`
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
`,Y=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",children:e.jsx("path",{d:"M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1",fill:"#E6533C",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})}),_=t=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...t,children:[e.jsx("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),e.jsx("path",{d:"M18.8234 8.7254C18.6138 8.47501 18.2403 8.44209 17.9899 8.65089L16.349 10.0294L15.5943 8.15964C15.5675 8.08946 15.5267 8.03054 15.4799 7.97856C15.3257 7.63546 15.058 7.34088 14.6889 7.1702C14.5286 7.09742 14.3631 7.05843 14.1977 7.03937C14.1613 7.02031 14.1283 6.99518 14.0868 6.98219L11.199 6.17729C11.037 6.13311 10.8741 6.1617 10.7407 6.23967C10.5821 6.29339 10.4461 6.40862 10.3811 6.57584L9.29378 9.37175C9.17594 9.67586 9.3267 10.019 9.63168 10.1385C9.93492 10.2564 10.2789 10.1047 10.3976 9.79975L11.316 7.43879L12.6312 7.80441C12.5991 7.8564 12.5645 7.90491 12.5385 7.96036L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7786L8.7488 15.214L5.31955 16.3611C4.9314 16.6513 4.84909 17.198 5.13587 17.5862C5.42439 17.9752 5.97282 18.0575 6.36011 17.7707L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2718C10.1576 16.2251 10.2078 16.1878 10.2416 16.1297L11.4633 14.0816L13.6319 15.9296L11.3116 18.5444C10.9919 18.9049 11.024 19.4602 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181 16.4425C15.6082 16.342 15.6619 16.2259 15.6983 16.1046C15.7199 16.0388 15.7199 15.9703 15.7251 15.9019C15.7251 15.8672 15.7381 15.836 15.7355 15.804C15.7277 15.5648 15.6307 15.3327 15.4349 15.1672L13.4395 13.4655C13.5834 13.3286 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007 11.2778C15.5181 11.3758 15.551 11.4719 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473 11.7111C15.856 11.7154 15.8664 11.7163 15.8768 11.7189C15.9305 11.7379 15.9851 11.7561 16.0414 11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.737C16.2459 11.7362 16.2467 11.7362 16.2467 11.7362C16.2649 11.7318 16.2831 11.7353 16.3013 11.7275C16.3975 11.6911 16.4711 11.6296 16.5344 11.5577L18.8893 9.55889C19.1397 9.34835 19.034 8.9758 18.8234 8.7254Z",fill:"#EFEDE8"}),e.jsx("path",{d:"M15.8458 7.30102C16.7574 7.30102 17.4963 6.56206 17.4963 5.65051C17.4963 4.73896 16.7574 4 15.8458 4C14.9343 4 14.1953 4.73896 14.1953 5.65051C14.1953 6.56206 14.9343 7.30102 15.8458 7.30102Z",fill:"#EFEDE8"})]});var B=typeof window>"u"?m.useEffect:m.useLayoutEffect,ee=({isPlaying:t,duration:r,startAt:a=0,updateInterval:i=0,onComplete:n,onUpdate:s})=>{let[o,u]=m.useState(a),h=m.useRef(0),x=m.useRef(a),f=m.useRef(a*-1e3),c=m.useRef(null),d=m.useRef(null),p=m.useRef(null),g=j=>{let C=j/1e3;if(d.current===null){d.current=C,c.current=requestAnimationFrame(g);return}let b=C-d.current,v=h.current+b;d.current=C,h.current=v;let L=x.current+(i===0?v:(v/i|0)*i),E=x.current+v,M=typeof r=="number"&&E>=r;u(M?r:L),M||(c.current=requestAnimationFrame(g))},w=()=>{c.current&&cancelAnimationFrame(c.current),p.current&&clearTimeout(p.current),d.current=null},y=m.useCallback(j=>{w(),h.current=0;let C=typeof j=="number"?j:a;x.current=C,u(C),t&&(c.current=requestAnimationFrame(g))},[t,a]);return B(()=>{if(s==null||s(o),r&&o>=r){f.current+=r*1e3;let{shouldRepeat:j=!1,delay:C=0,newStartAt:b}=(n==null?void 0:n(f.current/1e3))||{};j&&(p.current=setTimeout(()=>y(b),C*1e3))}},[o,r]),B(()=>(t&&(c.current=requestAnimationFrame(g)),w),[t,r,i]),{elapsedTime:o,reset:y}},te=(t,r,a)=>{let i=t/2,n=r/2,s=i-n,o=2*s,u=a==="clockwise"?"1,0":"0,1",h=2*Math.PI*s;return{path:`m ${i},${n} a ${s},${s} 0 ${u} 0,${o} a ${s},${s} 0 ${u} 0,-${o}`,pathLength:h}},S=(t,r)=>t===0||t===r?0:typeof r=="number"?t-r:0,re=t=>({position:"relative",width:t,height:t}),ie={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},R=(t,r,a,i,n)=>{if(i===0)return r;let s=(n?i-t:t)/i;return r+a*s},F=t=>{var r,a;return(a=(r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(i,n,s,o)=>`#${n}${n}${s}${s}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:r.map(i=>parseInt(i,16)))!=null?a:[]},ne=(t,r)=>{var a;let{colors:i,colorsTime:n,isSmoothColorTransition:s=!0}=t;if(typeof i=="string")return i;let o=(a=n==null?void 0:n.findIndex((d,p)=>d>=r&&r>=n[p+1]))!=null?a:-1;if(!n||o===-1)return i[0];if(!s)return i[o];let u=n[o]-r,h=n[o]-n[o+1],x=F(i[o]),f=F(i[o+1]),c=!!t.isGrowing;return`rgb(${x.map((d,p)=>R(u,d,f[p]-d,h,c)|0).join(",")})`},oe=t=>{let{duration:r,initialRemainingTime:a,updateInterval:i,size:n=180,strokeWidth:s=12,trailStrokeWidth:o,isPlaying:u=!1,isGrowing:h=!1,rotation:x="clockwise",onComplete:f,onUpdate:c}=t,d=m.useRef(),p=Math.max(s,o??0),{path:g,pathLength:w}=te(n,p,x),{elapsedTime:y}=ee({isPlaying:u,duration:r,startAt:S(r,a),updateInterval:i,onUpdate:typeof c=="function"?C=>{let b=Math.ceil(r-C);b!==d.current&&(d.current=b,c(b))}:void 0,onComplete:typeof f=="function"?C=>{var b;let{shouldRepeat:v,delay:L,newInitialRemainingTime:E}=(b=f(C))!=null?b:{};if(v)return{shouldRepeat:v,delay:L,newStartAt:S(r,E)}}:void 0}),j=r-y;return{elapsedTime:y,path:g,pathLength:w,remainingTime:Math.ceil(j),rotation:x,size:n,stroke:ne(t,j),strokeDashoffset:R(y,0,w,r,h),strokeWidth:s}},A=t=>{let{children:r,strokeLinecap:a,trailColor:i,trailStrokeWidth:n}=t,{path:s,pathLength:o,stroke:u,strokeDashoffset:h,remainingTime:x,elapsedTime:f,size:c,strokeWidth:d}=oe(t);return $.createElement("div",{style:re(c)},$.createElement("svg",{viewBox:`0 0 ${c} ${c}`,width:c,height:c,xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:s,fill:"none",stroke:i??"#d9d9d9",strokeWidth:n??d}),$.createElement("path",{d:s,fill:"none",stroke:u,strokeLinecap:a??"round",strokeWidth:d,strokeDasharray:o,strokeDashoffset:h})),typeof r=="function"&&$.createElement("div",{style:ie},r({remainingTime:x,elapsedTime:f,color:u})))};A.displayName="CountdownCircleTimer";const se=l.button`
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

  @media (${k.tablet}) {
    margin-top: auto;
    align-self: flex-end;
  }
`,ae=({children:t})=>e.jsx(se,{children:t}),le=l.button`
  padding: 0;
  margin-top: 14px;
  margin-bottom: 8px;
  background-color: transparent;
`,ce=({children:t,type:r,onClick:a})=>e.jsx(le,{type:r,onClick:a,children:t}),de=()=>e.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[e.jsx("title",{children:"play"}),e.jsx("path",{fill:"#E6533C",stroke:"#E6533C",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1",d:"M4 10.4c0-2.24 0-3.36 0.436-4.216 0.383-0.753 0.995-1.365 1.748-1.748 0.856-0.436 1.976-0.436 4.216-0.436h11.2c2.24 0 3.36 0 4.216 0.436 0.753 0.383 1.364 0.995 1.748 1.748 0.436 0.856 0.436 1.976 0.436 4.216v11.2c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.364-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-11.2c-2.24 0-3.36 0-4.216-0.436-0.753-0.384-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-11.2z"}),e.jsx("path",{fill:"#efede8",stroke:"#efede8",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.3",d:"M11.917 10.75l8.167 5.25-8.167 5.25v-10.5z"})]}),pe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[e.jsx("path",{d:"M4 10.4C4 8.15979 4 7.03969 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C7.03969 4 8.15979 4 10.4 4H21.6C23.8402 4 24.9603 4 25.816 4.43597C26.5686 4.81947 27.1805 5.43139 27.564 6.18404C28 7.03969 28 8.15979 28 10.4V21.6C28 23.8402 28 24.9603 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.9603 28 23.8402 28 21.6 28H10.4C8.15979 28 7.03969 28 6.18404 27.564C5.43139 27.1805 4.81947 26.5686 4.43597 25.816C4 24.9603 4 23.8402 4 21.6V10.4Z",fill:"#E6533C",stroke:"#E6533C",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.6663 20V12M19.333 20V12",stroke:"#EFEDE8",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),P=l.div`
  padding: 48px 0;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${k.tablet}) {
    padding: 48px 32px 0 32px;
    align-items: flex-start;
    flex-direction: row;
  }
`,ue=l(P)`
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  @media (${k.tablet}) {
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
  @media (${k.tablet}) {
    width: 344px;
  }
`,Ce=l.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 147px;
  height: 68px;
  padding: 12px 18px 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media (${k.tablet}) {
    width: 168px;
    height: 70px;
  }
`,be=l.span`
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
`,ke=({exerciseTask:t})=>{const[r,a]=m.useState(!0),i=()=>{a(p=>!p)},{name:n,bodyPart:s,equipment:o,gifUrl:u,target:h,burnedCalories:x,time:f}=t,c=f?f*60:3*60,d=[{title:"Name",value:n},{title:"Target",value:h},{title:"Body Part",value:s},{title:"Equipment",value:o}];return e.jsxs(P,{children:[e.jsxs(fe,{children:[e.jsx(xe,{$gifUrl:u,src:u,alt:`Exercise ${n}`}),e.jsx(he,{children:"time"}),e.jsx(A,{strokeWidth:4,duration:c,isPlaying:!r,size:124,colors:"#E6533C",onComplete:()=>{i()},onUpdate:p=>{console.log(p)},children:({remainingTime:p})=>{const g=Math.floor(p%3600/60),w=p%60;return`${g>=10?g:`0${g}`}:${w>=10?w:`0${w}`}`}}),e.jsx(ce,{type:"button",onClick:i,children:r?e.jsx(de,{}):e.jsx(pe,{})}),e.jsxs(ge,{children:["Burned calories: ",e.jsx(me,{children:x})]})]}),e.jsxs(ue,{children:[e.jsx(we,{children:d.map(({title:p,value:g},w)=>e.jsxs(Ce,{children:[e.jsx(be,{children:p}),e.jsx(je,{children:g})]},w))}),e.jsx(ae,{children:"Add to Diary"})]})]})},ve=()=>{const t=D(),r=z(q),a=z(H),[i,n]=m.useState(null),{category:s,subcategory:o}=I();if(m.useEffect(()=>{t(U({category:s,subcategory:o}))},[t,s,o]),a)return"loading";const u=x=>{n(x)},h=()=>{n(null)};return e.jsxs(e.Fragment,{children:[r&&i&&e.jsx(N,{onClick:h,children:e.jsx(ke,{exerciseTask:i})}),e.jsx(G,{children:r&&r.map(({_id:x,name:f,bodyPart:c,target:d,burnedCalories:p,time:g,equipment:w})=>e.jsxs(V,{children:[e.jsxs(Z,{children:[e.jsx(K,{children:"WORKOUT"}),e.jsxs(O,{onClick:()=>u({_id:x,name:f,bodyPart:c,target:d,equipment:w,time:g,burnedCalories:p}),children:[e.jsx("p",{children:"Start"}),e.jsx(Y,{})]})]}),e.jsxs("div",{children:[e.jsxs(J,{children:[e.jsx(_,{}),e.jsx(Q,{children:f})]}),e.jsxs(X,{children:[e.jsx("li",{children:e.jsxs(T,{children:["Burned calories: ",e.jsx(W,{children:p})]})}),e.jsx("li",{children:e.jsxs(T,{children:["Body part: ",e.jsx(W,{children:c})]})}),e.jsx("li",{children:e.jsxs(T,{color:"black",children:["Target: ",e.jsx(W,{children:d})]})})]})]})]},x))})]})},We=ve;export{We as default};
