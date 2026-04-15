---
brand: Notion Calendar
tagline: Your calendar, connected to your workspace
category: Productivity
website: https://calendar.notion.so
---

# Information Architecture — Notion Calendar

## Overview

Notion Calendar (formerly Cron) is a calendar application deeply integrated with Notion workspaces, combining time management with project and document context. The IA bridges two worlds — calendar events and Notion database items — allowing users to see their schedule alongside linked Notion pages, documents, and tasks. It features scheduling links, multi-calendar overlay, and keyboard-driven navigation for power users.

## Site Map

```
Notion Calendar
├── Calendar Views
│   ├── Day View
│   ├── Week View (default)
│   ├── Month View
│   ├── Multi-day Custom View
│   └── Agenda / List View
├── Event Detail
│   ├── Title
│   ├── Date / Time / Duration
│   ├── Location (physical or virtual link)
│   ├── Attendees (with availability)
│   ├── Video Conferencing (Zoom, Meet, Teams auto-link)
│   ├── Description / Notes
│   ├── Linked Notion Page
│   ├── Recurring Settings
│   ├── Reminders
│   └── Calendar (which calendar)
├── Notion Integration
│   ├── Linked Notion Databases
│   ├── Database Items as Calendar Events
│   ├── Notion Page Preview (inline)
│   └── Open in Notion
├── Scheduling Links
│   ├── My Scheduling Page
│   ├── Availability Slots
│   ├── Duration Options
│   ├── Buffer Time
│   ├── Meeting Location Default
│   └── Shared Link
├── Sidebar
│   ├── Mini Calendar (date picker)
│   ├── Calendar List (toggle visibility)
│   │   ├── Personal Calendars
│   │   ├── Work Calendars
│   │   ├── Shared Calendars
│   │   └── Notion Database Calendars
│   ├── Other People's Calendars (overlay)
│   └── Upcoming Events
├── Availability
│   ├── Check Availability (compare with attendees)
│   ├── Find a Time
│   └── Overlay teammates' calendars
├── Settings
│   ├── Account
│   ├── Connected Accounts (Google, Notion)
│   ├── Calendar Settings
│   ├── Working Hours
│   ├── Default Meeting Duration
│   ├── Default Video Conferencing
│   ├── Time Zone
│   ├── Keyboard Shortcuts
│   ├── Appearance (dark/light)
│   └── Notifications
└── Website
    ├── Product Overview
    ├── Download (macOS, Windows, iOS, Android)
    ├── Pricing (included with Notion)
    └── Help Center
```

## Navigation Model

- **Type**: Left sidebar + top toolbar
- **Left Sidebar**: Mini calendar, calendar list (toggle visibility), Notion databases, other people's calendars
- **Top Toolbar**: View switcher (Day/Week/Month), Today button, navigation arrows (prev/next), settings
- **Keyboard-Driven**: Heavy keyboard shortcut support (legacy from Cron); `c` to create, `t` for today, number keys for views
- **Event Creation**: Click/drag on calendar grid → Quick event form; or `c` shortcut
- **Notion Link**: Click linked Notion page in event → Opens Notion page in-app or in Notion
- **Multi-Calendar Overlay**: Toggle teammate calendars to see combined availability

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Event | title, start/end time, location, description, attendees, recurrence, reminders, conferencing link, status (busy/free), calendar | → Calendar, → Notion Page, → Attendees |
| Calendar | name, color, source (Google, Notion database), visibility toggle, owner | → Events |
| Notion Database (synced) | database name, date property mapping, Notion workspace | → Events (derived from database items) |
| Scheduling Link | URL, duration options, availability rules, buffer time, location default, booking confirmations | → Calendar, → User |
| Attendee | name, email, RSVP status (accepted/declined/tentative), calendar overlay | → Event |
| Notion Page (linked) | title, page preview, workspace | → Event |
| Working Hours | day-of-week, start/end time, time zone | → Availability |
| Time Zone | primary, secondary (display), travel detection | → Events, → Views |

## User Flows

### Scheduling a Meeting
```
See open time slot on calendar → Click and drag to set duration → Event form opens: add title, attendees, location → Toggle attendees' calendar overlay → Find mutual free time → Add video conferencing (auto-generates Zoom/Meet link) → Link a Notion page for meeting notes → Save → Invites sent
```

### Using Scheduling Links
```
Settings → Scheduling → Create scheduling link → Set availability: which days, which hours, which calendar to check → Set options: 15/30/60 min durations, buffer between meetings → Share link with external person → They see available slots → They book → Event auto-created on both calendars
```

### Viewing Notion Database as Calendar
```
Settings → Connect Notion Workspace → Authorize → Select Notion database with a date property → Database items appear as events on the calendar (color-coded) → Click database event → See Notion page preview → Open full page in Notion → Changes sync bidirectionally
```

## URL / Route Structure

```
calendar.notion.so/                         # Web app / landing
calendar.notion.so/app                      # Calendar web app
calendar.notion.so/scheduling/{username}    # Public scheduling page
calendar.notion.so/scheduling/{username}/{linkSlug}  # Specific scheduling link
calendar.notion.so/download                 # Desktop/mobile app downloads
notion.so/product/calendar                  # Product page on Notion site
calendar.notion.so/settings                                     # Settings
calendar.notion.so/settings/accounts                             # Connected accounts
calendar.notion.so/settings/calendars                            # Calendar settings
calendar.notion.so/settings/general                              # General settings
calendar.notion.so/settings/availability                         # Working hours
calendar.notion.so/settings/appearance                           # Theme settings
calendar.notion.so/settings/shortcuts                            # Keyboard shortcuts
calendar.notion.so/scheduling                                    # My scheduling pages
calendar.notion.so/help                                          # Help center
notion.so/product/calendar                                       # Product page
notion.so/help/category/calendar                                 # Calendar help docs
```

## Search & Filter

- **Event Search**: Search events by title, attendee, or description across all calendars
- **Calendar Filtering**: Toggle calendars on/off to filter visible events
- **Date Navigation**: Jump to specific date via mini calendar or keyboard shortcut
- **Availability Check**: Visual overlay of multiple people's calendars to find free slots
- **Notion Database Filter**: Inherits Notion database filters (status, assignee, date range)
- **No Content Search**: Calendar app; search is limited to events, not documents (documents live in Notion)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop App (macOS/Windows) | Full sidebar + week view; keyboard shortcuts; multi-monitor support; menu bar quick-view |
| Web App | Same as desktop; responsive but optimized for wide screens |
| Mobile App (iOS/Android) | Day/3-day/week/month views; swipe navigation; simplified event creation; push notifications for reminders |
| Tablet | Week view with larger touch targets; sidebar toggleable |
| Menu Bar (macOS) | Floating mini calendar + upcoming events; quick event creation without opening full app |

## Access Control

| Role | Capabilities |
|---|---|
| Calendar Owner | Full CRUD on own events; manage calendars; create scheduling links; set working hours |
| Calendar Viewer (shared) | View events on shared calendar; no edit access |
| Calendar Editor (shared) | View and modify events on shared calendar |
| Event Attendee | View event details, RSVP, add to own calendar |
| Scheduling Link Visitor | View available time slots; book a meeting (no account required) |
| Notion Workspace Member | View Notion-linked database events on calendar; open Notion pages |
| Notion Workspace Admin | Manage Notion ↔ Calendar integration settings for workspace |
| Free Notion User | Basic calendar features included |
| Paid Notion User | Full calendar features including Notion database sync, scheduling links |

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Create event | C |
| Go to today | T |
| Day view | 1 |
| Week view | 2 |
| Month view | 3 |
| Next period | J or → |
| Previous period | K or ← |
| Delete event | Backspace |
| Quick search | / |
| Settings | , (comma) |

## Calendar Sources

| Source | Sync Type | Features |
|-------|-----------|----------|
| Google Calendar | Bidirectional | Full CRUD, color sync, attendee management |
| Notion Database | Bidirectional | Date property → calendar event; page preview |
| iCloud (via Google) | Read-only | Import Apple calendar events |
| Exchange/Outlook | Read-only | View corporate calendar events |

## Unique Differentiators

- **Notion page linking:** Attach Notion pages to events for meeting agendas and notes
- **Multi-timezone:** Display secondary timezone; auto-detect travel timezone
- **Menu bar widget (macOS):** Quick glance at upcoming events without opening app
- **Overlay calendars:** See teammates' availability overlaid on your calendar
- **Scheduling links:** Built-in Calendly-like booking pages with availability rules
- **Keyboard-first:** Every action accessible via keyboard shortcuts (Cron heritage)
- **Zero-config video:** Auto-detects and generates Zoom/Meet/Teams links

## Working Hours & Availability

- **Per-day configuration:** Set different hours for each day of the week
- **Buffer time:** Automatic gaps between back-to-back meetings (5/10/15/30 min)
- **Minimum notice:** Prevent same-day bookings (e.g., require 4-hour lead time)
- **Date exceptions:** Block specific dates from scheduling (vacations, holidays)
- **Multi-calendar check:** Check multiple calendars for conflicts before showing availability

## Event Quick Actions

- **Drag to reschedule:** Drag event to new time slot
- **Drag to extend:** Drag bottom edge to change duration
- **Duplicate:** Option-drag to create a copy
- **Color coding:** Events inherit calendar color; manual override available
- **Join meeting:** One-click join button for Zoom/Meet/Teams links detected in event
