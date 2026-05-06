WITH customer_sales AS (
  SELECT
    customer_id,
    SUM(amount) AS sales,
    COUNT(*) AS visits,
    ROUND(SUM(amount) * 1.0 / COUNT(*), 0) AS avg_unit
  FROM retail.receipt
  WHERE customer_id <> 'ZZ000000000000'
  GROUP BY customer_id
),

ranked AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    visits,
    avg_unit,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
)

SELECT
  segment,
  ROUND(AVG(avg_unit), 0) AS avg_transaction,
  ROUND(AVG(visits), 1) AS avg_visits
FROM segmented
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC
