---
brand: Vercel
tagline: "Frontend cloud. Build, deploy, and scale web applications with zero configuration."
category: Developer Platform
website: https://vercel.com
---

# Vercel — Information Architecture

## Overview

Vercel is the frontend cloud platform built around Next.js and the modern web stack. The mental model is **git push to deploy** — every push creates a deployment, every PR gets a preview URL, and production is always a merge away. Vercel differentiates through instant preview deployments, edge functions, serverless compute, analytics, and a developer experience that makes deployment invisible. The dashboard is a visual companion to the CLI and git workflow.

## Site Map

```
├── Dashboard (Overview)
│   ├── Recent Projects (cards with status)
│   ├── Activity Feed (deployments, team activity)
│   ├── Usage Summary
│   └── Quick Actions (import, create)
├── Projects
│   ├── Project List (grid/list, search, filter)
│   └── Project Detail
│       ├── Overview
│       │   ├── Production Deployment (live URL)
│       │   ├── Domains
│       │   ├── Git Integration Status
│       │   └── Framework Detection
│       ├── Deployments
│       │   ├── Deployment List (production, preview, all)
│       │   ├── Deployment Detail
│       │   │   ├── Status (building → ready → error)
│       │   │   ├── Build Logs (streaming)
│       │   │   ├── Source (commit, branch, PR)
│       │   │   ├── Preview URL (unique per deployment)
│       │   │   ├── Functions Tab (serverless + edge)
│       │   │   ├── Deployment Summary (build time, output)
│       │   │   ├── Promote to Production
│       │   │   ├── Instant Rollback
│       │   │   └── Deployment Comments (visual feedback)
│       │   └── Filters (branch, status, author)
│       ├── Analytics
│       │   ├── Web Vitals (LCP, FID, CLS, TTFB, INP)
│       │   ├── Audiences (by page, device, country)
│       │   ├── Real Experience Score
│       │   └── Custom Events
│       ├── Speed Insights
│       │   ├── Performance Score (per route)
│       │   ├── Route-level Metrics
│       │   └── Recommendations
│       ├── Logs
│       │   ├── Runtime Logs (serverless functions)
│       │   ├── Build Logs
│       │   ├── Edge Function Logs
│       │   ├── Filter by Function / Level / Status
│       │   └── Live Tail
│       ├── Storage
│       │   ├── KV (Redis-compatible)
│       │   ├── Postgres (serverless SQL)
│       │   ├── Blob (file storage)
│       │   └── Edge Config (low-latency key-value)
│       ├── Domains
│       │   ├── Domain List
│       │   ├── Add Domain
│       │   ├── DNS Configuration
│       │   └── SSL Certificates (auto-provisioned)
│       ├── Environment Variables
│       │   ├── Variable List (production / preview / development)
│       │   ├── Add Variable
│       │   ├── Bulk Edit
│       │   └── Pull to .env.local (CLI)
│       ├── Integrations (project-level)
│       │   └── Connected Services
│       └── Settings
│           ├── General (name, framework, root directory)
│           ├── Build & Development
│           │   ├── Build Command
│           │   ├── Output Directory
│           │   ├── Install Command
│           │   └── Node.js Version
│           ├── Git
│           │   ├── Connected Repository
│           │   ├── Ignored Build Step
│           │   └── Deploy Hooks
│           ├── Serverless Functions
│           │   ├── Region Selection
│           │   ├── Memory / Duration Limits
│           │   └── Bundling
│           ├── Edge Functions
│           ├── Cron Jobs
│           ├── Security
│           │   ├── Deployment Protection (password, Vercel Auth)
│           │   ├── Trusted IPs
│           │   └── Attack Challenge Mode
│           ├── Advanced
│           │   ├── Build Cache
│           │   ├── Skew Protection
│           │   └── Function-Level Security
│           └── Danger Zone (delete project)
├── Deployments (Global)
│   └── All Deployments (across projects, filterable)
├── Domains (Global)
│   ├── All Domains
│   ├── Add Domain
│   └── Transfer Domain
├── Storage
│   ├── KV Databases
│   ├── Postgres Databases
│   ├── Blob Stores
│   └── Edge Config Stores
├── Integrations
│   ├── Marketplace (browse integrations)
│   ├── Installed
│   └── Integration Console (for developers building integrations)
├── Monitoring
│   ├── Checks (deployment checks from integrations)
│   └── Observability (Logs + Metrics unified view)
├── Activity
│   └── Team Activity Log
├── Usage & Billing
│   ├── Usage Overview (bandwidth, builds, functions, analytics)
│   ├── Usage by Project
│   ├── Plan (Hobby / Pro / Enterprise)
│   ├── Invoices
│   ├── Spend Management
│   └── Notifications (usage thresholds)
├── Team Settings
│   ├── General (team name, URL, avatar)
│   ├── Members
│   │   ├── Member List (role, status)
│   │   ├── Invite Members
│   │   └── Role Management
│   ├── Billing
│   ├── Security
│   │   ├── SSO / SAML
│   │   ├── 2FA Policy
│   │   ├── Audit Log
│   │   └── IP Allowlisting
│   ├── Tokens (team-scoped)
│   ├── Git Providers (GitHub, GitLab, Bitbucket)
│   ├── Integrations (team-level)
│   └── Advanced (data deletion)
├── User Settings
│   ├── General (name, email, username)
│   ├── Login Connections (GitHub, GitLab, Bitbucket, email)
│   ├── Tokens
│   ├── Notifications (email, in-app)
│   └── Teams
├── CLI (`vercel` command)
│   ├── vercel (deploy)
│   ├── vercel dev (local development)
│   ├── vercel env pull (download env vars)
│   ├── vercel link (connect to project)
│   ├── vercel logs (tail logs)
│   └── vercel domains (manage)
└── Docs (vercel.com/docs)
    ├── Getting Started
    ├── Frameworks (Next.js, Remix, Astro, etc.)
    ├── Platform
    ├── Storage
    ├── Functions
    └── CLI Reference
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Nav** | Fixed top bar | Vercel logo (home), team switcher, search, feedback, notifications, user avatar |
| **Project Nav** | Horizontal tabs | Overview, Deployments, Analytics, Speed Insights, Logs, Storage, Domains, Env Vars, Integrations, Settings |
| **Team Sidebar** | Left sidebar on team pages | Projects, Deployments, Domains, Storage, Integrations, Activity, Usage, Settings |
| **Deployment Toolbar** | Within deployment detail | Status badge, URL, branch, commit, promote/rollback actions |
| **Command Palette** | ⌘K / Ctrl+K | Search projects, navigate, switch teams, run actions |
| **Breadcrumbs** | Below top bar | Team > Project > Deployments > Deploy ID |

### Team-Level Navigation
```
[Team Switcher ▾]
───────────────
📊 Overview
📦 Projects
🚀 Deployments
🌐 Domains
💾 Storage
🔌 Integrations
📋 Activity
💳 Usage
⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Team | name, slug, plan (hobby/pro/enterprise), members[] | has many Projects, Domains, Stores |
| Project | name, framework (Next.js/etc.), git_repo, production_url, domains[], settings | belongs to Team |
| Deployment | id, url, status (building/ready/error/cancelled), type (production/preview), source (git/CLI/API), branch, commit, build_logs, created_at, meta | belongs to Project |
| Domain | name, dns_config, ssl_status, redirect_from | belongs to Project or Team |
| EnvVar | key, value (encrypted), target (production/preview/development), git_branch | belongs to Project |
| Function | name, path, type (serverless/edge), region, runtime, memory, max_duration | belongs to Deployment |
| CronJob | path, schedule, last_run, next_run | belongs to Project |
| Store | type (kv/postgres/blob/edge-config), name, region, connection_string | belongs to Team, linked to Projects |
| WebVital | metric (LCP/FID/CLS/TTFB/INP), value, page, device, country | belongs to Project |
| Integration | name, provider, scopes, status | belongs to Team/Project |
| DeployHook | name, url, branch | belongs to Project |
| Check | name, status, integration, deployment | belongs to Deployment |

### Deployment Status
```
queued → building → ready (live) → superseded (by newer deployment)
                  → error (build failed)
                  → cancelled
ready → promoted (to production)
ready → rolled back (instant rollback to previous)
```

### Environment Hierarchy
```
Development (vercel dev) → Preview (PR deployments) → Production (main branch)
```

## User Flows

### Git Push Deploy
```
Push to branch → Vercel detects via GitHub webhook → Build triggered → Build logs stream → Preview URL generated → PR comment with preview link → Team reviews → Merge to main → Production deployment → Instant live
```

### Preview Deployment Review
```
Open PR → Vercel auto-deploys → Comment on PR with preview URL → Click preview → Visual review → Leave deployment comments (click on page elements) → Approve → Merge → Production deploy
```

### Rollback Production
```
Deployments tab → Find previous working deployment → [Promote to Production] → Instant switch (no rebuild) → Production URL now serves old deployment → Investigate issue → Fix and redeploy
```

### Add Custom Domain
```
Domains tab → Add Domain → Enter domain name → Configure DNS (CNAME/A record) → SSL auto-provisioned → Domain active → Assign to project branch
```

### Debug Serverless Function
```
Logs tab → Filter by function name → Filter by error level → Expand log entry → View request/response → Check function source in deployment → Fix locally → Push → Verify on preview
```

### Connect Storage
```
Storage tab → Create Store (e.g., KV) → Select region → Connect to project → Env vars auto-added → Use `@vercel/kv` in code → Deploy → Data persists across deployments
```

## URL / Route Structure

```
/                                      → Dashboard (team overview)
/new                                   → Import project
/:team                                 → Team overview
/:team/:project                        → Project overview
/:team/:project/deployments            → Deployment list
/:team/:project/:deploymentId          → Deployment detail
/:team/:project/:deploymentId/logs     → Build logs
/:team/:project/:deploymentId/functions → Functions
/:team/:project/analytics              → Web Analytics
/:team/:project/speed-insights         → Speed Insights
/:team/:project/logs                   → Runtime logs
/:team/:project/stores                 → Storage
/:team/:project/stores/:storeId        → Store detail
/:team/:project/domains                → Domains
/:team/:project/settings               → Project settings
/:team/:project/settings/environment-variables → Env vars
/:team/:project/settings/git           → Git settings
/:team/:project/settings/functions     → Function settings
/:team/:project/integrations           → Integrations
/:team/~/domains                       → Team domains
/:team/~/stores                        → Team storage
/:team/~/integrations                  → Team integrations
/:team/~/usage                         → Usage
/:team/~/settings                      → Team settings
/:team/~/settings/members              → Team members
/:team/~/settings/billing              → Billing
/:team/~/settings/security             → Security & audit
/:team/~/activity                      → Activity log
/account                               → User settings
/account/tokens                        → User tokens
/docs                                  → Documentation
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Command Palette (⌘K) | Projects, pages, actions, teams, docs | — | Relevance, Recent |
| Deployments | Commit message, URL, branch | Status (ready/error/building), Branch, Environment (production/preview), Author | Date (newest), State |
| Logs | Log message, function name | Level (info/warn/error), Function, Status Code, Time Range | Timestamp |
| Domains | Domain name | Status, Project | Name, Created |
| Projects | Project name | Framework, Status | Name, Updated, Created |

## Responsive Behavior

| Breakpoint | Navigation | Content | Logs |
|------------|-----------|---------|------|
| Desktop (>=1280px) | Top nav + project tabs | Full width, deployment cards | Full-height log viewer |
| Tablet (768-1279px) | Scrollable tabs | Full width | Stacked |
| Mobile (<768px) | Hamburger menu | Stacked cards | Simplified log viewer |

### Vercel-Specific UX
- Minimal, monochromatic design (black/white with accent colors for status)
- Every deployment gets a unique, permanent URL (project-hash.vercel.app)
- PR comments with preview URLs auto-posted
- Deployment comments: click anywhere on preview to leave visual feedback
- Instant rollback: promote any previous deployment without rebuilding
- Real-time build log streaming
- Edge function logs with geographic region indicator
- Framework-aware UI (detects Next.js, Remix, Astro, etc.)
- `vercel` CLI mirrors dashboard actions (deploy, env, logs, domains)
- Dark mode default

## Access Control

| Role | View | Deploy | Logs | Domains | Env Vars | Storage | Billing | Team |
|------|------|--------|------|---------|----------|---------|---------|------|
| Owner | ✅ | All | ✅ | CRUD | CRUD (all) | CRUD | ✅ | Manage |
| Member | ✅ | All | ✅ | CRUD | CRUD (preview/dev) | CRUD | View | View |
| Developer | ✅ | Preview only | ✅ | View | Read (masked) | Read | — | View |
| Viewer | ✅ | — | View | View | — | — | — | View |

### Security Features
- Deployment Protection (password, Vercel Authentication, Trusted IPs)
- Skew Protection (ensures consistent client/server versions during rollout)
- Attack Challenge Mode (bot protection)
- SSO/SAML (Enterprise)
- Audit log (all team actions)
- Env var encryption at rest
- Git provider OAuth (GitHub, GitLab, Bitbucket)
