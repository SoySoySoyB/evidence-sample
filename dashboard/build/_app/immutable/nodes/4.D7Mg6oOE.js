import{s as be,d as _,i as g,f as ce,q as me,D as Me,a as Z,b as h,e as D,r as x,t as ge,g as Ae,k as w,u as Re,V as xe,c as U,j as F,G as Et,Q as pe,R as Oe,v as He,w as Be,x as Ge,y as We,h as yt,l as et,m as ht,o as gt,n as Rt,p as At}from"../chunks/scheduler.DbLZmw5B.js";import{S as Ne,i as ke,t as p,a as m,g as ee,c as te,d as k,m as v,b as M,e as I}from"../chunks/index.DZMbDxCq.js";import{j as ct,K as De,L as St,a3 as Tt,q as Ot,M as dt,v as tt,a4 as Ct,a5 as pt,O as qe,Q as ae,R as Ye,S as Ve,U as je,a6 as bt,N as Nt,a7 as kt,_ as Te,a as Ce,a8 as vt,a9 as Mt,e as It,s as Ut,p as Ft,r as rt,C as Dt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C88-DVgh.js";import{w as wt}from"../chunks/entry.CKB6EmEz.js";import{h as _e,p as Lt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ht}from"../chunks/stores.ChOsbD0K.js";import{Q as Ie}from"../chunks/getCompletedData.BOW9Mk2J.js";import{B as Le}from"../chunks/BarChart.KTqw9ki5.js";import{L as Bt}from"../chunks/LineChart.BMlXdgjs.js";function Gt(n){let e,r;return e=new Ct({props:{error:n[3]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&8&&(a.error=t[3]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Wt(n){let e,r=tt(n[2],n[4])+"",t,l,a,s=n[1]&&at(n);return{c(){e=w("span"),t=Re(r),l=F(),s&&s.c(),this.h()},l(o){e=D(o,"SPAN",{style:!0});var u=x(e);t=ge(u,r),l=U(u),s&&s.l(u),u.forEach(_),this.h()},h(){xe(e,"color",n[5])},m(o,u){g(o,e,u),Z(e,t),Z(e,l),s&&s.m(e,null),a=!0},p(o,u){(!a||u&20)&&r!==(r=tt(o[2],o[4])+"")&&Me(t,r),o[1]?s?(s.p(o,u),u&2&&m(s,1)):(s=at(o),s.c(),m(s,1),s.m(e,null)):s&&(ee(),p(s,1,1,()=>{s=null}),te()),(!a||u&32)&&xe(e,"color",o[5])},i(o){a||(m(s),a=!0)},o(o){p(s),a=!1},d(o){o&&_(e),s&&s.d()}}}function qt(n){let e,r,t,l,a,s="Placeholder: no data currently referenced.";return{c(){e=w("span"),r=Re("["),t=Re(n[0]),l=Re("]"),a=w("span"),a.textContent=s,this.h()},l(o){e=D(o,"SPAN",{class:!0});var u=x(e);r=ge(u,"["),t=ge(u,n[0]),l=ge(u,"]"),a=D(u,"SPAN",{class:!0,"data-svelte-h":!0}),Ae(a)!=="svelte-ddarzq"&&(a.textContent=s),u.forEach(_),this.h()},h(){h(a,"class","error-msg svelte-1qvl5jp"),h(e,"class","placeholder svelte-1qvl5jp")},m(o,u){g(o,e,u),Z(e,r),Z(e,t),Z(e,l),Z(e,a)},p(o,u){u&1&&Me(t,o[0])},i:me,o:me,d(o){o&&_(e)}}}function at(n){let e,r;return e=new pt({props:{description:n[1]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&2&&(a.description=t[1]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Yt(n){let e,r,t,l;const a=[qt,Wt,Gt],s=[];function o(u,f){return u[0]?0:u[3]?2:1}return e=o(n),r=s[e]=a[e](n),{c(){r.c(),t=ce()},l(u){r.l(u),t=ce()},m(u,f){s[e].m(u,f),g(u,t,f),l=!0},p(u,[f]){let S=e;e=o(u),e===S?s[e].p(u,f):(ee(),p(s[S],1,1,()=>{s[S]=null}),te(),r=s[e],r?r.p(u,f):(r=s[e]=a[e](u),r.c()),m(r,1),r.m(t.parentNode,t))},i(u){l||(m(r),l=!0)},o(u){p(r),l=!1},d(u){u&&_(t),s[e].d(u)}}}function Vt(n,e,r){let t,l,a=me,s=()=>(a(),a=Et(t,T=>r(15,l=T)),t);n.$$.on_destroy.push(()=>a());const{resolveColor:o}=ct();let{data:u=null}=e,{row:f=0}=e,{column:S=null}=e,{value:c=null}=e,{placeholder:R=null}=e,{description:A=void 0}=e,{fmt:O=void 0}=e,X,B,Y,{color:C=void 0}=e,N="",{redNegatives:y=!1}=e,b;return n.$$set=T=>{"data"in T&&r(7,u=T.data),"row"in T&&r(10,f=T.row),"column"in T&&r(8,S=T.column),"value"in T&&r(11,c=T.value),"placeholder"in T&&r(0,R=T.placeholder),"description"in T&&r(1,A=T.description),"fmt"in T&&r(12,O=T.fmt),"color"in T&&r(13,C=T.color),"redNegatives"in T&&r(9,y=T.redNegatives)},n.$$.update=()=>{var T;if(n.$$.dirty&2304&&r(8,S=S??c),n.$$.dirty&21897)try{if(r(3,Y=void 0),!R)if(u){if(typeof u=="string")throw Error(`Received: data=${u}, expected: data={${u}}`);if(Array.isArray(u)||r(7,u=[u]),isNaN(f))throw Error("row must be a number (row="+f+")");try{Object.keys(u[f])[0]}catch{throw Error("Row "+f+" does not exist in the dataset")}r(8,S=S??Object.keys(u[f])[0]),De(u,[S]),r(14,b=St(u,"array"));const re=b.filter(G=>{var W;return G.type==="date"&&!(((W=u[0])==null?void 0:W[G.id])instanceof Date)}).map(G=>G.id);for(let G=0;G<re.length;G++)r(7,u=Tt(u,re[G]));r(2,B=u[f][S]),r(14,b=b.filter(G=>G.id===S)),O?r(4,X=Ot(O,(T=b[0].format)==null?void 0:T.valueType)):r(4,X=b[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(re){if(r(3,Y=re.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${Y}`),dt)throw Y}n.$$.dirty&2304&&c&&S&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),n.$$.dirty&8192&&s(r(6,t=o(C))),n.$$.dirty&512&&r(9,y=y==="true"||y===!0),n.$$.dirty&33284&&(y||l)&&(y&&B<0?r(5,N="rgb(220 38 38)"):l&&r(5,N=l))},[R,A,B,Y,X,N,t,u,S,y,f,c,O,C,b,l]}class jt extends Ne{constructor(e){super(),ke(this,e,Vt,Yt,be,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function Pt(n){let e;const r=n[7].default,t=He(r,n,n[8],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&256)&&Be(t,r,l,l[8],e?We(r,l[8],a,null):Ge(l[8]),null)},i(l){e||(m(t,l),e=!0)},o(l){p(t,l),e=!1},d(l){t&&t.d(l)}}}function Jt(n){let e,r;const t=[n[4],{data:ae.isQuery(n[11])?Array.from(n[11]):n[11]}];let l={$$slots:{default:[Pt]},$$scope:{ctx:n}};for(let a=0;a<t.length;a+=1)l=pe(l,t[a]);return e=new jt({props:l}),{c(){I(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,s){v(e,a,s),r=!0},p(a,s){const o=s&2064?Ye(t,[s&16&&Ve(a[4]),s&2048&&{data:ae.isQuery(a[11])?Array.from(a[11]):a[11]}]):{};s&256&&(o.$$scope={dirty:s,ctx:a}),e.$set(o)},i(a){r||(m(e.$$.fragment,a),r=!0)},o(a){p(e.$$.fragment,a),r=!1},d(a){k(e,a)}}}function lt(n){let e,r;return e=new je({props:{emptyMessage:n[2],emptySet:n[1],chartType:zt,isInitial:n[3]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&4&&(a.emptyMessage=t[2]),l&2&&(a.emptySet=t[1]),l&8&&(a.isInitial=t[3]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Qt(n){let e,r,t=!n[4].placeholder&&lt(n);return{c(){e=w("span"),t&&t.c(),this.h()},l(l){e=D(l,"SPAN",{slot:!0});var a=x(e);t&&t.l(a),a.forEach(_),this.h()},h(){h(e,"slot","empty")},m(l,a){g(l,e,a),t&&t.m(e,null),r=!0},p(l,a){l[4].placeholder?t&&(ee(),p(t,1,1,()=>{t=null}),te()):t?(t.p(l,a),a&16&&m(t,1)):(t=lt(l),t.c(),m(t,1),t.m(e,null))},i(l){r||(m(t),r=!0)},o(l){p(t),r=!1},d(l){l&&_(e),t&&t.d()}}}function Zt(n){let e,r="Loading...";return{c(){e=w("span"),e.textContent=r,this.h()},l(t){e=D(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-89gxhc"&&(e.textContent=r),this.h()},h(){h(e,"slot","skeleton"),h(e,"class","text-base-content-muted")},m(t,l){g(t,e,l)},p:me,d(t){t&&_(e)}}}function Xt(n){let e,r;return e=new qe({props:{data:n[0],$$slots:{skeleton:[Zt],empty:[Qt],default:[Jt,({loaded:t})=>({11:t}),({loaded:t})=>t?2048:0]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,[l]){const a={};l&1&&(a.data=t[0]),l&2334&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}let zt="Value";function Kt(n,e,r){let t,{$$slots:l={},$$scope:a}=e,{data:s}=e,{column:o}=e,{agg:u}=e;const f=ae.isQuery(s)?s.hash:void 0;let S=(s==null?void 0:s.hash)===f,{emptySet:c=void 0}=e,{emptyMessage:R=void 0}=e;return n.$$set=A=>{r(10,e=pe(pe({},e),Oe(A))),"data"in A&&r(0,s=A.data),"column"in A&&r(5,o=A.column),"agg"in A&&r(6,u=A.agg),"emptySet"in A&&r(1,c=A.emptySet),"emptyMessage"in A&&r(2,R=A.emptyMessage),"$$scope"in A&&r(8,a=A.$$scope)},n.$$.update=()=>{n.$$.dirty&97&&u&&r(0,s=s.groupBy(void 0).agg({[u]:{col:o,as:o}})),n.$$.dirty&1&&r(3,S=(s==null?void 0:s.hash)===f),r(4,t=Object.fromEntries(Object.entries(e).filter(([,A])=>A!==void 0)))},e=Oe(e),[s,c,R,S,t,o,u,l,a]}class Ue extends Ne{constructor(e){super(),ke(this,e,Kt,Xt,be,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}function $t(n){let e;const r=n[6].default,t=He(r,n,n[7],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&128)&&Be(t,r,l,l[7],e?We(r,l[7],a,null):Ge(l[7]),null)},i(l){e||(m(t,l),e=!0)},o(l){p(t,l),e=!1},d(l){t&&t.d(l)}}}function xt(n){let e,r;const t=[n[4],{data:ae.isQuery(n[10])?Array.from(n[10]):n[10]},{queryID:n[5]}];let l={$$slots:{default:[$t]},$$scope:{ctx:n}};for(let a=0;a<t.length;a+=1)l=pe(l,t[a]);return e=new bt({props:l}),{c(){I(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,s){v(e,a,s),r=!0},p(a,s){const o=s&1072?Ye(t,[s&16&&Ve(a[4]),s&1024&&{data:ae.isQuery(a[10])?Array.from(a[10]):a[10]},s&32&&{queryID:a[5]}]):{};s&128&&(o.$$scope={dirty:s,ctx:a}),e.$set(o)},i(a){r||(m(e.$$.fragment,a),r=!0)},o(a){p(e.$$.fragment,a),r=!1},d(a){k(e,a)}}}function er(n){let e,r;return e=new je({props:{slot:"empty",emptyMessage:n[2],emptySet:n[1],chartType:n[4].chartType,isInitial:n[3]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&4&&(a.emptyMessage=t[2]),l&2&&(a.emptySet=t[1]),l&16&&(a.chartType=t[4].chartType),l&8&&(a.isInitial=t[3]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function tr(n){let e,r;return e=new Nt({props:{slot:"error",title:ar,error:n[10].error.message}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&1024&&(a.error=t[10].error.message),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function rr(n){let e,r;return e=new qe({props:{data:n[0],$$slots:{error:[tr,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0],empty:[er],default:[xt,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,[l]){const a={};l&1&&(a.data=t[0]),l&1182&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}let ar="Sparkline";function lr(n,e,r){let t,{$$slots:l={},$$scope:a}=e,{data:s}=e;const o=ae.isQuery(s)?s.hash:void 0;let u=(s==null?void 0:s.hash)===o,{emptySet:f=void 0}=e,{emptyMessage:S=void 0}=e,c=s==null?void 0:s.id;return n.$$set=R=>{r(9,e=pe(pe({},e),Oe(R))),"data"in R&&r(0,s=R.data),"emptySet"in R&&r(1,f=R.emptySet),"emptyMessage"in R&&r(2,S=R.emptyMessage),"$$scope"in R&&r(7,a=R.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&r(3,u=(s==null?void 0:s.hash)===o),r(4,t={...Object.fromEntries(Object.entries(e).filter(([,R])=>R!==void 0))})},e=Oe(e),[s,f,S,u,t,c,l,a]}class sr extends Ne{constructor(e){super(),ke(this,e,lr,rr,be,{data:0,emptySet:1,emptyMessage:2})}}function nr(n){let e,r,t,l,a,s,o,u,f,S,c,R,A,O=n[23]&&st(n);const X=[ur,ir],B=[];function Y(y,b){return y[22]?0:1}o=Y(n),u=B[o]=X[o](n);let C=n[8]&&nt(n),N=n[7]&&ot(n);return{c(){e=w("p"),r=Re(n[3]),t=F(),O&&O.c(),a=F(),s=w("div"),u.c(),f=F(),C&&C.c(),c=F(),N&&N.c(),R=ce(),this.h()},l(y){e=D(y,"P",{class:!0});var b=x(e);r=ge(b,n[3]),t=U(b),O&&O.l(b),b.forEach(_),a=U(y),s=D(y,"DIV",{class:!0});var T=x(s);u.l(T),f=U(T),C&&C.l(T),T.forEach(_),c=U(y),N&&N.l(y),R=ce(),this.h()},h(){h(e,"class",l=Te("text-sm align-top leading-none",n[19])),h(s,"class",S=Te("relative text-xl font-medium mt-1.5",n[20]))},m(y,b){g(y,e,b),Z(e,r),Z(e,t),O&&O.m(e,null),g(y,a,b),g(y,s,b),B[o].m(s,null),Z(s,f),C&&C.m(s,null),g(y,c,b),N&&N.m(y,b),g(y,R,b),A=!0},p(y,b){(!A||b&8)&&Me(r,y[3]),y[23]?O?(O.p(y,b),b&8388608&&m(O,1)):(O=st(y),O.c(),m(O,1),O.m(e,null)):O&&(ee(),p(O,1,1,()=>{O=null}),te()),(!A||b&524288&&l!==(l=Te("text-sm align-top leading-none",y[19])))&&h(e,"class",l);let T=o;o=Y(y),o===T?B[o].p(y,b):(ee(),p(B[T],1,1,()=>{B[T]=null}),te(),u=B[o],u?u.p(y,b):(u=B[o]=X[o](y),u.c()),m(u,1),u.m(s,f)),y[8]?C?(C.p(y,b),b&256&&m(C,1)):(C=nt(y),C.c(),m(C,1),C.m(s,null)):C&&(ee(),p(C,1,1,()=>{C=null}),te()),(!A||b&1048576&&S!==(S=Te("relative text-xl font-medium mt-1.5",y[20])))&&h(s,"class",S),y[7]?N?(N.p(y,b),b&128&&m(N,1)):(N=ot(y),N.c(),m(N,1),N.m(R.parentNode,R)):N&&(ee(),p(N,1,1,()=>{N=null}),te())},i(y){A||(m(O),m(u),m(C),m(N),A=!0)},o(y){p(O),p(u),p(C),p(N),A=!1},d(y){y&&(_(e),_(a),_(s),_(c),_(R)),O&&O.d(),B[o].d(),C&&C.d(),N&&N.d(y)}}}function or(n){let e,r;return e=new kt({props:{inputType:"BigValue",error:n[24],width:"148",height:"28"}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&16777216&&(a.error=t[24]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function st(n){let e,r;return e=new pt({props:{description:n[23],size:"3"}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&8388608&&(a.description=t[23]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function ir(n){let e,r;return e=new Ue({props:{data:n[0],column:n[6],fmt:n[13]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&1&&(a.data=t[0]),l&64&&(a.column=t[6]),l&8192&&(a.fmt=t[13]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function ur(n){let e,r,t,l;return r=new Ue({props:{data:n[0],column:n[6],fmt:n[13]}}),{c(){e=w("a"),I(r.$$.fragment),this.h()},l(a){e=D(a,"A",{class:!0,href:!0});var s=x(e);M(r.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,"class","hover:bg-base-200"),h(e,"href",t=Ce(n[22]))},m(a,s){g(a,e,s),v(r,e,null),l=!0},p(a,s){const o={};s&1&&(o.data=a[0]),s&64&&(o.column=a[6]),s&8192&&(o.fmt=a[13]),r.$set(o),(!l||s&4194304&&t!==(t=Ce(a[22])))&&h(e,"href",t)},i(a){l||(m(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){a&&_(e),k(r)}}}function nt(n){let e,r;return e=new sr({props:{height:"15",data:n[0],dateCol:n[8],valueCol:n[6],type:n[9],interactive:"true",color:n[25],valueFmt:n[13]??n[10],dateFmt:n[11],yScale:n[2],connectGroup:n[12]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&1&&(a.data=t[0]),l&256&&(a.dateCol=t[8]),l&64&&(a.valueCol=t[6]),l&512&&(a.type=t[9]),l&33554432&&(a.color=t[25]),l&9216&&(a.valueFmt=t[13]??t[10]),l&2048&&(a.dateFmt=t[11]),l&4&&(a.yScale=t[2]),l&4096&&(a.connectGroup=t[12]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function ot(n){let e,r,t,l;const a=[_r,fr],s=[];function o(u,f){return u[1]?0:1}return e=o(n),r=s[e]=a[e](n),{c(){r.c(),t=ce()},l(u){r.l(u),t=ce()},m(u,f){s[e].m(u,f),g(u,t,f),l=!0},p(u,f){let S=e;e=o(u),e===S?s[e].p(u,f):(ee(),p(s[S],1,1,()=>{s[S]=null}),te(),r=s[e],r?r.p(u,f):(r=s[e]=a[e](u),r.c()),m(r,1),r.m(t.parentNode,t))},i(u){l||(m(r),l=!0)},o(u){p(r),l=!1},d(u){u&&_(t),s[e].d(u)}}}function fr(n){let e,r,t,l,a,s,o;const u=[cr,mr],f=[];function S(c,R){return c[22]?0:1}return r=S(n),t=f[r]=u[r](n),{c(){e=w("p"),t.c(),l=F(),a=w("span"),s=Re(n[4]),this.h()},l(c){e=D(c,"P",{class:!0});var R=x(e);t.l(R),l=U(R),a=D(R,"SPAN",{});var A=x(a);s=ge(A,n[4]),A.forEach(_),R.forEach(_),this.h()},h(){h(e,"class","text-xs font-sans /60 pt-[0.5px]")},m(c,R){g(c,e,R),f[r].m(e,null),Z(e,l),Z(e,a),Z(a,s),o=!0},p(c,R){let A=r;r=S(c),r===A?f[r].p(c,R):(ee(),p(f[A],1,1,()=>{f[A]=null}),te(),t=f[r],t?t.p(c,R):(t=f[r]=u[r](c),t.c()),m(t,1),t.m(e,l)),(!o||R&16)&&Me(s,c[4])},i(c){o||(m(t),o=!0)},o(c){p(t),o=!1},d(c){c&&_(e),f[r].d()}}}function _r(n){let e,r,t,l;return r=new vt({props:{data:n[0],column:n[7],fmt:n[14],fontClass:"text-xs",symbolPosition:"left",neutralMin:n[15],neutralMax:n[16],text:n[4],downIsGood:n[5]}}),{c(){e=w("p"),I(r.$$.fragment),this.h()},l(a){e=D(a,"P",{class:!0});var s=x(e);M(r.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,"class",t=Te("text-xs font-sans mt-1",n[21]))},m(a,s){g(a,e,s),v(r,e,null),l=!0},p(a,s){const o={};s&1&&(o.data=a[0]),s&128&&(o.column=a[7]),s&16384&&(o.fmt=a[14]),s&32768&&(o.neutralMin=a[15]),s&65536&&(o.neutralMax=a[16]),s&16&&(o.text=a[4]),s&32&&(o.downIsGood=a[5]),r.$set(o),(!l||s&2097152&&t!==(t=Te("text-xs font-sans mt-1",a[21])))&&h(e,"class",t)},i(a){l||(m(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){a&&_(e),k(r)}}}function mr(n){let e,r;return e=new Ue({props:{data:n[0],column:n[7],fmt:n[14]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l&1&&(a.data=t[0]),l&128&&(a.column=t[7]),l&16384&&(a.fmt=t[14]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function cr(n){let e,r,t,l;return r=new Ue({props:{data:n[0],column:n[7],fmt:n[14]}}),{c(){e=w("a"),I(r.$$.fragment),this.h()},l(a){e=D(a,"A",{class:!0,href:!0});var s=x(e);M(r.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,"class","hover:bg-base-200"),h(e,"href",t=Ce(n[22]))},m(a,s){g(a,e,s),v(r,e,null),l=!0},p(a,s){const o={};s&1&&(o.data=a[0]),s&128&&(o.column=a[7]),s&16384&&(o.fmt=a[14]),r.$set(o),(!l||s&4194304&&t!==(t=Ce(a[22])))&&h(e,"href",t)},i(a){l||(m(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){a&&_(e),k(r)}}}function Sr(n){let e,r,t,l,a;const s=[or,nr],o=[];function u(f,S){return f[24].length>0?0:1}return r=u(n),t=o[r]=s[r](n),{c(){e=w("div"),t.c(),this.h()},l(f){e=D(f,"DIV",{class:!0,style:!0});var S=x(e);t.l(S),S.forEach(_),this.h()},h(){h(e,"class","inline-block font-sans pt-2 pb-3 pl-0 mr-3 items-center align-top"),h(e,"style",l=`
        min-width: ${n[18]};
        max-width: ${n[17]};
		`)},m(f,S){g(f,e,S),o[r].m(e,null),a=!0},p(f,[S]){let c=r;r=u(f),r===c?o[r].p(f,S):(ee(),p(o[c],1,1,()=>{o[c]=null}),te(),t=o[r],t?t.p(f,S):(t=o[r]=s[r](f),t.c()),m(t,1),t.m(e,null)),(!a||S&393216&&l!==(l=`
        min-width: ${f[18]};
        max-width: ${f[17]};
		`))&&h(e,"style",l)},i(f){a||(m(t),a=!0)},o(f){p(t),a=!1},d(f){f&&_(e),o[r].d()}}}function dr(n,e,r){let t;const{resolveColor:l}=ct();let{data:a}=e,{value:s=null}=e,{comparison:o=null}=e,{comparisonDelta:u=!0}=e,{sparkline:f=null}=e,{sparklineType:S="line"}=e,{sparklineColor:c=void 0}=e,{sparklineValueFmt:R=void 0}=e,{sparklineDateFmt:A=void 0}=e,{sparklineYScale:O=!1}=e,{connectGroup:X=void 0}=e,{fmt:B=void 0}=e,{comparisonFmt:Y=void 0}=e,{title:C=null}=e,{comparisonTitle:N=null}=e,{downIsGood:y=!1}=e,{neutralMin:b=0}=e,{neutralMax:T=0}=e,{maxWidth:re="none"}=e,{minWidth:G="18%"}=e,{titleClass:W=void 0}=e,{valueClass:le=void 0}=e,{comparisonClass:$=void 0}=e,{link:Se=null}=e,{description:ie=void 0}=e,q=[];return n.$$set=d=>{"data"in d&&r(0,a=d.data),"value"in d&&r(6,s=d.value),"comparison"in d&&r(7,o=d.comparison),"comparisonDelta"in d&&r(1,u=d.comparisonDelta),"sparkline"in d&&r(8,f=d.sparkline),"sparklineType"in d&&r(9,S=d.sparklineType),"sparklineColor"in d&&r(26,c=d.sparklineColor),"sparklineValueFmt"in d&&r(10,R=d.sparklineValueFmt),"sparklineDateFmt"in d&&r(11,A=d.sparklineDateFmt),"sparklineYScale"in d&&r(2,O=d.sparklineYScale),"connectGroup"in d&&r(12,X=d.connectGroup),"fmt"in d&&r(13,B=d.fmt),"comparisonFmt"in d&&r(14,Y=d.comparisonFmt),"title"in d&&r(3,C=d.title),"comparisonTitle"in d&&r(4,N=d.comparisonTitle),"downIsGood"in d&&r(5,y=d.downIsGood),"neutralMin"in d&&r(15,b=d.neutralMin),"neutralMax"in d&&r(16,T=d.neutralMax),"maxWidth"in d&&r(17,re=d.maxWidth),"minWidth"in d&&r(18,G=d.minWidth),"titleClass"in d&&r(19,W=d.titleClass),"valueClass"in d&&r(20,le=d.valueClass),"comparisonClass"in d&&r(21,$=d.comparisonClass),"link"in d&&r(22,Se=d.link),"description"in d&&r(23,ie=d.description)},n.$$.update=()=>{if(n.$$.dirty&2&&r(1,u=u==="true"||u===!0),n.$$.dirty&67108864&&r(25,t=l(c)),n.$$.dirty&4&&r(2,O=O==="true"||O===!0),n.$$.dirty&32&&r(5,y=y==="true"||y===!0),n.$$.dirty&16777689)try{Array.isArray(a)||r(0,a=[a]),De(a,[s]);let d=St(a,"array"),z=d.find(ue=>ue.id===s);if(r(3,C=C??(z?z.title:null)),o!==null){De(a,[o]);let ue=d.find(fe=>fe.id===o);r(4,N=N??(ue?ue.title:null))}f!==null&&De(a,[f])}catch(d){if(r(24,q=[...q,d]),dt)throw q}},[a,u,O,C,N,y,s,o,f,S,R,A,X,B,Y,b,T,re,G,W,le,$,Se,ie,q,t,c]}let pr=class extends Ne{constructor(e){super(),ke(this,e,dr,Sr,be,{data:0,value:6,comparison:7,comparisonDelta:1,sparkline:8,sparklineType:9,sparklineColor:26,sparklineValueFmt:10,sparklineDateFmt:11,sparklineYScale:2,connectGroup:12,fmt:13,comparisonFmt:14,title:3,comparisonTitle:4,downIsGood:5,neutralMin:15,neutralMax:16,maxWidth:17,minWidth:18,titleClass:19,valueClass:20,comparisonClass:21,link:22,description:23})}};function Er(n){let e;const r=n[6].default,t=He(r,n,n[7],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&128)&&Be(t,r,l,l[7],e?We(r,l[7],a,null):Ge(l[7]),null)},i(l){e||(m(t,l),e=!0)},o(l){p(t,l),e=!1},d(l){t&&t.d(l)}}}function yr(n){let e,r;const t=[n[4],{data:ae.isQuery(n[9])?Array.from(n[9]):n[9]}];let l={$$slots:{default:[Er]},$$scope:{ctx:n}};for(let a=0;a<t.length;a+=1)l=pe(l,t[a]);return e=new pr({props:l}),{c(){I(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,s){v(e,a,s),r=!0},p(a,s){const o=s&528?Ye(t,[s&16&&Ve(a[4]),s&512&&{data:ae.isQuery(a[9])?Array.from(a[9]):a[9]}]):{};s&128&&(o.$$scope={dirty:s,ctx:a}),e.$set(o)},i(a){r||(m(e.$$.fragment,a),r=!0)},o(a){p(e.$$.fragment,a),r=!1},d(a){k(e,a)}}}function hr(n){let e,r,t,l;return r=new Mt({props:{error:n[9].error.message}}),{c(){e=w("div"),I(r.$$.fragment),this.h()},l(a){e=D(a,"DIV",{slot:!0,class:!0,style:!0});var s=x(e);M(r.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,"slot","error"),h(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),h(e,"style",t=`
				min-width: ${n[5].minWidth};
				max-width: ${n[5].maxWidth};
		`)},m(a,s){g(a,e,s),v(r,e,null),l=!0},p(a,s){const o={};s&512&&(o.error=a[9].error.message),r.$set(o),(!l||s&32&&t!==(t=`
				min-width: ${a[5].minWidth};
				max-width: ${a[5].maxWidth};
		`))&&h(e,"style",t)},i(a){l||(m(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){a&&_(e),k(r)}}}function gr(n){let e,r,t,l;return r=new je({props:{emptyMessage:n[2],emptySet:n[1],chartType:Tr,isInitial:n[3]}}),{c(){e=w("div"),I(r.$$.fragment),this.h()},l(a){e=D(a,"DIV",{slot:!0,class:!0,style:!0});var s=x(e);M(r.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,"slot","empty"),h(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),h(e,"style",t=`
				min-width: ${n[5].minWidth};
				max-width: ${n[5].maxWidth};
		`)},m(a,s){g(a,e,s),v(r,e,null),l=!0},p(a,s){const o={};s&4&&(o.emptyMessage=a[2]),s&2&&(o.emptySet=a[1]),s&8&&(o.isInitial=a[3]),r.$set(o),(!l||s&32&&t!==(t=`
				min-width: ${a[5].minWidth};
				max-width: ${a[5].maxWidth};
		`))&&h(e,"style",t)},i(a){l||(m(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){a&&_(e),k(r)}}}function Rr(n){let e,r,t=(n[5].title??" ")+"",l,a,s,o,u;return s=new Ue({props:{column:n[5].value,fmt:n[5].fmt,data:n[9]}}),{c(){e=w("div"),r=w("p"),l=Re(t),a=F(),I(s.$$.fragment),this.h()},l(f){e=D(f,"DIV",{class:!0,style:!0,slot:!0});var S=x(e);r=D(S,"P",{class:!0});var c=x(r);l=ge(c,t),c.forEach(_),a=U(S),M(s.$$.fragment,S),S.forEach(_),this.h()},h(){h(r,"class","text-sm"),h(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),h(e,"style",o=`
			min-width: ${n[5].minWidth};
			max-width: ${n[5].maxWidth};
		`),h(e,"slot","skeleton")},m(f,S){g(f,e,S),Z(e,r),Z(r,l),Z(e,a),v(s,e,null),u=!0},p(f,S){(!u||S&32)&&t!==(t=(f[5].title??" ")+"")&&Me(l,t);const c={};S&32&&(c.column=f[5].value),S&32&&(c.fmt=f[5].fmt),S&512&&(c.data=f[9]),s.$set(c),(!u||S&32&&o!==(o=`
			min-width: ${f[5].minWidth};
			max-width: ${f[5].maxWidth};
		`))&&h(e,"style",o)},i(f){u||(m(s.$$.fragment,f),u=!0)},o(f){p(s.$$.fragment,f),u=!1},d(f){f&&_(e),k(s)}}}function Ar(n){let e,r;return e=new qe({props:{data:n[0],$$slots:{skeleton:[Rr,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],empty:[gr],error:[hr,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],default:[yr,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,[l]){const a={};l&1&&(a.data=t[0]),l&702&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}let Tr="Big Value";function Or(n,e,r){let t,{$$slots:l={},$$scope:a}=e,{data:s}=e;const o=ae.isQuery(s)?s.hash:void 0;let u=(s==null?void 0:s.hash)===o,{emptySet:f=void 0}=e,{emptyMessage:S=void 0}=e;return n.$$set=c=>{r(5,e=pe(pe({},e),Oe(c))),"data"in c&&r(0,s=c.data),"emptySet"in c&&r(1,f=c.emptySet),"emptyMessage"in c&&r(2,S=c.emptyMessage),"$$scope"in c&&r(7,a=c.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&r(3,u=(s==null?void 0:s.hash)===o),r(4,t=Object.fromEntries(Object.entries(e).filter(([,c])=>c!==void 0)))},e=Oe(e),[s,f,S,u,t,e,l,a]}class Fe extends Ne{constructor(e){super(),ke(this,e,Or,Ar,be,{data:0,emptySet:1,emptyMessage:2})}}function Cr(n){let e,r=L.title+"",t;return{c(){e=w("h1"),t=Re(r),this.h()},l(l){e=D(l,"H1",{class:!0});var a=x(e);t=ge(a,r),a.forEach(_),this.h()},h(){h(e,"class","title")},m(l,a){g(l,e,a),Z(e,t)},p:me,d(l){l&&_(e)}}}function br(n){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:me,p:me,d:me}}function Nr(n){let e,r,t,l,a;return document.title=e=L.title,{c(){r=F(),t=w("meta"),l=F(),a=w("meta"),this.h()},l(s){r=U(s),t=D(s,"META",{property:!0,content:!0}),l=U(s),a=D(s,"META",{name:!0,content:!0}),this.h()},h(){var s,o;h(t,"property","og:title"),h(t,"content",((s=L.og)==null?void 0:s.title)??L.title),h(a,"name","twitter:title"),h(a,"content",((o=L.og)==null?void 0:o.title)??L.title)},m(s,o){g(s,r,o),g(s,t,o),g(s,l,o),g(s,a,o)},p(s,o){o&0&&e!==(e=L.title)&&(document.title=e)},d(s){s&&(_(r),_(t),_(l),_(a))}}}function kr(n){var a,s;let e,r,t=(L.description||((a=L.og)==null?void 0:a.description))&&vr(),l=((s=L.og)==null?void 0:s.image)&&Mr();return{c(){t&&t.c(),e=F(),l&&l.c(),r=ce()},l(o){t&&t.l(o),e=U(o),l&&l.l(o),r=ce()},m(o,u){t&&t.m(o,u),g(o,e,u),l&&l.m(o,u),g(o,r,u)},p(o,u){var f,S;(L.description||(f=L.og)!=null&&f.description)&&t.p(o,u),(S=L.og)!=null&&S.image&&l.p(o,u)},d(o){o&&(_(e),_(r)),t&&t.d(o),l&&l.d(o)}}}function vr(n){let e,r,t,l,a;return{c(){e=w("meta"),r=F(),t=w("meta"),l=F(),a=w("meta"),this.h()},l(s){e=D(s,"META",{name:!0,content:!0}),r=U(s),t=D(s,"META",{property:!0,content:!0}),l=U(s),a=D(s,"META",{name:!0,content:!0}),this.h()},h(){var s,o,u;h(e,"name","description"),h(e,"content",L.description??((s=L.og)==null?void 0:s.description)),h(t,"property","og:description"),h(t,"content",((o=L.og)==null?void 0:o.description)??L.description),h(a,"name","twitter:description"),h(a,"content",((u=L.og)==null?void 0:u.description)??L.description)},m(s,o){g(s,e,o),g(s,r,o),g(s,t,o),g(s,l,o),g(s,a,o)},p:me,d(s){s&&(_(e),_(r),_(t),_(l),_(a))}}}function Mr(n){let e,r,t;return{c(){e=w("meta"),r=F(),t=w("meta"),this.h()},l(l){e=D(l,"META",{property:!0,content:!0}),r=U(l),t=D(l,"META",{name:!0,content:!0}),this.h()},h(){var l,a;h(e,"property","og:image"),h(e,"content",Ce((l=L.og)==null?void 0:l.image)),h(t,"name","twitter:image"),h(t,"content",Ce((a=L.og)==null?void 0:a.image))},m(l,a){g(l,e,a),g(l,r,a),g(l,t,a)},p:me,d(l){l&&(_(e),_(r),_(t))}}}function it(n){let e,r;return e=new Ie({props:{queryID:"kpi_summary_yoy",queryResult:n[0]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l[0]&1&&(a.queryResult=t[0]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function ut(n){let e,r;return e=new Ie({props:{queryID:"monthly_sales_3y",queryResult:n[1]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l[0]&2&&(a.queryResult=t[1]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function ft(n){let e,r;return e=new Ie({props:{queryID:"major_category_share",queryResult:n[2]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l[0]&4&&(a.queryResult=t[2]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function _t(n){let e,r;return e=new Ie({props:{queryID:"store_concentration",queryResult:n[3]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l[0]&8&&(a.queryResult=t[3]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function mt(n){let e,r;return e=new Ie({props:{queryID:"prefecture_share",queryResult:n[4]}}),{c(){I(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){v(e,t,l),r=!0},p(t,l){const a={};l[0]&16&&(a.queryResult=t[4]),e.$set(a)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Ir(n){let e,r,t,l,a,s,o,u,f,S,c,R='<a href="#全社-kpi-2019-1-10-月-vs-2018-1-10-月">全社 KPI (2019 1-10 月 vs 2018 1-10 月)</a>',A,O,X,B,Y,C,N,y,b,T,re='<a href="#月別売上-3-年並列">月別売上 (3 年並列)</a>',G,W,le,$,Se='<a href="#大カテゴリ売上構成比">大カテゴリ売上構成比</a>',ie,q,d,z,ue='<a href="#店舗売上集中度-上位-5--その他">店舗売上集中度 (上位 5 + その他)</a>',fe,se,ne,K,Ee='<a href="#都道府県別売上構成比">都道府県別売上構成比</a>',ye,oe,he,H=typeof L<"u"&&L.title&&L.hide_title!==!0&&Cr();function we(i,E){return typeof L<"u"&&L.title?Nr:br}let ve=we()(n),de=typeof L=="object"&&kr(),V=n[0]&&it(n),j=n[1]&&ut(n),P=n[2]&&ft(n),J=n[3]&&_t(n),Q=n[4]&&mt(n);return O=new Fe({props:{data:n[0],value:"total_sales",fmt:"#,##0",title:"総売上",comparison:"total_sales_prev",comparisonTitle:"前年",comparisonFmt:"#,##0"}}),B=new Fe({props:{data:n[0],value:"transaction_count",fmt:"#,##0",title:"取引件数",comparison:"transaction_count_prev",comparisonTitle:"前年",comparisonFmt:"#,##0"}}),C=new Fe({props:{data:n[0],value:"unique_customers",fmt:"#,##0",title:"会員顧客数",comparison:"unique_customers_prev",comparisonTitle:"前年",comparisonFmt:"#,##0"}}),y=new Fe({props:{data:n[0],value:"avg_transaction",fmt:"#,##0",title:"平均客単価",comparison:"avg_transaction_prev",comparisonTitle:"前年",comparisonFmt:"#,##0"}}),W=new Bt({props:{data:n[1],x:"month",xType:"category",sort:"false",y:"total_sales",yFmt:"#,##0",series:"year",title:"月別 総売上",markers:"true"}}),q=new Le({props:{data:n[2],x:"category_major_name",y:"share_pct",yFmt:"0.0",title:"大カテゴリ別 売上構成比 (%)",swapXY:"true"}}),se=new Le({props:{data:n[3],x:"group_name",y:"share_pct",yFmt:"0.0",title:"店舗別 売上構成比 (%)",swapXY:"true"}}),oe=new Le({props:{data:n[4],x:"prefecture",y:"share_pct",yFmt:"0.0",title:"都道府県別 売上構成比 (%)",swapXY:"true"}}),{c(){H&&H.c(),e=F(),ve.c(),r=w("meta"),t=w("meta"),de&&de.c(),l=ce(),a=F(),V&&V.c(),s=F(),j&&j.c(),o=F(),P&&P.c(),u=F(),J&&J.c(),f=F(),Q&&Q.c(),S=F(),c=w("h2"),c.innerHTML=R,A=F(),I(O.$$.fragment),X=F(),I(B.$$.fragment),Y=F(),I(C.$$.fragment),N=F(),I(y.$$.fragment),b=F(),T=w("h2"),T.innerHTML=re,G=F(),I(W.$$.fragment),le=F(),$=w("h2"),$.innerHTML=Se,ie=F(),I(q.$$.fragment),d=F(),z=w("h2"),z.innerHTML=ue,fe=F(),I(se.$$.fragment),ne=F(),K=w("h2"),K.innerHTML=Ee,ye=F(),I(oe.$$.fragment),this.h()},l(i){H&&H.l(i),e=U(i);const E=yt("svelte-2igo1p",document.head);ve.l(E),r=D(E,"META",{name:!0,content:!0}),t=D(E,"META",{name:!0,content:!0}),de&&de.l(E),l=ce(),E.forEach(_),a=U(i),V&&V.l(i),s=U(i),j&&j.l(i),o=U(i),P&&P.l(i),u=U(i),J&&J.l(i),f=U(i),Q&&Q.l(i),S=U(i),c=D(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(c)!=="svelte-bosraz"&&(c.innerHTML=R),A=U(i),M(O.$$.fragment,i),X=U(i),M(B.$$.fragment,i),Y=U(i),M(C.$$.fragment,i),N=U(i),M(y.$$.fragment,i),b=U(i),T=D(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(T)!=="svelte-1okjhd2"&&(T.innerHTML=re),G=U(i),M(W.$$.fragment,i),le=U(i),$=D(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae($)!=="svelte-1we1isl"&&($.innerHTML=Se),ie=U(i),M(q.$$.fragment,i),d=U(i),z=D(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(z)!=="svelte-1bmsg2e"&&(z.innerHTML=ue),fe=U(i),M(se.$$.fragment,i),ne=U(i),K=D(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ae(K)!=="svelte-1owtw3w"&&(K.innerHTML=Ee),ye=U(i),M(oe.$$.fragment,i),this.h()},h(){h(r,"name","twitter:card"),h(r,"content","summary_large_image"),h(t,"name","twitter:site"),h(t,"content","@evidence_dev"),h(c,"class","markdown"),h(c,"id","全社-kpi-2019-1-10-月-vs-2018-1-10-月"),h(T,"class","markdown"),h(T,"id","月別売上-3-年並列"),h($,"class","markdown"),h($,"id","大カテゴリ売上構成比"),h(z,"class","markdown"),h(z,"id","店舗売上集中度-上位-5--その他"),h(K,"class","markdown"),h(K,"id","都道府県別売上構成比")},m(i,E){H&&H.m(i,E),g(i,e,E),ve.m(document.head,null),Z(document.head,r),Z(document.head,t),de&&de.m(document.head,null),Z(document.head,l),g(i,a,E),V&&V.m(i,E),g(i,s,E),j&&j.m(i,E),g(i,o,E),P&&P.m(i,E),g(i,u,E),J&&J.m(i,E),g(i,f,E),Q&&Q.m(i,E),g(i,S,E),g(i,c,E),g(i,A,E),v(O,i,E),g(i,X,E),v(B,i,E),g(i,Y,E),v(C,i,E),g(i,N,E),v(y,i,E),g(i,b,E),g(i,T,E),g(i,G,E),v(W,i,E),g(i,le,E),g(i,$,E),g(i,ie,E),v(q,i,E),g(i,d,E),g(i,z,E),g(i,fe,E),v(se,i,E),g(i,ne,E),g(i,K,E),g(i,ye,E),v(oe,i,E),he=!0},p(i,E){typeof L<"u"&&L.title&&L.hide_title!==!0&&H.p(i,E),ve.p(i,E),typeof L=="object"&&de.p(i,E),i[0]?V?(V.p(i,E),E[0]&1&&m(V,1)):(V=it(i),V.c(),m(V,1),V.m(s.parentNode,s)):V&&(ee(),p(V,1,1,()=>{V=null}),te()),i[1]?j?(j.p(i,E),E[0]&2&&m(j,1)):(j=ut(i),j.c(),m(j,1),j.m(o.parentNode,o)):j&&(ee(),p(j,1,1,()=>{j=null}),te()),i[2]?P?(P.p(i,E),E[0]&4&&m(P,1)):(P=ft(i),P.c(),m(P,1),P.m(u.parentNode,u)):P&&(ee(),p(P,1,1,()=>{P=null}),te()),i[3]?J?(J.p(i,E),E[0]&8&&m(J,1)):(J=_t(i),J.c(),m(J,1),J.m(f.parentNode,f)):J&&(ee(),p(J,1,1,()=>{J=null}),te()),i[4]?Q?(Q.p(i,E),E[0]&16&&m(Q,1)):(Q=mt(i),Q.c(),m(Q,1),Q.m(S.parentNode,S)):Q&&(ee(),p(Q,1,1,()=>{Q=null}),te());const Pe={};E[0]&1&&(Pe.data=i[0]),O.$set(Pe);const Je={};E[0]&1&&(Je.data=i[0]),B.$set(Je);const Qe={};E[0]&1&&(Qe.data=i[0]),C.$set(Qe);const Ze={};E[0]&1&&(Ze.data=i[0]),y.$set(Ze);const Xe={};E[0]&2&&(Xe.data=i[1]),W.$set(Xe);const ze={};E[0]&4&&(ze.data=i[2]),q.$set(ze);const Ke={};E[0]&8&&(Ke.data=i[3]),se.$set(Ke);const $e={};E[0]&16&&($e.data=i[4]),oe.$set($e)},i(i){he||(m(V),m(j),m(P),m(J),m(Q),m(O.$$.fragment,i),m(B.$$.fragment,i),m(C.$$.fragment,i),m(y.$$.fragment,i),m(W.$$.fragment,i),m(q.$$.fragment,i),m(se.$$.fragment,i),m(oe.$$.fragment,i),he=!0)},o(i){p(V),p(j),p(P),p(J),p(Q),p(O.$$.fragment,i),p(B.$$.fragment,i),p(C.$$.fragment,i),p(y.$$.fragment,i),p(W.$$.fragment,i),p(q.$$.fragment,i),p(se.$$.fragment,i),p(oe.$$.fragment,i),he=!1},d(i){i&&(_(e),_(a),_(s),_(o),_(u),_(f),_(S),_(c),_(A),_(X),_(Y),_(N),_(b),_(T),_(G),_(le),_($),_(ie),_(d),_(z),_(fe),_(ne),_(K),_(ye)),H&&H.d(i),ve.d(i),_(r),_(t),de&&de.d(i),_(l),V&&V.d(i),j&&j.d(i),P&&P.d(i),J&&J.d(i),Q&&Q.d(i),k(O,i),k(B,i),k(C,i),k(y,i),k(W,i),k(q,i),k(se,i),k(oe,i)}}}const L={title:"Retail Dashboard"};function Ur(n,e,r){let t,l;et(n,Ht,H=>r(27,t=H)),et(n,rt,H=>r(33,l=H));let{data:a}=e,{data:s={},customFormattingSettings:o,__db:u,inputs:f}=a;ht(rt,l="6666cd76f96956469e7be39d750cc7d9",l);let S=It(wt(f));gt(S.subscribe(H=>f=H)),Rt(Dt,{getCustomFormats:()=>o.customFormats||[]});const c=(H,we)=>Lt(u.query,H,{query_name:we});Ut(c),t.params,At(()=>!0);let R={initialData:void 0,initialError:void 0},A=_e`WITH base AS (
  SELECT
    CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    customer_id,
    amount
  FROM retail.receipt
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    customer_id,
    amount
  FROM base
),

filtered AS (
  SELECT *
  FROM with_ym
  WHERE month <= 10
),

yearly AS (
  SELECT
    year,
    SUM(amount) AS total_sales,
    COUNT(*) AS transaction_count,
    COUNT(DISTINCT customer_id) FILTER (
      WHERE customer_id <> 'ZZ000000000000'
    ) AS unique_customers,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_transaction
  FROM filtered
  GROUP BY year
),

cur AS (
  SELECT *
  FROM yearly
  WHERE year = 2019
),

prev AS (
  SELECT *
  FROM yearly
  WHERE year = 2018
)

SELECT
  cur.total_sales,
  prev.total_sales AS total_sales_prev,
  cur.transaction_count,
  prev.transaction_count AS transaction_count_prev,
  cur.unique_customers,
  prev.unique_customers AS unique_customers_prev,
  cur.avg_transaction,
  prev.avg_transaction AS avg_transaction_prev
FROM cur
CROSS JOIN prev`,O=`WITH base AS (
  SELECT
    CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    customer_id,
    amount
  FROM retail.receipt
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    customer_id,
    amount
  FROM base
),

filtered AS (
  SELECT *
  FROM with_ym
  WHERE month <= 10
),

yearly AS (
  SELECT
    year,
    SUM(amount) AS total_sales,
    COUNT(*) AS transaction_count,
    COUNT(DISTINCT customer_id) FILTER (
      WHERE customer_id <> 'ZZ000000000000'
    ) AS unique_customers,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_transaction
  FROM filtered
  GROUP BY year
),

cur AS (
  SELECT *
  FROM yearly
  WHERE year = 2019
),

prev AS (
  SELECT *
  FROM yearly
  WHERE year = 2018
)

SELECT
  cur.total_sales,
  prev.total_sales AS total_sales_prev,
  cur.transaction_count,
  prev.transaction_count AS transaction_count_prev,
  cur.unique_customers,
  prev.unique_customers AS unique_customers_prev,
  cur.avg_transaction,
  prev.avg_transaction AS avg_transaction_prev
FROM cur
CROSS JOIN prev`;s.kpi_summary_yoy_data&&(s.kpi_summary_yoy_data instanceof Error?R.initialError=s.kpi_summary_yoy_data:R.initialData=s.kpi_summary_yoy_data,s.kpi_summary_yoy_columns&&(R.knownColumns=s.kpi_summary_yoy_columns));let X,B=!1;const Y=ae.createReactive({callback:H=>{r(0,X=H)},execFn:c},{id:"kpi_summary_yoy",...R});Y(O,{noResolve:A,...R}),globalThis[Symbol.for("kpi_summary_yoy")]={get value(){return X}};let C={initialData:void 0,initialError:void 0},N=_e`SELECT
  CAST(CAST(sales_ymd AS INTEGER) / 100 % 100 AS INTEGER) AS month,
  CAST(CAST(CAST(sales_ymd AS INTEGER) / 10000 AS INTEGER) AS VARCHAR) AS year,
  SUM(amount) AS total_sales
FROM retail.receipt
GROUP BY month, year
ORDER BY year, month`,y=`SELECT
  CAST(CAST(sales_ymd AS INTEGER) / 100 % 100 AS INTEGER) AS month,
  CAST(CAST(CAST(sales_ymd AS INTEGER) / 10000 AS INTEGER) AS VARCHAR) AS year,
  SUM(amount) AS total_sales
FROM retail.receipt
GROUP BY month, year
ORDER BY year, month`;s.monthly_sales_3y_data&&(s.monthly_sales_3y_data instanceof Error?C.initialError=s.monthly_sales_3y_data:C.initialData=s.monthly_sales_3y_data,s.monthly_sales_3y_columns&&(C.knownColumns=s.monthly_sales_3y_columns));let b,T=!1;const re=ae.createReactive({callback:H=>{r(1,b=H)},execFn:c},{id:"monthly_sales_3y",...C});re(y,{noResolve:N,...C}),globalThis[Symbol.for("monthly_sales_3y")]={get value(){return b}};let G={initialData:void 0,initialError:void 0},W=_e`WITH base AS (
  SELECT
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name
)

SELECT
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`,le=`WITH base AS (
  SELECT
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name
)

SELECT
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`;s.major_category_share_data&&(s.major_category_share_data instanceof Error?G.initialError=s.major_category_share_data:G.initialData=s.major_category_share_data,s.major_category_share_columns&&(G.knownColumns=s.major_category_share_columns));let $,Se=!1;const ie=ae.createReactive({callback:H=>{r(2,$=H)},execFn:c},{id:"major_category_share",...G});ie(le,{noResolve:W,...G}),globalThis[Symbol.for("major_category_share")]={get value(){return $}};let q={initialData:void 0,initialError:void 0},d=_e`WITH ranked AS (
  SELECT
    s.store_name,
    SUM(r.amount) AS total_sales,
    ROW_NUMBER() OVER (ORDER BY SUM(r.amount) DESC) AS rn
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name
),

grouped AS (
  SELECT
    CASE WHEN rn <= 5 THEN store_name ELSE 'その他' END AS group_name,
    CASE WHEN rn <= 5 THEN rn ELSE 999 END AS sort_order,
    SUM(total_sales) AS total_sales
  FROM ranked
  GROUP BY group_name, sort_order
)

SELECT
  group_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM grouped
ORDER BY MIN(sort_order) OVER (PARTITION BY group_name)`,z=`WITH ranked AS (
  SELECT
    s.store_name,
    SUM(r.amount) AS total_sales,
    ROW_NUMBER() OVER (ORDER BY SUM(r.amount) DESC) AS rn
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name
),

grouped AS (
  SELECT
    CASE WHEN rn <= 5 THEN store_name ELSE 'その他' END AS group_name,
    CASE WHEN rn <= 5 THEN rn ELSE 999 END AS sort_order,
    SUM(total_sales) AS total_sales
  FROM ranked
  GROUP BY group_name, sort_order
)

SELECT
  group_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM grouped
ORDER BY MIN(sort_order) OVER (PARTITION BY group_name)`;s.store_concentration_data&&(s.store_concentration_data instanceof Error?q.initialError=s.store_concentration_data:q.initialData=s.store_concentration_data,s.store_concentration_columns&&(q.knownColumns=s.store_concentration_columns));let ue,fe=!1;const se=ae.createReactive({callback:H=>{r(3,ue=H)},execFn:c},{id:"store_concentration",...q});se(z,{noResolve:d,...q}),globalThis[Symbol.for("store_concentration")]={get value(){return ue}};let ne={initialData:void 0,initialError:void 0},K=_e`WITH base AS (
  SELECT
    s.prefecture,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.prefecture
)

SELECT
  prefecture,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`,Ee=`WITH base AS (
  SELECT
    s.prefecture,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.prefecture
)

SELECT
  prefecture,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`;s.prefecture_share_data&&(s.prefecture_share_data instanceof Error?ne.initialError=s.prefecture_share_data:ne.initialData=s.prefecture_share_data,s.prefecture_share_columns&&(ne.knownColumns=s.prefecture_share_columns));let ye,oe=!1;const he=ae.createReactive({callback:H=>{r(4,ye=H)},execFn:c},{id:"prefecture_share",...ne});return he(Ee,{noResolve:K,...ne}),globalThis[Symbol.for("prefecture_share")]={get value(){return ye}},n.$$set=H=>{"data"in H&&r(5,a=H.data)},n.$$.update=()=>{n.$$.dirty[0]&32&&r(6,{data:s={},customFormattingSettings:o,__db:u}=a,s),n.$$.dirty[0]&64&&Ft.set(Object.keys(s).length>0),n.$$.dirty[0]&134217728&&t.params,n.$$.dirty[0]&1920&&(A||!B?A||(Y(O,{noResolve:A,...R}),r(10,B=!0)):Y(O,{noResolve:A})),n.$$.dirty[0]&30720&&(N||!T?N||(re(y,{noResolve:N,...C}),r(14,T=!0)):re(y,{noResolve:N})),n.$$.dirty[0]&491520&&(W||!Se?W||(ie(le,{noResolve:W,...G}),r(18,Se=!0)):ie(le,{noResolve:W})),n.$$.dirty[0]&7864320&&(d||!fe?d||(se(z,{noResolve:d,...q}),r(22,fe=!0)):se(z,{noResolve:d})),n.$$.dirty[0]&125829120&&(K||!oe?K||(he(Ee,{noResolve:K,...ne}),r(26,oe=!0)):he(Ee,{noResolve:K}))},r(8,A=_e`WITH base AS (
  SELECT
    CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    customer_id,
    amount
  FROM retail.receipt
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    customer_id,
    amount
  FROM base
),

filtered AS (
  SELECT *
  FROM with_ym
  WHERE month <= 10
),

yearly AS (
  SELECT
    year,
    SUM(amount) AS total_sales,
    COUNT(*) AS transaction_count,
    COUNT(DISTINCT customer_id) FILTER (
      WHERE customer_id <> 'ZZ000000000000'
    ) AS unique_customers,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_transaction
  FROM filtered
  GROUP BY year
),

cur AS (
  SELECT *
  FROM yearly
  WHERE year = 2019
),

prev AS (
  SELECT *
  FROM yearly
  WHERE year = 2018
)

SELECT
  cur.total_sales,
  prev.total_sales AS total_sales_prev,
  cur.transaction_count,
  prev.transaction_count AS transaction_count_prev,
  cur.unique_customers,
  prev.unique_customers AS unique_customers_prev,
  cur.avg_transaction,
  prev.avg_transaction AS avg_transaction_prev
FROM cur
CROSS JOIN prev`),r(9,O=`WITH base AS (
  SELECT
    CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    customer_id,
    amount
  FROM retail.receipt
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    customer_id,
    amount
  FROM base
),

filtered AS (
  SELECT *
  FROM with_ym
  WHERE month <= 10
),

yearly AS (
  SELECT
    year,
    SUM(amount) AS total_sales,
    COUNT(*) AS transaction_count,
    COUNT(DISTINCT customer_id) FILTER (
      WHERE customer_id <> 'ZZ000000000000'
    ) AS unique_customers,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_transaction
  FROM filtered
  GROUP BY year
),

cur AS (
  SELECT *
  FROM yearly
  WHERE year = 2019
),

prev AS (
  SELECT *
  FROM yearly
  WHERE year = 2018
)

SELECT
  cur.total_sales,
  prev.total_sales AS total_sales_prev,
  cur.transaction_count,
  prev.transaction_count AS transaction_count_prev,
  cur.unique_customers,
  prev.unique_customers AS unique_customers_prev,
  cur.avg_transaction,
  prev.avg_transaction AS avg_transaction_prev
FROM cur
CROSS JOIN prev`),r(12,N=_e`SELECT
  CAST(CAST(sales_ymd AS INTEGER) / 100 % 100 AS INTEGER) AS month,
  CAST(CAST(CAST(sales_ymd AS INTEGER) / 10000 AS INTEGER) AS VARCHAR) AS year,
  SUM(amount) AS total_sales
FROM retail.receipt
GROUP BY month, year
ORDER BY year, month`),r(13,y=`SELECT
  CAST(CAST(sales_ymd AS INTEGER) / 100 % 100 AS INTEGER) AS month,
  CAST(CAST(CAST(sales_ymd AS INTEGER) / 10000 AS INTEGER) AS VARCHAR) AS year,
  SUM(amount) AS total_sales
FROM retail.receipt
GROUP BY month, year
ORDER BY year, month`),r(16,W=_e`WITH base AS (
  SELECT
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name
)

SELECT
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`),r(17,le=`WITH base AS (
  SELECT
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name
)

SELECT
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`),r(20,d=_e`WITH ranked AS (
  SELECT
    s.store_name,
    SUM(r.amount) AS total_sales,
    ROW_NUMBER() OVER (ORDER BY SUM(r.amount) DESC) AS rn
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name
),

grouped AS (
  SELECT
    CASE WHEN rn <= 5 THEN store_name ELSE 'その他' END AS group_name,
    CASE WHEN rn <= 5 THEN rn ELSE 999 END AS sort_order,
    SUM(total_sales) AS total_sales
  FROM ranked
  GROUP BY group_name, sort_order
)

SELECT
  group_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM grouped
ORDER BY MIN(sort_order) OVER (PARTITION BY group_name)`),r(21,z=`WITH ranked AS (
  SELECT
    s.store_name,
    SUM(r.amount) AS total_sales,
    ROW_NUMBER() OVER (ORDER BY SUM(r.amount) DESC) AS rn
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name
),

grouped AS (
  SELECT
    CASE WHEN rn <= 5 THEN store_name ELSE 'その他' END AS group_name,
    CASE WHEN rn <= 5 THEN rn ELSE 999 END AS sort_order,
    SUM(total_sales) AS total_sales
  FROM ranked
  GROUP BY group_name, sort_order
)

SELECT
  group_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM grouped
ORDER BY MIN(sort_order) OVER (PARTITION BY group_name)`),r(24,K=_e`WITH base AS (
  SELECT
    s.prefecture,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.prefecture
)

SELECT
  prefecture,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`),r(25,Ee=`WITH base AS (
  SELECT
    s.prefecture,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.prefecture
)

SELECT
  prefecture,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC`),[X,b,$,ue,ye,a,s,R,A,O,B,C,N,y,T,G,W,le,Se,q,d,z,fe,ne,K,Ee,oe,t]}class jr extends Ne{constructor(e){super(),ke(this,e,Ur,Ir,be,{data:5},null,[-1,-1])}}export{jr as component};
