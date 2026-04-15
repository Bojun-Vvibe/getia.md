---
brand: Uber
tagline: "Go anywhere. Get anything. Ride-hailing, delivery, and freight — all in one app."
category: Ride-Hailing
website: https://uber.com
---

# Uber — Information Architecture

## Overview

Uber is the world's largest ride-hailing platform, connecting riders with drivers across 10,000+ cities. The mental model is **tap and go** — open the app, enter a destination, and a car arrives in minutes. The experience is entirely map-centric and real-time. Uber has expanded beyond rides into Uber Eats (food delivery), Uber Freight, and Uber for Business. The rider and driver apps are separate products with distinct IA. Key differentiator: massive driver network ensures ultra-fast pickup times, and dynamic surge pricing balances supply and demand.

## Site Map

### Rider App

```
├── Home (Map View)
│   ├── Map (GPS-centered, full screen)
│   ├── "Where to?" Search Bar (the primary CTA)
│   ├── Saved Places (Home, Work, pinned)
│   ├── Recent Destinations
│   ├── Ride Suggestions (based on time of day)
│   ├── Promotions Banner
│   ├── Uber Eats Quick Access
│   └── Reserve (scheduled rides)
├── Set Destination
│   ├── Search Bar (address, place name, POI)
│   ├── Autocomplete Results
│   ├── Map Pin Drop
│   ├── Saved Places (Home, Work, Gym, etc.)
│   ├── Recent Destinations
│   ├── Add Stops (multi-stop)
│   └── Confirm Pickup Point
├── Choose Ride
│   ├── Ride Options (bottom sheet, scrollable)
│   │   ├── UberX (affordable, everyday)
│   │   ├── Uber Comfort (newer cars, extra legroom)
│   │   ├── UberXL (6 seats)
│   │   ├── Uber Black (premium sedan)
│   │   ├── Uber Black SUV (premium SUV)
│   │   ├── UberPool / UberX Share (shared rides)
│   │   ├── Uber Green (electric/hybrid)
│   │   ├── Uber Pet
│   │   ├── Uber Reserve (scheduled)
│   │   └── Uber Hourly (by the hour)
│   ├── Per-Type Info
│   │   ├── Price Estimate (upfront pricing)
│   │   ├── ETA
│   │   ├── Surge Indicator (if applicable)
│   │   └── Capacity
│   ├── Payment Method (bottom)
│   ├── Promo Code
│   ├── Split Fare
│   └── [Confirm UberX] (primary CTA)
├── Matching
│   ├── "Looking for a driver..." (animation)
│   ├── Estimated Wait
│   └── Cancel
├── Driver Matched
│   ├── Driver Card
│   │   ├── Name, Photo, Rating (4.95 ★)
│   │   ├── Car Make/Model/Color, License Plate
│   │   ├── ETA to Pickup
│   │   └── Trip Count
│   ├── Driver Location (live on map)
│   ├── Contact Driver (call, in-app message)
│   ├── Share Trip (send link to contacts)
│   ├── Cancel Ride (fee warning)
│   └── Safety Center
├── In-Ride
│   ├── Live Route on Map
│   ├── ETA to Destination
│   ├── Share Live Location (link updates in real time)
│   ├── Change Destination
│   ├── Add Stop
│   ├── Contact Driver
│   ├── Emergency Button (SOS)
│   ├── Audio Recording (opt-in safety)
│   └── In-App Entertainment (optional)
├── Trip Complete
│   ├── Fare Breakdown
│   │   ├── Base Fare
│   │   ├── Distance
│   │   ├── Time
│   │   ├── Surge (if any)
│   │   ├── Tolls
│   │   ├── Booking Fee
│   │   └── Total
│   ├── Rate Driver (1-5 stars)
│   ├── Tip (preset amounts + custom)
│   ├── Compliments (Great Conversation, Expert Navigation, etc.)
│   ├── Report Issue
│   ├── Receipt (auto-emailed)
│   └── "Where to next?"
├── Activity / Trip History
│   ├── Past Trips (reverse chronological)
│   ├── Trip Detail
│   │   ├── Route Map
│   │   ├── Fare Breakdown
│   │   ├── Receipt
│   │   ├── Driver Info
│   │   └── Get Help / Lost Item
│   ├── Uber Eats Orders
│   └── Business vs Personal
├── Account
│   ├── Profile (name, phone, email, photo)
│   ├── Wallet
│   │   ├── Payment Methods (cards, PayPal, Venmo, Cash)
│   │   ├── Uber Cash (prepaid balance)
│   │   ├── Uber Credits
│   │   ├── Gift Cards
│   │   └── Vouchers
│   ├── Uber One (membership)
│   │   ├── Benefits (5% off rides, free delivery on Eats)
│   │   └── Manage Subscription
│   ├── Saved Places
│   ├── Business Profile (expense reporting)
│   ├── Family Profiles (request rides for family)
│   ├── Safety
│   │   ├── Emergency Contacts
│   │   ├── Trusted Contacts
│   │   ├── RideCheck
│   │   ├── Verify Your Ride
│   │   ├── PIN Verification
│   │   └── Safety Preferences
│   ├── Privacy
│   │   ├── Location Permissions
│   │   ├── Data Sharing
│   │   └── Delete Account
│   ├── Accessibility
│   ├── Settings (language, notifications)
│   └── Refer & Earn
├── Help
│   ├── Trip Issues (select recent trip)
│   ├── Account & Payment
│   ├── Safety
│   ├── Accessibility
│   └── Contact Support
└── Uber Eats (Tab / Section)
    ├── Nearby Restaurants
    ├── Browse by Cuisine
    ├── Cart & Checkout
    └── Order Tracking
```

### Driver App

```
├── Home
│   ├── Go Online / Offline Toggle
│   ├── Map (current location)
│   ├── Earnings Today
│   ├── Quest Progress (bonus goals)
│   ├── Surge Map (demand heatmap)
│   └── Scheduled Rides
├── Ride Request (Incoming)
│   ├── Pickup Distance/Time
│   ├── Rider Rating
│   ├── Ride Type
│   ├── Estimated Fare / Duration
│   ├── Accept / Decline (countdown timer)
│   └── Upfront Destination (for eligible drivers)
├── Navigating to Pickup
│   ├── Turn-by-Turn Navigation
│   ├── Contact Rider (call/message, anonymized numbers)
│   ├── "I've Arrived" (start wait timer)
│   └── Cancel (after wait timer, no-show)
├── In-Ride
│   ├── Navigation to Destination
│   ├── Trip Info (rider name, stops)
│   ├── Emergency Button
│   └── Add Stop (from rider)
├── Trip Complete
│   ├── Fare Summary (driver earnings)
│   ├── Rate Rider (1-5 stars)
│   ├── Report Issue
│   └── Next Ride (auto-queue)
├── Earnings
│   ├── Today / This Week
│   ├── Trip Breakdown (per trip)
│   ├── Tips
│   ├── Surge Earnings
│   ├── Quest / Promotion Bonuses
│   ├── Instant Cashout
│   └── Tax Summary / 1099
├── Account
│   ├── Profile
│   ├── Vehicle Info
│   ├── Documents (license, insurance, registration)
│   ├── Ratings & Reviews
│   ├── Rewards (Uber Pro tiers)
│   └── Settings
└── Help
    ├── Trip Issues
    ├── Account & Documents
    └── Support
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Rider Home** | Map fills screen | "Where to?" bar at bottom-center — one tap to start |
| **Bottom Sheet** | Draggable (3 states) | Collapsed: search bar. Half: ride options. Full: details |
| **Account** | Hamburger menu or profile avatar | Slides out from left |
| **In-Ride** | Minimal overlay on map | Navigation + minimal controls |
| **Driver** | Map + toggle | Online/Offline toggle as primary control |
| **Request** | Full-screen overlay (driver) | Accept/Decline with countdown timer |

### Rider State Machine
```
[ Idle ] → [ Searching Destination ] → [ Choosing Ride ] → [ Matching ] → [ Waiting for Driver ] → [ In Ride ] → [ Rating ] → [ Idle ]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Rider | name, phone, email, photo, rating, payment_methods[], saved_places[], emergency_contacts[] | has many Trips |
| Driver | name, phone, photo, rating, vehicle, license, status, location (live), uber_pro_tier | has many Trips |
| Vehicle | make, model, year, color, plate, type (sedan/SUV/luxury), capacity | belongs to Driver |
| Trip | pickup, destination, stops[], ride_type, status, fare, distance, duration, route_polyline, surge, driver, rider | core entity |
| Fare | base, per_minute, per_mile, surge_multiplier, tolls, booking_fee, tip, total, payment_method | belongs to Trip |
| RideType | name, description, base_price, per_min, per_mile, eta, icon, capacity, features[] | platform config |
| Rating | score (1-5), from, compliments[], reported | belongs to Trip |
| Promotion | code, type, value, conditions[], expires | applied to Trip |
| UberOne | status, benefits[], price, renewal | belongs to Rider |

### Trip Status
```
requested → matched → driver_en_route → driver_arrived → in_progress → completed → rated
             ↘ no_drivers_available
             ↘ cancelled_by_rider / cancelled_by_driver
```

## User Flows

### Request a Ride
```
Open App → "Where to?" → Type "SFO Airport" → Autocomplete → Confirm Pickup → See Ride Options (UberX $32, Black $65) → Select UberX → Confirm → Matching → Driver "Alex" in 4 min → Track on Map → Verify Car → Ride → Arrive → Rate 5★ → Tip $5
```

### Share Trip for Safety
```
Driver Matched → [Share Trip] → Select Contact → They Get Link → Real-Time Map + ETA → Auto-Notifies on Arrival
```

### Schedule a Ride
```
"Where to?" → Enter Destination → [Reserve] → Pick Date/Time → Select Ride Type → Confirm → Reminder Push → Auto-Matched at Scheduled Time
```

### Driver: Complete a Quest
```
Online → Accept Rides → Quest: "Complete 20 trips this weekend, earn $50 bonus" → Dashboard Shows Progress (14/20) → Keep Driving → Complete → Bonus Added
```

## URL / Route Structure

> Primarily native mobile; web routes for account management and ride requests.

```
/                              → Download App / Web Booking
/ride                          → Request a Ride (web)
/ride/estimate                 → Price Estimate
/trip/:id                      → Trip Detail
/trip/:id/receipt              → Receipt
/ride/history                  → Trip History
/account                       → Account
/account/wallet                → Payment Methods
/account/safety                → Safety Settings
/account/business              → Business Profile
/account/uber-one              → Uber One Membership
/drive                         → Become a Driver
/drive/earnings                → Driver Earnings
/help                          → Help Center
/help/trip/:id                 → Trip Issue
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Destination | Address, place name, POI, airport | — | Relevance, recent |
| Trip History | Date, destination, driver | Date Range, Ride Type, Business/Personal | Date |
| Help | Issue keywords | Category | Relevance |

## Responsive Behavior

| Breakpoint | Primary |
|------------|---------|
| Mobile (native, primary) | Full map + bottom sheet, optimized for one-handed use |
| Tablet | Larger map, wider bottom sheet |
| Desktop (web) | Map + sidebar booking, mainly for estimation and history |

### Mobile-First Design
- Map always the primary view
- Bottom sheet for progressive disclosure
- One-handed operation (everything bottom-anchored)
- Real-time WebSocket updates (driver location, ETA)
- Background location tracking
- Haptic feedback (ride matched, driver arrived)
- Push notifications at every stage
- Offline fallback (cached last state)

## Access Control

### Rider
| Feature | Guest | Registered | Uber One | Business |
|---------|-------|-----------|----------|----------|
| Estimate | ✅ | ✅ | ✅ | ✅ |
| Request Ride | — | ✅ | ✅ | ✅ |
| Schedule | — | ✅ | ✅ | ✅ |
| Safety Features | — | ✅ | ✅ | ✅ |
| Savings | — | — | 5% off rides | Expense auto-reporting |

### Driver
| Feature | Pending | Active | Diamond (Pro) |
|---------|---------|--------|---------------|
| Go Online | — | ✅ | ✅ |
| See Upfront Destination | — | — | ✅ |
| Priority Support | — | — | ✅ |
| Tuition Coverage | — | — | ✅ |

### Safety & Trust
- Real-time GPS tracking
- Background checks for all drivers
- Two-way ratings (rider <-> driver)
- Emergency button (911 integration)
- Trip sharing with trusted contacts
- PIN verification at pickup
- RideCheck (crash detection via accelerometer)
- Photo verification for drivers
- Anonymized phone numbers
