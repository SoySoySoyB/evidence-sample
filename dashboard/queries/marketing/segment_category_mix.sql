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
    NTILE(10) OVER (ORDER BY sales DESC) AS sales_decile
  FROM customer_sales
),

segmented AS (
  SELECT
    customer_id,
    CASE
      WHEN sales_decile = 1 THEN 'ロイヤル'
      WHEN sales_decile <= 5 THEN '中堅'
      ELSE 'ライト'
    END AS segment
  FROM ranked
),

base AS (
  SELECT
    s.segment,
    c.category_major_name,
    SUM(r.amount) AS total_sales
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, c.category_major_name
)

SELECT
  segment,
  category_major_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (PARTITION BY segment), 1)
    AS share_pct
FROM base
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC,
  total_sales DESC
