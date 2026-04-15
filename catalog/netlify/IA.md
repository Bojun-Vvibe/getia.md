---
brand: Netlify
tagline: The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.
category: Developer Tools
website: https://netlify.com
---

# Netlify — Information Architecture

## Overview

Netlify pioneered the JAMstack hosting model and remains a leading platform for deploying modern web applications. The IA is organized around a **site-centric deployment dashboard** — every project is a "site" with its own deploy history, build settings, domain configuration, and function endpoints. The architecture supports Git-based continuous deployment (push to deploy), deploy previews (per-PR deployments), serverless functions, edge functions, forms, identity (auth), and split testing. Netlify's IA reflects a developer-friendly philosophy: minimal configuration, sensible defaults, and a flat hierarchy where sites are the primary organizational unit.

## Site Map

```
app.netlify.com
├── / (Team dashboard — all sites)
├── /teams/{team_slug}
│   └── /overview (Team overview)
├── /sites/{site_id} (Individual site)
│   ├── /overview (Deploy status, recent deploys)
│   ├── /deploys (Deploy history)
│   │   └── /{deploy_id} (Deploy detail — log, summary)
│   ├── /settings
│   │   ├── /general (Site name, build settings, repo link)
│   │   ├── /build-deploy (Build command, publish dir, env vars)
│   │   ├── /domain-management (Custom domains, DNS, HTTPS)
│   │   ├── /notifications (Deploy notifications — Slack, email, webhook)
│   │   ├── /forms (Form submissions)
│   │   ├── /functions (Serverless functions config)
│   │   ├── /identity (Auth/user management)
│   │   ├── /access-control (Password protection, JWT)
│   │   └── /analytics
│   ├── /functions (Function logs & invocations)
│   ├── /forms (Form submission data)
│   ├── /analytics (Site analytics)
│   └── /plugins (Build plugins)
├── /account/settings
│   ├── /general
│   ├── /billing
│   ├── /members
│   └── /audit-log
├── /integrations (Integration marketplace)
└── /drop (Drag-and-drop deploy)

netlify.com (marketing)
├── / (Home)
├── /pricing
├── /products/* (Platform, Connect, Create)
├── /docs (Documentation)
└── /blog
```

## Navigation Model

- **Primary navigation**: Top bar — Sites (team dashboard), Integrations, Docs, Support, Team selector
- **Site navigation**: Left sidebar within a site — Overview, Deploys, Functions, Forms, Analytics, Plugins, Settings
- **Settings navigation**: Nested sub-nav within Settings — General, Build & Deploy, Domain Management, Notifications, etc.
- **Team navigation**: Team dropdown in top bar → switch between teams/orgs
- **Deploy navigation**: Deploy list → click deploy → deploy log with build output, summary, and deploy preview link
- **Breadcrumbs**: Team → Site → Section → Sub-section
- **Mobile**: Responsive dashboard; deploy logs are scrollable single-column

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Site | Name, repo link, build settings, domains, deploy history, functions, forms | Team-owned |
| Deploy | Commit hash, branch, status (success/fail/building), build log, deploy URL, timestamp | Part of site |
| Deploy Preview | Unique URL for a specific PR/branch deploy, shareable | Part of site |
| Function | Serverless function file, invocation logs, endpoint URL | Part of site |
| Form | HTML form name, submissions list, notification settings | Part of site |
| Build Plugin | npm package extending build process, configuration | Part of site |
| Environment Variable | Key-value pair, scoped to deploy context (production, branch deploys, deploy previews) | Part of site |
| Team | Name, members, sites, billing plan, audit log | Team-owned |

## User Flows

### Deploy a New Site
```
Clicks "Add New Site" → "Import from Git" → Connects GitHub/GitLab/Bitbucket → selects repository → Configures: branch to deploy, build command, publish directory → Clicks Deploy → build starts immediately → Build log streams in real-time → site deployed to `{site-name}.netlify.app` → Subsequent Git pushes trigger automatic deploys
```

### Deploy Preview Workflow
```
Developer opens a PR on GitHub → Netlify automatically builds the PR branch → Deploy preview URL posted as PR comment (unique URL per commit) → Reviewer clicks link → sees the changes live → PR merged → production deploy triggered automatically
```

### Custom Domain Setup
```
Navigates to Site → Settings → Domain Management → Adds custom domain → Netlify provides DNS records → Option A: Use Netlify DNS (point nameservers) — automatic HTTPS via Let's Encrypt → Option B: External DNS — add CNAME record manually → HTTPS certificate provisioned automatically
```

### Serverless Functions
```
Creates `/netlify/functions/` directory in repo → Writes function files (JS/TS) → each file becomes an API endpoint → Deploys → functions available at `/.netlify/functions/{name}` → Monitor invocations and logs in Functions tab → Environment variables accessible in function runtime
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `app.netlify.com/` | Team dashboard |
| `app.netlify.com/teams/{slug}` | Team overview |
| `app.netlify.com/sites/{site_id}` | Site overview |
| `app.netlify.com/sites/{site_id}/deploys` | Deploy history |
| `app.netlify.com/sites/{site_id}/deploys/{deploy_id}` | Deploy detail |
| `app.netlify.com/sites/{site_id}/settings/general` | Site settings |
| `app.netlify.com/sites/{site_id}/functions` | Functions |
| `app.netlify.com/sites/{site_id}/forms` | Forms |
| `app.netlify.com/sites/{site_id}/analytics` | Analytics |
| `app.netlify.com/account/settings` | Account settings |
| `app.netlify.com/drop` | Drag-and-drop deploy |

Site IDs are human-readable slugs (derived from site name). Deploy IDs are alphanumeric.

## Search & Filter

- **Site search**: Search sites by name in team dashboard
- **Deploy filtering**: Filter deploys by branch (production, branch deploys, deploy previews), status (success, failed, building), date
- **Function logs**: Filter by function name, date range
- **Form submissions**: Filter by form name, date range
- **Plugin search**: Search build plugins by name/category in integration marketplace
- **No full-text search**: Cannot search deploy logs or function output content
- **Docs search**: Full-text documentation search

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Top nav + site sidebar + main content area |
| Tablet (768-1024px) | Collapsible sidebar + full-width content |
| Mobile (<768px) | Hamburger menu, single-column layout, deploy logs as scrollable blocks |

- Dashboard site cards reflow from grid to list on mobile
- Deploy log output is monospace with horizontal scroll for long lines
- Settings forms stack vertically
- Analytics charts resize responsively
- Drag-and-drop deploy area works on desktop only

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs (no dashboard) |
| Free (Starter) | 1 member, 100GB bandwidth, 300 build minutes/mo, basic features |
| Pro ($19/member/mo) | Unlimited members, 1TB bandwidth, 25K build minutes, analytics, background functions |
| Business ($99/member/mo) | Pro + SAML SSO, audit log, priority support |
| Enterprise | Custom limits, SLA, dedicated support, advanced security |
| Team roles | Owner → Admin → Developer → Collaborator (view-only on specific sites) |

- Authentication: Email/password, GitHub OAuth, GitLab OAuth, Bitbucket OAuth
- Site-level access: Sites can be public (anyone can view) or password-protected
- Deploy notifications: Per-site webhook/email/Slack configuration
- Environment variables: Secret by default; not exposed in build logs
- Audit log: Available on Business+ plans — tracks all team member actions

## Build & Deploy Pipeline

```
Git Push → Webhook Triggers Build → Install Dependencies → Run Build Command → Publish Output → Deploy to CDN → Atomic Deploy (instant switch) → Deploy URL Live
```

## Feature Comparison

| Feature | Starter (Free) | Pro | Business | Enterprise |
|---------|---------------|-----|----------|------------|
| Bandwidth | 100GB/mo | 1TB/mo | 1.5TB/mo | Custom |
| Build minutes | 300/mo | 25K/mo | 25K/mo | Custom |
| Serverless functions | 125K/mo | 125K/mo | Unlimited | Unlimited |
| Edge functions | Included | Included | Included | Included |
| Analytics | — | ✅ | ✅ | ✅ |
| Password protection | — | ✅ | ✅ | ✅ |
| SAML SSO | — | — | ✅ | ✅ |
| Audit log | — | — | ✅ | ✅ |
| SLA | — | — | — | ✅ |

## Deploy Contexts

- **Production:** Builds from the production branch (usually `main`)
- **Branch deploys:** Builds from any branch; accessible at `branch-name--site.netlify.app`
- **Deploy previews:** Builds from PR; unique URL per commit; GitHub PR comment integration
- **Split testing:** Traffic split between branches (A/B testing at deploy level)
- **Locked deploys:** Pin a specific deploy as production; new deploys don't auto-publish

## Edge Functions vs Serverless Functions

| Aspect | Edge Functions | Serverless Functions |
|--------|---------------|---------------------|
| Runtime | Deno (V8 isolates) | Node.js |
| Location | CDN edge (200+ locations) | Single region |
| Cold start | < 5ms | 100-500ms |
| Use case | URL rewrites, auth, A/B testing, geolocation | API endpoints, form handling, database queries |
| Timeout | 50ms CPU time | 10s (default), 26s (background) |
| Invocations | Unlimited | 125K-unlimited (by plan) |

## DNS & Domain Management

- **Netlify DNS:** Point nameservers; automatic SSL via Let's Encrypt
- **External DNS:** CNAME or ALIAS record; automatic SSL
- **Custom domains:** Up to 100 per site; primary + aliases
- **Branch subdomains:** Automatic `{branch}--{site}.netlify.app`
- **HTTPS:** Free Let's Encrypt certificates; auto-renewal; force HTTPS redirect
- **HTTP headers:** Custom security headers via `_headers` file or `netlify.toml`

## Build Configuration (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    Content-Security-Policy = "default-src 'self'"
```

## CLI Commands

| Command | Description |
|---------|-------------|
| `netlify deploy` | Deploy to draft URL |
| `netlify deploy --prod` | Deploy to production |
| `netlify dev` | Local development server with functions |
| `netlify link` | Link local directory to Netlify site |
| `netlify env:set KEY VALUE` | Set environment variable |
| `netlify logs:function` | Stream function logs |
| `netlify open` | Open site in browser |
