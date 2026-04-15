---
brand: Freshdesk
tagline: Delight your customers with effortless customer service
category: Business SaaS
website: https://freshdesk.com
---

# Information Architecture — Freshdesk

## Overview

Freshdesk is a cloud-based helpdesk platform by Freshworks that organizes customer support around tickets, canned automations, and a self-service portal. The IA focuses on simplicity: tickets flow through a shared inbox with SLA-driven prioritization, Freddy AI handles initial triage, and the knowledge base deflects common queries. Dispatch'r (auto-routing), Supervisor (time-based rules), and Observer (event-based triggers) form the automation triad.

## Site Map

```
freshdesk.com
├── Dashboard
│   ├── Ticket Summary (unresolved, overdue, due today)
│   ├── Agent Performance
│   └── Customer Satisfaction Score
├── Tickets
│   ├── All Tickets
│   ├── My Open Tickets
│   ├── Unresolved
│   ├── Overdue
│   ├── Custom Views
│   └── Ticket Detail
│       ├── Conversation (replies, notes, forwards)
│       ├── Properties (status, priority, agent, group, type)
│       ├── Contact/Company Info
│       ├── SLA Status
│       ├── Time Tracking
│       ├── Related Tickets
│       └── Child Tickets (split)
├── Contacts
│   ├── Contacts List
│   ├── Companies
│   └── Contact Detail (tickets history)
├── Solutions (Knowledge Base)
│   ├── Categories
│   │   └── Folders
│   │       └── Articles
│   ├── Article Editor
│   └── Self-service Portal
├── Forums (Community)
│   ├── Categories → Topics → Posts
│   └── Idea Boards
├── Reports
│   ├── Helpdesk Analytics
│   ├── Agent Performance
│   ├── Group Performance
│   ├── Customer Satisfaction
│   ├── Timesheet Summary
│   └── Custom Reports
├── Admin
│   ├── Agents & Groups
│   ├── Channels (Email, Phone, Chat, Social, WhatsApp)
│   ├── Automations
│   │   ├── Dispatch'r (ticket creation rules)
│   │   ├── Supervisor (time-based rules)
│   │   └── Observer (event-based triggers)
│   ├── SLA Policies
│   ├── Business Hours
│   ├── Canned Responses
│   ├── Ticket Fields
│   ├── Customer Portal Settings
│   ├── Freddy AI
│   └── Marketplace (Apps)
└── Customer Portal (Public)
    ├── Knowledge Base
    ├── Submit Ticket
    ├── Track My Tickets
    └── Community Forums
```

## Navigation Model

- **Left sidebar:** Dashboard, Tickets, Contacts, Solutions, Forums, Reports, Admin
- **Ticket list:** Table with sortable columns; filter bar at top; bulk actions
- **Ticket detail:** Split view — conversation thread (left), properties + contact info (right)
- **Admin:** Categorized settings with search within admin
- **Customer Portal:** Public-facing site with KB search, ticket submission, and community

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Ticket | subject, description, status, priority, source (email/phone/chat/portal/social), agent, group, type, tags, SLA | → Contact, Company, Conversations, Child Tickets |
| Conversation | type (reply/note/forward), body, attachments, author | → Ticket |
| Contact | name, email, phone, custom fields | → Company, Tickets |
| Company | name, domain, custom fields | → Contacts, Tickets |
| Agent | name, email, role, group(s), skills | → Tickets |
| Group | name, agents, auto-assignment | → Tickets |
| Article (Solution) | title, body, folder, status (draft/published), tags | → Folder, Category |
| Canned Response | title, content, folder | → Tickets (applied by agents) |
| SLA Policy | response time, resolution time per priority | → Tickets |
| Automation Rule | type (dispatch/supervisor/observer), conditions, actions | → Tickets |
| Freddy AI | suggested responses, ticket classification, contact scoring | → Tickets |

## User Flows

### 1. Ticket Lifecycle
`Customer submits via email/portal → Dispatch'r assigns group/agent → Agent opens ticket → Responds with reply or canned response → Escalation if SLA breached → Resolve → CSAT survey`

### 2. Set Up Dispatch'r Automation
`Admin → Automations → Dispatch'r → + New Rule → IF (ticket source = Email AND subject contains "billing") → THEN (assign to Billing group, set priority High) → Save`

### 3. Build Knowledge Base
`Solutions → + New Category → + New Folder → + New Article → Write content (rich text, images, video) → Publish → Article appears in Customer Portal and Agent KB search`

### 4. Monitor Performance
`Reports → Agent Performance → Select date range → View first response time, resolution time, tickets resolved, CSAT scores → Drill down by agent/group`


### Customer Self-Service

```
Visitor opens Support Portal → Searches Knowledge Base → Finds article → Issue resolved without ticket
```

Alternatively:
```
Visitor opens Support Portal → Searches KB → No result → Submits Ticket → Receives confirmation email → Tracks status via portal
```

### Freddy AI Assistance

```
Customer submits ticket → Freddy AI analyzes content → Suggests relevant KB articles → Customer resolves via self-service → OR → Freddy classifies and routes to appropriate agent group
```

## URL / Route Structure

```
{domain}.freshdesk.com/a/dashboard/default         # Dashboard
{domain}.freshdesk.com/a/tickets/filters/{view}     # Ticket view
{domain}.freshdesk.com/a/tickets/{ticket_id}        # Ticket detail
{domain}.freshdesk.com/a/contacts/{id}              # Contact detail
{domain}.freshdesk.com/a/solutions/categories       # Knowledge base admin
{domain}.freshdesk.com/a/admin/automations           # Automations
{domain}.freshdesk.com/a/analytics/                  # Reports
{domain}.freshdesk.com/support/home                  # Customer Portal home
{domain}.freshdesk.com/support/solutions/articles/{id} # Public article
{domain}.freshdesk.com/support/tickets/new           # Submit ticket
{domain}.freshdesk.com/a/tickets/new                    # New ticket form
{domain}.freshdesk.com/a/companies/{id}                 # Company detail
{domain}.freshdesk.com/a/solutions/articles/{id}/edit   # Edit article
{domain}.freshdesk.com/a/admin/agents                   # Agent management
{domain}.freshdesk.com/a/admin/groups                   # Group management
{domain}.freshdesk.com/a/admin/sla                      # SLA policies
{domain}.freshdesk.com/a/admin/business-hours            # Business hours
{domain}.freshdesk.com/a/admin/canned-responses         # Canned responses
{domain}.freshdesk.com/a/admin/ticket-fields             # Custom fields
{domain}.freshdesk.com/a/admin/freddy                   # Freddy AI settings
{domain}.freshdesk.com/a/admin/marketplace              # Marketplace apps
{domain}.freshdesk.com/a/forums/{id}                    # Forum category
{domain}.freshdesk.com/support/tickets/check_status     # Track ticket status
```

## Search & Filter

- **Ticket search:** Full-text across subject, description, notes; filter by status, priority, agent, group, tags, created date, SLA status
- **Custom Views:** Saved filter + sort configurations; shared across team or personal
- **Contact/Company search:** By name, email, domain, custom fields
- **Knowledge Base search:** Full-text article search in admin and customer portal; auto-suggest
- **Freddy AI suggestions:** AI-powered article suggestions based on ticket content

- **Canned Response search**: Search canned responses by title or folder
- **Forum search**: Full-text search in community forums
- **Agent search**: Find agents by name, group, or skill
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full sidebar + ticket list + detail panel |
| Tablet (768–1023px) | Responsive layout; ticket detail as full page |
| Mobile (Freshdesk app) | View/respond to tickets, manage views, notifications; limited admin |
| Customer Portal | Fully responsive; search articles, submit tickets, track status on any device |


### Platform-Specific UX
- Dispatch'r, Supervisor, and Observer form the automation triad for ticket lifecycle management
- Freddy AI provides suggested responses and ticket classification powered by ML
- SLA policies with escalation rules ensure response and resolution time compliance
- Multi-channel support unifies Email, Phone, Chat, Social, and WhatsApp into a single inbox
- Canned responses with dynamic placeholders speed up agent replies
- Parent-child ticket relationships enable splitting complex issues into sub-tasks
- Customer Portal provides self-service ticket submission, tracking, and knowledge base access
- Satisfaction surveys (CSAT) are auto-sent after ticket resolution
- Day Pass model allows occasional agents to work tickets without full-time seats
- Time tracking enables billing clients for support hours spent per ticket
- Custom ticket forms with conditional fields adapt to different issue types
- Marketplace apps extend functionality with 1000+ integrations

### Integration Points
- Native integrations with Slack, Microsoft Teams, Jira, and Salesforce
- Freshdesk API (v2) provides full CRUD operations on tickets, contacts, and solutions
- Webhooks enable event-driven automation with external systems


### Ticket Priority Matrix
```
Urgent + High Impact  → P1 → 1-hour response SLA
High + Medium Impact  → P2 → 4-hour response SLA
Medium + Low Impact   → P3 → 8-hour response SLA
Low + Minimal Impact  → P4 → 24-hour response SLA
```

### Channel Support
- Email: Auto-ticket creation from incoming emails
- Phone: Call logging with ticket linking
- Chat: Live chat widget on customer portal
- Social: Twitter and Facebook message monitoring
- WhatsApp: Business API integration for messaging

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Admin | Full access — billing, settings, all tickets, all agents |
| Admin | Manage agents, groups, automations, all tickets |
| Supervisor | View/manage all tickets, run reports, cannot change settings |
| Agent | Work assigned tickets, use canned responses, access KB |
| Occasional Agent (Day Pass) | Temporary agent access on specific days |
| Contact (Customer) | Submit/track own tickets, access portal, browse KB |
| Custom Role | Configurable permissions per module (Enterprise) |
