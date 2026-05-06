WITH base AS (
  SELECT
    CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    customer_id,
    amount
  FROM retail.receipt
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    customer_id,
    amount
  FROM base
),

filtered AS (
  SELECT *
  FROM with_ym
  WHERE month <= 10
),

yearly AS (
  SELECT
    year,
    SUM(amount) AS total_sales,
    COUNT(*) AS transaction_count,
    COUNT(DISTINCT customer_id) FILTER (
      WHERE customer_id <> 'ZZ000000000000'
    ) AS unique_customers,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_transaction
  FROM filtered
  GROUP BY year
),

cur AS (
  SELECT *
  FROM yearly
  WHERE year = 2019
),

prev AS (
  SELECT *
  FROM yearly
  WHERE year = 2018
)

SELECT
  cur.total_sales,
  prev.total_sales AS total_sales_prev,
  cur.transaction_count,
  prev.transaction_count AS transaction_count_prev,
  cur.unique_customers,
  prev.unique_customers AS unique_customers_prev,
  cur.avg_transaction,
  prev.avg_transaction AS avg_transaction_prev
FROM cur
CROSS JOIN prev
