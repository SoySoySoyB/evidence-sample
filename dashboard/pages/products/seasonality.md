---
title: 季節性
queries:
  - medium_category_seasonality: products/medium_category_seasonality.sql
  - peak_ratio_ranking: products/peak_ratio_ranking.sql
  - seasonal_strong_monthly: products/seasonal_strong_monthly.sql
  - major_categories: products/major_categories.sql
---

## 中カテゴリ × 月 季節指数ヒートマップ

<Heatmap
    data={medium_category_seasonality}
    x=month
    y=category_medium_name
    value=seasonal_index
    valueFmt="0.00"
    title="中カテゴリ × 月 季節指数 (年平均月商=1.0)"
/>

## ピーク比ランキング

<DataTable data={peak_ratio_ranking} rows=20 search=true sortable=true>
    <Column id=category_major_name title="大カテゴリ" />
    <Column id=category_medium_name title="中カテゴリ" />
    <Column id=peak_ratio title="ピーク比" fmt="0.00" contentType=bar />
    <Column id=max_month_sales title="最大月売上" fmt="#,##0" />
    <Column id=min_month_sales title="最小月売上" fmt="#,##0" />
</DataTable>

## 大カテゴリ別 月次推移 (季節性確認)

<Dropdown name=selected_major_category data={major_categories} value=category_major_name>
    <DropdownOption value="%" valueLabel="全大カテゴリ" />
</Dropdown>

<LineChart
    data={seasonal_strong_monthly}
    x=month
    xType=category
    sort=false
    y=total_sales
    series=category_medium_name
    yFmt="#,##0"
    title="月別 中カテゴリ売上"
    markers=true
/>
