# Real Estate — Information Architecture

## Overview

A real estate listing and property search platform (Zillow, Realtor.com, Rightmove style). The mental model is **search → explore → shortlist → contact/apply** — users search for properties to buy or rent by location and criteria, explore listings with photos and details, save favorites, and connect with agents or landlords. Map-centric discovery and rich media (photos, virtual tours) are essential.

## Site Map

### Buyer / Renter Facing

```
├── Home
│   ├── Search Bar (location, buy/rent toggle)
│   ├── Featured Listings
│   ├── Popular Neighborhoods
│   ├── Recently Viewed
│   ├── Saved Searches
│   ├── Market Trends (prices, inventory)
│   └── Guides (first-time buyer, renting tips)
├── Search Results
│   ├── Map View (pins with prices)
│   ├── List View (grid/list toggle)
│   ├── Listing Cards (photo, price, beds, baths, sqft, address)
│   ├── Filters Panel
│   ├── Save Search Alert
│   └── Pagination / Infinite Scroll
├── Listing Detail
│   ├── Photo Gallery / Virtual Tour
│   ├── Price & Key Facts (beds, baths, sqft, year built)
│   ├── Description
│   ├── Features & Amenities
│   ├── Floor Plan
│   ├── Map & Street View
│   ├── Neighborhood Info
│   │   ├── Walk Score / Transit Score
│   │   ├── Schools
│   │   ├── Nearby Amenities
│   │   └── Crime Stats
│   ├── Price History
│   ├── Tax & Financial Info
│   ├── Mortgage Calculator
│   ├── Similar Listings
│   ├── Agent Info & Contact Form
│   └── Open House Schedule
├── Agent / Landlord Profile
│   ├── Bio & Credentials
│   ├── Active Listings
│   ├── Sold History
│   ├── Reviews
│   └── Contact
├── Saved
│   ├── Saved Listings (favorites)
│   ├── Saved Searches (with alerts)
│   └── Collections / Lists
├── Account
│   ├── Profile
│   ├── Search Preferences
│   ├── Notification Settings
│   ├── Pre-Approval Status
│   └── Settings
├── Mortgage / Finance
│   ├── Mortgage Calculator
│   ├── Pre-Approval Application
│   ├── Lender Comparison
│   └── Affordability Estimator
├── Guides & Resources
│   ├── Buying Guide
│   ├── Renting Guide
│   ├── Selling Guide
│   ├── Market Reports
│   └── Neighborhood Guides
├── Help
│   ├── FAQ
│   ├── Contact Support
│   └── Report Listing
└── Footer
    ├── About
    ├── Careers
    ├── For Agents
    ├── Terms & Privacy
    └── Accessibility
```

### Agent / Landlord Portal

```
├── Dashboard
│   ├── Active Listings Summary
│   ├── Inquiries / Leads (new, follow-up)
│   ├── Showing Schedule
│   ├── Performance Metrics (views, saves, inquiries)
│   └── Market Insights
├── My Listings
│   ├── Active
│   ├── Pending
│   ├── Sold / Rented
│   ├── Draft
│   └── Create / Edit Listing
│       ├── Property Details (type, beds, baths, sqft)
│       ├── Description
│       ├── Photos / Virtual Tour Upload
│       ├── Floor Plan
│       ├── Pricing (sale price / rent)
│       ├── Amenities & Features
│       ├── Open House Scheduling
│       └── Publish
├── Leads / Inquiries
│   ├── All Leads
│   ├── Lead Detail (contact info, interested property, notes)
│   ├── Lead Status (new, contacted, showing, offer, closed)
│   └── Communication Log
├── Showings
│   ├── Calendar View
│   ├── Scheduled Showings
│   └── Feedback from Buyers
├── Analytics
│   ├── Listing Views & Saves
│   ├── Inquiry Sources
│   ├── Market Comparables (comps)
│   └── Days on Market
├── Profile
│   ├── Public Profile Editor
│   ├── Credentials & Licenses
│   └── Reviews
└── Settings
    ├── Notification Preferences
    ├── Team Members
    └── Subscription / Plan
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, Buy/Rent/Sell toggle, search, Saved (heart badge), Sign In |
| **Search Bar** | Prominent on home, persistent in header | Location autocomplete + Buy/Rent toggle |
| **Map** | Split-screen or full-screen toggle | Interactive map with price pins, draw-to-search |
| **Filters** | Sidebar (desktop) / bottom sheet (mobile) | Price, beds, baths, property type, sqft, more |
| **Listing Tabs** | Tabs on detail page | Overview, Features, Neighborhood, History |
| **Agent CTA** | Sticky sidebar or bottom bar | Contact form / Schedule Showing always visible |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | address, coordinates, price, status (active/pending/sold), type (house/condo/apartment/townhouse), beds, baths, sqft, lot_size, year_built, description, features[], photos[], virtual_tour_url, mls_number | belongs to Agent, has many OpenHouses, PriceHistory |
| Agent | name, photo, brokerage, phone, email, license_number, bio, rating, sales_count | has many Listings |
| OpenHouse | listing, date, start_time, end_time | belongs to Listing |
| PriceHistory | date, price, event (listed/reduced/sold) | belongs to Listing |
| SavedSearch | location, filters, alert_frequency | belongs to User |
| Neighborhood | name, city, state, walk_score, transit_score, schools[], median_price, description | has many Listings |
| Lead | user, listing, message, status, source | belongs to Agent |
| Mortgage | loan_amount, interest_rate, term, monthly_payment, down_payment | calculator entity |
| Review | rating, text, reviewer_type (buyer/seller/renter) | belongs to Agent |

### Listing Status Flow
```
draft → active → pending → sold/rented
         ↘ withdrawn / expired
```

## User Flows

### Search & Save
```
Home → Enter Location → Results (map + list) → Filter (beds, price) → Browse → Save Listing → Set Alert
```

### View & Inquire
```
Results → Listing Detail → Photo Gallery → Mortgage Calculator → Contact Agent → Schedule Showing
```

### Agent: List Property
```
Dashboard → [+ New Listing] → Property Details → Upload Photos → Set Price → Preview → Publish
```

### Agent: Manage Lead
```
Leads → New Inquiry → Review → Contact Buyer → Schedule Showing → Record Feedback → Update Status
```

## URL / Route Structure

### Buyer / Renter
```
/                                → Home
/buy                             → Buy Search
/rent                            → Rent Search
/homes/:location                 → Search Results (location-based)
/homes/:location/map             → Map View
/listing/:id                     → Listing Detail
/listing/:id/photos              → Photo Gallery
/listing/:id/virtual-tour        → Virtual Tour
/agent/:id                       → Agent Profile
/saved                           → Saved Listings
/saved-searches                  → Saved Searches
/mortgage-calculator             → Mortgage Calculator
/pre-approval                    → Pre-Approval
/guides/:slug                    → Guide Article
/neighborhood/:slug              → Neighborhood Detail
/account                         → Account
/help                            → Help Center
```

### Agent Portal
```
/portal                          → Dashboard
/portal/listings                 → My Listings
/portal/listings/new             → Create Listing
/portal/listings/:id/edit        → Edit Listing
/portal/leads                    → Leads
/portal/leads/:id                → Lead Detail
/portal/showings                 → Showings Calendar
/portal/analytics                → Analytics
/portal/profile                  → Profile Editor
/portal/settings                 → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Buy | Address, city, zip, neighborhood, MLS# | Price Range, Beds, Baths, Property Type, Sqft, Lot Size, Year Built, Parking, HOA, Open House, Keywords | Price, Newest, Sqft, Lot Size |
| Rent | Address, city, zip | Rent Range, Beds, Baths, Property Type, Pet Policy, Laundry, Parking, Lease Term, Move-in Date | Price, Newest, Sqft |
| Map | Draw area, zoom level | Same as above + Map boundary | — |
| Agent Listings | Address, MLS# | Status, Price, Days on Market | Date Listed, Price, Views |

### Search Autocomplete
Search bar suggests: cities, neighborhoods, zip codes, addresses, schools, MLS numbers

## Responsive Behavior

| Breakpoint | Search | Results | Listing Detail | Agent Contact |
|------------|--------|---------|---------------|---------------|
| Desktop (≥1024px) | Full search bar | Map + list split (60/40) | Gallery + info + sidebar agent card | Sticky right sidebar |
| Tablet (768–1023px) | Compact search | Map or list toggle | Full-width gallery, stacked | Floating CTA button |
| Mobile (<768px) | Search modal on tap | Cards (swipeable), map via toggle | Swipe gallery, accordion, sticky contact bar | Bottom sticky bar |

### Mobile Adaptations
- Swipeable photo galleries with counter
- Map with clustering for dense areas
- Draw-on-map search with finger
- Save listing with heart icon (no page reload)
- Share listing via native share sheet
- Push alerts for new listings matching saved search
- AR view (point camera, see listings overlaid)

## Access Control

### Buyer / Renter
| Role | Browse | Save | Contact | Mortgage Tools | Reviews |
|------|--------|------|---------|---------------|---------|
| Guest | ✅ | — | ✅ (enter info) | ✅ | — |
| Registered | ✅ | ✅ | ✅ (saved info) | ✅ | ✅ |

### Agent Portal
| Role | Dashboard | Listings | Leads | Analytics | Settings |
|------|-----------|---------|-------|-----------|----------|
| Agent | ✅ | Own CRUD | Own | Own listings | ✅ |
| Team Lead | ✅ | Team CRUD | Team | Team | ✅ |
| Broker | ✅ | Office CRUD | Office | Office | ✅ |
| Admin | ✅ | All | All | All | ✅ |
