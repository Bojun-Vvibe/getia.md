---
brand: Cloudflare
tagline: Helping build a better Internet.
category: Developer Tools
website: https://cloudflare.com
---

# Cloudflare — Information Architecture

## Overview

Cloudflare is a global cloud platform offering a vast suite of products spanning CDN, DNS, DDoS protection, Workers (serverless compute), Pages (static hosting), R2 (object storage), D1 (serverless database), Zero Trust security, and more. The IA is one of the most complex in the developer tools space, organized as an **account-zone-product hierarchy**. At the top level, an Account contains Zones (domains), and each Zone has product-specific configuration pages. The dashboard simultaneously serves developers (Workers, Pages, R2), infrastructure teams (DNS, CDN, firewall), and security teams (WAF, Zero Trust, SSL). This creates a deep, multi-layered navigation structure reflecting Cloudflare's evolution from a CDN company to a comprehensive cloud platform.

## Site Map

```
dash.cloudflare.com
├── / (Account home — zones list, quick actions)
├── /{account_id}
│   ├── /workers (Workers & Pages)
│   │   ├── /services (Worker services list)
│   │   │   └── /{service_name} (Worker detail — triggers, settings, metrics)
│   │   ├── /pages (Pages projects)
│   │   │   └── /{project_name} (Pages project — deployments, settings)
│   │   ├── /kv (KV storage namespaces)
│   │   ├── /r2 (R2 object storage buckets)
│   │   ├── /d1 (D1 databases)
│   │   ├── /queues (Message queues)
│   │   ├── /durable-objects
│   │   └── /ai (Workers AI)
│   ├── /domains (Domain registration)
│   ├── /zero-trust (Cloudflare Zero Trust dashboard)
│   │   ├── /access (Access policies)
│   │   ├── /gateway (DNS/HTTP filtering)
│   │   └── /tunnels (Cloudflare Tunnels)
│   └── /billing
├── /{zone_name} (Zone-specific settings)
│   ├── /dns (DNS records)
│   ├── /ssl-tls (SSL/TLS config)
│   ├── /security
│   │   ├── /waf (Web Application Firewall)
│   │   ├── /bots (Bot management)
│   │   ├── /ddos (DDoS protection)
│   │   └── /page-shield
│   ├── /speed (Performance optimization)
│   ├── /caching (Cache config, purge)
│   ├── /rules (Page Rules, Transform Rules, Redirect Rules)
│   ├── /network
│   ├── /traffic (Load balancing, health checks)
│   ├── /analytics (Zone analytics)
│   └── /workers-routes (Worker route bindings)

cloudflare.com (marketing/docs)
├── / (Home)
├── /products/* (Product pages)
├── /plans (Pricing)
├── /developers (Developer platform hub)
└── /learning-center (Educational content)

developers.cloudflare.com (Documentation)
├── /workers
├── /pages
├── /r2
├── /d1
├── /ai
└── /{product}/*
```

## Navigation Model

- **Primary navigation**: Left sidebar — organized by product domain: Websites (zones), Workers & Pages, R2, D1, Zero Trust, Email, Registrar
- **Account switching**: Top-left dropdown for multi-account users
- **Zone navigation**: Within a zone — left sidebar changes to zone-specific sections (DNS, SSL, Security, Speed, Caching, Rules, etc.)
- **Workers navigation**: Separate sub-dashboard — Services, KV, R2, D1, Queues, Durable Objects, AI
- **Breadcrumbs**: Account → Product/Zone → Feature → Detail
- **Quick actions**: Home dashboard has cards for common tasks (add site, create worker, etc.)
- **Notification center**: Bell icon for alerts (DDoS events, certificate renewals, etc.)
- **Mobile**: Responsive but complex; primary use case is desktop

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Zone (Domain) | Domain name, DNS records, SSL config, security settings, caching rules, analytics | Account-owned |
| Worker Service | Script code, triggers (routes, cron, queue), environment variables, KV/R2 bindings, metrics | Account-owned |
| Pages Project | Git repo link, build settings, deployments, custom domains, environment variables | Account-owned |
| R2 Bucket | Bucket name, objects, access policy, CORS config, lifecycle rules | Account-owned |
| D1 Database | Database name, tables, schema, query console, backups | Account-owned |
| DNS Record | Type (A, AAAA, CNAME, MX, TXT), name, content, TTL, proxy status | Part of zone |
| Firewall Rule | Expression, action (block, challenge, allow), priority | Part of zone |
| Zero Trust Policy | Access application, identity provider, allow/deny rules | Account-owned |
| Tunnel | Named tunnel, connector, ingress rules | Account-owned |

## User Flows

### Adding a Website (Zone)
```
User clicks "Add a Site" → enters domain name → Cloudflare scans existing DNS records → imports them → User selects plan (Free, Pro, Business, Enterprise) → Cloudflare provides two nameservers → user updates at registrar → DNS propagation completes → Cloudflare activates zone → SSL certificate auto-provisioned → HTTPS enabled → User configures caching, security, and performance settings
```

### Deploying a Worker
```
User navigates to Workers & Pages → "Create" → "Create Worker" → Online editor opens with Hello World template → Edits code → tests with built-in preview (sends test requests) → Deploys to Cloudflare's global edge network (200+ cities) → Configures triggers: HTTP route, cron schedule, or queue consumer → Binds resources: KV namespace, R2 bucket, D1 database, environment variables
```

### Pages Deployment
```
User connects GitHub/GitLab repo → Configures build settings (framework preset auto-detected for Next.js, Nuxt, Astro, etc.) → Every push triggers a build → deployed to `{project}.pages.dev` → PRs get deploy previews with unique URLs → Custom domain and redirects configured in project settings
```

### Zero Trust Access
```
Admin navigates to Zero Trust → Access → Applications → Creates an application (self-hosted app behind Cloudflare) → Defines access policy: identity provider (Okta, Azure AD, etc.) + rules (email domain, group, IP) → Users accessing the app are prompted for authentication → Cloudflare proxies authenticated requests to the origin server
```

### New User Onboarding
```
Visit Cloudflare → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `dash.cloudflare.com/` | Account home |
| `dash.cloudflare.com/{account_id}/workers/services/{name}` | Worker service |
| `dash.cloudflare.com/{account_id}/pages/{project}` | Pages project |
| `dash.cloudflare.com/{account_id}/r2/buckets/{bucket}` | R2 bucket |
| `dash.cloudflare.com/{account_id}/d1/databases/{db}` | D1 database |
| `dash.cloudflare.com/{zone_name}/dns` | Zone DNS |
| `dash.cloudflare.com/{zone_name}/security/waf` | Zone WAF |
| `dash.cloudflare.com/{zone_name}/caching` | Zone caching |
| `dash.cloudflare.com/{account_id}/zero-trust/*` | Zero Trust dashboard |
| `developers.cloudflare.com/{product}/*` | Documentation |

Account ID is a hex string. Zone name is the domain. Nested routing reflects the deep product hierarchy.

### Additional Routes

```
dash.cloudflare.com/settings  → Settings
dash.cloudflare.com/billing  → Billing & subscription
dash.cloudflare.com/notifications  → Notification preferences
dash.cloudflare.com/help  → Help center
dash.cloudflare.com/help/{topic}  → Help article
dash.cloudflare.com/search?q={query}  → Search results
dash.cloudflare.com/integrations  → Integrations
dash.cloudflare.com/admin  → Admin console
dash.cloudflare.com/admin/members  → Member management
dash.cloudflare.com/import  → Import data
```

## Search & Filter

- **Zone search**: Search zones by domain name on account home
- **DNS record search**: Filter records by type, name, or content within a zone
- **Worker search**: Search workers by name
- **R2 object search**: Search objects by key prefix within a bucket
- **Analytics filters**: Date range, cache status, country, status code, host
- **Firewall event filtering**: Date range, action taken, rule ID, client IP, country, ASN
- **Docs search**: Full-text search across all documentation (Algolia-powered)
- **Audit log search**: Filter by user, action type, resource, date range

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + content area with data tables, charts, forms |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as drawer + simplified content layout |
| Mobile (<768px) | Hamburger nav + single-column layout; data tables scroll horizontally |

- Dashboard data tables (DNS records, firewall events) have horizontal scroll on narrow screens
- Analytics charts resize and simplify (fewer data points)
- Worker code editor is desktop-only (redirects to Wrangler CLI recommendation on mobile)
- Settings forms stack vertically with full-width inputs
- Zero Trust dashboard is complex enough to warrant desktop-only use


### Cloudflare-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features

### Accessibility
- WCAG 2.1 AA compliance across all interactive elements
- Semantic HTML with proper ARIA labels and landmarks
- Keyboard navigation support for all core workflows
- Screen reader compatibility tested with VoiceOver, NVDA, and JAWS
- Color contrast ratios meeting minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Reduced motion option respecting `prefers-reduced-motion`
- Resizable text up to 200% without content loss

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs, learning center |
| Free plan | Unlimited sites, basic CDN/DNS/SSL, 100K Worker requests/day, 10GB R2 storage |
| Pro ($20/domain/mo) | WAF managed rules, image optimization, mobile optimization, enhanced analytics |
| Business ($200/domain/mo) | Custom WAF rules, 100% SLA, priority support, custom SSL |
| Enterprise | Custom pricing, advanced DDoS, bot management, dedicated support, SLA |
| Account roles | Super Admin → Admin → Member (varies by product area) |
| Per-zone roles | Administrator, Firewall Admin, DNS Admin, Cache Admin, Analytics (granular) |

- Authentication: Email/password, SSO (Enterprise), 2FA mandatory for all accounts
- API tokens: Fine-grained tokens with specific zone/resource permissions (replacing legacy API keys)
- Multi-user accounts: Invite members with role-based access per zone or account-wide
- Audit log: All actions logged with user, timestamp, affected resource (Enterprise)
- Zero Trust: Separate access control system for protecting internal applications
