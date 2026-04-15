# Travel Booking — Information Architecture

## Overview

A travel planning and booking platform (Booking.com, Expedia, Airbnb style). The mental model is **search → compare → book → travel** — users search for flights, hotels, and experiences by destination and dates, compare options, book and pay, then manage their trips. Trust signals (reviews, photos, refund policies) and price transparency drive conversion.

## Site Map

### Customer-Facing

```
├── Home
│   ├── Search Widget (flights, hotels, packages, cars)
│   ├── Deals / Featured Destinations
│   ├── Trending Destinations
│   ├── Recently Searched
│   ├── Personalized Recommendations
│   └── Inspiration (travel guides, collections)
├── Search Results
│   ├── Flights
│   │   ├── Flight List (outbound)
│   │   ├── Flight Detail (legs, layovers)
│   │   ├── Fare Comparison (economy, business, first)
│   │   └── Filters & Sort
│   ├── Hotels
│   │   ├── Map View / List View Toggle
│   │   ├── Hotel Card (photo, price, rating, amenities)
│   │   └── Filters & Sort
│   ├── Packages (flight + hotel)
│   ├── Car Rentals
│   └── Activities / Experiences
├── Hotel Detail
│   ├── Photo Gallery
│   ├── Description & Amenities
│   ├── Room Types & Availability
│   ├── Map & Location (nearby attractions)
│   ├── Reviews & Ratings
│   ├── House Rules / Policies
│   └── Price Breakdown & Book CTA
├── Flight Detail
│   ├── Itinerary (legs, times, airlines)
│   ├── Fare Classes
│   ├── Baggage Info
│   ├── Seat Selection
│   └── Price Breakdown
├── Booking / Checkout
│   ├── Traveler Details (name, passport, DOB)
│   ├── Contact Info
│   ├── Add-Ons (insurance, baggage, transfers)
│   ├── Payment
│   ├── Promo Code
│   └── Review & Confirm
├── Booking Confirmation
│   ├── Itinerary Summary
│   ├── Confirmation Number
│   ├── Calendar Add
│   └── Download / Email
├── My Trips
│   ├── Upcoming
│   ├── In Progress
│   ├── Past
│   ├── Trip Detail
│   │   ├── Itinerary Timeline
│   │   ├── Booking Details (flight, hotel, car)
│   │   ├── Documents (e-ticket, voucher)
│   │   ├── Check-in Links
│   │   └── Modify / Cancel
│   └── Canceled
├── Account
│   ├── Profile
│   ├── Traveler Profiles (passport info, preferences)
│   ├── Payment Methods
│   ├── Loyalty / Rewards
│   ├── Saved / Wishlist
│   ├── Reviews Written
│   ├── Notifications
│   └── Settings
├── Rewards / Loyalty
│   ├── Points Balance
│   ├── Tier Status
│   ├── Earn & Redeem
│   └── Benefits
├── Help / Support
│   ├── FAQ
│   ├── Manage Booking
│   ├── Cancellation Policy
│   ├── Contact Support
│   └── Travel Advisories
└── Footer
    ├── About
    ├── Careers
    ├── Partner With Us
    ├── Terms & Privacy
    └── Currency / Language Selector
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, search shortcut, currency/language, My Trips, account |
| **Search Tabs** | Horizontal tabs in search widget | Flights, Hotels, Packages, Cars, Activities |
| **Results Filters** | Left sidebar (desktop) / bottom sheet (mobile) | Price, rating, amenities, airlines, stops, times |
| **Map Toggle** | Floating button on results | Switch between list and map view |
| **Trip Timeline** | Vertical stepper in trip detail | Chronological view of all bookings |
| **Breadcrumbs** | Below header | Home > Destination > Hotel Name |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Hotel | name, address, coordinates, star_rating, user_rating, photos[], amenities[], description, check_in_time, check_out_time | has many RoomTypes, Reviews |
| RoomType | name, description, max_guests, bed_type, price_per_night, amenities[], cancellation_policy, availability | belongs to Hotel |
| Flight | airline, flight_number, departure, arrival, duration, stops, aircraft | belongs to FlightRoute |
| FlightRoute | origin, destination, date, legs[] | has many Flights/Fares |
| Fare | class (economy/business/first), price, baggage_included, refundable, change_fee | belongs to Flight |
| Booking | type (flight/hotel/car/package), status, confirmation_code, total_price, travelers[], payment | belongs to User |
| Traveler | first_name, last_name, dob, passport_number, nationality | belongs to User |
| Review | rating (1-10 or 1-5), title, body, categories{location, cleanliness, service}, trip_type, date | belongs to Hotel and User |
| Destination | name, country, description, image, popular_months | has many Hotels, Activities |
| CarRental | provider, vehicle_type, pickup, dropoff, price_per_day, insurance | belongs to Booking |
| Activity | name, description, duration, price, location, images[], availability | belongs to Destination |

### Booking Status Flow
```
searching → selected → payment_pending → confirmed → checked_in → completed
                                          ↘ cancelled / refund_pending / refunded
```

## User Flows

### Search & Book Hotel
```
Home → Search (destination, dates, guests) → Results → Filter/Sort → Hotel Detail → Select Room → Checkout → Traveler Info → Payment → Confirmation
```

### Book Flight
```
Home → Flights Tab → Search (origin, dest, dates, travelers) → Results → Select Outbound → Select Return → Fare Class → Add-Ons → Checkout → Confirmation
```

### Manage Trip
```
My Trips → Upcoming → Trip Detail → View Itinerary / Modify Booking / Add Activity / Cancel
```

### Review After Stay
```
My Trips → Past → Trip Detail → Write Review → Rate Categories → Submit
```

## URL / Route Structure

```
/                                → Home
/flights                         → Flight Search
/flights/results                 → Flight Results
/flights/:id                     → Flight Detail
/hotels                          → Hotel Search
/hotels/results                  → Hotel Results
/hotels/:slug                    → Hotel Detail
/hotels/:slug/reviews            → Hotel Reviews
/packages                        → Package Search
/cars                            → Car Rental Search
/activities/:destination         → Activities
/booking/checkout                → Checkout
/booking/confirmation/:id        → Booking Confirmation
/trips                           → My Trips
/trips/:id                       → Trip Detail
/trips/:id/documents             → Travel Documents
/account                         → Account
/account/travelers               → Traveler Profiles
/account/rewards                 → Loyalty / Rewards
/account/saved                   → Wishlist
/help                            → Help Center
/destinations/:slug              → Destination Guide
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Hotels | Destination, hotel name | Price Range, Star Rating, User Rating, Amenities (wifi, pool, parking), Property Type, Distance to Center, Cancellation Policy, Meal Plan | Price, Rating, Distance, Popularity |
| Flights | Origin, Destination | Stops (nonstop, 1, 2+), Airlines, Departure Time, Duration, Price Range, Fare Type (refundable) | Price, Duration, Departure, Arrival |
| Cars | Pickup location | Vehicle Type, Provider, Transmission, Price | Price, Vehicle Size |
| Activities | Destination | Category, Price, Duration, Rating | Popular, Price, Rating |

### Search Autocomplete
Search bar suggests: destinations (with country), airports (with code), hotels, landmarks

## Responsive Behavior

| Breakpoint | Search | Results | Detail | Booking |
|------------|--------|---------|--------|---------|
| Desktop (≥1024px) | Inline search bar with all fields | List + map split view | Gallery + info side by side | Multi-column form |
| Tablet (768–1023px) | Stacked search fields | List or map toggle | Full-width gallery, stacked info | Single column |
| Mobile (<768px) | Search modal/sheet | Vertical cards, map via toggle | Swipe gallery, accordion sections | Step-by-step flow |

### Mobile Adaptations
- Swipeable photo galleries
- Pull-to-refresh results
- Sticky price/book bar on detail pages
- Date picker optimized for touch (calendar scroll)
- Offline access to booking confirmations
- Push notifications for price drops and check-in reminders

## Access Control

| Role | Search | Book | Manage Trips | Reviews | Loyalty |
|------|--------|------|-------------|---------|---------|
| Guest | ✅ | ✅ (guest checkout) | — | — | — |
| Registered User | ✅ | ✅ (saved info) | ✅ | ✅ | ✅ |
| Loyalty Member | ✅ | ✅ + member rates | ✅ | ✅ | Full benefits |
| Property Partner | — | — | — | Respond to reviews | — |
| Admin | ✅ | ✅ | All bookings | Moderate | Manage program |
