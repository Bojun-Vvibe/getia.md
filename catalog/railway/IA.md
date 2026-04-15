---
brand: Railway
tagline: Bring your code, we'll handle the rest.
category: Developer Tools
website: https://railway.app
---

# Railway — Information Architecture

## Overview

Railway is a cloud deployment platform that emphasizes simplicity and developer experience. The IA is built around a unique **project canvas model** — each project is a visual canvas where services (apps, databases, cron jobs) appear as connected cards that can be arranged spatially. This canvas metaphor differentiates Railway from traditional dashboard-based platforms (Heroku, Render): you can visually see your infrastructure topology. Each service card on the canvas links to logs, deployments, variables, and settings. Railway supports deploying from GitHub, Docker, or templates, and includes managed databases (Postgres, Redis, MySQL, MongoDB) as first-class canvas objects.

## Site Map

```
railway.app
├── / (Home — marketing)
├── /pricing
├── /templates (Community deployment templates)
│   └── /{template_slug}
├── /changelog
├── /docs (Documentation)
├── /dashboard (Projects list)
├── /project/{project_id} (Project canvas)
│   ├── /service/{service_id} (Service detail)
│   │   ├── /deployments
│   │   │   └── /{deployment_id} (Deployment logs)
│   │   ├── /variables (Environment variables)
│   │   ├── /metrics (CPU, memory, network)
│   │   ├── /settings (Build, deploy, networking config)
│   │   └── /volumes
│   └── /settings (Project settings)
│       ├── /general
│       ├── /members
│       ├── /environments
│       └── /danger
├── /account
│   ├── /billing
│   ├── /tokens
│   ├── /teams
│   └── /referrals
└── /auth
```

## Navigation Model

- **Primary navigation**: Top bar — Dashboard (projects list), Templates, Docs, changelog; team selector
- **Canvas navigation**: The project canvas IS the navigation — click service cards to drill into detail; drag to arrange; zoom/pan the canvas
- **Service navigation**: Within a service — tabs for Deployments, Variables, Metrics, Settings, Volumes
- **Environment selector**: Top bar within a project — switch between environments (production, staging, development)
- **Utility navigation**: Top-right — avatar → Account, Billing, Teams, Tokens, Sign out
- **Template navigation**: Browse templates by category with search
- **Mobile**: Canvas is viewable but interaction-limited; service details work well on mobile

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | Name, canvas (visual layout of services), environments, members, settings | User/Team-owned |
| Service | Name, source (GitHub repo, Docker image, or database), deployments, variables, volumes, networking | Part of project |
| Deployment | Build logs, deploy logs, status, commit hash, timestamp, resource usage | Part of service |
| Environment | Named deployment context (production, staging, etc.) with independent variables and service instances | Part of project |
| Variable | Key-value pair, scoped to service + environment, supports references (${{service.VAR}}) | Part of service |
| Volume | Persistent storage attached to a service, mount path, size | Part of service |
| Template | Pre-configured project blueprint with services, variables, and deployment instructions | Community/Railway |
| Database Service | Managed Postgres/Redis/MySQL/MongoDB as a canvas service with connection string | Part of project |

## User Flows

### Deploying from GitHub
```
Clicks "New Project" → "Deploy from GitHub Repo" → Connects GitHub → selects repository → Railway auto-detects language/framework → configures build (Nixpacks) → Service appears as a card on the project canvas → Deployment starts automatically → build + deploy logs stream in real-time → Public URL generated (or custom domain configurable) → Subsequent pushes to the configured branch trigger automatic deploys
```

### Adding a Database
```
On the project canvas → right-click or "New" → "Database" → Selects database type (Postgres, Redis, MySQL, MongoDB) → Database service appears as a card on the canvas → Connection string auto-populated as variable → reference from app service using `${{Postgres.DATABASE_URL}}` → Database is accessible immediately — no configuration needed
```

### Multi-Environment Workflow
```
Creates environments (production, staging, development) in Project Settings → Each environment has independent service deployments and variables → Environment selector in top bar switches the canvas view → Deploy to staging first → test → promote to production → Variables can differ per environment (different API keys, database URLs)
```

### Template Deployment
```
Browses template gallery (e.g., "Next.js + Postgres + Redis") → Clicks "Deploy" → configures variables (API keys, secrets) → Railway provisions all services defined in the template → Canvas shows the complete topology with connected services → Customizes by connecting their own GitHub repo
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Marketing home |
| `/dashboard` | Projects list |
| `/project/{uuid}` | Project canvas |
| `/project/{uuid}/service/{uuid}` | Service detail |
| `/project/{uuid}/service/{uuid}/deployments/{uuid}` | Deployment logs |
| `/project/{uuid}/service/{uuid}/variables` | Variables |
| `/project/{uuid}/service/{uuid}/metrics` | Metrics |
| `/project/{uuid}/settings` | Project settings |
| `/templates` | Template gallery |
| `/templates/{slug}` | Template detail |
| `/account/*` | Account settings |
| `/docs/*` | Documentation |

UUIDs for projects, services, and deployments. Templates use slugs.

## Search & Filter

- **Project search**: Search projects by name on dashboard
- **Template search**: Full-text search + category filters (Databases, Frameworks, Tools, etc.)
- **Log search**: Search/filter deployment logs by keyword (within a specific deployment)
- **Variable search**: Filter variables by key name within a service
- **No cross-project search**: Projects are independent workspaces
- **Docs search**: Full-text documentation search

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full project canvas with service cards, zoom/pan, drag-and-drop |
| Desktop (1024-1280px) | Canvas with smaller cards, fewer visible at once |
| Tablet (768-1024px) | Canvas viewable but cramped; service detail as slide-over panel |
| Mobile (<768px) | Canvas replaced with service list view; service detail full-screen |

- The canvas is the most distinctive UI element — uses WebGL/Canvas rendering for smooth pan/zoom
- On mobile, the canvas experience degrades to a list of services (practical but loses the visual topology)
- Deployment logs are monospace with automatic scroll and search highlighting
- Metrics charts resize responsively
- Template cards reflow from grid to single-column

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs, template gallery (view only) |
| Free (Hobby) | $5 free credit/mo, limited resources, 1 member per project |
| Pro ($5/seat/mo + usage) | Unlimited projects, team members, higher resource limits, usage-based billing |
| Team | Pro features + shared billing, team management, role-based access |
| Enterprise | SSO, audit logs, SLA, priority support, custom networking |
| Project roles | Admin (full control) → Member (deploy, manage services) → Viewer (read-only) |

- Authentication: Email/password, GitHub OAuth
- Usage-based billing: CPU, memory, network, and storage billed per usage (Pro plan)
- Environment isolation: Each environment has separate deployments and variables
- Variable visibility: Secrets masked in UI; only accessible to service runtime
- Public networking: Services can have public URLs or be private (service-to-service only)
- Token-based CI: API tokens for deploying from CI/CD pipelines

## Service Types

| Type | Description | Examples |
|------|-------------|---------|
| Web service | HTTP server exposed via public URL | Express, Next.js, Rails, Django |
| Worker | Background process, no public URL | Queue consumers, cron jobs |
| Database | Managed database service | PostgreSQL, MySQL, Redis, MongoDB |
| Cron job | Scheduled task execution | Daily reports, cleanup scripts |
| Docker | Custom Docker container | Any containerized application |

## Deployment Pipeline

```
Git Push (or Docker Push) → Build (Nixpacks auto-detect or Dockerfile) → Health Check → Deploy → Route Traffic → Previous Deploy Available for Rollback
```

## Infrastructure Features

| Feature | Description |
|---------|-------------|
| Nixpacks | Auto-detect language and build (Node, Python, Go, Rust, etc.) |
| Dockerfile support | Custom Dockerfiles for full control |
| Environment variables | Per-service, per-environment variable management |
| Private networking | Services communicate via private network (no public exposure) |
| Volumes | Persistent storage attached to services |
| Scaling | Horizontal (multiple instances) and vertical (CPU/RAM) |
| Custom domains | Map custom domains with automatic SSL |
| Health checks | HTTP or TCP health checks for zero-downtime deploys |
| Rollbacks | One-click rollback to any previous deployment |
| Cron schedules | Schedule jobs with cron expressions |

## Pricing Model

| Plan | Usage | Price |
|------|-------|-------|
| Trial | $5 credit | Free |
| Hobby | $5/mo + usage | From $5/mo |
| Pro | Team features + usage | $20/seat/mo |
| Enterprise | Custom | Custom |

## CLI

| Command | Description |
|---------|-------------|
| `railway login` | Authenticate with Railway |
| `railway init` | Initialize project |
| `railway up` | Deploy current directory |
| `railway logs` | View service logs |
| `railway variables` | Manage environment variables |
| `railway run {cmd}` | Run command with Railway env vars |
| `railway shell` | Open shell with Railway env vars |

## Template Marketplace

- **One-click deploy:** Templates for popular frameworks and stacks
- **Categories:** Web apps, APIs, databases, bots, tools
- **Popular templates:** Next.js, Express, Django, FastAPI, Strapi, Ghost, Umami
- **Community contributions:** Anyone can publish templates
- **Starter repos:** GitHub repos pre-configured for Railway deployment

## Networking

| Feature | Description |
|---------|-------------|
| Public domain | `{service}.up.railway.app` (auto-generated) |
| Custom domains | Map your own domain with automatic SSL |
| Private networking | Internal DNS between services (e.g., `db.railway.internal`) |
| TCP proxy | Expose non-HTTP services (databases, Redis) via TCP |
| Static IPs | Fixed outbound IPs for allowlisting (Pro plan) |
