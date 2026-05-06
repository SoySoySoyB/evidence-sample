---
title: マーケ / CRM 担当
queries:
  - pareto_curve: marketing/pareto_curve.sql
  - segment_share: marketing/segment_share.sql
  - segment_metrics: marketing/segment_metrics.sql
  - member_nonmember_mix: marketing/member_nonmember_mix.sql
---

## 顧客累積売上カーブ (パレート分析)

<LineChart
data={pareto_curve}
x=customer_pct
y={["sales_pct", "line_45"]}
xFmt="0.0"
yFmt="0.0"
title="顧客累積比 (%) vs 累積売上 (%) - 45 度参照線あり"
/>

## ロイヤル / 中堅 / ライト の人数比 vs 売上シェア

<BarChart
    data={segment_share}
    x=metric
    y=value
    series=segment
    yFmt="0.0"
    type=stacked100
    title="セグメント別 人数比 vs 売上シェア (%)"
    swapXY=true
/>

## セグメント別 平均客単価

<BarChart
    data={segment_metrics}
    x=segment
    y=avg_transaction
    yFmt="#,##0"
    title="セグメント別 平均客単価 (円)"
    sort=false
/>

## セグメント別 平均来店回数

<BarChart
    data={segment_metrics}
    x=segment
    y=avg_visits
    yFmt="0.0"
    title="セグメント別 平均来店回数 (期間内)"
    sort=false
/>

## 会員 / 非会員 カテゴリミックス

<BarChart
    data={member_nonmember_mix}
    x=segment
    y=total_sales
    series=category_major_name
    type=stacked100
    title="会員 / 非会員 カテゴリ構成比 (%)"
    swapXY=true
/>
