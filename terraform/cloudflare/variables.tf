variable "cloudflare_api_token" {
  type        = string
  sensitive   = true
  description = "Cloudflare API トークン (Pages 編集権限 + Access 管理権限 ※アクセス制御する場合)"
}

variable "cloudflare_account_id" {
  type        = string
  description = "Cloudflare アカウント ID"
}

variable "github_owner" {
  type        = string
  description = "GitHub リポジトリのオーナー (Cloudflare Pages の Git 連携用)"
}

variable "github_repo" {
  type        = string
  description = "GitHub リポジトリ名"
  default     = "evidence-sample"
}

variable "pages_project_name" {
  type        = string
  description = "Cloudflare Pages のプロジェクト名 (Cloudflare アカウント内で一意)"
  default     = "retail-dashboard"
}

variable "enable_google_auth" {
  type        = bool
  description = "true にすると Google 認証 + Access Application を有効化する"
  default     = false
}

variable "google_oauth_client_id" {
  type        = string
  description = "Google OAuth Client ID (enable_google_auth = true のとき必要)"
  default     = ""
}

variable "google_oauth_client_secret" {
  type        = string
  sensitive   = true
  description = "Google OAuth Client Secret (enable_google_auth = true のとき必要)"
  default     = ""
}

variable "session_duration" {
  type        = string
  description = "Cloudflare Access のセッション期間"
  default     = "24h"
}

variable "viewer_emails" {
  type        = set(string)
  description = "ダッシュボード閲覧を許可するメールアドレス"
  default     = []
}
