# Cloudflare Pages デプロイ

`enable_google_auth` フラグで認証なし公開と Google 認証 (許可リスト型) を切り替えます。

## 認証なし公開 (デフォルト)

`terraform.tfvars` に必須項目のみ設定:

```hcl
cloudflare_api_token  = "..."
cloudflare_account_id = "..."
github_owner          = "..."
```

```bash
terraform init
terraform apply
```

## Google 認証

`enable_google_auth = true` + Google OAuth クライアント情報 + 閲覧許可メールを `terraform.tfvars` に追記:

```hcl
enable_google_auth         = true
google_oauth_client_id     = "..."
google_oauth_client_secret = "..."
viewer_emails = ["alice@example.com", "bob@example.com"]
```

```bash
terraform init
terraform apply
```

## 部門単位の隔離が必要な場合

本サンプルは host 全体を 1 つの Access で保護する許可リスト型の設計です。Cloudflare Access のパス単位制御 (例: `/products/*` だけ部門限定) は採用していません。

理由は Evidence の SPA 性質との相性です。SvelteKit のサイト内リンク経由のページ遷移は client-side routing で完結し HTTP request が発生しないため、Cloudflare Access のポリシー評価が走らず、部門間で URL とデータを切り離す用途には機能しません。

部門ごとに独立した配信が必要な本番運用では、部門ごとに別 Cloudflare Pages Project を立てて、それぞれを Cloudflare Access で個別保護するパターンを採ります。

## モード切替

`enable_google_auth = false` から `true` への切替時は `apply` で IdP と 2 つの Access Application (production URL 用 + preview URL 用) が新規作成され、`true` から `false` への切替時は破棄されます。Pages Project 自体は維持されます。

## 必要な権限

Cloudflare API トークンに以下の権限を付与してください:

- Account: Cloudflare Pages: Edit
- Account: Access: Apps: Edit (`enable_google_auth = true` のとき)
- Account: Access: Policies: Edit (`enable_google_auth = true` のとき)
- Account: Access: Identity Providers: Edit (`enable_google_auth = true` のとき)
