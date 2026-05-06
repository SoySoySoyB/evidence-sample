WITH base AS (
  SELECT
    CASE
      WHEN r.customer_id <> 'ZZ000000000000' THEN '会員'
      ELSE '非会員'
    END AS segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY segment ASC, total_sales DESC
