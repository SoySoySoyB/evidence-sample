WITH receipts_dated AS (
  SELECT
    store_cd,
    amount,
    CAST(
      STRPTIME(CAST(CAST(sales_ymd AS INTEGER) AS VARCHAR), '%Y%m%d')
      AS DATE
    ) AS d
  FROM retail.receipt
),

receipts_dow AS (
  SELECT
    rd.store_cd,
    DAYOFWEEK(rd.d) AS dow_num,
    SUM(rd.amount) AS amount
  FROM receipts_dated rd
  GROUP BY rd.store_cd, DAYOFWEEK(rd.d)
),

store_dow AS (
  SELECT
    s.store_name,
    rdow.dow_num,
    rdow.amount,
    SUM(rdow.amount) OVER (PARTITION BY s.store_name) AS store_total
  FROM receipts_dow rdow
  INNER JOIN retail.store s ON rdow.store_cd = s.store_cd
),

with_share AS (
  SELECT
    store_name,
    dow_num,
    ROUND(amount * 100.0 / store_total, 1) AS share_pct
  FROM store_dow
),

weekend_pct AS (
  SELECT
    store_name,
    SUM(CASE WHEN dow_num IN (0, 6) THEN share_pct ELSE 0 END) AS weekend_share
  FROM with_share
  GROUP BY store_name
),

store_rows AS (
  SELECT
    ws.store_name,
    ws.dow_num,
    ws.share_pct,
    DENSE_RANK() OVER (ORDER BY wp.weekend_share DESC) + 1 AS sort_order
  FROM with_share ws
  INNER JOIN weekend_pct wp ON ws.store_name = wp.store_name
),

avg_rows AS (
  SELECT
    '全店平均' AS store_name,
    dow_num,
    ROUND(AVG(share_pct), 1) AS share_pct,
    1 AS sort_order
  FROM with_share
  GROUP BY dow_num
)

SELECT
  store_name,
  CASE dow_num
    WHEN 0 THEN '日'
    WHEN 1 THEN '月'
    WHEN 2 THEN '火'
    WHEN 3 THEN '水'
    WHEN 4 THEN '木'
    WHEN 5 THEN '金'
    WHEN 6 THEN '土'
  END AS dow,
  dow_num,
  share_pct,
  sort_order
FROM (
  SELECT * FROM avg_rows
  UNION ALL
  SELECT * FROM store_rows
)
ORDER BY sort_order ASC, dow_num ASC
