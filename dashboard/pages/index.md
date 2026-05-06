---
title: Retail Dashboard
queries:
  - kpi_summary_yoy: index/kpi_summary_yoy.sql
  - monthly_sales_3y: index/monthly_sales_3y.sql
  - major_category_share: index/major_category_share.sql
  - store_concentration: index/store_concentration.sql
  - prefecture_share: index/prefecture_share.sql
---

## 全社 KPI (2019 1-10 月 vs 2018 1-10 月)

<BigValue
    data={kpi_summary_yoy}
    value=total_sales
    fmt="#,##0"
    title="総売上"
    comparison=total_sales_prev
    comparisonTitle="前年"
    comparisonFmt="#,##0"
/>

<BigValue
    data={kpi_summary_yoy}
    value=transaction_count
    fmt="#,##0"
    title="取引件数"
    comparison=transaction_count_prev
    comparisonTitle="前年"
    comparisonFmt="#,##0"
/>

<BigValue
    data={kpi_summary_yoy}
    value=unique_customers
    fmt="#,##0"
    title="会員顧客数"
    comparison=unique_customers_prev
    comparisonTitle="前年"
    comparisonFmt="#,##0"
/>

<BigValue
    data={kpi_summary_yoy}
    value=avg_transaction
    fmt="#,##0"
    title="平均客単価"
    comparison=avg_transaction_prev
    comparisonTitle="前年"
    comparisonFmt="#,##0"
/>

## 月別売上 (3 年並列)

<LineChart
    data={monthly_sales_3y}
    x=month
    xType=category
    sort=false
    y=total_sales
    yFmt="#,##0"
    series=year
    title="月別 総売上"
    markers=true
/>

## 大カテゴリ売上構成比

<BarChart
    data={major_category_share}
    x=category_major_name
    y=share_pct
    yFmt="0.0"
    title="大カテゴリ別 売上構成比 (%)"
    swapXY=true
/>

## 店舗売上集中度 (上位 5 + その他)

<BarChart
    data={store_concentration}
    x=group_name
    y=share_pct
    yFmt="0.0"
    title="店舗別 売上構成比 (%)"
    swapXY=true
/>

## 都道府県別売上構成比

<BarChart
    data={prefecture_share}
    x=prefecture
    y=share_pct
    yFmt="0.0"
    title="都道府県別 売上構成比 (%)"
    swapXY=true
/>
