# Restaurant / Reservation — Information Architecture

## Overview

A restaurant discovery and table reservation platform (OpenTable, Resy, TheFork style). The mental model is **discover → decide → reserve → dine** — users search for restaurants by cuisine, location, and availability, browse menus and reviews, book a table, and manage their reservations. Speed of booking and social proof (ratings, photos) drive the experience.

## Site Map

### Diner-Facing

```
├── Home
│   ├── Search Bar (location, date, time, party size)
│   ├── Nearby Restaurants
│   ├── Popular Right Now
│   ├── New & Notable
│   ├── Collections (e.g., "Best Brunch", "Date Night", "Outdoor Dining")
│   ├── Cuisine Quick Filters
│   └── Recently Viewed
├── Search Results
│   ├── Restaurant Cards (photo, cuisine, rating, price, availability)
│   ├── Map View
│   ├── Filters & Sort
│   └── Available Time Slots (inline)
├── Restaurant Page
│   ├── Photo Gallery
│   ├── Overview (cuisine, price range, hours, address)
│   ├── Available Time Slots (prominent)
│   ├── Menu
│   │   ├── Categories (Appetizers, Mains, Desserts, Drinks)
│   │   └── Items (name, description, price, dietary tags)
│   ├── Reviews & Ratings
│   │   ├── Overall Score
│   │   ├── Category Scores (food, service, ambiance, value)
│   │   └── Individual Reviews
│   ├── Photos (user + official)
│   ├── Map & Directions
│   ├── Details (parking, dress code, noise level, special features)
│   └── Similar Restaurants
├── Reservation Flow
│   ├── Select Date / Time / Party Size
│   ├── Select Available Slot
│   ├── Special Requests (allergies, occasion, seating preference)
│   ├── Contact Info
│   └── Confirm Reservation
├── Reservation Confirmation
│   ├── Details (restaurant, date, time, party size)
│   ├── Confirmation Number
│   ├── Add to Calendar
│   ├── Directions
│   └── Modify / Cancel
├── My Reservations
│   ├── Upcoming
│   ├── Past
│   ├── Canceled
│   └── Reservation Detail
│       ├── Modify (date, time, party size)
│       ├── Cancel
│       ├── Pre-order (if available)
│       └── Rate & Review (after dining)
├── Account
│   ├── Profile
│   ├── Dining Preferences (cuisine, dietary, seating)
│   ├── Saved Restaurants
│   ├── Payment Methods
│   ├── Loyalty / Points
│   ├── Reviews Written
│   ├── Notifications
│   └── Settings
├── Gift Cards
│   ├── Purchase
│   ├── Redeem
│   └── Balance
├── Help
│   ├── FAQ
│   ├── Contact Support
│   └── Cancellation Policy
└── Footer
    ├── About
    ├── For Restaurants
    ├── Terms & Privacy
    └── App Download
```

### Restaurant Dashboard (Restaurant-Facing)

```
├── Dashboard
│   ├── Today's Reservations
│   ├── Upcoming (week view)
│   ├── Floor Plan / Table Status
│   └── Alerts (no-shows, modifications)
├── Reservations
│   ├── Calendar View
│   ├── List View
│   ├── Reservation Detail (guest info, notes, history)
│   ├── Waitlist
│   └── Walk-ins
├── Floor Plan
│   ├── Table Layout Editor
│   ├── Table Assignments
│   ├── Turn Times
│   └── Section Management
├── Guest Book
│   ├── Guest Profiles (visit history, preferences, spend)
│   ├── VIP Tags
│   └── Notes
├── Menu Management
│   ├── Menus (lunch, dinner, brunch, special)
│   ├── Items (add/edit/remove)
│   └── Dietary Tags
├── Reviews
│   ├── All Reviews
│   ├── Respond to Reviews
│   └── Rating Trends
├── Analytics
│   ├── Covers & Revenue
│   ├── Peak Hours
│   ├── No-Show Rate
│   ├── Average Party Size
│   └── Review Sentiment
├── Settings
│   ├── Restaurant Info (hours, photos, description)
│   ├── Booking Rules (party size limits, advance booking, cancellation policy)
│   ├── Availability & Blackout Dates
│   ├── Notifications
│   └── Staff / Users
└── Marketing
    ├── Special Offers
    ├── Events
    └── Email Campaigns
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, search (location + date/time/party), My Reservations, account |
| **Search Bar** | Prominent on home, compact in header on scroll | Location, Date, Time, Party Size — all inline |
| **Cuisine Chips** | Horizontal scroll below search | Italian, Japanese, Mexican, Seafood, Steakhouse... |
| **Results Map** | Split view or toggle | Map with pins + list side by side |
| **Time Slots** | Inline buttons on cards and detail page | Available times shown directly (e.g., 6:00, 6:30, 7:00) |
| **Restaurant Tabs** | Horizontal tabs on detail page | Overview, Menu, Reviews, Photos |

### Restaurant Dashboard Nav
| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Sidebar** | Fixed left nav | Dashboard, Reservations, Floor Plan, Guests, Menu, Reviews, Analytics, Settings |
| **Timeline** | Horizontal timeline on dashboard | Hour-by-hour view of reservations |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Restaurant | name, slug, cuisine[], address, coordinates, phone, hours, price_range (1-4), rating, photos[], description, features[] | has many Tables, Menus, Reviews, Reservations |
| Table | number, capacity, section, status (available/occupied/reserved), combinable | belongs to Restaurant |
| Menu | name (lunch/dinner/brunch), active | has many MenuSections |
| MenuSection | name (Appetizers, Mains...), order | has many MenuItems |
| MenuItem | name, description, price, dietary_tags[], image, available | belongs to MenuSection |
| Reservation | date, time, party_size, status, confirmation_code, special_requests, occasion | belongs to Restaurant, User, Table |
| Review | overall_rating, food_rating, service_rating, ambiance_rating, value_rating, text, dine_date | belongs to Restaurant and User |
| GuestProfile | name, email, phone, visit_count, avg_spend, preferences, notes, vip_flag | belongs to Restaurant |
| Collection | name, description, restaurants[] | curated grouping |
| GiftCard | code, balance, purchaser, recipient | redeemable at Restaurants |

### Reservation Status Flow
```
requested → confirmed → seated → completed
              ↘ modified
              ↘ cancelled
              ↘ no_show
```

## User Flows

### Find & Book
```
Home → Search (location, date, time, party) → Results → Pick Restaurant → View Menu/Reviews → Select Time Slot → Enter Details → Confirm → Confirmation
```

### Quick Book (Repeat Visit)
```
My Reservations → Past → Restaurant → Book Again → Select Slot → Confirm
```

### Modify Reservation
```
My Reservations → Upcoming → Select → Modify → Change Date/Time/Size → Confirm Update
```

### Post-Dining Review
```
My Reservations → Past → Rate & Review → Score Categories → Write Review → Submit
```

### Restaurant: Manage Evening
```
Dashboard → Today's Reservations → Assign Tables → Mark Seated → Track Turn Time → Mark Completed
```

## URL / Route Structure

### Diner
```
/                                → Home
/search                          → Search Results
/search?location=:loc&date=:d&time=:t&party=:n → Filtered Results
/restaurant/:slug                → Restaurant Page
/restaurant/:slug/menu           → Full Menu
/restaurant/:slug/reviews        → All Reviews
/restaurant/:slug/photos         → Photo Gallery
/restaurant/:slug/book           → Reservation Flow
/booking/confirmation/:id        → Booking Confirmation
/reservations                    → My Reservations
/reservations/:id                → Reservation Detail
/reservations/:id/modify         → Modify Reservation
/reservations/:id/review         → Write Review
/account                         → Account
/account/saved                   → Saved Restaurants
/account/preferences             → Dining Preferences
/gift-cards                      → Gift Cards
/collections/:slug               → Curated Collection
/help                            → Help
```

### Restaurant Dashboard
```
/dashboard                       → Dashboard
/dashboard/reservations          → Reservations
/dashboard/reservations/:id      → Reservation Detail
/dashboard/floor-plan            → Floor Plan
/dashboard/guests                → Guest Book
/dashboard/guests/:id            → Guest Profile
/dashboard/menu                  → Menu Management
/dashboard/reviews               → Reviews
/dashboard/analytics             → Analytics
/dashboard/settings              → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Restaurants | Name, cuisine, location, neighborhood | Cuisine, Price Range ($–$$$$), Rating, Distance, Features (outdoor, private dining, bar), Dietary (vegetarian, gluten-free), Availability | Best Match, Rating, Distance, Price |
| Menu | Item name, description | Category, Dietary Tags, Price Range | Menu Order, Price |
| Reviews | Review text | Rating, Date Range, Occasion | Newest, Highest, Lowest |
| Dashboard Reservations | Guest name, phone, confirmation # | Date Range, Status, Party Size, Section | Time, Party Size, Guest Name |

## Responsive Behavior

| Breakpoint | Search | Results | Restaurant Detail | Booking |
|------------|--------|---------|-------------------|---------|
| Desktop (≥1024px) | Full inline search bar | List + map split | Gallery + info side by side, time slots grid | Inline form |
| Tablet (768–1023px) | Compact search bar | List or map toggle | Stacked layout | Single column |
| Mobile (<768px) | Search triggers modal | Vertical cards, map via button | Swipe gallery, accordion sections, sticky book bar | Step-by-step |

### Mobile Adaptations
- Sticky "Find a Table" bar on restaurant detail
- Time slot pills optimized for thumb tap
- Swipeable restaurant cards in collections
- One-tap rebooking from past reservations
- Push notifications for reservation reminders
- Apple/Google Wallet pass for confirmations

## Access Control

### Diner
| Role | Browse | Book | Manage | Review | Loyalty |
|------|--------|------|--------|--------|---------|
| Guest | ✅ | ✅ (enter contact info) | — | — | — |
| Registered | ✅ | ✅ (saved info) | ✅ | ✅ | ✅ |
| VIP | ✅ | ✅ + priority slots | ✅ | ✅ | ✅ + perks |

### Restaurant Dashboard
| Role | Dashboard | Reservations | Floor Plan | Guests | Menu | Settings |
|------|-----------|-------------|------------|--------|------|----------|
| Owner | ✅ | Full | Edit | Full | Full | ✅ |
| Manager | ✅ | Full | Edit | Full | Edit | Limited |
| Host | ✅ | View/Seat | View | View | — | — |
| Staff | — | View today | — | — | — | — |
