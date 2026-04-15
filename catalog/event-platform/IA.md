# Event Platform — Information Architecture

## Overview

An event discovery, ticketing, and management platform (Eventbrite, Meetup, Luma style). The mental model is **discover → attend → connect** for attendees and **create → promote → manage** for organizers. The platform bridges event creators with audiences, handling everything from discovery and registration to ticketing and check-in.

## Site Map

### Attendee-Facing

```
├── Home
│   ├── Search Bar (keyword, location, date)
│   ├── Events Near You
│   ├── Trending Events
│   ├── Categories (Music, Tech, Food, Sports, Arts, Business, Wellness)
│   ├── This Weekend
│   ├── Online Events
│   ├── Collections (e.g., "Free Events", "Family-Friendly")
│   └── Personalized Recommendations
├── Browse / Explore
│   ├── Event Cards (image, title, date, location, price, organizer)
│   ├── Map View
│   ├── Calendar View
│   ├── Filters & Sort
│   └── Category Pages
├── Event Detail
│   ├── Cover Image / Video
│   ├── Title, Date, Time (with timezone)
│   ├── Location (venue + map) or "Online Event"
│   ├── Description (rich text)
│   ├── Schedule / Agenda (multi-session events)
│   ├── Speakers / Performers
│   ├── Ticket Types & Pricing
│   ├── Organizer Info
│   ├── Attendee Count / Social Proof
│   ├── Related Events
│   ├── Share / Save
│   └── Register / Get Tickets CTA
├── Registration / Checkout
│   ├── Ticket Selection (type, quantity)
│   ├── Attendee Info (per ticket)
│   ├── Custom Questions (from organizer)
│   ├── Promo Code
│   ├── Order Summary
│   ├── Payment (if paid event)
│   └── Confirm
├── Ticket / Confirmation
│   ├── Order Confirmation
│   ├── E-Ticket (with QR code)
│   ├── Add to Calendar
│   ├── Directions
│   ├── Share with Friends
│   └── Download / Apple Wallet
├── My Events
│   ├── Upcoming (registered)
│   ├── Past
│   ├── Saved / Interested
│   └── Event Detail
│       ├── Ticket / QR Code
│       ├── Event Updates
│       ├── Venue Info
│       ├── Transfer / Cancel
│       └── Leave Review (post-event)
├── Account
│   ├── Profile
│   ├── Interests / Preferences
│   ├── Payment Methods
│   ├── Following (organizers)
│   ├── Notifications
│   └── Settings
├── Messages / Updates
│   ├── Event Updates (from organizers)
│   └── Notifications
└── Help
    ├── FAQ
    ├── Contact Support
    ├── Refund Policy
    └── Safety Guidelines
```

### Organizer Portal

```
├── Dashboard
│   ├── Upcoming Events Summary
│   ├── Total Sales / Revenue
│   ├── Registrations Today
│   ├── Quick Actions (Create Event, View Sales)
│   └── Recent Activity
├── Events
│   ├── Live Events
│   ├── Draft Events
│   ├── Past Events
│   └── Create Event
│       ├── Basic Info (title, category, tags)
│       ├── Date & Time (single, multi-day, recurring)
│       ├── Location (venue search or online link)
│       ├── Description & Media
│       ├── Agenda / Schedule (sessions, speakers)
│       ├── Tickets
│       │   ├── Free / Paid / Donation
│       │   ├── Ticket Types (GA, VIP, Early Bird)
│       │   ├── Pricing & Quantity
│       │   ├── Sales Start / End
│       │   └── Promo Codes
│       ├── Registration Settings
│       │   ├── Custom Questions
│       │   ├── Confirmation Email
│       │   ├── Waitlist
│       │   └── Capacity
│       ├── Preview
│       └── Publish
├── Attendees
│   ├── Attendee List (by event)
│   ├── Attendee Detail (info, ticket, check-in status)
│   ├── Check-In (scan QR or manual)
│   ├── Export (CSV)
│   ├── Waitlist
│   └── Refunds
├── Orders
│   ├── All Orders
│   ├── Order Detail
│   ├── Refund / Cancel
│   └── Invoice
├── Promotion
│   ├── Promo Codes
│   ├── Social Sharing Tools
│   ├── Affiliate Links
│   ├── Email Invitations
│   └── Embed Widget
├── Analytics
│   ├── Sales & Revenue
│   ├── Registration Timeline
│   ├── Traffic Sources
│   ├── Attendee Demographics
│   ├── Check-In Stats
│   └── Post-Event Survey Results
├── Communication
│   ├── Email Attendees
│   ├── Event Updates
│   ├── Reminders
│   └── Post-Event Follow-Up
├── Organizer Profile
│   ├── Public Page
│   ├── Branding (logo, colors)
│   ├── Followers
│   └── Past Events Showcase
└── Settings
    ├── Payment / Payout (bank account, tax info)
    ├── Team Members & Roles
    ├── Integrations (Zoom, Mailchimp, CRM)
    ├── Webhook / API
    └── Notifications
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, Search, Browse, Create Event, My Tickets, Sign In |
| **Category Bar** | Horizontal scroll chips | Music, Tech, Food, Sports, Arts, Business, Wellness, Online |
| **Event Detail** | Scrollable sections with sticky CTA | Description, Schedule, Tickets — "Get Tickets" button always visible |
| **Organizer Sidebar** | Fixed left nav | Dashboard, Events, Attendees, Orders, Promotion, Analytics, Settings |
| **Check-In Mode** | Full-screen mobile view | Scan QR → Confirm → Next |
| **Bottom Nav (mobile attendee)** | Tab bar | Home, Browse, My Events, Profile |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Event | title, description, category, tags[], start_datetime, end_datetime, timezone, location (venue or online_url), cover_image, status (draft/live/ended/cancelled), capacity, visibility (public/private) | belongs to Organizer, has many TicketTypes, Sessions, Attendees |
| TicketType | name (GA, VIP, Early Bird), price, quantity, sales_start, sales_end, description, max_per_order | belongs to Event |
| Order | attendee, tickets[], total, status, payment_method, promo_code, ordered_at | belongs to Event and User |
| Ticket | order, ticket_type, attendee_name, attendee_email, qr_code, checked_in, checked_in_at | belongs to Order |
| Session | title, description, start_time, end_time, speaker, track, room | belongs to Event |
| Speaker | name, bio, photo, title, company, social_links | belongs to Session(s) |
| Organizer | name, logo, description, followers_count, events[] | has many Events |
| PromoCode | code, type (percentage/fixed), value, max_uses, valid_from, valid_to | belongs to Event |
| Review | rating, text, event, created_at | belongs to Event and User |
| Waitlist | event, user, position, notified | belongs to Event |

### Event Status Flow
```
draft → live → ended
         ↘ cancelled
         ↘ postponed → rescheduled → live
```

### Order Status Flow
```
pending → completed → refunded (partial or full)
           ↘ cancelled
```

## User Flows

### Discover & Register
```
Home → Browse (or Search) → Filter → Event Detail → Select Tickets → Attendee Info → Payment → Confirmation + E-Ticket
```

### Free Event RSVP
```
Event Detail → [Register] → Enter Info → Confirm → E-Ticket
```

### Attend Event (Day-of)
```
My Events → Upcoming → View Ticket (QR Code) → Present at Venue → Checked In
```

### Organizer: Create Event
```
Dashboard → [+ Create Event] → Basic Info → Date/Location → Description → Create Tickets → Custom Questions → Preview → Publish → Share
```

### Organizer: Day-of Check-In
```
Events → Select Event → Attendees → [Check-In Mode] → Scan QR → Confirm Identity → Mark Checked In
```

## URL / Route Structure

### Attendee
```
/                              → Home
/events                        → Browse / Explore
/events?q=:query&loc=:location → Search Results
/events/category/:category     → Category Page
/events/online                 → Online Events
/event/:slug                   → Event Detail
/event/:slug/register          → Registration / Checkout
/event/:slug/confirmation/:id  → Order Confirmation
/tickets                       → My Tickets / Events
/tickets/:orderId              → Ticket Detail (QR code)
/organizer/:slug               → Organizer Page
/account                       → Account
/account/following             → Following
/messages                      → Notifications / Updates
/help                          → Help
```

### Organizer
```
/manage                        → Dashboard
/manage/events                 → My Events
/manage/events/create          → Create Event
/manage/events/:id             → Event Overview
/manage/events/:id/edit        → Edit Event
/manage/events/:id/tickets     → Ticket Configuration
/manage/events/:id/attendees   → Attendee List
/manage/events/:id/check-in    → Check-In Mode
/manage/events/:id/orders      → Orders
/manage/events/:id/promo       → Promo Codes
/manage/events/:id/analytics   → Event Analytics
/manage/events/:id/emails      → Email Attendees
/manage/profile                → Organizer Profile
/manage/analytics              → Overall Analytics
/manage/payouts                → Payout Settings
/manage/team                   → Team
/manage/settings               → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Events (attendee) | Title, keyword, organizer, venue | Category, Date (today, this week, this month, custom), Location / Distance, Price (free/paid), Format (in-person/online), Language | Date, Relevance, Price, Popularity |
| Attendees (organizer) | Name, email, order # | Ticket Type, Check-In Status, Order Date | Name, Order Date, Ticket Type |
| Orders (organizer) | Order #, name, email | Status, Ticket Type, Date Range, Amount | Date, Amount |

## Responsive Behavior

| Breakpoint | Browse | Event Detail | Check-In | Dashboard |
|------------|--------|-------------|----------|-----------|
| Desktop (≥1024px) | Grid 3–4 cols, map toggle | Full-width hero, 2-column (info + ticket sidebar) | Table with search | Charts + tables |
| Tablet (768–1023px) | Grid 2 cols | Single column, sticky ticket bar | Simplified table | Stacked charts |
| Mobile (<768px) | Vertical cards | Scrollable sections, sticky "Get Tickets" | Full-screen scanner | Card-based metrics |

### Mobile Adaptations
- QR code ticket accessible from lock screen / wallet
- Camera-based QR scanning for check-in
- Swipeable event cards
- Share event via native share sheet
- Push notifications for event reminders, updates
- Location-based event suggestions
- Calendar integration (auto-add on registration)

## Access Control

### Attendee
| Role | Browse | Register | Manage Tickets | Review | Follow |
|------|--------|----------|---------------|--------|--------|
| Guest | ✅ | ✅ (enter info) | — | — | — |
| Registered | ✅ | ✅ (saved info) | ✅ | ✅ | ✅ |

### Organizer
| Role | Dashboard | Create/Edit | Attendees | Orders | Analytics | Payouts |
|------|-----------|------------|-----------|--------|-----------|---------|
| Owner | ✅ | ✅ | Full | Full | Full | ✅ |
| Admin | ✅ | ✅ | Full | Full | Full | View |
| Moderator | ✅ | Edit only | View + check-in | View | Limited | — |
| Check-In Staff | — | — | Check-in only | — | — | — |
