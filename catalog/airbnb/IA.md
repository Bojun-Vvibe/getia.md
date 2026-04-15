---
brand: Airbnb
tagline: "Belong anywhere. A global community marketplace for unique stays and experiences."
category: Marketplace
website: https://www.airbnb.com
---

# Airbnb — Information Architecture

## Overview

Airbnb is a two-sided marketplace connecting hosts (who list properties and experiences) with guests (who search and book). The mental model is **travel with a local feel** — guests discover unique places to stay (homes, treehouses, castles, tiny houses) and local experiences, while hosts monetize their spaces. Airbnb differentiates through map-based search, full-bleed photography, category-based browsing (Icons, Trending, Beachfront, Cabins, etc.), the host/guest dual-mode interface, a trust system (reviews, identity verification, AirCover insurance), and flexible date/destination search.

## Site Map

### Guest Side

```
├── Home
│   ├── Search Bar (Where, Check In/Out, Who — flexible dates, "I'm flexible")
│   ├── Category Icons (horizontal scroll)
│   │   ├── Icons (extraordinary experiences)
│   │   ├── Trending
│   │   ├── Beachfront
│   │   ├── Cabins
│   │   ├── Amazing Views
│   │   ├── Tiny Homes
│   │   ├── Design
│   │   ├── Countryside
│   │   ├── Mansions
│   │   ├── Lakefront
│   │   ├── Treehouses
│   │   ├── OMG! (unique)
│   │   ├── Castles
│   │   ├── Tropical
│   │   ├── Farms
│   │   └── 60+ categories
│   ├── Listing Cards Grid
│   │   ├── Image Carousel (swipeable, 5 dots)
│   │   ├── Location, Distance
│   │   ├── Date Available
│   │   ├── Price per Night (total before taxes toggle)
│   │   ├── Rating + Review Count
│   │   ├── Guest Favorite Badge
│   │   └── Heart (Save to Wishlist)
│   ├── "Show Total Before Taxes" Toggle
│   └── Map Toggle (right side)
├── Search Results
│   ├── Map + List Split View
│   │   ├── Map (pins with prices, zoom → results update)
│   │   ├── Listing Cards (left panel, scrollable)
│   │   └── Hover: highlight pin ↔ card
│   ├── Filters
│   │   ├── Price Range (histogram slider)
│   │   ├── Type of Place (entire home, private room, shared room, hotel)
│   │   ├── Rooms & Beds
│   │   ├── Amenities (Wi-Fi, kitchen, washer, pool, hot tub, parking)
│   │   ├── Property Type (house, apartment, guesthouse, hotel)
│   │   ├── Accessibility
│   │   ├── Top-Tier Stays (Superhost, Guest Favorites)
│   │   ├── Booking Options (instant book, self check-in, pets)
│   │   ├── Host Language
│   │   └── Clear All Filters
│   └── Sort: not explicit (algorithm-based relevance)
├── Listing Detail
│   ├── Photo Gallery (grid: 1 hero + 4 supporting, click for full gallery)
│   ├── Title, Location, Host (avatar, Superhost badge)
│   ├── Highlights (self check-in, Great Location, Free cancellation)
│   ├── Description
│   ├── Sleeping Arrangements (room cards with bed icons)
│   ├── Amenities (grid with "Show All" modal)
│   ├── Calendar (availability, min stay)
│   ├── Booking Card (sticky right sidebar)
│   │   ├── Price Per Night
│   │   ├── Date Picker (check-in / check-out)
│   │   ├── Guests (adults, children, infants, pets)
│   │   ├── Price Breakdown (nightly × nights, cleaning fee, service fee, taxes)
│   │   ├── Reserve Button (or Request to Book)
│   │   └── "You won't be charged yet"
│   ├── Reviews
│   │   ├── Overall Rating (4.92 out of 5)
│   │   ├── Category Scores (Cleanliness, Accuracy, Check-in, Communication, Location, Value)
│   │   ├── Review List (searchable)
│   │   └── Guest Favorite Badge (top 5% based on ratings + consistency)
│   ├── Host Profile (bio, response rate, response time, joined date, reviews received)
│   ├── Location Map (approximate, neighborhood guide)
│   ├── House Rules
│   ├── Safety & Property Info (smoke detector, CO alarm, cameras)
│   ├── Cancellation Policy (flexible, moderate, strict)
│   ├── AirCover (protection guarantee)
│   └── More Places to Stay (similar listings)
├── Booking Flow
│   ├── Trip Details (dates, guests — pre-filled)
│   ├── Message to Host (optional)
│   ├── Payment (credit card, PayPal, Apple Pay, Google Pay)
│   ├── Coupon Code
│   ├── Trip Insurance (optional)
│   ├── Price Breakdown (final total with all fees)
│   ├── Cancellation Policy Reminder
│   ├── House Rules Agreement
│   └── Confirm & Pay
├── Trips
│   ├── Upcoming
│   │   ├── Trip Card (listing image, dates, host)
│   │   ├── Trip Detail
│   │   │   ├── Confirmation Code
│   │   │   ├── Check-in Instructions
│   │   │   ├── Address (unlocked after booking)
│   │   │   ├── Host Contact
│   │   │   ├── Getting There (directions, transit)
│   │   │   ├── House Manual (digital guidebook)
│   │   │   ├── Wi-Fi Info
│   │   │   ├── Receipt / Invoice
│   │   │   ├── Modify Reservation
│   │   │   ├── Cancel Reservation
│   │   │   └── Get Help
│   │   └── Countdown / Check-in Timer
│   └── Past Trips
│       ├── Leave Review
│       ├── Rebook
│       └── Receipt
├── Wishlists
│   ├── Wishlist Collections (named lists with cover images)
│   ├── Create Wishlist
│   ├── Collaborative Wishlists (shared with travel group)
│   └── Map View of Wishlist
├── Messages
│   ├── Inbox (conversations with hosts)
│   ├── Message Thread (text, booking requests, automated messages)
│   ├── Quick Replies
│   └── Translation (auto-translate)
├── Experiences
│   ├── Experience Search (activity type + location)
│   ├── Experience Detail (host, photos, itinerary, reviews)
│   └── Online Experiences (virtual activities)
├── Account
│   ├── Personal Info (name, email, phone, government ID, address)
│   ├── Login & Security (password, social login, 2FA)
│   ├── Payments & Payouts (payment methods, credits)
│   ├── Taxes
│   ├── Notifications (email, push, SMS preferences)
│   ├── Privacy & Sharing
│   ├── Travel for Work (business travel settings)
│   ├── Professional Hosting Tools (if also a host)
│   ├── Refer a Host (referral program)
│   └── Gift Cards
├── Help Center
│   ├── Help Topics (booking, hosting, policies, safety)
│   ├── Contact Support
│   ├── Resolution Center (refund requests, disputes)
│   └── AirCover Claims
└── Footer
    ├── Support | Hosting | Airbnb
    ├── Language, Currency, Accessibility
    └── Terms, Sitemap, Privacy, Your Privacy Choices
```

### Host Side

```
├── Today (Host Dashboard)
│   ├── Reservations (checking in today, checking out, upcoming)
│   ├── To-Do List (unread messages, reviews to write, listing updates)
│   ├── Earnings Summary
│   └── Performance Snapshot
├── Calendar
│   ├── Monthly Calendar (per listing, multi-listing view)
│   ├── Availability Settings (blocked dates, min/max stay)
│   ├── Pricing (nightly price, custom pricing per date)
│   ├── Smart Pricing (dynamic pricing toggle)
│   ├── Trip Length Discounts (weekly, monthly)
│   └── Sync with External Calendar (iCal)
├── Listings
│   ├── Listing List (active, in progress, unlisted)
│   ├── Listing Editor (multi-step)
│   │   ├── Photos (reorder, captions, cover photo)
│   │   ├── Title
│   │   ├── Description
│   │   ├── Property Type (house, apartment, etc.)
│   │   ├── Rooms & Spaces (bedrooms, beds, bathrooms)
│   │   ├── Amenities (checklist of 40+)
│   │   ├── Location (pin on map)
│   │   ├── Guests (max capacity)
│   │   ├── Pricing (base price, cleaning fee, extra guest fee)
│   │   ├── Availability (calendar + rules)
│   │   ├── Booking Settings (instant book, request to book)
│   │   ├── House Rules (smoking, pets, events, quiet hours)
│   │   ├── Safety (smoke alarm, CO detector, fire extinguisher)
│   │   ├── Check-in Method (keypad, lockbox, smart lock, in person)
│   │   ├── Cancellation Policy
│   │   ├── Co-hosts (add with permissions)
│   │   └── Languages
│   └── Create New Listing (guided multi-step flow)
├── Reservations
│   ├── Upcoming
│   ├── Completed
│   ├── Cancelled
│   ├── Pending (awaiting approval)
│   └── Reservation Detail (guest info, dates, earnings, message)
├── Earnings
│   ├── Gross Earnings (by month, by listing)
│   ├── Payouts (transaction history)
│   ├── Payout Methods (bank account, PayPal)
│   ├── Tax Information
│   └── Transaction History (detail per reservation)
├── Insights
│   ├── Performance Dashboard
│   │   ├── Views, Booking Rate, Review Score
│   │   ├── Market Comparison (your listing vs similar)
│   │   └── Earnings Trend
│   ├── Review Scores (by category)
│   └── Professional Hosting Reports
├── Messages (same inbox, host perspective)
├── Superhost Status
│   ├── Superhost Criteria (4.8+ rating, <1% cancellation, 10+ stays, 90% response)
│   ├── Current Status
│   └── Badge Benefits
├── Guidebook
│   ├── Local Recommendations (restaurants, attractions)
│   └── House Manual (check-in instructions, WiFi, rules)
└── Host Settings
    ├── Personal Info
    ├── Payout Methods
    ├── Notifications
    ├── Co-host Management
    ├── Professional Tools (API access, channel manager)
    └── Hosting Responsibly (local laws, insurance)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, search bar (expandable: Where/When/Who), Airbnb your home, user menu (globe, hamburger, avatar) |
| **Expanded Search** | Full-width expansion (click search) | Three-panel: Where (map + suggestions), When (calendar, flexible dates), Who (adults, children, infants, pets) |
| **Category Bar** | Horizontal scroll icons below header | Category icons (Beachfront, Cabins, etc.) + Filters button + Display Total toggle |
| **Map/List Toggle** | Bottom-right floating button (mobile) or right panel (desktop) | Switch between list and map view |
| **Listing Detail** | Sticky booking card (desktop right sidebar) | Price, dates, guests, Reserve button — follows scroll |
| **Host/Guest Mode** | Account menu toggle | "Switch to hosting" / "Switch to traveling" |
| **Bottom Nav (mobile)** | Fixed bottom bar | Explore, Wishlists, Trips, Inbox, Profile |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | id, title, description, property_type, room_type (entire/private/shared), guests_max, bedrooms, beds, bathrooms, amenities[], photos[], location (lat/lng, city, country), price_per_night, cleaning_fee, service_fee_pct, cancellation_policy, instant_book, min_nights, max_nights, check_in_time, check_out_time, house_rules | belongs to Host, has Reviews, Reservations |
| Host | id, name, bio, avatar, verified, superhost, response_rate, response_time, member_since, reviews_count | has many Listings |
| Guest | id, name, avatar, verified, reviews_given | has many Reservations |
| Reservation | id, listing, guest, check_in, check_out, guests_count, total_price, status, confirmation_code | belongs to Listing and Guest |
| Review | rating (1-5), text, cleanliness, accuracy, check_in, communication, location, value, response (from host), created_at | from Guest to Listing (and Host to Guest) |
| Wishlist | name, listings[], collaborators[], cover_image | belongs to Guest |
| Experience | id, title, host, location, duration, price, category, photos[], itinerary[], reviews[] | belongs to Experience Host |
| Message | sender, body, timestamp, attachments[] | between Host and Guest |
| Payout | amount, method, arrival_date, status, reservation | belongs to Host |
| Category | name, icon, filter_criteria | global (system-defined) |

### Reservation Status
```
pending → accepted → confirmed → active (checked in) → completed → reviewed
pending → declined
confirmed → cancelled (by guest) → refund_processed
confirmed → cancelled (by host) → penalties_applied
```

### Superhost Criteria
```
Overall rating >= 4.8
Response rate >= 90%
Cancellation rate < 1%
At least 10 stays (or 3 stays totaling 100+ nights) in past year
```

### Review System
Dual-blind: both guest and host write reviews, revealed simultaneously after 14 days (or when both submit).

## User Flows

### Guest: Search to Book
```
Home → Category bar (Beachfront) or Search (Paris, June 15-22, 2 guests) → Map + List results → Filter (Entire Home, Pool) → Click listing card → Photo gallery → Read reviews → Check calendar → Reserve → Payment → Confirmation → Receive check-in instructions 48h before → Check in → Enjoy stay → Check out → Leave review
```

### Guest: Flexible Search ("I'm Flexible")
```
Search → When: "I'm Flexible" (weekend, week, month) → Where: "I'm Flexible" (map regions) → Category → Browse listings → Inspiration-driven browsing (visual, not utilitarian)
```

### Host: Create Listing
```
Airbnb your home → Property type → Room type (entire/private/shared) → Location (pin on map) → Guests, bedrooms, beds, bathrooms → Amenities → Photos (5+ required) → Title → Description → Price (Smart Pricing suggestion) → Availability → House rules → Review → Publish
```

### Host: Manage Reservation
```
Today tab → New reservation notification → Review guest profile → Confirm (if not instant book) → Calendar updates → Send check-in instructions → Guest stays → Checkout → Review guest → Earnings posted → Payout
```

### Dispute Resolution
```
Guest finds issue → Contact Host (message) → If unresolved → Help Center → Resolution Center → File claim → Airbnb mediates → AirCover applies → Refund or rebooking
```

## URL / Route Structure

```
/                              → Home
/s/:location                   → Search Results (map + list)
/s/:location?checkin=:date&checkout=:date&adults=:n → Filtered Search
/rooms/:listingId              → Listing Detail
/rooms/:listingId/photos       → Photo Gallery
/book/stays/:listingId         → Booking Flow
/trips/v1                      → Your Trips
/trips/v1/:reservationId       → Trip Detail
/wishlists                     → Wishlists
/wishlists/:id                 → Wishlist Detail
/inbox                         → Messages
/inbox/:threadId               → Conversation
/users/show/:userId            → Public Profile
/users/:userId/reviews         → User Reviews
/account-settings              → Account Settings
/account-settings/personal-info → Personal Info
/account-settings/payments     → Payments
/hosting                       → Host Dashboard (Today)
/hosting/calendar              → Host Calendar
/hosting/listings              → Manage Listings
/hosting/listings/:id/details  → Edit Listing
/hosting/reservations          → Reservations
/hosting/earnings              → Earnings
/hosting/insights              → Performance Insights
/experiences                   → Experiences
/experiences/:id               → Experience Detail
/help                          → Help Center
/help/article/:id              → Help Article
/gift-cards                    → Gift Cards
```

## Search & Filter

| Filter Dimension | Type | Options |
|-----------------|------|---------|
| Where | Map / Text / Flexible regions | City, country, "I'm Flexible" (regions) |
| When | Calendar / Flexible | Exact dates, "I'm Flexible" (weekend, week, month) |
| Who | Stepper | Adults, Children, Infants, Pets |
| Price | Range slider with histogram | Min-Max per night |
| Type of Place | Checkbox | Entire home, Private room, Shared room, Hotel room |
| Rooms & Beds | Stepper | Bedrooms, Beds, Bathrooms |
| Property Type | Multi-select | House, Apartment, Guesthouse, Hotel |
| Amenities | Checkbox | Wi-Fi, Kitchen, Washer, Pool, Hot Tub, Parking, Air conditioning, Workspace |
| Booking Options | Toggle | Instant Book, Self check-in, Allows pets, Free cancellation |
| Top-Tier Stays | Toggle | Superhost, Guest Favorites |
| Accessibility | Checkbox | Step-free, Wide doorway, Roll-in shower |
| Host Language | Multi-select | English, French, Spanish, etc. |

## Responsive Behavior

| Breakpoint | Search | Results | Listing | Booking |
|------------|--------|---------|---------|---------|
| Desktop (>=1128px) | Inline header bar | Map + list split (60/40) | Full layout + sticky booking card | Inline right sidebar |
| Tablet (744-1127px) | Expandable search | List only (map toggle) | Stacked, booking card inline | Full page |
| Mobile (<744px) | Full-screen overlay | List or map toggle | Stacked, sticky Reserve bar at bottom | Full-screen steps |

### Airbnb-Specific UX
- **Full-bleed photography**: large images, swipeable carousels, grid gallery
- **Category browsing**: horizontal icon bar enables discovery-mode browsing (not just search)
- **Map + List split**: synced interaction (hover card → highlight pin)
- **Flexible search**: "I'm Flexible" for dates AND destination enables wanderlust browsing
- **Price transparency**: toggle to show total price before taxes (regulatory compliance)
- **Dual-blind reviews**: prevents retaliation (both parties submit before either sees)
- **AirCover**: trust and safety branding for host/guest protection
- **Smart Pricing**: dynamic pricing suggestions for hosts based on demand
- **Superhost badge**: visual trust signal prominently displayed
- **Guest Favorite badge**: "One of the most loved homes on Airbnb" (top 5%)
- **Collaborative wishlists**: group trip planning with shared lists
- **Design-forward**: minimalist, magazine-quality visual design

## Access Control

| Role | Browse | Book | Host | Manage | Admin |
|------|--------|------|------|--------|-------|
| Guest (unverified) | ✅ | — (verification required) | — | — | — |
| Guest (verified) | ✅ | ✅ | — | Own reservations | — |
| Host | ✅ | ✅ | ✅ | Own listings + reservations | — |
| Superhost | ✅ | ✅ | ✅ (priority support, bonus visibility) | Own listings | — |
| Co-host | ✅ | ✅ | Manage specific listings (permissions vary) | Assigned listings | — |
| Admin (Airbnb) | ✅ | ✅ | ✅ | All | ✅ |

### Trust & Verification
- Government ID verification (required to book)
- Phone verification
- Email verification
- Social connections (optional — Facebook, Google)
- Reviews (visible history as guest and/or host)
- Background checks (US hosts)
- AirCover insurance (automatic for all bookings)
