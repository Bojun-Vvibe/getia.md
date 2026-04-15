# Calendar App — Information Architecture

## Overview

A scheduling and time management application (Google Calendar, Apple Calendar, Calendly style). The mental model is **time blocks on a grid** — users view, create, and manage events across multiple calendars. The primary views are day, week, and month grids.

## Site Map

```
├── Calendar Views
│   ├── Day View (hourly grid)
│   ├── Week View (7-column grid)
│   ├── Month View (grid with dots/previews)
│   ├── Year View (12-month overview)
│   ├── Schedule / Agenda View (list)
│   └── Multi-day View (3-day, 4-day)
├── Event Detail
│   ├── Title
│   ├── Date & Time (start, end, all-day)
│   ├── Recurrence (repeat pattern)
│   ├── Location (physical / virtual link)
│   ├── Description / Notes
│   ├── Attendees (invite, RSVP status)
│   ├── Calendar (which calendar)
│   ├── Color / Category
│   ├── Reminders / Notifications
│   ├── Attachments
│   ├── Availability (busy / free / tentative)
│   └── Visibility (public / private)
├── Quick Create
│   ├── Click on time slot → inline form
│   └── [+ Event] button → full form
├── Sidebar
│   ├── Mini Calendar (month picker)
│   ├── My Calendars (toggle visibility)
│   ├── Other Calendars (subscribed, holidays)
│   ├── People's Calendars (colleagues)
│   └── Search
├── Scheduling
│   ├── Find a Time (free/busy overlay)
│   ├── Suggested Times
│   ├── Booking Pages (Calendly-style)
│   └── Room / Resource Finder
├── Tasks / Reminders (integrated)
│   ├── Task List
│   ├── Task on Calendar
│   └── Create Task
├── Search
│   └── Search Events (past & future)
├── Settings
│   ├── General (start of week, time zone, default view)
│   ├── Calendar Management (create, color, share)
│   ├── Notifications (default reminder time)
│   ├── Working Hours
│   ├── Event Templates
│   ├── Keyboard Shortcuts
│   └── Import / Export (ICS)
└── Invitations / Pending
    ├── Pending Invites
    └── Accept / Decline / Maybe
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed header | Today button, prev/next arrows, date range display, view switcher, search, settings |
| **Left Sidebar** | Collapsible | Mini calendar, calendar list (checkboxes), add calendar |
| **View Switcher** | Top-right buttons or dropdown | Day / Week / Month / Year / Agenda |
| **Event Popup** | Click event → popover | Quick view with edit/delete options |
| **Event Form** | Modal or side panel | Full event creation/editing |
| **Time Navigation** | Arrow keys or swipe | Move forward/back in time |

### Keyboard Shortcuts
```
D = Day view    W = Week view    M = Month view    A = Agenda
T = Go to today    C = Create event    / = Search
← → = Navigate weeks/days    Q = Quick add
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Event | title, start, end, all_day, location, description, recurrence_rule, color, status | belongs to Calendar, has Attendees, Reminders |
| Calendar | name, color, owner, visibility, default_reminders | has many Events |
| Attendee | email, name, rsvp_status (yes/no/maybe/pending), optional | belongs to Event |
| Recurrence | frequency (daily/weekly/monthly/yearly), interval, until, exceptions[] | belongs to Event |
| Reminder | method (notification/email), minutes_before | belongs to Event |
| BookingPage | slug, duration_options, availability_rules, buffer_time | belongs to User |
| Task | title, due_date, completed, list | displayed on Calendar |
| TimeZone | name, offset | associated with Event and User |

### Event Types
`single | recurring | all-day | multi-day | tentative | out-of-office | focus-time`

### RSVP Status
`pending → accepted / declined / tentative`

## User Flows

### Create Event (Quick)
```
Click empty time slot → Inline popup (title, time) → Save → Event appears on grid
```

### Create Event (Full)
```
[+ Event] → Full form → Title, time, location, attendees, recurrence → Save → Invitations sent
```

### Schedule Meeting
```
Create Event → Add Attendees → Find a Time (free/busy overlay) → Pick Slot → Send Invites
```

### Respond to Invite
```
Notification / Email → View Event Details → Accept / Decline / Maybe → Event added/removed from calendar
```

### Reschedule
```
Drag event to new time slot on grid → Confirm (if has attendees) → Update notifications sent
```

## URL / Route Structure

```
/                          → Default view (week)
/day/:date                 → Day view (e.g., /day/2024-03-15)
/week/:date                → Week view
/month/:date               → Month view
/year/:year                → Year view
/agenda                    → Agenda / schedule list
/event/:id                 → Event detail
/event/new                 → Create event
/event/new?date=:date&time=:time → Pre-filled create
/search?q=:query           → Search results
/booking/:slug             → Public booking page
/settings                  → Settings
/settings/calendars        → Calendar management
/tasks                     → Task list
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Events | Title, description, location, attendees | Calendar, Date Range, Creator | Date (upcoming first) |
| People (scheduling) | Name, email | Department, Available now | Name |
| Rooms | Room name, capacity, equipment | Location, Capacity, Availability | Name, Capacity |

## Responsive Behavior

| Breakpoint | Default View | Sidebar | Event Create |
|------------|-------------|---------|-------------|
| Desktop (≥1280px) | Week view (7-col grid) | Visible with mini calendar | Modal |
| Tablet (768–1279px) | 3-day view | Collapsed (hamburger) | Modal |
| Mobile (<768px) | Agenda / Day view | Hidden (drawer) | Full-screen form |

### Mobile Adaptations
- Agenda view as default (easier to read)
- Day view with vertical scroll (no side-by-side)
- Tap + hold on time to create event
- Swipe between days
- Bottom sheet for event quick view
- Widget: today's agenda on home screen

## Access Control

| Role | View Own | Create | View Others | Manage Shared | Admin |
|------|----------|--------|-------------|--------------|-------|
| User | ✅ | ✅ | If shared | Own calendars | — |
| Delegate | ✅ | On behalf | Delegated | — | — |
| Room Admin | ✅ | ✅ | ✅ | Room calendars | Rooms |
| Org Admin | ✅ | ✅ | All (audit) | All | ✅ |

### Calendar Sharing Levels
- See free/busy only
- See event details
- Make changes to events
- Full control (manage sharing + settings)
