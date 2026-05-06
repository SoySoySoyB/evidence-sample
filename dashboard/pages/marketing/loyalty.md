---
title: ロイヤル層
queries:
  - segment_category_mix: marketing/segment_category_mix.sql
  - segment_category_count: marketing/segment_category_count.sql
---

## 層別 大カテゴリ構成比

<BarChart
    data={segment_category_mix}
    x=segment
    y=total_sales
    series=category_major_name
    type=stacked100
    title="層別 大カテゴリ構成比 (%)"
    swapXY=true
/>

## 層別 平均保有大カテゴリ数

<BarChart
    data={segment_category_count}
    x=segment
    y=avg_category_count
    yFmt="0.00"
    title="層別 1 顧客あたり平均購入大カテゴリ数"
    sort=false
    labels=true
    labelFmt="0.00"
/>
