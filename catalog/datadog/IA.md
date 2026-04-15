---
brand: Datadog
tagline: "Cloud-scale monitoring and security. Infrastructure, APM, logs, and security in a unified platform."
category: Monitoring
website: https://www.datadoghq.com
---

# Datadog — Information Architecture

## Overview

Datadog is an enterprise-grade observability and security platform that unifies infrastructure monitoring, application performance monitoring (APM), log management, real user monitoring (RUM), synthetic testing, and cloud security into a single dashboard. The mental model is **unified observability** — every metric, trace, log, and event is correlated and queryable from one platform. Datadog differentiates through its breadth (600+ integrations), deep correlation (click from a metric chart to related traces and logs), and Infrastructure Map (visual topology of your entire stack). It serves SRE, DevOps, and security teams at scale.

## Site Map

```
├── Home (Getting Started / Recent)
│   ├── Recent Dashboards
│   ├── Recent Monitors
│   ├── What's New
│   └── Onboarding Checklist
├── Infrastructure
│   ├── Host Map (visual grid — hosts colored by metric)
│   ├── Host List (table: CPU, memory, load, status)
│   ├── Container Map
│   ├── Containers (list + metrics)
│   ├── Processes (live process monitoring)
│   ├── Serverless
│   │   ├── Functions List
│   │   ├── Function Detail (invocations, duration, errors)
│   │   └── Cold Starts
│   ├── Network
│   │   ├── Network Map (flow topology)
│   │   ├── Network Overview
│   │   └── DNS Monitoring
│   ├── Cloud Cost Management
│   │   ├── Cost Summary
│   │   ├── Cost by Service / Tag
│   │   └── Recommendations
│   └── Resource Catalog
├── APM (Application Performance Monitoring)
│   ├── Service Catalog
│   │   ├── Service List (name, type, owner, SLOs)
│   │   ├── Service Detail
│   │   │   ├── Overview (requests, errors, latency)
│   │   │   ├── Dependencies (service map)
│   │   │   ├── Endpoints / Resources
│   │   │   ├── Errors
│   │   │   ├── Deployments
│   │   │   └── SLOs
│   │   └── Service Map (DAG of service dependencies)
│   ├── Traces
│   │   ├── Trace Search (filterable trace list)
│   │   ├── Trace Detail
│   │   │   ├── Flame Graph (span waterfall)
│   │   │   ├── Span List
│   │   │   ├── Span Detail (tags, metadata)
│   │   │   ├── Related Logs (correlated)
│   │   │   ├── Related Infrastructure (host, container)
│   │   │   └── Error Details
│   │   └── Live Search
│   ├── Analytics (trace-level aggregations)
│   ├── Continuous Profiler
│   │   ├── Profile List (by service)
│   │   ├── Flame Graph (CPU, memory, I/O)
│   │   └── Code Hotspots
│   ├── Database Monitoring
│   │   ├── Query Metrics (top queries by duration, calls)
│   │   ├── Query Samples (individual executions)
│   │   ├── Explain Plans
│   │   └── Waiting Queries
│   ├── Data Streams Monitoring
│   │   ├── Pipeline View (Kafka, RabbitMQ, SQS)
│   │   ├── End-to-End Latency
│   │   └── Consumer Lag
│   └── Universal Service Monitoring (auto-discovered services)
├── Logs
│   ├── Log Explorer
│   │   ├── Search Bar (query syntax)
│   │   ├── Facets Panel (left sidebar: status, service, source)
│   │   ├── Timeline (log volume histogram)
│   │   ├── Log List (table view)
│   │   ├── Log Detail (expanded view)
│   │   │   ├── Message, Attributes, Tags
│   │   │   ├── Related Traces (correlated via trace_id)
│   │   │   ├── Related Infrastructure
│   │   │   └── Context (surrounding logs)
│   │   ├── Patterns (auto-grouped similar logs)
│   │   ├── Transactions (multi-step log sequences)
│   │   └── Saved Views
│   ├── Pipelines (log processing rules)
│   │   ├── Pipeline List
│   │   ├── Processors (grok parser, remapper, category, etc.)
│   │   └── Pipeline Order
│   ├── Indexes (retention tiers)
│   ├── Archives (S3, GCS long-term storage)
│   ├── Metrics (generate metrics from logs)
│   ├── Forwarding (route logs to other destinations)
│   └── Configuration
│       ├── Exclusion Filters
│       ├── Sensitive Data Scanner
│       └── Reference Tables (enrichment)
├── RUM (Real User Monitoring)
│   ├── Application List
│   ├── Explorer
│   │   ├── Views (page loads)
│   │   ├── Actions (user clicks)
│   │   ├── Resources (XHR, images, scripts)
│   │   ├── Errors (frontend errors)
│   │   ├── Long Tasks
│   │   └── Frustration Signals (rage clicks, error clicks)
│   ├── Performance Summary (Web Vitals)
│   ├── Session Replay
│   │   ├── Replay List
│   │   ├── Replay Player (DOM recording)
│   │   └── Dev Tools Panel (console, network, errors)
│   └── Analytics (custom RUM queries)
├── Synthetics (Synthetic Monitoring)
│   ├── API Tests
│   │   ├── HTTP, SSL, DNS, TCP, gRPC, WebSocket, multi-step
│   │   └── Test Results (uptime, response time, assertions)
│   ├── Browser Tests
│   │   ├── Recorded Steps (click, type, assert)
│   │   ├── Screenshots per Step
│   │   └── CI/CD Integration
│   ├── Private Locations (test from internal network)
│   └── Settings (global variables, locations)
├── Monitors (Alerting)
│   ├── Manage Monitors (list, search, bulk actions)
│   ├── Monitor Detail
│   │   ├── Status (OK, WARN, ALERT, NO DATA)
│   │   ├── History (status over time)
│   │   ├── Events (triggers)
│   │   └── Mute / Downtime
│   ├── Create Monitor
│   │   ├── Monitor Type (metric, APM, log, composite, SLO, forecast, anomaly, outlier)
│   │   ├── Query Builder
│   │   ├── Conditions (threshold, anomaly detection)
│   │   ├── Notifications (Slack, PagerDuty, email, webhook)
│   │   └── Tags / Priority
│   ├── Triggered Monitors
│   ├── Downtimes (scheduled mutes)
│   └── Monitor Summary (health overview)
├── SLOs (Service Level Objectives)
│   ├── SLO List
│   ├── SLO Detail
│   │   ├── Status (budget remaining)
│   │   ├── History
│   │   └── Error Budget
│   └── Create SLO (metric-based or monitor-based)
├── Dashboards
│   ├── Dashboard List (my, shared, preset)
│   ├── Dashboard Detail
│   │   ├── Widgets (drag-and-drop grid)
│   │   │   ├── Timeseries, Query Value, Top List, Table
│   │   │   ├── Heatmap, Distribution, Change, Scatter
│   │   │   ├── Hostmap, Service Map, Topology Map
│   │   │   ├── Log Stream, Event Stream, Alert Graph
│   │   │   ├── SLO Summary, Check Status
│   │   │   └── Free Text, Image, Iframe, Group
│   │   ├── Template Variables (dropdown filters)
│   │   ├── Time Selector (global)
│   │   └── TV Mode (full-screen rotation)
│   ├── Create Dashboard (screenboard or timeboard)
│   └── Dashboard Templates (prebuilt for integrations)
├── Notebooks (Collaborative Investigation)
│   ├── Notebook List
│   ├── Notebook (cells: text, graph, log stream)
│   └── Incident Notebooks (linked to incidents)
├── Events
│   ├── Event Stream (deployments, alerts, integrations)
│   └── Event Explorer (filterable)
├── Incidents
│   ├── Incident List
│   ├── Incident Detail
│   │   ├── Timeline
│   │   ├── Responders
│   │   ├── Related Dashboards / Monitors
│   │   ├── Notifications
│   │   └── Postmortem
│   ├── Declare Incident
│   └── Incident Settings (severities, integrations)
├── Workflow Automation
│   ├── Workflow List
│   ├── Workflow Builder (trigger → steps)
│   └── Blueprints (templates)
├── Security
│   ├── Cloud Security Management
│   │   ├── Misconfigurations (CIS benchmarks)
│   │   ├── Identity Risks
│   │   ├── Vulnerabilities (container images)
│   │   └── Compliance (frameworks)
│   ├── Application Security
│   │   ├── Threats (WAF detections)
│   │   ├── Vulnerabilities (code-level)
│   │   └── Protection (rules)
│   ├── Cloud SIEM
│   │   ├── Security Signals (detections)
│   │   ├── Detection Rules
│   │   ├── Investigator
│   │   └── Log-based Signals
│   └── Cloud Workload Security
├── Integrations
│   ├── Integration Tiles (600+ — AWS, GCP, Azure, K8s, Docker, etc.)
│   ├── Agent (host-based collector)
│   ├── API Keys
│   └── Marketplace (partner integrations)
├── Usage & Billing
│   ├── Usage (hosts, custom metrics, logs ingested, APM hosts, synthetics)
│   ├── Estimated Usage
│   ├── Plan
│   └── Invoices
├── Settings (Organization)
│   ├── Organization (name, SSO, SAML)
│   ├── Teams
│   ├── Users (members, roles)
│   ├── API Keys / Application Keys
│   ├── Access Control (RBAC)
│   ├── Audit Trail
│   ├── Security (IP allowlisting, login methods)
│   └── Agent Metrics
└── Docs (docs.datadoghq.com)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible, hierarchical | Infrastructure, APM, Logs, RUM, Synthetics, Monitors, SLOs, Dashboards, Notebooks, Events, Incidents, Security, Settings — each expandable |
| **Top Bar** | Fixed | Search (⌘K), time selector (global), live/paused toggle, site selector, notifications, user menu |
| **Time Selector** | Global (top bar) | Presets (15m, 1h, 4h, 1d, 7d, custom) + time zone, affects all widgets |
| **Template Variables** | Dashboard-level dropdowns | Dynamic filtering by service, env, host, region |
| **Correlation Links** | Inline throughout | "View Related Traces", "View Related Logs", "View Host" — click-through correlation |
| **Context Panels** | Slide-out from right | Quick view of host, container, service details without leaving current page |

### Sidebar Structure
```
[Organization ▾]
───────────────
🖥 Infrastructure
  Hosts | Containers | Processes | Serverless | Network
📊 APM
  Service Catalog | Traces | Profiler | DB Monitoring
📋 Logs
  Explorer | Pipelines | Indexes
👤 RUM
  Explorer | Session Replay
🤖 Synthetics
  API Tests | Browser Tests
───────────────
🔔 Monitors
📊 SLOs
📈 Dashboards
📓 Notebooks
📡 Events
🚨 Incidents
───────────────
🛡 Security
🔌 Integrations
⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Host | hostname, os, ips[], tags{}, apps[], cpu, memory, load, status | has Containers, Processes |
| Container | id, name, image, host, cpu, memory, status, tags{} | belongs to Host |
| Service | name, type (web/db/cache/custom), env, version, owners[], slos[] | has Traces, Endpoints, Dependencies |
| Trace | trace_id, service, resource, duration, status, spans[] | belongs to Service |
| Span | span_id, service, name, type, duration, error, meta{}, metrics{} | belongs to Trace |
| LogEvent | timestamp, status, service, source, message, attributes{}, tags{} | belongs to Index |
| Metric | name, type (gauge/rate/count/distribution), tags{}, interval | belongs to Host/Service |
| Monitor | id, name, type, query, status (OK/WARN/ALERT/NO DATA), groups[], notified[], muted | global |
| SLO | id, name, type (metric/monitor), target_threshold, timeframe, status, error_budget | belongs to Service |
| Dashboard | id, title, layout_type (ordered/free), widgets[], template_variables[] | global |
| Widget | type, query, display{}, position, size | belongs to Dashboard |
| SyntheticTest | name, type (api/browser), status, locations[], uptime, response_time | global |
| Incident | id, title, severity, status, timeline[], responders[], related_monitors[] | global |
| SecuritySignal | id, rule, severity, status, attributes{}, triage | belongs to Security Rule |

### Monitor States
```
OK → WARN → ALERT → NO DATA
          ↘ OK (recovery)
```

### Incident Lifecycle
```
detected → declared → triaged → mitigating → resolved → completed (postmortem)
SEV-1 (critical) | SEV-2 (major) | SEV-3 (minor) | SEV-4 (low)
```

## User Flows

### Investigate Latency Spike
```
Dashboard → See latency spike on service graph → Click to APM → Service Detail → Top slow endpoints → Click endpoint → Trace Search → View Flame Graph → Identify slow span (DB query) → Click "View Related Logs" → Find error log → Open Database Monitoring → See slow query → Fix
```

### Correlate Across Signals
```
Monitor Alert (error rate > 5%) → Open Monitor → See related traces → View Trace → Flame graph shows failing span → Click span → View Related Logs → See error message → Click host → Infrastructure page → See CPU spike → Root cause identified
```

### Log Investigation
```
Logs → Explorer → Search: status:error service:payments → Timeline shows spike → Click spike → Filter by time range → Expand log entry → View attributes → Click trace_id → Jump to APM Trace → Full request context
```

### Set Up SLO
```
SLOs → Create SLO → Type: Metric-based → Query: requests with 2xx / total requests → Target: 99.9% over 30 days → Alert when error budget < 20% → Notify Slack → Add to dashboard
```

### Synthetic Test
```
Synthetics → Create API Test → URL: GET https://api.example.com/health → Assertions: status=200, body contains "ok", response < 500ms → Locations: US, EU, APAC → Frequency: 1 min → Alert on failure → View results
```

## URL / Route Structure

```
/                                          → Home
/infrastructure/map                        → Host Map
/infrastructure/list                       → Host List
/containers                                → Container List
/process                                   → Processes
/functions                                 → Serverless
/network/map                               → Network Map
/apm/services                              → Service Catalog
/apm/services/:service                     → Service Detail
/apm/service-map                           → Service Map
/apm/traces                                → Trace Search
/apm/traces/:traceId                       → Trace Detail
/apm/profile/:service                      → Continuous Profiler
/apm/database                              → Database Monitoring
/logs                                      → Log Explorer
/logs/pipelines                            → Log Pipelines
/logs/indexes                              → Log Indexes
/rum/explorer                              → RUM Explorer
/rum/sessions/replay/:id                   → Session Replay
/synthetics/tests                          → Synthetic Tests
/synthetics/tests/:id                      → Test Detail
/monitors/manage                           → Monitor List
/monitors/:id                              → Monitor Detail
/monitors/create                           → Create Monitor
/slo/manage                                → SLO List
/slo/:id                                   → SLO Detail
/dashboard/lists                           → Dashboard List
/dashboard/:id                             → Dashboard
/notebooks/list                            → Notebooks
/notebooks/:id                             → Notebook
/event/stream                              → Event Stream
/incidents                                 → Incident List
/incidents/:id                             → Incident Detail
/security/overview                         → Security Overview
/security/csm                              → Cloud Security
/security/application                      → App Security
/security/siem                             → Cloud SIEM
/account/settings                          → Org Settings
/account/billing                           → Billing
/account/team                              → Team Members
/account/api-app-keys                      → API/App Keys
/integrations                              → Integration Tiles
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Global (⌘K) | Dashboards, monitors, hosts, services, docs | — | Relevance |
| Logs | Log message, attributes, tags | Status, Service, Source, Host, Tags, Custom Facets, Date Range | Timestamp |
| Traces | Service, resource, tags | Service, Env, Status, Duration Range, Tags | Duration, Timestamp |
| Hosts | Hostname, tags | OS, Availability Zone, Instance Type, Custom Tags | CPU, Memory, Load |
| Monitors | Monitor name, query, tags | Status, Type, Tag, Priority | Name, Status, Created |
| Services | Service name, tags | Type, Env, SLO Status | Requests, Error Rate, Latency |

### Query Syntax (Logs/APM)
```
service:web-app status:error @http.status_code:500 @duration:>1s
env:production host:web-01 source:nginx
service:payments -status:info @error.kind:TimeoutError
```

## Responsive Behavior

| Breakpoint | Sidebar | Dashboards | Logs |
|------------|---------|-----------|------|
| Desktop (>=1440px) | Expanded, hierarchical | Full widget grid, drag-and-drop | Full explorer with facets sidebar |
| Desktop (1024-1439px) | Collapsed (icons) | Reduced grid | Facets collapsible |
| Tablet (768-1023px) | Hidden (hamburger) | Stacked widgets | Simplified explorer |
| Mobile (<768px) | Hamburger | Limited (Datadog mobile app preferred) | Basic log view |

### Datadog-Specific UX
- **Host Map**: visual grid where each rectangle is a host, colored by metric (CPU, memory) — hover for details
- **Service Map**: DAG of service dependencies with live metrics on edges
- **Flame Graph**: trace visualization showing span timing and nesting
- **Correlated data**: click any metric/log/trace to see related signals across all products
- **Template Variables**: dashboard-level dropdown filters that dynamically scope all widgets
- **TV Mode**: full-screen dashboard rotation for NOC/SRE screens
- **Notebooks**: collaborative runbooks mixing text, graphs, and log streams (like Jupyter for observability)
- **600+ integrations**: one-click setup with auto-generated dashboards
- **Query autocomplete**: tag and facet suggestions while typing
- **Dark mode** (essential for NOC screens)
- **Live Tail**: real-time log streaming (like `tail -f`)

## Access Control

| Role | Dashboards | Monitors | APM | Logs | Infrastructure | Security | Admin |
|------|-----------|----------|-----|------|---------------|----------|-------|
| Read-Only | View | View | View | View | View | View | — |
| Standard | CRUD | CRUD | CRUD | Query | View | View | — |
| Admin | CRUD | CRUD | CRUD | CRUD + Config | CRUD | CRUD | ✅ |
| Custom (RBAC) | Granular per resource | ... | ... | ... | ... | ... | ... |

### Enterprise Security
- SAML/SSO with multiple IdP support
- RBAC with custom roles and granular permissions
- Audit trail for all admin actions
- Log-based access controls (restrict log visibility by team/service)
- Data retention controls per index
- PCI/SOC2/HIPAA compliance modes
- Multi-org management for enterprises
