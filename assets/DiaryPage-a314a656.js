import{u as d,f as E,s as se,j as a,I as T,M as P,o as We,r as _,b as X,p as Me,L as ce,q as Pe,t as _e}from"./index-ea1c360b.js";import{S as Oe}from"./Section-3467e3bf.js";import{T as S}from"./Text.styled-f87a03e2.js";import{s as Te,a as Se,b as Ce,c as D,d as Ee,e as Ye}from"./sprite-0427c501.js";import{e as Ne}from"./index-a3adfb92.js";/* empty css                         */import"./defineProperty-8501a314.js";function j(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function O(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function de(e,t){const n=j(e);return isNaN(t)?O(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const le=6048e5,Fe=864e5;let ze={};function H(){return ze}function $(e,t){var l,s,m,x;const n=H(),r=(t==null?void 0:t.weekStartsOn)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.weekStartsOn)??n.weekStartsOn??((x=(m=n.locale)==null?void 0:m.options)==null?void 0:x.weekStartsOn)??0,i=j(e),o=i.getDay(),c=(o<r?7:0)+o-r;return i.setDate(i.getDate()-c),i.setHours(0,0,0,0),i}function R(e){return $(e,{weekStartsOn:1})}function he(e){const t=j(e),n=t.getFullYear(),r=O(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=R(r),o=O(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const c=R(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}function U(e){const t=j(e);return t.setHours(0,0,0,0),t}function K(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function qe(e,t){const n=U(e),r=U(t),i=+n-K(n),o=+r-K(r);return Math.trunc((i-o)/Fe)}function $e(e){const t=he(e),n=O(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),R(n)}function Re(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ie(e){if(!Re(e)&&typeof e!="number")return!1;const t=j(e);return!isNaN(Number(t))}function Le(e){const t=j(e),n=O(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const He={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Be=(e,t,n)=>{let r;const i=He[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Q(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Qe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Xe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ae={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ge={date:Q({formats:Qe,defaultWidth:"full"}),time:Q({formats:Xe,defaultWidth:"full"}),dateTime:Q({formats:Ae,defaultWidth:"full"})},Ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Je=(e,t,n,r)=>Ve[e];function z(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const c=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):c;i=e.formattingValues[l]||e.formattingValues[c]}else{const c=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[l]||e.values[c]}const o=e.argumentCallback?e.argumentCallback(t):t;return i[o]}}const Ue={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ke={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ze={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},et={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},tt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},nt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},rt=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},at={ordinalNumber:rt,era:z({values:Ue,defaultWidth:"wide"}),quarter:z({values:Ke,defaultWidth:"wide",argumentCallback:e=>e-1}),month:z({values:Ze,defaultWidth:"wide"}),day:z({values:et,defaultWidth:"wide"}),dayPeriod:z({values:tt,defaultWidth:"wide",formattingValues:nt,defaultFormattingWidth:"wide"})};function q(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;const c=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?ot(l,f=>f.test(c)):it(l,f=>f.test(c));let m;m=e.valueCallback?e.valueCallback(s):s,m=n.valueCallback?n.valueCallback(m):m;const x=t.slice(c.length);return{value:m,rest:x}}}function it(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ot(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function st(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],o=t.match(e.parsePattern);if(!o)return null;let c=e.valueCallback?e.valueCallback(o[0]):o[0];c=n.valueCallback?n.valueCallback(c):c;const l=t.slice(i.length);return{value:c,rest:l}}}const ct=/^(\d+)(th|st|nd|rd)?/i,dt=/\d+/i,lt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ht={any:[/^b/i,/^(a|c)/i]},ut={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},mt={any:[/1/i,/2/i,/3/i,/4/i]},xt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ft={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},bt={ordinalNumber:st({matchPattern:ct,parsePattern:dt,valueCallback:e=>parseInt(e,10)}),era:q({matchPatterns:lt,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any"}),quarter:q({matchPatterns:ut,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:q({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),day:q({matchPatterns:ft,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),dayPeriod:q({matchPatterns:wt,defaultMatchWidth:"any",parsePatterns:yt,defaultParseWidth:"any"})},jt={code:"en-US",formatDistance:Be,formatLong:Ge,formatRelative:Je,localize:at,match:bt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function kt(e){const t=j(e);return qe(t,Le(t))+1}function vt(e){const t=j(e),n=+R(t)-+$e(t);return Math.trunc(n/le)+1}function ue(e,t){var x,f,k,v;const n=j(e),r=n.getFullYear(),i=H(),o=(t==null?void 0:t.firstWeekContainsDate)??((f=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((v=(k=i.locale)==null?void 0:k.options)==null?void 0:v.firstWeekContainsDate)??1,c=O(e,0);c.setFullYear(r+1,0,o),c.setHours(0,0,0,0);const l=$(c,t),s=O(e,0);s.setFullYear(r,0,o),s.setHours(0,0,0,0);const m=$(s,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function Dt(e,t){var l,s,m,x;const n=H(),r=(t==null?void 0:t.firstWeekContainsDate)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(m=n.locale)==null?void 0:m.options)==null?void 0:x.firstWeekContainsDate)??1,i=ue(e,t),o=O(e,0);return o.setFullYear(i,0,r),o.setHours(0,0,0,0),$(o,t)}function Wt(e,t){const n=j(e),r=+$(n,t)-+Dt(n,t);return Math.trunc(r/le)+1}function h(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const W={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return h(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):h(n+1,2)},d(e,t){return h(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return h(e.getHours()%12||12,t.length)},H(e,t){return h(e.getHours(),t.length)},m(e,t){return h(e.getMinutes(),t.length)},s(e,t){return h(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return h(i,t.length)}},Y={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Z={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return W.y(e,t)},Y:function(e,t,n,r){const i=ue(e,r),o=i>0?i:1-i;if(t==="YY"){const c=o%100;return h(c,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):h(o,t.length)},R:function(e,t){const n=he(e);return h(n,t.length)},u:function(e,t){const n=e.getFullYear();return h(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return h(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return W.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=Wt(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):h(i,t.length)},I:function(e,t,n){const r=vt(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):h(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):W.d(e,t)},D:function(e,t,n){const r=kt(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):h(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return h(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return h(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return h(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=Y.noon:r===0?i=Y.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=Y.evening:r>=12?i=Y.afternoon:r>=4?i=Y.morning:i=Y.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return W.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):W.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):h(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):h(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):W.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):W.s(e,t)},S:function(e,t){return W.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return te(r);case"XXXX":case"XX":return C(r);case"XXXXX":case"XXX":default:return C(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return te(r);case"xxxx":case"xx":return C(r);case"xxxxx":case"xxx":default:return C(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ee(r,":");case"OOOO":default:return"GMT"+C(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ee(r,":");case"zzzz":default:return"GMT"+C(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return h(r,t.length)},T:function(e,t,n){const r=e.getTime();return h(r,t.length)}};function ee(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),o=r%60;return o===0?n+String(i):n+String(i)+t+h(o,2)}function te(e,t){return e%60===0?(e>0?"-":"+")+h(Math.abs(e)/60,2):C(e,t)}function C(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=h(Math.trunc(r/60),2),o=h(r%60,2);return n+i+t+o}const ne=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},me=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Mt=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return ne(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",ne(r,t)).replace("{{time}}",me(i,t))},Pt={p:me,P:Mt},_t=/^D+$/,Ot=/^Y+$/,Tt=["D","DD","YY","YYYY"];function St(e){return _t.test(e)}function Ct(e){return Ot.test(e)}function Et(e,t,n){const r=Yt(e,t,n);if(console.warn(r),Tt.includes(e))throw new RangeError(r)}function Yt(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Nt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ft=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,zt=/^'([^]*?)'?$/,qt=/''/g,$t=/[a-zA-Z]/;function I(e,t,n){var x,f,k,v,A,G,V,J;const r=H(),i=(n==null?void 0:n.locale)??r.locale??jt,o=(n==null?void 0:n.firstWeekContainsDate)??((f=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((v=(k=r.locale)==null?void 0:k.options)==null?void 0:v.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((G=(A=n==null?void 0:n.locale)==null?void 0:A.options)==null?void 0:G.weekStartsOn)??r.weekStartsOn??((J=(V=r.locale)==null?void 0:V.options)==null?void 0:J.weekStartsOn)??0,l=j(e);if(!Ie(l))throw new RangeError("Invalid time value");let s=t.match(Ft).map(g=>{const p=g[0];if(p==="p"||p==="P"){const B=Pt[p];return B(g,i.formatLong)}return g}).join("").match(Nt).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const p=g[0];if(p==="'")return{isToken:!1,value:Rt(g)};if(Z[p])return{isToken:!0,value:g};if(p.match($t))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:g}});i.localize.preprocessor&&(s=i.localize.preprocessor(l,s));const m={firstWeekContainsDate:o,weekStartsOn:c,locale:i};return s.map(g=>{if(!g.isToken)return g.value;const p=g.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Ct(p)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&St(p))&&Et(p,t,String(e));const B=Z[p[0]];return B(l,p,i.localize,m)}).join("")}function Rt(e){const t=e.match(zt);return t?t[1].replace(qt,"'"):e}function It(e,t){return de(e,-t)}const Lt=d.section`
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
`,Ht=d.ul`
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
`,N=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Bt=d.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,F=d.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 161px;
  height: 96px;

  padding: 13px;

  border-radius: 12px;
  border: 1px solid ${e=>e.bordercolor||"rgba(239, 237, 232, 0.2)"};
  background: ${e=>e.color||"initial"};

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;

    padding: 17px;
  }
`,M=d.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: ${e=>e.size||"12px"};
  line-height: ${e=>e.$lineheight||"1.33"};

  color: ${e=>e.color||"rgba(239, 237, 232, 0.8)"};

  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`,re=()=>{const{bmr:e,targetTime:t}=E(se),n=E(Te),r=E(Se),i=E(Ce),o=e-n,c=Math.round(i/60),l=t-c;return a.jsxs(Lt,{children:[a.jsxs(Ht,{children:[a.jsxs(F,{color:"var(--orange-color)",children:[a.jsxs(N,{children:[a.jsx(T,{name:"knife"}),a.jsx(M,{color:"rgba(239, 237, 232, 0.80)",children:"Daily calorie intake"})]}),a.jsx(S,{size:"h4",children:e})]}),a.jsxs(F,{color:"var(--orange-color)",children:[a.jsxs(N,{children:[a.jsx(T,{name:"dumbbell"}),a.jsx(M,{color:"rgba(239, 237, 232, 0.80)",children:"Daily physical activity"})]}),a.jsxs(S,{size:"h4",children:[t," min"]})]}),a.jsxs(F,{color:"rgba(239, 237, 232, 0.05)",children:[a.jsxs(N,{children:[a.jsx(T,{name:"apple"}),a.jsx(M,{color:"rgba(239, 237, 232, 0.40)",children:"Сalories consumed"})]}),a.jsx(S,{size:"h4",children:n})]}),a.jsxs(F,{color:"rgba(239, 237, 232, 0.05)",children:[a.jsxs(N,{children:[a.jsx(T,{name:"fire"}),a.jsx(M,{color:"rgba(239, 237, 232, 0.40)",children:"Сalories burned"})]}),a.jsx(S,{size:"h4",children:r})]}),a.jsxs(F,{color:"rgba(239, 237, 232, 0.05)",children:[a.jsxs(N,{children:[a.jsx(T,{name:"bubbles"}),a.jsx(M,{color:"rgba(239, 237, 232, 0.40)",children:"Calories remaining"})]}),a.jsx(S,{size:"h4",children:o})]}),a.jsxs(F,{color:"rgba(239, 237, 232, 0.05)",children:[a.jsxs(N,{children:[a.jsx(T,{name:"runner"}),a.jsx(M,{color:"rgba(239, 237, 232, 0.40)",children:"Sports remaining"})]}),a.jsxs(S,{size:"h4",children:[l," min"]})]})]}),a.jsxs(Bt,{children:[a.jsx("div",{style:{width:"24px",height:"24px"},children:a.jsx(T,{name:"alarm",size:24})}),a.jsx(P,{maxWidth:767,children:a.jsx(M,{size:"14px",color:"rgba(239, 237, 232, 0.30)",$lineheight:"1.28",children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})}),a.jsx(P,{minWidth:768,children:a.jsx(M,{size:"16px",color:"rgba(239, 237, 232, 0.30)",children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})})]})]})},Qt=We`
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

`,Xt=d.button`
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
`,At=d.div`
  display: flex;
  justify-content: end !important;
  align-items: center;
`,ae=d.svg`
  width: 16px;
  height: 16px;
  stroke: var(--white-color);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: var(--orange-light-color);
  }
`,Gt=d.svg`
  width: 24px;
  height: 24px;
  stroke: var(--orange-light-color);
  fill: transparent;
`,Vt=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,ie=d.svg`
  width: 8px;
  height: 8px;
  stroke: var(--white-color);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: white;
  }
`,Jt=d.p`
  color: var(--white-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,oe=d.button`
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
`,Ut=({onDateChange:e})=>{const[t,n]=_.useState(new Date),r=_.forwardRef(function({onClick:l},s){return a.jsxs(At,{children:[a.jsxs(Xt,{onClick:l,ref:s,children:[I(t,"dd/MM/yyyy"),a.jsx(Gt,{onClick:l,ref:s,children:a.jsx("use",{href:`${D}#icon-calendar-orange`})})]}),a.jsx(ae,{onClick:()=>i(It(t,1)),children:a.jsx("use",{href:`${D}#icon-calendar-left`})}),a.jsx(ae,{onClick:()=>i(de(t,1)),children:a.jsx("use",{href:`${D}#icon-calendar-right`})})]})}),i=c=>{n(c),e&&e(c)},o=({date:c,decreaseMonth:l,increaseMonth:s})=>a.jsxs(Vt,{children:[a.jsx(oe,{onClick:l,children:a.jsx(ie,{children:a.jsx("use",{href:`${D}#icon-calendar-left`})})}),a.jsx(Jt,{children:I(c,"MMMM yyyy")}),a.jsx(oe,{onClick:s,children:a.jsx(ie,{children:a.jsx("use",{href:`${D}#icon-calendar-right`})})})]});return a.jsxs(a.Fragment,{children:[a.jsx(Ne,{selected:t,onChange:c=>{n(c),e(c)},customInput:a.jsx(r,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:c=>c.substr(0,2),renderCustomHeader:c=>a.jsx(o,{...c})}),a.jsx(Qt,{})]})},xe=d.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 335px;
  max-height: ${e=>e.height||"826px"};
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
`,pe=d.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-right: 8px;
  }
`,fe=d.h3`
  color: rgba(239, 237, 232, 0.5);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`,ge=d.div`
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
`,we=d.svg`
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
`,L=d.ul`
  display: flex;
  gap: 8px;
  line-height: 1.5;
  margin-bottom: -8px;
  color: var(--orange-light-color);

  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`,u=d.li`
  display: inline-block;
  font-size: 12px;
  width: ${e=>e.width||"100%"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ye=d.ul`
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
`,be=d.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`,w=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc((100% - 2 * 16px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`,y=d.h4`
  max-width: ${e=>e.size||"inherit"};
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
`,b=d.div`
  display: ${e=>e.display||"inline-block"};
  gap: 8px;
  width: ${e=>e.width||"100%"};
  max-width: ${e=>e.$maxwidth||"100%"};
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
`,je=d.div`
  position: relative;
  display: flex;
  padding-right: 28px;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`,ke=d.button`
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
`,ve=d.svg`
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
`,De=d.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,Kt=d.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${e=>e.color==="false"?"#419B09":"#E9101D"};
`,Zt=({product:e,blood:t})=>{const{_id:n,productId:{title:r,category:i,groupBloodNotAllowed:o},calories:c,amount:l}=e,[s,m]=_.useState(window.innerWidth),x=()=>m(window.innerWidth);_.useEffect(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[]);const f=X(),k=v=>{f(Me(v))};return a.jsxs(be,{children:[a.jsxs(w,{children:[a.jsx(y,{children:"Title"}),a.jsx(b,{width:s<1440&&s>=768?"204px":s>=1440?"212px":"100%",children:r})]}),a.jsxs(w,{children:[a.jsx(y,{children:"Category"}),a.jsx(b,{width:s<1440&&s>=768?"128px":s>=1440?"166px":"100%",children:i})]}),a.jsxs(je,{children:[a.jsxs(w,{children:[a.jsx(y,{children:"Calories"}),a.jsx(b,{$maxwidth:"81px",width:s<1440&&s>=768?"90px":s>=1440?"105px":"100%",children:c})]}),a.jsxs(w,{children:[a.jsx(y,{children:"Weight"}),a.jsx(b,{$maxwidth:"80px",width:s<1440&&s>=768?"90px":s>=1440?"105px":"100%",children:l})]}),a.jsxs(w,{children:[a.jsx(y,{children:"Recommend"}),a.jsxs(b,{$maxwidth:"76px",display:"flex",width:s<1440&&s>=768?"80px":s>=1440?"110px":"100%",children:[a.jsx(Kt,{color:`${o[t]}`}),o[t]?"No":"Yes"]})]}),a.jsx(ke,{type:"button",onClick:()=>k(n),children:a.jsx(ve,{children:a.jsx("use",{href:`${D}#icon-trash`})})})]})]},n)},en=()=>{const e=E(Ee),t=E(se);return a.jsxs(xe,{children:[a.jsxs(pe,{children:[a.jsx(fe,{children:"Products"}),a.jsx(ce,{to:"/products",children:a.jsxs(ge,{children:["Add product",a.jsx(we,{children:a.jsx("use",{href:`${D}#icon-arrow-right`})})]})})]}),e.length!==0?a.jsxs(a.Fragment,{children:[a.jsx(P,{minWidth:768,maxWidth:1439,children:a.jsxs(L,{children:[a.jsx(u,{width:"204px",children:"Title"}),a.jsx(u,{width:"128px",children:"Category"}),a.jsx(u,{width:"90px",children:"Calories"}),a.jsx(u,{width:"90px",children:"Weight"}),a.jsx(u,{width:"80px",children:"Recommend"})]})}),a.jsx(P,{minWidth:1440,children:a.jsxs(L,{children:[a.jsx(u,{width:"212px",children:"Title"}),a.jsx(u,{width:"166px",children:"Category"}),a.jsx(u,{width:"105px",children:"Calories"}),a.jsx(u,{width:"105px",children:"Weight"}),a.jsx(u,{width:"110px",children:"Recommend"})]})}),a.jsxs(ye,{children:[" ",e.map(n=>a.jsx(Zt,{product:n,blood:t.blood},n._id))," "]})]}):a.jsx(De,{children:"Not found products"})]})},tn=({workout:e})=>{const{_id:t,calories:n,time:r,exerciseId:{bodyPart:i,equipment:o,name:c,target:l}}=e,[s,m]=_.useState(window.innerWidth),x=()=>m(window.innerWidth);_.useEffect(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[]);const f=X(),k=v=>{f(Pe(v))};return a.jsxs(be,{children:[a.jsxs(w,{children:[a.jsx(y,{children:"Body Part"}),a.jsx(b,{width:s<1440&&s>=768?"90px":s>=1440?"115px":"100%",children:i})]}),a.jsxs(w,{children:[a.jsx(y,{children:"Equipment"}),a.jsx(b,{width:s<1440&&s>=768?"132px":s>=1440?"157px":"100%",children:o})]}),a.jsxs(w,{children:[a.jsx(y,{children:"Name"}),a.jsx(b,{width:s<1440&&s>=768?"128px":s>=1440?"131px":"100%",children:c})]}),a.jsxs(je,{children:[a.jsxs(w,{children:[a.jsx(y,{children:"Target"}),a.jsx(b,{$maxwidth:"81px",width:s<1440&&s>=768?"84px":s>=1440?"106px":"100%",children:l})]}),a.jsxs(w,{children:[a.jsx(y,{size:"80px",children:"Burned Calories"}),a.jsx(b,{$maxwidth:"80px",width:s<1440&&s>=768?"78px":s>=1440?"91px":"100%",children:n})]}),a.jsxs(w,{children:[a.jsx(y,{children:"Time"}),a.jsx(b,{$maxwidth:"76px",width:s<1440&&s>=768?"72px":s>=1440?"82px":"100%",children:r})]}),a.jsx(ke,{type:"button",onClick:()=>k(t),children:a.jsx(ve,{children:a.jsx("use",{href:`${D}#icon-trash`})})})]})]},t)},nn=()=>{const e=E(Ye);return a.jsxs(xe,{height:"1066px",children:[a.jsxs(pe,{children:[a.jsx(fe,{children:"Exercises"}),a.jsx(ce,{to:"/exercises",children:a.jsxs(ge,{children:["Add exercise",a.jsx(we,{children:a.jsx("use",{href:`${D}#icon-arrow-right`})})]})})]}),e.length!==0?a.jsxs(a.Fragment,{children:[a.jsx(P,{minWidth:768,maxWidth:1439,children:a.jsxs(L,{children:[a.jsx(u,{width:"90px",children:"Body Part"}),a.jsx(u,{width:"132px",children:"Equipment"}),a.jsx(u,{width:"128px",children:"Name"}),a.jsx(u,{width:"84px",children:"Target"}),a.jsx(u,{width:"78px",children:"Burned Calories"}),a.jsx(u,{width:"72px",children:"Time"})]})}),a.jsx(P,{minWidth:1440,children:a.jsxs(L,{children:[a.jsx(u,{width:"115px",children:"Body Part"}),a.jsx(u,{width:"157px",children:"Equipment"}),a.jsx(u,{width:"131px",children:"Name"}),a.jsx(u,{width:"106px",children:"Target"}),a.jsx(u,{width:"91px",children:"Burned Calories"}),a.jsx(u,{width:"82px",children:"Time"})]})}),a.jsxs(ye,{children:[" ",e.map(t=>a.jsx(tn,{workout:t},t._id))," "]})]}):a.jsx(De,{children:"Not found exercises"})]})},rn=d.div`
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
`,an=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,on=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,xn=()=>{const e=X(),[t,n]=_.useState(I(new Date,"dd-MM-yyyy")),r=i=>{const o=I(i,"dd-MM-yyyy");n(o)};return _.useEffect(()=>{e(_e(t))},[e,t]),a.jsxs(Oe,{children:[a.jsxs(rn,{children:[a.jsx(S,{tag:"h3",size:"h3",children:"Diary"}),a.jsx(Ut,{onDateChange:r})]}),a.jsx(P,{maxWidth:765,children:a.jsx(re,{})}),a.jsxs(on,{children:[a.jsxs(an,{children:[a.jsx(en,{}),a.jsx(nn,{})]}),a.jsx(P,{minWidth:768,children:a.jsx(re,{})})]})]})};export{xn as default};
