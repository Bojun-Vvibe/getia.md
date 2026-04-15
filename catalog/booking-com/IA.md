---
brand: Booking.com
tagline: "World's #1 accommodation site. Hotels, homes, and everything in between."
category: Travel
website: https://booking.com
---

# Booking.com — Information Architecture

## Overview

Booking.com is the world's largest online travel agency (OTA), listing 28M+ properties across hotels, apartments, hostels, villas, and unique stays. The mental model is **search → compare → book → stay** with an emphasis on **urgency and social proof**. The interface is famously data-dense, using psychological nudges ("Only 2 rooms left!", "12 people looking at this right now", "Free cancellation") to drive conversions. Booking.com's IA is optimized for hotel booking first, with flights, car rentals, and attractions as secondary offerings.

## Site Map

```
├── Home
│   ├── Search Box (Where, Check-in/out, Guests/Rooms)
│   ├── Genius Loyalty Banner
│   ├── Recent Searches
│   ├── Trending Destinations
│   ├── Deals of the Day
│   ├── Property Type Tabs (Hotels, Apartments, Resorts, Villas, Hostels)
│   ├── Explore Nearby
│   ├── Travel Articles / Inspiration
│   └── App Download CTA
├── Search Results
│   ├── Filter Sidebar (left, desktop)
│   │   ├── Price Range (slider)
│   │   ├── Star Rating
│   │   ├── Guest Rating (Superb 9+, Very Good 8+, Good 7+)
│   │   ├── Property Type (hotel, apartment, hostel, resort)
│   │   ├── Facilities (wifi, parking, pool, gym, restaurant)
│   │   ├── Bed Type
│   │   ├── Room Facilities (kitchen, balcony, AC)
│   │   ├── Meal Plans (breakfast included)
│   │   ├── Cancellation Policy (free cancellation)
│   │   ├── Payment (pay at property, pay now)
│   │   ├── Deals (Genius, Black Friday, Mobile)
│   │   └── Distance from Center
│   ├── Property Cards
│   │   ├── Photo
│   │   ├── Name + Star Rating
│   │   ├── Location + Distance
│   │   ├── Guest Rating (score + label + review count)
│   │   ├── Room Type + Price
│   │   ├── Urgency: "Only 2 rooms left!" (red text)
│   │   ├── Social Proof: "Booked 15 times in last 24h"
│   │   ├── Deal Badge (Genius, Black Friday, Secret Deal)
│   │   ├── Free Cancellation Badge
│   │   └── [See Availability]
│   ├── Map View (toggle)
│   │   ├── Property Pins (with prices)
│   │   ├── Map + List Split
│   │   └── Drag to Search This Area
│   ├── Sort Options (Top Picks, Price, Rating, Distance, Stars)
│   └── Number of Results Found
├── Property Page
│   ├── Photo Gallery (30+ photos, categorized: room, bathroom, view, building)
│   ├── Property Name + Stars + Location
│   ├── Guest Rating Score (e.g., 8.7/10 "Fabulous") + Category Scores
│   ├── Key Highlights (WiFi, parking, airport shuttle)
│   ├── Description
│   ├── Facilities & Amenities (detailed list)
│   ├── Room Options Table
│   │   ├── Room Type (name + photos)
│   │   ├── Sleeps (guests + bed configuration)
│   │   ├── Price (per night + total)
│   │   ├── Conditions (cancellation policy, payment terms)
│   │   ├── Meal Plan (breakfast included / room only)
│   │   ├── Genius Discount (if applicable)
│   │   └── [Reserve] per room type
│   ├── Map & Location
│   │   ├── Map
│   │   ├── Nearby Attractions + Distances
│   │   ├── Public Transport
│   │   └── Airport Distance
│   ├── Reviews
│   │   ├── Overall Score + Category Breakdown (cleanliness, location, staff, facilities)
│   │   ├── Review List (filterable by type, language, score)
│   │   └── AI Summary of Reviews
│   ├── House Rules (check-in/out times, pets, smoking)
│   ├── Fine Print (extra charges, deposits)
│   ├── FAQ about the Property
│   └── Similar Properties Nearby
├── Booking Flow / Checkout
│   ├── Your Selection Summary (dates, room, price)
│   ├── Guest Details (name, email, phone)
│   ├── Special Requests (late check-in, extra bed, etc.)
│   ├── Add to Trip (link to flight, car)
│   ├── Price Breakdown (room rate × nights + taxes + fees)
│   ├── Payment
│   │   ├── Pay Now (sometimes discounted)
│   │   ├── Pay at Property
│   │   └── Card Required as Guarantee
│   ├── Terms & Cancellation Policy
│   └── [Complete Booking]
├── Confirmation
│   ├── Confirmation Number
│   ├── Stay Details (dates, property, address)
│   ├── Map & Directions
│   ├── Add to Calendar
│   ├── Download Confirmation
│   ├── Add Flights / Car Rental / Activities
│   └── Share with Travel Companion
├── My Trips / Bookings
│   ├── Upcoming Bookings
│   ├── Booking Detail
│   │   ├── Property Info + Contact
│   │   ├── Dates + Room
│   │   ├── Confirmation Number (+ PIN)
│   │   ├── Map + Directions
│   │   ├── Cancel / Modify
│   │   ├── Add to Trip (flights, car, activities)
│   │   └── Contact Property
│   ├── Past Bookings
│   │   ├── Write Review
│   │   └── Book Again
│   └── Cancelled
├── Flights (Secondary)
│   ├── Search (origin, destination, dates)
│   ├── Results
│   └── Booking
├── Car Rentals
├── Attractions & Tours
│   ├── Things to Do by Destination
│   ├── Activity Detail
│   └── Book Activity
├── Account
│   ├── Profile
│   ├── Genius Loyalty Level (1, 2, 3)
│   │   ├── Genius 1: 10% discounts
│   │   ├── Genius 2: 15% + free breakfast
│   │   └── Genius 3: 20% + upgrades + priority support
│   ├── Saved Properties (wishlist)
│   ├── Reviews Written
│   ├── Payment Cards
│   ├── Wallet & Credits
│   ├── Notification Preferences
│   ├── Currency / Language
│   └── Settings
├── Help
│   ├── FAQ
│   ├── Contact Customer Service (24/7)
│   ├── Manage Booking
│   └── Partner Help
└── Footer
    ├── About
    ├── Careers
    ├── Partner (List Your Property)
    ├── Affiliate Program
    ├── Terms & Privacy
    └── Country / Currency / Language Selector
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Fixed top bar | Logo, Currency/Language, Genius badge, List Property, My Trips, Sign In |
| **Search Box** | Prominent on home, compact in header | Where + Check-in/out + Guests + [Search] |
| **Tabs** | Below header on home | Stays, Flights, Car Rental, Attractions, Airport Taxis |
| **Filters** | Left sidebar (desktop), bottom sheet (mobile) | Extensive filters (20+ facets) |
| **Map Toggle** | Button on results | Switch between list and map view |
| **Room Table** | Core of property page | Scrollable table comparing all room options |
| **Urgency Nudges** | Inline on cards and property pages | Red text: "Only 1 left!", "12 people looking now" |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Property | name, type, address, coordinates, star_rating, user_rating, photos[], amenities[], description, check_in_time, check_out_time, policies{} | has many RoomTypes, Reviews |
| RoomType | name, description, max_guests, bed_config, price_per_night, photos[], amenities[], cancellation_policy, meal_plan, availability_count | belongs to Property |
| Booking | property, room_type, check_in, check_out, guests, total_price, status, confirmation_number, pin, special_requests | belongs to User |
| Review | overall_score (1-10), scores{staff, facilities, cleanliness, comfort, value, location, wifi}, title, text, reviewer{name, country, trip_type}, date | belongs to Property |
| GeniusLevel | level (1/2/3), discount_pct, perks[] | belongs to User |
| SavedProperty | property, list_name | belongs to User |

### Booking Status
```
confirmed → modified → checked_in → completed → reviewed
             ↘ cancelled → refunded (if policy allows)
```

### Urgency / Social Proof Signals
```
"Only X rooms left on our site!" (low inventory)
"Booked X times in the last 24 hours" (popularity)
"X people are looking at this right now" (competition)
"Last booked X minutes ago" (recency)
"Great Value Today" (price vs market)
```

## User Flows

### Search & Book Hotel
```
Home → Search (Paris, May 1-5, 2 adults) → 1,247 Results → Filter (Free Cancellation, 8+ Rating, Pool) → Sort by Top Picks → Property Card → Photo Gallery → Check Room Options → Select "Deluxe Double, Free Cancellation, €150/night" → [Reserve] → Guest Details → Payment → [Complete Booking] → Confirmation Email
```

### Modify or Cancel
```
My Trips → Upcoming → Select Booking → [Cancel Booking] → Review Policy (Free Cancellation Before May 1) → Confirm → Cancelled → Refund Processed
```

### Leave a Review
```
Past Bookings → Select Stay → "How was your stay?" → Rate Categories (1-10) → Write Review → Submit → Published
```

### New User Onboarding
```
Visit Booking.com → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

```
/                                          → Home
/searchresults.html?dest=Paris&checkin=...  → Search Results (query string heavy)
/hotel/:slug                               → Property Page
/hotel/:slug/reviews                       → Property Reviews
/hotel/:slug/photos                        → Photo Gallery
/booking                                   → Checkout
/confirmation/:id                          → Booking Confirmation
/mysettings                                → My Trips / Bookings
/mysettings/booking/:id                    → Booking Detail
/flights                                   → Flight Search
/cars                                      → Car Rental Search
/attractions                               → Attractions
/deals                                     → Deals Page
/genius                                    → Genius Loyalty
/wishlist                                  → Saved Properties
/myaccount                                 → Account
/help                                      → Help Center
billing  → Billing & subscription
notifications  → Notification preferences
api  → API documentation
/booking/{id}                     → Booking Confirmation
/mytrips                           → My Trips
/settings/preferences             → Travel Preferences
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Properties | Destination, property name | Price, Stars, Rating, Property Type, Facilities, Room Features, Cancellation, Payment, Meal, Deals, Distance, Bed Preferences, Neighborhood | Top Picks, Price (low/high), Rating, Stars, Distance |
| Flights | Origin, Destination | Stops, Airlines, Duration, Departure Time, Price | Price, Duration, Departure |
| Reviews | Review text | Score Range, Trip Type (couple/family/solo/business), Language, Date | Newest, Highest, Lowest |

## Responsive Behavior

| Breakpoint | Search | Results | Property | Booking |
|------------|--------|---------|----------|---------|
| Desktop (≥1024px) | Inline full search bar | List + filter sidebar + optional map | Gallery + room table + reviews | Multi-column form |
| Tablet (768–1023px) | Stacked search | List, filter toggle | Full-width gallery, stacked table | Single column |
| Mobile (<768px) | Search modal | Cards, filter sheet, map toggle | Swipe gallery, accordion sections, sticky CTA | Step-by-step |

### Booking.com-Specific UX
- Urgency signals everywhere (scarcity, popularity, competition)
- Social proof: review scores prominently displayed
- Free cancellation badges (key conversion driver)
- Genius loyalty discounts visible on search results
- Price per night + total stay shown simultaneously
- Breadcrumb location context (Country > City > Hotel)
- Multi-currency display
- Translation of reviews to user's language
- Mobile app deep-linking for better rates

## Access Control

| Role | Search | Book | Manage | Reviews | Genius |
|------|--------|------|--------|---------|--------|
| Guest | ✅ | ✅ (guest checkout) | Via confirmation email | — | — |
| Registered | ✅ | ✅ | ✅ | ✅ | Level 1 (after 2 stays) |
| Genius 2 | ✅ | ✅ + 15% off | ✅ | ✅ | 15% + breakfast + upgrades |
| Genius 3 | ✅ | ✅ + 20% off | ✅ + priority support | ✅ | 20% + all perks |
| Property Partner | — | — | Own listings | Respond to reviews | — |
