WITH base AS (
  SELECT
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name
)

SELECT
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM base
ORDER BY total_sales DESC
