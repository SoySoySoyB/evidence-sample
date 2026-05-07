import{s as fe,d as f,i as m,a as Q,b as R,c as d,h as me,e as H,f as j,g as K,j as O,k as L,l as te,m as ce,o as ue,n as pe,p as Ee,q as P,r as Se,t as Re,u as de}from"../chunks/scheduler.DbLZmw5B.js";import{S as Oe,i as Ne,d as F,t as b,a as y,c as re,m as U,b as B,e as W,g as ae}from"../chunks/index.DZMbDxCq.js";import{D as Ae,e as ke,s as ye,Q as se,p as Te,b as J,a as _e,r as oe,C as $e}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C88-DVgh.js";import{w as Me}from"../chunks/entry.CKB6EmEz.js";import{h as x,p as Ce}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as be}from"../chunks/stores.ChOsbD0K.js";import{Q as le}from"../chunks/getCompletedData.BOW9Mk2J.js";import{B as De}from"../chunks/BarChart.KTqw9ki5.js";import{S as ge}from"../chunks/ScatterPlot.CaOZ5p3v.js";function qe(c){let r,o=u.title+"",e;return{c(){r=L("h1"),e=de(o),this.h()},l(_){r=H(_,"H1",{class:!0});var i=Se(r);e=Re(i,o),i.forEach(f),this.h()},h(){R(r,"class","title")},m(_,i){m(_,r,i),Q(r,e)},p:P,d(_){_&&f(r)}}}function He(c){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:P,p:P,d:P}}function Le(c){let r,o,e,_,i;return document.title=r=u.title,{c(){o=O(),e=L("meta"),_=O(),i=L("meta"),this.h()},l(a){o=d(a),e=H(a,"META",{property:!0,content:!0}),_=d(a),i=H(a,"META",{name:!0,content:!0}),this.h()},h(){var a,n;R(e,"property","og:title"),R(e,"content",((a=u.og)==null?void 0:a.title)??u.title),R(i,"name","twitter:title"),R(i,"content",((n=u.og)==null?void 0:n.title)??u.title)},m(a,n){m(a,o,n),m(a,e,n),m(a,_,n),m(a,i,n)},p(a,n){n&0&&r!==(r=u.title)&&(document.title=r)},d(a){a&&(f(o),f(e),f(_),f(i))}}}function Ie(c){var i,a;let r,o,e=(u.description||((i=u.og)==null?void 0:i.description))&&Fe(),_=((a=u.og)==null?void 0:a.image)&&Ue();return{c(){e&&e.c(),r=O(),_&&_.c(),o=j()},l(n){e&&e.l(n),r=d(n),_&&_.l(n),o=j()},m(n,p){e&&e.m(n,p),m(n,r,p),_&&_.m(n,p),m(n,o,p)},p(n,p){var M,D;(u.description||(M=u.og)!=null&&M.description)&&e.p(n,p),(D=u.og)!=null&&D.image&&_.p(n,p)},d(n){n&&(f(r),f(o)),e&&e.d(n),_&&_.d(n)}}}function Fe(c){let r,o,e,_,i;return{c(){r=L("meta"),o=O(),e=L("meta"),_=O(),i=L("meta"),this.h()},l(a){r=H(a,"META",{name:!0,content:!0}),o=d(a),e=H(a,"META",{property:!0,content:!0}),_=d(a),i=H(a,"META",{name:!0,content:!0}),this.h()},h(){var a,n,p;R(r,"name","description"),R(r,"content",u.description??((a=u.og)==null?void 0:a.description)),R(e,"property","og:description"),R(e,"content",((n=u.og)==null?void 0:n.description)??u.description),R(i,"name","twitter:description"),R(i,"content",((p=u.og)==null?void 0:p.description)??u.description)},m(a,n){m(a,r,n),m(a,o,n),m(a,e,n),m(a,_,n),m(a,i,n)},p:P,d(a){a&&(f(r),f(o),f(e),f(_),f(i))}}}function Ue(c){let r,o,e;return{c(){r=L("meta"),o=O(),e=L("meta"),this.h()},l(_){r=H(_,"META",{property:!0,content:!0}),o=d(_),e=H(_,"META",{name:!0,content:!0}),this.h()},h(){var _,i;R(r,"property","og:image"),R(r,"content",_e((_=u.og)==null?void 0:_.image)),R(e,"name","twitter:image"),R(e,"content",_e((i=u.og)==null?void 0:i.image))},m(_,i){m(_,r,i),m(_,o,i),m(_,e,i)},p:P,d(_){_&&(f(r),f(o),f(e))}}}function ie(c){let r,o;return r=new le({props:{queryID:"store_efficiency",queryResult:c[0]}}),{c(){W(r.$$.fragment)},l(e){B(r.$$.fragment,e)},m(e,_){U(r,e,_),o=!0},p(e,_){const i={};_&1&&(i.queryResult=e[0]),r.$set(i)},i(e){o||(y(r.$$.fragment,e),o=!0)},o(e){b(r.$$.fragment,e),o=!1},d(e){F(r,e)}}}function ne(c){let r,o;return r=new le({props:{queryID:"store_top_bottom",queryResult:c[1]}}),{c(){W(r.$$.fragment)},l(e){B(r.$$.fragment,e)},m(e,_){U(r,e,_),o=!0},p(e,_){const i={};_&2&&(i.queryResult=e[1]),r.$set(i)},i(e){o||(y(r.$$.fragment,e),o=!0)},o(e){b(r.$$.fragment,e),o=!1},d(e){F(r,e)}}}function Be(c){let r,o,e,_,i,a,n,p,M,D,N,T,S,g;return r=new J({props:{id:"store_name",title:"店舗"}}),e=new J({props:{id:"prefecture",title:"都道府県"}}),i=new J({props:{id:"floor_area",title:"面積 (㎡)",fmt:"#,##0"}}),n=new J({props:{id:"sales_per_area",title:"㎡あたり売上",fmt:"#,##0",contentType:"bar"}}),M=new J({props:{id:"area_quartile",title:"面積分位"}}),N=new J({props:{id:"efficiency_quartile",title:"効率分位"}}),S=new J({props:{id:"flag",title:"フラグ"}}),{c(){W(r.$$.fragment),o=O(),W(e.$$.fragment),_=O(),W(i.$$.fragment),a=O(),W(n.$$.fragment),p=O(),W(M.$$.fragment),D=O(),W(N.$$.fragment),T=O(),W(S.$$.fragment)},l(s){B(r.$$.fragment,s),o=d(s),B(e.$$.fragment,s),_=d(s),B(i.$$.fragment,s),a=d(s),B(n.$$.fragment,s),p=d(s),B(M.$$.fragment,s),D=d(s),B(N.$$.fragment,s),T=d(s),B(S.$$.fragment,s)},m(s,E){U(r,s,E),m(s,o,E),U(e,s,E),m(s,_,E),U(i,s,E),m(s,a,E),U(n,s,E),m(s,p,E),U(M,s,E),m(s,D,E),U(N,s,E),m(s,T,E),U(S,s,E),g=!0},p:P,i(s){g||(y(r.$$.fragment,s),y(e.$$.fragment,s),y(i.$$.fragment,s),y(n.$$.fragment,s),y(M.$$.fragment,s),y(N.$$.fragment,s),y(S.$$.fragment,s),g=!0)},o(s){b(r.$$.fragment,s),b(e.$$.fragment,s),b(i.$$.fragment,s),b(n.$$.fragment,s),b(M.$$.fragment,s),b(N.$$.fragment,s),b(S.$$.fragment,s),g=!1},d(s){s&&(f(o),f(_),f(a),f(p),f(D),f(T)),F(r,s),F(e,s),F(i,s),F(n,s),F(M,s),F(N,s),F(S,s)}}}function We(c){let r,o,e,_,i,a,n,p,M='<a href="#店舗-売場面積--面積あたり売上">店舗 売場面積 × 面積あたり売上</a>',D,N,T,S,g='<a href="#面積分位--効率分位-フラグつき店舗一覧">面積分位 × 効率分位 フラグつき店舗一覧</a>',s,E,v,$,Y='<a href="#効率-上位-5--下位-5-店舗">効率 上位 5 / 下位 5 店舗</a>',w,I,V,q=typeof u<"u"&&u.title&&u.hide_title!==!0&&qe();function C(t,l){return typeof u<"u"&&u.title?Le:He}let G=C()(c),h=typeof u=="object"&&Ie(),A=c[0]&&ie(c),k=c[1]&&ne(c);return N=new ge({props:{data:c[0],x:"floor_area",y:"sales_per_area",series:"flag",xFmt:"#,##0",yFmt:"#,##0",title:"店舗 面積 × 効率 (フラグ別)"}}),E=new Ae({props:{data:c[0],rows:"20",search:"true",sortable:"true",$$slots:{default:[Be]},$$scope:{ctx:c}}}),I=new De({props:{data:c[1],x:"store_name",y:"sales_per_area",series:"rank_group",yFmt:"#,##0",title:"効率上位 5 / 下位 5 店舗 (㎡あたり売上)",swapXY:"true"}}),{c(){q&&q.c(),r=O(),G.c(),o=L("meta"),e=L("meta"),h&&h.c(),_=j(),i=O(),A&&A.c(),a=O(),k&&k.c(),n=O(),p=L("h2"),p.innerHTML=M,D=O(),W(N.$$.fragment),T=O(),S=L("h2"),S.innerHTML=g,s=O(),W(E.$$.fragment),v=O(),$=L("h2"),$.innerHTML=Y,w=O(),W(I.$$.fragment),this.h()},l(t){q&&q.l(t),r=d(t);const l=me("svelte-2igo1p",document.head);G.l(l),o=H(l,"META",{name:!0,content:!0}),e=H(l,"META",{name:!0,content:!0}),h&&h.l(l),_=j(),l.forEach(f),i=d(t),A&&A.l(t),a=d(t),k&&k.l(t),n=d(t),p=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),K(p)!=="svelte-ke0eow"&&(p.innerHTML=M),D=d(t),B(N.$$.fragment,t),T=d(t),S=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),K(S)!=="svelte-15rxr5w"&&(S.innerHTML=g),s=d(t),B(E.$$.fragment,t),v=d(t),$=H(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),K($)!=="svelte-1chmd0"&&($.innerHTML=Y),w=d(t),B(I.$$.fragment,t),this.h()},h(){R(o,"name","twitter:card"),R(o,"content","summary_large_image"),R(e,"name","twitter:site"),R(e,"content","@evidence_dev"),R(p,"class","markdown"),R(p,"id","店舗-売場面積--面積あたり売上"),R(S,"class","markdown"),R(S,"id","面積分位--効率分位-フラグつき店舗一覧"),R($,"class","markdown"),R($,"id","効率-上位-5--下位-5-店舗")},m(t,l){q&&q.m(t,l),m(t,r,l),G.m(document.head,null),Q(document.head,o),Q(document.head,e),h&&h.m(document.head,null),Q(document.head,_),m(t,i,l),A&&A.m(t,l),m(t,a,l),k&&k.m(t,l),m(t,n,l),m(t,p,l),m(t,D,l),U(N,t,l),m(t,T,l),m(t,S,l),m(t,s,l),U(E,t,l),m(t,v,l),m(t,$,l),m(t,w,l),U(I,t,l),V=!0},p(t,[l]){typeof u<"u"&&u.title&&u.hide_title!==!0&&q.p(t,l),G.p(t,l),typeof u=="object"&&h.p(t,l),t[0]?A?(A.p(t,l),l&1&&y(A,1)):(A=ie(t),A.c(),y(A,1),A.m(a.parentNode,a)):A&&(ae(),b(A,1,1,()=>{A=null}),re()),t[1]?k?(k.p(t,l),l&2&&y(k,1)):(k=ne(t),k.c(),y(k,1),k.m(n.parentNode,n)):k&&(ae(),b(k,1,1,()=>{k=null}),re());const Z={};l&1&&(Z.data=t[0]),N.$set(Z);const X={};l&1&&(X.data=t[0]),l&16777216&&(X.$$scope={dirty:l,ctx:t}),E.$set(X);const ee={};l&2&&(ee.data=t[1]),I.$set(ee)},i(t){V||(y(A),y(k),y(N.$$.fragment,t),y(E.$$.fragment,t),y(I.$$.fragment,t),V=!0)},o(t){b(A),b(k),b(N.$$.fragment,t),b(E.$$.fragment,t),b(I.$$.fragment,t),V=!1},d(t){t&&(f(r),f(i),f(a),f(n),f(p),f(D),f(T),f(S),f(s),f(v),f($),f(w)),q&&q.d(t),G.d(t),f(o),f(e),h&&h.d(t),f(_),A&&A.d(t),k&&k.d(t),F(N,t),F(E,t),F(I,t)}}}const u={title:"店舗運営担当"};function Ye(c,r,o){let e,_;te(c,be,C=>o(12,e=C)),te(c,oe,C=>o(18,_=C));let{data:i}=r,{data:a={},customFormattingSettings:n,__db:p,inputs:M}=i;ce(oe,_="8fe797825c542d4b361672d9d141a18d",_);let D=ke(Me(M));ue(D.subscribe(C=>M=C)),pe($e,{getCustomFormats:()=>n.customFormats||[]});const N=(C,z)=>Ce(p.query,C,{query_name:z});ye(N),e.params,Ee(()=>!0);let T={initialData:void 0,initialError:void 0},S=x`WITH store_kpi AS (
  SELECT
    s.store_cd,
    s.store_name,
    s.prefecture,
    s.floor_area,
    SUM(r.amount) AS total_sales,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_cd, s.store_name, s.prefecture, s.floor_area
),

medians AS (
  SELECT
    MEDIAN(floor_area) AS median_area,
    MEDIAN(sales_per_area) AS median_efficiency
  FROM store_kpi
),

quantiled AS (
  SELECT
    sk.store_cd,
    sk.store_name,
    sk.prefecture,
    sk.floor_area,
    sk.total_sales,
    sk.sales_per_area,
    NTILE(4) OVER (ORDER BY sk.floor_area) AS area_quartile,
    NTILE(4) OVER (ORDER BY sk.sales_per_area) AS efficiency_quartile,
    m.median_area,
    m.median_efficiency
  FROM store_kpi sk
  CROSS JOIN medians m
)

SELECT
  store_cd,
  store_name,
  prefecture,
  floor_area,
  total_sales,
  sales_per_area,
  area_quartile,
  efficiency_quartile,
  median_area,
  median_efficiency,
  CASE
    WHEN area_quartile >= 3 AND efficiency_quartile <= 2 THEN '指導最優先'
    WHEN area_quartile <= 2 AND efficiency_quartile >= 3 THEN 'ベンチマーク'
    WHEN efficiency_quartile = 1 THEN '効率下位'
    WHEN efficiency_quartile = 4 THEN '効率上位'
    ELSE '中位'
  END AS flag
FROM quantiled
ORDER BY sales_per_area DESC`,g=`WITH store_kpi AS (
  SELECT
    s.store_cd,
    s.store_name,
    s.prefecture,
    s.floor_area,
    SUM(r.amount) AS total_sales,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_cd, s.store_name, s.prefecture, s.floor_area
),

medians AS (
  SELECT
    MEDIAN(floor_area) AS median_area,
    MEDIAN(sales_per_area) AS median_efficiency
  FROM store_kpi
),

quantiled AS (
  SELECT
    sk.store_cd,
    sk.store_name,
    sk.prefecture,
    sk.floor_area,
    sk.total_sales,
    sk.sales_per_area,
    NTILE(4) OVER (ORDER BY sk.floor_area) AS area_quartile,
    NTILE(4) OVER (ORDER BY sk.sales_per_area) AS efficiency_quartile,
    m.median_area,
    m.median_efficiency
  FROM store_kpi sk
  CROSS JOIN medians m
)

SELECT
  store_cd,
  store_name,
  prefecture,
  floor_area,
  total_sales,
  sales_per_area,
  area_quartile,
  efficiency_quartile,
  median_area,
  median_efficiency,
  CASE
    WHEN area_quartile >= 3 AND efficiency_quartile <= 2 THEN '指導最優先'
    WHEN area_quartile <= 2 AND efficiency_quartile >= 3 THEN 'ベンチマーク'
    WHEN efficiency_quartile = 1 THEN '効率下位'
    WHEN efficiency_quartile = 4 THEN '効率上位'
    ELSE '中位'
  END AS flag
FROM quantiled
ORDER BY sales_per_area DESC`;a.store_efficiency_data&&(a.store_efficiency_data instanceof Error?T.initialError=a.store_efficiency_data:T.initialData=a.store_efficiency_data,a.store_efficiency_columns&&(T.knownColumns=a.store_efficiency_columns));let s,E=!1;const v=se.createReactive({callback:C=>{o(0,s=C)},execFn:N},{id:"store_efficiency",...T});v(g,{noResolve:S,...T}),globalThis[Symbol.for("store_efficiency")]={get value(){return s}};let $={initialData:void 0,initialError:void 0},Y=x`WITH store_efficiency AS (
  SELECT
    s.store_name,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name, s.floor_area
),

ranked AS (
  SELECT
    store_name,
    sales_per_area,
    ROW_NUMBER() OVER (ORDER BY sales_per_area DESC) AS rn_top,
    ROW_NUMBER() OVER (ORDER BY sales_per_area ASC) AS rn_bottom
  FROM store_efficiency
)

SELECT
  store_name,
  sales_per_area,
  '上位 5' AS rank_group,
  rn_top AS rank_in_group
FROM ranked
WHERE rn_top <= 5
UNION ALL
SELECT
  store_name,
  sales_per_area,
  '下位 5' AS rank_group,
  rn_bottom AS rank_in_group
FROM ranked
WHERE rn_bottom <= 5
ORDER BY rank_group ASC, rank_in_group ASC`,w=`WITH store_efficiency AS (
  SELECT
    s.store_name,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name, s.floor_area
),

ranked AS (
  SELECT
    store_name,
    sales_per_area,
    ROW_NUMBER() OVER (ORDER BY sales_per_area DESC) AS rn_top,
    ROW_NUMBER() OVER (ORDER BY sales_per_area ASC) AS rn_bottom
  FROM store_efficiency
)

SELECT
  store_name,
  sales_per_area,
  '上位 5' AS rank_group,
  rn_top AS rank_in_group
FROM ranked
WHERE rn_top <= 5
UNION ALL
SELECT
  store_name,
  sales_per_area,
  '下位 5' AS rank_group,
  rn_bottom AS rank_in_group
FROM ranked
WHERE rn_bottom <= 5
ORDER BY rank_group ASC, rank_in_group ASC`;a.store_top_bottom_data&&(a.store_top_bottom_data instanceof Error?$.initialError=a.store_top_bottom_data:$.initialData=a.store_top_bottom_data,a.store_top_bottom_columns&&($.knownColumns=a.store_top_bottom_columns));let I,V=!1;const q=se.createReactive({callback:C=>{o(1,I=C)},execFn:N},{id:"store_top_bottom",...$});return q(w,{noResolve:Y,...$}),globalThis[Symbol.for("store_top_bottom")]={get value(){return I}},c.$$set=C=>{"data"in C&&o(2,i=C.data)},c.$$.update=()=>{c.$$.dirty&4&&o(3,{data:a={},customFormattingSettings:n,__db:p}=i,a),c.$$.dirty&8&&Te.set(Object.keys(a).length>0),c.$$.dirty&4096&&e.params,c.$$.dirty&240&&(S||!E?S||(v(g,{noResolve:S,...T}),o(7,E=!0)):v(g,{noResolve:S})),c.$$.dirty&3840&&(Y||!V?Y||(q(w,{noResolve:Y,...$}),o(11,V=!0)):q(w,{noResolve:Y}))},o(5,S=x`WITH store_kpi AS (
  SELECT
    s.store_cd,
    s.store_name,
    s.prefecture,
    s.floor_area,
    SUM(r.amount) AS total_sales,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_cd, s.store_name, s.prefecture, s.floor_area
),

medians AS (
  SELECT
    MEDIAN(floor_area) AS median_area,
    MEDIAN(sales_per_area) AS median_efficiency
  FROM store_kpi
),

quantiled AS (
  SELECT
    sk.store_cd,
    sk.store_name,
    sk.prefecture,
    sk.floor_area,
    sk.total_sales,
    sk.sales_per_area,
    NTILE(4) OVER (ORDER BY sk.floor_area) AS area_quartile,
    NTILE(4) OVER (ORDER BY sk.sales_per_area) AS efficiency_quartile,
    m.median_area,
    m.median_efficiency
  FROM store_kpi sk
  CROSS JOIN medians m
)

SELECT
  store_cd,
  store_name,
  prefecture,
  floor_area,
  total_sales,
  sales_per_area,
  area_quartile,
  efficiency_quartile,
  median_area,
  median_efficiency,
  CASE
    WHEN area_quartile >= 3 AND efficiency_quartile <= 2 THEN '指導最優先'
    WHEN area_quartile <= 2 AND efficiency_quartile >= 3 THEN 'ベンチマーク'
    WHEN efficiency_quartile = 1 THEN '効率下位'
    WHEN efficiency_quartile = 4 THEN '効率上位'
    ELSE '中位'
  END AS flag
FROM quantiled
ORDER BY sales_per_area DESC`),o(6,g=`WITH store_kpi AS (
  SELECT
    s.store_cd,
    s.store_name,
    s.prefecture,
    s.floor_area,
    SUM(r.amount) AS total_sales,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_cd, s.store_name, s.prefecture, s.floor_area
),

medians AS (
  SELECT
    MEDIAN(floor_area) AS median_area,
    MEDIAN(sales_per_area) AS median_efficiency
  FROM store_kpi
),

quantiled AS (
  SELECT
    sk.store_cd,
    sk.store_name,
    sk.prefecture,
    sk.floor_area,
    sk.total_sales,
    sk.sales_per_area,
    NTILE(4) OVER (ORDER BY sk.floor_area) AS area_quartile,
    NTILE(4) OVER (ORDER BY sk.sales_per_area) AS efficiency_quartile,
    m.median_area,
    m.median_efficiency
  FROM store_kpi sk
  CROSS JOIN medians m
)

SELECT
  store_cd,
  store_name,
  prefecture,
  floor_area,
  total_sales,
  sales_per_area,
  area_quartile,
  efficiency_quartile,
  median_area,
  median_efficiency,
  CASE
    WHEN area_quartile >= 3 AND efficiency_quartile <= 2 THEN '指導最優先'
    WHEN area_quartile <= 2 AND efficiency_quartile >= 3 THEN 'ベンチマーク'
    WHEN efficiency_quartile = 1 THEN '効率下位'
    WHEN efficiency_quartile = 4 THEN '効率上位'
    ELSE '中位'
  END AS flag
FROM quantiled
ORDER BY sales_per_area DESC`),o(9,Y=x`WITH store_efficiency AS (
  SELECT
    s.store_name,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name, s.floor_area
),

ranked AS (
  SELECT
    store_name,
    sales_per_area,
    ROW_NUMBER() OVER (ORDER BY sales_per_area DESC) AS rn_top,
    ROW_NUMBER() OVER (ORDER BY sales_per_area ASC) AS rn_bottom
  FROM store_efficiency
)

SELECT
  store_name,
  sales_per_area,
  '上位 5' AS rank_group,
  rn_top AS rank_in_group
FROM ranked
WHERE rn_top <= 5
UNION ALL
SELECT
  store_name,
  sales_per_area,
  '下位 5' AS rank_group,
  rn_bottom AS rank_in_group
FROM ranked
WHERE rn_bottom <= 5
ORDER BY rank_group ASC, rank_in_group ASC`),o(10,w=`WITH store_efficiency AS (
  SELECT
    s.store_name,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name, s.floor_area
),

ranked AS (
  SELECT
    store_name,
    sales_per_area,
    ROW_NUMBER() OVER (ORDER BY sales_per_area DESC) AS rn_top,
    ROW_NUMBER() OVER (ORDER BY sales_per_area ASC) AS rn_bottom
  FROM store_efficiency
)

SELECT
  store_name,
  sales_per_area,
  '上位 5' AS rank_group,
  rn_top AS rank_in_group
FROM ranked
WHERE rn_top <= 5
UNION ALL
SELECT
  store_name,
  sales_per_area,
  '下位 5' AS rank_group,
  rn_bottom AS rank_in_group
FROM ranked
WHERE rn_bottom <= 5
ORDER BY rank_group ASC, rank_in_group ASC`),[s,I,i,a,T,S,g,E,$,Y,w,V,e]}class je extends Oe{constructor(r){super(),Ne(this,r,Ye,We,fe,{data:2})}}export{je as component};
