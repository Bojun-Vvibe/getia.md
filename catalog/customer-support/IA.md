# Customer Support / Helpdesk — Information Architecture

## Overview

A customer support and ticketing platform (Zendesk, Intercom, Freshdesk style). The mental model is a **ticket queue** — customer requests arrive, get triaged, assigned, worked on, and resolved. Agents manage a queue; customers self-serve through a help center or submit tickets.

## Site Map

### Agent / Admin Portal

```
├── Dashboard
│   ├── Ticket Volume (today, week)
│   ├── Open Tickets by Priority
│   ├── SLA Compliance
│   ├── Average Response Time
│   ├── CSAT Score
│   └── Agent Availability
├── Tickets
│   ├── Views (saved filters)
│   │   ├── My Open Tickets
│   │   ├── Unassigned
│   │   ├── All Open
│   │   ├── Pending Customer
│   │   ├── Recently Solved
│   │   └── Custom Views
│   ├── Ticket List (table with inline priority/status)
│   └── Ticket Detail
│       ├── Customer Info (sidebar)
│       │   ├── Name, Email, Company
│       │   ├── Previous Tickets
│       │   └── Custom Fields
│       ├── Conversation Thread
│       │   ├── Customer Messages
│       │   ├── Agent Replies
│       │   ├── Internal Notes (private)
│       │   └── System Events (assigned, status changed)
│       ├── Reply Box
│       │   ├── Rich Text Editor
│       │   ├── Canned Responses / Macros
│       │   ├── Attachments
│       │   ├── CC / Collaborators
│       │   └── Submit as (open / pending / solved)
│       ├── Properties Panel
│       │   ├── Status
│       │   ├── Priority
│       │   ├── Assignee
│       │   ├── Group / Team
│       │   ├── Tags
│       │   ├── Type (question / incident / problem / task)
│       │   ├── Custom Fields
│       │   └── SLA Timer
│       └── Related
│           ├── Linked Tickets
│           ├── Knowledge Base Suggestions
│           └── Similar Tickets
├── Customers
│   ├── Customer List
│   ├── Customer Detail
│   │   ├── Profile Info
│   │   ├── Ticket History
│   │   ├── Activity Timeline
│   │   └── Notes
│   └── Organizations / Companies
├── Knowledge Base (Admin)
│   ├── Articles
│   │   ├── All Articles
│   │   ├── Draft / Published / Archived
│   │   └── Article Editor
│   ├── Categories & Sections
│   └── Analytics (views, helpfulness)
├── Live Chat / Messaging
│   ├── Active Conversations
│   ├── Chat Queue
│   └── Chat Detail (real-time)
├── Automations
│   ├── Triggers (on ticket create/update → action)
│   ├── Automations (time-based)
│   ├── Macros (one-click actions)
│   └── SLA Policies
├── Reports / Analytics
│   ├── Ticket Volume
│   ├── First Response Time
│   ├── Resolution Time
│   ├── CSAT / NPS
│   ├── Agent Performance
│   ├── Channel Distribution
│   └── Custom Reports
├── Settings
│   ├── General (business hours, timezone)
│   ├── Channels (email, chat, phone, social)
│   ├── Groups / Teams
│   ├── Ticket Forms & Fields
│   ├── SLA Policies
│   ├── Automations & Triggers
│   ├── Macros / Canned Responses
│   ├── Integrations
│   ├── Security
│   └── Branding (help center theme)
└── Agent Profile
    ├── Availability (online / away)
    └── Preferences
```

### Customer-Facing (Help Center)

```
├── Help Center Home
│   ├── Search Bar (prominent)
│   ├── Popular Articles
│   └── Category Cards
├── Category Page
│   ├── Section List
│   └── Article List
├── Article Page
│   ├── Content (markdown/rich text)
│   ├── Was this helpful? (yes/no)
│   ├── Related Articles
│   └── Still need help? → Submit Ticket
├── Submit a Request
│   ├── Ticket Form
│   │   ├── Subject
│   │   ├── Description
│   │   ├── Category / Type
│   │   ├── Priority
│   │   ├── Attachments
│   │   └── Custom Fields
│   └── Confirmation
├── My Requests
│   ├── Open Requests
│   ├── Closed Requests
│   └── Request Detail (conversation view)
├── Community Forum (optional)
│   ├── Topics
│   ├── Questions
│   └── Feature Requests
└── Live Chat Widget
    ├── Chat Bubble
    ├── Bot Greeting
    ├── Self-service Suggestions
    └── Escalate to Agent
```

## Navigation Model

### Agent Portal

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed | Dashboard, Tickets (with views), Customers, Knowledge Base, Reports, Settings |
| **Ticket Views** | Expandable list in sidebar | My Open, Unassigned, Custom Views |
| **Ticket Detail** | Split view (list + detail) or full-page | Customer info sidebar, conversation center, properties right |
| **Top Bar** | Fixed | Search, notifications, agent status (online/away), profile |
| **Quick Actions** | Keyboard shortcuts, macros button | Apply macro, change status, assign |

### Help Center

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Logo, search, sign in, submit request | Prominent search |
| **Breadcrumbs** | Navigation path | Home > Category > Section > Article |
| **Sidebar** | Article navigation (section list) | Current section context |
| **Chat Widget** | Floating bottom-right | Persistent across all pages |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Ticket | number, subject, description, status, priority, type, channel, created_at, sla_deadline | belongs to Customer, Assignee, Group; has Comments |
| Comment | body, type (public/internal), author, attachments[], created_at | belongs to Ticket |
| Customer | name, email, phone, company, custom_fields{} | has many Tickets |
| Organization | name, domain, plan, custom_fields{} | has many Customers |
| Agent | name, email, role, groups[], availability | assigned to Tickets |
| Group | name, agents[] | assigned to Tickets |
| Article | title, body, category, section, status, views_count, helpful_count | belongs to Knowledge Base |
| Macro | name, actions[] (set field, add comment) | used by Agents |
| Trigger | conditions[], actions[] | fires on ticket events |
| SLAPolicy | name, conditions, targets (first_reply, resolution) | applied to Tickets |
| CannedResponse | name, body, shortcuts | used by Agents |

### Ticket Status Flow
`new → open → pending (waiting on customer) → on-hold (waiting on third party) → solved → closed`

### Priority Levels
`low → normal → high → urgent`

### Channels
`email | web form | chat | phone | social (twitter, facebook) | API`

## User Flows

### Customer: Get Help
```
Help Center → Search → Article → Solved!
         or → Article → Not helpful → Submit Ticket → Receive Response → Reply → Resolved
         or → Chat Widget → Bot Suggestions → Escalate to Agent → Real-time Chat → Resolved
```

### Agent: Work Queue
```
Login → Dashboard → My Open Tickets → Pick Ticket → Read → Reply (using macro/canned response) → Set Status (pending/solved) → Next Ticket
```

### Agent: Triage Unassigned
```
Unassigned View → Review Ticket → Set Priority → Assign to Group/Agent → (or) Reply + Solve
```

### Escalation
```
Agent Reviews Ticket → Cannot Resolve → Escalate (assign to specialist group) → Internal Note → Specialist Picks Up → Resolves
```

## URL / Route Structure

### Agent Portal
```
/agent                         → Dashboard
/agent/tickets                 → All tickets (default view)
/agent/tickets/view/:viewId    → Custom view
/agent/tickets/:id             → Ticket detail
/agent/customers               → Customer list
/agent/customers/:id           → Customer detail
/agent/knowledge-base          → KB articles
/agent/knowledge-base/:id/edit → Edit article
/agent/reports                 → Reports
/agent/settings                → Settings
```

### Help Center
```
/help                          → Help Center home
/help/categories/:slug         → Category
/help/articles/:id             → Article
/help/requests/new             → Submit request
/help/requests                 → My requests
/help/requests/:id             → Request detail
/help/search?q=:query          → Search results
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Agent: Tickets | Subject, description, comments, customer info | Status, Priority, Assignee, Group, Channel, Tags, Date Range, SLA (breached/at risk) | Created, Updated, Priority, SLA Deadline |
| Agent: Customers | Name, email, company | Organization, Tags, Ticket Count | Name, Last Ticket Date |
| Help Center | Article title, body | Category, Section | Relevance |
| Customer: Requests | Subject | Status (open/closed) | Date |

## Responsive Behavior

| Breakpoint | Agent Portal | Help Center |
|------------|-------------|-------------|
| Desktop (≥1280px) | Sidebar + ticket list + ticket detail (3-panel) | Full layout with sidebar |
| Tablet (768–1279px) | Sidebar collapsed, list + detail | Full layout |
| Mobile (<768px) | Full-screen views (list → detail → back) | Stacked, chat widget prominent |

### Chat Widget Behavior
- Desktop: fixed bottom-right corner (350px wide)
- Mobile: full-screen when opened
- Proactive messages based on page/behavior
- Bot-first → agent handoff
- Rich messages (buttons, carousels, forms)

## Access Control

### Agent Portal

| Role | Dashboard | Tickets | Customers | KB | Reports | Settings |
|------|-----------|---------|-----------|-----|---------|----------|
| Agent | ✅ | Own group | Read | — | Own metrics | — |
| Senior Agent | ✅ | All | Read/Edit | Edit articles | Team metrics | — |
| Admin | ✅ | All | Full | Full | All | ✅ |

### Help Center

| Role | Browse | Submit Ticket | View Requests | Community |
|------|--------|--------------|---------------|-----------|
| Anonymous | ✅ (public articles) | — | — | Read |
| Authenticated | ✅ | ✅ | Own | Read/Write |
| Agent | ✅ | ✅ | All | Moderate |
