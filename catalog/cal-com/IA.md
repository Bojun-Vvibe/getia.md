---
brand: Cal.com
tagline: "Open-source scheduling. Booking pages, team availability, self-hostable."
category: Productivity
website: https://cal.com
---

# Cal.com — Information Architecture

## Overview

Cal.com is an open-source Calendly alternative. The mental model is **availability as a product** — users define when they're free, create event types with specific durations and rules, and share booking links. Key differentiators: fully open-source (self-hostable), round-robin and collective team scheduling, routing forms (qualify before booking), workflow automations, and deep calendar integrations.

## Site Map

```
├── Bookings
│   ├── Upcoming
│   ├── Recurring
│   ├── Past
│   ├── Cancelled
│   └── Unconfirmed (requires approval)
├── Event Types
│   ├── Event Type List
│   ├── Event Type Setup
│   │   ├── General (title, slug, duration, description)
│   │   ├── Availability (linked schedule)
│   │   ├── Limits (min notice, buffer, frequency cap)
│   │   ├── Advanced (requires confirmation, redirect, custom questions)
│   │   ├── Recurring (allow recurring booking)
│   │   ├── Payments (Stripe integration)
│   │   └── Webhooks
│   ├── Team Event Types
│   │   ├── Round Robin
│   │   ├── Collective (all must attend)
│   │   └── Managed Event Types
│   └── Create Event Type
├── Availability
│   ├── Schedules (working hours templates)
│   ├── Date Overrides (specific dates off/on)
│   └── Time Zone Handling
├── Routing Forms
│   ├── Form Builder (questions)
│   ├── Routing Rules (if answer → route to event type)
│   └── Form Analytics
├── Workflows
│   ├── Email/SMS Reminders
│   ├── Before/After Event Actions
│   └── Custom Triggers
├── Teams
│   ├── Team Members
│   ├── Team Event Types
│   └── Team Availability
├── Apps & Integrations
│   ├── Calendar (Google, Outlook, Apple)
│   ├── Conferencing (Zoom, Meet, Teams)
│   ├── Payment (Stripe)
│   ├── CRM (HubSpot, Salesforce)
│   ├── Automation (Zapier, Make)
│   └── Analytics
├── Settings
│   ├── General (name, bio, timezone, branding)
│   ├── Appearance (theme, logo, brand colors)
│   ├── Calendars (connected, conflict checking)
│   ├── Conferencing
│   ├── Security (2FA, password)
│   ├── Billing
│   ├── Developer (API keys, webhooks)
│   └── Admin (self-hosted: users, SAML, OIDC)
└── Public Booking Pages
    ├── User Profile (event type list)
    ├── Event Type Page (calendar picker + time slots)
    ├── Booking Confirmation
    ├── Reschedule
    └── Cancel
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed | Logo, Bookings, Event Types, Availability, Routing Forms, Workflows, Teams, Apps, Settings |
| **Top Bar** | Fixed | Current section title, profile avatar, timezone indicator |
| **Public Pages** | Standalone, minimal chrome | Branded booking page with calendar grid + time slots |
| **Setup Wizard** | Tabs within event type | General / Availability / Limits / Advanced |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| EventType | title, slug, duration[], description, locations[], recurring, price, requires_confirmation | belongs to User/Team, linked to Schedule |
| Booking | event_type, start, end, attendee, status, payment_status, meeting_url | belongs to EventType |
| Schedule | name, timezone, availability_rules[], date_overrides[] | belongs to User, linked to EventTypes |
| RoutingForm | title, fields[], routes[] | routes to EventTypes |
| Workflow | trigger, steps[] (email/SMS/webhook), active | belongs to EventType |
| Team | name, slug, members[], billing | has many EventTypes |
| App | name, type, credentials, enabled | connected to User |

### Booking Status
`pending → confirmed → completed → cancelled / rescheduled / no-show`

| AuditLog | action, actor, target, timestamp, ip_address | belongs to Organization |
| Notification | type, message, read, created_at, action_url | belongs to User |
| APIToken | name, key_hash, permissions[], created_at, last_used | belongs to User |

### Item Lifecycle
```
draft → active → in_progress → completed → archived
                               ↘ blocked → unblocked → in_progress
draft → deleted (soft delete, 30-day retention)
```
## User Flows

### Set Up Booking Page
```
Event Types → Create → Set title, duration, location → Link schedule → Share URL → Ready for bookings
```

### Booker Flow
```
Visit cal.com/username → Select event type → Pick date → Pick time slot → Fill details → Confirm → Calendar invite sent
```

### Team Round-Robin
```
Create Team Event → Type: Round Robin → Add members → Set distribution rules → Share team link → Auto-assigns to available member
```

### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
### Search and Discover
```
Global search → Type query → Results grouped by type → Click result → Navigate to item → Refine search with filters if needed
                                                                                          ↘ No results → Suggested alternatives
```
## URL / Route Structure

```
/bookings                  → Bookings list
/event-types               → Event types
/event-types/:id           → Edit event type
/availability              → Schedules
/routing-forms             → Routing forms
/workflows                 → Workflows
/teams                     → Teams
/apps                      → App store
/settings                  → Settings
/:username                 → Public profile (booking page)
/:username/:eventSlug      → Public event booking
/booking/:uid              → Booking confirmation
/reschedule/:uid           → Reschedule
/cancel/:uid               → Cancel booking
billing  → Billing & subscription
notifications  → Notification preferences
help  → Help center
help/{topic}  → Help article
api  → API documentation
search?q={query}  → Search results
/settings/developer              → Developer settings
/settings/billing                → Billing
/settings/appearance             → Appearance & branding
/settings/calendars              → Connected calendars
/teams/:id/members               → Team members
/api/v1                          → API documentation
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Bookings | Status, Date Range, Event Type | Date, Status |
| Event Types | Active/Inactive, Team/Personal | Name, Created |
| Apps | Category, Connected/Available | Name, Popular |

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Sidebar + content area |
| Tablet | Collapsed sidebar |
| Mobile | Bottom nav, calendar as vertical day scroller |

### Public Booking Page
- Desktop: calendar grid left + time slots right
- Mobile: calendar top → time slots below, full-width


### Cal.com-Specific UX Patterns
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

| Role | Bookings | Event Types | Team | Settings |
|------|----------|-------------|------|----------|
| Free User | ✅ | 1 active | — | Basic |
| Pro | ✅ | Unlimited | — | ✅ |
| Team Member | Own bookings | Team events | View | — |
| Team Admin | All | Manage | ✅ | ✅ |
| Self-hosted Admin | All | All | All | Full (SAML, OIDC, users) |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance