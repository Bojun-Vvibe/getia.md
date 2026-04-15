# Auction Platform — Information Architecture

## Overview

An online auction marketplace (eBay, Christie's, Catawiki style). The mental model is **bidding competition** — sellers list items with starting prices, buyers place bids within time windows, and the highest bidder wins. Trust mechanisms (seller ratings, authenticity verification, buyer protection) and real-time urgency (countdowns, bid alerts) drive the experience.

## Site Map

### Buyer-Facing

```
├── Home
│   ├── Search Bar (prominent)
│   ├── Trending Auctions (ending soon)
│   ├── Featured Categories
│   ├── Just Listed
│   ├── Deals / Buy It Now
│   └── Personalized Recommendations
├── Browse / Category
│   ├── Category Tree (hierarchical)
│   ├── Subcategory Listings
│   └── Curated Collections
├── Search Results
│   ├── Auction Listings (grid/list)
│   ├── Faceted Filters
│   ├── Sort Options
│   └── Save Search
├── Listing Detail
│   ├── Images / Gallery
│   ├── Title & Description
│   ├── Current Bid / Starting Price
│   ├── Bid History (expandable)
│   ├── Time Remaining (countdown)
│   ├── Buy It Now Price (optional)
│   ├── Bid Panel
│   │   ├── Place Bid
│   │   ├── Max Bid (auto-bid)
│   │   └── Watch Item
│   ├── Seller Info (rating, reviews, location)
│   ├── Shipping Options & Cost
│   ├── Return Policy
│   ├── Item Condition & Specifics
│   ├── Authenticity Guarantee (if applicable)
│   ├── Payment Methods Accepted
│   ├── Q&A / Ask Seller
│   └── Similar Items
├── My eBay (Buyer Hub)
│   ├── Watching (watchlist)
│   ├── Bidding
│   │   ├── Active Bids
│   │   ├── Items I Didn't Win
│   │   └── Best Offers Made
│   ├── Won
│   │   ├── Awaiting Payment
│   │   ├── Awaiting Shipment
│   │   └── Completed
│   ├── Purchase History
│   ├── Saved Searches
│   ├── Saved Sellers
│   └── Recently Viewed
├── Cart / Checkout
│   ├── Won Items (pending payment)
│   ├── Buy It Now Items
│   ├── Shipping Address
│   ├── Payment
│   └── Order Confirmation
├── Messages
│   ├── Seller Conversations
│   └── System Notifications
├── Account
│   ├── Profile
│   ├── Addresses
│   ├── Payment Methods
│   ├── Feedback Given / Received
│   ├── Settings
│   └── Buyer Protection Claims
├── Help
│   ├── Buying Guide
│   ├── Bidding Tips
│   ├── Buyer Protection
│   ├── Resolution Center
│   └── Contact Support
└── Footer
    ├── About
    ├── Policies
    ├── Site Map
    └── Affiliates
```

### Seller-Facing

```
├── Seller Hub
│   ├── Overview (sales, traffic, to-do)
│   ├── Listings
│   │   ├── Active Auctions
│   │   ├── Scheduled
│   │   ├── Ended (sold / unsold)
│   │   ├── Drafts
│   │   └── Templates
│   ├── Create Listing
│   │   ├── Category Selection
│   │   ├── Item Details & Specifics
│   │   ├── Photos (up to 12+)
│   │   ├── Listing Format (Auction / Buy It Now / Both)
│   │   ├── Starting Price / Reserve Price
│   │   ├── Duration (1, 3, 5, 7, 10 days)
│   │   ├── Shipping Options
│   │   ├── Return Policy
│   │   └── Preview & Submit
│   ├── Orders
│   │   ├── Awaiting Shipment
│   │   ├── Shipped
│   │   ├── Completed
│   │   ├── Cancellations
│   │   └── Returns / Disputes
│   ├── Marketing
│   │   ├── Promoted Listings
│   │   ├── Markdown Manager
│   │   └── Offers to Buyers
│   ├── Performance
│   │   ├── Seller Level / Rating
│   │   ├── Defect Rate
│   │   ├── Late Shipment Rate
│   │   └── Policy Compliance
│   ├── Payments
│   │   ├── Earnings Summary
│   │   ├── Transaction History
│   │   ├── Fees Breakdown
│   │   ├── Payout Schedule
│   │   └── Tax Documents
│   ├── Analytics
│   │   ├── Traffic & Views
│   │   ├── Conversion Rate
│   │   ├── Best Sellers
│   │   └── Buyer Demographics
│   └── Seller Settings
│       ├── Business Policies
│       ├── Shipping Presets
│       └── Store Customization
```

### Platform Admin

```
├── Admin Dashboard
│   ├── GMV, Active Listings, Active Users
│   ├── Flagged Listings
│   └── Dispute Queue
├── User Management
│   ├── Buyers / Sellers
│   ├── Suspensions
│   └── Verification Queue
├── Listing Moderation
│   ├── Reported Listings
│   ├── Prohibited Items
│   └── Counterfeit Claims
├── Disputes / Resolution Center
├── Fees & Billing
├── Categories Management
├── Analytics
└── Platform Settings
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, search bar, categories dropdown, sell button, cart, account, notifications |
| **Category Nav** | Mega menu or flyout | Multi-level category tree |
| **Listing Filters** | Left sidebar | Price, condition, format, seller rating, location, shipping |
| **Breadcrumbs** | Below header | Home > Category > Subcategory |
| **Bid Panel** | Sticky sidebar (desktop) / sticky bottom (mobile) | Current bid, countdown, bid input, place bid button |
| **Seller Hub Nav** | Left sidebar (seller mode) | Overview, Listings, Orders, Marketing, Payments, Analytics |
| **Watchlist Quick View** | Header icon with badge | Dropdown of watched items with countdown timers |

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | title, description, images[], category, condition, start_price, reserve_price, buy_it_now_price, format (auction/fixed/both), start_time, end_time, status | belongs to Seller, has many Bids |
| Bid | amount, max_bid, bidder, timestamp, is_winning | belongs to Listing and User |
| User | username, email, feedback_score, feedback_percent, member_since, location | can be Buyer and/or Seller |
| Order | listing, buyer, seller, final_price, shipping_cost, total, status | from won Listing |
| Feedback | rating (positive/neutral/negative), text, response | between Buyer and Seller |
| Category | name, slug, parent_id, item_specifics_schema | hierarchical |
| SavedSearch | query, filters, alert_frequency | belongs to User |
| Dispute | order, type, status, messages[] | between Buyer and Seller |
| PromotedListing | listing, ad_rate_pct, impressions, clicks | belongs to Seller |

### Listing Format Types
- **Auction**: Bids only, highest bidder wins
- **Buy It Now**: Fixed price, instant purchase
- **Auction + Buy It Now**: Bidding with option to purchase immediately (BIN disappears after first bid)

### Bid Logic
- Proxy bidding: user sets max, system bids incrementally
- Bid increment rules based on current price tier
- Anti-sniping: optional time extension on late bids
- Reserve price: hidden minimum; if not met, item doesn't sell

### Listing Status Flow
`draft → scheduled → active → ending_soon → ended → sold / unsold`
`↘ cancelled / removed`

### Order Status Flow
`won → awaiting_payment → paid → shipped → delivered → completed`
`↘ cancelled / disputed / refunded`

## User Flows

### Browse and Bid
```
Home → Category / Search → Filter Results → Listing Detail → Review Bid History → Place Bid → Outbid Notification → Re-bid → Win → Pay → Receive Item → Leave Feedback
```

### Buy It Now
```
Search → Listing Detail → Buy It Now → Checkout → Payment → Confirmation → Track Shipment → Leave Feedback
```

### Create Auction Listing
```
Sell → Select Category → Item Details → Upload Photos → Set Format (Auction) → Starting Price + Reserve → Duration → Shipping & Returns → Preview → List Item
```

### Dispute Resolution
```
Order History → Order Detail → Open Dispute → Select Reason → Provide Details → Seller Response → Resolution (refund / return / escalate)
```

### Watch and Snipe
```
Search → Listing Detail → Watch Item → Notification (ending soon) → Place Bid in Final Minutes → Win / Lose
```

## URL / Route Structure

### Buyer
```
/                              → Home
/b/:category                   → Category Browse
/b/:category/:subcategory      → Subcategory
/itm/:slug/:id                 → Listing Detail
/sch/i.html?q=:query           → Search Results
/myebay/watching               → Watchlist
/myebay/bidding                → Active Bids
/myebay/won                    → Won Items
/myebay/purchase-history       → Purchase History
/myebay/saved-searches         → Saved Searches
/cart                          → Cart
/checkout                      → Checkout
/messages                      → Messages
/usr/:username                 → User Profile
/account                       → Account Settings
/help                          → Help Center
/resolution                    → Resolution Center
```

### Seller
```
/sell                          → Create Listing
/sell/category                 → Category Selection
/sell/details                  → Item Details
/sell/preview                  → Preview Listing
/sh                            → Seller Hub Overview
/sh/listings                   → Active Listings
/sh/listings/drafts            → Drafts
/sh/orders                     → Orders
/sh/orders/:id                 → Order Detail
/sh/marketing                  → Marketing Tools
/sh/performance                → Performance Dashboard
/sh/payments                   → Payments & Payouts
/sh/analytics                  → Analytics
/sh/settings                   → Seller Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Listings | Title, description, item specifics, seller | Category, Price Range, Condition (new/used/refurbished), Format (auction/BIN), Shipping (free), Location, Seller Rating, Ending Within | Best Match, Ending Soonest, Newly Listed, Price + Shipping (low/high), Most Bids |
| Seller Listings | Title, SKU, item ID | Status, Format, Price Range, Date Listed | End Date, Price, Views, Watchers |
| Admin Users | Username, email, user ID | Role, Status, Feedback Score, Registration Date | Join Date, Feedback, GMV |

### Autocomplete
Search suggests: recent searches, trending searches, matching categories, specific items (with thumbnail + bid count)

## Responsive Behavior

| Breakpoint | Listing Grid | Listing Detail | Bid Panel | Seller Hub |
|------------|-------------|---------------|-----------|------------|
| Desktop (≥1024px) | 4 columns + filters sidebar | Full layout, bid panel right | Sticky right sidebar | Full sidebar + content |
| Tablet (768–1023px) | 2-3 columns | Stacked layout | Sticky bottom bar | Collapsible sidebar |
| Mobile (<768px) | 1-2 columns | Stacked, swipe gallery | Sticky bottom bid bar | Bottom nav + full pages |

### Auction-Specific UX
- Real-time countdown timer (days, hours, minutes, seconds)
- Live bid count and price updates (WebSocket)
- Color flash on price change (green for new bid)
- Push notifications: outbid, ending soon, won
- Bid confirmation modal with clear total (item + shipping)
- Anti-sniping countdown extension indicator

## Access Control

### Buyer / Seller

| Role | Browse | Bid | Buy | Sell | Feedback |
|------|--------|-----|-----|------|----------|
| Guest | ✅ | — | — | — | — |
| Registered (unverified) | ✅ | ✅ (limits) | ✅ (limits) | — | — |
| Verified Buyer | ✅ | ✅ | ✅ | — | ✅ |
| Verified Seller | ✅ | ✅ | ✅ | ✅ | ✅ |
| Top Rated Seller | ✅ | ✅ | ✅ | ✅ (perks) | ✅ |

### Platform Admin

| Role | Dashboard | Users | Listings | Disputes | Settings |
|------|-----------|-------|----------|----------|----------|
| Admin | ✅ | CRUD | Moderate + Remove | Resolve | ✅ |
| Moderator | ✅ | Read | Moderate | Escalate | — |
| Support | Limited | Read | Read | Assist | — |
