WITH store_efficiency AS (
  SELECT
    s.store_name,
    ROUND(SUM(r.amount) / s.floor_area, 0) AS sales_per_area
  FROM retail.receipt r
  INNER JOIN retail.store s ON r.store_cd = s.store_cd
  GROUP BY s.store_name, s.floor_area
),

ranked AS (
  SELECT
    store_name,
    sales_per_area,
    ROW_NUMBER() OVER (ORDER BY sales_per_area DESC) AS rn_top,
    ROW_NUMBER() OVER (ORDER BY sales_per_area ASC) AS rn_bottom
  FROM store_efficiency
)

SELECT
  store_name,
  sales_per_area,
  '上位 5' AS rank_group,
  rn_top AS rank_in_group
FROM ranked
WHERE rn_top <= 5
UNION ALL
SELECT
  store_name,
  sales_per_area,
  '下位 5' AS rank_group,
  rn_bottom AS rank_in_group
FROM ranked
WHERE rn_bottom <= 5
ORDER BY rank_group ASC, rank_in_group ASC
