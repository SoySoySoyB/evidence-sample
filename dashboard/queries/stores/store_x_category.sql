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
),

food_share AS (
  SELECT
    store_name,
    SUM(CASE WHEN category_major_name = '惣菜' THEN share_pct ELSE 0 END)
      AS food_share_pct
  FROM with_share
  GROUP BY store_name
)

SELECT
  ws.store_name,
  ws.category_major_name,
  ws.share_pct,
  DENSE_RANK() OVER (ORDER BY fs.food_share_pct DESC) AS sort_order
FROM with_share ws
INNER JOIN food_share fs ON ws.store_name = fs.store_name
ORDER BY sort_order ASC, ws.category_major_name ASC
