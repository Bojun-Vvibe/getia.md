---
brand: Supabase
tagline: "The open source Firebase alternative. Postgres database, auth, storage, edge functions, and realtime."
category: Developer Platform
website: https://supabase.com
---

# Supabase — Information Architecture

## Overview

Supabase is an open-source developer platform built on PostgreSQL. The mental model is **Firebase but with Postgres** — developers get a full backend (database, auth, storage, realtime, edge functions) with a dashboard that exposes raw Postgres power while remaining approachable. Supabase differentiates through its SQL-first approach: the Table Editor looks like a spreadsheet but runs real SQL, the SQL Editor is a first-class citizen, and Row Level Security (RLS) replaces backend authorization logic. Every feature auto-generates REST and GraphQL APIs.

## Site Map

```
├── Dashboard (Organization Overview)
│   ├── Projects List
│   │   ├── Project Card (name, region, status, plan)
│   │   └── Quick Actions (pause, settings)
│   ├── Create New Project
│   ├── Organization Settings
│   └── Usage Overview
├── Project Dashboard
│   ├── Home
│   │   ├── Project Status (healthy, paused, upgrading)
│   │   ├── API URL & Keys (anon key, service role key)
│   │   ├── Getting Started (connect guide)
│   │   ├── Database Size
│   │   ├── API Requests (24h chart)
│   │   ├── Auth Users Count
│   │   ├── Storage Usage
│   │   └── Edge Function Invocations
│   ├── Table Editor
│   │   ├── Table List (sidebar)
│   │   ├── Table View (spreadsheet-like grid)
│   │   │   ├── Add / Edit / Delete Rows (inline)
│   │   │   ├── Column Types (text, int, uuid, json, enum, array, etc.)
│   │   │   ├── Add Column
│   │   │   ├── Foreign Key Relationships (visual)
│   │   │   ├── Filters (column-based)
│   │   │   ├── Sort
│   │   │   ├── CSV Import / Export
│   │   │   └── JSON View Toggle
│   │   ├── Create Table (UI or SQL)
│   │   ├── Views (virtual tables)
│   │   └── Foreign Tables (external data sources)
│   ├── SQL Editor
│   │   ├── Query Editor (Monaco editor)
│   │   ├── Results Table (below editor)
│   │   ├── Saved Queries (snippets)
│   │   ├── Templates (common queries)
│   │   ├── AI Assistant (generate SQL from natural language)
│   │   ├── Query History
│   │   └── Multiple Tabs
│   ├── Database
│   │   ├── Tables (schema browser)
│   │   ├── Schemas (public, auth, storage, custom)
│   │   ├── Roles
│   │   ├── Extensions (PostGIS, pgvector, pg_cron, etc.)
│   │   ├── Triggers
│   │   ├── Functions (Postgres functions)
│   │   ├── Indexes
│   │   ├── Types (enums, composites)
│   │   ├── Migrations (schema diff, migration history)
│   │   ├── Wrappers (foreign data wrappers — Stripe, Firebase, S3)
│   │   ├── Backups (point-in-time recovery)
│   │   └── Replication
│   ├── Authentication
│   │   ├── Users
│   │   │   ├── User List (email, provider, created, last sign-in)
│   │   │   ├── User Detail (metadata, sessions, factors)
│   │   │   └── Create User / Invite
│   │   ├── Policies (Row Level Security)
│   │   │   ├── Policy List (per table)
│   │   │   ├── Create Policy (template or custom SQL)
│   │   │   └── Policy Editor
│   │   ├── Providers
│   │   │   ├── Email / Password
│   │   │   ├── Phone / OTP
│   │   │   ├── Social (Google, GitHub, Apple, Twitter, etc.)
│   │   │   ├── SAML / SSO
│   │   │   └── Anonymous Sign-in
│   │   ├── Rate Limits
│   │   ├── Email Templates (confirmation, reset, invite, magic link)
│   │   ├── URL Configuration (redirect URLs)
│   │   ├── Hooks (pre/post auth events)
│   │   └── Sessions & MFA Settings
│   ├── Storage
│   │   ├── Buckets
│   │   │   ├── Bucket List (public / private)
│   │   │   ├── File Browser (folder tree)
│   │   │   ├── Upload Files (drag & drop)
│   │   │   ├── File Preview (images, PDFs)
│   │   │   ├── File URL (public or signed)
│   │   │   └── Bucket Policies (RLS on storage)
│   │   └── Settings (file size limits, MIME types)
│   ├── Edge Functions
│   │   ├── Function List
│   │   ├── Function Detail
│   │   │   ├── URL Endpoint
│   │   │   ├── Logs (invocations)
│   │   │   ├── Metrics (invocation count, duration)
│   │   │   └── Secrets (env vars)
│   │   ├── Deploy (via CLI: `supabase functions deploy`)
│   │   └── Documentation (auto-generated)
│   ├── Realtime
│   │   ├── Inspector (live WebSocket messages)
│   │   ├── Channels (active subscriptions)
│   │   ├── Broadcast (pub/sub)
│   │   ├── Presence (online users)
│   │   └── Postgres Changes (CDC — Change Data Capture)
│   ├── API
│   │   ├── Auto-generated Docs
│   │   │   ├── REST API (from schema)
│   │   │   ├── GraphQL API
│   │   │   ├── Auth API
│   │   │   └── Storage API
│   │   ├── API Settings (URL, keys)
│   │   ├── API Logs
│   │   └── GraphQL (Playground / GraphiQL)
│   ├── Advisors
│   │   ├── Performance (query analysis, index recommendations)
│   │   ├── Security (RLS checks, exposed tables)
│   │   └── Lint (schema issues)
│   ├── Reports
│   │   ├── API Usage
│   │   ├── Database Performance
│   │   ├── Auth Usage
│   │   └── Storage Usage
│   ├── Logs
│   │   ├── API Logs (PostgREST)
│   │   ├── Postgres Logs
│   │   ├── Auth Logs
│   │   ├── Storage Logs
│   │   ├── Edge Function Logs
│   │   ├── Realtime Logs
│   │   ├── Log Explorer (custom SQL queries over logs)
│   │   └── Filters (status, method, path, timestamp)
│   ├── Integrations
│   │   ├── Vercel
│   │   ├── GitHub (branching — database branching per PR)
│   │   └── Third-party
│   └── Settings
│       ├── General (name, region, pause project)
│       ├── Database (connection string, connection pooling, SSL)
│       ├── API (URL, keys, JWT secret, rate limiting)
│       ├── Auth (site URL, redirects, session length, MFA)
│       ├── Storage (file size limits)
│       ├── Edge Functions (secrets)
│       ├── Addons (compute, PITR, custom domains, IPv4)
│       ├── Vault (secrets management — encrypted at rest)
│       └── Danger Zone (pause, delete)
├── Organization
│   ├── General (name, billing email)
│   ├── Team (members, roles: owner/admin/developer/read-only)
│   ├── Integrations
│   ├── Billing (plan, usage, invoices)
│   ├── Usage (per project breakdown)
│   ├── OAuth Apps
│   ├── Audit Logs
│   └── Legal / DPA
├── CLI (`supabase`)
│   ├── supabase init (create local project)
│   ├── supabase start (local dev with Docker)
│   ├── supabase db diff (migration generation)
│   ├── supabase db push (apply migrations)
│   ├── supabase functions serve/deploy
│   ├── supabase gen types (TypeScript types from schema)
│   └── supabase link (connect to remote project)
└── Docs (supabase.com/docs)
    ├── Getting Started
    ├── Database
    ├── Auth
    ├── Storage
    ├── Edge Functions
    ├── Realtime
    ├── Client Libraries (JavaScript, Flutter, Swift, Kotlin, Python)
    └── Self-Hosting
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed | Supabase logo, org/project breadcrumb, project switcher, feedback, help, user menu |
| **Left Sidebar** | Fixed, collapsible (icon or expanded) | Table Editor, SQL Editor, Database, Auth, Storage, Edge Functions, Realtime, API, Advisors, Reports, Logs, Settings |
| **Table Sidebar** | Within Table Editor | List of tables, views, foreign tables (expandable) |
| **SQL Tabs** | Tab bar in SQL Editor | Multiple query tabs (like browser tabs) |
| **Schema Selector** | Dropdown in Database section | Switch between schemas (public, auth, storage, custom) |
| **Command Palette** | ⌘K | Navigate pages, tables, switch projects |

### Sidebar Structure
```
[Project Switcher ▾]
───────────────
📊 Home
📋 Table Editor
📝 SQL Editor
🗄 Database
🔐 Authentication
📁 Storage
⚡ Edge Functions
🔄 Realtime
📡 API
───────────────
🔍 Advisors
📈 Reports
📋 Logs
🔌 Integrations
⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Organization | name, billing_email, plan, members[] | has many Projects |
| Project | name, ref (unique ID), region, status (active/paused), database_url, api_url, anon_key, service_role_key | belongs to Organization |
| Table | schema, name, columns[], primary_key, rls_enabled, rls_forced | belongs to Project, has Policies |
| Column | name, type (Postgres types), default, nullable, unique, foreign_key | belongs to Table |
| Policy (RLS) | name, table, command (SELECT/INSERT/UPDATE/DELETE), definition (SQL), check (SQL), roles | belongs to Table |
| User (Auth) | id, email, phone, provider, last_sign_in, created_at, user_metadata, app_metadata, factors[] | belongs to Project |
| Bucket | name, public, file_size_limit, allowed_mime_types | belongs to Project |
| File | name, path, bucket, size, mime_type, created_at, metadata | belongs to Bucket |
| EdgeFunction | name, slug, status, verify_jwt, import_map | belongs to Project |
| Extension | name, schema, version, comment | belongs to Project database |
| Migration | version, name, sql, applied_at | belongs to Project |
| Secret (Vault) | name, value (encrypted), created_at | belongs to Project |
| Backup | type (scheduled/manual), status, size, created_at | belongs to Project |

### Project Status
```
active_healthy → pausing → paused → restoring → active_healthy
              → upgrading → active_healthy
```

### RLS Policy Model
```sql
-- Policy structure
CREATE POLICY "policy_name"
  ON table_name
  FOR SELECT | INSERT | UPDATE | DELETE
  TO role
  USING (condition)         -- row-level filter
  WITH CHECK (condition);   -- write validation
```

## User Flows

### Create Backend in 2 Minutes
```
Sign up → New Project (name, region, DB password) → Wait ~2 min (provisioning) → Dashboard → Get API URL + anon key → Install supabase-js → Connect from frontend → Query data
```

### Schema Design via Table Editor
```
Table Editor → [+ New Table] → Name table → Add columns (pick types) → Set primary key → Enable RLS → Create → Add rows via spreadsheet UI → Set foreign keys (visual relationship)
```

### Write SQL Directly
```
SQL Editor → Write query → Run (⌘+Enter) → Results table → Save as snippet → Share with team → Use AI assistant for complex queries
```

### Set Up Authentication
```
Auth → Providers → Enable Google OAuth → Add client ID/secret → Configure redirect URLs → Auth → Policies → Create RLS policy (users can only read own data) → Test in API playground
```

### Upload Files
```
Storage → Create Bucket (public or private) → Upload files (drag & drop) → Get public URL → Or create signed URL (time-limited) → Set bucket policies for access control
```

### Deploy Edge Function
```
CLI: supabase functions new my-func → Write Deno/TypeScript → supabase functions serve (local test) → supabase functions deploy → Dashboard: Edge Functions → View logs → Set secrets
```

### Database Branching (Preview)
```
Connect GitHub repo → Create PR → Supabase creates preview branch (separate database) → Run migrations on branch → Test → Merge PR → Migrations applied to production
```

## URL / Route Structure

```
/                                      → Organization overview
/new/:orgSlug                          → Create project
/project/:ref                          → Project home
/project/:ref/editor                   → Table Editor
/project/:ref/editor/:tableId          → Table view
/project/:ref/sql                      → SQL Editor
/project/:ref/sql/new                  → New query tab
/project/:ref/sql/:queryId             → Saved query
/project/:ref/database/tables          → Database tables
/project/:ref/database/schemas         → Schemas
/project/:ref/database/roles           → Roles
/project/:ref/database/extensions      → Extensions
/project/:ref/database/triggers        → Triggers
/project/:ref/database/functions       → Functions
/project/:ref/database/indexes         → Indexes
/project/:ref/database/backups         → Backups
/project/:ref/database/migrations      → Migrations
/project/:ref/database/wrappers        → Foreign data wrappers
/project/:ref/auth/users               → Auth users
/project/:ref/auth/policies            → RLS policies
/project/:ref/auth/providers           → Auth providers
/project/:ref/auth/templates           → Email templates
/project/:ref/auth/hooks               → Auth hooks
/project/:ref/storage/buckets          → Storage buckets
/project/:ref/storage/buckets/:id      → Bucket file browser
/project/:ref/functions                → Edge functions
/project/:ref/functions/:slug          → Function detail
/project/:ref/realtime/inspector       → Realtime inspector
/project/:ref/api                      → API docs
/project/:ref/api/graphql              → GraphQL playground
/project/:ref/advisors                 → Advisors
/project/:ref/reports                  → Reports
/project/:ref/logs/explorer            → Log explorer
/project/:ref/logs/api-logs            → API logs
/project/:ref/logs/postgres-logs       → Postgres logs
/project/:ref/settings/general         → Project settings
/project/:ref/settings/database        → Database settings
/project/:ref/settings/api             → API settings
/project/:ref/settings/auth            → Auth settings
/project/:ref/settings/storage         → Storage settings
/project/:ref/settings/vault           → Vault (secrets)
/org/:orgSlug/settings                 → Org settings
/org/:orgSlug/team                     → Team members
/org/:orgSlug/billing                  → Billing
/org/:orgSlug/usage                    → Usage
/org/:orgSlug/audit                    → Audit logs
/account/me                            → User profile
/account/tokens                        → Access tokens
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Command Palette (⌘K) | Tables, pages, settings, projects | — | Relevance |
| Table Editor | Row data (column filters) | Column values, operators (eq, neq, gt, lt, in, like) | Any column |
| SQL Editor | Query text, snippet names | — | Name, Last Modified |
| Auth Users | Email, user ID, phone | Provider, Created Date, Last Sign In | Created, Last Sign In |
| Logs | Log message, path, status code | Level, Status Code, Method, Path, Time Range | Timestamp |
| Storage | File name, path | Bucket, MIME type, Size | Name, Created, Size |

## Responsive Behavior

| Breakpoint | Sidebar | Table Editor | SQL Editor |
|------------|---------|-------------|------------|
| Desktop (>=1280px) | Expanded with labels | Full spreadsheet grid | Full editor + results |
| Tablet (768-1279px) | Collapsed (icons) | Horizontal scroll | Stacked editor/results |
| Mobile (<768px) | Hamburger | Card view per row | Not optimized (use CLI) |

### Supabase-Specific UX
- **Table Editor** looks like a spreadsheet but is backed by real Postgres (supports JSON columns, arrays, enums)
- **SQL Editor** with Monaco editor (VS Code-like), AI assistant, and TypeScript type generation
- **RLS Policy editor** with SQL templates and visual helpers
- **Realtime Inspector** shows live WebSocket messages
- **Auto-generated API docs** update as schema changes
- **Connection string** always visible in settings (copy-to-clipboard)
- **Database branching** creates isolated preview databases per PR
- **CLI-first** deployment for edge functions and migrations
- **Dark mode** default
- **Postgres extension marketplace** (enable pgvector, PostGIS, pg_cron with one click)

## Access Control

| Role | Dashboard | Table Editor | SQL Editor | Auth | Storage | Functions | Settings | Billing |
|------|-----------|-------------|------------|------|---------|-----------|----------|---------|
| Owner | ✅ | CRUD | ✅ | ✅ | CRUD | Deploy | ✅ | ✅ |
| Admin | ✅ | CRUD | ✅ | ✅ | CRUD | Deploy | ✅ | View |
| Developer | ✅ | CRUD | ✅ | View | CRUD | Deploy | Limited | — |
| Read-only | ✅ | Read | Read | View | Read | View | — | — |

### Database-Level Security
- Row Level Security (RLS) is the primary access control mechanism
- RLS policies use SQL expressions with `auth.uid()`, `auth.jwt()` functions
- Service role key bypasses RLS (for admin/server-side operations)
- Anon key respects RLS (for client-side operations)
- Connection pooling via PgBouncer (Supavisor)
- SSL enforced for all database connections
- Vault for encrypted secrets storage
