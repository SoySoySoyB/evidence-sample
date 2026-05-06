WITH base AS (
  SELECT
    s.store_name,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.store_name, c.category_major_name
),

with_total AS (
  SELECT
    store_name,
    category_major_name,
    total_sales,
    SUM(total_sales) OVER (PARTITION BY store_name) AS store_total
  FROM base
),

with_share AS (
  SELECT
    store_name,
    category_major_name,
    ROUND(total_sales * 100.0 / store_total, 1) AS share_pct
  FROM with_total
)

SELECT
  category_major_name,
  ROUND(MAX(share_pct), 1) AS max_share,
  ROUND(MIN(share_pct), 1) AS min_share,
  ROUND(MAX(share_pct) - MIN(share_pct), 1) AS range_pct
FROM with_share
GROUP BY category_major_name
ORDER BY range_pct DESC
