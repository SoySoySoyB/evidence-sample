import{s as Re,d as l,i as n,a as ae,b as u,c as p,h as ge,e as w,f as re,g as te,j as A,k as D,l as de,m as fe,o as Oe,n as Te,p as Ie,q as z,r as Ce,t as Me,u as he}from"../chunks/scheduler.DbLZmw5B.js";import{S as He,i as we,d as v,t as I,a as R,c as _e,m as L,b as U,e as $,g as ye}from"../chunks/index.DZMbDxCq.js";import{D as De,e as Fe,s as ve,Q as oe,p as Le,b as X,a as Se,r as ue,C as Ue}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C88-DVgh.js";import{w as $e}from"../chunks/entry.CKB6EmEz.js";import{h as Z,p as be}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Je}from"../chunks/stores.ChOsbD0K.js";import{Q as ce}from"../chunks/getCompletedData.BOW9Mk2J.js";import{L as Ee}from"../chunks/LineChart.BMlXdgjs.js";import{S as We}from"../chunks/ScatterPlot.CaOZ5p3v.js";function Be(i){let a,m=d.title+"",e;return{c(){a=D("h1"),e=he(m),this.h()},l(_){a=w(_,"H1",{class:!0});var o=Ce(a);e=Me(o,m),o.forEach(l),this.h()},h(){u(a,"class","title")},m(_,o){n(_,a,o),ae(a,e)},p:z,d(_){_&&l(a)}}}function Ge(i){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:z,p:z,d:z}}function ke(i){let a,m,e,_,o;return document.title=a=d.title,{c(){m=A(),e=D("meta"),_=A(),o=D("meta"),this.h()},l(r){m=p(r),e=w(r,"META",{property:!0,content:!0}),_=p(r),o=w(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c;u(e,"property","og:title"),u(e,"content",((r=d.og)==null?void 0:r.title)??d.title),u(o,"name","twitter:title"),u(o,"content",((c=d.og)==null?void 0:c.title)??d.title)},m(r,c){n(r,m,c),n(r,e,c),n(r,_,c),n(r,o,c)},p(r,c){c&0&&a!==(a=d.title)&&(document.title=a)},d(r){r&&(l(m),l(e),l(_),l(o))}}}function qe(i){var o,r;let a,m,e=(d.description||((o=d.og)==null?void 0:o.description))&&Ye(),_=((r=d.og)==null?void 0:r.image)&&Pe();return{c(){e&&e.c(),a=A(),_&&_.c(),m=re()},l(c){e&&e.l(c),a=p(c),_&&_.l(c),m=re()},m(c,E){e&&e.m(c,E),n(c,a,E),_&&_.m(c,E),n(c,m,E)},p(c,E){var N,b;(d.description||(N=d.og)!=null&&N.description)&&e.p(c,E),(b=d.og)!=null&&b.image&&_.p(c,E)},d(c){c&&(l(a),l(m)),e&&e.d(c),_&&_.d(c)}}}function Ye(i){let a,m,e,_,o;return{c(){a=D("meta"),m=A(),e=D("meta"),_=A(),o=D("meta"),this.h()},l(r){a=w(r,"META",{name:!0,content:!0}),m=p(r),e=w(r,"META",{property:!0,content:!0}),_=p(r),o=w(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c,E;u(a,"name","description"),u(a,"content",d.description??((r=d.og)==null?void 0:r.description)),u(e,"property","og:description"),u(e,"content",((c=d.og)==null?void 0:c.description)??d.description),u(o,"name","twitter:description"),u(o,"content",((E=d.og)==null?void 0:E.description)??d.description)},m(r,c){n(r,a,c),n(r,m,c),n(r,e,c),n(r,_,c),n(r,o,c)},p:z,d(r){r&&(l(a),l(m),l(e),l(_),l(o))}}}function Pe(i){let a,m,e;return{c(){a=D("meta"),m=A(),e=D("meta"),this.h()},l(_){a=w(_,"META",{property:!0,content:!0}),m=p(_),e=w(_,"META",{name:!0,content:!0}),this.h()},h(){var _,o;u(a,"property","og:image"),u(a,"content",Se((_=d.og)==null?void 0:_.image)),u(e,"name","twitter:image"),u(e,"content",Se((o=d.og)==null?void 0:o.image))},m(_,o){n(_,a,o),n(_,m,o),n(_,e,o)},p:z,d(_){_&&(l(a),l(m),l(e))}}}function Ne(i){let a,m;return a=new ce({props:{queryID:"medium_category_quadrant",queryResult:i[0]}}),{c(){$(a.$$.fragment)},l(e){U(a.$$.fragment,e)},m(e,_){L(a,e,_),m=!0},p(e,_){const o={};_&1&&(o.queryResult=e[0]),a.$set(o)},i(e){m||(R(a.$$.fragment,e),m=!0)},o(e){I(a.$$.fragment,e),m=!1},d(e){v(a,e)}}}function pe(i){let a,m;return a=new ce({props:{queryID:"star_categories_monthly",queryResult:i[1]}}),{c(){$(a.$$.fragment)},l(e){U(a.$$.fragment,e)},m(e,_){L(a,e,_),m=!0},p(e,_){const o={};_&2&&(o.queryResult=e[1]),a.$set(o)},i(e){m||(R(a.$$.fragment,e),m=!0)},o(e){I(a.$$.fragment,e),m=!1},d(e){v(a,e)}}}function Ae(i){let a,m;return a=new ce({props:{queryID:"declining_categories_monthly",queryResult:i[2]}}),{c(){$(a.$$.fragment)},l(e){U(a.$$.fragment,e)},m(e,_){L(a,e,_),m=!0},p(e,_){const o={};_&4&&(o.queryResult=e[2]),a.$set(o)},i(e){m||(R(a.$$.fragment,e),m=!0)},o(e){I(a.$$.fragment,e),m=!1},d(e){v(a,e)}}}function je(i){let a,m,e,_,o,r,c,E,N,b,M,g;return a=new X({props:{id:"category_major_name",title:"大カテゴリ"}}),e=new X({props:{id:"category_medium_name",title:"中カテゴリ"}}),o=new X({props:{id:"quadrant",title:"象限"}}),c=new X({props:{id:"total_sales",title:"2019 1-10 月 売上",fmt:"#,##0",contentType:"bar"}}),N=new X({props:{id:"yoy_pct",title:"YoY (%)",fmt:"0.0",contentType:"bar"}}),M=new X({props:{id:"share_pct",title:"シェア (%)",fmt:"0.0"}}),{c(){$(a.$$.fragment),m=A(),$(e.$$.fragment),_=A(),$(o.$$.fragment),r=A(),$(c.$$.fragment),E=A(),$(N.$$.fragment),b=A(),$(M.$$.fragment)},l(y){U(a.$$.fragment,y),m=p(y),U(e.$$.fragment,y),_=p(y),U(o.$$.fragment,y),r=p(y),U(c.$$.fragment,y),E=p(y),U(N.$$.fragment,y),b=p(y),U(M.$$.fragment,y)},m(y,S){L(a,y,S),n(y,m,S),L(e,y,S),n(y,_,S),L(o,y,S),n(y,r,S),L(c,y,S),n(y,E,S),L(N,y,S),n(y,b,S),L(M,y,S),g=!0},p:z,i(y){g||(R(a.$$.fragment,y),R(e.$$.fragment,y),R(o.$$.fragment,y),R(c.$$.fragment,y),R(N.$$.fragment,y),R(M.$$.fragment,y),g=!0)},o(y){I(a.$$.fragment,y),I(e.$$.fragment,y),I(o.$$.fragment,y),I(c.$$.fragment,y),I(N.$$.fragment,y),I(M.$$.fragment,y),g=!1},d(y){y&&(l(m),l(_),l(r),l(E),l(b)),v(a,y),v(e,y),v(o,y),v(c,y),v(N,y),v(M,y)}}}function Ve(i){let a,m,e,_,o,r,c,E,N,b='<a href="#中カテゴリ-売上--yoy-象限分析-2019-1-10-月-vs-2018-1-10-月">中カテゴリ 売上 × YoY 象限分析 (2019 1-10 月 vs 2018 1-10 月)</a>',M,g,y,S,K='<a href="#中カテゴリ-象限別ランキング">中カテゴリ 象限別ランキング</a>',P,J,W,h,j='<a href="#成長スター-カテゴリの月次推移">成長スター カテゴリの月次推移</a>',V,B,Q,H,k='<a href="#衰退-カテゴリの月次推移">衰退 カテゴリの月次推移</a>',q,G,x,F=typeof d<"u"&&d.title&&d.hide_title!==!0&&Be();function C(t,s){return typeof d<"u"&&d.title?ke:Ge}let ee=C()(i),Y=typeof d=="object"&&qe(),f=i[0]&&Ne(i),O=i[1]&&pe(i),T=i[2]&&Ae(i);return g=new We({props:{data:i[0],x:"total_sales",y:"yoy_pct",series:"quadrant",xFmt:"#,##0",yFmt:"0.0",title:"中カテゴリ 売上 × YoY 成長率"}}),J=new De({props:{data:i[0],rows:"20",search:"true",sortable:"true",$$slots:{default:[je]},$$scope:{ctx:i}}}),B=new Ee({props:{data:i[1],x:"year_month",y:"total_sales",series:"category_medium_name",yFmt:"#,##0",title:"成長スター カテゴリ 月次売上",markers:"true"}}),G=new Ee({props:{data:i[2],x:"year_month",y:"total_sales",series:"category_medium_name",yFmt:"#,##0",title:"衰退 カテゴリ 月次売上",markers:"true"}}),{c(){F&&F.c(),a=A(),ee.c(),m=D("meta"),e=D("meta"),Y&&Y.c(),_=re(),o=A(),f&&f.c(),r=A(),O&&O.c(),c=A(),T&&T.c(),E=A(),N=D("h2"),N.innerHTML=b,M=A(),$(g.$$.fragment),y=A(),S=D("h2"),S.innerHTML=K,P=A(),$(J.$$.fragment),W=A(),h=D("h2"),h.innerHTML=j,V=A(),$(B.$$.fragment),Q=A(),H=D("h2"),H.innerHTML=k,q=A(),$(G.$$.fragment),this.h()},l(t){F&&F.l(t),a=p(t);const s=ge("svelte-2igo1p",document.head);ee.l(s),m=w(s,"META",{name:!0,content:!0}),e=w(s,"META",{name:!0,content:!0}),Y&&Y.l(s),_=re(),s.forEach(l),o=p(t),f&&f.l(t),r=p(t),O&&O.l(t),c=p(t),T&&T.l(t),E=p(t),N=w(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),te(N)!=="svelte-9wvkxm"&&(N.innerHTML=b),M=p(t),U(g.$$.fragment,t),y=p(t),S=w(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),te(S)!=="svelte-1cizais"&&(S.innerHTML=K),P=p(t),U(J.$$.fragment,t),W=p(t),h=w(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),te(h)!=="svelte-17p499k"&&(h.innerHTML=j),V=p(t),U(B.$$.fragment,t),Q=p(t),H=w(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),te(H)!=="svelte-e8pvkb"&&(H.innerHTML=k),q=p(t),U(G.$$.fragment,t),this.h()},h(){u(m,"name","twitter:card"),u(m,"content","summary_large_image"),u(e,"name","twitter:site"),u(e,"content","@evidence_dev"),u(N,"class","markdown"),u(N,"id","中カテゴリ-売上--yoy-象限分析-2019-1-10-月-vs-2018-1-10-月"),u(S,"class","markdown"),u(S,"id","中カテゴリ-象限別ランキング"),u(h,"class","markdown"),u(h,"id","成長スター-カテゴリの月次推移"),u(H,"class","markdown"),u(H,"id","衰退-カテゴリの月次推移")},m(t,s){F&&F.m(t,s),n(t,a,s),ee.m(document.head,null),ae(document.head,m),ae(document.head,e),Y&&Y.m(document.head,null),ae(document.head,_),n(t,o,s),f&&f.m(t,s),n(t,r,s),O&&O.m(t,s),n(t,c,s),T&&T.m(t,s),n(t,E,s),n(t,N,s),n(t,M,s),L(g,t,s),n(t,y,s),n(t,S,s),n(t,P,s),L(J,t,s),n(t,W,s),n(t,h,s),n(t,V,s),L(B,t,s),n(t,Q,s),n(t,H,s),n(t,q,s),L(G,t,s),x=!0},p(t,[s]){typeof d<"u"&&d.title&&d.hide_title!==!0&&F.p(t,s),ee.p(t,s),typeof d=="object"&&Y.p(t,s),t[0]?f?(f.p(t,s),s&1&&R(f,1)):(f=Ne(t),f.c(),R(f,1),f.m(r.parentNode,r)):f&&(ye(),I(f,1,1,()=>{f=null}),_e()),t[1]?O?(O.p(t,s),s&2&&R(O,1)):(O=pe(t),O.c(),R(O,1),O.m(c.parentNode,c)):O&&(ye(),I(O,1,1,()=>{O=null}),_e()),t[2]?T?(T.p(t,s),s&4&&R(T,1)):(T=Ae(t),T.c(),R(T,1),T.m(E.parentNode,E)):T&&(ye(),I(T,1,1,()=>{T=null}),_e());const le={};s&1&&(le.data=t[0]),g.$set(le);const me={};s&1&&(me.data=t[0]),s&1073741824&&(me.$$scope={dirty:s,ctx:t}),J.$set(me);const ie={};s&2&&(ie.data=t[1]),B.$set(ie);const ne={};s&4&&(ne.data=t[2]),G.$set(ne)},i(t){x||(R(f),R(O),R(T),R(g.$$.fragment,t),R(J.$$.fragment,t),R(B.$$.fragment,t),R(G.$$.fragment,t),x=!0)},o(t){I(f),I(O),I(T),I(g.$$.fragment,t),I(J.$$.fragment,t),I(B.$$.fragment,t),I(G.$$.fragment,t),x=!1},d(t){t&&(l(a),l(o),l(r),l(c),l(E),l(N),l(M),l(y),l(S),l(P),l(W),l(h),l(V),l(Q),l(H),l(q)),F&&F.d(t),ee.d(t),l(m),l(e),Y&&Y.d(t),l(_),f&&f.d(t),O&&O.d(t),T&&T.d(t),v(g,t),v(J,t),v(B,t),v(G,t)}}}const d={title:"商品 / カテゴリ担当"};function Qe(i,a,m){let e,_;de(i,Je,C=>m(17,e=C)),de(i,ue,C=>m(23,_=C));let{data:o}=a,{data:r={},customFormattingSettings:c,__db:E,inputs:N}=o;fe(ue,_="51679ce3738a69b94d40325e0e3d57db",_);let b=Fe($e(N));Oe(b.subscribe(C=>N=C)),Te(Ue,{getCustomFormats:()=>c.customFormats||[]});const M=(C,se)=>be(E.query,C,{query_name:se});ve(M),e.params,Ie(()=>!0);let g={initialData:void 0,initialError:void 0},y=Z`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    product_cd,
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
    c.category_major_name,
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name, c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_major_name,
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
)

SELECT
  y.category_major_name,
  y.category_medium_name,
  y.total_sales,
  ROUND(y.yoy_pct, 1) AS yoy_pct,
  m.median_sales,
  ROUND(m.median_yoy, 1) AS median_yoy,
  ROUND(y.total_sales * 100.0 / SUM(y.total_sales) OVER (), 1) AS share_pct,
  CASE
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長スター'
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct < m.median_yoy
      THEN '成熟主力'
    WHEN y.total_sales < m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長候補'
    ELSE '衰退'
  END AS quadrant
FROM yoy y
CROSS JOIN medians m
ORDER BY y.total_sales DESC`,S=`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    product_cd,
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
    c.category_major_name,
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name, c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_major_name,
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
)

SELECT
  y.category_major_name,
  y.category_medium_name,
  y.total_sales,
  ROUND(y.yoy_pct, 1) AS yoy_pct,
  m.median_sales,
  ROUND(m.median_yoy, 1) AS median_yoy,
  ROUND(y.total_sales * 100.0 / SUM(y.total_sales) OVER (), 1) AS share_pct,
  CASE
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長スター'
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct < m.median_yoy
      THEN '成熟主力'
    WHEN y.total_sales < m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長候補'
    ELSE '衰退'
  END AS quadrant
FROM yoy y
CROSS JOIN medians m
ORDER BY y.total_sales DESC`;r.medium_category_quadrant_data&&(r.medium_category_quadrant_data instanceof Error?g.initialError=r.medium_category_quadrant_data:g.initialData=r.medium_category_quadrant_data,r.medium_category_quadrant_columns&&(g.knownColumns=r.medium_category_quadrant_columns));let K,P=!1;const J=oe.createReactive({callback:C=>{m(0,K=C)},execFn:M},{id:"medium_category_quadrant",...g});J(S,{noResolve:y,...g}),globalThis[Symbol.for("medium_category_quadrant")]={get value(){return K}};let W={initialData:void 0,initialError:void 0},h=Z`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

stars AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN stars s ON c.category_medium_name = s.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`,j=`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

stars AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN stars s ON c.category_medium_name = s.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`;r.star_categories_monthly_data&&(r.star_categories_monthly_data instanceof Error?W.initialError=r.star_categories_monthly_data:W.initialData=r.star_categories_monthly_data,r.star_categories_monthly_columns&&(W.knownColumns=r.star_categories_monthly_columns));let V,B=!1;const Q=oe.createReactive({callback:C=>{m(1,V=C)},execFn:M},{id:"star_categories_monthly",...W});Q(j,{noResolve:h,...W}),globalThis[Symbol.for("star_categories_monthly")]={get value(){return V}};let H={initialData:void 0,initialError:void 0},k=Z`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

declining AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales < m.median_sales AND y.yoy_pct < m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN declining d ON c.category_medium_name = d.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`,q=`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

declining AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales < m.median_sales AND y.yoy_pct < m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN declining d ON c.category_medium_name = d.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`;r.declining_categories_monthly_data&&(r.declining_categories_monthly_data instanceof Error?H.initialError=r.declining_categories_monthly_data:H.initialData=r.declining_categories_monthly_data,r.declining_categories_monthly_columns&&(H.knownColumns=r.declining_categories_monthly_columns));let G,x=!1;const F=oe.createReactive({callback:C=>{m(2,G=C)},execFn:M},{id:"declining_categories_monthly",...H});return F(q,{noResolve:k,...H}),globalThis[Symbol.for("declining_categories_monthly")]={get value(){return G}},i.$$set=C=>{"data"in C&&m(3,o=C.data)},i.$$.update=()=>{i.$$.dirty&8&&m(4,{data:r={},customFormattingSettings:c,__db:E}=o,r),i.$$.dirty&16&&Le.set(Object.keys(r).length>0),i.$$.dirty&131072&&e.params,i.$$.dirty&480&&(y||!P?y||(J(S,{noResolve:y,...g}),m(8,P=!0)):J(S,{noResolve:y})),i.$$.dirty&7680&&(h||!B?h||(Q(j,{noResolve:h,...W}),m(12,B=!0)):Q(j,{noResolve:h})),i.$$.dirty&122880&&(k||!x?k||(F(q,{noResolve:k,...H}),m(16,x=!0)):F(q,{noResolve:k}))},m(6,y=Z`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    product_cd,
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
    c.category_major_name,
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name, c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_major_name,
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
)

SELECT
  y.category_major_name,
  y.category_medium_name,
  y.total_sales,
  ROUND(y.yoy_pct, 1) AS yoy_pct,
  m.median_sales,
  ROUND(m.median_yoy, 1) AS median_yoy,
  ROUND(y.total_sales * 100.0 / SUM(y.total_sales) OVER (), 1) AS share_pct,
  CASE
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長スター'
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct < m.median_yoy
      THEN '成熟主力'
    WHEN y.total_sales < m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長候補'
    ELSE '衰退'
  END AS quadrant
FROM yoy y
CROSS JOIN medians m
ORDER BY y.total_sales DESC`),m(7,S=`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    product_cd,
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
    c.category_major_name,
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name, c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_major_name,
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
)

SELECT
  y.category_major_name,
  y.category_medium_name,
  y.total_sales,
  ROUND(y.yoy_pct, 1) AS yoy_pct,
  m.median_sales,
  ROUND(m.median_yoy, 1) AS median_yoy,
  ROUND(y.total_sales * 100.0 / SUM(y.total_sales) OVER (), 1) AS share_pct,
  CASE
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長スター'
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct < m.median_yoy
      THEN '成熟主力'
    WHEN y.total_sales < m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長候補'
    ELSE '衰退'
  END AS quadrant
FROM yoy y
CROSS JOIN medians m
ORDER BY y.total_sales DESC`),m(10,h=Z`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

stars AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN stars s ON c.category_medium_name = s.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`),m(11,j=`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

stars AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN stars s ON c.category_medium_name = s.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`),m(14,k=Z`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

declining AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales < m.median_sales AND y.yoy_pct < m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN declining d ON c.category_medium_name = d.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`),m(15,q=`WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    SUBSTR(ymd_str, 1, 6) AS year_month,
    product_cd,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
),

declining AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales < m.median_sales AND y.yoy_pct < m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN declining d ON c.category_medium_name = d.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name`),[K,V,G,o,r,g,y,S,P,W,h,j,B,H,k,q,x,e]}class mt extends He{constructor(a){super(),we(this,a,Qe,Ve,Re,{data:3})}}export{mt as component};
