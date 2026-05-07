# evidence-sample

Evidence (BI as Code フレームワーク) で小売 POS データのダッシュボードを構築し、3 パターンのホスティング (GitHub Pages / Cloudflare Pages 公開 / Cloudflare + Google 認証) を提供するサンプルです。Qiita 記事[「ブラウザで DuckDB が動く BI as Code ツール Evidence: その仕組みと運用を整理する」](https://qiita.com/SoySoySoyB/items/f2d44117ccf0654f0569)の付随リポジトリです。

## 構成

```
evidence-sample/
├── dashboard/                  # Evidence プロジェクト本体 (共通) → dashboard/README.md
├── terraform/
│   └── cloudflare/             # Cloudflare Pages デプロイ → terraform/cloudflare/README.md
└── .github/workflows/
    └── deploy-pages.yml        # GitHub Pages デプロイ
```

ホスティング先が違うだけで、`dashboard/` 配下は 3 パターンとも共通です。ダッシュボード本体の構成 (テーマ別ページ、SQL、データソース、起動手順、DuckDB WASM の扱い、basePath) は `dashboard/README.md` を参照してください。

## ホスティング 3 パターンの使い分け

| 観点         | GitHub Pages              | Cloudflare 公開             | Cloudflare + Google 認証        |
| ------------ | ------------------------- | --------------------------- | ------------------------------- |
| 認証         | なし                      | なし                        | Google 認証 (許可リスト型)      |
| DuckDB WASM  | バンドル可 (patches 不要) | jsdelivr CDN (patches 必須) | jsdelivr CDN (patches 必須)     |
| 機密データ   | 不可                      | 不可                        | 可 (許可リストの範囲内)         |
| コスト       | 無料                      | 無料 (Pages 無料枠)         | 〜50 ユーザー無料 (Access Free) |
| 設定の複雑さ | 低                        | 低                          | 中                              |

### GitHub Pages

`.github/workflows/deploy-pages.yml` を有効化し、`main` ブランチへの push で自動デプロイされます。Pages 自体の有効化はワークフローが行うため UI 操作は不要です。

Project Pages (`username.github.io/repo-name/`) を使う場合は basePath 対応が必要です (User/Org Pages なら不要)。本リポジトリの basePath 注入の仕組みは `dashboard/README.md` の「basePath の扱い」セクションを参照してください。

### Cloudflare Pages (公開 / Google 認証 切替)

`terraform/cloudflare/README.md` 参照。`enable_google_auth = false` で認証なし公開、`true` で Google 認証 (`viewer_emails` 許可リスト) に切り替わります。

本サンプルは host 全体を 1 つの Access で保護する許可リスト型の設計です。Cloudflare Access のパス単位制御 (例: `/products/*` だけ部門限定) は採用していません。

理由は Evidence の SPA 性質との相性です。SvelteKit のサイト内リンク経由のページ遷移は client-side routing で完結し HTTP request が発生しないため、Cloudflare Access のポリシー評価が走らず、部門間で URL とデータを切り離す用途には機能しません。

部門ごとに独立した配信が必要な本番運用では、部門ごとに別 Cloudflare Pages Project を立てて Cloudflare Access で個別保護するパターンを採ります。

## ライセンス

リポジトリのソースコードは MIT License (`LICENSE` 参照)。

同梱データセット (`dashboard/sources/retail/*.csv`) は [The-Japan-DataScientist-Society/100knocks-preprocess](https://github.com/The-Japan-DataScientist-Society/100knocks-preprocess) 由来で、原典の LICENSE (MIT + CC BY-ND 4.0) のうち CC BY-ND 4.0 が適用されます。本リポジトリは改変なしで再配布しており、原典 LICENSE 全文と出典は `LICENSE-DATA` を参照してください。

- データ部分の Copyright: (c) 2020 The Japan DataScientist Society
- ビルド時の CSV → Parquet 変換は CC BY-ND 4.0 Section 2(a)(4) (technical modifications) として許容される範囲内です
