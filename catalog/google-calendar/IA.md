---
brand: Google Calendar
tagline: "Smart scheduling. Day/week/month grids, Google Meet integration, suggested times."
category: Productivity
website: https://calendar.google.com
---

# Google Calendar — Information Architecture

## Overview

Google Calendar is the dominant web calendar, deeply integrated with Google Workspace. The mental model is **time as a visual grid** — events are colored blocks on a day/week/month matrix. Key differentiators: Google Meet auto-generation, smart event suggestions (AI), Find a Time (multi-person free/busy overlay), Appointment Schedules (Calendly-like built-in), Tasks integration, and seamless Gmail event detection.

## Site Map

```
├── Calendar Views
│   ├── Day View (24h vertical timeline)
│   ├── Week View (7-column grid, default)
│   ├── Month View (5-6 row grid, event dots/titles)
│   ├── Year View (12 mini months)
│   ├── Schedule View (agenda list)
│   ├── 4-Day View (customizable)
│   └── Multi-person View (side-by-side)
├── Event Detail
│   ├── Title
│   ├── Date & Time (start/end, all-day toggle)
│   ├── Recurrence (custom rules)
│   ├── Google Meet Link (auto-generated)
│   ├── Location (Google Maps integration)
│   ├── Description / Notes
│   ├── Guests (invite, RSVP status)
│   ├── Rooms & Resources
│   ├── Attachments (Google Drive)
│   ├── Calendar (which calendar)
│   ├── Color / Label
│   ├── Notification (popup, email, minutes before)
│   ├── Visibility (default, public, private)
│   ├── Status (busy, free, tentative, out of office)
│   └── Conferencing (Meet, Zoom, Teams)
├── Left Sidebar
│   ├── Create Button (+)
│   ├── Mini Calendar (date picker)
│   ├── Search for People (see their calendar)
│   ├── My Calendars (checkboxes, color-coded)
│   ├── Other Calendars (subscribed, holidays, birthdays)
│   └── Manage Calendars
├── Event Creation
│   ├── Quick Create (click timeslot → popup)
│   ├── Full Create (More Options → full form)
│   ├── Event Types: Event, Out of Office, Working Location, Focus Time, Task
│   └── Appointment Schedule (booking page)
├── Tasks (integrated panel)
│   ├── Task Lists
│   ├── Tasks on Calendar (date-linked)
│   └── Create / Edit Task
├── Appointment Schedules
│   ├── Create Schedule (availability rules)
│   ├── Booking Page (public link)
│   └── Manage Bookings
├── Settings
│   ├── General (start of week, country, time zone, working hours)
│   ├── Event Settings (default duration, notification, guest permissions)
│   ├── View Options (show weekends, declined events, week numbers)
│   ├── Calendar Settings (per-calendar: name, color, sharing, notifications)
│   ├── Add Calendar (URL, from directory, holidays)
│   ├── Import & Export (ICS)
│   └── Keyboard Shortcuts
└── Gmail Integration
    ├── Auto-detect events from emails
    ├── RSVP from Gmail
    └── Flight/hotel reservations auto-added
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed header | Hamburger (sidebar toggle), "Google Calendar" logo, today button, prev/next arrows, date range label, view switcher dropdown, search, settings gear, ? help, Google apps grid, avatar |
| **Left Sidebar** | Collapsible | Create (+) button, mini month calendar, people search, calendar checkboxes (My Calendars + Other Calendars) |
| **View Switcher** | Top-right dropdown | Day, Week, Month, Year, Schedule, 4 days, Custom range |
| **Event Popup** | Click event → card popup | Title, time, Meet link, guests, edit/delete buttons |
| **Full Editor** | Separate page or modal | Complete event form with all fields |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Event | title, start, end, all_day, recurrence, location, description, color, calendar_id, meet_link, status, visibility, attachments[], created_by | has Guests, Notifications |
| Calendar | name, color, time_zone, owner, shared_with[], description | has many Events |
| Guest | email, display_name, rsvp (accepted/declined/tentative/needsAction), optional, comment | belongs to Event |
| Notification | method (popup/email), minutes_before | belongs to Event |
| Task | title, due_date, notes, completed, list_id | displayed on Calendar |
| AppointmentSchedule | title, duration, availability_rules[], booking_page_url, buffer_time | belongs to User |
| Room | name, capacity, building, floor, equipment[] | bookable via Event |
| WorkingLocation | type (office/home/other), building, date_range | belongs to User |

### Event Types
`event | out_of_office | working_location | focus_time | task | appointment_slot`

## User Flows

### Quick Create
```
Click empty timeslot → Popup (title + time) → Add Meet → Save → Event on grid
```

### Schedule Meeting
```
Create Event → Add Guests → "Suggested Times" or "Find a Time" (free/busy overlay) → Pick slot → Add Meet → Save → Invites sent
```

### Appointment Schedule
```
Create Appointment Schedule → Set availability → Generate booking page URL → Share link → External person books → Appears on calendar
```

### RSVP from Email
```
Receive invite in Gmail → "Yes / Maybe / No" buttons → Calendar updated → Response sent
```

## URL / Route Structure

```
/                           → Week view (default)
/r/day/:date                → Day view
/r/week/:date               → Week view
/r/month/:date              → Month view
/r/year/:year               → Year view
/r/agenda                   → Schedule / agenda
/r/customday/:date          → Custom range (4 days)
/eventedit                  → Create event
/event/:eventId             → Event detail
/r/search?q=:query          → Search results
/r/settings                 → Settings
/appointment/:slug          → Public booking page
```

## Search & Filter

| Context | Scope | Filters | Sort |
|---------|-------|---------|------|
| Global | Event titles, descriptions, guests, locations | Calendar, Date Range | Date |
| People | Contacts directory | Department | Name |
| Rooms | Room name, equipment | Capacity, Building, Floor, Availability | Name, Capacity |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥1024px) | Sidebar + full grid view |
| Tablet (768–1023px) | Sidebar collapsed, 3-day view default |
| Mobile (<768px) | Schedule/agenda view, FAB for create, swipe between days |

## Access Control

| Role | View Own | Create | View Others | Share Calendar | Admin |
|------|----------|--------|-------------|----------------|-------|
| User | ✅ | ✅ | If shared | Own calendars | — |
| Workspace Admin | ✅ | ✅ | Directory | All | ✅ |

### Calendar Sharing Levels
- See free/busy only
- See all event details
- Make changes to events
- Make changes and manage sharing
