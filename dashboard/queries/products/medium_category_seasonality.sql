WITH monthly AS (
  SELECT
    c.category_major_name,
    c.category_medium_name,
    CAST(CAST(r.sales_ymd AS INTEGER) / 100 % 100 AS INTEGER) AS month,
    SUM(r.amount) AS month_sales
  FROM retail.receipt r
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name, c.category_medium_name, month
),

avg_monthly AS (
  SELECT
    category_medium_name,
    AVG(month_sales) AS avg_month_sales
  FROM monthly
  GROUP BY category_medium_name
)

SELECT
  m.category_major_name,
  m.category_medium_name,
  m.month,
  m.month_sales,
  ROUND(m.month_sales / a.avg_month_sales, 2) AS seasonal_index
FROM monthly m
INNER JOIN avg_monthly a
  ON m.category_medium_name = a.category_medium_name
ORDER BY m.category_medium_name, m.month
