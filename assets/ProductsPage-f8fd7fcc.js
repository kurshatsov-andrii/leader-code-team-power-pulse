import{u as M,r as m,v as fr,R as $t,w as pr,b as xt,f as Ce,x as hr,j as x,y as Bt,z as ge,Q as mr,A as vr,L as gr,C as br,D as xr,E as Er}from"./index-6b6e08b5.js";import{S as Cr}from"./Section-f113a8ff.js";import{T as yr}from"./Text.styled-c9017138.js";import{s as ye}from"./sprite-b088564c.js";import{F as Sr}from"./Form-740fba66.js";import"./Fieldset.styled-50c6b427.js";/* empty css                         */import{_ as Ee,a as bn,b as wr,c as Fr,d as Or,e as Ar,f as Dr,g as Ir}from"./defineProperty-8501a314.js";import{f as Mr}from"./format-4e6081aa.js";import{B as jt}from"./BasicModalWindow-1d9abe67.js";import{T as Ht}from"./Text-66567fae.js";import"./InputValidation-9c6085f6.js";const Pr="/leader-code-team-power-pulse/assets/products-1x-60ae029e.jpg",Vr="/leader-code-team-power-pulse/assets/products-2x-88f016c5.jpg",Nt="/leader-code-team-power-pulse/assets/products-tablet-2x-d8bdd0d5.jpg",zt="/leader-code-team-power-pulse/assets/products-mobil-2x-b29d44f2.jpg",Rr=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
  }
`,Lr=M.div``,kr=M.p`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  text-align: right;
  margin-bottom: 8px;
  visibility: hidden;
  display: none;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 1440px) {
    visibility: visible;
    display: block;
  }
`,Tr=M.input`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--color-white);
  font-size: 14px;
  line-height: 18px;
  transition: all 100ms linear;
  cursor: pointer;

  &::placeholder {
    color: var(--color-white);
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    height: calc(100%);
  }
`,$r=M.button`
  position: absolute;
  background-color: transparent;
  padding: 0;
  top: 14px;
  right: 40px;

  svg {
    width: 18px;
    height: 18px;
    stroke: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
  }
`,Br=M.button`
  background-color: transparent;
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 0;
  width: 18px;
  height: 18px;

  svg {
    transition: all 100ms linear;
    stroke: var(--color-white);
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus {
    svg {
      stroke: var(--color-orange);
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 17px;
  }
`,jr=M.div`
  display: flex;
  gap: 16px;
`,xn={option:(t,e)=>({...t,padding:"8px 0",fontSize:"14px",color:e.isSelected?"#E6533C":"#EFEDE8",backgroundColor:e.isSelected?"rgba(28, 28, 28, 1)":e.isFocused?"rgba(239, 237, 232, 0.10)":"rgba(28, 28, 28, 1)",cursor:"pointer"}),singleValue:t=>({...t,color:"#EFEDE8"}),menu:t=>({...t,backgroundColor:"rgba(28, 28, 28, 1)",padding:"6px 5px 14px 14px"}),indicatorSeparator:t=>({...t,backgroundColor:"transparent"}),dropdownIndicator:t=>({...t,color:"#EFEDE8"}),container:(t,e)=>({...t,border:`1px solid ${e.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,"&:hover":{border:"1px solid #E6533C"},borderRadius:"12px",outline:"none"}),menuList:t=>({...t,overflowY:"auto",marginTop:"14px",marginRight:"7px","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"}}),placeholder:t=>({...t,fontSize:"14px",lineHeight:"1.28",margin:"0",padding:"0"})},Hr={...xn,control:t=>({...t,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"146px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"192px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},Nr={...xn,control:t=>({...t,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"173px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"204px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},zr=t=>t.products.categories,_r=t=>t.products.list,En=t=>t.products.filter;function _t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?_t(Object(r),!0).forEach(function(i){Ee(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Ur(t){if(Array.isArray(t))return t}function Wr(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,n,o,u,s=[],a=!0,l=!1;try{if(o=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(i=o.call(r)).done)&&(s.push(i.value),s.length!==e);a=!0);}catch(c){l=!0,n=c}finally{try{if(!a&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw n}}return s}}function Gr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(t,e){return Ur(t)||Wr(t,e)||bn(t,e)||Gr()}function Yr(t,e){if(t==null)return{};var r={},i=Object.keys(t),n,o;for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function se(t,e){if(t==null)return{};var r=Yr(t,e),i,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var qr=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Kr(t){var e=t.defaultInputValue,r=e===void 0?"":e,i=t.defaultMenuIsOpen,n=i===void 0?!1:i,o=t.defaultValue,u=o===void 0?null:o,s=t.inputValue,a=t.menuIsOpen,l=t.onChange,c=t.onInputChange,d=t.onMenuClose,g=t.onMenuOpen,b=t.value,p=se(t,qr),h=m.useState(s!==void 0?s:r),f=ue(h,2),v=f[0],E=f[1],y=m.useState(a!==void 0?a:n),A=ue(y,2),D=A[0],O=A[1],C=m.useState(b!==void 0?b:u),I=ue(C,2),T=I[0],P=I[1],k=m.useCallback(function(X,le){typeof l=="function"&&l(X,le),P(X)},[l]),B=m.useCallback(function(X,le){var ce;typeof c=="function"&&(ce=c(X,le)),E(ce!==void 0?ce:X)},[c]),Q=m.useCallback(function(){typeof g=="function"&&g(),O(!0)},[g]),ie=m.useCallback(function(){typeof d=="function"&&d(),O(!1)},[d]),z=s!==void 0?s:v,H=a!==void 0?a:D,ee=b!==void 0?b:T;return w(w({},p),{},{inputValue:z,menuIsOpen:H,onChange:k,onInputChange:B,onMenuClose:ie,onMenuOpen:Q,value:ee})}function F(){return F=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},F.apply(this,arguments)}function Xr(t){if(Array.isArray(t))return wr(t)}function Qr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(t){return Xr(t)||Qr(t)||bn(t)||Zr()}function Jr(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function ei(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var ti=function(){function t(r){var i=this;this._insertTag=function(n){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,o),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ei(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Jr(n);try{o.insertRule(i,o.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),W="-ms-",Be="-moz-",V="-webkit-",Cn="comm",Ct="rule",yt="decl",ni="@import",yn="@keyframes",ri="@layer",ii=Math.abs,We=String.fromCharCode,oi=Object.assign;function ai(t,e){return U(t,0)^45?(((e<<2^U(t,0))<<2^U(t,1))<<2^U(t,2))<<2^U(t,3):0}function Sn(t){return t.trim()}function ui(t,e){return(t=e.exec(t))?t[0]:t}function R(t,e,r){return t.replace(e,r)}function pt(t,e){return t.indexOf(e)}function U(t,e){return t.charCodeAt(e)|0}function Se(t,e,r){return t.slice(e,r)}function te(t){return t.length}function St(t){return t.length}function Ie(t,e){return e.push(t),t}function si(t,e){return t.map(e).join("")}var Ge=1,me=1,wn=0,G=0,j=0,ve="";function Ye(t,e,r,i,n,o,u){return{value:t,root:e,parent:r,type:i,props:n,children:o,line:Ge,column:me,length:u,return:""}}function be(t,e){return oi(Ye("",null,null,"",null,null,0),t,{length:-t.length},e)}function li(){return j}function ci(){return j=G>0?U(ve,--G):0,me--,j===10&&(me=1,Ge--),j}function q(){return j=G<wn?U(ve,G++):0,me++,j===10&&(me=1,Ge++),j}function re(){return U(ve,G)}function Le(){return G}function Oe(t,e){return Se(ve,t,e)}function we(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fn(t){return Ge=me=1,wn=te(ve=t),G=0,[]}function On(t){return ve="",t}function ke(t){return Sn(Oe(G-1,ht(t===91?t+2:t===40?t+1:t)))}function di(t){for(;(j=re())&&j<33;)q();return we(t)>2||we(j)>3?"":" "}function fi(t,e){for(;--e&&q()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Oe(t,Le()+(e<6&&re()==32&&q()==32))}function ht(t){for(;q();)switch(j){case t:return G;case 34:case 39:t!==34&&t!==39&&ht(j);break;case 40:t===41&&ht(t);break;case 92:q();break}return G}function pi(t,e){for(;q()&&t+j!==47+10;)if(t+j===42+42&&re()===47)break;return"/*"+Oe(e,G-1)+"*"+We(t===47?t:q())}function hi(t){for(;!we(re());)q();return Oe(t,G)}function mi(t){return On(Te("",null,null,null,[""],t=Fn(t),0,[0],t))}function Te(t,e,r,i,n,o,u,s,a){for(var l=0,c=0,d=u,g=0,b=0,p=0,h=1,f=1,v=1,E=0,y="",A=n,D=o,O=i,C=y;f;)switch(p=E,E=q()){case 40:if(p!=108&&U(C,d-1)==58){pt(C+=R(ke(E),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:C+=ke(E);break;case 9:case 10:case 13:case 32:C+=di(p);break;case 92:C+=fi(Le()-1,7);continue;case 47:switch(re()){case 42:case 47:Ie(vi(pi(q(),Le()),e,r),a);break;default:C+="/"}break;case 123*h:s[l++]=te(C)*v;case 125*h:case 59:case 0:switch(E){case 0:case 125:f=0;case 59+c:v==-1&&(C=R(C,/\f/g,"")),b>0&&te(C)-d&&Ie(b>32?Wt(C+";",i,r,d-1):Wt(R(C," ","")+";",i,r,d-2),a);break;case 59:C+=";";default:if(Ie(O=Ut(C,e,r,l,c,n,s,y,A=[],D=[],d),o),E===123)if(c===0)Te(C,e,O,O,A,o,d,s,D);else switch(g===99&&U(C,3)===110?100:g){case 100:case 108:case 109:case 115:Te(t,O,O,i&&Ie(Ut(t,O,O,0,0,n,s,y,n,A=[],d),D),n,D,d,s,i?A:D);break;default:Te(C,O,O,O,[""],D,0,s,D)}}l=c=b=0,h=v=1,y=C="",d=u;break;case 58:d=1+te(C),b=p;default:if(h<1){if(E==123)--h;else if(E==125&&h++==0&&ci()==125)continue}switch(C+=We(E),E*h){case 38:v=c>0?1:(C+="\f",-1);break;case 44:s[l++]=(te(C)-1)*v,v=1;break;case 64:re()===45&&(C+=ke(q())),g=re(),c=d=te(y=C+=hi(Le())),E++;break;case 45:p===45&&te(C)==2&&(h=0)}}return o}function Ut(t,e,r,i,n,o,u,s,a,l,c){for(var d=n-1,g=n===0?o:[""],b=St(g),p=0,h=0,f=0;p<i;++p)for(var v=0,E=Se(t,d+1,d=ii(h=u[p])),y=t;v<b;++v)(y=Sn(h>0?g[v]+" "+E:R(E,/&\f/g,g[v])))&&(a[f++]=y);return Ye(t,e,r,n===0?Ct:s,a,l,c)}function vi(t,e,r){return Ye(t,e,r,Cn,We(li()),Se(t,2,-2),0)}function Wt(t,e,r,i){return Ye(t,e,r,yt,Se(t,0,i),Se(t,i+1,-1),i)}function he(t,e){for(var r="",i=St(t),n=0;n<i;n++)r+=e(t[n],n,t,e)||"";return r}function gi(t,e,r,i){switch(t.type){case ri:if(t.children.length)break;case ni:case yt:return t.return=t.return||t.value;case Cn:return"";case yn:return t.return=t.value+"{"+he(t.children,i)+"}";case Ct:t.value=t.props.join(",")}return te(r=he(t.children,i))?t.return=t.value+"{"+r+"}":""}function bi(t){var e=St(t);return function(r,i,n,o){for(var u="",s=0;s<e;s++)u+=t[s](r,i,n,o)||"";return u}}function xi(t){return function(e){e.root||(e=e.return)&&t(e)}}var Ei=function(e,r,i){for(var n=0,o=0;n=o,o=re(),n===38&&o===12&&(r[i]=1),!we(o);)q();return Oe(e,G)},Ci=function(e,r){var i=-1,n=44;do switch(we(n)){case 0:n===38&&re()===12&&(r[i]=1),e[i]+=Ei(G-1,r,i);break;case 2:e[i]+=ke(n);break;case 4:if(n===44){e[++i]=re()===58?"&\f":"",r[i]=e[i].length;break}default:e[i]+=We(n)}while(n=q());return e},yi=function(e,r){return On(Ci(Fn(e),r))},Gt=new WeakMap,Si=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,i=e.parent,n=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!Gt.get(i))&&!n){Gt.set(e,!0);for(var o=[],u=yi(r,o),s=i.props,a=0,l=0;a<u.length;a++)for(var c=0;c<s.length;c++,l++)e.props[l]=o[a]?u[a].replace(/&\f/g,s[c]):s[c]+" "+u[a]}}},wi=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function An(t,e){switch(ai(t,e)){case 5103:return V+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return V+t+Be+t+W+t+t;case 6828:case 4268:return V+t+W+t+t;case 6165:return V+t+W+"flex-"+t+t;case 5187:return V+t+R(t,/(\w+).+(:[^]+)/,V+"box-$1$2"+W+"flex-$1$2")+t;case 5443:return V+t+W+"flex-item-"+R(t,/flex-|-self/,"")+t;case 4675:return V+t+W+"flex-line-pack"+R(t,/align-content|flex-|-self/,"")+t;case 5548:return V+t+W+R(t,"shrink","negative")+t;case 5292:return V+t+W+R(t,"basis","preferred-size")+t;case 6060:return V+"box-"+R(t,"-grow","")+V+t+W+R(t,"grow","positive")+t;case 4554:return V+R(t,/([^-])(transform)/g,"$1"+V+"$2")+t;case 6187:return R(R(R(t,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),t,"")+t;case 5495:case 3959:return R(t,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return R(R(t,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+t+t;case 4095:case 3583:case 4068:case 2532:return R(t,/(.+)-inline(.+)/,V+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(te(t)-1-e>6)switch(U(t,e+1)){case 109:if(U(t,e+4)!==45)break;case 102:return R(t,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+Be+(U(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~pt(t,"stretch")?An(R(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(U(t,e+1)!==115)break;case 6444:switch(U(t,te(t)-3-(~pt(t,"!important")&&10))){case 107:return R(t,":",":"+V)+t;case 101:return R(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+V+(U(t,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+W+"$2box$3")+t}break;case 5936:switch(U(t,e+11)){case 114:return V+t+W+R(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return V+t+W+R(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return V+t+W+R(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return V+t+W+t+t}return t}var Fi=function(e,r,i,n){if(e.length>-1&&!e.return)switch(e.type){case yt:e.return=An(e.value,e.length);break;case yn:return he([be(e,{value:R(e.value,"@","@"+V)})],n);case Ct:if(e.length)return si(e.props,function(o){switch(ui(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return he([be(e,{props:[R(o,/:(read-\w+)/,":"+Be+"$1")]})],n);case"::placeholder":return he([be(e,{props:[R(o,/:(plac\w+)/,":"+V+"input-$1")]}),be(e,{props:[R(o,/:(plac\w+)/,":"+Be+"$1")]}),be(e,{props:[R(o,/:(plac\w+)/,W+"input-$1")]})],n)}return""})}},Oi=[Fi],Ai=function(e){var r=e.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(h){var f=h.getAttribute("data-emotion");f.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var n=e.stylisPlugins||Oi,o={},u,s=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(h){for(var f=h.getAttribute("data-emotion").split(" "),v=1;v<f.length;v++)o[f[v]]=!0;s.push(h)});var a,l=[Si,wi];{var c,d=[gi,xi(function(h){c.insert(h)})],g=bi(l.concat(n,d)),b=function(f){return he(mi(f),g)};a=function(f,v,E,y){c=E,b(f?f+"{"+v.styles+"}":v.styles),y&&(p.inserted[v.name]=!0)}}var p={key:r,sheet:new ti({key:r,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return p.sheet.hydrate(s),p},Dn={exports:{}},L={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,wt=_?Symbol.for("react.element"):60103,Ft=_?Symbol.for("react.portal"):60106,qe=_?Symbol.for("react.fragment"):60107,Ke=_?Symbol.for("react.strict_mode"):60108,Xe=_?Symbol.for("react.profiler"):60114,Qe=_?Symbol.for("react.provider"):60109,Ze=_?Symbol.for("react.context"):60110,Ot=_?Symbol.for("react.async_mode"):60111,Je=_?Symbol.for("react.concurrent_mode"):60111,et=_?Symbol.for("react.forward_ref"):60112,tt=_?Symbol.for("react.suspense"):60113,Di=_?Symbol.for("react.suspense_list"):60120,nt=_?Symbol.for("react.memo"):60115,rt=_?Symbol.for("react.lazy"):60116,Ii=_?Symbol.for("react.block"):60121,Mi=_?Symbol.for("react.fundamental"):60117,Pi=_?Symbol.for("react.responder"):60118,Vi=_?Symbol.for("react.scope"):60119;function K(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case wt:switch(t=t.type,t){case Ot:case Je:case qe:case Xe:case Ke:case tt:return t;default:switch(t=t&&t.$$typeof,t){case Ze:case et:case rt:case nt:case Qe:return t;default:return e}}case Ft:return e}}}function In(t){return K(t)===Je}L.AsyncMode=Ot;L.ConcurrentMode=Je;L.ContextConsumer=Ze;L.ContextProvider=Qe;L.Element=wt;L.ForwardRef=et;L.Fragment=qe;L.Lazy=rt;L.Memo=nt;L.Portal=Ft;L.Profiler=Xe;L.StrictMode=Ke;L.Suspense=tt;L.isAsyncMode=function(t){return In(t)||K(t)===Ot};L.isConcurrentMode=In;L.isContextConsumer=function(t){return K(t)===Ze};L.isContextProvider=function(t){return K(t)===Qe};L.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===wt};L.isForwardRef=function(t){return K(t)===et};L.isFragment=function(t){return K(t)===qe};L.isLazy=function(t){return K(t)===rt};L.isMemo=function(t){return K(t)===nt};L.isPortal=function(t){return K(t)===Ft};L.isProfiler=function(t){return K(t)===Xe};L.isStrictMode=function(t){return K(t)===Ke};L.isSuspense=function(t){return K(t)===tt};L.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qe||t===Je||t===Xe||t===Ke||t===tt||t===Di||typeof t=="object"&&t!==null&&(t.$$typeof===rt||t.$$typeof===nt||t.$$typeof===Qe||t.$$typeof===Ze||t.$$typeof===et||t.$$typeof===Mi||t.$$typeof===Pi||t.$$typeof===Vi||t.$$typeof===Ii)};L.typeOf=K;Dn.exports=L;var Ri=Dn.exports,Mn=Ri,Li={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ki={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pn={};Pn[Mn.ForwardRef]=Li;Pn[Mn.Memo]=ki;var Ti=!0;function $i(t,e,r){var i="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):i+=n+" "}),i}var Vn=function(e,r,i){var n=e.key+"-"+r.name;(i===!1||Ti===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Bi=function(e,r,i){Vn(e,r,i);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var o=r;do e.insert(r===o?"."+n:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function ji(t){for(var e=0,r,i=0,n=t.length;n>=4;++i,n-=4)r=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Hi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ni=/[A-Z]|^ms/g,zi=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Rn=function(e){return e.charCodeAt(1)===45},Yt=function(e){return e!=null&&typeof e!="boolean"},ot=fr(function(t){return Rn(t)?t:t.replace(Ni,"-$&").toLowerCase()}),qt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(zi,function(i,n,o){return ne={name:n,styles:o,next:ne},n})}return Hi[e]!==1&&!Rn(e)&&typeof r=="number"&&r!==0?r+"px":r};function Fe(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return ne={name:r.name,styles:r.styles,next:ne},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)ne={name:i.name,styles:i.styles,next:ne},i=i.next;var n=r.styles+";";return n}return _i(t,e,r)}case"function":{if(t!==void 0){var o=ne,u=r(t);return ne=o,Fe(t,e,u)}break}}if(e==null)return r;var s=e[r];return s!==void 0?s:r}function _i(t,e,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=Fe(t,e,r[n])+";";else for(var o in r){var u=r[o];if(typeof u!="object")e!=null&&e[u]!==void 0?i+=o+"{"+e[u]+"}":Yt(u)&&(i+=ot(o)+":"+qt(o,u)+";");else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var s=0;s<u.length;s++)Yt(u[s])&&(i+=ot(o)+":"+qt(o,u[s])+";");else{var a=Fe(t,e,u);switch(o){case"animation":case"animationName":{i+=ot(o)+":"+a+";";break}default:i+=o+"{"+a+"}"}}}return i}var Kt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ne,Ln=function(e,r,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";ne=void 0;var u=e[0];u==null||u.raw===void 0?(n=!1,o+=Fe(i,r,u)):o+=u[0];for(var s=1;s<e.length;s++)o+=Fe(i,r,e[s]),n&&(o+=u[s]);Kt.lastIndex=0;for(var a="",l;(l=Kt.exec(o))!==null;)a+="-"+l[1];var c=ji(o)+a;return{name:c,styles:o,next:ne}},Ui=function(e){return e()},Wi=$t["useInsertionEffect"]?$t["useInsertionEffect"]:!1,Gi=Wi||Ui,At={}.hasOwnProperty,kn=m.createContext(typeof HTMLElement<"u"?Ai({key:"css"}):null);kn.Provider;var Yi=function(e){return m.forwardRef(function(r,i){var n=m.useContext(kn);return e(r,n,i)})},qi=m.createContext({}),mt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ki=function(e,r){var i={};for(var n in r)At.call(r,n)&&(i[n]=r[n]);return i[mt]=e,i},Xi=function(e){var r=e.cache,i=e.serialized,n=e.isStringTag;return Vn(r,i,n),Gi(function(){return Bi(r,i,n)}),null},Qi=Yi(function(t,e,r){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var n=t[mt],o=[i],u="";typeof t.className=="string"?u=$i(e.registered,o,t.className):t.className!=null&&(u=t.className+" ");var s=Ln(o,void 0,m.useContext(qi));u+=e.key+"-"+s.name;var a={};for(var l in t)At.call(t,l)&&l!=="css"&&l!==mt&&(a[l]=t[l]);return a.ref=r,a.className=u,m.createElement(m.Fragment,null,m.createElement(Xi,{cache:e,serialized:s,isStringTag:typeof n=="string"}),m.createElement(n,a))}),Zi=Qi,S=function(e,r){var i=arguments;if(r==null||!At.call(r,"css"))return m.createElement.apply(void 0,i);var n=i.length,o=new Array(n);o[0]=Zi,o[1]=Ki(e,r);for(var u=2;u<n;u++)o[u]=i[u];return m.createElement.apply(null,o)};function Dt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Ln(e)}var Ji=function(){var e=Dt.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function eo(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const to=Math.min,no=Math.max,je=Math.round,Me=Math.floor,He=t=>({x:t,y:t});function ro(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Tn(t){return Bn(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $n(t){var e;return(e=(Bn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bn(t){return t instanceof Node||t instanceof J(t).Node}function vt(t){return t instanceof Element||t instanceof J(t).Element}function It(t){return t instanceof HTMLElement||t instanceof J(t).HTMLElement}function Xt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}function jn(t){const{overflow:e,overflowX:r,overflowY:i,display:n}=Mt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(n)}function io(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function oo(t){return["html","body","#document"].includes(Tn(t))}function Mt(t){return J(t).getComputedStyle(t)}function ao(t){if(Tn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||$n(t);return Xt(e)?e.host:e}function Hn(t){const e=ao(t);return oo(e)?t.ownerDocument?t.ownerDocument.body:t.body:It(e)&&jn(e)?e:Hn(e)}function Ne(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=Hn(t),o=n===((i=t.ownerDocument)==null?void 0:i.body),u=J(n);return o?e.concat(u,u.visualViewport||[],jn(n)?n:[],u.frameElement&&r?Ne(u.frameElement):[]):e.concat(n,Ne(n,[],r))}function uo(t){const e=Mt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=It(t),o=n?t.offsetWidth:r,u=n?t.offsetHeight:i,s=je(r)!==o||je(i)!==u;return s&&(r=o,i=u),{width:r,height:i,$:s}}function Pt(t){return vt(t)?t:t.contextElement}function at(t){const e=Pt(t);if(!It(e))return He(1);const r=e.getBoundingClientRect(),{width:i,height:n,$:o}=uo(e);let u=(o?je(r.width):r.width)/i,s=(o?je(r.height):r.height)/n;return(!u||!Number.isFinite(u))&&(u=1),(!s||!Number.isFinite(s))&&(s=1),{x:u,y:s}}const so=He(0);function lo(t){const e=J(t);return!io()||!e.visualViewport?so:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function co(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==J(t)?!1:e}function Qt(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),o=Pt(t);let u=He(1);e&&(i?vt(i)&&(u=at(i)):u=at(t));const s=co(o,r,i)?lo(o):He(0);let a=(n.left+s.x)/u.x,l=(n.top+s.y)/u.y,c=n.width/u.x,d=n.height/u.y;if(o){const g=J(o),b=i&&vt(i)?J(i):i;let p=g.frameElement;for(;p&&i&&b!==g;){const h=at(p),f=p.getBoundingClientRect(),v=Mt(p),E=f.left+(p.clientLeft+parseFloat(v.paddingLeft))*h.x,y=f.top+(p.clientTop+parseFloat(v.paddingTop))*h.y;a*=h.x,l*=h.y,c*=h.x,d*=h.y,a+=E,l+=y,p=J(p).frameElement}}return ro({width:c,height:d,x:a,y:l})}function fo(t,e){let r=null,i;const n=$n(t);function o(){clearTimeout(i),r&&r.disconnect(),r=null}function u(s,a){s===void 0&&(s=!1),a===void 0&&(a=1),o();const{left:l,top:c,width:d,height:g}=t.getBoundingClientRect();if(s||e(),!d||!g)return;const b=Me(c),p=Me(n.clientWidth-(l+d)),h=Me(n.clientHeight-(c+g)),f=Me(l),E={rootMargin:-b+"px "+-p+"px "+-h+"px "+-f+"px",threshold:no(0,to(1,a))||1};let y=!0;function A(D){const O=D[0].intersectionRatio;if(O!==a){if(!y)return u();O?u(!1,O):i=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{r=new IntersectionObserver(A,{...E,root:n.ownerDocument})}catch{r=new IntersectionObserver(A,E)}r.observe(t)}return u(!0),o}function po(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,l=Pt(t),c=n||o?[...l?Ne(l):[],...Ne(e)]:[];c.forEach(v=>{n&&v.addEventListener("scroll",r,{passive:!0}),o&&v.addEventListener("resize",r)});const d=l&&s?fo(l,r):null;let g=-1,b=null;u&&(b=new ResizeObserver(v=>{let[E]=v;E&&E.target===l&&b&&(b.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{b&&b.observe(e)})),r()}),l&&!a&&b.observe(l),b.observe(e));let p,h=a?Qt(t):null;a&&f();function f(){const v=Qt(t);h&&(v.x!==h.x||v.y!==h.y||v.width!==h.width||v.height!==h.height)&&r(),h=v,p=requestAnimationFrame(f)}return r(),()=>{c.forEach(v=>{n&&v.removeEventListener("scroll",r),o&&v.removeEventListener("resize",r)}),d&&d(),b&&b.disconnect(),b=null,a&&cancelAnimationFrame(p)}}var gt=m.useLayoutEffect,ho=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ze=function(){};function mo(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function vo(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];var o=[].concat(i);if(e&&t)for(var u in e)e.hasOwnProperty(u)&&e[u]&&o.push("".concat(mo(t,u)));return o.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var Zt=function(e){return Fo(e)?e.filter(Boolean):Fr(e)==="object"&&e!==null?[e]:[]},Nn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=se(e,ho);return w({},r)},$=function(e,r,i){var n=e.cx,o=e.getStyles,u=e.getClassNames,s=e.className;return{css:o(r,e),className:n(i??{},u(r,e),s)}};function it(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function go(t){return it(t)?window.innerHeight:t.clientHeight}function zn(t){return it(t)?window.pageYOffset:t.scrollTop}function _e(t,e){if(it(t)){window.scrollTo(0,e);return}t.scrollTop=e}function bo(t){var e=getComputedStyle(t),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function xo(t,e,r,i){return r*((t=t/i-1)*t*t+1)+e}function Pe(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ze,n=zn(t),o=e-n,u=10,s=0;function a(){s+=u;var l=xo(s,n,o,r);_e(t,l),s<r?window.requestAnimationFrame(a):i(t)}a()}function Jt(t,e){var r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=e.offsetHeight/3;i.bottom+n>r.bottom?_e(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):i.top-n<r.top&&_e(t,Math.max(e.offsetTop-n,0))}function Eo(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function en(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Co(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var _n=!1,yo={get passive(){return _n=!0}},Ve=typeof window<"u"?window:{};Ve.addEventListener&&Ve.removeEventListener&&(Ve.addEventListener("p",ze,yo),Ve.removeEventListener("p",ze,!1));var So=_n;function wo(t){return t!=null}function Fo(t){return Array.isArray(t)}function Re(t,e,r){return t?e:r}var Oo=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];var o=Object.entries(e).filter(function(u){var s=ue(u,1),a=s[0];return!i.includes(a)});return o.reduce(function(u,s){var a=ue(s,2),l=a[0],c=a[1];return u[l]=c,u},{})},Ao=["children","innerProps"],Do=["children","innerProps"];function Io(t){var e=t.maxHeight,r=t.menuEl,i=t.minHeight,n=t.placement,o=t.shouldScroll,u=t.isFixedPosition,s=t.controlHeight,a=bo(r),l={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return l;var c=a.getBoundingClientRect(),d=c.height,g=r.getBoundingClientRect(),b=g.bottom,p=g.height,h=g.top,f=r.offsetParent.getBoundingClientRect(),v=f.top,E=u?window.innerHeight:go(a),y=zn(a),A=parseInt(getComputedStyle(r).marginBottom,10),D=parseInt(getComputedStyle(r).marginTop,10),O=v-D,C=E-h,I=O+y,T=d-y-h,P=b-E+y+A,k=y+h-D,B=160;switch(n){case"auto":case"bottom":if(C>=p)return{placement:"bottom",maxHeight:e};if(T>=p&&!u)return o&&Pe(a,P,B),{placement:"bottom",maxHeight:e};if(!u&&T>=i||u&&C>=i){o&&Pe(a,P,B);var Q=u?C-A:T-A;return{placement:"bottom",maxHeight:Q}}if(n==="auto"||u){var ie=e,z=u?O:I;return z>=i&&(ie=Math.min(z-A-s,e)),{placement:"top",maxHeight:ie}}if(n==="bottom")return o&&_e(a,P),{placement:"bottom",maxHeight:e};break;case"top":if(O>=p)return{placement:"top",maxHeight:e};if(I>=p&&!u)return o&&Pe(a,k,B),{placement:"top",maxHeight:e};if(!u&&I>=i||u&&O>=i){var H=e;return(!u&&I>=i||u&&O>=i)&&(H=u?O-D:I-D),o&&Pe(a,k,B),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function Mo(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var Un=function(e){return e==="auto"?"bottom":e},Po=function(e,r){var i,n=e.placement,o=e.theme,u=o.borderRadius,s=o.spacing,a=o.colors;return w((i={label:"menu"},Ee(i,Mo(n),"100%"),Ee(i,"position","absolute"),Ee(i,"width","100%"),Ee(i,"zIndex",1),i),r?{}:{backgroundColor:a.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},Wn=m.createContext(null),Vo=function(e){var r=e.children,i=e.minMenuHeight,n=e.maxMenuHeight,o=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,a=e.theme,l=m.useContext(Wn)||{},c=l.setPortalPlacement,d=m.useRef(null),g=m.useState(n),b=ue(g,2),p=b[0],h=b[1],f=m.useState(null),v=ue(f,2),E=v[0],y=v[1],A=a.spacing.controlHeight;return gt(function(){var D=d.current;if(D){var O=u==="fixed",C=s&&!O,I=Io({maxHeight:n,menuEl:D,minHeight:i,placement:o,shouldScroll:C,isFixedPosition:O,controlHeight:A});h(I.maxHeight),y(I.placement),c==null||c(I.placement)}},[n,o,u,s,i,c,A]),r({ref:d,placerProps:w(w({},e),{},{placement:E||Un(o),maxHeight:p})})},Ro=function(e){var r=e.children,i=e.innerRef,n=e.innerProps;return S("div",F({},$(e,"menu",{menu:!0}),{ref:i},n),r)},Lo=Ro,ko=function(e,r){var i=e.maxHeight,n=e.theme.spacing.baseUnit;return w({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},To=function(e){var r=e.children,i=e.innerProps,n=e.innerRef,o=e.isMulti;return S("div",F({},$(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:n},i),r)},Gn=function(e,r){var i=e.theme,n=i.spacing.baseUnit,o=i.colors;return w({textAlign:"center"},r?{}:{color:o.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},$o=Gn,Bo=Gn,jo=function(e){var r=e.children,i=r===void 0?"No options":r,n=e.innerProps,o=se(e,Ao);return S("div",F({},$(w(w({},o),{},{children:i,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),i)},Ho=function(e){var r=e.children,i=r===void 0?"Loading...":r,n=e.innerProps,o=se(e,Do);return S("div",F({},$(w(w({},o),{},{children:i,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),i)},No=function(e){var r=e.rect,i=e.offset,n=e.position;return{left:r.left,position:n,top:i,width:r.width,zIndex:1}},zo=function(e){var r=e.appendTo,i=e.children,n=e.controlElement,o=e.innerProps,u=e.menuPlacement,s=e.menuPosition,a=m.useRef(null),l=m.useRef(null),c=m.useState(Un(u)),d=ue(c,2),g=d[0],b=d[1],p=m.useMemo(function(){return{setPortalPlacement:b}},[]),h=m.useState(null),f=ue(h,2),v=f[0],E=f[1],y=m.useCallback(function(){if(n){var C=Eo(n),I=s==="fixed"?0:window.pageYOffset,T=C[g]+I;(T!==(v==null?void 0:v.offset)||C.left!==(v==null?void 0:v.rect.left)||C.width!==(v==null?void 0:v.rect.width))&&E({offset:T,rect:C})}},[n,s,g,v==null?void 0:v.offset,v==null?void 0:v.rect.left,v==null?void 0:v.rect.width]);gt(function(){y()},[y]);var A=m.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&a.current&&(l.current=po(n,a.current,y,{elementResize:"ResizeObserver"in window}))},[n,y]);gt(function(){A()},[A]);var D=m.useCallback(function(C){a.current=C,A()},[A]);if(!r&&s!=="fixed"||!v)return null;var O=S("div",F({ref:D},$(w(w({},e),{},{offset:v.offset,position:s,rect:v.rect}),"menuPortal",{"menu-portal":!0}),o),i);return S(Wn.Provider,{value:p},r?pr.createPortal(O,r):O)},_o=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Uo=function(e){var r=e.children,i=e.innerProps,n=e.isDisabled,o=e.isRtl;return S("div",F({},$(e,"container",{"--is-disabled":n,"--is-rtl":o}),i),r)},Wo=function(e,r){var i=e.theme.spacing,n=e.isMulti,o=e.hasValue,u=e.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:n&&o&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Go=function(e){var r=e.children,i=e.innerProps,n=e.isMulti,o=e.hasValue;return S("div",F({},$(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":o}),i),r)},Yo=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},qo=function(e){var r=e.children,i=e.innerProps;return S("div",F({},$(e,"indicatorsContainer",{indicators:!0}),i),r)},tn,Ko=["size"],Xo=["innerProps","isRtl","size"],Qo={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Yn=function(e){var r=e.size,i=se(e,Ko);return S("svg",F({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Qo},i))},Vt=function(e){return S(Yn,F({size:20},e),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},qn=function(e){return S(Yn,F({size:20},e),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Kn=function(e,r){var i=e.isFocused,n=e.theme,o=n.spacing.baseUnit,u=n.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:o*2,":hover":{color:i?u.neutral80:u.neutral40}})},Zo=Kn,Jo=function(e){var r=e.children,i=e.innerProps;return S("div",F({},$(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||S(qn,null))},ea=Kn,ta=function(e){var r=e.children,i=e.innerProps;return S("div",F({},$(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||S(Vt,null))},na=function(e,r){var i=e.isDisabled,n=e.theme,o=n.spacing.baseUnit,u=n.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:o*2,marginTop:o*2})},ra=function(e){var r=e.innerProps;return S("span",F({},r,$(e,"indicatorSeparator",{"indicator-separator":!0})))},ia=Ji(tn||(tn=eo([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),oa=function(e,r){var i=e.isFocused,n=e.size,o=e.theme,u=o.colors,s=o.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:s*2})},ut=function(e){var r=e.delay,i=e.offset;return S("span",{css:Dt({animation:"".concat(ia," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},aa=function(e){var r=e.innerProps,i=e.isRtl,n=e.size,o=n===void 0?4:n,u=se(e,Xo);return S("div",F({},$(w(w({},u),{},{innerProps:r,isRtl:i,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),S(ut,{delay:0,offset:i}),S(ut,{delay:160,offset:!0}),S(ut,{delay:320,offset:!i}))},ua=function(e,r){var i=e.isDisabled,n=e.isFocused,o=e.theme,u=o.colors,s=o.borderRadius,a=o.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:n?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:n?u.primary:u.neutral30}})},sa=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,o=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return S("div",F({ref:o},$(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":n,"control--menu-is-open":s}),u,{"aria-disabled":i||void 0}),r)},la=sa,ca=["data"],da=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},fa=function(e){var r=e.children,i=e.cx,n=e.getStyles,o=e.getClassNames,u=e.Heading,s=e.headingProps,a=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return S("div",F({},$(e,"group",{group:!0}),a),S(u,F({},s,{selectProps:d,theme:c,getStyles:n,getClassNames:o,cx:i}),l),S("div",null,r))},pa=function(e,r){var i=e.theme,n=i.colors,o=i.spacing;return w({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},ha=function(e){var r=Nn(e);r.data;var i=se(r,ca);return S("div",F({},$(e,"groupHeading",{"group-heading":!0}),i))},ma=fa,va=["innerRef","isDisabled","isHidden","inputClassName"],ga=function(e,r){var i=e.isDisabled,n=e.value,o=e.theme,u=o.spacing,s=o.colors;return w(w({visibility:i?"hidden":"visible",transform:n?"translateZ(0)":""},ba),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},Xn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ba={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Xn)},xa=function(e){return w({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Xn)},Ea=function(e){var r=e.cx,i=e.value,n=Nn(e),o=n.innerRef,u=n.isDisabled,s=n.isHidden,a=n.inputClassName,l=se(n,va);return S("div",F({},$(e,"input",{"input-container":!0}),{"data-value":i||""}),S("input",F({className:r({input:!0},a),ref:o,style:xa(s),disabled:u},l)))},Ca=Ea,ya=function(e,r){var i=e.theme,n=i.spacing,o=i.borderRadius,u=i.colors;return w({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:o/2,margin:n.baseUnit/2})},Sa=function(e,r){var i=e.theme,n=i.borderRadius,o=i.colors,u=e.cropWithEllipsis;return w({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},wa=function(e,r){var i=e.theme,n=i.spacing,o=i.borderRadius,u=i.colors,s=e.isFocused;return w({alignItems:"center",display:"flex"},r?{}:{borderRadius:o/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Qn=function(e){var r=e.children,i=e.innerProps;return S("div",i,r)},Fa=Qn,Oa=Qn;function Aa(t){var e=t.children,r=t.innerProps;return S("div",F({role:"button"},r),e||S(Vt,{size:14}))}var Da=function(e){var r=e.children,i=e.components,n=e.data,o=e.innerProps,u=e.isDisabled,s=e.removeProps,a=e.selectProps,l=i.Container,c=i.Label,d=i.Remove;return S(l,{data:n,innerProps:w(w({},$(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),o),selectProps:a},S(c,{data:n,innerProps:w({},$(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},r),S(d,{data:n,innerProps:w(w({},$(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},s),selectProps:a}))},Ia=Da,Ma=function(e,r){var i=e.isDisabled,n=e.isFocused,o=e.isSelected,u=e.theme,s=u.spacing,a=u.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:o?a.primary:n?a.primary25:"transparent",color:i?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:o?a.primary:a.primary50}})},Pa=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,o=e.isSelected,u=e.innerRef,s=e.innerProps;return S("div",F({},$(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":n,"option--is-selected":o}),{ref:u,"aria-disabled":i},s),r)},Va=Pa,Ra=function(e,r){var i=e.theme,n=i.spacing,o=i.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:o.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},La=function(e){var r=e.children,i=e.innerProps;return S("div",F({},$(e,"placeholder",{placeholder:!0}),i),r)},ka=La,Ta=function(e,r){var i=e.isDisabled,n=e.theme,o=n.spacing,u=n.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},$a=function(e){var r=e.children,i=e.isDisabled,n=e.innerProps;return S("div",F({},$(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),n),r)},Ba=$a,ja={ClearIndicator:ta,Control:la,DropdownIndicator:Jo,DownChevron:qn,CrossIcon:Vt,Group:ma,GroupHeading:ha,IndicatorsContainer:qo,IndicatorSeparator:ra,Input:Ca,LoadingIndicator:aa,Menu:Lo,MenuList:To,MenuPortal:zo,LoadingMessage:Ho,NoOptionsMessage:jo,MultiValue:Ia,MultiValueContainer:Fa,MultiValueLabel:Oa,MultiValueRemove:Aa,Option:Va,Placeholder:ka,SelectContainer:Uo,SingleValue:Ba,ValueContainer:Go},Ha=function(e){return w(w({},ja),e.components)},nn=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Na(t,e){return!!(t===e||nn(t)&&nn(e))}function za(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!Na(t[r],e[r]))return!1;return!0}function _a(t,e){e===void 0&&(e=za);var r=null;function i(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var u=t.apply(this,n);return r={lastResult:u,lastArgs:n,lastThis:this},u}return i.clear=function(){r=null},i}var Ua={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Wa=function(e){return S("span",F({css:Ua},e))},rn=Wa,Ga={guidance:function(e){var r=e.isSearchable,i=e.isMulti,n=e.tabSelectsValue,o=e.context,u=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,n=i===void 0?"":i,o=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return u?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,n=e.options,o=e.label,u=o===void 0?"":o,s=e.selectValue,a=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(h,f){return h&&h.length?"".concat(h.indexOf(f)+1," of ").concat(h.length):""};if(r==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,i),".");if(r==="menu"&&c){var g=a?" disabled":"",b="".concat(l?" selected":"").concat(g);return"".concat(u).concat(b,", ").concat(d(n,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Ya=function(e){var r=e.ariaSelection,i=e.focusedOption,n=e.focusedValue,o=e.focusableOptions,u=e.isFocused,s=e.selectValue,a=e.selectProps,l=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,g=a.getOptionLabel,b=a.inputValue,p=a.isMulti,h=a.isOptionDisabled,f=a.isSearchable,v=a.menuIsOpen,E=a.options,y=a.screenReaderStatus,A=a.tabSelectsValue,D=a.isLoading,O=a["aria-label"],C=a["aria-live"],I=m.useMemo(function(){return w(w({},Ga),d||{})},[d]),T=m.useMemo(function(){var z="";if(r&&I.onChange){var H=r.option,ee=r.options,X=r.removedValue,le=r.removedValues,ce=r.value,Ae=function(ae){return Array.isArray(ae)?null:ae},N=X||H||Ae(ce),Y=N?g(N):"",oe=ee||le||void 0,de=oe?oe.map(g):[],Z=w({isDisabled:N&&h(N,s),label:Y,labels:de},r);z=I.onChange(Z)}return z},[r,I,h,s,g]),P=m.useMemo(function(){var z="",H=i||n,ee=!!(i&&s&&s.includes(i));if(H&&I.onFocus){var X={focused:H,label:g(H),isDisabled:h(H,s),isSelected:ee,options:o,context:H===i?"menu":"value",selectValue:s,isAppleDevice:c};z=I.onFocus(X)}return z},[i,n,g,h,I,o,s,c]),k=m.useMemo(function(){var z="";if(v&&E.length&&!D&&I.onFilter){var H=y({count:o.length});z=I.onFilter({inputValue:b,resultsMessage:H})}return z},[o,b,v,I,E,y,D]),B=(r==null?void 0:r.action)==="initial-input-focus",Q=m.useMemo(function(){var z="";if(I.guidance){var H=n?"value":v?"menu":"input";z=I.guidance({"aria-label":O,context:H,isDisabled:i&&h(i,s),isMulti:p,isSearchable:f,tabSelectsValue:A,isInitialFocus:B})}return z},[O,i,n,p,h,f,v,I,s,A,B]),ie=S(m.Fragment,null,S("span",{id:"aria-selection"},T),S("span",{id:"aria-focused"},P),S("span",{id:"aria-results"},k),S("span",{id:"aria-guidance"},Q));return S(m.Fragment,null,S(rn,{id:l},B&&ie),S(rn,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&ie))},qa=Ya,bt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Ka=new RegExp("["+bt.map(function(t){return t.letters}).join("")+"]","g"),Zn={};for(var st=0;st<bt.length;st++)for(var lt=bt[st],ct=0;ct<lt.letters.length;ct++)Zn[lt.letters[ct]]=lt.base;var Jn=function(e){return e.replace(Ka,function(r){return Zn[r]})},Xa=_a(Jn),on=function(e){return e.replace(/^\s+|\s+$/g,"")},Qa=function(e){return"".concat(e.label," ").concat(e.value)},Za=function(e){return function(r,i){if(r.data.__isNew__)return!0;var n=w({ignoreCase:!0,ignoreAccents:!0,stringify:Qa,trim:!0,matchFrom:"any"},e),o=n.ignoreCase,u=n.ignoreAccents,s=n.stringify,a=n.trim,l=n.matchFrom,c=a?on(i):i,d=a?on(s(r)):s(r);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Xa(c),d=Jn(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ja=["innerRef"];function eu(t){var e=t.innerRef,r=se(t,Ja),i=Oo(r,"onExited","in","enter","exit","appear");return S("input",F({ref:e},i,{css:Dt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var tu=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function nu(t){var e=t.isEnabled,r=t.onBottomArrive,i=t.onBottomLeave,n=t.onTopArrive,o=t.onTopLeave,u=m.useRef(!1),s=m.useRef(!1),a=m.useRef(0),l=m.useRef(null),c=m.useCallback(function(f,v){if(l.current!==null){var E=l.current,y=E.scrollTop,A=E.scrollHeight,D=E.clientHeight,O=l.current,C=v>0,I=A-D-y,T=!1;I>v&&u.current&&(i&&i(f),u.current=!1),C&&s.current&&(o&&o(f),s.current=!1),C&&v>I?(r&&!u.current&&r(f),O.scrollTop=A,T=!0,u.current=!0):!C&&-v>y&&(n&&!s.current&&n(f),O.scrollTop=0,T=!0,s.current=!0),T&&tu(f)}},[r,i,n,o]),d=m.useCallback(function(f){c(f,f.deltaY)},[c]),g=m.useCallback(function(f){a.current=f.changedTouches[0].clientY},[]),b=m.useCallback(function(f){var v=a.current-f.changedTouches[0].clientY;c(f,v)},[c]),p=m.useCallback(function(f){if(f){var v=So?{passive:!1}:!1;f.addEventListener("wheel",d,v),f.addEventListener("touchstart",g,v),f.addEventListener("touchmove",b,v)}},[b,g,d]),h=m.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",g,!1),f.removeEventListener("touchmove",b,!1))},[b,g,d]);return m.useEffect(function(){if(e){var f=l.current;return p(f),function(){h(f)}}},[e,p,h]),function(f){l.current=f}}var an=["boxSizing","height","overflow","paddingRight","position"],un={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function sn(t){t.preventDefault()}function ln(t){t.stopPropagation()}function cn(){var t=this.scrollTop,e=this.scrollHeight,r=t+this.offsetHeight;t===0?this.scrollTop=1:r===e&&(this.scrollTop=t-1)}function dn(){return"ontouchstart"in window||navigator.maxTouchPoints}var fn=!!(typeof window<"u"&&window.document&&window.document.createElement),xe=0,pe={capture:!1,passive:!1};function ru(t){var e=t.isEnabled,r=t.accountForScrollbars,i=r===void 0?!0:r,n=m.useRef({}),o=m.useRef(null),u=m.useCallback(function(a){if(fn){var l=document.body,c=l&&l.style;if(i&&an.forEach(function(p){var h=c&&c[p];n.current[p]=h}),i&&xe<1){var d=parseInt(n.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,b=window.innerWidth-g+d||0;Object.keys(un).forEach(function(p){var h=un[p];c&&(c[p]=h)}),c&&(c.paddingRight="".concat(b,"px"))}l&&dn()&&(l.addEventListener("touchmove",sn,pe),a&&(a.addEventListener("touchstart",cn,pe),a.addEventListener("touchmove",ln,pe))),xe+=1}},[i]),s=m.useCallback(function(a){if(fn){var l=document.body,c=l&&l.style;xe=Math.max(xe-1,0),i&&xe<1&&an.forEach(function(d){var g=n.current[d];c&&(c[d]=g)}),l&&dn()&&(l.removeEventListener("touchmove",sn,pe),a&&(a.removeEventListener("touchstart",cn,pe),a.removeEventListener("touchmove",ln,pe)))}},[i]);return m.useEffect(function(){if(e){var a=o.current;return u(a),function(){s(a)}}},[e,u,s]),function(a){o.current=a}}var iu=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},ou={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function au(t){var e=t.children,r=t.lockEnabled,i=t.captureEnabled,n=i===void 0?!0:i,o=t.onBottomArrive,u=t.onBottomLeave,s=t.onTopArrive,a=t.onTopLeave,l=nu({isEnabled:n,onBottomArrive:o,onBottomLeave:u,onTopArrive:s,onTopLeave:a}),c=ru({isEnabled:r}),d=function(b){l(b),c(b)};return S(m.Fragment,null,r&&S("div",{onClick:iu,css:ou}),e(d))}var uu={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},su=function(e){var r=e.name,i=e.onFocus;return S("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:uu,value:"",onChange:function(){}})},lu=su;function Rt(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function cu(){return Rt(/^iPhone/i)}function er(){return Rt(/^Mac/i)}function du(){return Rt(/^iPad/i)||er()&&navigator.maxTouchPoints>1}function fu(){return cu()||du()}function pu(){return er()||fu()}var hu=function(e){return e.label},mu=function(e){return e.label},vu=function(e){return e.value},gu=function(e){return!!e.isDisabled},bu={clearIndicator:ea,container:_o,control:ua,dropdownIndicator:Zo,group:da,groupHeading:pa,indicatorsContainer:Yo,indicatorSeparator:na,input:ga,loadingIndicator:oa,loadingMessage:Bo,menu:Po,menuList:ko,menuPortal:No,multiValue:ya,multiValueLabel:Sa,multiValueRemove:wa,noOptionsMessage:$o,option:Ma,placeholder:Ra,singleValue:Ta,valueContainer:Wo},xu={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Eu=4,tr=4,Cu=38,yu=tr*2,Su={baseUnit:tr,controlHeight:Cu,menuGutter:yu},dt={borderRadius:Eu,colors:xu,spacing:Su},wu={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:en(),captureMenuScroll:!en(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Za(),formatGroupLabel:hu,getOptionLabel:mu,getOptionValue:vu,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:gu,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Co(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function pn(t,e,r,i){var n=ir(t,e,r),o=or(t,e,r),u=rr(t,e),s=Ue(t,e);return{type:"option",data:e,isDisabled:n,isSelected:o,label:u,value:s,index:i}}function $e(t,e){return t.options.map(function(r,i){if("options"in r){var n=r.options.map(function(u,s){return pn(t,u,e,s)}).filter(function(u){return mn(t,u)});return n.length>0?{type:"group",data:r,options:n,index:i}:void 0}var o=pn(t,r,e,i);return mn(t,o)?o:void 0}).filter(wo)}function nr(t){return t.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Et(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function hn(t,e){return t.reduce(function(r,i){return i.type==="group"?r.push.apply(r,Et(i.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(i.index,"-").concat(n.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function Fu(t,e){return nr($e(t,e))}function mn(t,e){var r=t.inputValue,i=r===void 0?"":r,n=e.data,o=e.isSelected,u=e.label,s=e.value;return(!ur(t)||!o)&&ar(t,{label:u,value:s,data:n},i)}function Ou(t,e){var r=t.focusedValue,i=t.selectValue,n=i.indexOf(r);if(n>-1){var o=e.indexOf(r);if(o>-1)return r;if(n<e.length)return e[n]}return null}function Au(t,e){var r=t.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var ft=function(e,r){var i,n=(i=e.find(function(o){return o.data===r}))===null||i===void 0?void 0:i.id;return n||null},rr=function(e,r){return e.getOptionLabel(r)},Ue=function(e,r){return e.getOptionValue(r)};function ir(t,e,r){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,r):!1}function or(t,e,r){if(r.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,r);var i=Ue(t,e);return r.some(function(n){return Ue(t,n)===i})}function ar(t,e,r){return t.filterOption?t.filterOption(e,r):!0}var ur=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Du=1,sr=function(t){Or(r,t);var e=Ar(r);function r(i){var n;if(Dr(this,r),n=e.call(this,i),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=pu(),n.controlRef=null,n.getControlRef=function(a){n.controlRef=a},n.focusedOptionRef=null,n.getFocusedOptionRef=function(a){n.focusedOptionRef=a},n.menuListRef=null,n.getMenuListRef=function(a){n.menuListRef=a},n.inputRef=null,n.getInputRef=function(a){n.inputRef=a},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(a,l){var c=n.props,d=c.onChange,g=c.name;l.name=g,n.ariaOnChange(a,l),d(a,l)},n.setValue=function(a,l,c){var d=n.props,g=d.closeMenuOnSelect,b=d.isMulti,p=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:p}),g&&(n.setState({inputIsHiddenAfterUpdate:!b}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(a,{action:l,option:c})},n.selectOption=function(a){var l=n.props,c=l.blurInputOnSelect,d=l.isMulti,g=l.name,b=n.state.selectValue,p=d&&n.isOptionSelected(a,b),h=n.isOptionDisabled(a,b);if(p){var f=n.getOptionValue(a);n.setValue(b.filter(function(v){return n.getOptionValue(v)!==f}),"deselect-option",a)}else if(!h)d?n.setValue([].concat(Et(b),[a]),"select-option",a):n.setValue(a,"select-option");else{n.ariaOnChange(a,{action:"select-option",option:a,name:g});return}c&&n.blurInput()},n.removeValue=function(a){var l=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(a),g=c.filter(function(p){return n.getOptionValue(p)!==d}),b=Re(l,g,g[0]||null);n.onChange(b,{action:"remove-value",removedValue:a}),n.focusInput()},n.clearValue=function(){var a=n.state.selectValue;n.onChange(Re(n.props.isMulti,[],null),{action:"clear",removedValues:a})},n.popValue=function(){var a=n.props.isMulti,l=n.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),g=Re(a,d,d[0]||null);n.onChange(g,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(a){return ft(n.state.focusableOptionsWithIds,a)},n.getFocusableOptionsWithIds=function(){return hn($e(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return vo.apply(void 0,[n.props.classNamePrefix].concat(l))},n.getOptionLabel=function(a){return rr(n.props,a)},n.getOptionValue=function(a){return Ue(n.props,a)},n.getStyles=function(a,l){var c=n.props.unstyled,d=bu[a](l,c);d.boxSizing="border-box";var g=n.props.styles[a];return g?g(d,l):d},n.getClassNames=function(a,l){var c,d;return(c=(d=n.props.classNames)[a])===null||c===void 0?void 0:c.call(d,l)},n.getElementId=function(a){return"".concat(n.state.instancePrefix,"-").concat(a)},n.getComponents=function(){return Ha(n.props)},n.buildCategorizedOptions=function(){return $e(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return nr(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(a,l){n.setState({ariaSelection:w({value:a},l)})},n.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(a){n.blockOptionHover=!1},n.onControlMouseDown=function(a){if(!a.defaultPrevented){var l=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&n.onMenuClose():l&&n.openMenu("first"):(l&&(n.openAfterFocus=!0),n.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},n.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!n.props.isDisabled){var l=n.props,c=l.isMulti,d=l.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),a.preventDefault()}},n.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(n.clearValue(),a.preventDefault(),n.openAfterFocus=!1,a.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(a){typeof n.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&it(a.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(a)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(a){var l=a.touches,c=l&&l.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(a){var l=a.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),g=Math.abs(c.clientY-n.initialTouchY),b=5;n.userIsDragging=d>b||g>b}},n.onTouchEnd=function(a){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(a.target)&&n.menuListRef&&!n.menuListRef.contains(a.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(a){n.userIsDragging||n.onControlMouseDown(a)},n.onClearIndicatorTouchEnd=function(a){n.userIsDragging||n.onClearIndicatorMouseDown(a)},n.onDropdownIndicatorTouchEnd=function(a){n.userIsDragging||n.onDropdownIndicatorMouseDown(a)},n.handleInputChange=function(a){var l=n.props.inputValue,c=a.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:l}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(a){n.props.onFocus&&n.props.onFocus(a),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(a){var l=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(a),n.onInputChange("",{action:"input-blur",prevInputValue:l}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(a){if(!(n.blockOptionHover||n.state.focusedOption===a)){var l=n.getFocusableOptions(),c=l.indexOf(a);n.setState({focusedOption:a,focusedOptionId:c>-1?n.getFocusedOptionId(a):null})}},n.shouldHideSelectedOptions=function(){return ur(n.props)},n.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),n.focus()},n.onKeyDown=function(a){var l=n.props,c=l.isMulti,d=l.backspaceRemovesValue,g=l.escapeClearsValue,b=l.inputValue,p=l.isClearable,h=l.isDisabled,f=l.menuIsOpen,v=l.onKeyDown,E=l.tabSelectsValue,y=l.openMenuOnFocus,A=n.state,D=A.focusedOption,O=A.focusedValue,C=A.selectValue;if(!h&&!(typeof v=="function"&&(v(a),a.defaultPrevented))){switch(n.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||b)return;n.focusValue("previous");break;case"ArrowRight":if(!c||b)return;n.focusValue("next");break;case"Delete":case"Backspace":if(b)return;if(O)n.removeValue(O);else{if(!d)return;c?n.popValue():p&&n.clearValue()}break;case"Tab":if(n.isComposing||a.shiftKey||!f||!E||!D||y&&n.isOptionSelected(D,C))return;n.selectOption(D);break;case"Enter":if(a.keyCode===229)break;if(f){if(!D||n.isComposing)return;n.selectOption(D);break}return;case"Escape":f?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:b}),n.onMenuClose()):p&&g&&n.clearValue();break;case" ":if(b)return;if(!f){n.openMenu("first");break}if(!D)return;n.selectOption(D);break;case"ArrowUp":f?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":f?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!f)return;n.focusOption("pageup");break;case"PageDown":if(!f)return;n.focusOption("pagedown");break;case"Home":if(!f)return;n.focusOption("first");break;case"End":if(!f)return;n.focusOption("last");break;default:return}a.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++Du),n.state.selectValue=Zt(i.value),i.menuIsOpen&&n.state.selectValue.length){var o=n.getFocusableOptionsWithIds(),u=n.buildFocusableOptions(),s=u.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=o,n.state.focusedOption=u[s],n.state.focusedOptionId=ft(o,u[s])}return n}return Ir(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Jt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var o=this.props,u=o.isDisabled,s=o.menuIsOpen,a=this.state.isFocused;(a&&!u&&n.isDisabled||a&&s&&!n.menuIsOpen)&&this.focusInput(),a&&u&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!u&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Jt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,o){this.props.onInputChange(n,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var o=this,u=this.state,s=u.selectValue,a=u.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(n){var o=this.state,u=o.selectValue,s=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=u.indexOf(s);s||(a=-1);var l=u.length-1,c=-1;if(u.length){switch(n){case"previous":a===0?c=0:a===-1?c=l:c=a-1;break;case"next":a>-1&&a<l&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var a=0,l=s.indexOf(u);u||(l=-1),n==="up"?a=l>0?l-1:s.length-1:n==="down"?a=(l+1)%s.length:n==="pageup"?(a=l-o,a<0&&(a=0)):n==="pagedown"?(a=l+o,a>s.length-1&&(a=s.length-1)):n==="last"&&(a=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(dt):w(w({},dt),this.props.theme):dt}},{key:"getCommonProps",value:function(){var n=this.clearValue,o=this.cx,u=this.getStyles,s=this.getClassNames,a=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,b=d.isRtl,p=d.options,h=this.hasValue();return{clearValue:n,cx:o,getStyles:u,getClassNames:s,getValue:a,hasValue:h,isMulti:g,isRtl:b,options:p,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,o=n.isClearable,u=n.isMulti;return o===void 0?u:o}},{key:"isOptionDisabled",value:function(n,o){return ir(this.props,n,o)}},{key:"isOptionSelected",value:function(n,o){return or(this.props,n,o)}},{key:"filterOption",value:function(n,o){return ar(this.props,n,o)}},{key:"formatOptionLabel",value:function(n,o){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(n,{context:o,inputValue:u,selectValue:s})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,o=n.isDisabled,u=n.isSearchable,s=n.inputId,a=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,g=n.required,b=this.getComponents(),p=b.Input,h=this.state,f=h.inputIsHidden,v=h.ariaSelection,E=this.commonProps,y=s||this.getElementId("input"),A=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(v==null?void 0:v.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?m.createElement(p,F({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:a},A)):m.createElement(eu,F({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ze,onFocus:this.onInputFocus,disabled:o,tabIndex:l,inputMode:"none",form:c,value:""},A))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,o=this.getComponents(),u=o.MultiValue,s=o.MultiValueContainer,a=o.MultiValueLabel,l=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,g=this.commonProps,b=this.props,p=b.controlShouldRenderValue,h=b.isDisabled,f=b.isMulti,v=b.inputValue,E=b.placeholder,y=this.state,A=y.selectValue,D=y.focusedValue,O=y.isFocused;if(!this.hasValue()||!p)return v?null:m.createElement(d,F({},g,{key:"placeholder",isDisabled:h,isFocused:O,innerProps:{id:this.getElementId("placeholder")}}),E);if(f)return A.map(function(I,T){var P=I===D,k="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return m.createElement(u,F({},g,{components:{Container:s,Label:a,Remove:l},isFocused:P,isDisabled:h,key:k,index:T,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(Q){Q.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(v)return null;var C=A[0];return m.createElement(c,F({},g,{data:C,isDisabled:h}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),o=n.ClearIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(o,F({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),o=n.LoadingIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!o||!l)return null;var d={"aria-hidden":"true"};return m.createElement(o,F({},u,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator,u=n.IndicatorSeparator;if(!o||!u)return null;var s=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused;return m.createElement(u,F({},s,{isDisabled:a,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator;if(!o)return null;var u=this.commonProps,s=this.props.isDisabled,a=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(o,F({},u,{innerProps:l,isDisabled:s,isFocused:a}))}},{key:"renderMenu",value:function(){var n=this,o=this.getComponents(),u=o.Group,s=o.GroupHeading,a=o.Menu,l=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,g=o.NoOptionsMessage,b=o.Option,p=this.commonProps,h=this.state.focusedOption,f=this.props,v=f.captureMenuScroll,E=f.inputValue,y=f.isLoading,A=f.loadingMessage,D=f.minMenuHeight,O=f.maxMenuHeight,C=f.menuIsOpen,I=f.menuPlacement,T=f.menuPosition,P=f.menuPortalTarget,k=f.menuShouldBlockScroll,B=f.menuShouldScrollIntoView,Q=f.noOptionsMessage,ie=f.onMenuScrollToTop,z=f.onMenuScrollToBottom;if(!C)return null;var H=function(Y,oe){var de=Y.type,Z=Y.data,fe=Y.isDisabled,ae=Y.isSelected,De=Y.label,lr=Y.value,Lt=h===Z,kt=fe?void 0:function(){return n.onOptionHover(Z)},cr=fe?void 0:function(){return n.selectOption(Z)},Tt="".concat(n.getElementId("option"),"-").concat(oe),dr={id:Tt,onClick:cr,onMouseMove:kt,onMouseOver:kt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ae};return m.createElement(b,F({},p,{innerProps:dr,data:Z,isDisabled:fe,isSelected:ae,key:Tt,label:De,type:de,value:lr,isFocused:Lt,innerRef:Lt?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(Y.data,"menu"))},ee;if(this.hasOptions())ee=this.getCategorizedOptions().map(function(N){if(N.type==="group"){var Y=N.data,oe=N.options,de=N.index,Z="".concat(n.getElementId("group"),"-").concat(de),fe="".concat(Z,"-heading");return m.createElement(u,F({},p,{key:Z,data:Y,options:oe,Heading:s,headingProps:{id:fe,data:N.data},label:n.formatGroupLabel(N.data)}),N.options.map(function(ae){return H(ae,"".concat(de,"-").concat(ae.index))}))}else if(N.type==="option")return H(N,"".concat(N.index))});else if(y){var X=A({inputValue:E});if(X===null)return null;ee=m.createElement(d,p,X)}else{var le=Q({inputValue:E});if(le===null)return null;ee=m.createElement(g,p,le)}var ce={minMenuHeight:D,maxMenuHeight:O,menuPlacement:I,menuPosition:T,menuShouldScrollIntoView:B},Ae=m.createElement(Vo,F({},p,ce),function(N){var Y=N.ref,oe=N.placerProps,de=oe.placement,Z=oe.maxHeight;return m.createElement(a,F({},p,ce,{innerRef:Y,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:y,placement:de}),m.createElement(au,{captureEnabled:v,onTopArrive:ie,onBottomArrive:z,lockEnabled:k},function(fe){return m.createElement(l,F({},p,{innerRef:function(De){n.getMenuListRef(De),fe(De)},innerProps:{role:"listbox","aria-multiselectable":p.isMulti,id:n.getElementId("listbox")},isLoading:y,maxHeight:Z,focusedOption:h}),ee)}))});return P||T==="fixed"?m.createElement(c,F({},p,{appendTo:P,controlElement:this.controlRef,menuPlacement:I,menuPosition:T}),Ae):Ae}},{key:"renderFormField",value:function(){var n=this,o=this.props,u=o.delimiter,s=o.isDisabled,a=o.isMulti,l=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return m.createElement(lu,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(a)if(u){var g=d.map(function(h){return n.getOptionValue(h)}).join(u);return m.createElement("input",{name:l,type:"hidden",value:g})}else{var b=d.length>0?d.map(function(h,f){return m.createElement("input",{key:"i-".concat(f),name:l,type:"hidden",value:n.getOptionValue(h)})}):m.createElement("input",{name:l,type:"hidden",value:""});return m.createElement("div",null,b)}else{var p=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:l,type:"hidden",value:p})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,o=this.state,u=o.ariaSelection,s=o.focusedOption,a=o.focusedValue,l=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return m.createElement(qa,F({},n,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:a,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),o=n.Control,u=n.IndicatorsContainer,s=n.SelectContainer,a=n.ValueContainer,l=this.props,c=l.className,d=l.id,g=l.isDisabled,b=l.menuIsOpen,p=this.state.isFocused,h=this.commonProps=this.getCommonProps();return m.createElement(s,F({},h,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:p}),this.renderLiveRegion(),m.createElement(o,F({},h,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:p,menuIsOpen:b}),m.createElement(a,F({},h,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(u,F({},h,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,o){var u=o.prevProps,s=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,l=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,g=o.instancePrefix,b=n.options,p=n.value,h=n.menuIsOpen,f=n.inputValue,v=n.isMulti,E=Zt(p),y={};if(u&&(p!==u.value||b!==u.options||h!==u.menuIsOpen||f!==u.inputValue)){var A=h?Fu(n,E):[],D=h?hn($e(n,E),"".concat(g,"-option")):[],O=s?Ou(o,E):null,C=Au(o,A),I=ft(D,C);y={selectValue:E,focusedOption:C,focusedOptionId:I,focusableOptionsWithIds:D,focusedValue:O,clearFocusValueOnUpdate:!1}}var T=a!=null&&n!==u?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},P=l,k=c&&d;return c&&!k&&(P={value:Re(v,E,E[0]||null),options:E,action:"initial-input-focus"},k=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(P=null),w(w(w({},y),T),{},{prevProps:n,ariaSelection:P,prevWasFocused:k})}}]),r}(m.Component);sr.defaultProps=wu;var Iu=m.forwardRef(function(t,e){var r=Kr(t);return m.createElement(sr,F({ref:e},r))}),vn=Iu;function Mu(t,e,r){var i=this,n=m.useRef(null),o=m.useRef(0),u=m.useRef(null),s=m.useRef([]),a=m.useRef(),l=m.useRef(),c=m.useRef(t),d=m.useRef(!0);c.current=t;var g=typeof window<"u",b=!e&&e!==0&&g;if(typeof t!="function")throw new TypeError("Expected a function");e=+e||0;var p=!!(r=r||{}).leading,h=!("trailing"in r)||!!r.trailing,f="maxWait"in r,v="debounceOnServer"in r&&!!r.debounceOnServer,E=f?Math.max(+r.maxWait||0,e):null;m.useEffect(function(){return d.current=!0,function(){d.current=!1}},[]);var y=m.useMemo(function(){var A=function(P){var k=s.current,B=a.current;return s.current=a.current=null,o.current=P,l.current=c.current.apply(B,k)},D=function(P,k){b&&cancelAnimationFrame(u.current),u.current=b?requestAnimationFrame(P):setTimeout(P,k)},O=function(P){if(!d.current)return!1;var k=P-n.current;return!n.current||k>=e||k<0||f&&P-o.current>=E},C=function(P){return u.current=null,h&&s.current?A(P):(s.current=a.current=null,l.current)},I=function P(){var k=Date.now();if(O(k))return C(k);if(d.current){var B=e-(k-n.current),Q=f?Math.min(B,E-(k-o.current)):B;D(P,Q)}},T=function(){if(g||v){var P=Date.now(),k=O(P);if(s.current=[].slice.call(arguments),a.current=i,n.current=P,k){if(!u.current&&d.current)return o.current=n.current,D(I,e),p?A(n.current):l.current;if(f)return D(I,e),A(n.current)}return u.current||D(I,e),l.current}};return T.cancel=function(){u.current&&(b?cancelAnimationFrame(u.current):clearTimeout(u.current)),o.current=0,s.current=n.current=a.current=u.current=null},T.isPending=function(){return!!u.current},T.flush=function(){return u.current?C(Date.now()):l.current},T},[p,f,e,E,h,b,g,v]);return y}const Pu=t=>t.slice(0,1).toUpperCase()+t.slice(1),Vu=()=>{const[t,e]=m.useState(""),r=xt(),i=Ce(En),{category:n,recomended:o}=i,u=Ce(zr),s=[{value:"all",label:"Categories"},...u.map(({category:p})=>({value:p,label:Pu(p)}))];m.useEffect(()=>{r(hr())},[r]);const a=Mu(p=>{r(ge({...i,search:p}))},300),l=({target:{value:p}})=>{e(p),a(p)},c=p=>{p.preventDefault();const h=p.target.elements[0].value;r(ge({...i,search:h}))},d=()=>{e(""),r(ge({...i,search:""}))},g=p=>{r(ge({...i,category:p}))},b=p=>{r(ge({...i,recomended:p}))};return x.jsxs(x.Fragment,{children:[x.jsx(kr,{children:"Filters"}),x.jsxs(Rr,{children:[x.jsx(Lr,{children:x.jsxs(Sr,{onSubmit:c,children:[x.jsx(Tr,{type:"text",placeholder:"Search",name:"search",value:t,onChange:l}),t!==""&&x.jsx($r,{type:"button",onClick:d,children:x.jsx("svg",{children:x.jsx("use",{href:`${ye}#icon-x`})})}),x.jsx(Br,{type:"submit",children:x.jsx("svg",{children:x.jsx("use",{href:`${ye}#icon-search`})})})]})}),x.jsxs(jr,{children:[x.jsx(vn,{name:"category",value:n,onChange:g,options:s,placeholder:"Categories",styles:Hr}),x.jsx(vn,{name:"recomended",value:o,defaultValue:Bt[0],options:Bt,onChange:b,styles:Nr})]})]})]})},Ru=M.div``,Lu=M.form`
  padding: 48px 12px;

  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,ku=M.label`
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`,Tu=M.input`
  padding: 8px 14px;
  width: 257px;
  border: 1px solid #e6533c;
  border-radius: 12px;
  color: rgba(239, 237, 232, 0.3);
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 214px;
  }
`,$u=M.label`
  position: relative;
  display: block;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-top: 0;
  }
`,Bu=M.input`
  padding: 8px 14px;
  width: 257px;
  border: 1px solid #e6533c;
  border-radius: 12px;
  color: #efede8;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 125px;
  }
`,ju=M.p`
  position: absolute;
  top: 10px;
  right: 33px;
  margin: 0;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Hu=M.div`
  margin-top: 16px;
`,Nu=M.p`
  display: inline-block;
  margin: 0 4px 0 0;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,zu=M.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,_u=M.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`,Uu=M.button`
  padding: 12px 32px;
  margin-right: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;
  color: #efede8;
  background-color: #e6533c;
  border: none;
  border-radius: 12px;

  @media screen and (min-width: 375px) {
    margin-right: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
    margin-right: 16px;
  }
`,Wu=M.button`
  padding: 12px 36px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;
  color: #efede8;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    padding: 13px 40px;
    font-size: 20px;
    line-height: 1.2;
  }
`,Gu=({id:t,productName:e,calories:r,onClick:i,onClickSuccess:n,transferCaloriesAmount:o})=>{const u=xt(),[s,a]=m.useState(""),l=Math.round(s*r/100),c={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},d={productId:t,amount:s,date:Mr(new Date,"dd-MM-yyyy")},g=p=>{if(p.preventDefault(),l<=0){a(0),mr.error("Weight must be greater than 0",c);return}u(vr(d)),i(),n(),o(l)},b=()=>{i()};return x.jsx(Ru,{children:x.jsxs(Lu,{children:[x.jsx(ku,{children:x.jsx(Tu,{type:"text",value:e,name:"productName",disabled:!0})}),x.jsxs($u,{children:[x.jsx(Bu,{type:"number",value:s,name:"productQuantity",onChange:p=>a(p.target.value),placeholder:"0"}),x.jsx(ju,{children:"grams"})]}),x.jsxs(Hu,{children:[x.jsx(Nu,{children:"Calories:"}),x.jsx(zu,{children:l})]}),x.jsxs(_u,{children:[x.jsx(Uu,{type:"submit",onClick:g,children:"Add to diary"}),x.jsx(Wu,{type:"button",onClick:b,children:"Cancel"})]})]})})},Yu="/leader-code-team-power-pulse/assets/avocado-832d00b1.png",qu=M.div`
  padding: 48px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 375px) {
    padding: 48px 106px;
  }

  @media screen and (min-width: 768px) {
    padding: 64px 137px;
  }
`,Ku=M.img`
  margin-bottom: 3px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,Xu=M.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
`,Qu=M.p`
  margin-top: 0;
  margin-bottom: 24px;
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Zu=M.span`
  color: #e6533c;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
`,Ju=M.button`
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`,es=M(gr)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`,ts=M.span`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
`,ns=M.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.3);
`,rs=({onClick:t,calories:e})=>x.jsxs(qu,{children:[x.jsx(Ku,{src:Yu,alt:"avocado",loading:"lazy"}),x.jsx(Xu,{children:"Well done"}),x.jsxs(Qu,{children:["Calories: ",x.jsx(Zu,{children:e})]}),x.jsx(Ju,{type:"button",onClick:t,children:"Next product"}),x.jsxs(es,{to:"/diary",children:[x.jsx(ts,{children:"To the diary"}),x.jsx(ns,{children:x.jsx("use",{href:`${ye}#icon-arrow`})})]})]}),is=M.div`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }
`,os=M.div`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`,as=M.div`
  display: flex;
  gap: 16px;
`,us=M.div`
  display: flex;
  gap: 8px;

  div {
    width: 14px;
    height: 14px;
    background-color: ${t=>t.recommendation?"rgb(65, 155, 9)":"rgb(233, 16, 29)"};
    border-radius: 10px;
    margin: auto;
  }

  p {
    margin: auto 0;
    color: var(--white-color);
    font-size: 12px;
    line-height: 1.5;
  }
`,ss=M.button`
  color: var(--orange-color);
  background-color: inherit;
  font-size: 14px;
  line-height: 1.29;
  display: flex;
  align-items: center;
  padding: 1px 0;
  transition: all 0.1s linear;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    stroke: var(--orange-color);
    transition: all 0.1s linear;
  }

  &:hover {
    color: var(--hover-color);

    svg {
      stroke: var(--hover-color);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 4px 0;
    font-size: 16px;
    line-height: 1.5;
  }
`,ls=M.div`
  margin-bottom: 8px;
  display: flex;
  gap: 16px;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    height: 24px;
    background-color: var(--beige-color);
    border-radius: 50%;

    svg {
      width: 14px;
      height: 16px;
      fill: var(--white-color);
    }
  }

  p {
    width: 100%;
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    line-height: 1.2;
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  @media screen and (min-width: 1440px) {
    p {
      margin-right: 0;
    }
  }
`,cs=M.ul`
  display: flex;
  gap: 16px;

  li p {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0.4);
    text-transform: capitalize;
    span {
      margin-left: 4px;
      color: var(--white-color);
    }
  }
`,ds=M.p`
  display: flex;
  span {
    max-width: 76px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,fs=({id:t,weight:e,calories:r,category:i,title:n,isRecomended:o})=>{const[u,s]=m.useState(!1),[a,l]=m.useState(!1),c=()=>{s(h=>!h)},d=()=>{l(h=>!h)},[g,b]=m.useState(""),p=h=>{b(h)};return x.jsxs(x.Fragment,{children:[u&&x.jsx(jt,{onClick:c,children:x.jsx(Gu,{id:t,productName:n,calories:r,onClick:c,onClickSuccess:d,transferCaloriesAmount:p})}),a&&x.jsxs(jt,{onClick:d,children:[x.jsx(rs,{onClick:d,calories:g})," "]}),x.jsxs(is,{children:[x.jsx(os,{children:x.jsx("p",{children:"Diet"})}),x.jsxs(as,{children:[x.jsx(br,{shouldForwardProp:xr,children:x.jsxs(us,{recommendation:o,children:[x.jsx("div",{}),x.jsx("p",{children:o?"Recommended":"Not recommended"})]})}),x.jsxs(ss,{type:"button",onClick:c,children:["Add",x.jsx("svg",{children:x.jsx("use",{href:`${ye}#icon-arrow-right`})})]})]})]}),x.jsxs(ls,{children:[x.jsx("div",{children:x.jsx("svg",{children:x.jsx("use",{href:`${ye}#icon-running-figure`})})}),x.jsx("p",{children:n})]}),x.jsxs(cs,{children:[x.jsx("li",{children:x.jsxs("p",{children:["Calories:",x.jsx("span",{children:r})]})}),x.jsx("li",{children:x.jsxs(ds,{children:["Category:",x.jsx("span",{children:i})]})}),x.jsx("li",{children:x.jsxs("p",{children:["Weight:",x.jsx("span",{children:e})]})})]})]})},ps=M.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    width: 704px;
    height: 660px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--orange-light-color);
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 28px;
    width: 850px;
    height: 487px;
  }
`,hs=M.div`
  max-width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;

  @media screen and (min-width: 768px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
    width: 405px;
  }
`,ms=M.div`
  width: 580px;
  margin-top: 132px;
`,gn=M.span`
  color: var(--orange-color);
`,vs=()=>x.jsxs(ms,{children:[x.jsxs(Ht,{children:[x.jsx(gn,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),x.jsx(Ht,{children:x.jsx(gn,{children:"Try changing the search parameters."})})]}),gs=t=>t.profile.profile.blood,bs=()=>{const t=xt(),e=Ce(_r),r=Ce(gs),i=Ce(En),{search:n,category:o,recomended:u}=i;return m.useEffect(()=>{t(Er({search:n,category:o.value,recomended:u.value}))},[t,n,o,u]),x.jsx("div",{children:e.length===0?x.jsx(vs,{}):x.jsx(ps,{children:e.map(({_id:s,weight:a,calories:l,category:c,title:d,groupBloodNotAllowed:g})=>x.jsx(hs,{children:x.jsx(fs,{id:s,weight:a,calories:l,category:c,title:d,isRecomended:!g[r]})},s))})})},xs=M.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
  }
`,Vs=()=>x.jsxs(Cr,{backgrounds:{desctop:Pr,desctopretina:Vr,tablet:Nt,tabletretina:Nt,mobil:zt,mobilretina:zt},children:[x.jsx(xs,{children:x.jsx(yr,{tag:"h1",size:"h3",children:"Products"})}),x.jsx(Vu,{}),x.jsx(bs,{})]});export{Vs as default};