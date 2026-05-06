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
)

SELECT
  category_major_name,
  category_medium_name,
  ROUND(MAX(month_sales) / MIN(month_sales), 2) AS peak_ratio,
  ROUND(MAX(month_sales), 0) AS max_month_sales,
  ROUND(MIN(month_sales), 0) AS min_month_sales
FROM monthly
GROUP BY category_major_name, category_medium_name
ORDER BY peak_ratio DESC
