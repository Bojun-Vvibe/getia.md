---
brand: OpenTable
tagline: "Find your table. Discover and book restaurants with verified reviews and real-time availability."
category: Restaurant Reservation
website: https://opentable.com
---

# OpenTable — Information Architecture

## Overview

OpenTable is the largest restaurant reservation platform, seating 1B+ diners since launch. The mental model is **search → see availability → book instantly** — users search by location, cuisine, date/time, and party size, then book a table in seconds. Unlike Yelp (reviews-first, no booking) or Google Maps (general search), OpenTable's core value is **real-time availability** directly connected to restaurant seating systems. The platform also provides restaurant management tools (table management, guest CRM, analytics).

## Site Map

### Diner-Facing

```
├── Home
│   ├── Search Bar (Date, Time, Party Size, Location/Restaurant)
│   ├── Dining Near You
│   ├── Available Now
│   ├── Collections ("Best Outdoor Dining", "Date Night", "New & Hot")
│   ├── Trending Restaurants
│   ├── Cuisine Quick Filters
│   ├── Experiences & Events
│   └── Gift Cards
├── Search Results
│   ├── Restaurant Cards
│   │   ├── Photo
│   │   ├── Name, Cuisine, Neighborhood, Price ($$$$)
│   │   ├── Rating (food, service, ambiance — out of 5)
│   │   ├── Review Count ("1,847 reviews")
│   │   ├── Available Time Slots (inline buttons: 6:00, 6:30, 7:00, 7:15)
│   │   └── Booked X times today (social proof)
│   ├── Map View
│   ├── Filters
│   │   ├── Cuisine (Italian, Japanese, Mexican, Steakhouse, etc.)
│   │   ├── Price ($, $$, $$$, $$$$)
│   │   ├── Rating
│   │   ├── Distance
│   │   ├── Neighborhood
│   │   ├── Features (outdoor, private dining, good for groups)
│   │   ├── Dining Options (counter, bar, high-top, standard)
│   │   ├── Experiences (tasting menu, prix fixe, chef's table)
│   │   └── Offers (complimentary item, discount)
│   └── Sort (Best Match, Rating, Distance, A-Z)
├── Restaurant Page
│   ├── Photo Gallery
│   ├── Restaurant Info (cuisine, price, neighborhood, hours)
│   ├── Available Times (prominent grid — select date/time/party)
│   ├── Overview
│   │   ├── Description
│   │   ├── Top Tags (Great for Dates, Lively, Special Occasion)
│   │   ├── Dining Style (casual, fine dining, fast casual)
│   │   ├── Dress Code
│   │   ├── Parking
│   │   ├── Public Transit
│   │   └── Additional Info
│   ├── Menu
│   │   ├── Sections (Appetizers, Mains, Desserts, Drinks)
│   │   ├── Items (name, description, price)
│   │   └── Dietary Filters
│   ├── Reviews
│   │   ├── Overall Rating
│   │   ├── Category Ratings (food, service, ambiance)
│   │   ├── Noise Level
│   │   ├── Would Recommend (%)
│   │   ├── Review Filters (date, rating, occasion)
│   │   └── Individual Reviews (verified diner badge)
│   ├── Photos (official + diner-submitted)
│   ├── Map & Location
│   └── Similar Restaurants
├── Reservation Flow
│   ├── Selected: Date + Time + Party Size
│   ├── Seating Preference (indoor, outdoor, bar, counter)
│   ├── Special Occasion (birthday, anniversary, business, date)
│   ├── Special Requests (dietary, allergies, high chair)
│   ├── Contact Info (name, email, phone)
│   ├── OpenTable Dining Points Notice
│   └── [Complete Reservation]
├── Confirmation
│   ├── Reservation Details (restaurant, date, time, party)
│   ├── Confirmation Number
│   ├── Add to Calendar
│   ├── Invite Guests
│   ├── Restaurant Address + Map
│   ├── Modify / Cancel
│   └── Menu Preview
├── My Dining
│   ├── Upcoming Reservations
│   ├── Past Reservations
│   │   ├── Leave Review
│   │   └── Book Again
│   ├── Dining Points (earned from reservations)
│   │   ├── Points Balance
│   │   ├── Redeem for Dining Credit
│   │   └── Points History
│   ├── Saved Restaurants (favorites)
│   └── Reviews Written
├── Account
│   ├── Profile
│   ├── Dining Preferences (cuisine, seating, dietary)
│   ├── Payment Methods
│   ├── Notifications
│   └── Settings
├── Gift Cards
│   ├── Purchase (digital + physical)
│   ├── Redeem
│   └── Check Balance
└── Help
    ├── FAQ
    ├── Contact Support
    └── Cancellation Policy
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Fixed top bar | Logo, Search (location + date/time/party), My Dining, Sign In |
| **Time Slot Pills** | Inline on search results and restaurant page | Available times as tappable buttons (e.g., 6:00, 6:30, 7:00) |
| **Restaurant Tabs** | Horizontal tabs on restaurant page | Overview, Menu, Reviews, Photos |
| **Collection Carousel** | Horizontal scroll on home | Curated lists: "Best Brunch", "Outdoor Dining" |
| **Mobile Bottom Tabs** | Tab bar | Home, Search, My Dining, Account |

### Signature UX: Inline Time Slots
The key differentiator: available time slots appear directly on search result cards.
```
[ 🍝 Sotto 13 — Italian, $$$, 4.7★ ]
[  5:30  ] [  6:00  ] [  6:30  ] [  7:15  ]
[ "Booked 47 times today" ]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Restaurant | name, cuisine[], neighborhood, city, price_range (1-4), rating{food, service, ambiance, overall}, photos[], description, hours, dress_code, parking, noise_level, features[], dining_style | has Menu, Reviews, TimeSlots |
| TimeSlot | restaurant, date, time, party_size, seating_type, available | real-time availability |
| Reservation | restaurant, date, time, party_size, seating, occasion, special_requests, status, confirmation_code | belongs to User and Restaurant |
| Review | overall_rating (1-5), food_rating, service_rating, ambiance_rating, text, occasion, dine_date, recommended, noise_level, photos[] | verified diner |
| Menu | restaurant, sections[] | has MenuItems |
| MenuItem | name, description, price, dietary_tags[], photo | belongs to Menu |
| DiningPoints | user, balance, earned[], redeemed[] | loyalty currency |
| Collection | name, description, restaurants[], curated_by | editorial content |
| GiftCard | code, balance, purchaser, recipient | redeemable |

### Reservation Status
```
confirmed → modified → seated → completed → reviewed
              ↘ cancelled
              ↘ no_show
```

## User Flows



### Find and Book
```
Home → Search (Tonight, 7:00 PM, 2 people, Near Me) → Results → See Available Slots → Tap "7:15 PM" on "Sotto 13" → Seating: Outdoor → Special: Anniversary → [Complete Reservation] → Confirmation → Add to Calendar
```

### Earn and Redeem Points
```
Complete Reservations → Earn 100 Points per Booking → Accumulate 2,000 → Redeem for $20 Dining Credit → Apply at Checkout
```

### Post-Dining Review
```
Past Reservations → "How was Sotto 13?" → Rate Food/Service/Ambiance → Noise Level → Write Review → "Would you recommend?" → Submit → Earn Points
```


## URL / Route Structure

```
/                                      → Home
/s?datetime=:dt&covers=:n&metroId=:m  → Search Results
/restaurant/:slug                      → Restaurant Page
/restaurant/:slug/menu                 → Menu
/restaurant/:slug/reviews              → Reviews
/restaurant/:slug/photos               → Photos
/booking/details                       → Reservation Form
/booking/confirmation/:id              → Confirmation
/my/reservations                       → My Reservations
/my/reservations/:id                   → Reservation Detail
/my/favorites                          → Saved Restaurants
/my/points                             → Dining Points
/my/reviews                            → My Reviews
/collections/:slug                     → Collection
/gift-cards                            → Gift Cards
/account                               → Account
/help                                  → Help
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Restaurants | Name, cuisine, location, neighborhood | Cuisine, Price, Rating, Distance, Features, Dining Options, Offers, Experiences, Seating | Best Match, Rating, Distance, Price, A-Z |
| Menu | Item name | Dietary tags, section | Menu order, price |
| Reviews | Review text | Rating, Occasion, Date | Newest, Highest, Lowest |

## Responsive Behavior

| Breakpoint | Search | Results | Restaurant | Booking |
|------------|--------|---------|------------|---------|
| Desktop (≥1024px) | Inline search bar | List + map split | Gallery + info + sidebar availability | Inline form |
| Tablet (768–1023px) | Compact search | List or map | Stacked, sticky availability | Single column |
| Mobile (<768px) | Search modal | Cards with time slots, map toggle | Swipe gallery, sticky "Find a Table" | Step-by-step |

### OpenTable-Specific UX
- Real-time availability as inline buttons (not behind a click)
- "Booked X times today" social proof
- Verified diner reviews only (must have actually reserved + dined)
- Points system drives repeat behavior
- Occasion tags help restaurants personalize (birthday → special attention)
- Noise level reported by diners (helpful for business meals)
- Push notifications: reservation reminders, review prompts
- Apple/Google Wallet integration for confirmations
- One-tap rebooking from past reservations

## Access Control

### Diner
| Role | Browse | Book | Manage | Review | Points |
|------|--------|------|--------|--------|--------|
| Guest | ✅ | ✅ (enter info) | — | — | — |
| Registered | ✅ | ✅ (saved info) | ✅ | ✅ (verified) | ✅ |
| VIP (frequent diner) | ✅ | ✅ + priority | ✅ | ✅ | ✅ + bonus |

### Restaurant Dashboard
| Role | Dashboard | Reservations | Floor Plan | Guests | Menu | Settings |
|------|-----------|-------------|------------|--------|------|----------|
| Owner | ✅ | Full | Edit | Full | Full | ✅ |
| Manager | ✅ | Full | Edit | Full | Edit | Limited |
| Host | ✅ | View/Seat | View | View | — | — |
