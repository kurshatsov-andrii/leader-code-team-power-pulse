import{u as r,f as b,s as P,j as e,I as f,M as u,o as K,r as j,b as E,p as O,L as B,q as X,t as Z}from"./index-6b6e08b5.js";import{S as ee}from"./Section-f113a8ff.js";import{T as y}from"./Text.styled-c9017138.js";import{e as ie}from"./index-5b31cc82.js";/* empty css                         */import{s as g}from"./sprite-b088564c.js";import{t as te,c as re,f as z}from"./format-4e6081aa.js";import"./defineProperty-8501a314.js";function N(i,n){const a=te(i);return isNaN(n)?re(i,NaN):(n&&a.setDate(a.getDate()+n),a)}function ne(i,n){return N(i,-n)}const oe=r.section`
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
`,ae=r.ul`
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
`,se=r.div`
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
  border: 1px solid ${i=>i.bordercolor||"rgba(239, 237, 232, 0.2)"};
  background: ${i=>i.color||"initial"};

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;

    padding: 17px;
  }
`,w=r.p`
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
`,de=i=>i.diary.products,ce=i=>i.diary.exercises,le=i=>i.diary.consumedCalories,pe=i=>i.diary.doneExercisesTime,xe=i=>i.diary.burnedCalories,S=()=>{const{bmr:i,targetTime:n}=b(P),a=b(le),m=b(xe),p=b(pe),x=i-a,s=Math.round(p/60),h=n-s;return e.jsxs(oe,{children:[e.jsxs(ae,{children:[e.jsxs(_,{color:"var(--orange-color)",children:[e.jsxs(k,{children:[e.jsx(f,{name:"knife"}),e.jsx(w,{color:"rgba(239, 237, 232, 0.80)",children:"Daily calorie intake"})]}),e.jsx(y,{size:"h4",children:i})]}),e.jsxs(_,{color:"var(--orange-color)",children:[e.jsxs(k,{children:[e.jsx(f,{name:"dumbbell"}),e.jsx(w,{color:"rgba(239, 237, 232, 0.80)",children:"Daily physical activity"})]}),e.jsxs(y,{size:"h4",children:[n," min"]})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",children:[e.jsxs(k,{children:[e.jsx(f,{name:"apple"}),e.jsx(w,{color:"rgba(239, 237, 232, 0.40)",children:"Сalories consumed"})]}),e.jsx(y,{size:"h4",children:a})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",children:[e.jsxs(k,{children:[e.jsx(f,{name:"fire"}),e.jsx(w,{color:"rgba(239, 237, 232, 0.40)",children:"Сalories burned"})]}),e.jsx(y,{size:"h4",children:m})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",children:[e.jsxs(k,{children:[e.jsx(f,{name:"bubbles"}),e.jsx(w,{color:"rgba(239, 237, 232, 0.40)",children:"Calories remaining"})]}),e.jsx(y,{size:"h4",children:x})]}),e.jsxs(_,{color:"rgba(239, 237, 232, 0.05)",children:[e.jsxs(k,{children:[e.jsx(f,{name:"runner"}),e.jsx(w,{color:"rgba(239, 237, 232, 0.40)",children:"Sports remaining"})]}),e.jsxs(y,{size:"h4",children:[h," min"]})]})]}),e.jsxs(se,{children:[e.jsx("div",{style:{width:"24px",height:"24px"},children:e.jsx(f,{name:"alarm",size:24})}),e.jsx(u,{maxWidth:767,children:e.jsx(w,{size:"14px",color:"rgba(239, 237, 232, 0.30)",$lineheight:"1.28",children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})}),e.jsx(u,{minWidth:768,children:e.jsx(w,{size:"16px",color:"rgba(239, 237, 232, 0.30)",children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})})]})]})},he=K`
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
    font-family: Roboto;
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
    font-family: Roboto;
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
    font-family: Roboto;
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

`,me=r.button`
  color: var(--white-color);
  font-family: Roboto;
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
`,ge=r.div`
  display: flex;
  justify-content: end !important;
  align-items: center;
`,I=r.svg`
  width: 16px;
  height: 16px;
  stroke: var(--white-color);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: var(--orange-light-color);
  }
`,we=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--orange-light-color);
  fill: transparent;
`,ue=r.div`
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
`,je=r.p`
  color: var(--white-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,M=r.button`
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
`,fe=({onDateChange:i})=>{const[n,a]=j.useState(new Date),m=j.forwardRef(function({onClick:h},t){return e.jsxs(ge,{children:[e.jsxs(me,{onClick:h,ref:t,children:[z(n,"dd/MM/yyyy"),e.jsx(we,{onClick:h,ref:t,children:e.jsx("use",{href:`${g}#icon-calendar-orange`})})]}),e.jsx(I,{onClick:()=>p(ne(n,1)),children:e.jsx("use",{href:`${g}#icon-calendar-left`})}),e.jsx(I,{onClick:()=>p(N(n,1)),children:e.jsx("use",{href:`${g}#icon-calendar-right`})})]})}),p=s=>{a(s),i&&i(s)},x=({date:s,decreaseMonth:h,increaseMonth:t})=>e.jsxs(ue,{children:[e.jsx(M,{onClick:h,children:e.jsx(R,{children:e.jsx("use",{href:`${g}#icon-calendar-left`})})}),e.jsx(je,{children:z(s,"MMMM yyyy")}),e.jsx(M,{onClick:t,children:e.jsx(R,{children:e.jsx("use",{href:`${g}#icon-calendar-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(ie,{selected:n,onChange:s=>{a(s),i(s)},customInput:e.jsx(m,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,2),renderCustomHeader:s=>e.jsx(x,{...s})}),e.jsx(he,{})]})},L=r.section`
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
`,q=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-right: 8px;
  }
`,A=r.h3`
  color: rgba(239, 237, 232, 0.5);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`,F=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--orange-color);
  font-weight: 500;
  line-height: 1.29;
  font-size: 14px;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,H=r.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--orange-color);
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--orange-color);
  }
`,D=r.ul`
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
`,U=r.ul`
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
`,G=r.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`,d=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc((100% - 2 * 16px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`,c=r.h4`
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
`,l=r.div`
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
`,Q=r.div`
  position: relative;
  display: flex;
  padding-right: 28px;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`,V=r.button`
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
`,Y=r.svg`
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
`,J=r.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,ye=r.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${i=>i.color==="false"?"#419B09":"#E9101D"};
`,be=({product:i,blood:n})=>{const{_id:a,productId:{title:m,category:p,groupBloodNotAllowed:x},calories:s,amount:h}=i,[t,C]=j.useState(window.innerWidth),v=()=>C(window.innerWidth);j.useEffect(()=>(window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[]);const W=E(),$=T=>{W(O(T))};return e.jsxs(G,{children:[e.jsxs(d,{children:[e.jsx(c,{children:"Title"}),e.jsx(l,{width:t<1440&&t>=768?"204px":t>=1440?"212px":"100%",children:m})]}),e.jsxs(d,{children:[e.jsx(c,{children:"Category"}),e.jsx(l,{width:t<1440&&t>=768?"128px":t>=1440?"166px":"100%",children:p})]}),e.jsxs(Q,{children:[e.jsxs(d,{children:[e.jsx(c,{children:"Calories"}),e.jsx(l,{$maxwidth:"81px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:s})]}),e.jsxs(d,{children:[e.jsx(c,{children:"Weight"}),e.jsx(l,{$maxwidth:"80px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:h})]}),e.jsxs(d,{children:[e.jsx(c,{children:"Recommend"}),e.jsxs(l,{$maxwidth:"76px",display:"flex",width:t<1440&&t>=768?"80px":t>=1440?"110px":"100%",children:[e.jsx(ye,{color:`${x[n]}`}),x[n]?"No":"Yes"]})]}),e.jsx(V,{type:"button",onClick:()=>$(a),children:e.jsx(Y,{children:e.jsx("use",{href:`${g}#icon-trash`})})})]})]},a)},ke=()=>{const i=b(de),n=b(P);return e.jsxs(L,{children:[e.jsxs(q,{children:[e.jsx(A,{children:"Products"}),e.jsx(B,{to:"/products",children:e.jsxs(F,{children:["Add product",e.jsx(H,{children:e.jsx("use",{href:`${g}#icon-arrow-right`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(u,{minWidth:768,maxWidth:1439,children:e.jsxs(D,{children:[e.jsx(o,{width:"204px",children:"Title"}),e.jsx(o,{width:"128px",children:"Category"}),e.jsx(o,{width:"90px",children:"Calories"}),e.jsx(o,{width:"90px",children:"Weight"}),e.jsx(o,{width:"80px",children:"Recommend"})]})}),e.jsx(u,{minWidth:1440,children:e.jsxs(D,{children:[e.jsx(o,{width:"212px",children:"Title"}),e.jsx(o,{width:"166px",children:"Category"}),e.jsx(o,{width:"105px",children:"Calories"}),e.jsx(o,{width:"105px",children:"Weight"}),e.jsx(o,{width:"110px",children:"Recommend"})]})}),e.jsxs(U,{children:[" ",i.map(a=>e.jsx(be,{product:a,blood:n.blood},a._id))," "]})]}):e.jsx(J,{children:"Not found products"})]})},_e=({workout:i})=>{const{_id:n,calories:a,time:m,exerciseId:{bodyPart:p,equipment:x,name:s,target:h}}=i,[t,C]=j.useState(window.innerWidth),v=()=>C(window.innerWidth);j.useEffect(()=>(window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[]);const W=E(),$=T=>{W(X(T))};return e.jsxs(G,{children:[e.jsxs(d,{children:[e.jsx(c,{children:"Body Part"}),e.jsx(l,{width:t<1440&&t>=768?"90px":t>=1440?"115px":"100%",children:p})]}),e.jsxs(d,{children:[e.jsx(c,{children:"Equipment"}),e.jsx(l,{width:t<1440&&t>=768?"132px":t>=1440?"157px":"100%",children:x})]}),e.jsxs(d,{children:[e.jsx(c,{children:"Name"}),e.jsx(l,{width:t<1440&&t>=768?"128px":t>=1440?"131px":"100%",children:s})]}),e.jsxs(Q,{children:[e.jsxs(d,{children:[e.jsx(c,{children:"Target"}),e.jsx(l,{$maxwidth:"81px",width:t<1440&&t>=768?"84px":t>=1440?"106px":"100%",children:h})]}),e.jsxs(d,{children:[e.jsx(c,{size:"80px",children:"Burned Calories"}),e.jsx(l,{$maxwidth:"80px",width:t<1440&&t>=768?"78px":t>=1440?"91px":"100%",children:a})]}),e.jsxs(d,{children:[e.jsx(c,{children:"Time"}),e.jsx(l,{$maxwidth:"76px",width:t<1440&&t>=768?"72px":t>=1440?"82px":"100%",children:m})]}),e.jsx(V,{type:"button",onClick:()=>$(n),children:e.jsx(Y,{children:e.jsx("use",{href:`${g}#icon-trash`})})})]})]},n)},ve=()=>{const i=b(ce);return e.jsxs(L,{height:"1066px",children:[e.jsxs(q,{children:[e.jsx(A,{children:"Exercises"}),e.jsx(B,{to:"/exercises",children:e.jsxs(F,{children:["Add exercise",e.jsx(H,{children:e.jsx("use",{href:`${g}#icon-arrow-right`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(u,{minWidth:768,maxWidth:1439,children:e.jsxs(D,{children:[e.jsx(o,{width:"90px",children:"Body Part"}),e.jsx(o,{width:"132px",children:"Equipment"}),e.jsx(o,{width:"128px",children:"Name"}),e.jsx(o,{width:"84px",children:"Target"}),e.jsx(o,{width:"78px",children:"Burned Calories"}),e.jsx(o,{width:"72px",children:"Time"})]})}),e.jsx(u,{minWidth:1440,children:e.jsxs(D,{children:[e.jsx(o,{width:"115px",children:"Body Part"}),e.jsx(o,{width:"157px",children:"Equipment"}),e.jsx(o,{width:"131px",children:"Name"}),e.jsx(o,{width:"106px",children:"Target"}),e.jsx(o,{width:"91px",children:"Burned Calories"}),e.jsx(o,{width:"82px",children:"Time"})]})}),e.jsxs(U,{children:[" ",i.map(n=>e.jsx(_e,{workout:n},n._id))," "]})]}):e.jsx(J,{children:"Not found exercises"})]})},ze=r.div`
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
`,De=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Ce=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,Pe=()=>{const i=E(),[n,a]=j.useState(z(new Date,"dd-MM-yyyy")),m=p=>{const x=z(p,"dd-MM-yyyy");a(x)};return j.useEffect(()=>{i(Z(n))},[i,n]),e.jsxs(ee,{children:[e.jsxs(ze,{children:[e.jsx(y,{tag:"h3",size:"h3",children:"Diary"}),e.jsx(fe,{onDateChange:m})]}),e.jsx(u,{maxWidth:765,children:e.jsx(S,{})}),e.jsxs(Ce,{children:[e.jsxs(De,{children:[e.jsx(ke,{}),e.jsx(ve,{})]}),e.jsx(u,{minWidth:768,children:e.jsx(S,{})})]})]})};export{Pe as default};
