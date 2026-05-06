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
    SUBSTR(ymd_str, 1, 6) AS year_month,
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
    c.category_medium_name,
    f.year,
    SUM(f.amount) AS sales
  FROM filtered f
  INNER JOIN retail.product p ON f.product_cd = p.product_cd
  INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
  GROUP BY c.category_medium_name, f.year
),

yoy AS (
  SELECT
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
),

declining AS (
  SELECT y.category_medium_name
  FROM yoy y
  CROSS JOIN medians m
  WHERE y.total_sales < m.median_sales AND y.yoy_pct < m.median_yoy
)

SELECT
  wm.year_month,
  c.category_medium_name,
  SUM(wm.amount) AS total_sales
FROM with_ym wm
INNER JOIN retail.product p ON wm.product_cd = p.product_cd
INNER JOIN retail.category c ON p.category_small_cd = c.category_small_cd
INNER JOIN declining d ON c.category_medium_name = d.category_medium_name
GROUP BY wm.year_month, c.category_medium_name
ORDER BY wm.year_month, c.category_medium_name
