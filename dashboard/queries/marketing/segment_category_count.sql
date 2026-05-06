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

customer_categories AS (
  SELECT
    s.segment,
    r.customer_id,
    COUNT(DISTINCT c.category_major_name) AS category_count
  FROM retail.receipt r
  INNER JOIN segmented s ON r.customer_id = s.customer_id
  INNER JOIN retail.product p ON r.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY s.segment, r.customer_id
)

SELECT
  segment,
  ROUND(AVG(category_count), 2) AS avg_category_count
FROM customer_categories
GROUP BY segment
ORDER BY
  CASE segment
    WHEN 'ロイヤル' THEN 1
    WHEN '中堅' THEN 2
    WHEN 'ライト' THEN 3
  END ASC
