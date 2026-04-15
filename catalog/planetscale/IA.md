---
brand: PlanetScale
tagline: The MySQL-compatible serverless database platform.
category: Developer Tools
website: https://planetscale.com
---

# PlanetScale — Information Architecture

## Overview

PlanetScale is a serverless MySQL-compatible database platform built on Vitess (the technology that powers YouTube's database infrastructure). The IA is organized around a **Git-inspired database workflow** — the revolutionary concept is database branching: just as developers create Git branches for code changes, PlanetScale lets you create database branches for schema changes, then merge them via deploy requests (analogous to pull requests). This paradigm shapes the entire product architecture: databases contain branches, branches have schemas, and changes flow through a review process. The platform combines database management, schema migration, query insights, and connection management in a developer-oriented console.

## Site Map

```
app.planetscale.com
├── / (Organization dashboard — databases list)
├── /{org}/{database} (Database overview)
│   ├── /branches (Branch list)
│   │   └── /{branch_name} (Branch detail — schema, console, settings)
│   ├── /deploy-requests (Schema change requests)
│   │   └── /{dr_number} (Deploy request detail — diff, review, deploy)
│   ├── /console (Web SQL console)
│   ├── /insights (Query performance analytics)
│   ├── /settings
│   │   ├── /general
│   │   ├── /branches (Default branch, protection)
│   │   ├── /backups (Backup schedule)
│   │   ├── /boost (Query caching)
│   │   └── /danger-zone (Delete database)
│   └── /connect (Connection strings)
├── /{org}/settings
│   ├── /members
│   ├── /billing
│   ├── /integrations
│   ├── /sso
│   └── /audit-log
├── /docs (Documentation)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — organization-scoped: Databases, Settings, Docs
- **Database navigation**: Top tabs within database — Overview, Branches, Deploy Requests, Insights, Console, Settings
- **Branch navigation**: Branch selector dropdown (similar to Git branch switcher) — present in Console and Schema views
- **Deploy request navigation**: List view → detail view with schema diff, comments, and deploy action
- **Organization navigation**: Org switcher in top-left; Settings sub-nav for Members, Billing, Integrations
- **Console navigation**: SQL editor with schema browser sidebar (tables, columns)
- **Mobile**: Responsive but designed for desktop — SQL console requires wide viewport

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Database | Name, region, plan, branches, deploy requests, connection strings | Org-owned |
| Branch | Name, schema (tables/columns), parent branch, status (production, development), connection string | Part of database |
| Deploy Request | Source branch, target branch, schema diff, status (open, deployed, closed), comments, reviewer | Part of database |
| Schema | Tables, columns (name, type, constraints), indexes, foreign keys | Part of branch |
| Query Insight | Query pattern, execution count, latency (p50, p99), rows read/returned, time range | Analytics |
| Backup | Timestamp, branch, size, retention period, restore status | Part of database |
| Connection String | Host, username, password, SSL config, framework-specific format | Part of branch |

## User Flows

### Creating a Database
```
Clicks "New Database" → enters name, selects region (AWS us-east-1, eu-west-1, etc.) → Database created with a `main` branch (production) → Connection string provided → copy into application config → Connect via MySQL client, ORM, or web console
```

### Schema Change via Deploy Request
```
Developer creates a new branch from `main` (e.g., `add-users-table`) → Opens web console connected to the development branch → Runs DDL statements: `CREATE TABLE users (...)`, `ALTER TABLE ...` → Creates a Deploy Request: source=`add-users-table`, target=`main` → Schema diff displayed — reviewers see added/modified/removed tables and columns → Reviewer approves → "Deploy Changes" applies schema to production without downtime → PlanetScale handles online DDL — no table locks, no downtime
```

### Query Performance Analysis
```
Navigates to Insights tab → Sees top queries ranked by total time, frequency, or latency → Clicks a query → sees execution plan, latency percentiles, rows examined → Identifies slow queries → optimizes with indexes or query rewrites → PlanetScale Boost: enable query caching for specific query patterns
```

### Connecting from Application
```
Goes to Connect tab → selects branch and framework → Platform generates connection string in the framework's format (Rails, Django, Laravel, Prisma, etc.) → Downloads SSL certificate (or uses secure connection string with embedded cert) → Adds connection string to application's environment variables → Application connects via standard MySQL protocol
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Dashboard |
| `/{org}/{db}` | Database overview |
| `/{org}/{db}/branches` | Branch list |
| `/{org}/{db}/branches/{branch}` | Branch detail |
| `/{org}/{db}/deploy-requests` | Deploy request list |
| `/{org}/{db}/deploy-requests/{number}` | Deploy request detail |
| `/{org}/{db}/console` | SQL console |
| `/{org}/{db}/insights` | Query analytics |
| `/{org}/{db}/settings/*` | Database settings |
| `/{org}/{db}/connect` | Connection strings |
| `/{org}/settings/*` | Org settings |

Clean hierarchical routing: org → database → feature. Branch names in URLs. Deploy requests use sequential numbers (like GitHub PRs).

## Search & Filter

- **Database search**: Filter databases by name on dashboard
- **Branch filtering**: Filter by type (production, development), status
- **Deploy request filtering**: Filter by status (open, deployed, closed), author
- **Query Insights filtering**: Filter by time range, sort by total time, frequency, latency
- **Console**: SQL query execution — not a search feature per se, but the primary data exploration tool
- **Schema browser**: Browse tables and columns in console sidebar — no search
- **Audit log search**: Filter by user, action type, date range (Enterprise)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + content area with tables, schema diffs, console |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as drawer + simplified content |
| Mobile (<768px) | Hamburger nav + single-column; Console impractical on mobile |

- Schema diff view uses side-by-side on desktop, unified diff on mobile
- SQL console requires minimum ~1024px for comfortable use (editor + results table)
- Query insights charts resize responsively
- Connection string display adapts to viewport (code blocks with horizontal scroll)
- Deploy request conversation (comments) works well on mobile

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs (no app access) |
| Free (Hobby) | 1 database, 5GB storage, 1 billion row reads/mo, 10 million row writes/mo, 1 production branch |
| Scaler ($29/mo) | More resources, 2 production branches, horizontal sharding, query insights |
| Team | Scaler + org management, multiple members, deploy request approvals |
| Enterprise | SSO/SAML, audit logs, dedicated support, SLA, SOC 2 |
| Org roles | Admin (full control) → Member (create databases, branches, deploy requests) → Viewer (read-only) |
| Branch protection | Production branches require deploy requests; direct DDL blocked |

- Authentication: Email/password, GitHub OAuth, Google OAuth
- Database-level permissions: Admin, Writer, Reader per database
- Deploy request reviews: Can require approval from specific team members before deploying
- Branch protection: Production branches locked from direct schema changes — must go through deploy requests
- Connection passwords: Generated per-branch; rotatable without downtime
- Audit log: All schema changes, deployments, and access events logged (Enterprise)

## Git-Inspired Database Workflow

```
main (production) ←── deploy request (reviewed) ←── dev-branch (schema changes)
     ↓                                                    ↓
   Schema A ───── diff shows changes ─────── Schema A + new tables/columns
```

## CLI (pscale)

| Command | Description |
|---------|-------------|
| `pscale db create {name}` | Create new database |
| `pscale branch create {db} {branch}` | Create development branch |
| `pscale shell {db} {branch}` | Open SQL console |
| `pscale deploy-request create {db}` | Create deploy request |
| `pscale deploy-request deploy {db} {number}` | Deploy schema changes |
| `pscale connect {db} {branch}` | Create secure tunnel to branch |
| `pscale password create {db} {branch} {name}` | Generate connection password |
| `pscale audit-log list` | View audit log |

## Vitess Under the Hood

- **Horizontal sharding:** Automatically shard large tables across multiple nodes
- **Online DDL:** Schema changes without table locks or downtime (gh-ost / Vitess VReplication)
- **Connection pooling:** Built-in connection management for high-concurrency apps
- **Query routing:** Intelligent routing of queries to correct shard
- **VReplication:** Real-time data replication between shards and branches
- **MySQL protocol:** Full compatibility with MySQL client libraries and ORMs

## PlanetScale Boost (Query Caching)

- **Automatic caching:** Frequently-run read queries cached at the edge
- **TTL control:** Configure cache duration per query pattern
- **Cache invalidation:** Automatic invalidation on data changes
- **Performance:** Sub-millisecond reads from cache vs database round-trip
- **Analytics:** See cache hit rate and performance improvement per query

## Migration from Traditional MySQL

```
# Export schema from existing database
mysqldump --no-data existing_db > schema.sql

# Import to PlanetScale
pscale shell my-db main < schema.sql

# Or use PlanetScale Import tool (web UI)
# Supports direct import from AWS RDS, Google Cloud SQL, DigitalOcean
```

## Comparison with Alternatives

| Feature | PlanetScale | AWS RDS | Neon | Supabase |
|---------|-------------|---------|------|----------|
| Engine | MySQL (Vitess) | MySQL/Postgres | Postgres | Postgres |
| Branching | ✅ (core feature) | — | ✅ | — |
| Schema deploy reviews | ✅ | — | — | — |
| Scale to zero | ✅ (Hobby) | — | ✅ | — |
| Horizontal sharding | ✅ (automatic) | Read replicas | — | — |
| Online DDL | ✅ (zero-downtime) | Manual | — | — |
| Free tier | ✅ | 12-month trial | ✅ | ✅ |

## Query Insights Metrics

| Metric | Description |
|--------|-------------|
| Total time | Cumulative execution time across all calls |
| Call count | Number of times the query pattern was executed |
| Rows read | Average rows scanned per execution |
| Rows returned | Average rows returned per execution |
| P50 latency | Median query latency |
| P99 latency | 99th percentile latency (tail performance) |
| Full scan flag | Queries performing full table scans (optimization needed) |
