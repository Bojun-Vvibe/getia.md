# Ride-Hailing — Information Architecture

## Overview

A ride-hailing and transportation platform (Uber, Lyft, Grab style). The mental model is **request → match → ride → pay** — riders set pickup and destination, choose a ride type, get matched with a driver, track the ride in real-time, and pay automatically. The experience is map-centric, real-time, and heavily mobile-first. Drivers have a separate app flow for accepting rides and navigating.

## Site Map

### Rider App

```
├── Home (Map View)
│   ├── Map (current location centered)
│   ├── Pickup Pin / "Where to?" Search Bar
│   ├── Saved Places (Home, Work, Recent)
│   ├── Ride Type Quick Access
│   ├── Promotions / Offers Banner
│   └── Scheduled Rides
├── Set Destination
│   ├── Search (address, place, POI)
│   ├── Recent Destinations
│   ├── Saved Places
│   ├── Map Pin Drop
│   └── Multiple Stops
├── Choose Ride
│   ├── Ride Options (list, scrollable)
│   │   ├── Economy (UberX, standard)
│   │   ├── Premium (Black, Comfort)
│   │   ├── XL / Van (groups)
│   │   ├── Shared / Pool
│   │   └── Specialty (Pet, Wheelchair accessible)
│   ├── Price Estimate per Type
│   ├── ETA per Type
│   ├── Surge Pricing Indicator
│   ├── Payment Method Selector
│   ├── Promo Code
│   └── Request Ride
├── Matching
│   ├── Searching for Driver Animation
│   ├── Cancel Option
│   └── Estimated Wait Time
├── Ride Accepted
│   ├── Driver Info (name, photo, rating, car model, plate)
│   ├── Driver Location on Map (real-time)
│   ├── ETA to Pickup
│   ├── Contact Driver (call, message)
│   ├── Share Trip (with contacts)
│   ├── Cancel Ride
│   └── Safety Features
├── In Ride
│   ├── Live Route on Map
│   ├── ETA to Destination
│   ├── Share Live Location
│   ├── Contact Driver
│   ├── Change Destination
│   ├── Split Fare
│   ├── Emergency / Safety
│   └── Stop Options
├── Ride Complete
│   ├── Fare Breakdown (base, time, distance, surge, tolls, tip)
│   ├── Rate Driver (1-5 stars)
│   ├── Tip
│   ├── Compliments (badges)
│   ├── Report Issue
│   ├── Receipt (email)
│   └── Ride Again / Go Home
├── Ride History
│   ├── Past Rides (list)
│   ├── Ride Detail
│   │   ├── Route Map
│   │   ├── Fare Breakdown
│   │   ├── Receipt
│   │   ├── Driver Info
│   │   └── Report Issue / Lost Item
│   └── Business vs Personal Toggle
├── Account
│   ├── Profile (name, phone, email, photo)
│   ├── Payment Methods (card, wallet, cash)
│   ├── Saved Places
│   ├── Business Profile
│   ├── Safety
│   │   ├── Emergency Contacts
│   │   ├── Trusted Contacts
│   │   ├── RideCheck (crash detection)
│   │   └── Safety Preferences
│   ├── Promotions & Rewards
│   ├── Referrals
│   ├── Settings (language, notifications, accessibility)
│   └── Help
├── Scheduled Rides
│   ├── Upcoming (edit/cancel)
│   └── Schedule New
├── Help
│   ├── Recent Trip Issues
│   ├── Account & Payment
│   ├── Safety
│   ├── Lost Items
│   └── Contact Support
└── Wallet
    ├── Balance
    ├── Ride Credits
    ├── Gift Cards
    └── Transaction History
```

### Driver App

```
├── Home (Waiting for Requests)
│   ├── Map (current location)
│   ├── Go Online / Offline Toggle
│   ├── Earnings Today
│   ├── Ride Requests Heatmap
│   ├── Promotions / Quests (earn bonuses)
│   └── Scheduled Rides
├── Ride Request (Incoming)
│   ├── Pickup Location & Distance
│   ├── Rider Rating
│   ├── Estimated Fare
│   ├── Ride Type
│   ├── Accept / Decline (timer)
│   └── Surge Multiplier
├── Navigate to Pickup
│   ├── Turn-by-Turn Navigation
│   ├── Rider Contact (call/message)
│   ├── Confirm Arrival
│   ├── Wait Timer
│   └── Cancel (no-show)
├── In Ride
│   ├── Turn-by-Turn to Destination
│   ├── Rider Info (name, rating)
│   ├── Trip Controls (navigate, contact)
│   ├── Add Stop
│   └── Emergency
├── Ride Complete
│   ├── Fare Summary
│   ├── Rate Rider (1-5 stars)
│   ├── Report Issue
│   └── Next Ride (auto-queue or manual)
├── Earnings
│   ├── Today's Summary
│   ├── Weekly Summary
│   ├── Trip History (fare breakdown)
│   ├── Tips
│   ├── Promotions / Bonuses Earned
│   ├── Cash Out (instant)
│   └── Tax Documents
├── Account
│   ├── Profile
│   ├── Vehicle Info
│   ├── Documents (license, insurance, registration)
│   ├── Ratings & Feedback
│   ├── Preferences (ride types, navigation app)
│   └── Settings
├── Promotions / Quests
│   ├── Active Quests (e.g., complete 20 rides = $50 bonus)
│   ├── Surge Zones
│   └── Referral Bonus
└── Help
    ├── Trip Issues
    ├── Account & Documents
    ├── Vehicle Requirements
    └── Support Chat
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Rider Home** | Map-dominant, bottom sheet | "Where to?" bar at top, bottom sheet with ride options |
| **Rider Bottom Sheet** | Draggable bottom sheet (3 states) | Collapsed: search bar. Half: ride options. Full: details |
| **Rider Account** | Hamburger menu (top-left) or profile icon | Account, Payment, History, Safety, Help |
| **Driver Home** | Map-dominant, status bar | Online/Offline toggle, earnings widget |
| **Driver Request** | Full-screen overlay | Accept/Decline with countdown |
| **In-Ride** | Map fills screen, minimal UI | Navigation overlay, contact fab, status at top |

### Rider State Machine
```
[ Idle ] → [ Setting Destination ] → [ Choosing Ride ] → [ Matching ] → [ Waiting for Pickup ] → [ In Ride ] → [ Rating ] → [ Idle ]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Rider | name, phone, email, photo, rating, payment_methods[], saved_places[] | has many Rides |
| Driver | name, phone, photo, rating, vehicle, license, status (online/offline/on_trip), location (live) | has many Rides |
| Vehicle | make, model, year, color, plate_number, type (sedan/SUV/van) | belongs to Driver |
| Ride | pickup (address, coordinates), destination (address, coordinates), stops[], ride_type, status, fare, distance, duration, route, surge_multiplier | belongs to Rider and Driver |
| Fare | base_fare, per_minute, per_mile, surge, tolls, fees, tip, total, payment_method | belongs to Ride |
| RideType | name (Economy, Premium, XL, Pool), base_price, per_min, per_mile, icon, capacity | platform config |
| Rating | score (1-5), from (rider/driver), compliments[], report | belongs to Ride |
| Promotion | code, type (percentage/fixed/free_ride), value, conditions, expires | applied to Ride |
| ScheduledRide | pickup, destination, ride_type, datetime, status | belongs to Rider |
| SavedPlace | label (Home, Work, custom), address, coordinates | belongs to Rider |

### Ride Status Flow
```
requested → driver_matched → driver_en_route → driver_arrived → in_progress → completed
                                                                                ↘ rated
             ↘ no_driver_available
             ↘ cancelled_by_rider
             ↘ cancelled_by_driver
```

## User Flows

### Request a Ride
```
Open App → "Where to?" → Enter Destination → Choose Ride Type → Confirm Price → Request → Wait for Match → Track Driver → Get Picked Up → Ride → Arrive → Rate & Tip
```

### Schedule a Ride
```
Home → "Where to?" → Enter Destination → [Schedule] → Pick Date/Time → Choose Ride Type → Confirm → Reminder Notification → Auto-Request at Time
```

### Driver: Accept & Complete
```
Go Online → Receive Request → Accept → Navigate to Pickup → Confirm Arrival → Start Ride → Navigate to Destination → End Ride → Rate Rider → View Earnings
```

### Report Lost Item
```
Ride History → Recent Ride → [I lost an item] → Describe Item → Contact Driver → Arrange Return
```

## URL / Route Structure

> Note: Ride-hailing is primarily a native mobile app. These routes are for the companion web app and deep links.

```
/                              → Home / Download App CTA
/ride                          → Request Ride (web booking)
/ride/estimate                 → Price Estimate
/ride/:id                      → Ride Detail / Tracking
/ride/:id/receipt              → Receipt
/history                       → Ride History
/history/:id                   → Ride Detail
/account                       → Account
/account/payment               → Payment Methods
/account/saved-places          → Saved Places
/account/safety                → Safety Settings
/account/business              → Business Profile
/wallet                        → Wallet & Credits
/schedule                      → Scheduled Rides
/help                          → Help Center
/help/trip/:id                 → Trip Issue
/drive                         → Drive with Us (signup)
/drive/earnings                → Driver Earnings (web)
/drive/account                 → Driver Account
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Destination | Address, place name, POI, airport | — (location-based) | Relevance, Recent |
| Ride History | Date, driver name, destination | Date Range, Ride Type, Business/Personal | Date (newest) |
| Help | Issue keywords | Category (trip, payment, account, safety) | Relevance |

### Location Autocomplete
"Where to?" suggests: saved places (Home, Work), recent destinations, popular nearby POIs, addresses (via maps API)

## Responsive Behavior

| Breakpoint | Primary |
|------------|---------|
| Mobile (primary) | Full map, bottom sheet, native app experience |
| Tablet | Enlarged map, wider bottom sheet, comfortable touch targets |
| Desktop (web) | Map + sidebar for booking, primarily for ride estimation and history review |

### Mobile-First Design Principles
- Map is always the primary view
- One-handed operation (bottom-anchored controls)
- Bottom sheet pattern for progressive disclosure
- Minimal text input (autocomplete, saved places, recent)
- Real-time updates via WebSocket (driver location, ETA)
- Background location tracking during ride
- Haptic feedback on key actions (ride accepted, arrived)
- Push notifications (driver matched, arriving, completed)
- Offline fallback (show last known state)

## Access Control

### Rider
| Feature | Guest | Registered | Business |
|---------|-------|-----------|----------|
| Estimate Price | ✅ | ✅ | ✅ |
| Request Ride | — | ✅ | ✅ |
| Schedule Ride | — | ✅ | ✅ |
| View History | — | ✅ | ✅ + expense reports |
| Safety Features | — | ✅ | ✅ |
| Promotions | — | ✅ | ✅ |

### Driver
| Feature | Pending | Active | Suspended |
|---------|---------|--------|-----------|
| Go Online | — | ✅ | — |
| Accept Rides | — | ✅ | — |
| View Earnings | — | ✅ | View only |
| Cash Out | — | ✅ | — |
| Update Docs | ✅ | ✅ | ✅ |
| Support | ✅ | ✅ | ✅ |

### Safety & Trust
- Real-time GPS tracking for all rides
- Driver background checks and document verification
- Two-way rating system (rider ↔ driver)
- In-app emergency button (911 integration)
- Trip sharing with trusted contacts
- Anonymized phone numbers for rider-driver calls
- Crash detection (accelerometer-based)
- Photo verification for drivers
