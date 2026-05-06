---
title: 曜日 / 時系列
queries:
  - store_dow_heatmap: stores/store_dow_heatmap.sql
---

## 店舗 × 曜日 構成比ヒートマップ (全店平均行を最上段に固定)

<Heatmap
    data={store_dow_heatmap}
    x=dow
    y=store_name
    value=share_pct
    valueFmt="0.0"
/>
