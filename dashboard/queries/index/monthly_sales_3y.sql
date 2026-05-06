SELECT
  CAST(CAST(sales_ymd AS INTEGER) / 100 % 100 AS INTEGER) AS month,
  CAST(CAST(CAST(sales_ymd AS INTEGER) / 10000 AS INTEGER) AS VARCHAR) AS year,
  SUM(amount) AS total_sales
FROM retail.receipt
GROUP BY month, year
ORDER BY year, month
