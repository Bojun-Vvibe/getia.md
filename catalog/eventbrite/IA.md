---
brand: Eventbrite
tagline: "Discover events you'll love. Create, promote, and sell tickets to any event."
category: Events
website: https://eventbrite.com
---

# Eventbrite — Information Architecture

## Overview

Eventbrite is the leading self-service ticketing and event management platform, powering millions of events from small meetups to large conferences. The mental model has two sides: **for attendees**, it's a local event discovery engine ("what's happening this weekend?"); **for organizers**, it's an end-to-end event creation and ticketing platform. Key differentiator vs Meetup: Eventbrite handles paid ticketing (payments, fees, refunds) and scales from free community events to large paid conferences with multiple ticket tiers.

## Site Map

### Attendee-Facing

```
├── Home
│   ├── Search Bar (keyword, location)
│   ├── Events For You (personalized recommendations)
│   ├── Popular Events Near You
│   ├── This Weekend
│   ├── Online Events
│   ├── Category Chips (Music, Food & Drink, Business, Arts, Sports, Wellness, Tech)
│   ├── Trending in [City]
│   ├── Collections ("Free Events", "Family", "Festivals")
│   └── Followed Organizers' Events
├── Browse / Search
│   ├── Event Cards (image, title, date, location, price, organizer)
│   ├── Map View (toggle)
│   ├── Filters
│   │   ├── Date (today, tomorrow, this week, this weekend, custom)
│   │   ├── Category
│   │   ├── Price (free, paid)
│   │   ├── Format (in-person, online, hybrid)
│   │   ├── Language
│   │   └── Currency
│   ├── Calendar View
│   └── Sort (Date, Relevance, Distance)
├── Event Page
│   ├── Cover Image / Video
│   ├── Title
│   ├── Date & Time (with timezone, "Add to Calendar")
│   ├── Location (map + address) or "Online Event" (platform link)
│   ├── Description (rich text, markdown)
│   ├── Schedule / Agenda (multi-session)
│   ├── Speakers / Performers
│   ├── Ticket Types & Pricing
│   │   ├── Free / General Admission
│   │   ├── Early Bird
│   │   ├── VIP
│   │   ├── Group Packages
│   │   └── Sold Out Indicator
│   ├── Organizer Info (name, logo, description, follow)
│   ├── Attendee Count ("500 going")
│   ├── Tags
│   ├── Related Events
│   ├── Share / Save
│   └── [Get Tickets] CTA (sticky)
├── Checkout
│   ├── Ticket Selection (type, quantity)
│   ├── Attendee Info (per ticket if required)
│   ├── Custom Questions (organizer-defined)
│   ├── Promo Code
│   ├── Order Summary (subtotal + fees + tax)
│   ├── Payment (card, PayPal)
│   └── [Place Order]
├── Order Confirmation
│   ├── E-Ticket (QR code)
│   ├── Add to Calendar (Google, Apple, Outlook)
│   ├── Venue Directions
│   ├── Share with Friends
│   ├── Download Ticket / Apple Wallet
│   └── Order Details (receipt)
├── My Events
│   ├── Upcoming (registered events)
│   ├── Past
│   ├── Saved / Interested
│   └── Event Detail
│       ├── Ticket (QR code)
│       ├── Event Updates
│       ├── Transfer Ticket
│       ├── Request Refund
│       └── Contact Organizer
├── Account
│   ├── Profile (name, location, interests)
│   ├── Following (organizers)
│   ├── Payment Methods
│   ├── Interests / Preferences (categories, location)
│   ├── Notifications
│   └── Settings
└── Help
    ├── FAQ
    ├── Contact
    └── Refund Policy
```

### Organizer Portal

```
├── Dashboard
│   ├── Upcoming Events
│   ├── Total Sales / Revenue
│   ├── Registrations (recent)
│   ├── Quick Actions (Create Event, View Sales)
│   └── Payout Status
├── Events
│   ├── Live / Active
│   ├── Draft
│   ├── Past
│   └── Create Event
│       ├── Basic Info (title, type, category, tags)
│       ├── Date & Time (one-time, multi-day, recurring, series)
│       ├── Location (venue search / online event link)
│       ├── Description & Media (cover image, video)
│       ├── Agenda / Schedule
│       ├── Tickets
│       │   ├── Free / Paid / Donation
│       │   ├── Ticket Types (name, price, quantity, sales window)
│       │   ├── Promo Codes
│       │   ├── Group Discounts
│       │   └── Waitlist
│       ├── Registration Settings
│       │   ├── Custom Questions
│       │   ├── Confirmation Email (editable)
│       │   ├── Capacity
│       │   └── Refund Policy
│       ├── Preview → Publish
│       └── Share Tools
├── Attendees
│   ├── Attendee List (searchable, filterable)
│   ├── Check-In (QR scanner or manual)
│   ├── Waitlist
│   ├── Refunds
│   └── Export (CSV)
├── Orders
│   ├── All Orders
│   ├── Order Detail (ticket, attendee, payment)
│   └── Refund / Cancel
├── Promotion
│   ├── Promo Codes
│   ├── Social Sharing Tools
│   ├── Embed Widget (for websites)
│   ├── Email Invitations
│   └── Facebook Event Sync
├── Analytics
│   ├── Sales & Revenue
│   ├── Page Views
│   ├── Traffic Sources
│   ├── Attendee Demographics
│   └── Check-In Stats
├── Organizer Profile
│   ├── Public Page (logo, bio, upcoming events)
│   ├── Followers
│   └── Past Events
└── Settings
    ├── Payout (bank account, tax info)
    ├── Team Members & Roles
    ├── Integrations (Mailchimp, Salesforce, Zoom)
    ├── Webhooks / API
    └── Notifications
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Fixed top bar | Logo, Search, Create Event, My Tickets, Sign In |
| **Category Chips** | Horizontal scroll | Music, Food & Drink, Business, Tech, Arts, etc. |
| **Event Page CTA** | Sticky "Get Tickets" button | Always visible during scroll |
| **Organizer Sidebar** | Fixed left nav | Dashboard, Events, Attendees, Orders, Promotion, Analytics |
| **Check-In Mode** | Full-screen (mobile) | QR scanner → confirm → next |
| **Bottom Tabs (mobile attendee)** | Tab bar | Home, Search, Tickets, Profile |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Event | title, category, tags[], start, end, timezone, location/online_url, cover_image, description, status (draft/live/ended/cancelled), capacity, visibility (public/private) | has TicketTypes, Agenda, Organizer |
| TicketType | name, price, quantity, sales_start, sales_end, description, max_per_order | belongs to Event |
| Order | tickets[], total, fees, status, payment, promo_code, created_at | belongs to Event and User |
| Ticket | ticket_type, attendee_name, attendee_email, qr_code, checked_in | belongs to Order |
| Organizer | name, logo, description, followers_count, events_count | has Events |
| PromoCode | code, type (percentage/fixed), value, max_uses, valid_dates | belongs to Event |

### Event Status
```
draft → live → ended
         ↘ cancelled / postponed → rescheduled → live
```

## User Flows

### Find and Attend
```
Home → Browse (this weekend, Food & Drink) → Event Page → Select 2 GA Tickets → Enter Info → Pay $50 → E-Ticket (QR) → Add to Calendar → Day-of: Show QR at Door → Checked In
```

### Organizer: Create and Sell
```
Dashboard → [Create Event] → Title + Date + Location → Description → Create Ticket Tiers (Early Bird $25, GA $40, VIP $75) → Set Capacity → Preview → Publish → Share Link → Track Sales → Day-of: Check In Attendees
```

## URL / Route Structure

```
/                              → Home
/d/:location/events            → Browse by Location
/d/:location/:category         → Category + Location
/e/:slug                       → Event Page
/e/:slug/register              → Checkout
/e/:slug/confirmation/:id      → Order Confirmation
/mytickets                     → My Tickets
/mytickets/:orderId            → Ticket Detail
/o/:slug                       → Organizer Page
/manage                        → Organizer Dashboard
/manage/events                 → My Events
/manage/events/create          → Create Event
/manage/events/:id             → Event Management
/manage/events/:id/attendees   → Attendee List
/manage/events/:id/check-in    → Check-In
/manage/events/:id/analytics   → Analytics
/manage/profile                → Organizer Profile
/manage/payouts                → Payout Settings
/account                       → Account
/help                          → Help
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Events | Title, keyword, organizer, venue | Category, Date, Location, Price (free/paid), Format (in-person/online), Language | Date, Relevance, Distance, Price |
| Attendees (organizer) | Name, email, order # | Ticket Type, Check-In Status | Name, Date, Ticket |

## Responsive Behavior

| Breakpoint | Browse | Event Page | Check-In |
|------------|--------|-----------|----------|
| Desktop | Grid 3-4 cols, map toggle | Hero image + two-column (info + ticket sidebar) | Table |
| Tablet | Grid 2 cols | Single column, sticky ticket bar | Simplified |
| Mobile | Vertical cards | Scrollable, sticky "Get Tickets" | Full-screen QR scanner |

### Eventbrite-Specific UX
- QR code tickets accessible from lock screen / Apple Wallet
- Camera-based QR scanning for organizer check-in
- Calendar integration (auto-add on registration)
- "Followed organizer" notifications for new events
- Embeddable ticket widget for external websites
- Multi-day and recurring event support
- Waitlist management when sold out
- Refund automation based on policy

## Access Control

### Attendee
| Role | Browse | Register | Manage | Review |
|------|--------|----------|--------|--------|
| Guest | ✅ | ✅ (enter info) | — | — |
| Registered | ✅ | ✅ (saved info) | ✅ | ✅ |

### Organizer
| Role | Dashboard | Create/Edit | Attendees | Orders | Analytics | Payouts |
|------|-----------|------------|-----------|--------|-----------|---------|
| Owner | ✅ | ✅ | Full | Full | Full | ✅ |
| Admin | ✅ | ✅ | Full | Full | Full | View |
| Door Staff | — | — | Check-in only | — | — | — |
