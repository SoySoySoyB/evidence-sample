import{s as oe,d as i,i as E,a as x,b as N,c as g,h as se,e as C,f as G,g as W,j as h,k as b,l as X,m as _e,o as ce,n as ne,p as le,q as k,r as me,t as ie,u as pe}from"../chunks/scheduler.DbLZmw5B.js";import{S as fe,i as ue,d as L,t as w,a as y,c as Q,m as B,b as Y,e as H,g as K}from"../chunks/index.DZMbDxCq.js";import{D as Ee,e as de,s as Ne,Q as z,p as Se,b as P,a as Z,r as ee,C as Oe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C88-DVgh.js";import{w as Re}from"../chunks/entry.CKB6EmEz.js";import{h as v,p as ge}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as he}from"../chunks/stores.ChOsbD0K.js";import{Q as re}from"../chunks/getCompletedData.BOW9Mk2J.js";import{H as ye}from"../chunks/Heatmap.CnzZ-K3D.js";function Ae(f){let t,s=p.title+"",e;return{c(){t=b("h1"),e=pe(s),this.h()},l(r){t=C(r,"H1",{class:!0});var _=me(t);e=ie(_,s),_.forEach(i),this.h()},h(){N(t,"class","title")},m(r,_){E(r,t,_),x(t,e)},p:k,d(r){r&&i(t)}}}function Ie(f){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:k,p:k,d:k}}function Te(f){let t,s,e,r,_;return document.title=t=p.title,{c(){s=h(),e=b("meta"),r=h(),_=b("meta"),this.h()},l(a){s=g(a),e=C(a,"META",{property:!0,content:!0}),r=g(a),_=C(a,"META",{name:!0,content:!0}),this.h()},h(){var a,c;N(e,"property","og:title"),N(e,"content",((a=p.og)==null?void 0:a.title)??p.title),N(_,"name","twitter:title"),N(_,"content",((c=p.og)==null?void 0:c.title)??p.title)},m(a,c){E(a,s,c),E(a,e,c),E(a,r,c),E(a,_,c)},p(a,c){c&0&&t!==(t=p.title)&&(document.title=t)},d(a){a&&(i(s),i(e),i(r),i(_))}}}function Me(f){var _,a;let t,s,e=(p.description||((_=p.og)==null?void 0:_.description))&&we(),r=((a=p.og)==null?void 0:a.image)&&Ce();return{c(){e&&e.c(),t=h(),r&&r.c(),s=G()},l(c){e&&e.l(c),t=g(c),r&&r.l(c),s=G()},m(c,u){e&&e.m(c,u),E(c,t,u),r&&r.m(c,u),E(c,s,u)},p(c,u){var n,S;(p.description||(n=p.og)!=null&&n.description)&&e.p(c,u),(S=p.og)!=null&&S.image&&r.p(c,u)},d(c){c&&(i(t),i(s)),e&&e.d(c),r&&r.d(c)}}}function we(f){let t,s,e,r,_;return{c(){t=b("meta"),s=h(),e=b("meta"),r=h(),_=b("meta"),this.h()},l(a){t=C(a,"META",{name:!0,content:!0}),s=g(a),e=C(a,"META",{property:!0,content:!0}),r=g(a),_=C(a,"META",{name:!0,content:!0}),this.h()},h(){var a,c,u;N(t,"name","description"),N(t,"content",p.description??((a=p.og)==null?void 0:a.description)),N(e,"property","og:description"),N(e,"content",((c=p.og)==null?void 0:c.description)??p.description),N(_,"name","twitter:description"),N(_,"content",((u=p.og)==null?void 0:u.description)??p.description)},m(a,c){E(a,t,c),E(a,s,c),E(a,e,c),E(a,r,c),E(a,_,c)},p:k,d(a){a&&(i(t),i(s),i(e),i(r),i(_))}}}function Ce(f){let t,s,e;return{c(){t=b("meta"),s=h(),e=b("meta"),this.h()},l(r){t=C(r,"META",{property:!0,content:!0}),s=g(r),e=C(r,"META",{name:!0,content:!0}),this.h()},h(){var r,_;N(t,"property","og:image"),N(t,"content",Z((r=p.og)==null?void 0:r.image)),N(e,"name","twitter:image"),N(e,"content",Z((_=p.og)==null?void 0:_.image))},m(r,_){E(r,t,_),E(r,s,_),E(r,e,_)},p:k,d(r){r&&(i(t),i(s),i(e))}}}function te(f){let t,s;return t=new re({props:{queryID:"store_x_category",queryResult:f[0]}}),{c(){H(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,r){B(t,e,r),s=!0},p(e,r){const _={};r&1&&(_.queryResult=e[0]),t.$set(_)},i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){L(t,e)}}}function ae(f){let t,s;return t=new re({props:{queryID:"category_dispersion",queryResult:f[1]}}),{c(){H(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,r){B(t,e,r),s=!0},p(e,r){const _={};r&2&&(_.queryResult=e[1]),t.$set(_)},i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){L(t,e)}}}function be(f){let t,s,e,r,_,a,c,u;return t=new P({props:{id:"category_major_name",title:"大カテゴリ"}}),e=new P({props:{id:"max_share",title:"最大店舗 (%)",fmt:"0.0"}}),_=new P({props:{id:"min_share",title:"最小店舗 (%)",fmt:"0.0"}}),c=new P({props:{id:"range_pct",title:"差 (pt)",fmt:"0.0",contentType:"bar"}}),{c(){H(t.$$.fragment),s=h(),H(e.$$.fragment),r=h(),H(_.$$.fragment),a=h(),H(c.$$.fragment)},l(n){Y(t.$$.fragment,n),s=g(n),Y(e.$$.fragment,n),r=g(n),Y(_.$$.fragment,n),a=g(n),Y(c.$$.fragment,n)},m(n,S){B(t,n,S),E(n,s,S),B(e,n,S),E(n,r,S),B(_,n,S),E(n,a,S),B(c,n,S),u=!0},p:k,i(n){u||(y(t.$$.fragment,n),y(e.$$.fragment,n),y(_.$$.fragment,n),y(c.$$.fragment,n),u=!0)},o(n){w(t.$$.fragment,n),w(e.$$.fragment,n),w(_.$$.fragment,n),w(c.$$.fragment,n),u=!1},d(n){n&&(i(s),i(r),i(a)),L(t,n),L(e,n),L(_,n),L(c,n)}}}function Ue(f){let t,s,e,r,_,a,c,u,n='<a href="#店舗--大カテゴリ-構成比ヒートマップ-惣菜構成比降順">店舗 × 大カテゴリ 構成比ヒートマップ (惣菜構成比降順)</a>',S,I,T,O,D='<a href="#カテゴリミックスのばらつき-店舗間-最大---最小">カテゴリミックスのばらつき (店舗間 最大 - 最小)</a>',$,M,F,R=typeof p<"u"&&p.title&&p.hide_title!==!0&&Ae();function U(o,m){return typeof p<"u"&&p.title?Te:Ie}let j=U()(f),A=typeof p=="object"&&Me(),d=f[0]&&te(f),l=f[1]&&ae(f);return I=new ye({props:{data:f[0],x:"category_major_name",y:"store_name",value:"share_pct",valueFmt:"0.0"}}),M=new Ee({props:{data:f[1],rows:"10",sortable:"true",$$slots:{default:[be]},$$scope:{ctx:f}}}),{c(){R&&R.c(),t=h(),j.c(),s=b("meta"),e=b("meta"),A&&A.c(),r=G(),_=h(),d&&d.c(),a=h(),l&&l.c(),c=h(),u=b("h2"),u.innerHTML=n,S=h(),H(I.$$.fragment),T=h(),O=b("h2"),O.innerHTML=D,$=h(),H(M.$$.fragment),this.h()},l(o){R&&R.l(o),t=g(o);const m=se("svelte-2igo1p",document.head);j.l(m),s=C(m,"META",{name:!0,content:!0}),e=C(m,"META",{name:!0,content:!0}),A&&A.l(m),r=G(),m.forEach(i),_=g(o),d&&d.l(o),a=g(o),l&&l.l(o),c=g(o),u=C(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),W(u)!=="svelte-1hn4qdg"&&(u.innerHTML=n),S=g(o),Y(I.$$.fragment,o),T=g(o),O=C(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),W(O)!=="svelte-14emues"&&(O.innerHTML=D),$=g(o),Y(M.$$.fragment,o),this.h()},h(){N(s,"name","twitter:card"),N(s,"content","summary_large_image"),N(e,"name","twitter:site"),N(e,"content","@evidence_dev"),N(u,"class","markdown"),N(u,"id","店舗--大カテゴリ-構成比ヒートマップ-惣菜構成比降順"),N(O,"class","markdown"),N(O,"id","カテゴリミックスのばらつき-店舗間-最大---最小")},m(o,m){R&&R.m(o,m),E(o,t,m),j.m(document.head,null),x(document.head,s),x(document.head,e),A&&A.m(document.head,null),x(document.head,r),E(o,_,m),d&&d.m(o,m),E(o,a,m),l&&l.m(o,m),E(o,c,m),E(o,u,m),E(o,S,m),B(I,o,m),E(o,T,m),E(o,O,m),E(o,$,m),B(M,o,m),F=!0},p(o,[m]){typeof p<"u"&&p.title&&p.hide_title!==!0&&R.p(o,m),j.p(o,m),typeof p=="object"&&A.p(o,m),o[0]?d?(d.p(o,m),m&1&&y(d,1)):(d=te(o),d.c(),y(d,1),d.m(a.parentNode,a)):d&&(K(),w(d,1,1,()=>{d=null}),Q()),o[1]?l?(l.p(o,m),m&2&&y(l,1)):(l=ae(o),l.c(),y(l,1),l.m(c.parentNode,c)):l&&(K(),w(l,1,1,()=>{l=null}),Q());const V={};m&1&&(V.data=o[0]),I.$set(V);const q={};m&2&&(q.data=o[1]),m&16777216&&(q.$$scope={dirty:m,ctx:o}),M.$set(q)},i(o){F||(y(d),y(l),y(I.$$.fragment,o),y(M.$$.fragment,o),F=!0)},o(o){w(d),w(l),w(I.$$.fragment,o),w(M.$$.fragment,o),F=!1},d(o){o&&(i(t),i(_),i(a),i(c),i(u),i(S),i(T),i(O),i($)),R&&R.d(o),j.d(o),i(s),i(e),A&&A.d(o),i(r),d&&d.d(o),l&&l.d(o),L(I,o),L(M,o)}}}const p={title:"カテゴリミックス"};function je(f,t,s){let e,r;X(f,he,l=>s(12,e=l)),X(f,ee,l=>s(18,r=l));let{data:_}=t,{data:a={},customFormattingSettings:c,__db:u,inputs:n}=_;_e(ee,r="ce6c29bd1a2010d1249727f7aa50e714",r);let S=de(Re(n));ce(S.subscribe(l=>n=l)),ne(Oe,{getCustomFormats:()=>c.customFormats||[]});const I=(l,o)=>ge(u.query,l,{query_name:o});Ne(I),e.params,le(()=>!0);let T={initialData:void 0,initialError:void 0},O=v`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
),

food_share AS (
  SELECT
    store_name,
    SUM(CASE WHEN category_major_name = '惣菜' THEN share_pct ELSE 0 END)
      AS food_share_pct
  FROM with_share
  GROUP BY store_name
)

SELECT
  ws.store_name,
  ws.category_major_name,
  ws.share_pct,
  DENSE_RANK() OVER (ORDER BY fs.food_share_pct DESC) AS sort_order
FROM with_share ws
INNER JOIN food_share fs ON ws.store_name = fs.store_name
ORDER BY sort_order ASC, ws.category_major_name ASC`,D=`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
),

food_share AS (
  SELECT
    store_name,
    SUM(CASE WHEN category_major_name = '惣菜' THEN share_pct ELSE 0 END)
      AS food_share_pct
  FROM with_share
  GROUP BY store_name
)

SELECT
  ws.store_name,
  ws.category_major_name,
  ws.share_pct,
  DENSE_RANK() OVER (ORDER BY fs.food_share_pct DESC) AS sort_order
FROM with_share ws
INNER JOIN food_share fs ON ws.store_name = fs.store_name
ORDER BY sort_order ASC, ws.category_major_name ASC`;a.store_x_category_data&&(a.store_x_category_data instanceof Error?T.initialError=a.store_x_category_data:T.initialData=a.store_x_category_data,a.store_x_category_columns&&(T.knownColumns=a.store_x_category_columns));let $,M=!1;const F=z.createReactive({callback:l=>{s(0,$=l)},execFn:I},{id:"store_x_category",...T});F(D,{noResolve:O,...T}),globalThis[Symbol.for("store_x_category")]={get value(){return $}};let R={initialData:void 0,initialError:void 0},U=v`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
)

SELECT
  category_major_name,
  ROUND(MAX(share_pct), 1) AS max_share,
  ROUND(MIN(share_pct), 1) AS min_share,
  ROUND(MAX(share_pct) - MIN(share_pct), 1) AS range_pct
FROM with_share
GROUP BY category_major_name
ORDER BY range_pct DESC`,J=`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
)

SELECT
  category_major_name,
  ROUND(MAX(share_pct), 1) AS max_share,
  ROUND(MIN(share_pct), 1) AS min_share,
  ROUND(MAX(share_pct) - MIN(share_pct), 1) AS range_pct
FROM with_share
GROUP BY category_major_name
ORDER BY range_pct DESC`;a.category_dispersion_data&&(a.category_dispersion_data instanceof Error?R.initialError=a.category_dispersion_data:R.initialData=a.category_dispersion_data,a.category_dispersion_columns&&(R.knownColumns=a.category_dispersion_columns));let j,A=!1;const d=z.createReactive({callback:l=>{s(1,j=l)},execFn:I},{id:"category_dispersion",...R});return d(J,{noResolve:U,...R}),globalThis[Symbol.for("category_dispersion")]={get value(){return j}},f.$$set=l=>{"data"in l&&s(2,_=l.data)},f.$$.update=()=>{f.$$.dirty&4&&s(3,{data:a={},customFormattingSettings:c,__db:u}=_,a),f.$$.dirty&8&&Se.set(Object.keys(a).length>0),f.$$.dirty&4096&&e.params,f.$$.dirty&240&&(O||!M?O||(F(D,{noResolve:O,...T}),s(7,M=!0)):F(D,{noResolve:O})),f.$$.dirty&3840&&(U||!A?U||(d(J,{noResolve:U,...R}),s(11,A=!0)):d(J,{noResolve:U}))},s(5,O=v`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
),

food_share AS (
  SELECT
    store_name,
    SUM(CASE WHEN category_major_name = '惣菜' THEN share_pct ELSE 0 END)
      AS food_share_pct
  FROM with_share
  GROUP BY store_name
)

SELECT
  ws.store_name,
  ws.category_major_name,
  ws.share_pct,
  DENSE_RANK() OVER (ORDER BY fs.food_share_pct DESC) AS sort_order
FROM with_share ws
INNER JOIN food_share fs ON ws.store_name = fs.store_name
ORDER BY sort_order ASC, ws.category_major_name ASC`),s(6,D=`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
),

food_share AS (
  SELECT
    store_name,
    SUM(CASE WHEN category_major_name = '惣菜' THEN share_pct ELSE 0 END)
      AS food_share_pct
  FROM with_share
  GROUP BY store_name
)

SELECT
  ws.store_name,
  ws.category_major_name,
  ws.share_pct,
  DENSE_RANK() OVER (ORDER BY fs.food_share_pct DESC) AS sort_order
FROM with_share ws
INNER JOIN food_share fs ON ws.store_name = fs.store_name
ORDER BY sort_order ASC, ws.category_major_name ASC`),s(9,U=v`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
)

SELECT
  category_major_name,
  ROUND(MAX(share_pct), 1) AS max_share,
  ROUND(MIN(share_pct), 1) AS min_share,
  ROUND(MAX(share_pct) - MIN(share_pct), 1) AS range_pct
FROM with_share
GROUP BY category_major_name
ORDER BY range_pct DESC`),s(10,J=`WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
)

SELECT
  category_major_name,
  ROUND(MAX(share_pct), 1) AS max_share,
  ROUND(MIN(share_pct), 1) AS min_share,
  ROUND(MAX(share_pct) - MIN(share_pct), 1) AS range_pct
FROM with_share
GROUP BY category_major_name
ORDER BY range_pct DESC`),[$,j,_,a,T,O,D,M,R,U,J,A,e]}class Je extends fe{constructor(t){super(),ue(this,t,je,Ue,oe,{data:2})}}export{Je as component};
