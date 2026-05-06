WITH ranked AS (
  SELECT
    s.store_name,
    SUM(r.amount) AS total_sales,
    ROW_NUMBER() OVER (ORDER BY SUM(r.amount) DESC) AS rn
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name
),

grouped AS (
  SELECT
    CASE WHEN rn <= 5 THEN store_name ELSE 'その他' END AS group_name,
    CASE WHEN rn <= 5 THEN rn ELSE 999 END AS sort_order,
    SUM(total_sales) AS total_sales
  FROM ranked
  GROUP BY group_name, sort_order
)

SELECT
  group_name,
  total_sales,
  ROUND(total_sales * 100.0 / SUM(total_sales) OVER (), 1) AS share_pct
FROM grouped
ORDER BY MIN(sort_order) OVER (PARTITION BY group_name)
