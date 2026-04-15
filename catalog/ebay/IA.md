---
brand: eBay
tagline: "The world's online marketplace. Buy and sell new, used, and unique items through auction or fixed price."
category: Auction
website: https://www.ebay.com
---

# eBay — Information Architecture

## Overview

eBay is the world's largest online auction and marketplace, supporting both auction-style and fixed-price ("Buy It Now") listings. The mental model is **competitive buying** — bidders compete for items within time windows, creating urgency and potentially below-market pricing, while Buy It Now offers instant purchase for those who prefer certainty. eBay differentiates through its auction mechanics (proxy bidding, sniping culture, reserve prices), massive category breadth (from electronics to collectibles to cars), Authenticity Guarantee for luxury items, seller feedback system (the original trust mechanism of e-commerce), and eBay Motors for vehicle sales. It serves both consumer-to-consumer and business-to-consumer transactions.

## Site Map

### Buyer Side

```
├── Home
│   ├── Search Bar (dominant)
│   ├── Saved / Personalized (recently viewed, watched, recommended)
│   ├── Trending Now
│   ├── Daily Deals
│   ├── Category Cards (Electronics, Fashion, Collectibles, etc.)
│   ├── eBay Refurbished
│   ├── Popular Destinations (eBay Motors, Sneakers, Trading Cards)
│   └── Seasonal Promotions
├── Categories
│   ├── All Categories (massive tree, 30+ top-level)
│   │   ├── Electronics
│   │   ├── Collectibles & Art
│   │   ├── Fashion
│   │   ├── Home & Garden
│   │   ├── Sporting Goods
│   │   ├── Toys & Hobbies
│   │   ├── Motors (vehicles + parts)
│   │   ├── Business & Industrial
│   │   └── ... (30+ categories, each with deep subcategories)
│   └── Category Page (subcategories, featured items)
├── Search Results
│   ├── Listing Cards
│   │   ├── Image
│   │   ├── Title (detailed, keyword-rich)
│   │   ├── Price (current bid or BIN price)
│   │   ├── Shipping Cost (or Free Shipping badge)
│   │   ├── Bids Count + Time Left (auction)
│   │   ├── Buy It Now Price (if hybrid)
│   │   ├── Condition (New, Open Box, Refurbished, Used)
│   │   ├── Seller Info (username, rating %, feedback score)
│   │   ├── Top Rated Plus Badge
│   │   ├── Authenticity Guarantee Badge
│   │   └── Watch Button (heart/eye)
│   ├── Left Sidebar Filters
│   │   ├── Category (auto-refined)
│   │   ├── Condition (New, Open Box, Certified Refurbished, Used, For Parts)
│   │   ├── Price (range)
│   │   ├── Buying Format (All, Auction, Buy It Now, Accepts Offers)
│   │   ├── Item Location (US, worldwide)
│   │   ├── Delivery Options (Free Shipping, local pickup)
│   │   ├── Seller (Top Rated, eBay Refurbished)
│   │   ├── Show Only (Free Returns, Sold Items, Completed Items, Authenticity Guarantee)
│   │   └── Category-Specific (brand, model, size, color, etc.)
│   ├── Sort (Best Match, Price + Shipping (low/high), Ending Soonest, Newly Listed)
│   ├── View Toggle (gallery / list / compact)
│   └── Save This Search (with email alerts)
├── Listing Detail
│   ├── Images (zoom, up to 24 photos)
│   ├── Title
│   ├── Condition (with condition description)
│   ├── Pricing
│   │   ├── Auction: Current Bid + # Bids + Time Left (countdown)
│   │   ├── Buy It Now Price
│   │   ├── Best Offer (Make Offer button)
│   │   └── Price Trend (price history for similar items)
│   ├── Bid Panel / Buy Box
│   │   ├── Place Bid (enter max bid → proxy bidding)
│   │   ├── Buy It Now
│   │   ├── Make Offer (negotiate)
│   │   ├── Add to Cart
│   │   ├── Add to Watchlist
│   │   └── "You are the highest bidder" / "You've been outbid"
│   ├── Bid History (list of bids, bidder IDs anonymized)
│   ├── Seller Info
│   │   ├── Username, Rating (99.8% positive), Feedback Score
│   │   ├── Member Since
│   │   ├── Top Rated Seller Badge
│   │   ├── Visit Store
│   │   ├── Contact Seller
│   │   └── Save This Seller
│   ├── Item Specifics (brand, model, color, size — structured attributes)
│   ├── Item Description (HTML, seller-authored)
│   ├── Shipping Details (cost, service, estimated delivery, returns)
│   ├── Return Policy (30 days, seller-paid / buyer-paid)
│   ├── Payment Methods (eBay Managed Payments)
│   ├── Buyer Protection ("eBay Money Back Guarantee")
│   ├── Authenticity Guarantee (for eligible categories)
│   ├── Similar Items / Sponsored
│   └── Report Item
├── My eBay
│   ├── Summary (action items)
│   ├── Watchlist (with countdown timers)
│   ├── Recently Viewed
│   ├── Bids/Offers
│   │   ├── Bidding (active bids + status)
│   │   ├── Best Offers (made / received)
│   │   ├── Didn't Win
│   │   └── Won
│   ├── Purchase History
│   ├── Saved Searches (with alerts)
│   ├── Saved Sellers
│   ├── Messages
│   └── Account (settings, addresses, payments)
├── Cart / Checkout
│   ├── Cart (Buy It Now + won auction items)
│   ├── Shipping Address
│   ├── Payment (managed payments: card, PayPal, Apple Pay, Google Pay)
│   ├── eBay Bucks / Gift Cards
│   └── Order Confirmation
├── Deals
│   ├── Daily Deals
│   ├── Featured Deals
│   ├── Category Deals
│   └── Coupon Offers
├── eBay Refurbished
│   ├── Certified, Excellent, Very Good, Good conditions
│   └── Allstate warranty included
├── eBay Motors
│   ├── Vehicle Search (make, model, year)
│   ├── Vehicle Listing (VIN, history report, inspection)
│   ├── Parts & Accessories
│   └── Vehicle Purchase Protection
├── Help & Contact
│   ├── Help Center
│   ├── Resolution Center (open case, dispute)
│   ├── Money Back Guarantee
│   ├── Report Item
│   └── Contact eBay Support
└── Footer
    ├── eBay Community, Announcements, Policies
    ├── Affiliates, Developers (API)
    └── Country Sites
```

### Seller Hub

```
├── Overview (sales today, sold/shipped/to-do, performance)
├── Orders
│   ├── Awaiting Shipment
│   ├── Paid & Shipped
│   ├── Cancellations
│   ├── Returns
│   └── Order Detail (buyer info, shipping label, invoice)
├── Listings
│   ├── Active
│   ├── Unsold / Ended
│   ├── Drafts
│   ├── Scheduled
│   └── Business Policies (shipping, return, payment presets)
├── Sell Item (Create Listing)
│   ├── Category Selection (guided or search)
│   ├── Item Specifics (product ID / catalog match)
│   ├── Photos (up to 24)
│   ├── Title & Description
│   ├── Pricing & Format
│   │   ├── Auction (starting price, reserve, duration: 1/3/5/7/10 days)
│   │   ├── Buy It Now (fixed price)
│   │   ├── Auction + BIN
│   │   └── Best Offer (auto-accept/decline rules)
│   ├── Shipping (free/calculated/flat rate, service, handling time)
│   ├── Returns Policy
│   ├── Item Location
│   └── List / Schedule
├── Marketing
│   ├── Promoted Listings (Standard — cost per sale, Advanced — CPC)
│   ├── Sales Events (markdown, coupons)
│   ├── Volume Pricing
│   └── Listing Promotions
├── Performance
│   ├── Seller Level (Top Rated, Above Standard, Below Standard)
│   ├── Service Metrics (defect rate, late shipment, cases)
│   ├── Seller Dashboard (conversion, impressions)
│   └── Traffic Reports
├── Payments
│   ├── Earnings & Payouts
│   ├── Fees (listing, final value, promoted listing)
│   ├── Financial Statements
│   ├── Payout Schedule
│   └── 1099-K (tax)
├── Growth
│   ├── Listing Quality Report
│   ├── Terapeak (market research: pricing, demand, competition)
│   ├── Sourcing Recommendations
│   └── International Selling
└── Research (Terapeak)
    ├── Product Research (avg price, sell-through rate)
    ├── Sourcing Research
    └── Competitive Analysis
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar (two tiers) | Row 1: eBay logo, shop by category, search bar, advanced search, sell, My eBay, cart. Row 2: category links |
| **Category Menu** | Flyout mega menu | Multi-level category tree |
| **Left Sidebar** | On search/browse pages | Faceted filtering |
| **Breadcrumbs** | Below header | eBay > Category > Subcategory |
| **Bid Panel** | Sticky sidebar (desktop) / bottom bar (mobile) | Current bid, time left, Place Bid button |
| **Watchlist Quick Access** | Header icon with count | Dropdown of watched items with countdowns |
| **Seller Hub Nav** | Left sidebar or top tabs | Overview, Orders, Listings, Marketing, Performance, Payments |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | id, title, category, condition, images[], description_html, start_price, buy_it_now_price, reserve_price, format (auction/BIN/both/offer), duration, start_time, end_time, quantity, item_specifics{}, location, seller | has Bids |
| Bid | amount, max_bid (proxy), bidder (anonymized), timestamp | belongs to Listing |
| Seller | user_id, feedback_score, positive_feedback_pct, member_since, top_rated, store_name | has Listings |
| Order | listing, buyer, seller, final_price, shipping, total, status | from Listing |
| Feedback | type (positive/neutral/negative), comment, response | between Buyer and Seller |
| SavedSearch | query, filters, email_alert | belongs to User |
| WatchItem | listing, added_at | belongs to User |
| Dispute | order, type (item not received / not as described), status | between Buyer and Seller |
| PromotedListing | listing, ad_rate_pct, impressions, clicks, sales | belongs to Seller |

### Auction Logic
- **Proxy bidding**: user sets max → system bids minimum increment until max reached
- **Bid increments**: based on current price tier ($0.50 under $25, $1.00 under $100, etc.)
- **Reserve price**: hidden minimum; "Reserve not met" shown until reached
- **Sniping**: last-second bidding (no anti-sniping extension on eBay)
- **BIN + Auction**: Buy It Now disappears after first bid placed

### Listing Status
```
draft → scheduled → active → ending_soon (last 12h) → ended → sold / unsold
                                                              → relisted
```

### Order Status
```
won → awaiting_payment → paid → shipped → delivered → completed → feedback_left
                                                    → case_opened → resolved
```

## User Flows

### Browse and Bid
```
Search "vintage Rolex" → Filter: Auction only, Pre-Owned → Sort: Ending Soonest → View listing → Check bid history → Place bid ($500 max) → Proxy bidding activates → Outbid notification → Re-bid → Win → Pay → Receive → Leave feedback
```

### Buy It Now
```
Search → Filter: Buy It Now → View listing → Add to Cart (or Buy It Now) → Checkout → Pay → Track shipment → Delivered → Leave feedback
```

### Seller: List Auction
```
Sell → Search for product (catalog match) → Add photos → Title + description → Format: Auction → Starting price: $0.99 → Duration: 7 days → Shipping: free → Returns: 30 days → List → Monitor bids → Auction ends → Ship to winner
```

### Make an Offer
```
Listing with Best Offer → Make Offer ($X) → Seller: Accept / Decline / Counter → Buyer: Accept counter → Pay → Ship → Complete
```

## URL / Route Structure

```
/                              → Home
/b/:category/:nodeId           → Category Browse
/b/:category/:subcategory      → Subcategory
/sch/i.html?_nkw=:query        → Search Results
/itm/:slug/:itemId             → Listing Detail
/itm/:itemId                   → Listing Detail (short URL)
/myebay/summary                → My eBay Summary
/myebay/watchlist               → Watchlist
/myebay/purchasing              → Bids / Offers
/myebay/purchase                → Purchase History
/myebay/selling                 → Active Selling
/myebay/messages                → Messages
/sc/cart                        → Cart
/pay/checkout                   → Checkout
/usr/:username                  → Seller Profile
/str/:storeName                 → Seller Store
/sl/sell                        → Create Listing
/sh                             → Seller Hub
/sh/orders                      → Seller Orders
/sh/lst/active                  → Active Listings
/sh/performance                 → Performance
/sh/payments                    → Payments
/sh/marketing                   → Marketing
/deals                          → Daily Deals
/e/_electronics/refurbished     → eBay Refurbished
/motors                         → eBay Motors
/help                           → Help Center
/resolution                     → Resolution Center
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Buyer Search | Title, description (optional), item specifics | Category, Condition, Price Range, Buying Format, Item Location, Delivery, Seller, Show Only (free returns, sold items, completed, Authenticity Guarantee), category-specific attributes | Best Match, Price + Shipping (low/high), Ending Soonest, Newly Listed |
| Seller Listings | Title, SKU, item ID | Status, Format, Category, Price | End Date, Price, Watchers, Views |

### Search Features
- Save search with email/push alerts when new matching items listed
- "Completed items" filter: see what items actually sold for (price research)
- Advanced Search: detailed multi-field search form

## Responsive Behavior

| Breakpoint | Search Results | Listing Detail | Bid Panel |
|------------|---------------|---------------|-----------|
| Desktop (>=1024px) | Grid/list + filters sidebar | Full layout, bid sidebar | Sticky right sidebar |
| Tablet (768-1023px) | 2-3 columns | Stacked | Inline |
| Mobile (<768px) | eBay app preferred; web: 1-2 columns | Stacked, sticky bid bar at bottom | Bottom bar |

### eBay-Specific UX
- **Countdown timer**: real-time display (days/hours/minutes/seconds) creating urgency
- **Bid history**: transparent record of all bids (bidder IDs anonymized)
- **Proxy bidding UX**: "Your max bid" separate from "Current bid" — system bids on your behalf
- **Watchlist with timers**: see all watched auctions and their remaining time
- **Feedback system**: the original e-commerce trust system (positive %, score)
- **Best Match algorithm**: relevance-based default sort considering listing quality, seller performance, price
- **Completed/Sold items**: research feature showing actual sale prices
- **Terapeak**: built-in market research for sellers
- **Authenticity Guarantee**: third-party authentication for luxury items (watches, sneakers, handbags)
- **eBay Refurbished**: tiered condition grades with warranty
- **Dense information display**: data-heavy listing pages (not minimalist)

## Access Control

| Role | Browse | Bid | Buy | Sell | Feedback |
|------|--------|-----|-----|------|----------|
| Guest | ✅ | — | — | — | — |
| Registered (unverified) | ✅ | ✅ (limits) | ✅ (limits) | — | — |
| Verified Buyer | ✅ | ✅ | ✅ | — | ✅ |
| Verified Seller | ✅ | ✅ | ✅ | ✅ | ✅ |
| Top Rated Seller | ✅ | ✅ | ✅ | ✅ (fee discounts, visibility boost) | ✅ |
| eBay Store Subscriber | ✅ | ✅ | ✅ | ✅ (more listings, lower fees) | ✅ |

### Seller Levels
- **Below Standard**: restrictions, higher fees
- **Above Standard**: standard marketplace access
- **Top Rated**: fee discounts, priority customer service, Top Rated Plus badge
- **Top Rated Plus**: per-listing badge (30-day returns, 1-day handling)
