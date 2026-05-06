WITH base AS (
  SELECT
    CAST(CAST(r.sales_ymd AS INTEGER) AS VARCHAR) AS ymd_str,
    r.product_cd,
    r.amount
  FROM retail.receipt r
),

with_ym AS (
  SELECT
    CAST(SUBSTR(ymd_str, 1, 4) AS INTEGER) AS year,
    CAST(SUBSTR(ymd_str, 5, 2) AS INTEGER) AS month,
    product_cd,
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
    c.category_major_name,
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_major_name, c.category_medium_name, f.year
),

yoy AS (
  SELECT
    cur.category_major_name,
    cur.category_medium_name,
    cur.sales AS total_sales,
    CASE
      WHEN prev.sales > 0
        THEN (cur.sales - prev.sales) * 100.0 / prev.sales
    END AS yoy_pct
  FROM yearly cur
  INNER JOIN yearly prev
    ON cur.category_medium_name = prev.category_medium_name
  WHERE cur.year = 2019 AND prev.year = 2018
),

medians AS (
  SELECT
    MEDIAN(total_sales) AS median_sales,
    MEDIAN(yoy_pct) AS median_yoy
  FROM yoy
)

SELECT
  y.category_major_name,
  y.category_medium_name,
  y.total_sales,
  ROUND(y.yoy_pct, 1) AS yoy_pct,
  m.median_sales,
  ROUND(m.median_yoy, 1) AS median_yoy,
  ROUND(y.total_sales * 100.0 / SUM(y.total_sales) OVER (), 1) AS share_pct,
  CASE
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長スター'
    WHEN y.total_sales >= m.median_sales AND y.yoy_pct < m.median_yoy
      THEN '成熟主力'
    WHEN y.total_sales < m.median_sales AND y.yoy_pct >= m.median_yoy
      THEN '成長候補'
    ELSE '衰退'
  END AS quadrant
FROM yoy y
CROSS JOIN medians m
ORDER BY y.total_sales DESC
