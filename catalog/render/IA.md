---
brand: Render
tagline: Cloud hosting for developers. Build, deploy, and scale with ease.
category: Developer Tools
website: https://render.com
---

# Render — Information Architecture

## Overview

Render is a unified cloud hosting platform positioned as a modern Heroku alternative. The IA is structured as a **service-type dashboard** — the primary organizational unit is a "Service," and the platform offers distinct service types: Web Services, Static Sites, Private Services, Background Workers, Cron Jobs, and managed databases (PostgreSQL, Redis). Each service type has its own creation flow and settings tailored to its use case. Render differentiates through Blueprints (infrastructure-as-code via `render.yaml`), auto-deploy from Git, preview environments for PRs, and a clean, no-nonsense dashboard that avoids complexity. The IA reflects Render's philosophy: everything should be simple, predictable, and "just work."

## Site Map

```
dashboard.render.com
├── / (Services list — all services)
├── /new (Create new resource)
│   ├── /web (New web service)
│   ├── /static (New static site)
│   ├── /pserv (New private service)
│   ├── /worker (New background worker)
│   ├── /cron (New cron job)
│   ├── /database (New PostgreSQL database)
│   ├── /redis (New Redis instance)
│   └── /blueprint (New Blueprint instance)
├── /web/{service_id} (Web service detail)
│   ├── /deploys (Deploy history)
│   │   └── /{deploy_id} (Deploy log)
│   ├── /events (Service events log)
│   ├── /env (Environment variables)
│   ├── /metrics (CPU, memory, bandwidth)
│   ├── /logs (Live logs)
│   ├── /shell (Web terminal)
│   ├── /disks (Persistent disks)
│   ├── /scaling (Instance count, autoscaling)
│   ├── /settings (Build, deploy, networking config)
│   └── /previews (PR preview environments)
├── /d/{database_id} (Database detail)
│   ├── /info (Connection info)
│   ├── /backups
│   ├── /metrics
│   └── /settings
├── /env-groups (Shared environment variable groups)
├── /blueprints (Blueprint instances)
├── /account
│   ├── /billing
│   ├── /team
│   ├── /profile
│   └── /notifications
└── /auth

render.com (marketing)
├── / (Home)
├── /pricing
├── /docs
└── /blog
```

## Navigation Model

- **Primary navigation**: Left sidebar — Services (main list), Env Groups, Blueprints, account sections
- **Service list**: Flat list of all services with type icons, status badges, and deploy timestamps
- **Service navigation**: Top tabs within a service — Events, Deploys, Logs, Env, Metrics, Shell, Scaling, Settings
- **Create flow navigation**: "New +" button → select service type → configure → deploy
- **Utility navigation**: Top-right — avatar → Account, Team, Billing, Notifications
- **Status indicators**: Color-coded badges throughout (green=live, yellow=building, red=failed, gray=suspended)
- **Mobile**: Responsive dashboard; logs and shell are desktop-optimized

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Web Service | Name, repo link, build command, start command, environment, instance type, auto-deploy config, custom domain | Team-owned |
| Static Site | Name, repo link, build command, publish directory, custom domain, headers/redirects | Team-owned |
| Private Service | Internal-only service (no public URL), same config as web service | Team-owned |
| Background Worker | Long-running process, no HTTP endpoint, same deploy flow | Team-owned |
| Cron Job | Schedule (cron expression), command, timeout, deploy config | Team-owned |
| PostgreSQL Database | Name, plan, region, connection string, backups, version | Team-owned |
| Redis Instance | Name, plan, region, connection string, max memory policy | Team-owned |
| Blueprint | render.yaml definition, linked services, auto-sync | Team-owned |
| Env Group | Named set of key-value pairs, linked to multiple services | Team-owned |
| Deploy | Commit hash, build log, deploy log, status, timestamp, trigger (auto/manual) | Part of service |

## User Flows

### Deploying a Web Service
```
Clicks "New +" → "Web Service" → Connects GitHub/GitLab → selects repository → Render auto-detects runtime (Node.js, Python, Go, Rust, Docker, etc.) → Configures: name, region, instance type, build command, start command → Sets environment variables (or links Env Group) → Clicks "Create Web Service" → build and deploy starts → Service live at `{name}.onrender.com` → configure custom domain
```

### Blueprint Deployment (Infrastructure as Code)
```
Creates `render.yaml` in repo defining all services, databases, env groups → Connects repo as Blueprint → Render parses the file → All defined resources created automatically → Git push updates to `render.yaml` trigger infra sync → Enables reproducible, version-controlled infrastructure
```

### Preview Environments
```
Enables "Pull Request Previews" in service settings → Every PR creates a temporary preview environment with unique URL → Preview has its own environment variables (can override for testing) → Preview URL posted as PR comment → PR closed → preview environment auto-deleted
```

### Database Management
```
Creates PostgreSQL database → selects plan and region → Connection details (internal URL, external URL, psql command) provided → Automatic daily backups with configurable retention → Metrics dashboard shows connections, query performance, storage → One-click fork for creating test copies
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `dashboard.render.com/` | Services list |
| `dashboard.render.com/new/{type}` | Create new service |
| `dashboard.render.com/web/{id}` | Web service detail |
| `dashboard.render.com/web/{id}/deploys` | Deploy history |
| `dashboard.render.com/web/{id}/deploys/{id}` | Deploy log |
| `dashboard.render.com/web/{id}/logs` | Live logs |
| `dashboard.render.com/web/{id}/env` | Environment variables |
| `dashboard.render.com/web/{id}/settings` | Service settings |
| `dashboard.render.com/d/{id}` | Database detail |
| `dashboard.render.com/env-groups` | Env group list |
| `dashboard.render.com/blueprints` | Blueprint instances |
| `dashboard.render.com/account/*` | Account settings |

Service type prefixes in URL: `/web/`, `/pserv/`, `/worker/`, `/cron/`, `/static/`, `/d/` (database), `/redis/`. IDs are alphanumeric.

## Search & Filter

- **Service search**: Filter services by name on dashboard
- **Service type filter**: Filter by type (Web Service, Static Site, Private Service, Worker, Cron Job, Database, Redis)
- **Status filter**: Filter by status (Live, Building, Failed, Suspended)
- **Deploy log search**: Search within build/deploy log output
- **Live log search**: Filter live logs by keyword
- **No cross-service search**: Each service's logs and events are independent
- **Docs search**: Full-text documentation search

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Sidebar + service list/detail with full tabs |
| Tablet (768-1024px) | Collapsible sidebar + full content area |
| Mobile (<768px) | Hamburger nav + single-column; logs as scrollable view, shell impractical |

- Service list adapts from cards to a compact list on mobile
- Deploy logs are monospace with horizontal scroll for long lines
- Metrics charts resize responsively
- Environment variables table adapts to narrow widths (truncated values with expand)
- Live log stream works on mobile with auto-scroll

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs (no dashboard) |
| Free (Individual) | Static sites, web services (spin down after inactivity), 750 hrs/mo free compute |
| Individual ($7-225/mo per service) | Paid instance types, no spin-down, custom domains, persistent disks |
| Team ($19/seat/mo + usage) | Team management, shared billing, RBAC, audit log |
| Enterprise | SSO, custom SLA, dedicated support, advanced networking |
| Team roles | Owner (billing, member management, all services) → Admin (manage services) → Member (deploy, view) → Viewer (read-only) |

- Authentication: Email/password, GitHub OAuth, GitLab OAuth, Google OAuth
- Service-level access: All team members can access all services (no per-service permissions on standard plans)
- Env Groups: Shared across services — changes propagate automatically
- Auto-deploy: Can be toggled per service; manual deploy option available
- Notification preferences: Email, Slack (via webhook) for deploy events
- IP allowlisting: Available on Team/Enterprise plans

## Service Types

| Type | Use Case | Auto-deploy | Custom Domain |
|------|----------|-------------|---------------|
| Web Service | HTTP servers (API, frontend) | ✅ | ✅ |
| Private Service | Internal APIs (no public URL) | ✅ | — |
| Background Worker | Queue consumers, async tasks | ✅ | — |
| Static Site | HTML/CSS/JS hosting | ✅ | ✅ |
| Cron Job | Scheduled tasks | ✅ | — |
| PostgreSQL | Managed database | — | — |
| Redis | Managed cache/queue | — | — |

## Blueprint (Infrastructure as Code)

```yaml
services:
  - type: web
    name: my-api
    runtime: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: DATABASE_URL
        fromDatabase:
          name: my-db
          property: connectionString

databases:
  - name: my-db
    plan: starter
```

## Build & Deploy

- **Auto-deploy:** Push to connected branch triggers automatic build and deploy
- **Build cache:** Cached dependencies and build outputs for faster builds
- **Docker support:** Custom Dockerfile or Render's native runtimes
- **Native runtimes:** Node, Python, Go, Rust, Ruby, Elixir, Docker
- **Preview environments:** Automatic per-PR deploy with unique URL
- **Zero-downtime deploys:** New instances start before old ones stop
- **Rollback:** One-click rollback to any previous deploy

## Comparison with Alternatives

| Feature | Render | Heroku | Railway | Fly.io |
|---------|--------|--------|---------|--------|
| Free tier | Static sites only | Eco ($5) | $5 credit | $5 credit |
| Auto-deploy | ✅ | ✅ | ✅ | ✅ |
| Docker | ✅ | ✅ | ✅ | ✅ |
| Managed DB | PostgreSQL, Redis | PostgreSQL, Redis | PostgreSQL, Redis, MySQL | PostgreSQL |
| Blueprints (IaC) | ✅ | app.json | — | fly.toml |
| Preview envs | ✅ | Review apps | ✅ | — |
| Edge regions | — | — | — | ✅ |
