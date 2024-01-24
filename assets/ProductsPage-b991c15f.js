import{e as M,r as h,q as fr,R as $t,t as pr,a as xt,f as Ce,v as hr,j as x,w as Bt,x as ve,Q as mr,y as gr,p as vr,L as br,z as xr,A as Er,C as Cr}from"./index-0a8fbc9a.js";import{S as yr}from"./Section-0e3314b1.js";import{T as Sr}from"./Text.styled-f3f40cac.js";import{s as $e,f as wr}from"./sprite-3c5adf59.js";import{F as Fr}from"./Form-fd53e7b2.js";import"./Fieldset.styled-faf51755.js";/* empty css                         */import{_ as Ee,a as bn,b as Or,c as Ar,d as Dr,e as Ir,f as Mr,g as Pr}from"./defineProperty-8501a314.js";import{B as jt,E as Vr}from"./ExerciseIcon-1780fdbd.js";import{T as Ht}from"./Text-6abc0f03.js";import{C as Rr}from"./Loader-e46ea32c.js";import"./InputValidation-704be027.js";const Lr="/leader-code-team-power-pulse/assets/products-1x-60ae029e.jpg",kr="/leader-code-team-power-pulse/assets/products-2x-88f016c5.jpg",zt="/leader-code-team-power-pulse/assets/products-tablet-2x-d8bdd0d5.jpg",Nt="/leader-code-team-power-pulse/assets/products-mobil-2x-b29d44f2.jpg",Tr=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
  }
`,$r=M.div`
  visibility: hidden;
  display: flex;
  height: 18px;
  padding-left: 1px;
  padding-right: 1px;
  align-items: center;
  position: absolute;
  right: 96px;
  top: 42px;

  p {
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    line-height: 1.28px;
  }

  @media screen and (min-width: 1440px) {
    visibility: visible;
  }
`,Br=M.input`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 14px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--normal-color);
  background-color: transparent;
  color: var(--white-color);
  font-size: 14px;
  line-height: 1.28;
  transition: all 100ms linear;
  cursor: pointer;

  &::placeholder {
    color: var(--white-color);
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    width: 234px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`,jr=M.button`
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
    top: 17px;
  }
`,Hr=M.button`
  background-color: transparent;
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 0;
  width: 18px;
  height: 18px;

  svg {
    transition: all 100ms linear;
    stroke: var(--white-color);
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus {
    svg {
      stroke: var(--hover-color);
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 17px;
  }
`,zr=M.div`
  display: flex;
  gap: 16px;
`,Nr=t=>t.products.categories,_r=t=>t.products.isLoading,xn=t=>t.products.filter;function _t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?_t(Object(r),!0).forEach(function(i){Ee(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Ur(t){if(Array.isArray(t))return t}function Wr(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,n,o,s,l=[],a=!0,u=!1;try{if(o=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(i=o.call(r)).done)&&(l.push(i.value),l.length!==e);a=!0);}catch(c){u=!0,n=c}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw n}}return l}}function Gr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(t,e){return Ur(t)||Wr(t,e)||bn(t,e)||Gr()}function Yr(t,e){if(t==null)return{};var r={},i=Object.keys(t),n,o;for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function ue(t,e){if(t==null)return{};var r=Yr(t,e),i,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var qr=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Kr(t){var e=t.defaultInputValue,r=e===void 0?"":e,i=t.defaultMenuIsOpen,n=i===void 0?!1:i,o=t.defaultValue,s=o===void 0?null:o,l=t.inputValue,a=t.menuIsOpen,u=t.onChange,c=t.onInputChange,d=t.onMenuClose,g=t.onMenuOpen,v=t.value,b=ue(t,qr),f=h.useState(l!==void 0?l:r),p=se(f,2),m=p[0],E=p[1],y=h.useState(a!==void 0?a:n),A=se(y,2),D=A[0],F=A[1],C=h.useState(v!==void 0?v:s),I=se(C,2),T=I[0],P=I[1],k=h.useCallback(function(X,le){typeof u=="function"&&u(X,le),P(X)},[u]),B=h.useCallback(function(X,le){var ce;typeof c=="function"&&(ce=c(X,le)),E(ce!==void 0?ce:X)},[c]),Q=h.useCallback(function(){typeof g=="function"&&g(),F(!0)},[g]),ie=h.useCallback(function(){typeof d=="function"&&d(),F(!1)},[d]),N=l!==void 0?l:m,H=a!==void 0?a:D,ee=v!==void 0?v:T;return w(w({},b),{},{inputValue:N,menuIsOpen:H,onChange:k,onInputChange:B,onMenuClose:ie,onMenuOpen:Q,value:ee})}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},O.apply(this,arguments)}function Xr(t){if(Array.isArray(t))return Or(t)}function Qr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(t){return Xr(t)||Qr(t)||bn(t)||Zr()}function Jr(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function ei(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var ti=function(){function t(r){var i=this;this._insertTag=function(n){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,o),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ei(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Jr(n);try{o.insertRule(i,o.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),W="-ms-",Be="-moz-",V="-webkit-",En="comm",Ct="rule",yt="decl",ni="@import",Cn="@keyframes",ri="@layer",ii=Math.abs,We=String.fromCharCode,oi=Object.assign;function ai(t,e){return U(t,0)^45?(((e<<2^U(t,0))<<2^U(t,1))<<2^U(t,2))<<2^U(t,3):0}function yn(t){return t.trim()}function si(t,e){return(t=e.exec(t))?t[0]:t}function R(t,e,r){return t.replace(e,r)}function pt(t,e){return t.indexOf(e)}function U(t,e){return t.charCodeAt(e)|0}function ye(t,e,r){return t.slice(e,r)}function te(t){return t.length}function St(t){return t.length}function De(t,e){return e.push(t),t}function ui(t,e){return t.map(e).join("")}var Ge=1,me=1,Sn=0,G=0,j=0,ge="";function Ye(t,e,r,i,n,o,s){return{value:t,root:e,parent:r,type:i,props:n,children:o,line:Ge,column:me,length:s,return:""}}function be(t,e){return oi(Ye("",null,null,"",null,null,0),t,{length:-t.length},e)}function li(){return j}function ci(){return j=G>0?U(ge,--G):0,me--,j===10&&(me=1,Ge--),j}function q(){return j=G<Sn?U(ge,G++):0,me++,j===10&&(me=1,Ge++),j}function re(){return U(ge,G)}function Re(){return G}function Fe(t,e){return ye(ge,t,e)}function Se(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wn(t){return Ge=me=1,Sn=te(ge=t),G=0,[]}function Fn(t){return ge="",t}function Le(t){return yn(Fe(G-1,ht(t===91?t+2:t===40?t+1:t)))}function di(t){for(;(j=re())&&j<33;)q();return Se(t)>2||Se(j)>3?"":" "}function fi(t,e){for(;--e&&q()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Fe(t,Re()+(e<6&&re()==32&&q()==32))}function ht(t){for(;q();)switch(j){case t:return G;case 34:case 39:t!==34&&t!==39&&ht(j);break;case 40:t===41&&ht(t);break;case 92:q();break}return G}function pi(t,e){for(;q()&&t+j!==47+10;)if(t+j===42+42&&re()===47)break;return"/*"+Fe(e,G-1)+"*"+We(t===47?t:q())}function hi(t){for(;!Se(re());)q();return Fe(t,G)}function mi(t){return Fn(ke("",null,null,null,[""],t=wn(t),0,[0],t))}function ke(t,e,r,i,n,o,s,l,a){for(var u=0,c=0,d=s,g=0,v=0,b=0,f=1,p=1,m=1,E=0,y="",A=n,D=o,F=i,C=y;p;)switch(b=E,E=q()){case 40:if(b!=108&&U(C,d-1)==58){pt(C+=R(Le(E),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:C+=Le(E);break;case 9:case 10:case 13:case 32:C+=di(b);break;case 92:C+=fi(Re()-1,7);continue;case 47:switch(re()){case 42:case 47:De(gi(pi(q(),Re()),e,r),a);break;default:C+="/"}break;case 123*f:l[u++]=te(C)*m;case 125*f:case 59:case 0:switch(E){case 0:case 125:p=0;case 59+c:m==-1&&(C=R(C,/\f/g,"")),v>0&&te(C)-d&&De(v>32?Wt(C+";",i,r,d-1):Wt(R(C," ","")+";",i,r,d-2),a);break;case 59:C+=";";default:if(De(F=Ut(C,e,r,u,c,n,l,y,A=[],D=[],d),o),E===123)if(c===0)ke(C,e,F,F,A,o,d,l,D);else switch(g===99&&U(C,3)===110?100:g){case 100:case 108:case 109:case 115:ke(t,F,F,i&&De(Ut(t,F,F,0,0,n,l,y,n,A=[],d),D),n,D,d,l,i?A:D);break;default:ke(C,F,F,F,[""],D,0,l,D)}}u=c=v=0,f=m=1,y=C="",d=s;break;case 58:d=1+te(C),v=b;default:if(f<1){if(E==123)--f;else if(E==125&&f++==0&&ci()==125)continue}switch(C+=We(E),E*f){case 38:m=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(te(C)-1)*m,m=1;break;case 64:re()===45&&(C+=Le(q())),g=re(),c=d=te(y=C+=hi(Re())),E++;break;case 45:b===45&&te(C)==2&&(f=0)}}return o}function Ut(t,e,r,i,n,o,s,l,a,u,c){for(var d=n-1,g=n===0?o:[""],v=St(g),b=0,f=0,p=0;b<i;++b)for(var m=0,E=ye(t,d+1,d=ii(f=s[b])),y=t;m<v;++m)(y=yn(f>0?g[m]+" "+E:R(E,/&\f/g,g[m])))&&(a[p++]=y);return Ye(t,e,r,n===0?Ct:l,a,u,c)}function gi(t,e,r){return Ye(t,e,r,En,We(li()),ye(t,2,-2),0)}function Wt(t,e,r,i){return Ye(t,e,r,yt,ye(t,0,i),ye(t,i+1,-1),i)}function he(t,e){for(var r="",i=St(t),n=0;n<i;n++)r+=e(t[n],n,t,e)||"";return r}function vi(t,e,r,i){switch(t.type){case ri:if(t.children.length)break;case ni:case yt:return t.return=t.return||t.value;case En:return"";case Cn:return t.return=t.value+"{"+he(t.children,i)+"}";case Ct:t.value=t.props.join(",")}return te(r=he(t.children,i))?t.return=t.value+"{"+r+"}":""}function bi(t){var e=St(t);return function(r,i,n,o){for(var s="",l=0;l<e;l++)s+=t[l](r,i,n,o)||"";return s}}function xi(t){return function(e){e.root||(e=e.return)&&t(e)}}var Ei=function(e,r,i){for(var n=0,o=0;n=o,o=re(),n===38&&o===12&&(r[i]=1),!Se(o);)q();return Fe(e,G)},Ci=function(e,r){var i=-1,n=44;do switch(Se(n)){case 0:n===38&&re()===12&&(r[i]=1),e[i]+=Ei(G-1,r,i);break;case 2:e[i]+=Le(n);break;case 4:if(n===44){e[++i]=re()===58?"&\f":"",r[i]=e[i].length;break}default:e[i]+=We(n)}while(n=q());return e},yi=function(e,r){return Fn(Ci(wn(e),r))},Gt=new WeakMap,Si=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,i=e.parent,n=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!Gt.get(i))&&!n){Gt.set(e,!0);for(var o=[],s=yi(r,o),l=i.props,a=0,u=0;a<s.length;a++)for(var c=0;c<l.length;c++,u++)e.props[u]=o[a]?s[a].replace(/&\f/g,l[c]):l[c]+" "+s[a]}}},wi=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function On(t,e){switch(ai(t,e)){case 5103:return V+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return V+t+Be+t+W+t+t;case 6828:case 4268:return V+t+W+t+t;case 6165:return V+t+W+"flex-"+t+t;case 5187:return V+t+R(t,/(\w+).+(:[^]+)/,V+"box-$1$2"+W+"flex-$1$2")+t;case 5443:return V+t+W+"flex-item-"+R(t,/flex-|-self/,"")+t;case 4675:return V+t+W+"flex-line-pack"+R(t,/align-content|flex-|-self/,"")+t;case 5548:return V+t+W+R(t,"shrink","negative")+t;case 5292:return V+t+W+R(t,"basis","preferred-size")+t;case 6060:return V+"box-"+R(t,"-grow","")+V+t+W+R(t,"grow","positive")+t;case 4554:return V+R(t,/([^-])(transform)/g,"$1"+V+"$2")+t;case 6187:return R(R(R(t,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),t,"")+t;case 5495:case 3959:return R(t,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return R(R(t,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+t+t;case 4095:case 3583:case 4068:case 2532:return R(t,/(.+)-inline(.+)/,V+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(te(t)-1-e>6)switch(U(t,e+1)){case 109:if(U(t,e+4)!==45)break;case 102:return R(t,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+Be+(U(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~pt(t,"stretch")?On(R(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(U(t,e+1)!==115)break;case 6444:switch(U(t,te(t)-3-(~pt(t,"!important")&&10))){case 107:return R(t,":",":"+V)+t;case 101:return R(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+V+(U(t,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+W+"$2box$3")+t}break;case 5936:switch(U(t,e+11)){case 114:return V+t+W+R(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return V+t+W+R(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return V+t+W+R(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return V+t+W+t+t}return t}var Fi=function(e,r,i,n){if(e.length>-1&&!e.return)switch(e.type){case yt:e.return=On(e.value,e.length);break;case Cn:return he([be(e,{value:R(e.value,"@","@"+V)})],n);case Ct:if(e.length)return ui(e.props,function(o){switch(si(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return he([be(e,{props:[R(o,/:(read-\w+)/,":"+Be+"$1")]})],n);case"::placeholder":return he([be(e,{props:[R(o,/:(plac\w+)/,":"+V+"input-$1")]}),be(e,{props:[R(o,/:(plac\w+)/,":"+Be+"$1")]}),be(e,{props:[R(o,/:(plac\w+)/,W+"input-$1")]})],n)}return""})}},Oi=[Fi],Ai=function(e){var r=e.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){var p=f.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var n=e.stylisPlugins||Oi,o={},s,l=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var p=f.getAttribute("data-emotion").split(" "),m=1;m<p.length;m++)o[p[m]]=!0;l.push(f)});var a,u=[Si,wi];{var c,d=[vi,xi(function(f){c.insert(f)})],g=bi(u.concat(n,d)),v=function(p){return he(mi(p),g)};a=function(p,m,E,y){c=E,v(p?p+"{"+m.styles+"}":m.styles),y&&(b.inserted[m.name]=!0)}}var b={key:r,sheet:new ti({key:r,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return b.sheet.hydrate(l),b},An={exports:{}},L={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,wt=_?Symbol.for("react.element"):60103,Ft=_?Symbol.for("react.portal"):60106,qe=_?Symbol.for("react.fragment"):60107,Ke=_?Symbol.for("react.strict_mode"):60108,Xe=_?Symbol.for("react.profiler"):60114,Qe=_?Symbol.for("react.provider"):60109,Ze=_?Symbol.for("react.context"):60110,Ot=_?Symbol.for("react.async_mode"):60111,Je=_?Symbol.for("react.concurrent_mode"):60111,et=_?Symbol.for("react.forward_ref"):60112,tt=_?Symbol.for("react.suspense"):60113,Di=_?Symbol.for("react.suspense_list"):60120,nt=_?Symbol.for("react.memo"):60115,rt=_?Symbol.for("react.lazy"):60116,Ii=_?Symbol.for("react.block"):60121,Mi=_?Symbol.for("react.fundamental"):60117,Pi=_?Symbol.for("react.responder"):60118,Vi=_?Symbol.for("react.scope"):60119;function K(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case wt:switch(t=t.type,t){case Ot:case Je:case qe:case Xe:case Ke:case tt:return t;default:switch(t=t&&t.$$typeof,t){case Ze:case et:case rt:case nt:case Qe:return t;default:return e}}case Ft:return e}}}function Dn(t){return K(t)===Je}L.AsyncMode=Ot;L.ConcurrentMode=Je;L.ContextConsumer=Ze;L.ContextProvider=Qe;L.Element=wt;L.ForwardRef=et;L.Fragment=qe;L.Lazy=rt;L.Memo=nt;L.Portal=Ft;L.Profiler=Xe;L.StrictMode=Ke;L.Suspense=tt;L.isAsyncMode=function(t){return Dn(t)||K(t)===Ot};L.isConcurrentMode=Dn;L.isContextConsumer=function(t){return K(t)===Ze};L.isContextProvider=function(t){return K(t)===Qe};L.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===wt};L.isForwardRef=function(t){return K(t)===et};L.isFragment=function(t){return K(t)===qe};L.isLazy=function(t){return K(t)===rt};L.isMemo=function(t){return K(t)===nt};L.isPortal=function(t){return K(t)===Ft};L.isProfiler=function(t){return K(t)===Xe};L.isStrictMode=function(t){return K(t)===Ke};L.isSuspense=function(t){return K(t)===tt};L.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qe||t===Je||t===Xe||t===Ke||t===tt||t===Di||typeof t=="object"&&t!==null&&(t.$$typeof===rt||t.$$typeof===nt||t.$$typeof===Qe||t.$$typeof===Ze||t.$$typeof===et||t.$$typeof===Mi||t.$$typeof===Pi||t.$$typeof===Vi||t.$$typeof===Ii)};L.typeOf=K;An.exports=L;var Ri=An.exports,In=Ri,Li={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ki={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mn={};Mn[In.ForwardRef]=Li;Mn[In.Memo]=ki;var Ti=!0;function $i(t,e,r){var i="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):i+=n+" "}),i}var Pn=function(e,r,i){var n=e.key+"-"+r.name;(i===!1||Ti===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Bi=function(e,r,i){Pn(e,r,i);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var o=r;do e.insert(r===o?"."+n:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function ji(t){for(var e=0,r,i=0,n=t.length;n>=4;++i,n-=4)r=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Hi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zi=/[A-Z]|^ms/g,Ni=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Vn=function(e){return e.charCodeAt(1)===45},Yt=function(e){return e!=null&&typeof e!="boolean"},ot=fr(function(t){return Vn(t)?t:t.replace(zi,"-$&").toLowerCase()}),qt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ni,function(i,n,o){return ne={name:n,styles:o,next:ne},n})}return Hi[e]!==1&&!Vn(e)&&typeof r=="number"&&r!==0?r+"px":r};function we(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return ne={name:r.name,styles:r.styles,next:ne},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)ne={name:i.name,styles:i.styles,next:ne},i=i.next;var n=r.styles+";";return n}return _i(t,e,r)}case"function":{if(t!==void 0){var o=ne,s=r(t);return ne=o,we(t,e,s)}break}}if(e==null)return r;var l=e[r];return l!==void 0?l:r}function _i(t,e,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=we(t,e,r[n])+";";else for(var o in r){var s=r[o];if(typeof s!="object")e!=null&&e[s]!==void 0?i+=o+"{"+e[s]+"}":Yt(s)&&(i+=ot(o)+":"+qt(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)Yt(s[l])&&(i+=ot(o)+":"+qt(o,s[l])+";");else{var a=we(t,e,s);switch(o){case"animation":case"animationName":{i+=ot(o)+":"+a+";";break}default:i+=o+"{"+a+"}"}}}return i}var Kt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ne,Rn=function(e,r,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";ne=void 0;var s=e[0];s==null||s.raw===void 0?(n=!1,o+=we(i,r,s)):o+=s[0];for(var l=1;l<e.length;l++)o+=we(i,r,e[l]),n&&(o+=s[l]);Kt.lastIndex=0;for(var a="",u;(u=Kt.exec(o))!==null;)a+="-"+u[1];var c=ji(o)+a;return{name:c,styles:o,next:ne}},Ui=function(e){return e()},Wi=$t["useInsertionEffect"]?$t["useInsertionEffect"]:!1,Gi=Wi||Ui,At={}.hasOwnProperty,Ln=h.createContext(typeof HTMLElement<"u"?Ai({key:"css"}):null);Ln.Provider;var Yi=function(e){return h.forwardRef(function(r,i){var n=h.useContext(Ln);return e(r,n,i)})},qi=h.createContext({}),mt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ki=function(e,r){var i={};for(var n in r)At.call(r,n)&&(i[n]=r[n]);return i[mt]=e,i},Xi=function(e){var r=e.cache,i=e.serialized,n=e.isStringTag;return Pn(r,i,n),Gi(function(){return Bi(r,i,n)}),null},Qi=Yi(function(t,e,r){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var n=t[mt],o=[i],s="";typeof t.className=="string"?s=$i(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var l=Rn(o,void 0,h.useContext(qi));s+=e.key+"-"+l.name;var a={};for(var u in t)At.call(t,u)&&u!=="css"&&u!==mt&&(a[u]=t[u]);return a.ref=r,a.className=s,h.createElement(h.Fragment,null,h.createElement(Xi,{cache:e,serialized:l,isStringTag:typeof n=="string"}),h.createElement(n,a))}),Zi=Qi,S=function(e,r){var i=arguments;if(r==null||!At.call(r,"css"))return h.createElement.apply(void 0,i);var n=i.length,o=new Array(n);o[0]=Zi,o[1]=Ki(e,r);for(var s=2;s<n;s++)o[s]=i[s];return h.createElement.apply(null,o)};function Dt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Rn(e)}var Ji=function(){var e=Dt.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function eo(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const to=Math.min,no=Math.max,je=Math.round,Ie=Math.floor,He=t=>({x:t,y:t});function ro(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function kn(t){return $n(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Tn(t){var e;return(e=($n(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $n(t){return t instanceof Node||t instanceof J(t).Node}function gt(t){return t instanceof Element||t instanceof J(t).Element}function It(t){return t instanceof HTMLElement||t instanceof J(t).HTMLElement}function Xt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}function Bn(t){const{overflow:e,overflowX:r,overflowY:i,display:n}=Mt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(n)}function io(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function oo(t){return["html","body","#document"].includes(kn(t))}function Mt(t){return J(t).getComputedStyle(t)}function ao(t){if(kn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||Tn(t);return Xt(e)?e.host:e}function jn(t){const e=ao(t);return oo(e)?t.ownerDocument?t.ownerDocument.body:t.body:It(e)&&Bn(e)?e:jn(e)}function ze(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=jn(t),o=n===((i=t.ownerDocument)==null?void 0:i.body),s=J(n);return o?e.concat(s,s.visualViewport||[],Bn(n)?n:[],s.frameElement&&r?ze(s.frameElement):[]):e.concat(n,ze(n,[],r))}function so(t){const e=Mt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=It(t),o=n?t.offsetWidth:r,s=n?t.offsetHeight:i,l=je(r)!==o||je(i)!==s;return l&&(r=o,i=s),{width:r,height:i,$:l}}function Pt(t){return gt(t)?t:t.contextElement}function at(t){const e=Pt(t);if(!It(e))return He(1);const r=e.getBoundingClientRect(),{width:i,height:n,$:o}=so(e);let s=(o?je(r.width):r.width)/i,l=(o?je(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const uo=He(0);function lo(t){const e=J(t);return!io()||!e.visualViewport?uo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function co(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==J(t)?!1:e}function Qt(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),o=Pt(t);let s=He(1);e&&(i?gt(i)&&(s=at(i)):s=at(t));const l=co(o,r,i)?lo(o):He(0);let a=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(o){const g=J(o),v=i&&gt(i)?J(i):i;let b=g.frameElement;for(;b&&i&&v!==g;){const f=at(b),p=b.getBoundingClientRect(),m=Mt(b),E=p.left+(b.clientLeft+parseFloat(m.paddingLeft))*f.x,y=p.top+(b.clientTop+parseFloat(m.paddingTop))*f.y;a*=f.x,u*=f.y,c*=f.x,d*=f.y,a+=E,u+=y,b=J(b).frameElement}}return ro({width:c,height:d,x:a,y:u})}function fo(t,e){let r=null,i;const n=Tn(t);function o(){clearTimeout(i),r&&r.disconnect(),r=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:c,width:d,height:g}=t.getBoundingClientRect();if(l||e(),!d||!g)return;const v=Ie(c),b=Ie(n.clientWidth-(u+d)),f=Ie(n.clientHeight-(c+g)),p=Ie(u),E={rootMargin:-v+"px "+-b+"px "+-f+"px "+-p+"px",threshold:no(0,to(1,a))||1};let y=!0;function A(D){const F=D[0].intersectionRatio;if(F!==a){if(!y)return s();F?s(!1,F):i=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{r=new IntersectionObserver(A,{...E,root:n.ownerDocument})}catch{r=new IntersectionObserver(A,E)}r.observe(t)}return s(!0),o}function po(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,u=Pt(t),c=n||o?[...u?ze(u):[],...ze(e)]:[];c.forEach(m=>{n&&m.addEventListener("scroll",r,{passive:!0}),o&&m.addEventListener("resize",r)});const d=u&&l?fo(u,r):null;let g=-1,v=null;s&&(v=new ResizeObserver(m=>{let[E]=m;E&&E.target===u&&v&&(v.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{v&&v.observe(e)})),r()}),u&&!a&&v.observe(u),v.observe(e));let b,f=a?Qt(t):null;a&&p();function p(){const m=Qt(t);f&&(m.x!==f.x||m.y!==f.y||m.width!==f.width||m.height!==f.height)&&r(),f=m,b=requestAnimationFrame(p)}return r(),()=>{c.forEach(m=>{n&&m.removeEventListener("scroll",r),o&&m.removeEventListener("resize",r)}),d&&d(),v&&v.disconnect(),v=null,a&&cancelAnimationFrame(b)}}var vt=h.useLayoutEffect,ho=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ne=function(){};function mo(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function go(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];var o=[].concat(i);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&o.push("".concat(mo(t,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Zt=function(e){return Fo(e)?e.filter(Boolean):Ar(e)==="object"&&e!==null?[e]:[]},Hn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=ue(e,ho);return w({},r)},$=function(e,r,i){var n=e.cx,o=e.getStyles,s=e.getClassNames,l=e.className;return{css:o(r,e),className:n(i??{},s(r,e),l)}};function it(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function vo(t){return it(t)?window.innerHeight:t.clientHeight}function zn(t){return it(t)?window.pageYOffset:t.scrollTop}function _e(t,e){if(it(t)){window.scrollTo(0,e);return}t.scrollTop=e}function bo(t){var e=getComputedStyle(t),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function xo(t,e,r,i){return r*((t=t/i-1)*t*t+1)+e}function Me(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ne,n=zn(t),o=e-n,s=10,l=0;function a(){l+=s;var u=xo(l,n,o,r);_e(t,u),l<r?window.requestAnimationFrame(a):i(t)}a()}function Jt(t,e){var r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=e.offsetHeight/3;i.bottom+n>r.bottom?_e(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):i.top-n<r.top&&_e(t,Math.max(e.offsetTop-n,0))}function Eo(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function en(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Co(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Nn=!1,yo={get passive(){return Nn=!0}},Pe=typeof window<"u"?window:{};Pe.addEventListener&&Pe.removeEventListener&&(Pe.addEventListener("p",Ne,yo),Pe.removeEventListener("p",Ne,!1));var So=Nn;function wo(t){return t!=null}function Fo(t){return Array.isArray(t)}function Ve(t,e,r){return t?e:r}var Oo=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];var o=Object.entries(e).filter(function(s){var l=se(s,1),a=l[0];return!i.includes(a)});return o.reduce(function(s,l){var a=se(l,2),u=a[0],c=a[1];return s[u]=c,s},{})},Ao=["children","innerProps"],Do=["children","innerProps"];function Io(t){var e=t.maxHeight,r=t.menuEl,i=t.minHeight,n=t.placement,o=t.shouldScroll,s=t.isFixedPosition,l=t.controlHeight,a=bo(r),u={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return u;var c=a.getBoundingClientRect(),d=c.height,g=r.getBoundingClientRect(),v=g.bottom,b=g.height,f=g.top,p=r.offsetParent.getBoundingClientRect(),m=p.top,E=s?window.innerHeight:vo(a),y=zn(a),A=parseInt(getComputedStyle(r).marginBottom,10),D=parseInt(getComputedStyle(r).marginTop,10),F=m-D,C=E-f,I=F+y,T=d-y-f,P=v-E+y+A,k=y+f-D,B=160;switch(n){case"auto":case"bottom":if(C>=b)return{placement:"bottom",maxHeight:e};if(T>=b&&!s)return o&&Me(a,P,B),{placement:"bottom",maxHeight:e};if(!s&&T>=i||s&&C>=i){o&&Me(a,P,B);var Q=s?C-A:T-A;return{placement:"bottom",maxHeight:Q}}if(n==="auto"||s){var ie=e,N=s?F:I;return N>=i&&(ie=Math.min(N-A-l,e)),{placement:"top",maxHeight:ie}}if(n==="bottom")return o&&_e(a,P),{placement:"bottom",maxHeight:e};break;case"top":if(F>=b)return{placement:"top",maxHeight:e};if(I>=b&&!s)return o&&Me(a,k,B),{placement:"top",maxHeight:e};if(!s&&I>=i||s&&F>=i){var H=e;return(!s&&I>=i||s&&F>=i)&&(H=s?F-D:I-D),o&&Me(a,k,B),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return u}function Mo(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var _n=function(e){return e==="auto"?"bottom":e},Po=function(e,r){var i,n=e.placement,o=e.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return w((i={label:"menu"},Ee(i,Mo(n),"100%"),Ee(i,"position","absolute"),Ee(i,"width","100%"),Ee(i,"zIndex",1),i),r?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Un=h.createContext(null),Vo=function(e){var r=e.children,i=e.minMenuHeight,n=e.maxMenuHeight,o=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,a=e.theme,u=h.useContext(Un)||{},c=u.setPortalPlacement,d=h.useRef(null),g=h.useState(n),v=se(g,2),b=v[0],f=v[1],p=h.useState(null),m=se(p,2),E=m[0],y=m[1],A=a.spacing.controlHeight;return vt(function(){var D=d.current;if(D){var F=s==="fixed",C=l&&!F,I=Io({maxHeight:n,menuEl:D,minHeight:i,placement:o,shouldScroll:C,isFixedPosition:F,controlHeight:A});f(I.maxHeight),y(I.placement),c==null||c(I.placement)}},[n,o,s,l,i,c,A]),r({ref:d,placerProps:w(w({},e),{},{placement:E||_n(o),maxHeight:b})})},Ro=function(e){var r=e.children,i=e.innerRef,n=e.innerProps;return S("div",O({},$(e,"menu",{menu:!0}),{ref:i},n),r)},Lo=Ro,ko=function(e,r){var i=e.maxHeight,n=e.theme.spacing.baseUnit;return w({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},To=function(e){var r=e.children,i=e.innerProps,n=e.innerRef,o=e.isMulti;return S("div",O({},$(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:n},i),r)},Wn=function(e,r){var i=e.theme,n=i.spacing.baseUnit,o=i.colors;return w({textAlign:"center"},r?{}:{color:o.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},$o=Wn,Bo=Wn,jo=function(e){var r=e.children,i=r===void 0?"No options":r,n=e.innerProps,o=ue(e,Ao);return S("div",O({},$(w(w({},o),{},{children:i,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),i)},Ho=function(e){var r=e.children,i=r===void 0?"Loading...":r,n=e.innerProps,o=ue(e,Do);return S("div",O({},$(w(w({},o),{},{children:i,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),i)},zo=function(e){var r=e.rect,i=e.offset,n=e.position;return{left:r.left,position:n,top:i,width:r.width,zIndex:1}},No=function(e){var r=e.appendTo,i=e.children,n=e.controlElement,o=e.innerProps,s=e.menuPlacement,l=e.menuPosition,a=h.useRef(null),u=h.useRef(null),c=h.useState(_n(s)),d=se(c,2),g=d[0],v=d[1],b=h.useMemo(function(){return{setPortalPlacement:v}},[]),f=h.useState(null),p=se(f,2),m=p[0],E=p[1],y=h.useCallback(function(){if(n){var C=Eo(n),I=l==="fixed"?0:window.pageYOffset,T=C[g]+I;(T!==(m==null?void 0:m.offset)||C.left!==(m==null?void 0:m.rect.left)||C.width!==(m==null?void 0:m.rect.width))&&E({offset:T,rect:C})}},[n,l,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);vt(function(){y()},[y]);var A=h.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),n&&a.current&&(u.current=po(n,a.current,y,{elementResize:"ResizeObserver"in window}))},[n,y]);vt(function(){A()},[A]);var D=h.useCallback(function(C){a.current=C,A()},[A]);if(!r&&l!=="fixed"||!m)return null;var F=S("div",O({ref:D},$(w(w({},e),{},{offset:m.offset,position:l,rect:m.rect}),"menuPortal",{"menu-portal":!0}),o),i);return S(Un.Provider,{value:b},r?pr.createPortal(F,r):F)},_o=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Uo=function(e){var r=e.children,i=e.innerProps,n=e.isDisabled,o=e.isRtl;return S("div",O({},$(e,"container",{"--is-disabled":n,"--is-rtl":o}),i),r)},Wo=function(e,r){var i=e.theme.spacing,n=e.isMulti,o=e.hasValue,s=e.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:n&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Go=function(e){var r=e.children,i=e.innerProps,n=e.isMulti,o=e.hasValue;return S("div",O({},$(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":o}),i),r)},Yo=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},qo=function(e){var r=e.children,i=e.innerProps;return S("div",O({},$(e,"indicatorsContainer",{indicators:!0}),i),r)},tn,Ko=["size"],Xo=["innerProps","isRtl","size"],Qo={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Gn=function(e){var r=e.size,i=ue(e,Ko);return S("svg",O({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Qo},i))},Vt=function(e){return S(Gn,O({size:20},e),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Yn=function(e){return S(Gn,O({size:20},e),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},qn=function(e,r){var i=e.isFocused,n=e.theme,o=n.spacing.baseUnit,s=n.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?s.neutral60:s.neutral20,padding:o*2,":hover":{color:i?s.neutral80:s.neutral40}})},Zo=qn,Jo=function(e){var r=e.children,i=e.innerProps;return S("div",O({},$(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||S(Yn,null))},ea=qn,ta=function(e){var r=e.children,i=e.innerProps;return S("div",O({},$(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||S(Vt,null))},na=function(e,r){var i=e.isDisabled,n=e.theme,o=n.spacing.baseUnit,s=n.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},ra=function(e){var r=e.innerProps;return S("span",O({},r,$(e,"indicatorSeparator",{"indicator-separator":!0})))},ia=Ji(tn||(tn=eo([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),oa=function(e,r){var i=e.isFocused,n=e.size,o=e.theme,s=o.colors,l=o.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?s.neutral60:s.neutral20,padding:l*2})},st=function(e){var r=e.delay,i=e.offset;return S("span",{css:Dt({animation:"".concat(ia," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},aa=function(e){var r=e.innerProps,i=e.isRtl,n=e.size,o=n===void 0?4:n,s=ue(e,Xo);return S("div",O({},$(w(w({},s),{},{innerProps:r,isRtl:i,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),S(st,{delay:0,offset:i}),S(st,{delay:160,offset:!0}),S(st,{delay:320,offset:!i}))},sa=function(e,r){var i=e.isDisabled,n=e.isFocused,o=e.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?s.neutral5:s.neutral0,borderColor:i?s.neutral10:n?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},ua=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,o=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return S("div",O({ref:o},$(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":n,"control--menu-is-open":l}),s,{"aria-disabled":i||void 0}),r)},la=ua,ca=["data"],da=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},fa=function(e){var r=e.children,i=e.cx,n=e.getStyles,o=e.getClassNames,s=e.Heading,l=e.headingProps,a=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return S("div",O({},$(e,"group",{group:!0}),a),S(s,O({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:o,cx:i}),u),S("div",null,r))},pa=function(e,r){var i=e.theme,n=i.colors,o=i.spacing;return w({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},ha=function(e){var r=Hn(e);r.data;var i=ue(r,ca);return S("div",O({},$(e,"groupHeading",{"group-heading":!0}),i))},ma=fa,ga=["innerRef","isDisabled","isHidden","inputClassName"],va=function(e,r){var i=e.isDisabled,n=e.value,o=e.theme,s=o.spacing,l=o.colors;return w(w({visibility:i?"hidden":"visible",transform:n?"translateZ(0)":""},ba),r?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Kn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ba={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Kn)},xa=function(e){return w({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Kn)},Ea=function(e){var r=e.cx,i=e.value,n=Hn(e),o=n.innerRef,s=n.isDisabled,l=n.isHidden,a=n.inputClassName,u=ue(n,ga);return S("div",O({},$(e,"input",{"input-container":!0}),{"data-value":i||""}),S("input",O({className:r({input:!0},a),ref:o,style:xa(l),disabled:s},u)))},Ca=Ea,ya=function(e,r){var i=e.theme,n=i.spacing,o=i.borderRadius,s=i.colors;return w({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:n.baseUnit/2})},Sa=function(e,r){var i=e.theme,n=i.borderRadius,o=i.colors,s=e.cropWithEllipsis;return w({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},wa=function(e,r){var i=e.theme,n=i.spacing,o=i.borderRadius,s=i.colors,l=e.isFocused;return w({alignItems:"center",display:"flex"},r?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Xn=function(e){var r=e.children,i=e.innerProps;return S("div",i,r)},Fa=Xn,Oa=Xn;function Aa(t){var e=t.children,r=t.innerProps;return S("div",O({role:"button"},r),e||S(Vt,{size:14}))}var Da=function(e){var r=e.children,i=e.components,n=e.data,o=e.innerProps,s=e.isDisabled,l=e.removeProps,a=e.selectProps,u=i.Container,c=i.Label,d=i.Remove;return S(u,{data:n,innerProps:w(w({},$(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},S(c,{data:n,innerProps:w({},$(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},r),S(d,{data:n,innerProps:w(w({},$(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:a}))},Ia=Da,Ma=function(e,r){var i=e.isDisabled,n=e.isFocused,o=e.isSelected,s=e.theme,l=s.spacing,a=s.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:o?a.primary:n?a.primary25:"transparent",color:i?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:o?a.primary:a.primary50}})},Pa=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,o=e.isSelected,s=e.innerRef,l=e.innerProps;return S("div",O({},$(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":n,"option--is-selected":o}),{ref:s,"aria-disabled":i},l),r)},Va=Pa,Ra=function(e,r){var i=e.theme,n=i.spacing,o=i.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:o.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},La=function(e){var r=e.children,i=e.innerProps;return S("div",O({},$(e,"placeholder",{placeholder:!0}),i),r)},ka=La,Ta=function(e,r){var i=e.isDisabled,n=e.theme,o=n.spacing,s=n.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},$a=function(e){var r=e.children,i=e.isDisabled,n=e.innerProps;return S("div",O({},$(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),n),r)},Ba=$a,ja={ClearIndicator:ta,Control:la,DropdownIndicator:Jo,DownChevron:Yn,CrossIcon:Vt,Group:ma,GroupHeading:ha,IndicatorsContainer:qo,IndicatorSeparator:ra,Input:Ca,LoadingIndicator:aa,Menu:Lo,MenuList:To,MenuPortal:No,LoadingMessage:Ho,NoOptionsMessage:jo,MultiValue:Ia,MultiValueContainer:Fa,MultiValueLabel:Oa,MultiValueRemove:Aa,Option:Va,Placeholder:ka,SelectContainer:Uo,SingleValue:Ba,ValueContainer:Go},Ha=function(e){return w(w({},ja),e.components)},nn=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function za(t,e){return!!(t===e||nn(t)&&nn(e))}function Na(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!za(t[r],e[r]))return!1;return!0}function _a(t,e){e===void 0&&(e=Na);var r=null;function i(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var s=t.apply(this,n);return r={lastResult:s,lastArgs:n,lastThis:this},s}return i.clear=function(){r=null},i}var Ua={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Wa=function(e){return S("span",O({css:Ua},e))},rn=Wa,Ga={guidance:function(e){var r=e.isSearchable,i=e.isMulti,n=e.tabSelectsValue,o=e.context,s=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,n=i===void 0?"":i,o=e.labels,s=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,n=e.options,o=e.label,s=o===void 0?"":o,l=e.selectValue,a=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(f,p){return f&&f.length?"".concat(f.indexOf(p)+1," of ").concat(f.length):""};if(r==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,i),".");if(r==="menu"&&c){var g=a?" disabled":"",v="".concat(u?" selected":"").concat(g);return"".concat(s).concat(v,", ").concat(d(n,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Ya=function(e){var r=e.ariaSelection,i=e.focusedOption,n=e.focusedValue,o=e.focusableOptions,s=e.isFocused,l=e.selectValue,a=e.selectProps,u=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,g=a.getOptionLabel,v=a.inputValue,b=a.isMulti,f=a.isOptionDisabled,p=a.isSearchable,m=a.menuIsOpen,E=a.options,y=a.screenReaderStatus,A=a.tabSelectsValue,D=a.isLoading,F=a["aria-label"],C=a["aria-live"],I=h.useMemo(function(){return w(w({},Ga),d||{})},[d]),T=h.useMemo(function(){var N="";if(r&&I.onChange){var H=r.option,ee=r.options,X=r.removedValue,le=r.removedValues,ce=r.value,Oe=function(ae){return Array.isArray(ae)?null:ae},z=X||H||Oe(ce),Y=z?g(z):"",oe=ee||le||void 0,de=oe?oe.map(g):[],Z=w({isDisabled:z&&f(z,l),label:Y,labels:de},r);N=I.onChange(Z)}return N},[r,I,f,l,g]),P=h.useMemo(function(){var N="",H=i||n,ee=!!(i&&l&&l.includes(i));if(H&&I.onFocus){var X={focused:H,label:g(H),isDisabled:f(H,l),isSelected:ee,options:o,context:H===i?"menu":"value",selectValue:l,isAppleDevice:c};N=I.onFocus(X)}return N},[i,n,g,f,I,o,l,c]),k=h.useMemo(function(){var N="";if(m&&E.length&&!D&&I.onFilter){var H=y({count:o.length});N=I.onFilter({inputValue:v,resultsMessage:H})}return N},[o,v,m,I,E,y,D]),B=(r==null?void 0:r.action)==="initial-input-focus",Q=h.useMemo(function(){var N="";if(I.guidance){var H=n?"value":m?"menu":"input";N=I.guidance({"aria-label":F,context:H,isDisabled:i&&f(i,l),isMulti:b,isSearchable:p,tabSelectsValue:A,isInitialFocus:B})}return N},[F,i,n,b,f,p,m,I,l,A,B]),ie=S(h.Fragment,null,S("span",{id:"aria-selection"},T),S("span",{id:"aria-focused"},P),S("span",{id:"aria-results"},k),S("span",{id:"aria-guidance"},Q));return S(h.Fragment,null,S(rn,{id:u},B&&ie),S(rn,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!B&&ie))},qa=Ya,bt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Ka=new RegExp("["+bt.map(function(t){return t.letters}).join("")+"]","g"),Qn={};for(var ut=0;ut<bt.length;ut++)for(var lt=bt[ut],ct=0;ct<lt.letters.length;ct++)Qn[lt.letters[ct]]=lt.base;var Zn=function(e){return e.replace(Ka,function(r){return Qn[r]})},Xa=_a(Zn),on=function(e){return e.replace(/^\s+|\s+$/g,"")},Qa=function(e){return"".concat(e.label," ").concat(e.value)},Za=function(e){return function(r,i){if(r.data.__isNew__)return!0;var n=w({ignoreCase:!0,ignoreAccents:!0,stringify:Qa,trim:!0,matchFrom:"any"},e),o=n.ignoreCase,s=n.ignoreAccents,l=n.stringify,a=n.trim,u=n.matchFrom,c=a?on(i):i,d=a?on(l(r)):l(r);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Xa(c),d=Zn(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ja=["innerRef"];function es(t){var e=t.innerRef,r=ue(t,Ja),i=Oo(r,"onExited","in","enter","exit","appear");return S("input",O({ref:e},i,{css:Dt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ts=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function ns(t){var e=t.isEnabled,r=t.onBottomArrive,i=t.onBottomLeave,n=t.onTopArrive,o=t.onTopLeave,s=h.useRef(!1),l=h.useRef(!1),a=h.useRef(0),u=h.useRef(null),c=h.useCallback(function(p,m){if(u.current!==null){var E=u.current,y=E.scrollTop,A=E.scrollHeight,D=E.clientHeight,F=u.current,C=m>0,I=A-D-y,T=!1;I>m&&s.current&&(i&&i(p),s.current=!1),C&&l.current&&(o&&o(p),l.current=!1),C&&m>I?(r&&!s.current&&r(p),F.scrollTop=A,T=!0,s.current=!0):!C&&-m>y&&(n&&!l.current&&n(p),F.scrollTop=0,T=!0,l.current=!0),T&&ts(p)}},[r,i,n,o]),d=h.useCallback(function(p){c(p,p.deltaY)},[c]),g=h.useCallback(function(p){a.current=p.changedTouches[0].clientY},[]),v=h.useCallback(function(p){var m=a.current-p.changedTouches[0].clientY;c(p,m)},[c]),b=h.useCallback(function(p){if(p){var m=So?{passive:!1}:!1;p.addEventListener("wheel",d,m),p.addEventListener("touchstart",g,m),p.addEventListener("touchmove",v,m)}},[v,g,d]),f=h.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",g,!1),p.removeEventListener("touchmove",v,!1))},[v,g,d]);return h.useEffect(function(){if(e){var p=u.current;return b(p),function(){f(p)}}},[e,b,f]),function(p){u.current=p}}var an=["boxSizing","height","overflow","paddingRight","position"],sn={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function un(t){t.preventDefault()}function ln(t){t.stopPropagation()}function cn(){var t=this.scrollTop,e=this.scrollHeight,r=t+this.offsetHeight;t===0?this.scrollTop=1:r===e&&(this.scrollTop=t-1)}function dn(){return"ontouchstart"in window||navigator.maxTouchPoints}var fn=!!(typeof window<"u"&&window.document&&window.document.createElement),xe=0,pe={capture:!1,passive:!1};function rs(t){var e=t.isEnabled,r=t.accountForScrollbars,i=r===void 0?!0:r,n=h.useRef({}),o=h.useRef(null),s=h.useCallback(function(a){if(fn){var u=document.body,c=u&&u.style;if(i&&an.forEach(function(b){var f=c&&c[b];n.current[b]=f}),i&&xe<1){var d=parseInt(n.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,v=window.innerWidth-g+d||0;Object.keys(sn).forEach(function(b){var f=sn[b];c&&(c[b]=f)}),c&&(c.paddingRight="".concat(v,"px"))}u&&dn()&&(u.addEventListener("touchmove",un,pe),a&&(a.addEventListener("touchstart",cn,pe),a.addEventListener("touchmove",ln,pe))),xe+=1}},[i]),l=h.useCallback(function(a){if(fn){var u=document.body,c=u&&u.style;xe=Math.max(xe-1,0),i&&xe<1&&an.forEach(function(d){var g=n.current[d];c&&(c[d]=g)}),u&&dn()&&(u.removeEventListener("touchmove",un,pe),a&&(a.removeEventListener("touchstart",cn,pe),a.removeEventListener("touchmove",ln,pe)))}},[i]);return h.useEffect(function(){if(e){var a=o.current;return s(a),function(){l(a)}}},[e,s,l]),function(a){o.current=a}}var is=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},os={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function as(t){var e=t.children,r=t.lockEnabled,i=t.captureEnabled,n=i===void 0?!0:i,o=t.onBottomArrive,s=t.onBottomLeave,l=t.onTopArrive,a=t.onTopLeave,u=ns({isEnabled:n,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),c=rs({isEnabled:r}),d=function(v){u(v),c(v)};return S(h.Fragment,null,r&&S("div",{onClick:is,css:os}),e(d))}var ss={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},us=function(e){var r=e.name,i=e.onFocus;return S("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:ss,value:"",onChange:function(){}})},ls=us;function Rt(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function cs(){return Rt(/^iPhone/i)}function Jn(){return Rt(/^Mac/i)}function ds(){return Rt(/^iPad/i)||Jn()&&navigator.maxTouchPoints>1}function fs(){return cs()||ds()}function ps(){return Jn()||fs()}var hs=function(e){return e.label},ms=function(e){return e.label},gs=function(e){return e.value},vs=function(e){return!!e.isDisabled},bs={clearIndicator:ea,container:_o,control:sa,dropdownIndicator:Zo,group:da,groupHeading:pa,indicatorsContainer:Yo,indicatorSeparator:na,input:va,loadingIndicator:oa,loadingMessage:Bo,menu:Po,menuList:ko,menuPortal:zo,multiValue:ya,multiValueLabel:Sa,multiValueRemove:wa,noOptionsMessage:$o,option:Ma,placeholder:Ra,singleValue:Ta,valueContainer:Wo},xs={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Es=4,er=4,Cs=38,ys=er*2,Ss={baseUnit:er,controlHeight:Cs,menuGutter:ys},dt={borderRadius:Es,colors:xs,spacing:Ss},ws={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:en(),captureMenuScroll:!en(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Za(),formatGroupLabel:hs,getOptionLabel:ms,getOptionValue:gs,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:vs,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Co(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function pn(t,e,r,i){var n=rr(t,e,r),o=ir(t,e,r),s=nr(t,e),l=Ue(t,e);return{type:"option",data:e,isDisabled:n,isSelected:o,label:s,value:l,index:i}}function Te(t,e){return t.options.map(function(r,i){if("options"in r){var n=r.options.map(function(s,l){return pn(t,s,e,l)}).filter(function(s){return mn(t,s)});return n.length>0?{type:"group",data:r,options:n,index:i}:void 0}var o=pn(t,r,e,i);return mn(t,o)?o:void 0}).filter(wo)}function tr(t){return t.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Et(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function hn(t,e){return t.reduce(function(r,i){return i.type==="group"?r.push.apply(r,Et(i.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(i.index,"-").concat(n.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function Fs(t,e){return tr(Te(t,e))}function mn(t,e){var r=t.inputValue,i=r===void 0?"":r,n=e.data,o=e.isSelected,s=e.label,l=e.value;return(!ar(t)||!o)&&or(t,{label:s,value:l,data:n},i)}function Os(t,e){var r=t.focusedValue,i=t.selectValue,n=i.indexOf(r);if(n>-1){var o=e.indexOf(r);if(o>-1)return r;if(n<e.length)return e[n]}return null}function As(t,e){var r=t.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var ft=function(e,r){var i,n=(i=e.find(function(o){return o.data===r}))===null||i===void 0?void 0:i.id;return n||null},nr=function(e,r){return e.getOptionLabel(r)},Ue=function(e,r){return e.getOptionValue(r)};function rr(t,e,r){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,r):!1}function ir(t,e,r){if(r.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,r);var i=Ue(t,e);return r.some(function(n){return Ue(t,n)===i})}function or(t,e,r){return t.filterOption?t.filterOption(e,r):!0}var ar=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Ds=1,sr=function(t){Dr(r,t);var e=Ir(r);function r(i){var n;if(Mr(this,r),n=e.call(this,i),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=ps(),n.controlRef=null,n.getControlRef=function(a){n.controlRef=a},n.focusedOptionRef=null,n.getFocusedOptionRef=function(a){n.focusedOptionRef=a},n.menuListRef=null,n.getMenuListRef=function(a){n.menuListRef=a},n.inputRef=null,n.getInputRef=function(a){n.inputRef=a},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(a,u){var c=n.props,d=c.onChange,g=c.name;u.name=g,n.ariaOnChange(a,u),d(a,u)},n.setValue=function(a,u,c){var d=n.props,g=d.closeMenuOnSelect,v=d.isMulti,b=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:b}),g&&(n.setState({inputIsHiddenAfterUpdate:!v}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(a,{action:u,option:c})},n.selectOption=function(a){var u=n.props,c=u.blurInputOnSelect,d=u.isMulti,g=u.name,v=n.state.selectValue,b=d&&n.isOptionSelected(a,v),f=n.isOptionDisabled(a,v);if(b){var p=n.getOptionValue(a);n.setValue(v.filter(function(m){return n.getOptionValue(m)!==p}),"deselect-option",a)}else if(!f)d?n.setValue([].concat(Et(v),[a]),"select-option",a):n.setValue(a,"select-option");else{n.ariaOnChange(a,{action:"select-option",option:a,name:g});return}c&&n.blurInput()},n.removeValue=function(a){var u=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(a),g=c.filter(function(b){return n.getOptionValue(b)!==d}),v=Ve(u,g,g[0]||null);n.onChange(v,{action:"remove-value",removedValue:a}),n.focusInput()},n.clearValue=function(){var a=n.state.selectValue;n.onChange(Ve(n.props.isMulti,[],null),{action:"clear",removedValues:a})},n.popValue=function(){var a=n.props.isMulti,u=n.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),g=Ve(a,d,d[0]||null);n.onChange(g,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(a){return ft(n.state.focusableOptionsWithIds,a)},n.getFocusableOptionsWithIds=function(){return hn(Te(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return go.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(a){return nr(n.props,a)},n.getOptionValue=function(a){return Ue(n.props,a)},n.getStyles=function(a,u){var c=n.props.unstyled,d=bs[a](u,c);d.boxSizing="border-box";var g=n.props.styles[a];return g?g(d,u):d},n.getClassNames=function(a,u){var c,d;return(c=(d=n.props.classNames)[a])===null||c===void 0?void 0:c.call(d,u)},n.getElementId=function(a){return"".concat(n.state.instancePrefix,"-").concat(a)},n.getComponents=function(){return Ha(n.props)},n.buildCategorizedOptions=function(){return Te(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return tr(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(a,u){n.setState({ariaSelection:w({value:a},u)})},n.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(a){n.blockOptionHover=!1},n.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},n.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!n.props.isDisabled){var u=n.props,c=u.isMulti,d=u.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),a.preventDefault()}},n.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(n.clearValue(),a.preventDefault(),n.openAfterFocus=!1,a.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(a){typeof n.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&it(a.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(a)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(a){var u=a.touches,c=u&&u.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(a){var u=a.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),g=Math.abs(c.clientY-n.initialTouchY),v=5;n.userIsDragging=d>v||g>v}},n.onTouchEnd=function(a){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(a.target)&&n.menuListRef&&!n.menuListRef.contains(a.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(a){n.userIsDragging||n.onControlMouseDown(a)},n.onClearIndicatorTouchEnd=function(a){n.userIsDragging||n.onClearIndicatorMouseDown(a)},n.onDropdownIndicatorTouchEnd=function(a){n.userIsDragging||n.onDropdownIndicatorMouseDown(a)},n.handleInputChange=function(a){var u=n.props.inputValue,c=a.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(a){n.props.onFocus&&n.props.onFocus(a),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(a){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(a),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(a){if(!(n.blockOptionHover||n.state.focusedOption===a)){var u=n.getFocusableOptions(),c=u.indexOf(a);n.setState({focusedOption:a,focusedOptionId:c>-1?n.getFocusedOptionId(a):null})}},n.shouldHideSelectedOptions=function(){return ar(n.props)},n.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),n.focus()},n.onKeyDown=function(a){var u=n.props,c=u.isMulti,d=u.backspaceRemovesValue,g=u.escapeClearsValue,v=u.inputValue,b=u.isClearable,f=u.isDisabled,p=u.menuIsOpen,m=u.onKeyDown,E=u.tabSelectsValue,y=u.openMenuOnFocus,A=n.state,D=A.focusedOption,F=A.focusedValue,C=A.selectValue;if(!f&&!(typeof m=="function"&&(m(a),a.defaultPrevented))){switch(n.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||v)return;n.focusValue("previous");break;case"ArrowRight":if(!c||v)return;n.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(F)n.removeValue(F);else{if(!d)return;c?n.popValue():b&&n.clearValue()}break;case"Tab":if(n.isComposing||a.shiftKey||!p||!E||!D||y&&n.isOptionSelected(D,C))return;n.selectOption(D);break;case"Enter":if(a.keyCode===229)break;if(p){if(!D||n.isComposing)return;n.selectOption(D);break}return;case"Escape":p?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:v}),n.onMenuClose()):b&&g&&n.clearValue();break;case" ":if(v)return;if(!p){n.openMenu("first");break}if(!D)return;n.selectOption(D);break;case"ArrowUp":p?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":p?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!p)return;n.focusOption("pageup");break;case"PageDown":if(!p)return;n.focusOption("pagedown");break;case"Home":if(!p)return;n.focusOption("first");break;case"End":if(!p)return;n.focusOption("last");break;default:return}a.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++Ds),n.state.selectValue=Zt(i.value),i.menuIsOpen&&n.state.selectValue.length){var o=n.getFocusableOptionsWithIds(),s=n.buildFocusableOptions(),l=s.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=o,n.state.focusedOption=s[l],n.state.focusedOptionId=ft(o,s[l])}return n}return Pr(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Jt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&n.isDisabled||a&&l&&!n.menuIsOpen)&&this.focusInput(),a&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Jt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,o){this.props.onInputChange(n,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),c=n==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(n){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,c=-1;if(s.length){switch(n){case"previous":a===0?c=0:a===-1?c=u:c=a-1;break;case"next":a>-1&&a<u&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),n==="up"?a=u>0?u-1:l.length-1:n==="down"?a=(u+1)%l.length:n==="pageup"?(a=u-o,a<0&&(a=0)):n==="pagedown"?(a=u+o,a>l.length-1&&(a=l.length-1)):n==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(dt):w(w({},dt),this.props.theme):dt}},{key:"getCommonProps",value:function(){var n=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,v=d.isRtl,b=d.options,f=this.hasValue();return{clearValue:n,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:f,isMulti:g,isRtl:v,options:b,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,o=n.isClearable,s=n.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(n,o){return rr(this.props,n,o)}},{key:"isOptionSelected",value:function(n,o){return ir(this.props,n,o)}},{key:"filterOption",value:function(n,o){return or(this.props,n,o)}},{key:"formatOptionLabel",value:function(n,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,o=n.isDisabled,s=n.isSearchable,l=n.inputId,a=n.inputValue,u=n.tabIndex,c=n.form,d=n.menuIsOpen,g=n.required,v=this.getComponents(),b=v.Input,f=this.state,p=f.inputIsHidden,m=f.ariaSelection,E=this.commonProps,y=l||this.getElementId("input"),A=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?h.createElement(b,O({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:a},A)):h.createElement(es,O({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ne,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},A))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,g=this.commonProps,v=this.props,b=v.controlShouldRenderValue,f=v.isDisabled,p=v.isMulti,m=v.inputValue,E=v.placeholder,y=this.state,A=y.selectValue,D=y.focusedValue,F=y.isFocused;if(!this.hasValue()||!b)return m?null:h.createElement(d,O({},g,{key:"placeholder",isDisabled:f,isFocused:F,innerProps:{id:this.getElementId("placeholder")}}),E);if(p)return A.map(function(I,T){var P=I===D,k="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return h.createElement(s,O({},g,{components:{Container:l,Label:a,Remove:u},isFocused:P,isDisabled:f,key:k,index:T,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(Q){Q.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(m)return null;var C=A[0];return h.createElement(c,O({},g,{data:C,isDisabled:f}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),o=n.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(o,O({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),o=n.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return h.createElement(o,O({},s,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator,s=n.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return h.createElement(s,O({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(o,O({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var n=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,g=o.NoOptionsMessage,v=o.Option,b=this.commonProps,f=this.state.focusedOption,p=this.props,m=p.captureMenuScroll,E=p.inputValue,y=p.isLoading,A=p.loadingMessage,D=p.minMenuHeight,F=p.maxMenuHeight,C=p.menuIsOpen,I=p.menuPlacement,T=p.menuPosition,P=p.menuPortalTarget,k=p.menuShouldBlockScroll,B=p.menuShouldScrollIntoView,Q=p.noOptionsMessage,ie=p.onMenuScrollToTop,N=p.onMenuScrollToBottom;if(!C)return null;var H=function(Y,oe){var de=Y.type,Z=Y.data,fe=Y.isDisabled,ae=Y.isSelected,Ae=Y.label,lr=Y.value,Lt=f===Z,kt=fe?void 0:function(){return n.onOptionHover(Z)},cr=fe?void 0:function(){return n.selectOption(Z)},Tt="".concat(n.getElementId("option"),"-").concat(oe),dr={id:Tt,onClick:cr,onMouseMove:kt,onMouseOver:kt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ae};return h.createElement(v,O({},b,{innerProps:dr,data:Z,isDisabled:fe,isSelected:ae,key:Tt,label:Ae,type:de,value:lr,isFocused:Lt,innerRef:Lt?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(Y.data,"menu"))},ee;if(this.hasOptions())ee=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var Y=z.data,oe=z.options,de=z.index,Z="".concat(n.getElementId("group"),"-").concat(de),fe="".concat(Z,"-heading");return h.createElement(s,O({},b,{key:Z,data:Y,options:oe,Heading:l,headingProps:{id:fe,data:z.data},label:n.formatGroupLabel(z.data)}),z.options.map(function(ae){return H(ae,"".concat(de,"-").concat(ae.index))}))}else if(z.type==="option")return H(z,"".concat(z.index))});else if(y){var X=A({inputValue:E});if(X===null)return null;ee=h.createElement(d,b,X)}else{var le=Q({inputValue:E});if(le===null)return null;ee=h.createElement(g,b,le)}var ce={minMenuHeight:D,maxMenuHeight:F,menuPlacement:I,menuPosition:T,menuShouldScrollIntoView:B},Oe=h.createElement(Vo,O({},b,ce),function(z){var Y=z.ref,oe=z.placerProps,de=oe.placement,Z=oe.maxHeight;return h.createElement(a,O({},b,ce,{innerRef:Y,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:y,placement:de}),h.createElement(as,{captureEnabled:m,onTopArrive:ie,onBottomArrive:N,lockEnabled:k},function(fe){return h.createElement(u,O({},b,{innerRef:function(Ae){n.getMenuListRef(Ae),fe(Ae)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:n.getElementId("listbox")},isLoading:y,maxHeight:Z,focusedOption:f}),ee)}))});return P||T==="fixed"?h.createElement(c,O({},b,{appendTo:P,controlElement:this.controlRef,menuPlacement:I,menuPosition:T}),Oe):Oe}},{key:"renderFormField",value:function(){var n=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return h.createElement(ls,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var g=d.map(function(f){return n.getOptionValue(f)}).join(s);return h.createElement("input",{name:u,type:"hidden",value:g})}else{var v=d.length>0?d.map(function(f,p){return h.createElement("input",{key:"i-".concat(p),name:u,type:"hidden",value:n.getOptionValue(f)})}):h.createElement("input",{name:u,type:"hidden",value:""});return h.createElement("div",null,v)}else{var b=d[0]?this.getOptionValue(d[0]):"";return h.createElement("input",{name:u,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return h.createElement(qa,O({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),o=n.Control,s=n.IndicatorsContainer,l=n.SelectContainer,a=n.ValueContainer,u=this.props,c=u.className,d=u.id,g=u.isDisabled,v=u.menuIsOpen,b=this.state.isFocused,f=this.commonProps=this.getCommonProps();return h.createElement(l,O({},f,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:b}),this.renderLiveRegion(),h.createElement(o,O({},f,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:b,menuIsOpen:v}),h.createElement(a,O({},f,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),h.createElement(s,O({},f,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,g=o.instancePrefix,v=n.options,b=n.value,f=n.menuIsOpen,p=n.inputValue,m=n.isMulti,E=Zt(b),y={};if(s&&(b!==s.value||v!==s.options||f!==s.menuIsOpen||p!==s.inputValue)){var A=f?Fs(n,E):[],D=f?hn(Te(n,E),"".concat(g,"-option")):[],F=l?Os(o,E):null,C=As(o,A),I=ft(D,C);y={selectValue:E,focusedOption:C,focusedOptionId:I,focusableOptionsWithIds:D,focusedValue:F,clearFocusValueOnUpdate:!1}}var T=a!=null&&n!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},P=u,k=c&&d;return c&&!k&&(P={value:Ve(m,E,E[0]||null),options:E,action:"initial-input-focus"},k=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(P=null),w(w(w({},y),T),{},{prevProps:n,ariaSelection:P,prevWasFocused:k})}}]),r}(h.Component);sr.defaultProps=ws;var Is=h.forwardRef(function(t,e){var r=Kr(t);return h.createElement(sr,O({ref:e},r))}),gn=Is;function Ms(t,e,r){var i=this,n=h.useRef(null),o=h.useRef(0),s=h.useRef(null),l=h.useRef([]),a=h.useRef(),u=h.useRef(),c=h.useRef(t),d=h.useRef(!0);c.current=t;var g=typeof window<"u",v=!e&&e!==0&&g;if(typeof t!="function")throw new TypeError("Expected a function");e=+e||0;var b=!!(r=r||{}).leading,f=!("trailing"in r)||!!r.trailing,p="maxWait"in r,m="debounceOnServer"in r&&!!r.debounceOnServer,E=p?Math.max(+r.maxWait||0,e):null;h.useEffect(function(){return d.current=!0,function(){d.current=!1}},[]);var y=h.useMemo(function(){var A=function(P){var k=l.current,B=a.current;return l.current=a.current=null,o.current=P,u.current=c.current.apply(B,k)},D=function(P,k){v&&cancelAnimationFrame(s.current),s.current=v?requestAnimationFrame(P):setTimeout(P,k)},F=function(P){if(!d.current)return!1;var k=P-n.current;return!n.current||k>=e||k<0||p&&P-o.current>=E},C=function(P){return s.current=null,f&&l.current?A(P):(l.current=a.current=null,u.current)},I=function P(){var k=Date.now();if(F(k))return C(k);if(d.current){var B=e-(k-n.current),Q=p?Math.min(B,E-(k-o.current)):B;D(P,Q)}},T=function(){if(g||m){var P=Date.now(),k=F(P);if(l.current=[].slice.call(arguments),a.current=i,n.current=P,k){if(!s.current&&d.current)return o.current=n.current,D(I,e),b?A(n.current):u.current;if(p)return D(I,e),A(n.current)}return s.current||D(I,e),u.current}};return T.cancel=function(){s.current&&(v?cancelAnimationFrame(s.current):clearTimeout(s.current)),o.current=0,l.current=n.current=a.current=s.current=null},T.isPending=function(){return!!s.current},T.flush=function(){return s.current?C(Date.now()):u.current},T},[b,p,e,E,f,v,g,m]);return y}const ur={valueContainer:t=>({...t,padding:"0 0 0 14px"}),option:(t,e)=>({...t,padding:"4px 0",fontSize:"14px",lineHeight:"1.28",color:e.isSelected?"#E6533C":"#EFEDE8",backgroundColor:e.isSelected?"rgba(28, 28, 28, 1)":e.isFocused?"rgba(239, 237, 232, 0.10)":"rgba(28, 28, 28, 1)",cursor:"pointer","@media screen and (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5"}}),singleValue:t=>({...t,color:"#EFEDE8"}),menu:t=>({...t,backgroundColor:"rgba(28, 28, 28, 1)",padding:"0 0 0 14px"}),indicatorSeparator:t=>({...t,backgroundColor:"transparent"}),dropdownIndicator:t=>({...t,color:"#EFEDE8",padding:"0 14px 0 0",svg:{width:"18px",height:"18px"},"@media screen and (min-width: 768px)":{padding:"0 17px 0 0"}}),container:(t,e)=>({...t,border:`1px solid ${e.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,transition:"all 100ms linear","&:hover":{border:"1px solid #E6533C"},borderRadius:"12px",outline:"none"}),menuList:t=>({...t,overflowY:"auto",marginTop:"14px",marginRight:"7px","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"}}),placeholder:t=>({...t,fontSize:"14px",lineHeight:"1.28",margin:"0",padding:"0"})},Ps={...ur,control:t=>({...t,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"144px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"190px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},Vs={...ur,control:t=>({...t,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"171px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"202px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},vn=t=>({...t,colors:{...t.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}}),Rs=t=>t.slice(0,1).toUpperCase()+t.slice(1),Ls=t=>(e,r)=>e[t]>r[t]?1:-1,ks=()=>{const[t,e]=h.useState(""),r=xt(),i=Ce(xn),{category:n,recomended:o}=i,s=Ce(Nr);h.useEffect(()=>{r(hr())},[r]);const l=s.map(({category:f})=>({value:f,label:Rs(f)})).sort(Ls("label")),a=[{value:"all",label:"Categories"},...l],u=Ms(f=>{r(ve({...i,search:f}))},300),c=({target:{value:f}})=>{e(f),u(f)},d=f=>{f.preventDefault();const p=f.target.elements[0].value;r(ve({...i,search:p}))},g=()=>{e(""),r(ve({...i,search:""}))},v=f=>{r(ve({...i,category:f}))},b=f=>{r(ve({...i,recomended:f}))};return x.jsxs(x.Fragment,{children:[x.jsx($r,{children:x.jsx("p",{children:"Filters"})}),x.jsxs(Tr,{children:[x.jsx("div",{children:x.jsxs(Fr,{onSubmit:d,children:[x.jsx(Br,{type:"text",placeholder:"Search",name:"search",value:t,onChange:c}),t!==""&&x.jsx(jr,{type:"button",onClick:g,children:x.jsx("svg",{children:x.jsx("use",{href:`${$e}#icon-x`})})}),x.jsx(Hr,{type:"submit",children:x.jsx("svg",{children:x.jsx("use",{href:`${$e}#icon-search`})})})]})}),x.jsxs(zr,{children:[x.jsx(gn,{name:"category",value:n,onChange:v,options:a,placeholder:"Categories",styles:Ps,theme:vn}),x.jsx(gn,{name:"recomended",value:o,defaultValue:Bt[0],options:Bt,onChange:b,styles:Vs,theme:vn})]})]})]})},Ts=M.div``,$s=M.form`
  padding: 48px 12px;

  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,Bs=M.label`
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`,js=M.input`
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
`,Hs=M.label`
  position: relative;
  display: block;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-top: 0;
  }
`,zs=M.input`
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
`,Ns=M.p`
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
`,_s=M.div`
  margin-top: 16px;
`,Us=M.p`
  display: inline-block;
  margin: 0 4px 0 0;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Ws=M.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Gs=M.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`,Ys=M.button`
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
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #ef8964;
  }

  @media screen and (min-width: 375px) {
    margin-right: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
    margin-right: 16px;
  }
`,qs=M.button`
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
  transition: border 250ms ease-out;

  &:hover {
    border: 1px solid #e6533c;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 40px;
    font-size: 20px;
    line-height: 1.2;
  }
`,Ks=({id:t,productName:e,calories:r,onClick:i,onClickSuccess:n,transferCaloriesAmount:o})=>{const s=xt(),[l,a]=h.useState(""),u=Math.round(l*r/100),c={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},d={productId:t,amount:l,date:wr(new Date,"dd-MM-yyyy")},g=b=>{if(b.preventDefault(),u<=0){a(0),mr.error("Weight must be greater than 0",c);return}s(gr(d)).unwrap().then(()=>s(vr)).catch(f=>console.log(f)),i(),n(),o(u)},v=()=>{i()};return x.jsx(Ts,{children:x.jsxs($s,{children:[x.jsx(Bs,{children:x.jsx(js,{type:"text",value:e,name:"productName",disabled:!0})}),x.jsxs(Hs,{children:[x.jsx(zs,{type:"number",value:l,name:"productQuantity",onChange:b=>a(b.target.value),placeholder:"0"}),x.jsx(Ns,{children:"grams"})]}),x.jsxs(_s,{children:[x.jsx(Us,{children:"Calories:"}),x.jsx(Ws,{children:u})]}),x.jsxs(Gs,{children:[x.jsx(Ys,{type:"submit",onClick:g,children:"Add to diary"}),x.jsx(qs,{type:"button",onClick:v,children:"Cancel"})]})]})})},Xs="/leader-code-team-power-pulse/assets/avocado-832d00b1.png",Qs=M.div`
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
`,Zs=M.img`
  margin-bottom: 3px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,Js=M.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
`,eu=M.p`
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
`,tu=M.span`
  color: #e6533c;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
`,nu=M.button`
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
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`,ru=M(br)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: rgba(239, 237, 232, 0.3);
  stroke: rgba(239, 237, 232, 0.3);
  transition: color 250ms ease-out;
  transition: stroke 250ms ease-out;

  &:hover {
    color: #e6533c;
    stroke: #e6533c;
  }
`,iu=M.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  transition: color 250ms ease-out;
`,ou=M.svg`
  width: 16px;
  height: 16px;
`,au=({onClick:t,calories:e})=>x.jsxs(Qs,{children:[x.jsx(Zs,{src:Xs,alt:"avocado",loading:"lazy"}),x.jsx(Js,{children:"Well done"}),x.jsxs(eu,{children:["Calories: ",x.jsx(tu,{children:e})]}),x.jsx(nu,{type:"button",onClick:t,children:"Next product"}),x.jsxs(ru,{to:"/diary",children:[x.jsx(iu,{children:"To the diary"}),x.jsx(ou,{children:x.jsx("use",{href:`${$e}#icon-arrow`})})]})]}),su=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
`,uu=M.div`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`,lu=M.div`
  display: flex;
  gap: 16px;
`,cu=M.div`
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
`,du=M.button`
  color: var(--orange-color);
  background-color: inherit;
  font-size: 14px;
  line-height: 1.28;
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
    transform: scale(1.04);

    svg {
      stroke: var(--hover-color);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 4px 0;
    font-size: 16px;
    line-height: 1.5;
  }
`,fu=M.div`
  margin-top: 35px;
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
    margin-top: 27px;
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
`,pu=M.ul`
  display: flex;
  gap: 16px;
  margin-top: 8px;

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
`,hu=M.p`
  display: flex;
  span {
    max-width: 76px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,mu=({id:t,weight:e,calories:r,category:i,title:n,isRecomended:o})=>{const[s,l]=h.useState(!1),[a,u]=h.useState(!1),c=()=>{l(f=>!f)},d=()=>{u(f=>!f)},[g,v]=h.useState(""),b=f=>{v(f)};return x.jsxs(x.Fragment,{children:[s&&x.jsx(jt,{onClick:c,children:x.jsx(Ks,{id:t,productName:n,calories:r,onClick:c,onClickSuccess:d,transferCaloriesAmount:b})}),a&&x.jsxs(jt,{onClick:d,children:[x.jsx(au,{onClick:d,calories:g})," "]}),x.jsxs("div",{children:[x.jsxs(su,{children:[x.jsx(uu,{children:x.jsx("p",{children:"Diet"})}),x.jsxs(lu,{children:[x.jsx(xr,{shouldForwardProp:Er,children:x.jsxs(cu,{recommendation:o,children:[x.jsx("div",{}),x.jsx("p",{children:o?"Recommended":"Not recommended"})]})}),x.jsxs(du,{type:"button",onClick:c,children:["Add",x.jsx("svg",{children:x.jsx("use",{href:`${$e}#icon-arrow-right`})})]})]})]}),x.jsxs(fu,{children:[x.jsx("div",{children:x.jsx(Vr,{})}),x.jsx("p",{children:n})]}),x.jsxs(pu,{children:[x.jsx("li",{children:x.jsxs("p",{children:["Calories:",x.jsx("span",{children:r})]})}),x.jsx("li",{children:x.jsxs(hu,{children:["Category:",x.jsx("span",{children:i})]})}),x.jsx("li",{children:x.jsxs("p",{children:["Weight:",x.jsx("span",{children:e})]})})]})]})]})},gu=M.ul`
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
`,vu=M.div`
  max-width: 335px;
  height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
    width: 405px;
  }
`,bu=M.div`
  @media screen and (max-width: 374px) {
    width: 100%;
  }

  width: 335px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--normal-color);

  span {
    color: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    margin-top: 132px;

    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`,xu=()=>x.jsxs(bu,{children:[x.jsxs(Ht,{children:[x.jsx("span",{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),x.jsx(Ht,{children:x.jsx("span",{children:"Try changing the search parameters."})})]}),Eu=t=>t.profile.profile.blood,Cu=()=>{const t=xt(),e=Ce(_r),r=Ce(Eu),i=Ce(xn),[n,o]=h.useState(i),[s,l]=h.useState([]),[a,u]=h.useState(!0),[c,d]=h.useState(1),[g,v]=h.useState(0),[b,f]=h.useState(!0);h.useEffect(()=>{if(b){f(!1);return}i!==n&&(l([]),d(1),o(i),u(!0)),a&&t(Cr({search:n.search,category:n.category.value,recomended:n.recomended.value,page:c})).then(E=>{l([...s,...E.payload.products]),d(y=>y+1),v(E.payload.sum)}).finally(()=>u(!1))},[t,n,i,a,b,c,s]);const p=E=>{E.target.scrollHeight-(E.target.scrollTop+window.innerHeight)<100&&s.length<g&&u(!0)},m=E=>{E.target.documentElement.scrollHeight-(E.target.documentElement.scrollTop+window.innerHeight)<100&&s.length<g&&u(!0)};return h.useEffect(()=>(document.addEventListener("scroll",m),()=>{document.removeEventListener("scroll",m)})),x.jsxs(x.Fragment,{children:[e&&x.jsx(Rr,{}),s.length===0?x.jsx(xu,{}):x.jsx(gu,{onScroll:p,children:s.map(({_id:E,weight:y,calories:A,category:D,title:F,groupBloodNotAllowed:C})=>x.jsx(vu,{children:x.jsx(mu,{id:E,weight:y,calories:A,category:D,title:F,isRecomended:!C[r]})},E))})]})},yu=M.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-bottom: -48px;
  }
`,ku=()=>x.jsxs(yr,{backgrounds:{desctop:Lr,desctopretina:kr,tablet:zt,tabletretina:zt,mobil:Nt,mobilretina:Nt},children:[x.jsx(yu,{children:x.jsx(Sr,{tag:"h1",size:"h3",children:"Products"})}),x.jsx(ks,{}),x.jsx(Cu,{})]});export{ku as default};
