WITH store_kpi AS (
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
ORDER BY sales_per_area DESC
