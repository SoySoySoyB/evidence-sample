terraform {
  required_version = ">= 1.14.3"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.19"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# --- Cloudflare Pages Project ---

resource "cloudflare_pages_project" "retail_dashboard_sample" {
  account_id        = var.cloudflare_account_id
  name              = var.pages_project_name
  production_branch = "main"

  build_config = {
    build_command   = "npm install && npm run sources && npm run build"
    destination_dir = "build"
    root_dir        = "dashboard"
  }

  source = {
    type = "github"
    config = {
      owner                         = var.github_owner
      repo_name                     = var.github_repo
      production_branch             = "main"
      production_deployment_enabled = true
      preview_deployment_setting    = "custom"
      preview_branch_includes       = ["dev", "preview/*"]
    }
  }

  deployment_configs = {
    production = {
      env_vars = {
        NODE_VERSION = {
          type  = "plain_text"
          value = "24"
        }
      }
    }
    preview = {
      env_vars = {
        NODE_VERSION = {
          type  = "plain_text"
          value = "24"
        }
      }
    }
  }
}

# --- Google Identity Provider ---

resource "cloudflare_zero_trust_access_identity_provider" "google" {
  count      = var.enable_google_auth ? 1 : 0
  account_id = var.cloudflare_account_id
  name       = "Google"
  type       = "google"

  config = {
    client_id     = var.google_oauth_client_id
    client_secret = var.google_oauth_client_secret
  }
}

# --- Access Application ---

resource "cloudflare_zero_trust_access_application" "retail_dashboard_sample" {
  count                     = var.enable_google_auth ? 1 : 0
  account_id                = var.cloudflare_account_id
  name                      = "Retail Dashboard Sample"
  domain                    = cloudflare_pages_project.retail_dashboard_sample.subdomain
  type                      = "self_hosted"
  session_duration          = var.session_duration
  auto_redirect_to_identity = true
  allowed_idps              = [cloudflare_zero_trust_access_identity_provider.google[0].id]

  policies = [
    {
      name     = "Allow viewers"
      decision = "allow"
      include = [
        for email in var.viewer_emails : {
          email = { email = email }
        }
      ]
    }
  ]
}

# preview / branch deployment は *.<subdomain> で配信される。本 Application を
# 追加しないと preview URL がログインなしで誰でも見られてしまう (production URL
# 用の Access Application は *.<subdomain> には適用されないため)。
resource "cloudflare_zero_trust_access_application" "retail_dashboard_sample_wildcard" {
  count                     = var.enable_google_auth ? 1 : 0
  account_id                = var.cloudflare_account_id
  name                      = "Retail Dashboard Sample (Preview)"
  domain                    = "*.${cloudflare_pages_project.retail_dashboard_sample.subdomain}"
  type                      = "self_hosted"
  session_duration          = var.session_duration
  auto_redirect_to_identity = true
  allowed_idps              = [cloudflare_zero_trust_access_identity_provider.google[0].id]

  policies = [
    {
      name     = "Allow viewers"
      decision = "allow"
      include = [
        for email in var.viewer_emails : {
          email = { email = email }
        }
      ]
    }
  ]
}

output "pages_url" {
  value       = "https://${cloudflare_pages_project.retail_dashboard_sample.subdomain}"
  description = "Cloudflare Pages の本番 URL"
}
