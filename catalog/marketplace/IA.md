# Marketplace — Information Architecture

## Overview

A two-sided platform connecting buyers and sellers (Airbnb, Etsy, Uber style). The mental model is a **matchmaking engine** — one side lists offerings, the other side searches and transacts. Trust (reviews, verification) is central.

## Site Map

### Buyer Side

```
├── Home
│   ├── Search Bar (prominent)
│   ├── Featured / Curated Collections
│   ├── Categories
│   ├── Near You / Personalized
│   └── Recently Viewed
├── Search / Browse
│   ├── Results (map + list or grid)
│   ├── Faceted Filters
│   └── Map View (if location-based)
├── Listing Detail
│   ├── Photos / Media Gallery
│   ├── Title, Description, Price
│   ├── Seller / Host Profile (mini)
│   ├── Availability / Calendar
│   ├── Reviews & Ratings
│   ├── Location (map)
│   ├── Policies (cancellation, rules)
│   └── Similar Listings
├── Booking / Purchase Flow
│   ├── Select Options (dates, quantity)
│   ├── Review & Confirm
│   ├── Payment
│   └── Confirmation
├── Inbox / Messages
│   ├── Conversations with Sellers
│   └── Booking Inquiries
├── Trips / Orders
│   ├── Upcoming
│   ├── Past
│   └── Detail (itinerary, receipt, review)
├── Wishlist / Saved
├── Account
│   ├── Profile
│   ├── Payment Methods
│   ├── Reviews Given
│   ├── Settings
│   └── Help
└── Become a Seller (CTA)
```

### Seller Side

```
├── Seller Dashboard
│   ├── Performance Overview
│   ├── Earnings Summary
│   └── Action Items
├── Listings
│   ├── Active Listings
│   ├── Create / Edit Listing
│   │   ├── Photos
│   │   ├── Details & Description
│   │   ├── Pricing & Availability
│   │   ├── Location
│   │   └── Policies
│   └── Drafts / Inactive
├── Bookings / Orders
│   ├── Incoming Requests
│   ├── Confirmed
│   ├── Completed
│   └── Cancelled
├── Messages
├── Reviews (received)
├── Earnings / Payouts
│   ├── Transaction History
│   ├── Payout Methods
│   └── Tax Documents
├── Analytics
└── Seller Settings
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, search bar (expandable), Become a Seller, user menu |
| **Category Nav** | Below header or within search | Category pills / tabs |
| **Listing Filters** | Sidebar or top bar | Price, rating, type, dates, amenities |
| **Map + List** | Split view (desktop) | Synced: hover on list highlights map pin |
| **Seller Nav** | Left sidebar (seller mode) | Dashboard, Listings, Bookings, Messages, Earnings |
| **Mode Switch** | Header toggle | Switch between Buyer ↔ Seller mode |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | name, avatar, bio, verified, rating, member_since | can be Buyer and/or Seller |
| Listing | title, description, photos[], price, location, category, availability, status | belongs to Seller, has many Bookings, Reviews |
| Booking | listing, buyer, dates, guests, total, status | belongs to Listing and Buyer |
| Review | rating, text, response, created_at | from Buyer to Listing, Seller can respond |
| Message | body, attachments, read | between Buyer and Seller |
| Payout | amount, status, method, date | belongs to Seller |
| Category | name, icon, parent | hierarchical |

### Trust Signals
- Verified identity badge
- Superhost / Top Seller badge
- Response rate & time
- Number of reviews + average rating

## User Flows

### Buyer: Search to Book
```
Home → Search (location + dates) → Filter Results → View Listing → Check Availability → Book → Payment → Confirmation
```

### Seller: List to Earn
```
Become a Seller → Create Listing (multi-step) → Publish → Receive Booking → Confirm → Fulfill → Get Paid → Get Reviewed
```

## URL / Route Structure

```
/                              → Home
/s/:location                   → Search Results
/s/:location?category=:cat     → Filtered Search
/listing/:id                   → Listing Detail
/book/:listingId               → Booking Flow
/trips                         → Buyer's Trips
/trips/:id                     → Trip Detail
/wishlist                      → Saved Listings
/messages                      → Inbox
/messages/:id                  → Conversation
/users/:id                     → Public Profile
/account                       → Account Settings
/hosting                       → Seller Dashboard
/hosting/listings              → Manage Listings
/hosting/listings/new          → Create Listing
/hosting/listings/:id/edit     → Edit Listing
/hosting/bookings              → Manage Bookings
/hosting/earnings              → Earnings
```

## Search & Filter

| Filter Dimension | Type | Examples |
|-----------------|------|---------|
| Location | Map / Text | City, neighborhood, coordinates |
| Dates | Date picker | Check-in / Check-out |
| Price | Range slider | $0 – $1000+ |
| Category | Multi-select | Type of listing |
| Rating | Min threshold | 4+ stars |
| Amenities | Checkbox | Wi-Fi, parking, pool |
| Instant Book | Toggle | Skip approval |

## Responsive Behavior

| Breakpoint | Search | Results | Listing |
|------------|--------|---------|---------|
| Desktop | Inline header bar | Grid + map split | Full layout |
| Tablet | Expandable search | Grid (map toggle) | Full layout |
| Mobile | Full-screen search overlay | List (map toggle) | Stacked, sticky book bar |

## Access Control

| Role | Browse | Book | List | Manage | Admin |
|------|--------|------|------|--------|-------|
| Guest | ✅ | — | — | — | — |
| Buyer | ✅ | ✅ | — | Own bookings | — |
| Seller | ✅ | ✅ | ✅ | Own listings | — |
| Admin | ✅ | ✅ | ✅ | All | ✅ |
