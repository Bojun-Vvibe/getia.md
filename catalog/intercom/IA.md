---
brand: Intercom
tagline: The complete AI-first customer service solution
category: Business SaaS
website: https://intercom.com
---

# Information Architecture — Intercom

## Overview

Intercom is a customer messaging platform that unifies live chat, bots, help center, and product tours into a single system. The IA centers on the Messenger (the widget customers see) and the Inbox (where support agents work). With Fin AI as the front-line bot, Intercom routes conversations through a triage → AI → human escalation funnel. The platform also includes outbound messaging for marketing and onboarding.

## Site Map

```
intercom.com
├── Inbox
│   ├── Open Conversations
│   ├── Your Inbox (assigned to you)
│   ├── Mentions
│   ├── Unassigned
│   ├── Team Inboxes
│   └── Views (custom filters)
├── Fin AI Agent
│   ├── AI Answers (content sources)
│   ├── Custom Answers
│   ├── AI Settings
│   └── Performance Reports
├── Help Center (Articles)
│   ├── Collections
│   │   └── Sections → Articles
│   ├── Article Editor
│   └── Multi-language
├── Outbound Messages
│   ├── Email Campaigns
│   ├── In-app Messages
│   ├── Push Notifications
│   ├── Product Tours
│   ├── Banners
│   ├── Tooltips
│   └── Checklists
├── Contacts / Users
│   ├── People (users & leads)
│   ├── Companies
│   ├── Segments
│   └── Tags
├── Reports
│   ├── Conversations
│   ├── Effectiveness
│   ├── Team Performance
│   ├── Customer Satisfaction (CSAT)
│   └── Fin AI Reports
├── Settings
│   ├── Workspace
│   ├── Messenger (appearance, behavior)
│   ├── Channels (email, SMS, WhatsApp)
│   ├── Integrations
│   ├── Teammates
│   └── Billing
└── Marketing Site
    ├── Platform
    ├── Solutions
    ├── Pricing
    └── Resources
```

## Navigation Model

- **Left sidebar (persistent):** Inbox, Fin AI, Help Center, Outbound, Contacts, Reports, Settings
- **Inbox view:** Three-column — conversation list → conversation thread → customer profile sidebar
- **Help Center:** Collection/section tree → article editor
- **Outbound builder:** Step-by-step — content → audience (segment) → schedule → review
- **Messenger (customer-facing):** Home screen → Search articles / Start conversation → Bot flow → Human handoff

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Conversation | channel, status, assignee, priority, SLA, tags | → Messages, Contact, Company |
| Message (in conversation) | type (user/admin/bot/note), content, timestamp | → Conversation |
| Contact (User/Lead) | name, email, user_id, custom attributes, last seen | → Conversations, Company, Segments |
| Company | name, domain, plan, custom attributes | → Contacts |
| Segment | name, filter rules (attribute-based) | → Contacts |
| Article | title, body, collection, status (published/draft), language | → Collection, Section |
| Collection | name, icon, description | → Sections, Articles |
| Outbound Message | type, content, audience segment, schedule, status | → Contacts (recipients) |
| Product Tour | steps (tooltips, modals), audience, trigger | → Contacts |
| Fin AI Answer | content source (articles, custom), confidence | → Conversations |

## User Flows

### 1. Handle a Support Conversation
`Inbox → Open conversation → Read context (customer profile sidebar) → Reply with text/macro/article → Use AI Assist to draft → Resolve or snooze`

### 2. Set Up Fin AI
`Fin AI → Content Sources → Connect Help Center + external URLs → Train → Set handoff rules → Enable for Messenger → Monitor performance`

### 3. Send a Product Announcement
`Outbound → + New → In-App Message → Design content → Set audience (segment) → Set trigger (page visit/event) → Preview → Go Live`

### 4. Create a Help Article
`Help Center → + New Article → Write content (rich text, video, code) → Assign to Collection/Section → Translate → Publish`


### Product Tour Creation

```
Outbound → Product Tours → Create → Select trigger (page visit, event, manual) → Build steps (tooltips, modals, video) → Set audience (segment) → Preview → Activate → Monitor completion rates
```

### Conversation Triage with Fin AI

```
Customer sends message → Fin AI analyzes intent → Searches help articles and custom answers → Provides instant response → Customer satisfied → Resolved automatically → OR → Fin lacks confidence → Escalates to human agent → Agent sees AI-suggested context
```

### Segment-Based Outbound Campaign

```
Contacts → Create Segment (e.g., 'trial users, signed up > 3 days, not activated') → Outbound → New In-App Message → Target segment → Design content → Set display rules → Go Live → Track impressions and clicks
```

## URL / Route Structure

```
app.intercom.com/a/inbox/{workspace_id}/inbox/         # Inbox
app.intercom.com/a/inbox/{workspace_id}/inbox/{conv_id} # Conversation
app.intercom.com/a/apps/{workspace_id}/articles         # Help Center
app.intercom.com/a/apps/{workspace_id}/outbound         # Outbound messages
app.intercom.com/a/apps/{workspace_id}/users            # Contacts
app.intercom.com/a/apps/{workspace_id}/reports          # Reports
{company}.intercom-help.com/                            # Published Help Center
app.intercom.com/a/inbox/{workspace_id}/inbox/all            # All conversations
app.intercom.com/a/inbox/{workspace_id}/inbox/mentions        # Mentions
app.intercom.com/a/inbox/{workspace_id}/inbox/unassigned      # Unassigned
app.intercom.com/a/apps/{workspace_id}/articles/{id}          # Individual article
app.intercom.com/a/apps/{workspace_id}/articles/new            # New article editor
app.intercom.com/a/apps/{workspace_id}/outbound/messages       # All outbound messages
app.intercom.com/a/apps/{workspace_id}/outbound/tours          # Product tours
app.intercom.com/a/apps/{workspace_id}/outbound/checklists     # Checklists
app.intercom.com/a/apps/{workspace_id}/outbound/banners        # Banners
app.intercom.com/a/apps/{workspace_id}/users/{id}              # Contact detail
app.intercom.com/a/apps/{workspace_id}/companies               # Companies list
app.intercom.com/a/apps/{workspace_id}/companies/{id}          # Company detail
app.intercom.com/a/apps/{workspace_id}/segments                # Segments
app.intercom.com/a/apps/{workspace_id}/reports/conversations    # Conversation reports
app.intercom.com/a/apps/{workspace_id}/reports/fin              # Fin AI reports
app.intercom.com/a/apps/{workspace_id}/reports/team             # Team performance
app.intercom.com/a/apps/{workspace_id}/settings/messenger       # Messenger settings
app.intercom.com/a/apps/{workspace_id}/settings/channels        # Channel config
app.intercom.com/a/apps/{workspace_id}/settings/integrations    # Integrations
app.intercom.com/a/apps/{workspace_id}/settings/billing         # Billing
```

## Search & Filter

- **Inbox search:** Search conversations by keyword, contact name/email, tags, assignee
- **Inbox Views:** Saved filter combinations (e.g., "VIP unassigned conversations")
- **Contact search:** Search/filter by name, email, custom attributes, segment membership, last seen
- **Help Center search:** Full-text article search (also powers the Messenger's self-serve)
- **Reports filters:** Date range, team, channel, tag

- **Company search**: Search companies by name, domain, plan, or custom attributes
- **Outbound message search**: Filter messages by type, status (live/paused/draft), audience, date
- **Article analytics search**: Filter article performance by views, helpfulness rating, date range
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Three-column inbox (list → conversation → profile); full admin panels |
| Tablet | Two-column inbox; profile panel as overlay |
| Mobile (admin) | Mobile app for responding to conversations; limited admin features |
| Messenger (customer) | Responsive widget — adapts to mobile browsers; native SDKs for iOS/Android |


### Platform-Specific UX
- Three-column inbox layout (list → thread → customer profile) enables rapid triage
- Fin AI agent autonomously handles initial customer inquiries using help articles and custom answers
- Macros (saved replies) with dynamic variables speed up agent responses
- Customer profile sidebar shows all attributes, events, and conversation history for context
- Conversation assignment supports round-robin, load-balancing, and skill-based routing
- SLA timers with visual indicators show time remaining for first response and resolution
- Product Tours guide users through features with step-by-step tooltips and modals
- Checklists provide onboarding task lists that users can complete at their own pace
- Custom bots (workflow builder) create automated conversation flows with branching logic
- Messenger home screen can display custom cards, articles, and conversation starters
- Conversation tags enable categorization for reporting and routing purposes
- CSAT surveys trigger automatically after conversation resolution

### Integration Points
- Slack integration enables responding to conversations from Slack channels
- Salesforce and HubSpot CRM integrations sync contact and company data bidirectionally
- Jira integration creates tickets from conversations and tracks status
- Webhooks enable real-time event notifications to external systems
- REST API provides full programmatic access to conversations, contacts, and articles
- JavaScript SDK and mobile SDKs (iOS, Android, React Native) for Messenger embedding


### Conversation Routing Flow
```
Customer message → Fin AI attempts resolution → Confident? → Resolved automatically
                                                → Not confident? → Route to team inbox
                                                → Custom bot flow? → Follow branching logic
                                                → Priority customer? → Route to VIP queue
```

### Messenger Components
```
Home Screen:        Customizable cards, conversation starters, search
Conversation:       Chat thread with agent/bot responses
Article Viewer:     In-widget help article display
Product Tour:       Step-by-step guided feature walkthrough
Checklist:          Task list for onboarding completion
Survey:            In-messenger survey for feedback collection
```

## Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full workspace control, billing, security |
| Admin | Manage teammates, settings, all features |
| Agent | Inbox access, respond to conversations, view contacts |
| Agent (limited) | Restricted to assigned conversations only |
| Custom Role | Granular per-feature permissions (Enterprise) |
| Fin AI | Automated responses; escalates to human based on confidence and rules |
