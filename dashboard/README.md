# Retail Dashboard (Evidence プロジェクト本体)

Evidence (BI as Code フレームワーク) で構築した小売 POS データのダッシュボード本体です。リポジトリで提供する 3 パターンのホスティング (`../README.md` 参照) すべてが本ディレクトリを共有してデプロイします。

## ローカル起動

```bash
npm install        # postinstall で patch-package が走る
npm run sources    # CSV → Parquet 変換
npm run dev        # http://localhost:3000 でブラウザが開く
```

事前ビルド成果物を直接プレビューする場合:

```bash
npm run build:strict
npx http-server build
```

## ディレクトリ構成

| パス              | 役割                                                                                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pages/`          | Markdown ページ (8 ページ)。Evidence の SvelteKit ベースのページ生成元                                                                                          |
| `queries/`        | SQL ファイル (24 本)。Markdown からインクルードする形式で配置し、SQLFluff (DuckDB dialect) で直接 lint 可能                                                     |
| `sources/retail/` | データソース定義 + CSV (100 本ノック由来)。`npm run sources` で Parquet に変換される                                                                            |
| `patches/`        | DuckDB WASM の CDN 化 patch (`@evidence-dev/universal-sql`)。Cloudflare Pages の単一ファイル 25MB 制限を回避するため、`postinstall` の `patch-package` で当たる |
| `build/`          | ビルド成果物 (Parquet 同梱)。読者がビルド結果の構造を確認できるよう、サンプルとしてリポジトリに含めています                                                     |

## DuckDB WASM の容量

DuckDB WASM はバリアント別に 33〜38MB (mvp 38MB / eh 33MB / coi 33MB) で、Cloudflare Pages の単一ファイル 25MB 上限を超えます。そのため `patches/` で `@evidence-dev/universal-sql` の WASM 参照先を jsdelivr CDN に書き換えています。GitHub Pages は単一ファイル 100MB まで許容するためバンドルでも動きますが、本サンプルでは 3 ホスティング共通で patches を適用する構成にしています。

## basePath の扱い

ローカル `npm run dev` と Cloudflare Pages では `evidence.config.yaml` をそのまま読み、basePath なしで動きます。GitHub Pages 用の basePath (`/<repo-name>/`) は `.github/workflows/deploy-pages.yml` の build 直前に CI で動的に append しています。これは Evidence sdk が `BASE_PATH` 環境変数を読まない仕様 (公式 docs と差異あり) を踏まえた回避策で、ローカル開発と Cloudflare Pages デプロイに副作用が及ばないようにしています。

## SQLFluff

`.sqlfluff` に DuckDB dialect、80 字制限、サブクエリ → CTE 等のルールを設定済みです。CI には組み込んでいませんが、ローカルで `sqlfluff lint queries/ --dialect duckdb` を実行できます。

## データ題材

「データサイエンス 100 本ノック (構造化データ加工編)」の公開データセット (期間 2017-01-01 〜 2019-10-31) を使用しています。

- `category` (大/中/小カテゴリマスタ)
- `customer` (会員顧客マスタ)
- `product` (商品マスタ)
- `receipt` (POS レシート明細、約 10 万行)
- `store` (店舗マスタ、53 店舗)
- `geocode` (郵便番号→住所)

ライセンスは `../LICENSE-DATA` を参照してください。
