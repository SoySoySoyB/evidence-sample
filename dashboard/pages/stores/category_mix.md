---
title: カテゴリミックス
queries:
  - store_x_category: stores/store_x_category.sql
  - category_dispersion: stores/category_dispersion.sql
---

## 店舗 × 大カテゴリ 構成比ヒートマップ (惣菜構成比降順)

<Heatmap
    data={store_x_category}
    x=category_major_name
    y=store_name
    value=share_pct
    valueFmt="0.0"
/>

## カテゴリミックスのばらつき (店舗間 最大 - 最小)

<DataTable data={category_dispersion} rows=10 sortable=true>
    <Column id=category_major_name title="大カテゴリ" />
    <Column id=max_share title="最大店舗 (%)" fmt="0.0" />
    <Column id=min_share title="最小店舗 (%)" fmt="0.0" />
    <Column id=range_pct title="差 (pt)" fmt="0.0" contentType=bar />
</DataTable>
