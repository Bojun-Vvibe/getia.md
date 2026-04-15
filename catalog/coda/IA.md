---
brand: Coda
tagline: A doc as powerful as an app
category: Productivity
website: https://coda.io
---

# Information Architecture — Coda

## Overview

Coda blends documents, spreadsheets, and applications into a single surface. A Coda doc is a collection of pages, each containing text, tables, buttons, formulas, and interactive controls. The key innovation is treating tables as first-class databases with formula-powered columns and "Packs" (third-party integrations) — turning every doc into a custom app without code.

## Site Map

```
coda.io
├── Home (Doc Gallery)
│   ├── Recent Docs
│   ├── Starred
│   ├── Created by Me
│   └── Shared with Me
├── Workspace
│   ├── Folders → Docs
│   └── Team Docs
├── Doc
│   ├── Pages (nested, sidebar tree)
│   │   ├── Canvas (rich text, headings, callouts)
│   │   ├── Tables (inline or full-page)
│   │   │   ├── Views (Grid, Detail, Form, Chart, Calendar, Kanban, Timeline)
│   │   │   └── Columns (text, number, select, formula, lookup, button, etc.)
│   │   ├── Controls (sliders, buttons, select lists)
│   │   └── Embeds
│   ├── Formulas (cross-table, cross-page)
│   ├── Automations (time-based or event-based rules)
│   ├── Packs (integrations: Slack, Gmail, GitHub, etc.)
│   └── Publishing (share as website)
├── Templates Gallery
├── Pack Hub
│   ├── Featured Packs
│   ├── By Category
│   └── Build a Pack (SDK)
├── Settings
│   ├── Account
│   ├── Workspace
│   ├── Billing
│   └── API
└── Marketing Site
    ├── Product
    ├── Solutions
    ├── Gallery
    └── Pricing
```

## Navigation Model

- **Left sidebar (home):** Recent, Starred, Workspace folders, Create new doc
- **Doc sidebar:** Page tree with drag-to-reorder, nesting, and collapse; page icons and emojis
- **In-doc:** Scroll through canvas content; tables inline or linked cross-page; formula bar when editing columns
- **Top bar (in doc):** Doc title, Share, Publish, Settings, version history
- **Cross-table references:** Formulas reference tables by name across pages — no rigid hierarchy

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, plan | → Folders, Docs |
| Folder | name | → Docs |
| Doc | title, icon, cover, published URL | → Pages, Tables, Automations, Packs |
| Page | title, content (blocks), nesting level | → Sub-pages, Tables, Controls |
| Table | name, columns, rows, views | → Formulas, Automations |
| Column | name, type, formula | → Table |
| Row | column values | → Table |
| View | type (grid/detail/form/chart/kanban/calendar/timeline), filters, sort | → Table |
| Pack | name, actions, formulas, sync tables | → Doc |
| Automation | trigger (time/row change), action (formula/pack action) | → Tables, Packs |
| Control | type (button/slider/select/text input), action | → Page, Formulas |


### Item Lifecycle
```
draft → active → in_progress → completed → archived
                               ↘ blocked → unblocked → in_progress
draft → deleted (soft delete, 30-day retention)
```
## User Flows

### Build a Doc-App
```
New Doc → Add Page → Create Table (columns: Task, Owner, Status, Due Date) → Add views (Kanban by Status, Calendar by Due Date) → Add formula columns → Add buttons for actions → Publish
```

### Use Packs for Integration
```
Doc → Settings → Packs → Search for Slack → Install → In table, add column type: "Slack: Send Message" → Configure → Button triggers Slack message
```

### Create an Automation
```
Doc → Automations → + New → Trigger: "Daily at 9am" or "When row matches filter" → Action: "Modify rows" or "Send notification" → Activate
```

### Publish as Website
```
Doc → Publish → Set published pages → Choose layout (doc/landing page) → Custom domain (optional) → Publish
```

### New User Onboarding
```
Visit Coda → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

```
coda.io/docs                                # Home / doc gallery
coda.io/d/{doc_id}/{doc_slug}               # Doc landing (first page)
coda.io/d/{doc_id}/{doc_slug}/_su{page_id}  # Specific page
coda.io/d/{doc_id}/_tbl{table_id}           # Table view
coda.io/form/{doc_id}/{form_id}             # Published form
coda.io/packs                               # Pack Hub
coda.io/templates                           # Templates gallery
coda.io/gallery                             # Community gallery
coda.io/settings  # Settings
coda.io/account  # Account settings
coda.io/account/security  # Security settings
coda.io/billing  # Billing & subscription
coda.io/notifications  # Notification preferences
coda.io/help  # Help center
coda.io/help/{topic}  # Help article
coda.io/api  # API documentation
coda.io/search?q={query}  # Search results
coda.io/integrations  # Integrations
coda.io/admin  # Admin console
coda.io/admin/members  # Member management
```

## Search & Filter

- **Home search:** Search docs by title across workspace
- **In-doc search (⌘F):** Full-text search across all pages and table cell content
- **Table filters:** Multi-condition filter builder per view; filters persist per view
- **Formula-powered filtering:** Dynamic filters using formulas referencing controls (e.g., slider value)
- **Pack Hub search:** Search packs by name, category, app

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full page sidebar + canvas + table views; formula editing |
| Tablet (768–1023px) | Collapsible sidebar, responsive tables with horizontal scroll |
| Mobile app | Read-friendly doc navigation, simplified table views, form input supported |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Coda-Specific UX Patterns
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


### API & Integration Patterns
- RESTful API with JSON request/response format
- Webhook support for real-time event notifications
- OAuth 2.0 for third-party application authorization
- Rate limiting with clear headers (X-RateLimit-Remaining)
- Pagination via cursor-based or offset-based parameters
- Versioned API endpoints for backward compatibility
- Comprehensive API documentation with interactive examples
- SDKs available for popular languages (JavaScript, Python, Ruby, Go)


- Cross-doc syncing allows tables to be shared between multiple documents
- Coda AI assists with formula writing and content generation
- Pack Studio SDK enables custom integration development

## Access Control

| Role | Capabilities |
|------|-------------|
| Doc Owner | Full control: edit, share, publish, delete, manage permissions |
| Doc Editor | Edit content, tables, formulas, but not sharing settings |
| Doc Commenter | Add comments, cannot modify content |
| Doc Viewer | Read only |
| Published (public) | Anyone can view/interact with published pages; no sign-in needed |
| Workspace Admin | Manage members, billing, workspace-level settings |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance