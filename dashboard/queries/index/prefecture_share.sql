WITH base AS (
  SELECT
    s.prefecture,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.prefecture
)

SELECT
  prefecture,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC
