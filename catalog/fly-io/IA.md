---
brand: Fly.io
tagline: Run your apps close to your users. Deploy globally in minutes.
category: Developer Tools
website: https://fly.io
---

# Fly.io — Information Architecture

## Overview

Fly.io is an edge compute platform that runs full-stack applications on hardware in 30+ regions worldwide, deploying containers close to users via its Machines API. The IA reflects a **CLI-first, infrastructure-as-code philosophy** — while a web dashboard exists, the primary interface is the `flyctl` CLI and the Machines API. The dashboard serves as a monitoring and management companion rather than the primary creation interface. Key architectural concepts include Machines (individual VMs that can be started/stopped in milliseconds), Volumes (persistent storage), Fly Proxy (global Anycast load balancing), and Fly Postgres (managed Postgres clusters). The platform targets developers who want Heroku-like simplicity with infrastructure-level control and global edge deployment.

## Site Map

```
fly.io (marketing + dashboard)
├── / (Home — marketing)
├── /pricing
├── /docs (Documentation)
│   ├── /getting-started
│   ├── /apps
│   ├── /machines
│   ├── /networking
│   ├── /reference
│   └── /blueprints (Deployment guides)
├── /dashboard (App list)
│   └── /apps/{app_name}
│       ├── /overview (Status, machines, regions)
│       ├── /machines (Machine list — VMs)
│       │   └── /{machine_id}
│       ├── /monitoring (Metrics, logs)
│       ├── /networking (IP addresses, certificates, services)
│       ├── /volumes (Persistent storage)
│       ├── /secrets (Environment secrets)
│       ├── /tokens (Deploy tokens)
│       └── /settings
├── /dashboard/personal
│   ├── /billing
│   ├── /tokens
│   └── /settings
├── /dashboard/orgs/{org_slug}
│   ├── /billing
│   ├── /members
│   └── /settings
├── /blog
├── /community (Community forum)
└── /status (Status page)
```

## Navigation Model

- **Primary navigation**: Top bar — Apps, Machines, Docs, Blog, Community, Dashboard
- **Dashboard navigation**: Left sidebar — Apps (list), then within an app: Overview, Machines, Monitoring, Networking, Volumes, Secrets, Settings
- **CLI as primary nav**: Most users interact via `fly` CLI commands — `fly apps`, `fly deploy`, `fly machines`, `fly logs`
- **Utility navigation**: Top-right — org switcher, avatar → Account Settings, Billing, Tokens
- **Docs navigation**: Left sidebar TOC organized by topic (Getting Started, Apps, Machines, Networking, Databases, Reference)
- **Region awareness**: Machine list shows region codes (iad, cdg, nrt, etc.) prominently
- **Mobile**: Dashboard is responsive; CLI is the recommended mobile interface

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| App | Name, organization, regions, machines, volumes, secrets, networking config | belongs to Organization |
| Machine | ID, region, state (started/stopped/destroyed), image, CPU/memory config, checks | belongs to app |
| Volume | ID, region, size, attached machine, snapshots | belongs to app |
| Secret | Key-value pair, encrypted at rest, available to all machines | belongs to app |
| IP Address | Type (v4 shared, v4 dedicated, v6), region (global Anycast) | belongs to app |
| Certificate | Custom domain, DNS validation status, TLS cert status | belongs to app |
| Fly Postgres Cluster | Postgres app with primary + replicas across regions | belongs to Organization |
| Blueprint | Deployment guide for specific stack (Rails, Django, Next.js, etc.) | curated by Fly.io |
| Organization | Name, members, apps, billing, tokens | belongs to Organization |

## User Flows

### Deploying an App (CLI-First)

```
Developer runs `fly launch` in project directory →
  CLI auto-detects framework → generates `fly.toml` config and Dockerfile →
  Selects organization, app name, regions →
  `fly deploy` builds Docker image → pushes to Fly registry → creates Machine(s) →
  App deployed to selected region(s) with Anycast IP →
  Subsequent deploys: `fly deploy` — builds and performs rolling update
```


### Multi-Region Deployment

```
Developer deploys app to primary region (e.g., `iad`) →
  Adds regions: `fly scale count 2 --region cdg,nrt` (Europe, Asia) →
  Fly Proxy routes users to nearest region via Anycast →
  For databases: sets up read replicas in additional regions →
  `fly regions list` shows current deployment topology
```


### Machine Management

```
Navigate to Dashboard → App → Machines (or `fly machines list`) →
  See all machines: ID, region, state, CPU/RAM, image version →
  Start/stop individual machines for cost control →
  Scale horizontally: add machines in specific regions →
  Scale vertically: change CPU/memory per machine
```


### Secrets Management

```
Developer runs `fly secrets set DATABASE_URL=postgres://...` →
  Secret encrypted and stored in Fly's vault →
  All machines in the app can access via environment variable →
  Setting a secret triggers a rolling restart of all machines →
  Dashboard shows secret names (not values) — values only accessible at runtime
```


## URL / Route Structure


```
fly.io/                                       # Marketing home
fly.io/dashboard                              # App list
fly.io/dashboard/apps/{app_name}              # App overview
fly.io/dashboard/apps/{app_name}/machines     # Machine list
fly.io/dashboard/apps/{app_name}/machines/{id} # Machine detail
fly.io/dashboard/apps/{app_name}/monitoring   # Metrics and logs
fly.io/dashboard/apps/{app_name}/networking   # IPs and certs
fly.io/dashboard/apps/{app_name}/volumes      # Volumes
fly.io/dashboard/apps/{app_name}/secrets      # Secrets
fly.io/dashboard/orgs/{slug}/*                # Organization management
fly.io/docs/*                                 # Documentation
fly.io/dashboard/apps/{app_name}/settings              # App settings
fly.io/dashboard/apps/{app_name}/tokens                # Deploy tokens
fly.io/dashboard/apps/{app_name}/activity              # Activity log
fly.io/dashboard/personal/settings                     # Personal settings
fly.io/dashboard/personal/tokens                       # Personal tokens
fly.io/dashboard/orgs/{slug}/settings                  # Org settings
fly.io/dashboard/orgs/{slug}/members                   # Org members
fly.io/dashboard/orgs/{slug}/billing                   # Org billing
fly.io/docs/reference/fly-launch/                      # fly launch reference
fly.io/docs/blueprints/                                # Deployment blueprints
fly.io/docs/machines/                                   # Machines API docs
fly.io/status                                           # Status page
```

App names are globally unique slugs. Machine IDs are alphanumeric. Dashboard under `/dashboard` prefix.

## Search & Filter

- **App search**: Search apps by name on dashboard
- **Machine filtering**: Filter by region, state (started, stopped), in dashboard
- **Log search**: Filter logs by region, machine ID, time range; keyword search in log output
- **Docs search**: Full-text documentation search (Algolia-powered)
- **CLI search**: `fly apps list`, `fly machines list` with text-based filtering
- **No marketplace/template search**: Blueprints are in docs, not a searchable marketplace
- **Metrics filtering**: Time range, region, machine

- **Volume filtering**: Filter volumes by region, attached machine, size
- **Blueprint search**: Search deployment guides by framework or language
- **Activity log search**: Search app activity by event type, date range
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Sidebar + main content (machine table, metrics charts, log stream) |
| Tablet (768-1024px) | Collapsible sidebar + full content |
| Mobile (<768px) | Hamburger nav + single-column; machine table scrolls horizontally |

- CLI is the primary interface — no responsive constraints
- Dashboard machine list shows region codes as colored badges (always visible)
- Metrics charts resize with viewport
- Log stream is monospace with auto-scroll (works on mobile)
- Docs site is fully responsive with collapsible sidebar TOC
- Marketing site is fully responsive with mobile-first design


### Platform-Specific UX
- CLI-first philosophy means `flyctl` is the primary interface — dashboard is supplementary
- Machines can be started/stopped in milliseconds for scale-to-zero cost optimization
- Anycast networking routes users to the nearest region automatically via global IP
- WireGuard VPN tunnels provide secure access to private app networks during development
- `fly.toml` configuration file centralizes app settings (services, ports, health checks, scaling)
- Blueprints in documentation provide framework-specific deployment guides (Rails, Django, Next.js, Elixir)
- Volume snapshots provide point-in-time backups for persistent storage
- Fly Postgres is a managed Postgres deployed as a Fly app with read replicas
- Machine API enables programmatic lifecycle management for infrastructure-as-code workflows
- Deploy tokens are scoped per-app for CI/CD integration without full account access
- Metrics dashboard shows CPU, memory, bandwidth, and request latency per machine and region


### CLI Commands (Primary Interface)
```
fly launch     # Auto-detect framework, generate config, deploy
fly deploy     # Build and deploy from current directory
fly scale      # Adjust machine count and size
fly machines   # List, start, stop, destroy machines
fly logs       # Stream application logs
fly secrets    # Manage environment secrets
fly ssh        # SSH into running machines
fly proxy      # Proxy local port to remote machine
fly volumes    # Manage persistent storage volumes
fly status     # Show app status and machine info
```

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs, community forum |
| Free (Hobby) | Up to 3 shared-CPU VMs, 3 shared-IPv4, 1GB volumes, limited free allowance |
| Pay-as-you-go | Usage-based billing, all machine types, dedicated CPU, GPU machines |
| Organization | Shared billing, member management, deploy tokens, SSO (Enterprise) |
| Org roles | Admin (full control, billing, members) → Member (deploy, manage apps) → Billing Manager |

- Authentication: Email/password, GitHub OAuth
- Deploy tokens: Scoped to specific apps for CI/CD (not full account access)
- Secrets: Encrypted at rest; not readable via API or dashboard — runtime-only
- Networking: Private networking between apps in same org; WireGuard VPN for dev access
- Machines API: Full REST API for programmatic machine lifecycle management
- IP restrictions: Apps can bind to private or public IPs; internal services accessible only within the org network
