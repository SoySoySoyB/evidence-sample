WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    sales,
    ROW_NUMBER() OVER (ORDER BY sales DESC) AS rn,
    COUNT(*) OVER () AS total_n,
    SUM(sales) OVER () AS total_sales
  FROM customer_sales
)

SELECT
  ROUND(rn * 100.0 / total_n, 1) AS customer_pct,
  ROUND(SUM(sales) OVER (ORDER BY rn) * 100.0 / total_sales, 1) AS sales_pct,
  ROUND(rn * 100.0 / total_n, 1) AS line_45
FROM ranked
ORDER BY rn
