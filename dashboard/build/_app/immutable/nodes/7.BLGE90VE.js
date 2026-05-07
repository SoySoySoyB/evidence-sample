import{s as He,d as o,i as c,a as Ee,b as u,c as R,h as De,e as D,f as ue,g as ne,j as O,k as L,l as pe,m as Le,o as he,n as be,p as ye,q as le,r as Fe,t as Be,u as Ie}from"../chunks/scheduler.DbLZmw5B.js";import{S as ke,i as We,d as P,t as M,a as S,c as me,m as q,b as j,e as x,g as _e}from"../chunks/index.DZMbDxCq.js";import{e as Ye,s as Ve,Q as oe,p as $e,a as Ne,r as Te,C as we}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C88-DVgh.js";import{w as Ge}from"../chunks/entry.CKB6EmEz.js";import{h as se,p as Ze}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Pe}from"../chunks/stores.ChOsbD0K.js";import{Q as Se}from"../chunks/getCompletedData.BOW9Mk2J.js";import{B as ce}from"../chunks/BarChart.KTqw9ki5.js";import{L as qe}from"../chunks/LineChart.BMlXdgjs.js";function je(_){let s,r=E.title+"",t;return{c(){s=L("h1"),t=Ie(r),this.h()},l(l){s=D(l,"H1",{class:!0});var n=Fe(s);t=Be(n,r),n.forEach(o),this.h()},h(){u(s,"class","title")},m(l,n){c(l,s,n),Ee(s,t)},p:le,d(l){l&&o(s)}}}function xe(_){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:le,p:le,d:le}}function Je(_){let s,r,t,l,n;return document.title=s=E.title,{c(){r=O(),t=L("meta"),l=O(),n=L("meta"),this.h()},l(a){r=R(a),t=D(a,"META",{property:!0,content:!0}),l=R(a),n=D(a,"META",{name:!0,content:!0}),this.h()},h(){var a,m;u(t,"property","og:title"),u(t,"content",((a=E.og)==null?void 0:a.title)??E.title),u(n,"name","twitter:title"),u(n,"content",((m=E.og)==null?void 0:m.title)??E.title)},m(a,m){c(a,r,m),c(a,t,m),c(a,l,m),c(a,n,m)},p(a,m){m&0&&s!==(s=E.title)&&(document.title=s)},d(a){a&&(o(r),o(t),o(l),o(n))}}}function Qe(_){var n,a;let s,r,t=(E.description||((n=E.og)==null?void 0:n.description))&&Xe(),l=((a=E.og)==null?void 0:a.image)&&Ke();return{c(){t&&t.c(),s=O(),l&&l.c(),r=ue()},l(m){t&&t.l(m),s=R(m),l&&l.l(m),r=ue()},m(m,d){t&&t.m(m,d),c(m,s,d),l&&l.m(m,d),c(m,r,d)},p(m,d){var F,h;(E.description||(F=E.og)!=null&&F.description)&&t.p(m,d),(h=E.og)!=null&&h.image&&l.p(m,d)},d(m){m&&(o(s),o(r)),t&&t.d(m),l&&l.d(m)}}}function Xe(_){let s,r,t,l,n;return{c(){s=L("meta"),r=O(),t=L("meta"),l=O(),n=L("meta"),this.h()},l(a){s=D(a,"META",{name:!0,content:!0}),r=R(a),t=D(a,"META",{property:!0,content:!0}),l=R(a),n=D(a,"META",{name:!0,content:!0}),this.h()},h(){var a,m,d;u(s,"name","description"),u(s,"content",E.description??((a=E.og)==null?void 0:a.description)),u(t,"property","og:description"),u(t,"content",((m=E.og)==null?void 0:m.description)??E.description),u(n,"name","twitter:description"),u(n,"content",((d=E.og)==null?void 0:d.description)??E.description)},m(a,m){c(a,s,m),c(a,r,m),c(a,t,m),c(a,l,m),c(a,n,m)},p:le,d(a){a&&(o(s),o(r),o(t),o(l),o(n))}}}function Ke(_){let s,r,t;return{c(){s=L("meta"),r=O(),t=L("meta"),this.h()},l(l){s=D(l,"META",{property:!0,content:!0}),r=R(l),t=D(l,"META",{name:!0,content:!0}),this.h()},h(){var l,n;u(s,"property","og:image"),u(s,"content",Ne((l=E.og)==null?void 0:l.image)),u(t,"name","twitter:image"),u(t,"content",Ne((n=E.og)==null?void 0:n.image))},m(l,n){c(l,s,n),c(l,r,n),c(l,t,n)},p:le,d(l){l&&(o(s),o(r),o(t))}}}function Ce(_){let s,r;return s=new Se({props:{queryID:"pareto_curve",queryResult:_[0]}}),{c(){x(s.$$.fragment)},l(t){j(s.$$.fragment,t)},m(t,l){q(s,t,l),r=!0},p(t,l){const n={};l[0]&1&&(n.queryResult=t[0]),s.$set(n)},i(t){r||(S(s.$$.fragment,t),r=!0)},o(t){M(s.$$.fragment,t),r=!1},d(t){P(s,t)}}}function Me(_){let s,r;return s=new Se({props:{queryID:"segment_share",queryResult:_[1]}}),{c(){x(s.$$.fragment)},l(t){j(s.$$.fragment,t)},m(t,l){q(s,t,l),r=!0},p(t,l){const n={};l[0]&2&&(n.queryResult=t[1]),s.$set(n)},i(t){r||(S(s.$$.fragment,t),r=!0)},o(t){M(s.$$.fragment,t),r=!1},d(t){P(s,t)}}}function Ue(_){let s,r;return s=new Se({props:{queryID:"segment_metrics",queryResult:_[2]}}),{c(){x(s.$$.fragment)},l(t){j(s.$$.fragment,t)},m(t,l){q(s,t,l),r=!0},p(t,l){const n={};l[0]&4&&(n.queryResult=t[2]),s.$set(n)},i(t){r||(S(s.$$.fragment,t),r=!0)},o(t){M(s.$$.fragment,t),r=!1},d(t){P(s,t)}}}function ve(_){let s,r;return s=new Se({props:{queryID:"member_nonmember_mix",queryResult:_[3]}}),{c(){x(s.$$.fragment)},l(t){j(s.$$.fragment,t)},m(t,l){q(s,t,l),r=!0},p(t,l){const n={};l[0]&8&&(n.queryResult=t[3]),s.$set(n)},i(t){r||(S(s.$$.fragment,t),r=!0)},o(t){M(s.$$.fragment,t),r=!1},d(t){P(s,t)}}}function ze(_){let s,r,t,l,n,a,m,d,F,h,J='<a href="#顧客累積売上カーブ-パレート分析">顧客累積売上カーブ (パレート分析)</a>',B,U,$,b,ae='<a href="#ロイヤル--中堅--ライト-の人数比-vs-売上シェア">ロイヤル / 中堅 / ライト の人数比 vs 売上シェア</a>',Q,v,I,H,re='<a href="#セグメント別-平均客単価">セグメント別 平均客単価</a>',X,k,W,T,K='<a href="#セグメント別-平均来店回数">セグメント別 平均来店回数</a>',z,Y,ee,C,w='<a href="#会員--非会員-カテゴリミックス">会員 / 非会員 カテゴリミックス</a>',G,V,te,y=typeof E<"u"&&E.title&&E.hide_title!==!0&&je();function f(e,i){return typeof E<"u"&&E.title?Je:xe}let ie=f()(_),Z=typeof E=="object"&&Qe(),g=_[0]&&Ce(_),A=_[1]&&Me(_),p=_[2]&&Ue(_),N=_[3]&&ve(_);return U=new qe({props:{data:_[0],x:"customer_pct",y:["sales_pct","line_45"],xFmt:"0.0",yFmt:"0.0",title:"顧客累積比 (%) vs 累積売上 (%) - 45 度参照線あり"}}),v=new ce({props:{data:_[1],x:"metric",y:"value",series:"segment",yFmt:"0.0",type:"stacked100",title:"セグメント別 人数比 vs 売上シェア (%)",swapXY:"true"}}),k=new ce({props:{data:_[2],x:"segment",y:"avg_transaction",yFmt:"#,##0",title:"セグメント別 平均客単価 (円)",sort:"false"}}),Y=new ce({props:{data:_[2],x:"segment",y:"avg_visits",yFmt:"0.0",title:"セグメント別 平均来店回数 (期間内)",sort:"false"}}),V=new ce({props:{data:_[3],x:"segment",y:"total_sales",series:"category_major_name",type:"stacked100",title:"会員 / 非会員 カテゴリ構成比 (%)",swapXY:"true"}}),{c(){y&&y.c(),s=O(),ie.c(),r=L("meta"),t=L("meta"),Z&&Z.c(),l=ue(),n=O(),g&&g.c(),a=O(),A&&A.c(),m=O(),p&&p.c(),d=O(),N&&N.c(),F=O(),h=L("h2"),h.innerHTML=J,B=O(),x(U.$$.fragment),$=O(),b=L("h2"),b.innerHTML=ae,Q=O(),x(v.$$.fragment),I=O(),H=L("h2"),H.innerHTML=re,X=O(),x(k.$$.fragment),W=O(),T=L("h2"),T.innerHTML=K,z=O(),x(Y.$$.fragment),ee=O(),C=L("h2"),C.innerHTML=w,G=O(),x(V.$$.fragment),this.h()},l(e){y&&y.l(e),s=R(e);const i=De("svelte-2igo1p",document.head);ie.l(i),r=D(i,"META",{name:!0,content:!0}),t=D(i,"META",{name:!0,content:!0}),Z&&Z.l(i),l=ue(),i.forEach(o),n=R(e),g&&g.l(e),a=R(e),A&&A.l(e),m=R(e),p&&p.l(e),d=R(e),N&&N.l(e),F=R(e),h=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ne(h)!=="svelte-1mlosme"&&(h.innerHTML=J),B=R(e),j(U.$$.fragment,e),$=R(e),b=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ne(b)!=="svelte-15y7fh6"&&(b.innerHTML=ae),Q=R(e),j(v.$$.fragment,e),I=R(e),H=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ne(H)!=="svelte-1vmf79x"&&(H.innerHTML=re),X=R(e),j(k.$$.fragment,e),W=R(e),T=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ne(T)!=="svelte-thb0dy"&&(T.innerHTML=K),z=R(e),j(Y.$$.fragment,e),ee=R(e),C=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ne(C)!=="svelte-vpiinc"&&(C.innerHTML=w),G=R(e),j(V.$$.fragment,e),this.h()},h(){u(r,"name","twitter:card"),u(r,"content","summary_large_image"),u(t,"name","twitter:site"),u(t,"content","@evidence_dev"),u(h,"class","markdown"),u(h,"id","顧客累積売上カーブ-パレート分析"),u(b,"class","markdown"),u(b,"id","ロイヤル--中堅--ライト-の人数比-vs-売上シェア"),u(H,"class","markdown"),u(H,"id","セグメント別-平均客単価"),u(T,"class","markdown"),u(T,"id","セグメント別-平均来店回数"),u(C,"class","markdown"),u(C,"id","会員--非会員-カテゴリミックス")},m(e,i){y&&y.m(e,i),c(e,s,i),ie.m(document.head,null),Ee(document.head,r),Ee(document.head,t),Z&&Z.m(document.head,null),Ee(document.head,l),c(e,n,i),g&&g.m(e,i),c(e,a,i),A&&A.m(e,i),c(e,m,i),p&&p.m(e,i),c(e,d,i),N&&N.m(e,i),c(e,F,i),c(e,h,i),c(e,B,i),q(U,e,i),c(e,$,i),c(e,b,i),c(e,Q,i),q(v,e,i),c(e,I,i),c(e,H,i),c(e,X,i),q(k,e,i),c(e,W,i),c(e,T,i),c(e,z,i),q(Y,e,i),c(e,ee,i),c(e,C,i),c(e,G,i),q(V,e,i),te=!0},p(e,i){typeof E<"u"&&E.title&&E.hide_title!==!0&&y.p(e,i),ie.p(e,i),typeof E=="object"&&Z.p(e,i),e[0]?g?(g.p(e,i),i[0]&1&&S(g,1)):(g=Ce(e),g.c(),S(g,1),g.m(a.parentNode,a)):g&&(_e(),M(g,1,1,()=>{g=null}),me()),e[1]?A?(A.p(e,i),i[0]&2&&S(A,1)):(A=Me(e),A.c(),S(A,1),A.m(m.parentNode,m)):A&&(_e(),M(A,1,1,()=>{A=null}),me()),e[2]?p?(p.p(e,i),i[0]&4&&S(p,1)):(p=Ue(e),p.c(),S(p,1),p.m(d.parentNode,d)):p&&(_e(),M(p,1,1,()=>{p=null}),me()),e[3]?N?(N.p(e,i),i[0]&8&&S(N,1)):(N=ve(e),N.c(),S(N,1),N.m(F.parentNode,F)):N&&(_e(),M(N,1,1,()=>{N=null}),me());const Oe={};i[0]&1&&(Oe.data=e[0]),U.$set(Oe);const de={};i[0]&2&&(de.data=e[1]),v.$set(de);const fe={};i[0]&4&&(fe.data=e[2]),k.$set(fe);const ge={};i[0]&4&&(ge.data=e[2]),Y.$set(ge);const Ae={};i[0]&8&&(Ae.data=e[3]),V.$set(Ae)},i(e){te||(S(g),S(A),S(p),S(N),S(U.$$.fragment,e),S(v.$$.fragment,e),S(k.$$.fragment,e),S(Y.$$.fragment,e),S(V.$$.fragment,e),te=!0)},o(e){M(g),M(A),M(p),M(N),M(U.$$.fragment,e),M(v.$$.fragment,e),M(k.$$.fragment,e),M(Y.$$.fragment,e),M(V.$$.fragment,e),te=!1},d(e){e&&(o(s),o(n),o(a),o(m),o(d),o(F),o(h),o(B),o($),o(b),o(Q),o(I),o(H),o(X),o(W),o(T),o(z),o(ee),o(C),o(G)),y&&y.d(e),ie.d(e),o(r),o(t),Z&&Z.d(e),o(l),g&&g.d(e),A&&A.d(e),p&&p.d(e),N&&N.d(e),P(U,e),P(v,e),P(k,e),P(Y,e),P(V,e)}}}const E={title:"マーケ / CRM 担当"};function et(_,s,r){let t,l;pe(_,Pe,f=>r(22,t=f)),pe(_,Te,f=>r(28,l=f));let{data:n}=s,{data:a={},customFormattingSettings:m,__db:d,inputs:F}=n;Le(Te,l="e8f2f66a3c3cc442aaff5e8ff058026b",l);let h=Ye(Ge(F));he(h.subscribe(f=>F=f)),be(we,{getCustomFormats:()=>m.customFormats||[]});const J=(f,Re)=>Ze(d.query,f,{query_name:Re});Ve(J),t.params,ye(()=>!0);let B={initialData:void 0,initialError:void 0},U=se`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    sales,
    ROW_NUMBER() OVER (ORDER BY sales DESC) AS rn,
    COUNT(*) OVER () AS total_n,
    SUM(sales) OVER () AS total_sales
  FROM customer_sales
)

SELECT
  ROUND(rn * 100.0 / total_n, 1) AS customer_pct,
  ROUND(SUM(sales) OVER (ORDER BY rn) * 100.0 / total_sales, 1) AS sales_pct,
  ROUND(rn * 100.0 / total_n, 1) AS line_45
FROM ranked
ORDER BY rn`,$=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    sales,
    ROW_NUMBER() OVER (ORDER BY sales DESC) AS rn,
    COUNT(*) OVER () AS total_n,
    SUM(sales) OVER () AS total_sales
  FROM customer_sales
)

SELECT
  ROUND(rn * 100.0 / total_n, 1) AS customer_pct,
  ROUND(SUM(sales) OVER (ORDER BY rn) * 100.0 / total_sales, 1) AS sales_pct,
  ROUND(rn * 100.0 / total_n, 1) AS line_45
FROM ranked
ORDER BY rn`;a.pareto_curve_data&&(a.pareto_curve_data instanceof Error?B.initialError=a.pareto_curve_data:B.initialData=a.pareto_curve_data,a.pareto_curve_columns&&(B.knownColumns=a.pareto_curve_columns));let b,ae=!1;const Q=oe.createReactive({callback:f=>{r(0,b=f)},execFn:J},{id:"pareto_curve",...B});Q($,{noResolve:U,...B}),globalThis[Symbol.for("pareto_curve")]={get value(){return b}};let v={initialData:void 0,initialError:void 0},I=se`WITH customer_sales AS (
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
    sales,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

agg AS (
  SELECT
    segment,
    COUNT(*) AS n,
    SUM(sales) AS total_sales
  FROM segmented
  GROUP BY segment
),

shares AS (
  SELECT
    segment,
    ROUND(n * 100.0 / SUM(n) OVER (), 1) AS customer_share_pct,
    ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS sales_share_pct
  FROM agg
)

SELECT
  '人数比' AS metric,
  segment,
  customer_share_pct AS value
FROM shares
UNION ALL
SELECT
  '売上シェア' AS metric,
  segment,
  sales_share_pct AS value
FROM shares
ORDER BY metric ASC, segment ASC`,H=`WITH customer_sales AS (
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
    sales,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

agg AS (
  SELECT
    segment,
    COUNT(*) AS n,
    SUM(sales) AS total_sales
  FROM segmented
  GROUP BY segment
),

shares AS (
  SELECT
    segment,
    ROUND(n * 100.0 / SUM(n) OVER (), 1) AS customer_share_pct,
    ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS sales_share_pct
  FROM agg
)

SELECT
  '人数比' AS metric,
  segment,
  customer_share_pct AS value
FROM shares
UNION ALL
SELECT
  '売上シェア' AS metric,
  segment,
  sales_share_pct AS value
FROM shares
ORDER BY metric ASC, segment ASC`;a.segment_share_data&&(a.segment_share_data instanceof Error?v.initialError=a.segment_share_data:v.initialData=a.segment_share_data,a.segment_share_columns&&(v.knownColumns=a.segment_share_columns));let re,X=!1;const k=oe.createReactive({callback:f=>{r(1,re=f)},execFn:J},{id:"segment_share",...v});k(H,{noResolve:I,...v}),globalThis[Symbol.for("segment_share")]={get value(){return re}};let W={initialData:void 0,initialError:void 0},T=se`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales,
    COUNT(*) AS visits,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_unit
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
)

SELECT
  segment,
  ROUND(AVG(avg_unit), 0) AS avg_transaction,
  ROUND(AVG(visits), 1) AS avg_visits
FROM segmented
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`,K=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales,
    COUNT(*) AS visits,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_unit
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
)

SELECT
  segment,
  ROUND(AVG(avg_unit), 0) AS avg_transaction,
  ROUND(AVG(visits), 1) AS avg_visits
FROM segmented
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`;a.segment_metrics_data&&(a.segment_metrics_data instanceof Error?W.initialError=a.segment_metrics_data:W.initialData=a.segment_metrics_data,a.segment_metrics_columns&&(W.knownColumns=a.segment_metrics_columns));let z,Y=!1;const ee=oe.createReactive({callback:f=>{r(2,z=f)},execFn:J},{id:"segment_metrics",...W});ee(K,{noResolve:T,...W}),globalThis[Symbol.for("segment_metrics")]={get value(){return z}};let C={initialData:void 0,initialError:void 0},w=se`WITH base AS (
  SELECT
    CASE
      WHEN r.customer_id <> 'ZZ000000000000' THEN '会員'
      ELSE '非会員'
    END AS segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY segment ASC, total_sales DESC`,G=`WITH base AS (
  SELECT
    CASE
      WHEN r.customer_id <> 'ZZ000000000000' THEN '会員'
      ELSE '非会員'
    END AS segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY segment ASC, total_sales DESC`;a.member_nonmember_mix_data&&(a.member_nonmember_mix_data instanceof Error?C.initialError=a.member_nonmember_mix_data:C.initialData=a.member_nonmember_mix_data,a.member_nonmember_mix_columns&&(C.knownColumns=a.member_nonmember_mix_columns));let V,te=!1;const y=oe.createReactive({callback:f=>{r(3,V=f)},execFn:J},{id:"member_nonmember_mix",...C});return y(G,{noResolve:w,...C}),globalThis[Symbol.for("member_nonmember_mix")]={get value(){return V}},_.$$set=f=>{"data"in f&&r(4,n=f.data)},_.$$.update=()=>{_.$$.dirty[0]&16&&r(5,{data:a={},customFormattingSettings:m,__db:d}=n,a),_.$$.dirty[0]&32&&$e.set(Object.keys(a).length>0),_.$$.dirty[0]&4194304&&t.params,_.$$.dirty[0]&960&&(U||!ae?U||(Q($,{noResolve:U,...B}),r(9,ae=!0)):Q($,{noResolve:U})),_.$$.dirty[0]&15360&&(I||!X?I||(k(H,{noResolve:I,...v}),r(13,X=!0)):k(H,{noResolve:I})),_.$$.dirty[0]&245760&&(T||!Y?T||(ee(K,{noResolve:T,...W}),r(17,Y=!0)):ee(K,{noResolve:T})),_.$$.dirty[0]&3932160&&(w||!te?w||(y(G,{noResolve:w,...C}),r(21,te=!0)):y(G,{noResolve:w}))},r(7,U=se`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    sales,
    ROW_NUMBER() OVER (ORDER BY sales DESC) AS rn,
    COUNT(*) OVER () AS total_n,
    SUM(sales) OVER () AS total_sales
  FROM customer_sales
)

SELECT
  ROUND(rn * 100.0 / total_n, 1) AS customer_pct,
  ROUND(SUM(sales) OVER (ORDER BY rn) * 100.0 / total_sales, 1) AS sales_pct,
  ROUND(rn * 100.0 / total_n, 1) AS line_45
FROM ranked
ORDER BY rn`),r(8,$=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    sales,
    ROW_NUMBER() OVER (ORDER BY sales DESC) AS rn,
    COUNT(*) OVER () AS total_n,
    SUM(sales) OVER () AS total_sales
  FROM customer_sales
)

SELECT
  ROUND(rn * 100.0 / total_n, 1) AS customer_pct,
  ROUND(SUM(sales) OVER (ORDER BY rn) * 100.0 / total_sales, 1) AS sales_pct,
  ROUND(rn * 100.0 / total_n, 1) AS line_45
FROM ranked
ORDER BY rn`),r(11,I=se`WITH customer_sales AS (
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
    sales,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

agg AS (
  SELECT
    segment,
    COUNT(*) AS n,
    SUM(sales) AS total_sales
  FROM segmented
  GROUP BY segment
),

shares AS (
  SELECT
    segment,
    ROUND(n * 100.0 / SUM(n) OVER (), 1) AS customer_share_pct,
    ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS sales_share_pct
  FROM agg
)

SELECT
  '人数比' AS metric,
  segment,
  customer_share_pct AS value
FROM shares
UNION ALL
SELECT
  '売上シェア' AS metric,
  segment,
  sales_share_pct AS value
FROM shares
ORDER BY metric ASC, segment ASC`),r(12,H=`WITH customer_sales AS (
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
    sales,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

agg AS (
  SELECT
    segment,
    COUNT(*) AS n,
    SUM(sales) AS total_sales
  FROM segmented
  GROUP BY segment
),

shares AS (
  SELECT
    segment,
    ROUND(n * 100.0 / SUM(n) OVER (), 1) AS customer_share_pct,
    ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS sales_share_pct
  FROM agg
)

SELECT
  '人数比' AS metric,
  segment,
  customer_share_pct AS value
FROM shares
UNION ALL
SELECT
  '売上シェア' AS metric,
  segment,
  sales_share_pct AS value
FROM shares
ORDER BY metric ASC, segment ASC`),r(15,T=se`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales,
    COUNT(*) AS visits,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_unit
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
)

SELECT
  segment,
  ROUND(AVG(avg_unit), 0) AS avg_transaction,
  ROUND(AVG(visits), 1) AS avg_visits
FROM segmented
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`),r(16,K=`WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales,
    COUNT(*) AS visits,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_unit
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
)

SELECT
  segment,
  ROUND(AVG(avg_unit), 0) AS avg_transaction,
  ROUND(AVG(visits), 1) AS avg_visits
FROM segmented
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC`),r(19,w=se`WITH base AS (
  SELECT
    CASE
      WHEN r.customer_id <> 'ZZ000000000000' THEN '会員'
      ELSE '非会員'
    END AS segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY segment ASC, total_sales DESC`),r(20,G=`WITH base AS (
  SELECT
    CASE
      WHEN r.customer_id <> 'ZZ000000000000' THEN '会員'
      ELSE '非会員'
    END AS segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY segment ASC, total_sales DESC`),[b,re,z,V,n,a,B,U,$,ae,v,I,H,X,W,T,K,Y,C,w,G,te,t]}class ot extends ke{constructor(s){super(),We(this,s,et,ze,He,{data:4},null,[-1,-1])}}export{ot as component};
