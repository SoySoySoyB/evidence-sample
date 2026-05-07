import{s as V,d as E,i as S,a as I,b as w,c as R,h as K,e as N,f as W,g as q,j as O,k as T,l as U,m as x,o as J,n as Q,p as j,q as F,r as $,t as X,u as z}from"../chunks/scheduler.DbLZmw5B.js";import{S as Z,i as ee,d as v,t as D,a as L,c as te,m as B,b as G,e as P,g as re}from"../chunks/index.DZMbDxCq.js";import{e as oe,s as se,Q as ae,p as _e,a as y,r as Y,C as ne}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C88-DVgh.js";import{w as de}from"../chunks/entry.CKB6EmEz.js";import{h as b,p as Ee}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as me}from"../chunks/stores.ChOsbD0K.js";import{Q as ie}from"../chunks/getCompletedData.BOW9Mk2J.js";import{H as ce}from"../chunks/Heatmap.CnzZ-K3D.js";function we(c){let o,_=d.title+"",e;return{c(){o=T("h1"),e=z(_),this.h()},l(r){o=N(r,"H1",{class:!0});var n=$(o);e=X(n,_),n.forEach(E),this.h()},h(){w(o,"class","title")},m(r,n){S(r,o,n),I(o,e)},p:F,d(r){r&&E(o)}}}function Se(c){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:F,p:F,d:F}}function ue(c){let o,_,e,r,n;return document.title=o=d.title,{c(){_=O(),e=T("meta"),r=O(),n=T("meta"),this.h()},l(t){_=R(t),e=N(t,"META",{property:!0,content:!0}),r=R(t),n=N(t,"META",{name:!0,content:!0}),this.h()},h(){var t,a;w(e,"property","og:title"),w(e,"content",((t=d.og)==null?void 0:t.title)??d.title),w(n,"name","twitter:title"),w(n,"content",((a=d.og)==null?void 0:a.title)??d.title)},m(t,a){S(t,_,a),S(t,e,a),S(t,r,a),S(t,n,a)},p(t,a){a&0&&o!==(o=d.title)&&(document.title=o)},d(t){t&&(E(_),E(e),E(r),E(n))}}}function pe(c){var n,t;let o,_,e=(d.description||((n=d.og)==null?void 0:n.description))&&le(),r=((t=d.og)==null?void 0:t.image)&&Ae();return{c(){e&&e.c(),o=O(),r&&r.c(),_=W()},l(a){e&&e.l(a),o=R(a),r&&r.l(a),_=W()},m(a,p){e&&e.m(a,p),S(a,o,p),r&&r.m(a,p),S(a,_,p)},p(a,p){var h,l;(d.description||(h=d.og)!=null&&h.description)&&e.p(a,p),(l=d.og)!=null&&l.image&&r.p(a,p)},d(a){a&&(E(o),E(_)),e&&e.d(a),r&&r.d(a)}}}function le(c){let o,_,e,r,n;return{c(){o=T("meta"),_=O(),e=T("meta"),r=O(),n=T("meta"),this.h()},l(t){o=N(t,"META",{name:!0,content:!0}),_=R(t),e=N(t,"META",{property:!0,content:!0}),r=R(t),n=N(t,"META",{name:!0,content:!0}),this.h()},h(){var t,a,p;w(o,"name","description"),w(o,"content",d.description??((t=d.og)==null?void 0:t.description)),w(e,"property","og:description"),w(e,"content",((a=d.og)==null?void 0:a.description)??d.description),w(n,"name","twitter:description"),w(n,"content",((p=d.og)==null?void 0:p.description)??d.description)},m(t,a){S(t,o,a),S(t,_,a),S(t,e,a),S(t,r,a),S(t,n,a)},p:F,d(t){t&&(E(o),E(_),E(e),E(r),E(n))}}}function Ae(c){let o,_,e;return{c(){o=T("meta"),_=O(),e=T("meta"),this.h()},l(r){o=N(r,"META",{property:!0,content:!0}),_=R(r),e=N(r,"META",{name:!0,content:!0}),this.h()},h(){var r,n;w(o,"property","og:image"),w(o,"content",y((r=d.og)==null?void 0:r.image)),w(e,"name","twitter:image"),w(e,"content",y((n=d.og)==null?void 0:n.image))},m(r,n){S(r,o,n),S(r,_,n),S(r,e,n)},p:F,d(r){r&&(E(o),E(_),E(e))}}}function g(c){let o,_;return o=new ie({props:{queryID:"store_dow_heatmap",queryResult:c[0]}}),{c(){P(o.$$.fragment)},l(e){G(o.$$.fragment,e)},m(e,r){B(o,e,r),_=!0},p(e,r){const n={};r&1&&(n.queryResult=e[0]),o.$set(n)},i(e){_||(L(o.$$.fragment,e),_=!0)},o(e){D(o.$$.fragment,e),_=!1},d(e){v(o,e)}}}function Ne(c){let o,_,e,r,n,t,a,p='<a href="#店舗--曜日-構成比ヒートマップ-全店平均行を最上段に固定">店舗 × 曜日 構成比ヒートマップ (全店平均行を最上段に固定)</a>',h,l,H,u=typeof d<"u"&&d.title&&d.hide_title!==!0&&we();function f(s,i){return typeof d<"u"&&d.title?ue:Se}let C=f()(c),A=typeof d=="object"&&pe(),m=c[0]&&g(c);return l=new ce({props:{data:c[0],x:"dow",y:"store_name",value:"share_pct",valueFmt:"0.0"}}),{c(){u&&u.c(),o=O(),C.c(),_=T("meta"),e=T("meta"),A&&A.c(),r=W(),n=O(),m&&m.c(),t=O(),a=T("h2"),a.innerHTML=p,h=O(),P(l.$$.fragment),this.h()},l(s){u&&u.l(s),o=R(s);const i=K("svelte-2igo1p",document.head);C.l(i),_=N(i,"META",{name:!0,content:!0}),e=N(i,"META",{name:!0,content:!0}),A&&A.l(i),r=W(),i.forEach(E),n=R(s),m&&m.l(s),t=R(s),a=N(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),q(a)!=="svelte-q195kt"&&(a.innerHTML=p),h=R(s),G(l.$$.fragment,s),this.h()},h(){w(_,"name","twitter:card"),w(_,"content","summary_large_image"),w(e,"name","twitter:site"),w(e,"content","@evidence_dev"),w(a,"class","markdown"),w(a,"id","店舗--曜日-構成比ヒートマップ-全店平均行を最上段に固定")},m(s,i){u&&u.m(s,i),S(s,o,i),C.m(document.head,null),I(document.head,_),I(document.head,e),A&&A.m(document.head,null),I(document.head,r),S(s,n,i),m&&m.m(s,i),S(s,t,i),S(s,a,i),S(s,h,i),B(l,s,i),H=!0},p(s,[i]){typeof d<"u"&&d.title&&d.hide_title!==!0&&u.p(s,i),C.p(s,i),typeof d=="object"&&A.p(s,i),s[0]?m?(m.p(s,i),i&1&&L(m,1)):(m=g(s),m.c(),L(m,1),m.m(t.parentNode,t)):m&&(re(),D(m,1,1,()=>{m=null}),te());const k={};i&1&&(k.data=s[0]),l.$set(k)},i(s){H||(L(m),L(l.$$.fragment,s),H=!0)},o(s){D(m),D(l.$$.fragment,s),H=!1},d(s){s&&(E(o),E(n),E(t),E(a),E(h)),u&&u.d(s),C.d(s),E(_),E(e),A&&A.d(s),E(r),m&&m.d(s),v(l,s)}}}const d={title:"曜日 / 時系列"};function Te(c,o,_){let e,r;U(c,me,s=>_(7,e=s)),U(c,Y,s=>_(13,r=s));let{data:n}=o,{data:t={},customFormattingSettings:a,__db:p,inputs:h}=n;x(Y,r="57b812138d9e3a5afe1a18f15514d06c",r);let l=oe(de(h));J(l.subscribe(s=>h=s)),Q(ne,{getCustomFormats:()=>a.customFormats||[]});const H=(s,i)=>Ee(p.query,s,{query_name:i});se(H),e.params,j(()=>!0);let u={initialData:void 0,initialError:void 0},f=b`WITH receipts_dated AS (
  SELECT
    store_cd,
    amount,
    CAST(
      STRPTIME(CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR), '%Y%m%d')
      AS DATE
    ) AS d
  FROM retail.receipt
),

receipts_dow AS (
  SELECT
    rd.store_cd,
    DAYOFWEEK(rd.d) AS dow_num,
    SUM(rd.amount) AS amount
  FROM receipts_dated rd
  GROUP BY rd.store_cd, DAYOFWEEK(rd.d)
),

store_dow AS (
  SELECT
    s.store_name,
    rdow.dow_num,
    rdow.amount,
    SUM(rdow.amount) OVER (PARTITION BY s.store_name) AS store_total
  FROM receipts_dow rdow
  INNER JOIN retail.store s ON rdow.store_cd = s.store_cd
),

with_share AS (
  SELECT
    store_name,
    dow_num,
    ROUND(amount * 100.0 / store_total, 1) AS share_pct
  FROM store_dow
),

weekend_pct AS (
  SELECT
    store_name,
    SUM(CASE WHEN dow_num IN (0, 6) THEN share_pct ELSE 0 END) AS weekend_share
  FROM with_share
  GROUP BY store_name
),

store_rows AS (
  SELECT
    ws.store_name,
    ws.dow_num,
    ws.share_pct,
    DENSE_RANK() OVER (ORDER BY wp.weekend_share DESC) + 1 AS sort_order
  FROM with_share ws
  INNER JOIN weekend_pct wp ON ws.store_name = wp.store_name
),

avg_rows AS (
  SELECT
    '全店平均' AS store_name,
    dow_num,
    ROUND(AVG(share_pct), 1) AS share_pct,
    1 AS sort_order
  FROM with_share
  GROUP BY dow_num
)

SELECT
  store_name,
  CASE dow_num
    WHEN 0 THEN '日'
    WHEN 1 THEN '月'
    WHEN 2 THEN '火'
    WHEN 3 THEN '水'
    WHEN 4 THEN '木'
    WHEN 5 THEN '金'
    WHEN 6 THEN '土'
  END AS dow,
  dow_num,
  share_pct,
  sort_order
FROM (
  SELECT * FROM avg_rows
  UNION ALL
  SELECT * FROM store_rows
)
ORDER BY sort_order ASC, dow_num ASC`,M=`WITH receipts_dated AS (
  SELECT
    store_cd,
    amount,
    CAST(
      STRPTIME(CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR), '%Y%m%d')
      AS DATE
    ) AS d
  FROM retail.receipt
),

receipts_dow AS (
  SELECT
    rd.store_cd,
    DAYOFWEEK(rd.d) AS dow_num,
    SUM(rd.amount) AS amount
  FROM receipts_dated rd
  GROUP BY rd.store_cd, DAYOFWEEK(rd.d)
),

store_dow AS (
  SELECT
    s.store_name,
    rdow.dow_num,
    rdow.amount,
    SUM(rdow.amount) OVER (PARTITION BY s.store_name) AS store_total
  FROM receipts_dow rdow
  INNER JOIN retail.store s ON rdow.store_cd = s.store_cd
),

with_share AS (
  SELECT
    store_name,
    dow_num,
    ROUND(amount * 100.0 / store_total, 1) AS share_pct
  FROM store_dow
),

weekend_pct AS (
  SELECT
    store_name,
    SUM(CASE WHEN dow_num IN (0, 6) THEN share_pct ELSE 0 END) AS weekend_share
  FROM with_share
  GROUP BY store_name
),

store_rows AS (
  SELECT
    ws.store_name,
    ws.dow_num,
    ws.share_pct,
    DENSE_RANK() OVER (ORDER BY wp.weekend_share DESC) + 1 AS sort_order
  FROM with_share ws
  INNER JOIN weekend_pct wp ON ws.store_name = wp.store_name
),

avg_rows AS (
  SELECT
    '全店平均' AS store_name,
    dow_num,
    ROUND(AVG(share_pct), 1) AS share_pct,
    1 AS sort_order
  FROM with_share
  GROUP BY dow_num
)

SELECT
  store_name,
  CASE dow_num
    WHEN 0 THEN '日'
    WHEN 1 THEN '月'
    WHEN 2 THEN '火'
    WHEN 3 THEN '水'
    WHEN 4 THEN '木'
    WHEN 5 THEN '金'
    WHEN 6 THEN '土'
  END AS dow,
  dow_num,
  share_pct,
  sort_order
FROM (
  SELECT * FROM avg_rows
  UNION ALL
  SELECT * FROM store_rows
)
ORDER BY sort_order ASC, dow_num ASC`;t.store_dow_heatmap_data&&(t.store_dow_heatmap_data instanceof Error?u.initialError=t.store_dow_heatmap_data:u.initialData=t.store_dow_heatmap_data,t.store_dow_heatmap_columns&&(u.knownColumns=t.store_dow_heatmap_columns));let C,A=!1;const m=ae.createReactive({callback:s=>{_(0,C=s)},execFn:H},{id:"store_dow_heatmap",...u});return m(M,{noResolve:f,...u}),globalThis[Symbol.for("store_dow_heatmap")]={get value(){return C}},c.$$set=s=>{"data"in s&&_(1,n=s.data)},c.$$.update=()=>{c.$$.dirty&2&&_(2,{data:t={},customFormattingSettings:a,__db:p}=n,t),c.$$.dirty&4&&_e.set(Object.keys(t).length>0),c.$$.dirty&128&&e.params,c.$$.dirty&120&&(f||!A?f||(m(M,{noResolve:f,...u}),_(6,A=!0)):m(M,{noResolve:f}))},_(4,f=b`WITH receipts_dated AS (
  SELECT
    store_cd,
    amount,
    CAST(
      STRPTIME(CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR), '%Y%m%d')
      AS DATE
    ) AS d
  FROM retail.receipt
),

receipts_dow AS (
  SELECT
    rd.store_cd,
    DAYOFWEEK(rd.d) AS dow_num,
    SUM(rd.amount) AS amount
  FROM receipts_dated rd
  GROUP BY rd.store_cd, DAYOFWEEK(rd.d)
),

store_dow AS (
  SELECT
    s.store_name,
    rdow.dow_num,
    rdow.amount,
    SUM(rdow.amount) OVER (PARTITION BY s.store_name) AS store_total
  FROM receipts_dow rdow
  INNER JOIN retail.store s ON rdow.store_cd = s.store_cd
),

with_share AS (
  SELECT
    store_name,
    dow_num,
    ROUND(amount * 100.0 / store_total, 1) AS share_pct
  FROM store_dow
),

weekend_pct AS (
  SELECT
    store_name,
    SUM(CASE WHEN dow_num IN (0, 6) THEN share_pct ELSE 0 END) AS weekend_share
  FROM with_share
  GROUP BY store_name
),

store_rows AS (
  SELECT
    ws.store_name,
    ws.dow_num,
    ws.share_pct,
    DENSE_RANK() OVER (ORDER BY wp.weekend_share DESC) + 1 AS sort_order
  FROM with_share ws
  INNER JOIN weekend_pct wp ON ws.store_name = wp.store_name
),

avg_rows AS (
  SELECT
    '全店平均' AS store_name,
    dow_num,
    ROUND(AVG(share_pct), 1) AS share_pct,
    1 AS sort_order
  FROM with_share
  GROUP BY dow_num
)

SELECT
  store_name,
  CASE dow_num
    WHEN 0 THEN '日'
    WHEN 1 THEN '月'
    WHEN 2 THEN '火'
    WHEN 3 THEN '水'
    WHEN 4 THEN '木'
    WHEN 5 THEN '金'
    WHEN 6 THEN '土'
  END AS dow,
  dow_num,
  share_pct,
  sort_order
FROM (
  SELECT * FROM avg_rows
  UNION ALL
  SELECT * FROM store_rows
)
ORDER BY sort_order ASC, dow_num ASC`),_(5,M=`WITH receipts_dated AS (
  SELECT
    store_cd,
    amount,
    CAST(
      STRPTIME(CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR), '%Y%m%d')
      AS DATE
    ) AS d
  FROM retail.receipt
),

receipts_dow AS (
  SELECT
    rd.store_cd,
    DAYOFWEEK(rd.d) AS dow_num,
    SUM(rd.amount) AS amount
  FROM receipts_dated rd
  GROUP BY rd.store_cd, DAYOFWEEK(rd.d)
),

store_dow AS (
  SELECT
    s.store_name,
    rdow.dow_num,
    rdow.amount,
    SUM(rdow.amount) OVER (PARTITION BY s.store_name) AS store_total
  FROM receipts_dow rdow
  INNER JOIN retail.store s ON rdow.store_cd = s.store_cd
),

with_share AS (
  SELECT
    store_name,
    dow_num,
    ROUND(amount * 100.0 / store_total, 1) AS share_pct
  FROM store_dow
),

weekend_pct AS (
  SELECT
    store_name,
    SUM(CASE WHEN dow_num IN (0, 6) THEN share_pct ELSE 0 END) AS weekend_share
  FROM with_share
  GROUP BY store_name
),

store_rows AS (
  SELECT
    ws.store_name,
    ws.dow_num,
    ws.share_pct,
    DENSE_RANK() OVER (ORDER BY wp.weekend_share DESC) + 1 AS sort_order
  FROM with_share ws
  INNER JOIN weekend_pct wp ON ws.store_name = wp.store_name
),

avg_rows AS (
  SELECT
    '全店平均' AS store_name,
    dow_num,
    ROUND(AVG(share_pct), 1) AS share_pct,
    1 AS sort_order
  FROM with_share
  GROUP BY dow_num
)

SELECT
  store_name,
  CASE dow_num
    WHEN 0 THEN '日'
    WHEN 1 THEN '月'
    WHEN 2 THEN '火'
    WHEN 3 THEN '水'
    WHEN 4 THEN '木'
    WHEN 5 THEN '金'
    WHEN 6 THEN '土'
  END AS dow,
  dow_num,
  share_pct,
  sort_order
FROM (
  SELECT * FROM avg_rows
  UNION ALL
  SELECT * FROM store_rows
)
ORDER BY sort_order ASC, dow_num ASC`),[C,n,t,u,f,M,A,e]}class Le extends Z{constructor(o){super(),ee(this,o,Te,Ne,V,{data:1})}}export{Le as component};
