# Developer Platform — Information Architecture

## Overview

An API-first developer platform with console, documentation, and management tools (Stripe Dashboard, AWS Console, Twilio style). The mental model is a **workbench** — developers configure services, monitor usage, test APIs, and manage credentials from a unified console.

## Site Map

```
├── Dashboard
│   ├── API Usage Overview (charts)
│   ├── Recent API Calls / Events
│   ├── System Status
│   ├── Quick Actions (create key, view logs)
│   └── Getting Started Checklist (new users)
├── API Explorer / Playground
│   ├── Endpoint Browser
│   ├── Request Builder
│   ├── Response Viewer
│   └── Code Snippets (multi-language)
├── Products / Services
│   ├── Service A
│   │   ├── Overview
│   │   ├── Configuration
│   │   ├── Logs
│   │   └── Metrics
│   ├── Service B
│   └── ...
├── Logs & Events
│   ├── API Request Logs (filterable)
│   ├── Event Stream
│   ├── Webhooks
│   │   ├── Endpoints
│   │   ├── Event Types
│   │   └── Delivery Attempts
│   └── Error Log
├── API Keys & Auth
│   ├── API Keys (test + live)
│   ├── OAuth Apps
│   ├── Tokens
│   └── Permissions / Scopes
├── Usage & Billing
│   ├── Current Usage
│   ├── Quotas & Rate Limits
│   ├── Subscription Plan
│   ├── Invoices
│   └── Payment Methods
├── Team
│   ├── Members
│   ├── Roles & Permissions
│   └── Audit Log
├── Documentation (links to docs site)
├── Settings
│   ├── Project / App Settings
│   ├── Environments (test / production)
│   ├── Notifications
│   ├── Branding (for OAuth consent screen)
│   └── Data & Privacy
└── Support
    ├── Tickets
    ├── Status Page
    └── Community / Forum
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Nav** | Fixed left sidebar | Products/services list, Logs, Keys, Billing, Settings |
| **Environment Switcher** | Top bar toggle | Test ↔ Production (with visual indicator: orange = test) |
| **Project Switcher** | Top-left dropdown | Switch between projects/apps |
| **Service Nav** | Tabs within service | Overview / Config / Logs / Metrics |
| **Code Tabs** | Language selector in examples | curl / Node / Python / Go / Ruby / Java |
| **Contextual Help** | Inline ? icons, links to docs | Open docs in new tab or side panel |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, environment (test/live), api_keys, created_at | has many Services, Members, Keys |
| APIKey | key, secret (masked), environment, created_at, last_used, permissions[] | belongs to Project |
| APILog | method, endpoint, status_code, response_time, request_body, response_body, timestamp | belongs to Project |
| Webhook | url, events[], status, secret | belongs to Project |
| WebhookDelivery | event, status_code, response, attempts, timestamp | belongs to Webhook |
| Service | name, config{}, status | belongs to Project |
| Member | user, role, invited_at | belongs to Project |
| Invoice | amount, period, status, line_items[] | belongs to Project |

### Environment Model
- **Test/Sandbox**: Safe to experiment, test API keys, simulated responses
- **Production/Live**: Real data, live API keys, actual billing

## User Flows

### First Integration
```
Sign Up → Create Project → Get API Key → Read Quick Start Doc → API Playground (test call) → Integrate in Code
```

### Debug API Issue
```
Dashboard (see error spike) → Logs → Filter by endpoint + status 4xx/5xx → Expand Log Entry → View Request/Response → Fix in Code
```

### Set Up Webhooks
```
Webhooks → Add Endpoint → Enter URL → Select Events → Test (send test event) → Verify → Enable
```

### Manage Keys
```
API Keys → Create New Key → Set Permissions → Copy Key (shown once) → Store Securely
```

## URL / Route Structure

```
/                              → Dashboard
/playground                    → API Explorer
/services/:service             → Service Overview
/services/:service/config      → Service Config
/services/:service/logs        → Service Logs
/logs                          → All API Logs
/logs/:id                      → Log Detail
/events                        → Event Stream
/webhooks                      → Webhook Endpoints
/webhooks/:id                  → Webhook Detail
/webhooks/:id/deliveries       → Delivery History
/keys                          → API Keys
/keys/create                   → Create Key
/usage                         → Usage Overview
/billing                       → Billing / Plan
/billing/invoices              → Invoices
/team                          → Team Members
/team/roles                    → Roles
/team/audit-log                → Audit Log
/settings                      → Project Settings
/support                       → Support
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Docs, logs, settings, endpoints | — | Relevance |
| API Logs | Request URL, body, response | Method, Status Code, Endpoint, Date Range, Response Time | Timestamp, Response Time, Status |
| Events | Event type, payload | Event Type, Date Range, Delivery Status | Timestamp |
| Webhooks | URL, event types | Status (active/failed), Events | Created, Last Triggered |

## Responsive Behavior

| Breakpoint | Sidebar | Content | Code Blocks |
|------------|---------|---------|-------------|
| Desktop (≥1280px) | Expanded | Full width + max-width | Inline with copy button |
| Tablet (768–1279px) | Collapsed icons | Full width | Horizontal scroll |
| Mobile (<768px) | Hamburger | Full width | Horizontal scroll, smaller text |

### Developer-Specific UX
- Monospace font for all data/code
- Copy-to-clipboard on all keys, code, curl commands
- Syntax highlighting for JSON, code snippets
- Request/response viewer with collapse/expand
- Environment indicator always visible (test = orange banner)

## Access Control

| Role | Dashboard | API Keys | Logs | Billing | Settings | Team |
|------|-----------|----------|------|---------|----------|------|
| Owner | ✅ | Create/Revoke | ✅ | ✅ | ✅ | Manage |
| Admin | ✅ | Create/Revoke | ✅ | View | ✅ | Manage |
| Developer | ✅ | View (masked) | ✅ | — | Limited | View |
| Viewer | ✅ | — | View | — | — | View |
