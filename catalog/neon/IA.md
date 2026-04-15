---
brand: Neon
tagline: Serverless Postgres. Branch your database like code.
category: Developer Tools
website: https://neon.tech
---

# Neon — Information Architecture

## Overview

Neon is a serverless Postgres platform that separates storage and compute, enabling features impossible with traditional Postgres: instant branching, autoscaling to zero, point-in-time restore, and bottomless storage. The IA follows a **project-branch-endpoint model** — each project is a Postgres cluster, branches are copy-on-write snapshots of the database, and endpoints are compute instances that serve queries. Like PlanetScale, Neon embraces the Git branching metaphor for databases, but applies it to Postgres. The platform targets developers who want managed Postgres with developer-friendly features (database preview branches for PRs, instant provisioning, scale-to-zero for cost efficiency).

## Site Map

```
console.neon.tech
├── / (Projects list — dashboard)
├── /projects/{project_id}
│   ├── /branches (Branch list)
│   │   └── /{branch_id} (Branch detail — tables, roles, compute)
│   ├── /tables (Schema browser / table viewer)
│   ├── /sql-editor (Web SQL console)
│   ├── /databases (Database list within project)
│   ├── /roles (Postgres roles / users)
│   ├── /monitoring (CPU, memory, connections, storage metrics)
│   ├── /integrations (Vercel, GitHub, Hasura, etc.)
│   ├── /settings
│   │   ├── /general
│   │   ├── /compute (Autoscaling config)
│   │   ├── /storage (Data retention, history)
│   │   └── /delete
│   └── /connection-details (Connection strings)
├── /settings
│   ├── /account
│   ├── /billing
│   ├── /api-keys
│   └── /organizations
├── /docs (Documentation — docs.neon.tech)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Projects (top-level list), then within a project: Dashboard, Branches, Tables, SQL Editor, Databases, Roles, Monitoring, Integrations, Settings
- **Branch selector**: Prominent dropdown at top of project pages — switch between branches to view their schema, data, and compute
- **Connection details**: Accessible from dashboard and sidebar — shows connection string with branch selector
- **Utility navigation**: Top-right — organization switcher, avatar → Account Settings, Billing, API Keys
- **Docs navigation**: Separate docs site (docs.neon.tech) with sidebar table of contents
- **Mobile**: Responsive console; SQL editor works but is optimized for desktop

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | Name, region, Postgres version, branches, databases, roles, connection pooler config | User/Org-owned |
| Branch | Name, parent branch, creation point (LSN/timestamp), compute endpoint, databases, schema | Part of project |
| Compute Endpoint | vCPU size, autoscaling range (min/max CU), suspend timeout, status (active/idle) | Part of branch |
| Database | Name (within Postgres), owner role, size, tables | Part of branch |
| Role | Postgres role name, password, permissions | Part of project |
| Table | Name, columns, data (browseable in UI), row count | Part of database |
| Integration | Connected service (Vercel, GitHub), config, status | Part of project |
| Monitoring Metric | CPU utilization, RAM, active connections, storage size, compute hours | Analytics |

## User Flows

### Creating a Project
```
Clicks "New Project" → enters name, selects region (AWS us-east-1, eu-west-1, ap-southeast-1) → Selects Postgres version (14, 15, 16) → Project created instantly (< 1 second) with default `main` branch → Connection string displayed immediately — copy for application use → Default database `neondb` and role created automatically
```

### Database Branching for Development
```
Developer navigates to Branches → "Create Branch" → Selects parent branch (`main`) and branching point (current or point-in-time) → Branch created instantly (copy-on-write — no data duplication) → Branch gets its own compute endpoint and connection string → Developer tests schema changes on branch without affecting production → When satisfied, applies migration to `main` via application migration tool
```

### Vercel Integration (Preview Branches)
```
Connects Neon project to Vercel project via Integration → For each Vercel preview deployment (PR), Neon creates a database branch automatically → Preview deployment connects to its own database branch → PR merged → preview branch can be auto-deleted → Enables full-stack preview environments with isolated data
```

### Point-in-Time Restore
```
Navigates to branch → History → Selects a timestamp or LSN to restore to → Creates a new branch from that point in history → New branch has the exact data state at that moment → Can be used for debugging, data recovery, or analysis
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Projects dashboard |
| `/projects/{project_id}` | Project overview |
| `/projects/{project_id}/branches` | Branch list |
| `/projects/{project_id}/branches/{branch_id}` | Branch detail |
| `/projects/{project_id}/tables` | Table browser |
| `/projects/{project_id}/sql-editor` | SQL console |
| `/projects/{project_id}/monitoring` | Metrics |
| `/projects/{project_id}/settings/*` | Project settings |
| `/settings/*` | Account settings |

Project IDs are short alphanumeric strings. Branch IDs are also alphanumeric. Clean hierarchical routing.

## Search & Filter

- **Project search**: Filter projects by name on dashboard
- **Branch filtering**: Filter by parent branch, creation date
- **Table browser**: Browse tables with column details; data viewer with row pagination
- **SQL Editor**: Full SQL query capability — the primary data exploration tool
- **Monitoring filters**: Time range selector (1h, 6h, 24h, 7d, 30d) for metrics
- **No cross-project search**: Each project is independent
- **Docs search**: Full-text search on docs.neon.tech

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + content area with tables, charts, SQL editor |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as drawer + simplified layout |
| Mobile (<768px) | Hamburger nav + single-column; SQL editor limited but functional |

- Connection string display includes copy button at all sizes
- Branch selector remains accessible as a dropdown at all breakpoints
- Monitoring charts resize responsively (axis labels may truncate)
- Table data viewer scrolls horizontally for wide tables
- SQL editor on mobile shows results below query input (stacked)

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs (no console) |
| Free | 1 project, 0.5 GiB storage, 1 branch (+ dev branches with 24hr data retention), autosuspend after 5 min |
| Launch ($19/mo) | 10 projects, 10 GiB storage, 100 branches, configurable autosuspend, point-in-time restore (7 days) |
| Scale ($69/mo) | 50 projects, 50 GiB storage, 500 branches, 30-day history, read replicas, IP allow list |
| Enterprise | Custom limits, SSO, audit logs, SLA, dedicated support, 99.99% uptime |
| Organization roles | Admin (full control, billing) → Member (manage projects) → Viewer (read-only) |
| Database roles | Postgres standard roles — owner, read-write, read-only |

- Authentication: Email/password, GitHub OAuth, Google OAuth
- API keys: Bearer tokens for Neon API (manage projects, branches programmatically)
- Connection auth: Postgres password per role; connection pooler (PgBouncer) included
- Branch permissions: Branches inherit project permissions; no per-branch access control
- IP allowlisting: Scale plan and above — restrict database connections to specific IPs
- Data residency: Region selection at project creation; data stays in chosen AWS region

## Architecture Concepts

| Concept | Description |
|---------|-------------|
| Compute | Postgres server instance; scales 0.25 to 8 vCPU; autosuspends when idle |
| Storage | Separated from compute; copy-on-write; shared across branches |
| Branch | Copy-on-write snapshot of database; instant creation; no data duplication |
| Endpoint | Network address for connecting to a branch's compute |
| Connection Pooler | PgBouncer built-in; transaction mode by default |
| Autoscaling | Compute scales up/down based on query load |
| Scale to Zero | Compute suspends after idle timeout; resumes in ~0.5s on first query |
| Point-in-Time Restore | Create branch from any point in history (up to retention window) |

## Framework Connection Strings

```
# Prisma
DATABASE_URL="postgresql://{user}:{password}@{host}/{dbname}?sslmode=require"

# Django
DATABASES = {'default': dj_database_url.parse(os.environ['DATABASE_URL'])}

# Drizzle
const db = drizzle(neon(process.env.DATABASE_URL))

# Raw psql
psql "postgresql://{user}:{password}@{host}/{dbname}?sslmode=require"
```

## Branching Strategies

- **Preview branches:** One database branch per PR; auto-created via Vercel/GitHub integration
- **Development branches:** Long-lived branch for development environment
- **Staging branches:** Snapshot of production for testing migrations
- **Point-in-time debug:** Branch from a specific timestamp to investigate data issues
- **Schema migration testing:** Apply and validate DDL on branch before production

## CLI Usage

```
# Create project
neonctl projects create --name my-project --region aws-us-east-1

# Create branch
neonctl branches create --project-id {id} --name dev --parent main

# Get connection string
neonctl connection-string --project-id {id} --branch-name dev

# List branches
neonctl branches list --project-id {id}

# Delete branch
neonctl branches delete --project-id {id} --branch dev
```

## Comparison with Traditional Postgres

| Feature | Neon | Traditional Postgres | RDS |
|---------|------|---------------------|-----|
| Provisioning | < 1 second | Minutes | Minutes |
| Branching | Instant (copy-on-write) | Full copy required | Snapshot (minutes) |
| Scale to zero | ✅ | — | — |
| Autoscaling | ✅ (0.25-8 CU) | Manual | Limited |
| Storage | Separated, bottomless | Attached disk | EBS volumes |
| Point-in-time restore | Branch from any point | WAL replay | Automated backups |
| Cost (idle) | $0 (free tier) | Always-on cost | Always-on cost |

## Postgres Extensions

- **pgvector:** Vector similarity search for AI/ML embeddings
- **PostGIS:** Geospatial data types and queries
- **pg_trgm:** Trigram-based text similarity and fuzzy search
- **hstore:** Key-value store within Postgres
- **uuid-ossp:** UUID generation functions
- **citext:** Case-insensitive text type
- **100+ extensions** available; enabled per-database
