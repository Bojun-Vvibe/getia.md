---
brand: Prisma
tagline: Next-generation Node.js and TypeScript ORM.
category: Developer Tools
website: https://prisma.io
---

# Prisma — Information Architecture

## Overview

Prisma is a next-generation ORM (Object-Relational Mapping) for Node.js and TypeScript that replaces traditional ORMs with a **schema-first, type-safe database toolkit**. The IA spans two distinct surfaces: the open-source toolkit (Prisma Client, Prisma Migrate, Prisma Studio) used locally in a developer's project, and the Prisma Data Platform (cloud service for data management, optimization, and team collaboration). The core architectural innovation is the Prisma Schema (`schema.prisma`): a single declarative file that defines the data model, database connection, and generator configuration. From this schema, Prisma generates a fully type-safe client API. Prisma Studio provides a visual database browser, and the platform adds Prisma Accelerate (connection pooling + caching) and Prisma Pulse (real-time database events).

## Site Map

```
prisma.io (marketing + docs)
├── / (Home)
├── /orm (Prisma ORM product page)
├── /data-platform (Prisma Data Platform)
├── /pricing
├── /docs (Documentation — extensive)
│   ├── /orm
│   │   ├── /overview
│   │   ├── /prisma-schema
│   │   ├── /prisma-client
│   │   ├── /prisma-migrate
│   │   └── /reference (API reference)
│   ├── /accelerate
│   ├── /pulse
│   └── /platform
├── /blog
├── /showcase (Companies using Prisma)
└── /community

console.prisma.io (Prisma Data Platform)
├── / (Projects list)
├── /{workspace}/{project}
│   ├── /environments (Environment list — production, staging, etc.)
│   │   └── /{environment}
│   │       ├── /accelerate (Connection pooling + caching config)
│   │       ├── /pulse (Real-time event streams config)
│   │       └── /connection-string
│   ├── /schema (Schema viewer — read from connected database)
│   ├── /insights (Query performance analytics)
│   └── /settings
├── /settings
│   ├── /account
│   ├── /billing
│   └── /members
└── /auth

Local Development (CLI/Studio)
├── prisma/schema.prisma (Schema file)
├── npx prisma studio (Visual DB browser at localhost:5555)
├── npx prisma migrate (Schema migration management)
├── npx prisma generate (Client code generation)
└── npx prisma db push (Quick schema push — no migration files)
```

## Navigation Model

- **Documentation navigation**: Left sidebar with nested sections — ORM (Schema, Client, Migrate, Reference), Accelerate, Pulse, Platform
- **Console navigation**: Left sidebar — Projects, then within project: Environments, Schema, Insights, Settings
- **Local development**: CLI commands are the navigation interface — no persistent UI besides Prisma Studio
- **Prisma Studio navigation**: Left sidebar lists database tables → click table → data browser with column headers, filtering, sorting
- **Docs version selector**: Version dropdown for different Prisma versions
- **Marketing site navigation**: Top bar — Product (ORM, Accelerate, Pulse), Docs, Blog, Pricing, Community
- **Mobile**: Docs are responsive; Studio is desktop-only (localhost tool)

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Prisma Schema | `datasource`, `generator`, `model` blocks, relations, enums, in `.prisma` DSL | Project file |
| Model | Table definition with fields, types, attributes (@id, @unique, @relation, @default) | Part of schema |
| Migration | SQL migration file, timestamp, name, applied status | Part of project |
| Prisma Client | Auto-generated TypeScript/JS client with type-safe query methods | Generated artifact |
| Studio Session | Visual database browser — table views, row editing, filtering | Local session |
| Platform Project | Workspace, environments, Accelerate/Pulse config, connection strings | Team-owned |
| Environment | Named database connection with Accelerate/Pulse settings | Part of project |
| Query Insight | Query pattern, execution count, latency, cache hit rate (Accelerate) | Analytics |

## User Flows

### Setting Up Prisma in a Project
```
Developer runs `npm install prisma --save-dev` and `npx prisma init` → Prisma creates `prisma/schema.prisma` with default config → Developer configures database connection in schema (`datasource db`) → Defines data models (e.g., `model User { id Int @id, name String, email String @unique }`) → Runs `npx prisma migrate dev --name init` → creates SQL migration and applies it → Runs `npx prisma generate` → generates Prisma Client → Imports and uses type-safe client in application code
```

### Schema Evolution (Migration)
```
Developer modifies schema (adds field, new model, changes relation) → Runs `npx prisma migrate dev --name add-posts` → Prisma generates SQL migration file (viewable, editable) → Migration applied to development database → In production: `npx prisma migrate deploy` applies pending migrations → Prisma Client regenerated with updated types
```

### Prisma Studio (Visual Database Browser)
```
Developer runs `npx prisma studio` → opens browser at `localhost:5555` → Left sidebar shows all models/tables from the schema → Click a model → see data in a spreadsheet-like grid → Add, edit, delete records visually → Navigate relations — click related records to follow foreign keys → Filter and sort data by column values
```

### Prisma Accelerate Setup
```
Developer creates project on console.prisma.io → Adds database connection string → creates environment → Enables Accelerate → gets a Prisma Accelerate connection URL → Replaces direct database URL with Accelerate URL in application → Queries now go through Accelerate: connection pooling + global caching → Monitors cache hit rates and query performance in Insights
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `prisma.io/` | Marketing home |
| `prisma.io/docs/{section}/{page}` | Documentation |
| `prisma.io/docs/orm/prisma-schema` | Schema reference |
| `prisma.io/docs/orm/prisma-client/{topic}` | Client API docs |
| `console.prisma.io/` | Platform project list |
| `console.prisma.io/{workspace}/{project}` | Project dashboard |
| `console.prisma.io/{workspace}/{project}/environments/{env}` | Environment detail |
| `console.prisma.io/{workspace}/{project}/insights` | Query insights |
| `localhost:5555` | Prisma Studio (local) |

Documentation uses hierarchical path structure. Console uses workspace/project/environment hierarchy.

## Search & Filter

- **Documentation search**: Full-text search across all docs (Algolia-powered) — critical given documentation depth
- **Prisma Studio filters**: Filter table data by column values, sort by any column
- **Platform Insights**: Filter queries by time range, cache status (hit/miss), latency threshold
- **Schema search**: No built-in schema search — developers use IDE search in `.prisma` files
- **No model marketplace**: Prisma doesn't have a schema/model sharing platform
- **Community search**: Community forum (GitHub Discussions) has search

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Docs: sidebar TOC + content + right sidebar (on-page navigation). Studio: sidebar + data grid |
| Desktop (1024-1280px) | Docs: collapsible sidebar + content. Studio: full layout |
| Tablet (768-1024px) | Docs: hamburger sidebar + full content. Console: simplified layout |
| Mobile (<768px) | Docs: hamburger sidebar + single-column content. Studio: N/A (localhost tool) |

- Documentation is the most important responsive surface — code examples use horizontal scroll
- Schema syntax highlighting adapts to available width
- Console data tables (Insights) scroll horizontally on narrow screens
- Prisma Studio is a desktop tool — no responsive constraints needed
- Marketing site is fully responsive

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, documentation, community |
| Open-source user | Full Prisma ORM (Client, Migrate, Studio) — no account needed |
| Platform Free | 1 project, limited Accelerate queries, limited Pulse events |
| Platform Pro ($49/mo) | Multiple projects, higher Accelerate/Pulse limits, Insights |
| Platform Business | Pro + team management, SSO, priority support |
| Platform Enterprise | Custom limits, SLA, dedicated support, audit logs |
| Workspace roles | Admin (billing, members, all projects) → Developer (manage projects, environments) → Viewer (read-only) |

- Authentication: GitHub OAuth, Google OAuth, email/password (Platform)
- No auth for local tools: Prisma CLI/Studio run locally without authentication
- Database access: Prisma connects using standard database credentials (connection string)
- Accelerate: Uses API key for connection pooling/caching proxy
- Prisma Studio: Only accessible on localhost — not exposed publicly
- Schema security: Schema file should not be committed with production credentials (use env vars)

## Prisma Stack

| Component | Purpose | Type |
|-----------|---------|------|
| Prisma Schema | Define data model, relations, and database connection | `.prisma` file |
| Prisma Client | Auto-generated, type-safe query builder | npm package |
| Prisma Migrate | Database schema migrations from schema changes | CLI tool |
| Prisma Studio | Visual database browser and editor | GUI app |
| Prisma Accelerate | Global edge caching for database queries | Cloud service |
| Prisma Pulse | Real-time database change events | Cloud service |
| Prisma Optimize | AI-powered query optimization recommendations | Cloud service |

## Schema Example

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  tags      Tag[]
}
```

## CLI Commands

| Command | Description |
|---------|-------------|
| `prisma init` | Initialize Prisma in project |
| `prisma generate` | Generate Prisma Client from schema |
| `prisma db push` | Push schema to database (prototyping) |
| `prisma migrate dev` | Create and apply migration |
| `prisma migrate deploy` | Apply pending migrations (production) |
| `prisma studio` | Open visual database browser |
| `prisma format` | Format schema file |
| `prisma validate` | Validate schema syntax |
| `prisma db pull` | Introspect existing database into schema |

## Database Support

| Database | Status | Unique Features |
|----------|--------|----------------|
| PostgreSQL | Full support | JSON, arrays, full-text search |
| MySQL | Full support | Standard support |
| SQLite | Full support | Embedded, serverless |
| SQL Server | Full support | Windows/Azure ecosystem |
| MongoDB | Full support | Document model, embedded documents |
| CockroachDB | Full support | Distributed SQL |
| PlanetScale | Full support (via MySQL) | Branching, serverless |
