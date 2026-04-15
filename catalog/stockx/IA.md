---
brand: StockX
tagline: "The stock market of things. Buy and sell sneakers, streetwear, electronics, and collectibles at real-time market prices."
category: Marketplace
website: https://stockx.com
---

# StockX — Information Architecture

## Overview

StockX is a bid/ask marketplace for high-demand consumer goods — sneakers, streetwear, electronics, trading cards, and collectibles. The mental model is **a stock market for physical goods** — buyers place bids, sellers place asks, and when bid meets ask, a transaction occurs. Every item is verified for authenticity before being shipped to the buyer. StockX differentiates through its stock-market pricing mechanics (bid/ask spread, historical price charts, market data), authentication guarantee (every item physically inspected), anonymous transactions (buyers and sellers don't interact), and real-time market data (price history, volatility, sales volume). It transforms resale from peer-to-peer negotiation into a transparent, data-driven market.

## Site Map

```
├── Home
│   ├── Search Bar (prominent)
│   ├── Trending Now (most traded)
│   ├── Most Popular (by category)
│   ├── New Releases
│   ├── Below Retail
│   ├── Featured Collections / Drops
│   ├── Category Cards
│   │   ├── Sneakers
│   │   ├── Apparel
│   │   ├── Electronics
│   │   ├── Collectibles (trading cards, toys)
│   │   ├── Accessories (watches, handbags)
│   │   └── NFTs (if applicable)
│   └── Recently Viewed
├── Browse / Category
│   ├── Sneakers
│   │   ├── By Brand (Nike, Jordan, Adidas, New Balance, Yeezy, etc.)
│   │   ├── By Silhouette (Air Jordan 1, Dunk, Yeezy 350, etc.)
│   │   ├── By Release Date
│   │   └── By Collaboration (Travis Scott, Off-White, etc.)
│   ├── Apparel
│   │   ├── By Brand (Supreme, Nike, Essentials, etc.)
│   │   └── By Type (T-shirts, Hoodies, Pants)
│   ├── Electronics
│   │   ├── Phones, Consoles, GPUs, Headphones
│   │   └── By Brand (Apple, Sony, NVIDIA)
│   ├── Collectibles
│   │   ├── Trading Cards (Pokemon, Sports, etc.)
│   │   ├── Toys & Figures (KAWS, Bearbrick)
│   │   └── Accessories
│   └── Accessories (Watches, Handbags, Sunglasses)
├── Product Page (Core Experience)
│   ├── Product Image(s) (stock photos, 360° where available)
│   ├── Product Name, Brand, Colorway, Style Code
│   ├── Ticker Symbol (e.g., "AJ1-OFF-CHI")
│   ├── Market Summary
│   │   ├── Last Sale Price
│   │   ├── Price Premium (% above retail)
│   │   ├── Average Sale Price (all time)
│   │   ├── Trade Range (52-week high/low)
│   │   ├── Volatility
│   │   ├── Number of Sales
│   │   └── Price Change (daily/weekly/monthly)
│   ├── Price Chart (line graph — 1M, 3M, 6M, 1Y, All)
│   ├── Size Selector (each size is a separate market)
│   │   ├── Size Grid with Lowest Ask per size
│   │   └── Size-specific bid/ask spread
│   ├── Buy / Bid
│   │   ├── Buy Now (at Lowest Ask)
│   │   ├── Place Bid (your offer, may be matched)
│   │   └── Price by Size (table: size, lowest ask, highest bid, last sale)
│   ├── Sell / Ask
│   │   ├── Sell Now (at Highest Bid)
│   │   ├── Place Ask (your asking price)
│   │   └── Payout Estimator (after fees)
│   ├── All Sales (recent transactions: size, price, date)
│   ├── Product Details
│   │   ├── Retail Price
│   │   ├── Release Date
│   │   ├── Colorway
│   │   ├── Style Code / SKU
│   │   ├── Description
│   │   └── Condition (new with tags — StockX standard)
│   ├── Related Products
│   └── Price Alerts (notify me at target price)
├── Buying
│   ├── Buy Flow
│   │   ├── Select Size
│   │   ├── Choose: Buy Now (lowest ask) or Place Bid
│   │   ├── Shipping Address
│   │   ├── Payment Method
│   │   ├── Price Breakdown
│   │   │   ├── Item Price
│   │   │   ├── Shipping
│   │   │   ├── Processing Fee
│   │   │   ├── Tax
│   │   │   └── Total
│   │   └── Confirm Purchase / Place Bid
│   ├── Active Bids
│   │   ├── Bid List (product, size, bid price, status, expires)
│   │   ├── Edit Bid
│   │   └── Cancel Bid
│   └── Order History
│       ├── Order Detail (status, tracking, receipt)
│       ├── Authentication Status (pending, passed, shipped)
│       └── Delivery Tracking
├── Selling
│   ├── Sell Flow
│   │   ├── Search Product
│   │   ├── Select Size
│   │   ├── Choose: Sell Now (highest bid) or Place Ask
│   │   ├── Payout Estimator (price minus fees)
│   │   │   ├── Transaction Fee (% based on seller level)
│   │   │   ├── Payment Processing Fee
│   │   │   └── Estimated Payout
│   │   └── Confirm / Place Ask
│   ├── Active Asks
│   │   ├── Ask List (product, size, ask price, status)
│   │   ├── Edit Ask
│   │   └── Cancel Ask
│   ├── Pending Sales (matched, awaiting your shipment)
│   │   ├── Ship by Deadline (2 business days)
│   │   ├── Shipping Label (pre-paid)
│   │   └── Ship to StockX Authentication Center
│   ├── Sales History
│   └── Seller Dashboard
│       ├── Total Sales
│       ├── Seller Level (1-4, based on volume + completion rate)
│       ├── Fee Rate (decreases with level)
│       └── Payout Methods
├── Portfolio (Your Market Position)
│   ├── Active Bids
│   ├── Active Asks
│   ├── Pending (in authentication)
│   ├── Past Purchases / Sales
│   ├── Following (products with alerts)
│   ├── Spending / Earnings Summary
│   └── Portfolio Value (estimated value of collection)
├── Release Calendar
│   ├── Upcoming Releases (by date)
│   ├── Past Releases
│   ├── Notify Me (release alert)
│   └── Product Detail (pre-release page with estimated market price)
├── Account
│   ├── Profile
│   ├── Addresses
│   ├── Payment Methods
│   ├── Payout Settings (bank account, PayPal)
│   ├── Seller Level & Stats
│   ├── Notification Settings
│   ├── Price Alerts
│   ├── Security (2FA)
│   └── Vacation Mode (pause active asks)
├── Help
│   ├── How StockX Works
│   ├── Buyer FAQ
│   ├── Seller FAQ
│   ├── Authentication Process
│   ├── Fees & Pricing
│   ├── Shipping & Returns
│   └── Contact Support
└── Footer
    ├── Popular Pages (Air Jordan 1, Yeezy, Supreme)
    ├── Company (about, careers, press)
    ├── Legal (terms, privacy)
    └── Social Links
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | StockX logo, search bar (prominent), Browse, Sell, notifications, portfolio, account |
| **Category Nav** | Horizontal tabs below header (browse pages) | Sneakers, Apparel, Electronics, Collectibles, Accessories |
| **Product Size Grid** | Grid selector on product page | Each size shows lowest ask; click to buy/bid for that size |
| **Buy/Sell Toggle** | On product page | Switch between Buy and Sell views |
| **Price Chart** | Interactive line chart | Time range selector (1M, 3M, 6M, 1Y, All), hover for exact prices |
| **Bottom Nav (mobile)** | Fixed bottom bar | Home, Browse, Sell, Portfolio, Account |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Product | name, brand, colorway, style_code, retail_price, release_date, description, images[], category, subcategory | has many Sizes (each a separate market) |
| Size | product, size_value, lowest_ask, highest_bid, last_sale, number_of_sales, price_history[] | belongs to Product |
| Bid | product, size, amount, bidder, status (active/matched/expired/cancelled), expires_at | belongs to User |
| Ask | product, size, amount, seller, status (active/matched/expired/cancelled), expires_at | belongs to User |
| Transaction | product, size, price, buyer, seller, status, authentication_status | between Buyer and Seller |
| PriceHistory | product, size, price, date | time-series data |
| PriceAlert | product, size, target_price, direction (above/below), active | belongs to User |
| SellerProfile | user, level (1-4), total_sales, completion_rate, fee_rate | belongs to User |
| Authentication | transaction, status (pending/passed/failed), inspector_notes | belongs to Transaction |

### Transaction Flow
```
Bid meets Ask (or Buy Now / Sell Now) → Transaction Created → Seller ships to StockX (2 business days) → StockX Receives → Authentication (inspection) → Pass → Ships to Buyer → Delivered
                                                                                                     → Fail → Returned to Seller (+ penalty)
```

### Bid/Ask Mechanics (Stock Market Model)
- **Bid**: buyer's offer (like a buy limit order)
- **Ask**: seller's price (like a sell limit order)
- **Spread**: difference between highest bid and lowest ask
- **Last Sale**: most recent transaction price
- Each SIZE is a separate market (Air Jordan 1 size 10 ≠ size 11)
- Bids/Asks can have expiration dates (1 day, 3 days, 7 days, 30 days, 60 days)
- No negotiation — anonymous, price-only matching

### Seller Levels
```
Level 1 (new): highest fees
Level 2 (5+ sales): reduced fees
Level 3 (15+ sales): further reduced
Level 4 (50+ sales): lowest fees
Criteria: sales volume + completion rate (ship on time, pass authentication)
```

## User Flows

### Buy Sneakers
```
Search "Jordan 1 Chicago" → Product page → View price chart (market research) → Select size (10) → See: Lowest Ask $350, Highest Bid $320 → Choose: Buy Now at $350 or Place Bid at $335 → Enter payment → Confirm → Wait for seller to ship → Authentication at StockX → Passes → Shipped to you → Delivered (new, authenticated)
```

### Sell Sneakers
```
Search product → Select size → See: Highest Bid $320, Lowest Ask $350 → Choose: Sell Now at $320 or Place Ask at $340 → See payout estimate ($320 - $28 fees = $292) → Confirm → Match found → Receive prepaid shipping label → Ship to StockX (within 2 days) → Authentication → Passes → Payout to bank
```

### Market Research
```
Product page → View price chart (6 month view) → Check recent sales → Compare size prices → Set Price Alert ($300 for size 10) → Wait for notification → Decide to buy/bid
```

### Failed Authentication
```
Seller ships → StockX inspects → Fails (counterfeit / defect / wrong item) → Item returned to seller → Seller penalized (fee) → Buyer's order cancelled or matched with another seller
```

## URL / Route Structure

```
/                              → Home
/search?s=:query               → Search Results
/sneakers                      → Sneakers Browse
/sneakers/:brand               → Brand Page
/sneakers/:brand/:silhouette   → Silhouette Page
/:slug                         → Product Page (e.g., /jordan-1-retro-high-og-chicago)
/:slug/chart                   → Price Chart
/:slug/buy                     → Buy Flow
/:slug/sell                    → Sell Flow
/apparel                       → Apparel Browse
/electronics                   → Electronics Browse
/collectibles                  → Collectibles Browse
/accessories                   → Accessories Browse
/portfolio                     → My Portfolio
/portfolio/buying/bids         → Active Bids
/portfolio/buying/orders       → Purchase History
/portfolio/selling/asks        → Active Asks
/portfolio/selling/pending     → Pending Sales
/portfolio/selling/history     → Sales History
/portfolio/following           → Following (price alerts)
/release-calendar              → Release Calendar
/account                       → Account Settings
/account/payment               → Payment Methods
/account/payout                → Payout Settings
/account/seller-level          → Seller Level
/help                          → Help Center
/how-it-works                  → How StockX Works
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Products | Name, brand, style code, colorway | Category, Brand, Price Range, Release Year, Size Available | Most Popular, Lowest Ask, Highest Bid, Average Price, Recent |
| By Size | Size-specific markets | Size | Lowest Ask, Highest Bid, Last Sale |
| Active Bids/Asks | Product name | Status, Size, Date | Price, Date, Status |
| Release Calendar | Product name, brand | Category, Release Date Range, Brand | Release Date |

## Responsive Behavior

| Breakpoint | Home | Product Page | Size Grid | Buy/Sell |
|------------|------|-------------|-----------|----------|
| Desktop (>=1024px) | Grid cards, featured sections | Full layout: images + chart + size grid + market data | Grid with prices per size | Inline on product page |
| Tablet (768-1023px) | Simplified grid | Stacked layout | Scrollable size row | Slide-over or full page |
| Mobile (<768px) | StockX app (primary); cards | Stacked, sticky Buy/Sell bar | Dropdown selector | Full-screen flow |

### StockX-Specific UX
- **Stock market terminology**: bid, ask, spread, last sale, trade range, volatility
- **Price charts**: interactive financial-style line graphs with time range selectors
- **Size = market**: each size has independent pricing (critical for sneakers)
- **Authentication badge**: "StockX Verified" with authentication details
- **Payout estimator**: shows exact take-home after fees before seller commits
- **Anonymous transactions**: buyers and sellers never interact directly
- **Deadstock standard**: items must be new, unworn, with original packaging
- **Release calendar**: upcoming product drops with estimated market prices
- **Price alerts**: set target price, get notified when market hits it
- **Portfolio view**: track your collection's estimated market value over time
- **Green/Red pricing**: prices shown in green (below average) or red (above average)
- **Seller level gamification**: higher volume = lower fees = incentive to sell more

## Access Control

| Role | Browse | Buy | Sell | Market Data | Account |
|------|--------|-----|------|-------------|---------|
| Guest | ✅ | — | — | Limited (no full charts) | — |
| Registered | ✅ | ✅ | ✅ | ✅ | ✅ |
| Level 1 Seller | ✅ | ✅ | ✅ (standard fees) | ✅ | ✅ |
| Level 4 Seller | ✅ | ✅ | ✅ (lowest fees) | ✅ | ✅ |

### Trust & Verification
- All items physically authenticated at StockX facilities
- Buyer Protection: guaranteed authentic or money back
- Seller penalties for counterfeits: permanent ban
- Seller penalties for late shipment: fee deduction
- ID verification for high-value transactions
- Payment methods verified before bidding/selling
