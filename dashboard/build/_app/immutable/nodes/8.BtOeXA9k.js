import{s as ae,d as n,i as d,a as v,b as g,c as O,h as ce,e as H,f as G,g as Z,j as T,k as C,l as q,m as oe,o as _e,n as ie,p as me,q as B,r as le,t as ne,u as Ee}from"../chunks/scheduler.DbLZmw5B.js";import{S as ue,i as de,d as P,t as h,a as I,c as $,m as J,b as j,e as w,g as Q}from"../chunks/index.DZMbDxCq.js";import{e as Ne,s as ge,Q as X,p as Se,a as K,r as z,C as pe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C88-DVgh.js";import{w as Re}from"../chunks/entry.CKB6EmEz.js";import{h as Y,p as Oe}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Te}from"../chunks/stores.ChOsbD0K.js";import{Q as re}from"../chunks/getCompletedData.BOW9Mk2J.js";import{B as ee}from"../chunks/BarChart.KTqw9ki5.js";function fe(E){let t,c=l.title+"",e;return{c(){t=C("h1"),e=Ee(c),this.h()},l(a){t=H(a,"H1",{class:!0});var o=le(t);e=ne(o,c),o.forEach(n),this.h()},h(){g(t,"class","title")},m(a,o){d(a,t,o),v(t,e)},p:B,d(a){a&&n(t)}}}function ye(E){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:B,p:B,d:B}}function Ae(E){let t,c,e,a,o;return document.title=t=l.title,{c(){c=T(),e=C("meta"),a=T(),o=C("meta"),this.h()},l(s){c=O(s),e=H(s,"META",{property:!0,content:!0}),a=O(s),o=H(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_;g(e,"property","og:title"),g(e,"content",((s=l.og)==null?void 0:s.title)??l.title),g(o,"name","twitter:title"),g(o,"content",((_=l.og)==null?void 0:_.title)??l.title)},m(s,_){d(s,c,_),d(s,e,_),d(s,a,_),d(s,o,_)},p(s,_){_&0&&t!==(t=l.title)&&(document.title=t)},d(s){s&&(n(c),n(e),n(a),n(o))}}}function He(E){var o,s;let t,c,e=(l.description||((o=l.og)==null?void 0:o.description))&&Ce(),a=((s=l.og)==null?void 0:s.image)&&Ie();return{c(){e&&e.c(),t=T(),a&&a.c(),c=G()},l(_){e&&e.l(_),t=O(_),a&&a.l(_),c=G()},m(_,N){e&&e.m(_,N),d(_,t,N),a&&a.m(_,N),d(_,c,N)},p(_,N){var W,M;(l.description||(W=l.og)!=null&&W.description)&&e.p(_,N),(M=l.og)!=null&&M.image&&a.p(_,N)},d(_){_&&(n(t),n(c)),e&&e.d(_),a&&a.d(_)}}}function Ce(E){let t,c,e,a,o;return{c(){t=C("meta"),c=T(),e=C("meta"),a=T(),o=C("meta"),this.h()},l(s){t=H(s,"META",{name:!0,content:!0}),c=O(s),e=H(s,"META",{property:!0,content:!0}),a=O(s),o=H(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_,N;g(t,"name","description"),g(t,"content",l.description??((s=l.og)==null?void 0:s.description)),g(e,"property","og:description"),g(e,"content",((_=l.og)==null?void 0:_.description)??l.description),g(o,"name","twitter:description"),g(o,"content",((N=l.og)==null?void 0:N.description)??l.description)},m(s,_){d(s,t,_),d(s,c,_),d(s,e,_),d(s,a,_),d(s,o,_)},p:B,d(s){s&&(n(t),n(c),n(e),n(a),n(o))}}}function Ie(E){let t,c,e;return{c(){t=C("meta"),c=T(),e=C("meta"),this.h()},l(a){t=H(a,"META",{property:!0,content:!0}),c=O(a),e=H(a,"META",{name:!0,content:!0}),this.h()},h(){var a,o;g(t,"property","og:image"),g(t,"content",K((a=l.og)==null?void 0:a.image)),g(e,"name","twitter:image"),g(e,"content",K((o=l.og)==null?void 0:o.image))},m(a,o){d(a,t,o),d(a,c,o),d(a,e,o)},p:B,d(a){a&&(n(t),n(c),n(e))}}}function te(E){let t,c;return t=new re({props:{queryID:"segment_category_mix",queryResult:E[0]}}),{c(){w(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,a){J(t,e,a),c=!0},p(e,a){const o={};a&1&&(o.queryResult=e[0]),t.$set(o)},i(e){c||(I(t.$$.fragment,e),c=!0)},o(e){h(t.$$.fragment,e),c=!1},d(e){P(t,e)}}}function se(E){let t,c;return t=new re({props:{queryID:"segment_category_count",queryResult:E[1]}}),{c(){w(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,a){J(t,e,a),c=!0},p(e,a){const o={};a&2&&(o.queryResult=e[1]),t.$set(o)},i(e){c||(I(t.$$.fragment,e),c=!0)},o(e){h(t.$$.fragment,e),c=!1},d(e){P(t,e)}}}function Me(E){let t,c,e,a,o,s,_,N,W='<a href="#層別-大カテゴリ構成比">層別 大カテゴリ構成比</a>',M,f,y,S,F='<a href="#層別-平均保有大カテゴリ数">層別 平均保有大カテゴリ数</a>',b,A,U,p=typeof l<"u"&&l.title&&l.hide_title!==!0&&fe();function D(r,m){return typeof l<"u"&&l.title?Ae:ye}let L=D()(E),R=typeof l=="object"&&He(),u=E[0]&&te(E),i=E[1]&&se(E);return f=new ee({props:{data:E[0],x:"segment",y:"total_sales",series:"category_major_name",type:"stacked100",title:"層別 大カテゴリ構成比 (%)",swapXY:"true"}}),A=new ee({props:{data:E[1],x:"segment",y:"avg_category_count",yFmt:"0.00",title:"層別 1 顧客あたり平均購入大カテゴリ数",sort:"false",labels:"true",labelFmt:"0.00"}}),{c(){p&&p.c(),t=T(),L.c(),c=C("meta"),e=C("meta"),R&&R.c(),a=G(),o=T(),u&&u.c(),s=T(),i&&i.c(),_=T(),N=C("h2"),N.innerHTML=W,M=T(),w(f.$$.fragment),y=T(),S=C("h2"),S.innerHTML=F,b=T(),w(A.$$.fragment),this.h()},l(r){p&&p.l(r),t=O(r);const m=ce("svelte-2igo1p",document.head);L.l(m),c=H(m,"META",{name:!0,content:!0}),e=H(m,"META",{name:!0,content:!0}),R&&R.l(m),a=G(),m.forEach(n),o=O(r),u&&u.l(r),s=O(r),i&&i.l(r),_=O(r),N=H(r,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(N)!=="svelte-l052r4"&&(N.innerHTML=W),M=O(r),j(f.$$.fragment,r),y=O(r),S=H(r,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(S)!=="svelte-17i3avn"&&(S.innerHTML=F),b=O(r),j(A.$$.fragment,r),this.h()},h(){g(c,"name","twitter:card"),g(c,"content","summary_large_image"),g(e,"name","twitter:site"),g(e,"content","@evidence_dev"),g(N,"class","markdown"),g(N,"id","層別-大カテゴリ構成比"),g(S,"class","markdown"),g(S,"id","層別-平均保有大カテゴリ数")},m(r,m){p&&p.m(r,m),d(r,t,m),L.m(document.head,null),v(document.head,c),v(document.head,e),R&&R.m(document.head,null),v(document.head,a),d(r,o,m),u&&u.m(r,m),d(r,s,m),i&&i.m(r,m),d(r,_,m),d(r,N,m),d(r,M,m),J(f,r,m),d(r,y,m),d(r,S,m),d(r,b,m),J(A,r,m),U=!0},p(r,[m]){typeof l<"u"&&l.title&&l.hide_title!==!0&&p.p(r,m),L.p(r,m),typeof l=="object"&&R.p(r,m),r[0]?u?(u.p(r,m),m&1&&I(u,1)):(u=te(r),u.c(),I(u,1),u.m(s.parentNode,s)):u&&(Q(),h(u,1,1,()=>{u=null}),$()),r[1]?i?(i.p(r,m),m&2&&I(i,1)):(i=se(r),i.c(),I(i,1),i.m(_.parentNode,_)):i&&(Q(),h(i,1,1,()=>{i=null}),$());const x={};m&1&&(x.data=r[0]),f.$set(x);const V={};m&2&&(V.data=r[1]),A.$set(V)},i(r){U||(I(u),I(i),I(f.$$.fragment,r),I(A.$$.fragment,r),U=!0)},o(r){h(u),h(i),h(f.$$.fragment,r),h(A.$$.fragment,r),U=!1},d(r){r&&(n(t),n(o),n(s),n(_),n(N),n(M),n(y),n(S),n(b)),p&&p.d(r),L.d(r),n(c),n(e),R&&R.d(r),n(a),u&&u.d(r),i&&i.d(r),P(f,r),P(A,r)}}}const l={title:"ロイヤル層"};function De(E,t,c){let e,a;q(E,Te,i=>c(12,e=i)),q(E,z,i=>c(18,a=i));let{data:o}=t,{data:s={},customFormattingSettings:_,__db:N,inputs:W}=o;oe(z,a="78d58b778d21b1e5cfa6373d0cd16937",a);let M=Ne(Re(W));_e(M.subscribe(i=>W=i)),ie(pe,{getCustomFormats:()=>_.customFormats||[]});const f=(i,r)=>Oe(N.query,i,{query_name:r});ge(f),e.params,me(()=>!0);let y={initialData:void 0,initialError:void 0},S=Y`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

base AS (
  SELECT
    s.segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC,
  total_sales DESC`,F=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

base AS (
  SELECT
    s.segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC,
  total_sales DESC`;s.segment_category_mix_data&&(s.segment_category_mix_data instanceof Error?y.initialError=s.segment_category_mix_data:y.initialData=s.segment_category_mix_data,s.segment_category_mix_columns&&(y.knownColumns=s.segment_category_mix_columns));let b,A=!1;const U=X.createReactive({callback:i=>{c(0,b=i)},execFn:f},{id:"segment_category_mix",...y});U(F,{noResolve:S,...y}),globalThis[Symbol.for("segment_category_mix")]={get value(){return b}};let p={initialData:void 0,initialError:void 0},D=Y`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

customer_categories AS (
  SELECT
    s.segment,
    r.customer_id,
    COUNT(DISTINCT c.category_major_name) AS category_count
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, r.customer_id
)

SELECT
  segment,
  ROUND(AVG(category_count), 2) AS avg_category_count
FROM customer_categories
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`,k=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

customer_categories AS (
  SELECT
    s.segment,
    r.customer_id,
    COUNT(DISTINCT c.category_major_name) AS category_count
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, r.customer_id
)

SELECT
  segment,
  ROUND(AVG(category_count), 2) AS avg_category_count
FROM customer_categories
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`;s.segment_category_count_data&&(s.segment_category_count_data instanceof Error?p.initialError=s.segment_category_count_data:p.initialData=s.segment_category_count_data,s.segment_category_count_columns&&(p.knownColumns=s.segment_category_count_columns));let L,R=!1;const u=X.createReactive({callback:i=>{c(1,L=i)},execFn:f},{id:"segment_category_count",...p});return u(k,{noResolve:D,...p}),globalThis[Symbol.for("segment_category_count")]={get value(){return L}},E.$$set=i=>{"data"in i&&c(2,o=i.data)},E.$$.update=()=>{E.$$.dirty&4&&c(3,{data:s={},customFormattingSettings:_,__db:N}=o,s),E.$$.dirty&8&&Se.set(Object.keys(s).length>0),E.$$.dirty&4096&&e.params,E.$$.dirty&240&&(S||!A?S||(U(F,{noResolve:S,...y}),c(7,A=!0)):U(F,{noResolve:S})),E.$$.dirty&3840&&(D||!R?D||(u(k,{noResolve:D,...p}),c(11,R=!0)):u(k,{noResolve:D}))},c(5,S=Y`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

base AS (
  SELECT
    s.segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC,
  total_sales DESC`),c(6,F=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

base AS (
  SELECT
    s.segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC,
  total_sales DESC`),c(9,D=Y`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

customer_categories AS (
  SELECT
    s.segment,
    r.customer_id,
    COUNT(DISTINCT c.category_major_name) AS category_count
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, r.customer_id
)

SELECT
  segment,
  ROUND(AVG(category_count), 2) AS avg_category_count
FROM customer_categories
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`),c(10,k=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

customer_categories AS (
  SELECT
    s.segment,
    r.customer_id,
    COUNT(DISTINCT c.category_major_name) AS category_count
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, r.customer_id
)

SELECT
  segment,
  ROUND(AVG(category_count), 2) AS avg_category_count
FROM customer_categories
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`),[b,L,o,s,y,S,F,A,p,D,k,R,e]}class Ye extends ue{constructor(t){super(),de(this,t,De,Me,ae,{data:2})}}export{Ye as component};
