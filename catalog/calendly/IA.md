---
brand: Calendly
tagline: Easy scheduling ahead
category: Productivity
website: https://calendly.com
---

# Information Architecture — Calendly

## Overview

Calendly eliminates the back-and-forth of scheduling by letting users share a booking link that shows their real-time availability. The IA revolves around Event Types (templates for meetings) and Scheduled Events (booked meetings). Routing forms, round-robin assignment, and workflow automations extend the platform from personal scheduling to team-wide booking infrastructure.

## Site Map

```
calendly.com
├── Home (Upcoming Events Dashboard)
├── Event Types
│   ├── One-on-One
│   ├── Group
│   ├── Collective (multiple hosts)
│   ├── Round Robin
│   └── [Each Event Type]
│       ├── Event Details (name, duration, location)
│       ├── Availability
│       ├── Invitee Questions
│       ├── Notifications & Workflows
│       └── Confirmation Page
├── Scheduled Events
│   ├── Upcoming
│   ├── Past
│   ├── Date Range Filter
│   └── Event Detail
│       ├── Invitee Info
│       ├── Reschedule / Cancel
│       └── No-show
├── Workflows (Automations)
│   ├── Email Reminders
│   ├── Follow-ups
│   ├── SMS Notifications
│   └── Custom Workflows
├── Routing Forms
│   ├── Questions
│   └── Routing Rules → Event Types
├── Analytics
│   ├── Popular Times
│   ├── Event Volume
│   └── Team Activity
├── Integrations
│   ├── Calendars (Google, Outlook, iCloud)
│   ├── Video (Zoom, Teams, Meet)
│   ├── CRM (Salesforce, HubSpot)
│   └── Embed / API
├── Admin
│   ├── Organization Settings
│   ├── Managed Events
│   ├── Teams
│   └── Billing
└── Booking Page (Public)
    ├── User/Team Profile
    ├── Event Type Selection
    ├── Date/Time Picker
    └── Invitee Form
```

## Navigation Model

- **Top bar:** Calendly logo, Home, Event Types, Scheduled Events, Workflows, Routing, Analytics, Admin
- **Home dashboard:** Today's upcoming events, quick actions, recent bookings
- **Event Type editor:** Step-by-step settings (Details → Availability → Questions → Notifications → Confirmation)
- **Booking page (public):** Clean single-column flow — select event type → pick date/time → fill form → confirm

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | name, email, timezone, calendar connections | → Event Types, Scheduled Events |
| Team | name, members, booking page | → Round Robin pools, Collective events |
| Event Type | name, slug, duration, color, location, questions | → Availability rules, Workflows |
| Scheduled Event | date/time, status (active/canceled/rescheduled), invitee | → Event Type, User |
| Invitee | name, email, responses to questions, timezone | → Scheduled Event |
| Workflow | trigger (before/after event), action (email/SMS/webhook) | → Event Types |
| Routing Form | questions, routing rules | → Event Types |
| Availability | schedule (weekly hours), date overrides, buffer, limits | → Event Type |


### Item Lifecycle
```
draft → active → in_progress → completed → archived
                               ↘ blocked → unblocked → in_progress
draft → deleted (soft delete, 30-day retention)
```
## User Flows

### Set Up and Share
```
Event Types → + New → Name, duration, location → Set availability → Add questions → Copy link → Share
```

### Invitee Books a Meeting
```
Open booking link → Select event type → Choose date/time from available slots → Fill form → Confirm → Calendar invite sent
```

### Round Robin Scheduling
```
Admin creates Round Robin event type → Add team members → Set distribution (optimize for availability or equal) → Invitee books → Auto-assigned
```

### Automate Follow-ups
```
Workflows → + New → Trigger: After event ends → Action: Send follow-up email → Apply to event types → Activate
```

### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

```
calendly.com/event_types                          # Manage event types
calendly.com/event_types/{id}/edit                # Edit event type
calendly.com/scheduled_events                     # Upcoming/past events
calendly.com/{username}                           # Public booking page
calendly.com/{username}/{event-slug}              # Specific event type booking
calendly.com/{username}/{event-slug}/{date}       # Date-specific slots
calendly.com/d/{invitee-uuid}                     # Invitee confirmation/reschedule
calendly.com/routing/{form_id}                    # Routing form
calendly.com/settings  # Settings
calendly.com/account  # Account settings
calendly.com/account/security  # Security settings
calendly.com/billing  # Billing & subscription
calendly.com/notifications  # Notification preferences
calendly.com/help  # Help center
calendly.com/help/{topic}  # Help article
calendly.com/api  # API documentation
calendly.com/search?q={query}  # Search results
calendly.com/integrations  # Integrations
calendly.com/admin  # Admin console
calendly.com/admin/members  # Member management
```

## Search & Filter

- **Scheduled events:** Filter by date range, event type, status (active/canceled), invitee name/email
- **Event types:** Search by name, filter by active/inactive
- **Analytics filters:** Date range, event type, team member
- **Booking page:** Availability auto-filtered by invitee's timezone and host's connected calendars

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full admin dashboard with sidebar navigation; booking page as centered card |
| Tablet (768–1023px) | Responsive admin layout, booking page adapts naturally |
| Mobile | Fully responsive booking page (critical for invitees); admin app with simplified navigation |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Calendly-Specific UX Patterns
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

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Owner | Billing, all settings, manage all teams and members |
| Organization Admin | Manage members, teams, managed events, security settings |
| Team Manager | Manage team event types, view team analytics |
| Team Member | Own event types, view personal scheduled events |
| Invitee (external) | Book, reschedule, cancel own appointments via link |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance