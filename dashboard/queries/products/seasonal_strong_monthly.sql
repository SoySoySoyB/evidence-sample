SELECT
  CAST(CAST(r.sales_ymd AS INTEGER) / 100 % 100 AS INTEGER) AS month,
  c.category_medium_name,
  SUM(r.amount) AS total_sales
FROM retail.receipt r
INNER JOIN retail.product p ON r.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
WHERE c.category_major_name LIKE '${inputs.selected_major_category.value}'
GROUP BY month, c.category_medium_name
ORDER BY month, c.category_medium_name
