---
brand: Zillow
tagline: "Find your way home. The most-visited real estate website in the US."
category: Real Estate
website: https://zillow.com
---

# Zillow — Information Architecture

## Overview

Zillow is the dominant US real estate platform where 200M+ monthly users search for homes to buy, rent, or sell. The mental model is **browse the housing market like a shopping app** — map-based search, rich photo galleries, and the signature "Zestimate" (Zillow's AI home value estimate). Key differentiator: Zillow estimates the value of every home in America, even those not for sale, turning it into a spectator sport ("What's my neighbor's house worth?"). The IA spans buyers, renters, sellers, and agents.

## Site Map

```
├── Home
│   ├── Search Bar ("Enter an address, neighborhood, city, or ZIP code")
│   ├── Buy / Rent / Sell Tabs
│   ├── Saved Homes
│   ├── Recently Viewed
│   ├── Recommended Homes
│   ├── Trending Markets
│   └── Mortgage Rates Widget
├── Search Results (Buy)
│   ├── Map View (left, interactive)
│   │   ├── Property Pins (with prices)
│   │   ├── Zoom → Auto-Refresh Results
│   │   ├── Draw to Search (draw boundary on map)
│   │   └── School Overlay
│   ├── List View (right, scrollable)
│   │   ├── Property Cards
│   │   │   ├── Photo(s)
│   │   │   ├── Price + Price Change
│   │   │   ├── Beds / Baths / Sqft
│   │   │   ├── Address
│   │   │   ├── Listing Type (For Sale, Pending, Sold, Coming Soon)
│   │   │   ├── Heart (save)
│   │   │   └── Days on Zillow
│   │   └── Infinite Scroll
│   ├── Filters Bar
│   │   ├── Price Range
│   │   ├── Beds / Baths
│   │   ├── Home Type (House, Condo, Townhouse, Multi-family, Land, Manufactured)
│   │   ├── More Filters
│   │   │   ├── Square Feet
│   │   │   ├── Lot Size
│   │   │   ├── Year Built
│   │   │   ├── HOA
│   │   │   ├── Parking
│   │   │   ├── Days on Zillow
│   │   │   ├── Keywords (pool, garage, waterfront)
│   │   │   ├── 3D Tour Available
│   │   │   ├── Open House
│   │   │   └── Listing Status
│   │   └── Save Search (with email alerts)
│   └── Sort (Homes for You, Price, Newest, Sqft, Lot Size)
├── Search Results (Rent)
│   ├── Similar Map + List Layout
│   ├── Filters (Price, Beds, Baths, Pet Policy, Laundry, Parking)
│   └── Apply Online Badge
├── Property Detail (For Sale)
│   ├── Photo Gallery (full-screen, 30+ photos)
│   ├── 3D Home Tour (Matterport)
│   ├── Price + Zestimate Comparison
│   ├── Key Facts (beds, baths, sqft, year built, lot, parking)
│   ├── "What's special" (AI-generated highlights)
│   ├── Description
│   ├── Interior Features
│   ├── Property Details (construction, utilities, HOA)
│   ├── Map & Location
│   │   ├── Street View
│   │   ├── Nearby Schools (ratings from GreatSchools)
│   │   ├── Walk Score / Transit Score / Bike Score
│   │   ├── Neighborhood
│   │   └── Commute Time Calculator
│   ├── Price & Tax History
│   │   ├── Zestimate History (chart)
│   │   ├── Price Changes
│   │   ├── Sales History
│   │   └── Property Tax
│   ├── Monthly Payment Estimate
│   │   ├── Mortgage Calculator (interactive)
│   │   ├── Principal + Interest
│   │   ├── Property Tax
│   │   ├── Insurance
│   │   ├── HOA
│   │   └── Down Payment Slider
│   ├── Agent Info + Contact Form
│   ├── Open House Schedule
│   ├── Similar Homes
│   └── Nearby Recently Sold
├── Property Detail (Not For Sale)
│   ├── Zestimate (estimated value)
│   ├── Zestimate Range (low to high)
│   ├── Rent Zestimate
│   ├── Tax Assessment
│   ├── Home Facts (public records)
│   ├── Price History
│   ├── Owner Tools ("Is this your home?")
│   └── Claim This Home
├── Sell
│   ├── Zillow Home Value (enter address → see Zestimate)
│   ├── Compare Agents
│   │   ├── Agent List (local, by sales volume)
│   │   ├── Agent Profile (bio, sales, reviews, listings)
│   │   └── Contact Agent
│   ├── Seller's Guide
│   └── List Your Home
├── Agent Finder
│   ├── Search by Location
│   ├── Agent Cards (photo, name, sales, rating)
│   ├── Agent Profile
│   │   ├── Active Listings
│   │   ├── Past Sales
│   │   ├── Reviews
│   │   ├── Service Areas
│   │   └── Contact
│   └── Premier Agent (paid placement)
├── Mortgage
│   ├── Mortgage Calculator
│   ├── Current Rates
│   ├── Pre-Qualification
│   ├── Lender Directory
│   ├── Refinance Calculator
│   └── Affordability Calculator
├── Saved
│   ├── Saved Homes (hearted properties)
│   ├── Saved Searches (with email/push alerts)
│   ├── Saved Agents
│   └── Collections (custom lists)
├── Account
│   ├── Profile
│   ├── Notification Settings (email frequency, push)
│   ├── Search Preferences
│   ├── My Home (claim ownership, track value)
│   └── Settings
├── Resources
│   ├── Buying Guide
│   ├── Renting Guide
│   ├── Selling Guide
│   ├── Market Data (by metro, by ZIP)
│   ├── Neighborhood Guide
│   └── Zillow Research (data reports)
└── Help
    ├── FAQ
    ├── Contact
    └── Report Listing
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Fixed top bar | Logo, Buy/Rent/Sell tabs, Search, Saved, Sign In |
| **Search Bar** | Prominent, always in header | Autocomplete: city, ZIP, neighborhood, address, school |
| **Map + List** | Split-screen (60/40 desktop) | Map pins update as you scroll list |
| **Filters Bar** | Horizontal above results | Quick filters + "More Filters" expandable |
| **Property Page** | Long scrollable page | Photos → Price → Details → Map → History → Agent |
| **Mobile Bottom Sheet** | Draggable | Collapsed: search. Half: results. Full: property detail |
| **Mortgage Calculator** | Interactive widget on property page | Sliders for down payment, rate, term |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | zpid, address, coordinates, price, zestimate, status (for_sale/pending/sold/off_market), beds, baths, sqft, lot_size, year_built, home_type, photos[], description, features{}, mls_number, days_on_zillow | has PriceHistory, Agent |
| Zestimate | property, estimated_value, range_low, range_high, rent_zestimate, last_updated | belongs to Property |
| PriceHistory | date, event (listed/price_change/sold), price, source | belongs to Property |
| Agent | name, photo, brokerage, phone, sales_count, rating, reviews_count, active_listings[], premier | has Listings |
| SavedSearch | location, filters, alert_frequency (instant/daily/weekly) | belongs to User |
| School | name, rating (1-10), grades, distance, type (public/private/charter) | nearby Listings |
| Neighborhood | name, walk_score, transit_score, bike_score, median_value, data{} | geographic area |
| MortgageRate | type (30yr/15yr/ARM), rate, apr, date | market data |

### Listing Status
```
coming_soon → for_sale → pending → sold
                         ↘ withdrawn / expired
```

## User Flows

### Search and Save Homes
```
Home → Search "Austin, TX" → Map + List → Filter (3+ bed, $400K-$600K, House) → Browse → Heart Favorite Homes → Save Search → Get Daily Email Alerts for New Listings
```

### Check Home Value
```
Home → Sell Tab → Enter Address → Zestimate: $485,000 (range $460K-$510K) → Price History Chart → Comparable Sales → "Thinking of selling?" → Contact Agent
```

### Calculate Mortgage
```
Property Page → Scroll to Payment Estimate → Adjust Down Payment (20%) → See Monthly: $2,450 → Change Rate → See Updated → "Get Pre-Qualified" → Zillow Home Loans
```

### Contact Agent
```
Property Page → Agent Card → [Contact Agent] → "I'm interested in this home" → Send → Agent Responds
```

## URL / Route Structure

```
/                              → Home
/homes/:location               → Buy Search Results
/homes/:location/rentals       → Rent Search Results
/homedetails/:address/:zpid    → Property Detail
/homes/recently-sold/:location → Recently Sold
/mortgage-calculator           → Mortgage Calculator
/mortgage-rates                → Current Rates
/pre-qualification             → Pre-Qualification
/agents/:location              → Agent Finder
/agents/:slug                  → Agent Profile
/sell                          → Sell Your Home
/home-values/:location         → Home Values
/rental-manager                → Landlord Tools
/saved-homes                   → Saved Homes
/saved-searches                → Saved Searches
/my-home                       → My Home Dashboard
/guides/:slug                  → Resource Guide
/research                      → Market Research
/account                       → Account Settings
/help                          → Help Center
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Buy | Address, city, ZIP, neighborhood, school district | Price, Beds, Baths, Home Type, Sqft, Lot, Year Built, HOA, Parking, Days on Zillow, Open House, Keywords, 3D Tour, Status | Homes for You, Price, Newest, Sqft, Lot |
| Rent | Address, city, ZIP | Price, Beds, Baths, Home Type, Pets, Laundry, Parking, Amenities, Move-in Date | Price, Newest, Sqft |
| Agents | Name, location | Specialization, Reviews, Sales Volume | Recommended, Sales, Reviews |
| Map | Draw boundary, zoom | Same as buy/rent | — |

## Responsive Behavior

| Breakpoint | Search/Results | Property | Mortgage |
|------------|---------------|----------|----------|
| Desktop (≥1024px) | Map + list split (60/40) | Full gallery + two-column | Interactive calculator |
| Tablet (768–1023px) | Map or list toggle | Full-width gallery | Simplified calculator |
| Mobile (<768px) | Cards with map toggle | Swipe gallery, accordion, sticky contact | Full calculator |

### Zillow-Specific UX
- Zestimate on every property (even off-market) — turns browsing into a game
- Map search: zoom in → results auto-update
- Draw-on-map: draw a custom boundary to search
- School ratings from GreatSchools (1-10) overlay on map
- Walk/Transit/Bike scores prominent on listings
- Price history graph (see when it was last sold and for how much)
- "Save search" with instant, daily, or weekly email alerts
- 3D home tours (Matterport integration)
- Mortgage calculator built into every listing
- "My Home" dashboard for homeowners (track value, refinance)

## Access Control

| Role | Browse | Save | Contact | Zestimate | Reviews |
|------|--------|------|---------|-----------|---------|
| Guest | ✅ | — | ✅ (enter info) | ✅ | — |
| Registered | ✅ | ✅ (saved + alerts) | ✅ | ✅ | ✅ |
| Homeowner | ✅ | ✅ | ✅ | ✅ (own home insights) | ✅ |
| Agent | ✅ | ✅ | ✅ | ✅ | ✅ |
| Premier Agent | ✅ | ✅ | Featured placement | ✅ | ✅ |
