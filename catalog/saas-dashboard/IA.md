# SaaS Dashboard — Information Architecture

## Overview

A data-driven admin panel for B2B products. Users manage resources, monitor metrics, and configure settings. The mental model is a **control center** — everything is accessible from a persistent sidebar, with the main content area showing contextual detail.

## Site Map

```
├── Dashboard (Home)
│   ├── Overview / Summary Cards
│   ├── Key Metrics Charts
│   └── Recent Activity Feed
├── [Primary Resource] (e.g., Projects, Campaigns, Orders)
│   ├── List View (table with filters)
│   ├── Detail View
│   │   ├── Overview Tab
│   │   ├── Analytics Tab
│   │   ├── Settings Tab
│   │   └── Activity / Audit Log Tab
│   └── Create / Edit Form
├── Analytics
│   ├── Overview Dashboard
│   ├── Custom Reports
│   └── Export
├── Team
│   ├── Members List
│   ├── Roles & Permissions
│   └── Invite Flow
├── Integrations
│   ├── Available Integrations
│   ├── Connected Integrations
│   └── Integration Detail / Config
├── Billing
│   ├── Current Plan
│   ├── Usage
│   ├── Invoices
│   └── Payment Methods
├── Settings
│   ├── General (Workspace name, logo)
│   ├── Notifications
│   ├── API Keys
│   ├── Security (2FA, SSO)
│   └── Danger Zone (Delete workspace)
├── Notifications Center
└── User Profile
    ├── Profile Settings
    ├── Preferences
    └── Logout
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Nav** | Fixed left sidebar | Always visible. Contains: logo, primary nav items, workspace switcher (bottom), user avatar (bottom) |
| **Secondary Nav** | Horizontal tabs within detail pages | Contextual to the current resource (Overview / Analytics / Settings) |
| **Utility Nav** | Top-right icons | Notifications bell, search (⌘K), help, user menu |
| **Breadcrumbs** | Top of content area | Show path: Dashboard > Projects > Project Name |
| **Command Palette** | ⌘K / Ctrl+K overlay | Quick navigation + actions search |

### Sidebar Structure
```
[Logo]
─────────────
🏠 Dashboard
📦 [Primary Resource]
📊 Analytics
👥 Team
🔌 Integrations
─────────────
💳 Billing
⚙️ Settings
─────────────
[Workspace Switcher]
[User Avatar + Menu]
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, slug, logo, plan, created_at | has many Members, Resources, Integrations |
| Member | user_id, role, invited_at, status | belongs to Workspace, has one Role |
| Role | name, permissions[] | has many Members |
| [Resource] | id, name, status, created_by, created_at, updated_at, metadata{} | belongs to Workspace, has many ActivityLogs |
| Integration | provider, status, config{}, connected_at | belongs to Workspace |
| ActivityLog | actor, action, target, timestamp, diff{} | belongs to Resource |
| Notification | type, title, body, read, created_at | belongs to Member |
| Invoice | amount, status, period, pdf_url | belongs to Workspace |

### Status Patterns
- Resources: `draft → active → archived`
- Members: `invited → active → suspended`
- Integrations: `disconnected → connected → error`

## User Flows

### Onboarding (First-time)
```
Sign Up → Create Workspace → Invite Team → Connect Integration → Dashboard
```

### Primary Resource CRUD
```
Sidebar → Resource List → [+ Create] → Form → Save → Detail View
                        → [Click Row] → Detail View → Tabs → Edit → Save
                                                     → Delete (confirm modal)
```

### Settings Change
```
Sidebar → Settings → Section → Edit Field → Auto-save / Save Button → Toast Confirmation
```

## URL / Route Structure

```
/                           → Dashboard
/[resources]                → Resource List
/[resources]/new            → Create Resource
/[resources]/:id            → Resource Detail (Overview tab)
/[resources]/:id/analytics  → Resource Detail (Analytics tab)
/[resources]/:id/settings   → Resource Detail (Settings tab)
/analytics                  → Analytics Dashboard
/analytics/reports          → Custom Reports
/team                       → Team Members
/team/roles                 → Roles & Permissions
/integrations               → Integrations List
/integrations/:provider     → Integration Detail
/billing                    → Billing Overview
/billing/invoices           → Invoices
/settings                   → General Settings
/settings/notifications     → Notification Preferences
/settings/api-keys          → API Keys
/settings/security          → Security Settings
/profile                    → User Profile
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global (⌘K) | All resources, pages, actions | — | Relevance |
| Resource List | Name, ID, metadata fields | Status, Created By, Date Range, Tags | Name, Created, Updated, Status |
| Team | Name, email | Role, Status | Name, Joined Date |
| Activity Log | Action, actor | Action Type, Date Range | Timestamp (desc) |

## Responsive Behavior

| Breakpoint | Sidebar | Content |
|------------|---------|---------|
| Desktop (≥1024px) | Expanded with labels | Full width with max-width container |
| Tablet (768–1023px) | Collapsed to icons, expand on hover | Full width |
| Mobile (<768px) | Hidden, hamburger menu trigger | Full width, single column |

### Mobile Adaptations
- Tables → Card lists
- Horizontal tabs → Scrollable tab bar or dropdown
- Multi-column forms → Single column stack
- Command palette → Full-screen search

## Access Control

| Role | Dashboard | Resources | Analytics | Team | Billing | Settings |
|------|-----------|-----------|-----------|------|---------|----------|
| Owner | ✅ | CRUD | ✅ | Manage | ✅ | ✅ |
| Admin | ✅ | CRUD | ✅ | Manage | View | ✅ |
| Member | ✅ | CRU (own) | ✅ | View | — | Limited |
| Viewer | ✅ | Read | ✅ | View | — | — |
