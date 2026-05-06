---
title: 店舗運営担当
queries:
  - store_efficiency: stores/store_efficiency.sql
  - store_top_bottom: stores/store_top_bottom.sql
---

## 店舗 売場面積 × 面積あたり売上

<ScatterPlot
    data={store_efficiency}
    x=floor_area
    y=sales_per_area
    series=flag
    xFmt="#,##0"
    yFmt="#,##0"
    title="店舗 面積 × 効率 (フラグ別)"
/>

## 面積分位 × 効率分位 フラグつき店舗一覧

<DataTable data={store_efficiency} rows=20 search=true sortable=true>
    <Column id=store_name title="店舗" />
    <Column id=prefecture title="都道府県" />
    <Column id=floor_area title="面積 (㎡)" fmt="#,##0" />
    <Column id=sales_per_area title="㎡あたり売上" fmt="#,##0" contentType=bar />
    <Column id=area_quartile title="面積分位" />
    <Column id=efficiency_quartile title="効率分位" />
    <Column id=flag title="フラグ" />
</DataTable>

## 効率 上位 5 / 下位 5 店舗

<BarChart
    data={store_top_bottom}
    x=store_name
    y=sales_per_area
    series=rank_group
    yFmt="#,##0"
    title="効率上位 5 / 下位 5 店舗 (㎡あたり売上)"
    swapXY=true
/>
