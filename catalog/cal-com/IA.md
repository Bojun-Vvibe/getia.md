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
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Bookings | Status, Date Range, Event Type | Date, Status |
| Event Types | Active/Inactive, Team/Personal | Name, Created |
| Apps | Category, Connected/Available | Name, Popular |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Sidebar + content area |
| Tablet | Collapsed sidebar |
| Mobile | Bottom nav, calendar as vertical day scroller |

### Public Booking Page
- Desktop: calendar grid left + time slots right
- Mobile: calendar top → time slots below, full-width

## Access Control

| Role | Bookings | Event Types | Team | Settings |
|------|----------|-------------|------|----------|
| Free User | ✅ | 1 active | — | Basic |
| Pro | ✅ | Unlimited | — | ✅ |
| Team Member | Own bookings | Team events | View | — |
| Team Admin | All | Manage | ✅ | ✅ |
| Self-hosted Admin | All | All | All | Full (SAML, OIDC, users) |
