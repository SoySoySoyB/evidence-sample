---
title: 商品 / カテゴリ担当
queries:
  - medium_category_quadrant: products/medium_category_quadrant.sql
  - star_categories_monthly: products/star_categories_monthly.sql
  - declining_categories_monthly: products/declining_categories_monthly.sql
---

## 中カテゴリ 売上 × YoY 象限分析 (2019 1-10 月 vs 2018 1-10 月)

<ScatterPlot
    data={medium_category_quadrant}
    x=total_sales
    y=yoy_pct
    series=quadrant
    xFmt="#,##0"
    yFmt="0.0"
    title="中カテゴリ 売上 × YoY 成長率"
/>

## 中カテゴリ 象限別ランキング

<DataTable data={medium_category_quadrant} rows=20 search=true sortable=true>
    <Column id=category_major_name title="大カテゴリ" />
    <Column id=category_medium_name title="中カテゴリ" />
    <Column id=quadrant title="象限" />
    <Column id=total_sales title="2019 1-10 月 売上" fmt="#,##0" contentType=bar />
    <Column id=yoy_pct title="YoY (%)" fmt="0.0" contentType=bar />
    <Column id=share_pct title="シェア (%)" fmt="0.0" />
</DataTable>

## 成長スター カテゴリの月次推移

<LineChart
    data={star_categories_monthly}
    x=year_month
    y=total_sales
    series=category_medium_name
    yFmt="#,##0"
    title="成長スター カテゴリ 月次売上"
    markers=true
/>

## 衰退 カテゴリの月次推移

<LineChart
    data={declining_categories_monthly}
    x=year_month
    y=total_sales
    series=category_medium_name
    yFmt="#,##0"
    title="衰退 カテゴリ 月次売上"
    markers=true
/>
