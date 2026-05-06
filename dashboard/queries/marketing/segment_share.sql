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
    customer_id,
    sales,
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    sales,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

agg AS (
  SELECT
    segment,
    COUNT(*) AS n,
    SUM(sales) AS total_sales
  FROM segmented
  GROUP BY segment
),

shares AS (
  SELECT
    segment,
    ROUND(n * 100.0 / SUM(n) OVER (), 1) AS customer_share_pct,
    ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS sales_share_pct
  FROM agg
)

SELECT
  '人数比' AS metric,
  segment,
  customer_share_pct AS value
FROM shares
UNION ALL
SELECT
  '売上シェア' AS metric,
  segment,
  sales_share_pct AS value
FROM shares
ORDER BY metric ASC, segment ASC
