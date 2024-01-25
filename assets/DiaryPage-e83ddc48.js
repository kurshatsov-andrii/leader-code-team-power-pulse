import{e as r,f as g,s as L,j as e,I as y,M as f,m as X,r as u,a as S,n as Z,L as P,o as ee,p as ie,c as te}from"./index-b42cf5cd.js";import{S as re}from"./Section-5f8a0c55.js";import{T as b}from"./Text.styled-1374f58f.js";import{s as ne,a as ae,b as oe,c as N,d as se,e as de,f as ce}from"./selectors-6efb1357.js";import{e as le}from"./index-4293a716.js";/* empty css                         */import{s as w}from"./sprite-96a47fb0.js";import{t as pe,c as xe,f as D}from"./format-4e6081aa.js";import{C as he}from"./Loader-b49dd128.js";import"./defineProperty-8501a314.js";function F(i,n){const a=pe(i);return isNaN(n)?xe(i,NaN):(n&&a.setDate(a.getDate()+n),a)}function me(i,n){return F(i,-n)}const ge=r.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
    width: 390px;
  }
`,we=r.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 20px 0px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    width: 593px;
    height: 248px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    height: 100%;
    flex-direction: row;
  }
`,k=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ue=r.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,_=r.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 161px;
  height: 96px;

  padding: 13px;

  border-radius: 12px;
  border: 1px solid ${i=>i.$border||"rgba(239, 237, 232, 0.2)"};
  background: ${i=>i.color||"initial"};

  @media screen and (max-width: 375px) {
    width: 48%;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;

    padding: 17px;
  }
`,j=r.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: ${i=>i.size||"12px"};
  line-height: ${i=>i.$lineheight||"1.33"};

  color: ${i=>i.color||"rgba(239, 237, 232, 0.8)"};

  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`,I=()=>{const i=g(L);let n=0,a=0;i&&(n=i.bmr,a=i.targetTime);const c=g(ne),h=g(ae),m=g(oe),s=n-c,d=Math.round(m/60),t=a>d?a-d:d-a;return e.jsx(ge,{children:i&&e.jsxs(e.Fragment,{children:[e.jsxs(we,{children:[e.jsxs(_,{color:"var(--orange-color)",children:[e.jsxs(k,{children:[e.jsx(y,{name:"knife"}),e.jsx(j,{color:"rgba(239, 237, 232, 0.80)",children:"Daily calorie intake"})]}),e.jsx(b,{size:"h4",children:n})]}),e.jsxs(_,{color:"var(--orange-color)",children:[e.jsxs(k,{children:[e.jsx(y,{name:"dumbbell"}),e.jsx(j,{color:"rgba(239, 237, 232, 0.80)",children:"Daily physical activity"})]}),e.jsxs(b,{size:"h4",children:[a," min"]})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",children:[e.jsxs(k,{children:[e.jsx(y,{name:"apple"}),e.jsx(j,{color:"rgba(239, 237, 232, 0.40)",children:"Сalories consumed"})]}),e.jsx(b,{size:"h4",children:c})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",children:[e.jsxs(k,{children:[e.jsx(y,{name:"fire"}),e.jsx(j,{color:"rgba(239, 237, 232, 0.40)",children:"Сalories burned"})]}),e.jsx(b,{size:"h4",children:h})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",$border:c>n?"#E9101D":void 0,children:[e.jsxs(k,{children:[e.jsx(y,{name:"bubbles"}),e.jsx(j,{color:"rgba(239, 237, 232, 0.40)",children:"Calories remaining"})]}),e.jsx(b,{size:"h4",children:s})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",$border:d>a?"#3CBF61":void 0,children:[e.jsxs(k,{children:[e.jsx(y,{name:"runner"}),e.jsx(j,{color:"rgba(239, 237, 232, 0.40)",children:"Sports remaining"})]}),e.jsxs(b,{size:"h4",children:[d>a?`+${t}`:`${t}`," min"]})]})]}),e.jsxs(ue,{children:[e.jsx("div",{style:{width:"24px",height:"24px"},children:e.jsx(y,{name:"alarm",size:24})}),e.jsx(f,{maxWidth:767,children:e.jsx(j,{size:"14px",color:"rgba(239, 237, 232, 0.30)",$lineheight:"1.28",children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})}),e.jsx(f,{minWidth:768,children:e.jsx(j,{size:"16px",color:"rgba(239, 237, 232, 0.30)",children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})})]})]})})},je=X`
.react-datepicker-wrapper {
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 30px;
    top: 52px;
  }
   @media screen and (min-width: 1440px) {  
    right: 100px;
  
  }
}

  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px; 
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: var(--orange-light-color) !important;
    font-family: Roboto;
    border-radius: 8px;
    font-size: 14px !important;
    border: none !important;
    z-index: 2 !important;
  }

  .react-datepicker__month-container {
    box-sizing: border-box;
    width: 100% !important;
    margin: 0 !important;
  }

  .react-datepicker__month {
  margin: 0 !important;
  text-align: center;
  }

  .react-datepicker__header {
    position: relative;
    width: 100% !important;
    background-color: var(--orange-light-color) !important;
  }

  .react-datepicker__day-names {
    display: flex;
    width: 100% !important;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    background-color: var(--orange-light-color) !important;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
  }

  .react-datepicker__current-month {
    font-family: 'RobotoMedium';
    font-style: normal;
    text-align: center;
    color: var(--white-color) !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: normal !important;
    letter-spacing: -0.32px !important;
    margin:0px !important;
    margin-bottom: 14px !important;
  }

  .react-datepicker__day-name {
    color: rgba(239, 237, 232, 0.50)  !important;
    font-family: 'RobotoMedium';
    font-size: 14px !important;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px !important;
  }

  .react-datepicker__navigation {
    margin-top: 7px;
    color: white;
  }

  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
    color: red !important;
  }

  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    color: var(--white-color) !important;
    width: 100% !important;
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 32px;
    border-radius: 50% !important;
    text-align: center;
    color: var(--white-color) !important;
    font-family: 'RobotoRegular';
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400 ;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  .react-datepicker__month {
    display: flex;
    width: 100% !important;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 11px;
    margin: 0;
  }

  .react-datepicker__day--selected {
    background-color: black !important;
    color:#3e85f3;
    font-size: 14px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: black !important;
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: black !important;
    color:#3e85f3;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }

  .react-datepicker__day--weekend {
    opacity: 100%;
  }

  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 50%;
  }

  /* .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  } */

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0 !important;
  }

  .react-datepicker__tab-loop {
      position: absolute;
      top: 0;
  }
    
  .react-datepicker__triangle {
      display: none !important;
  }

  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
  background-color: transparent !important;
  }

  .react-datepicker__day--outside-month{
  display: none !;
  }

`,fe=r.button`
  color: var(--white-color);
  font-family: 'RobotoBold', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 20px;
  }
`,ye=r.div`
  display: flex;
  justify-content: end !important;
  align-items: center;
`,M=r.svg`
  width: 16px;
  height: 16px;
  stroke: var(--white-color);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: var(--orange-light-color);
  }
`,be=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--orange-light-color);
  fill: transparent;
`,ke=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,R=r.svg`
  width: 8px;
  height: 8px;
  stroke: var(--white-color);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: white;
  }
`,_e=r.p`
  color: var(--white-color);
  font-family: 'RobotoMedium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,B=r.button`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    background-color: var(--orange-color);
  }
`,ve=({onDateChange:i})=>{const[n,a]=u.useState(new Date),c=u.forwardRef(function({onClick:d},t){return e.jsxs(ye,{children:[e.jsxs(fe,{onClick:d,ref:t,children:[D(n,"dd/MM/yyyy"),e.jsx(be,{onClick:d,ref:t,children:e.jsx("use",{href:`${w}#icon-calendar-orange`})})]}),e.jsx(M,{onClick:()=>h(me(n,1)),children:e.jsx("use",{href:`${w}#icon-calendar-left`})}),e.jsx(M,{onClick:()=>h(F(n,1)),children:e.jsx("use",{href:`${w}#icon-calendar-right`})})]})}),h=s=>{a(s),i&&i(s)},m=({date:s,decreaseMonth:d,increaseMonth:t})=>e.jsxs(ke,{children:[e.jsx(B,{onClick:d,children:e.jsx(R,{children:e.jsx("use",{href:`${w}#icon-calendar-left`})})}),e.jsx(_e,{children:D(s,"MMMM yyyy")}),e.jsx(B,{onClick:t,children:e.jsx(R,{children:e.jsx("use",{href:`${w}#icon-calendar-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(le,{selected:n,onChange:s=>{a(s),i(s)},customInput:e.jsx(c,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,2),renderCustomHeader:s=>e.jsx(m,{...s})}),e.jsx(je,{})]})},q=r.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 335px;
  max-height: ${i=>i.height||"826px"};
  padding: 16px 8px 16px 16px;
  gap: 22px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    min-height: 236px;
    height: 236px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,A=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-right: 8px;
  }
`,H=r.h3`
  color: rgba(239, 237, 232, 0.5);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`,U=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--orange-color);
  font-weight: 500;
  line-height: 1.29;
  font-size: 14px;
  margin-right: 4px;
  &:hover,
  &:focus {
    color: var(--orange-light-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,G=r.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--orange-color);
  display: inline-block;
`,z=r.ul`
  display: flex;
  gap: 8px;
  line-height: 1.5;
  margin-bottom: -8px;
  color: var(--orange-light-color);

  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`,o=r.li`
  display: inline-block;
  font-size: 12px;
  width: ${i=>i.width||"100%"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Q=r.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-right: 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding-right: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    padding-right: 0px;
  }
`,V=r.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`,l=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc((100% - 2 * 16px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`,p=r.h4`
  max-width: ${i=>i.size||"inherit"};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: var(--orange-light-color);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,x=r.div`
  display: ${i=>i.display||"inline-block"};
  gap: 8px;
  width: ${i=>i.width||"100%"};
  max-width: ${i=>i.$maxwidth||"100%"};
  height: 38px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.29;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: none;
    height: 40px;
    padding: 8px 14px;
    line-height: 1.5;
    font-size: 16px;
  }
`,Y=r.div`
  position: relative;
  display: flex;
  padding-right: 28px;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`,J=r.button`
  position: absolute;
  right: 0;
  bottom: 9px;
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    bottom: 10px;
  }
`,K=r.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--orange-light-color);
  display: inline-block;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: var(--orange-color);
  }
`,O=r.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,De=r.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${i=>i.color==="false"?"#419B09":"#E9101D"};
`,ze=({product:i,blood:n})=>{const{productId:{_id:a,title:c,category:h,groupBloodNotAllowed:m},calories:s,amount:d}=i,[t,C]=u.useState(window.innerWidth),v=()=>C(window.innerWidth),$=g(N);u.useEffect(()=>(window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[]);const W=S(),T=E=>{W(Z(E))};return e.jsxs(V,{children:[e.jsxs(l,{children:[e.jsx(p,{children:"Title"}),e.jsx(x,{width:t<1440&&t>=768?"204px":t>=1440?"212px":"100%",children:c})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Category"}),e.jsx(x,{width:t<1440&&t>=768?"128px":t>=1440?"166px":"100%",children:h})]}),e.jsxs(Y,{children:[e.jsxs(l,{children:[e.jsx(p,{children:"Calories"}),e.jsx(x,{$maxwidth:"81px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:s})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Weight"}),e.jsx(x,{$maxwidth:"80px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:d})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Recommend"}),e.jsxs(x,{$maxwidth:"76px",display:"flex",width:t<1440&&t>=768?"80px":t>=1440?"110px":"100%",children:[e.jsx(De,{color:`${m[n]}`}),m[n]?"No":"Yes"]})]}),e.jsx(J,{type:"button",onClick:()=>T({id:a,date:$}),children:e.jsx(K,{children:e.jsx("use",{href:`${w}#icon-trash`})})})]})]},a)},Ce=()=>{const i=g(se),n=g(L);return e.jsxs(q,{children:[e.jsxs(A,{children:[e.jsx(H,{children:"Products"}),e.jsx(P,{to:"/products",children:e.jsxs(U,{children:["Add product",e.jsx(G,{children:e.jsx("use",{href:`${w}#icon-arrow-right`})})]})})]}),i.length!==0&&n?e.jsxs(e.Fragment,{children:[e.jsx(f,{minWidth:768,maxWidth:1439,children:e.jsxs(z,{children:[e.jsx(o,{width:"204px",children:"Title"}),e.jsx(o,{width:"128px",children:"Category"}),e.jsx(o,{width:"90px",children:"Calories"}),e.jsx(o,{width:"90px",children:"Weight"}),e.jsx(o,{width:"80px",children:"Recommend"})]})}),e.jsx(f,{minWidth:1440,children:e.jsxs(z,{children:[e.jsx(o,{width:"212px",children:"Title"}),e.jsx(o,{width:"166px",children:"Category"}),e.jsx(o,{width:"105px",children:"Calories"}),e.jsx(o,{width:"105px",children:"Weight"}),e.jsx(o,{width:"110px",children:"Recommend"})]})}),e.jsx(Q,{children:i.map(a=>e.jsx(ze,{product:a,blood:n.blood},a._id))})]}):e.jsx(O,{children:"Not found products"})]})},$e=({workout:i})=>{const{calories:n,time:a,exerciseId:{_id:c,bodyPart:h,equipment:m,name:s,target:d}}=i,[t,C]=u.useState(window.innerWidth),v=()=>C(window.innerWidth),$=g(N);u.useEffect(()=>(window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[]);const W=S(),T=E=>{W(ee(E))};return e.jsxs(V,{children:[e.jsxs(l,{children:[e.jsx(p,{children:"Body Part"}),e.jsx(x,{width:t<1440&&t>=768?"90px":t>=1440?"115px":"100%",children:h})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Equipment"}),e.jsx(x,{width:t<1440&&t>=768?"132px":t>=1440?"157px":"100%",children:m})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Name"}),e.jsx(x,{width:t<1440&&t>=768?"128px":t>=1440?"131px":"100%",children:s})]}),e.jsxs(Y,{children:[e.jsxs(l,{children:[e.jsx(p,{children:"Target"}),e.jsx(x,{$maxwidth:"81px",width:t<1440&&t>=768?"84px":t>=1440?"106px":"100%",children:d})]}),e.jsxs(l,{children:[e.jsx(p,{size:"80px",children:"Burned Calories"}),e.jsx(x,{$maxwidth:"80px",width:t<1440&&t>=768?"78px":t>=1440?"91px":"100%",children:n})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Time"}),e.jsx(x,{$maxwidth:"76px",width:t<1440&&t>=768?"72px":t>=1440?"82px":"100%",children:a})]}),e.jsx(J,{type:"button",onClick:()=>T({id:c,date:$}),children:e.jsx(K,{children:e.jsx("use",{href:`${w}#icon-trash`})})})]})]},c)},We=()=>{const i=g(de);return e.jsxs(q,{height:"1066px",children:[e.jsxs(A,{children:[e.jsx(H,{children:"Exercises"}),e.jsx(P,{to:"/exercises",children:e.jsxs(U,{children:["Add exercise",e.jsx(G,{children:e.jsx("use",{href:`${w}#icon-arrow-right`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(f,{minWidth:768,maxWidth:1439,children:e.jsxs(z,{children:[e.jsx(o,{width:"90px",children:"Body Part"}),e.jsx(o,{width:"132px",children:"Equipment"}),e.jsx(o,{width:"128px",children:"Name"}),e.jsx(o,{width:"84px",children:"Target"}),e.jsx(o,{width:"78px",children:"Burned Calories"}),e.jsx(o,{width:"72px",children:"Time"})]})}),e.jsx(f,{minWidth:1440,children:e.jsxs(z,{children:[e.jsx(o,{width:"115px",children:"Body Part"}),e.jsx(o,{width:"157px",children:"Equipment"}),e.jsx(o,{width:"131px",children:"Name"}),e.jsx(o,{width:"106px",children:"Target"}),e.jsx(o,{width:"91px",children:"Burned Calories"}),e.jsx(o,{width:"82px",children:"Time"})]})}),e.jsx(Q,{children:i.map(n=>e.jsx($e,{workout:n},n._id))})]}):e.jsx(O,{children:"Not found exercises"})]})},Te=r.div`
  width: 100%;
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
  }
`,Ee=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Se=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,He=()=>{const i=S(),[n,a]=u.useState(D(new Date,"dd-MM-yyyy")),c=g(ce),h=m=>{const s=D(m,"dd-MM-yyyy");a(s)};return u.useEffect(()=>{i(ie(n))},[i,n]),u.useEffect(()=>{i(te())},[i]),e.jsxs(e.Fragment,{children:[c&&e.jsx(he,{}),e.jsxs(re,{children:[e.jsxs(Te,{children:[e.jsx(b,{tag:"h3",size:"h3",children:"Diary"}),e.jsx(ve,{onDateChange:h})]}),e.jsx(f,{maxWidth:765,children:e.jsx(I,{})}),e.jsxs(Se,{children:[e.jsxs(Ee,{children:[e.jsx(Ce,{}),e.jsx(We,{})]}),e.jsx(f,{minWidth:768,children:e.jsx(I,{})})]})]})]})};export{He as default};
