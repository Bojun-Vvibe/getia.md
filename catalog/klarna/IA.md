---
brand: Klarna
tagline: Smoooth shopping. Pay later.
category: E-Commerce & Fintech
website: https://www.klarna.com
---

# Information Architecture — Klarna

## Overview
Klarna is a global buy-now-pay-later (BNPL) platform that lets shoppers split purchases into 4 interest-free installments, pay in 30 days, or finance over time. The IA centers on a dual audience: **consumers** seeking flexible checkout and a shopping discovery experience, and **merchants** looking to integrate Klarna's payment solutions. The Klarna app extends the experience with a full shopping hub, price-drop alerts, and a one-time card for in-store use.

## Site Map

```
klarna.com
├── Home
├── Shopping (Consumer)
│   ├── What is Klarna
│   ├── Pay in 4
│   ├── Pay in 30 days
│   ├── Financing (monthly payments)
│   ├── Klarna Card
│   ├── One-time card
│   └── Klarna App
│       ├── Shopping feed
│       ├── Deals & offers
│       ├── Wish lists
│       └── Price-drop notifications
├── Stores / Shop Directory
│   ├── Browse by category
│   ├── Featured stores
│   └── Store detail page
├── Business (Merchant)
│   ├── Payment solutions
│   ├── On-site messaging
│   ├── Checkout integration
│   ├── Pricing
│   ├── Platforms & partners
│   └── Developer docs
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   ├── Sustainability
│   └── Investor relations
├── Support / Help Center
│   ├── Consumer FAQ
│   ├── Merchant FAQ
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Cookie policy
└── Auth
    ├── Log in (consumer / merchant)
    └── Sign up
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav bar | Logo, Shopping, Business, Log in / Sign up, country selector |
| Consumer | Mega-menu | Products (Pay in 4, Financing, Klarna Card), App, Stores |
| Business | Mega-menu | Solutions, Pricing, Platforms, Docs, Get started CTA |
| Footer | Multi-column | About, Products, Support, Legal, Social links, App store badges |
| Mobile | Hamburger + bottom tab (app) | Simplified nav, app-like store browsing |

**Key pattern**: Audience split at the top level — consumer vs. business — with a sticky "Get the app" CTA on mobile viewports.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Payment Product | name, description, eligibility, how-it-works steps, merchant availability | has Variants, has Reviews, belongs to Creator |
| Store | name, logo, categories, Klarna products accepted, URL, offers | belongs to parent entity |
| Deal / Offer | store, discount %, expiry, terms, featured flag | → Tier, belongs to Blog |
| Help Article | title, body, category, audience (consumer/merchant), related articles | → Feed, → Board, → Source |
| Press Release | date, title, body, region, media assets | belongs to parent entity |
| Developer Doc | title, endpoint, code samples, SDK, version | belongs to parent entity |

## User Flows

### 5a. Consumer — Pay in 4 checkout

```
Browse store directory or shop externally → choose Klarna at checkout →
  Log in / sign up (email + phone verification) →
  Instant soft-credit approval → see 4-payment schedule →
  Confirm → order placed, 1st payment charged →
  Remaining 3 auto-charged biweekly → tracked in app/dashboard
```


### 5b. Merchant — Integration

```
Land on Business page → select platform (Shopify, WooCommerce, custom) →
  Review pricing & terms → Sign up → Access Merchant Portal → install plugin / API keys →
  Configure checkout options → test in sandbox → Go live → monitor via Merchant Dashboard
```


### 5c. Shopping discovery (app)

```
Open Klarna app → browsing feed of curated deals → Search or browse by category → view store/product →
  Add to wish list → receive price-drop notification →
  Tap "Buy" → checkout with Klarna, choose payment plan
```



### One-Time Card Payment

```
Open Klarna app → Generate one-time virtual Visa card → Get card number, expiry, CVV → Use at any online or in-store checkout → Pay in 4 installments → Card expires after single use
```

### Merchant Dashboard Analytics

```
Log in to Merchant Portal → View sales dashboard → Filter by period, product, region → Analyze conversion rates → Review settlement reports → Download transaction data
```

## URL / Route Structure

```
/                           → Home
/shopping/                  → Consumer landing
/pay-in-4/                  → Pay in 4 product
/monthly-financing/         → Financing product
/klarna-card/               → Klarna Card
/stores/                    → Store directory
/stores/{slug}/             → Individual store
/business/                  → Merchant landing
/business/products/         → Solutions overview
/business/pricing/          → Pricing
/docs/                      → Developer documentation
/about/                     → Company info
/customer-service/          → Help center
/customer-service/{topic}/  → Help article
/one-time-card/               # One-time virtual card
/app/                          # Klarna app landing
/app/shopping-feed/            # Shopping feed
/app/wish-lists/               # Wish lists
/app/purchases/                # Purchase history
/app/settings/                 # App settings
/business/platforms/           # Platform integrations
/business/docs/api/            # API documentation
/business/docs/api/{endpoint}/ # API endpoint detail
/business/signup/              # Merchant signup
/business/dashboard/           # Merchant dashboard
/careers/                      # Careers page
/sustainability/               # Sustainability page
/press/                         # Press releases
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Store search | Autocomplete, category suggestions, recent searches |
| Category filter | Fashion, Electronics, Home, Beauty, etc. |
| Deal filtering | Sort by discount %, new arrivals, trending |
| Help search | Keyword → article results, grouped by consumer/merchant |
| Country/locale | Changes store availability, currency, legal terms |

- **Purchase history search**: Search past purchases by store name, date, amount
- **Wish list management**: Search and organize items across wish lists
- **Merchant dashboard search**: Filter transactions by date, status, amount, customer
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full mega-menu, multi-column store grid, side-by-side product comparison |
| Tablet (768–1023px) | Condensed nav, 2-column grid, collapsible sections |
| Mobile (<768px) | Hamburger menu, single-column, bottom-fixed "Get the app" banner, swipeable deal cards |
| Klarna App | Native bottom tabs (Home, Search, Purchases, Profile), pull-to-refresh feed |


### Platform-Specific UX
- Pay in 4 splits any purchase into 4 interest-free payments charged every 2 weeks
- Soft credit check at checkout provides instant approval without affecting credit score
- Klarna app shopping feed surfaces curated deals and price-drop notifications
- One-time virtual card allows using Klarna at any retailer, not just Klarna partners
- Wish list with price tracking alerts users when saved items drop in price
- Smooth checkout experience minimizes friction — returning users only need to confirm
- Purchase history in the app provides a complete record of all Klarna transactions
- In-store payments via one-time card extend BNPL to physical retail
- Merchant on-site messaging shows "4 payments of $X" on product pages
- Payment schedule visualization clearly shows upcoming payment dates and amounts

### Merchant Integration
- Plugin integrations for Shopify, WooCommerce, Magento, BigCommerce, and others
- Checkout API for custom integrations with full documentation
- Merchant portal provides settlement reports, analytics, and transaction management
- On-site messaging SDK displays Klarna payment options dynamically on product pages
- Sandbox environment enables testing before going live


### Payment Product Comparison
```
Pay in 4:          4 interest-free installments, every 2 weeks, instant approval
Pay in 30:         Full payment due in 30 days, no interest
Monthly Financing: 6-36 month plans, interest may apply based on credit
Klarna Card:       Reusable physical/virtual card, Pay in 4 on every purchase
One-Time Card:     Single-use virtual Visa, expires after one transaction
```

### Consumer Dashboard
```
Purchases:     All orders with payment schedules and status
Payments:      Upcoming and past payment dates with amounts
Returns:       Initiate and track return-related payment pauses
Settings:      Payment methods, autopay, notification preferences
Help:          In-app support for payment issues
```

## Access Control

| Role | Access |
|------|--------|
| Visitor | Browse stores, view products, read help |
| Logged-in Consumer | Pay in 4, financing, purchase history, wish lists, one-time card |
| Klarna Card Holder | Physical/virtual card management, cashback rewards |
| Merchant Admin | Dashboard, settlements, integration settings, analytics |
| Merchant Developer | API keys, sandbox, docs, webhook configuration |
| Internal Admin | User management, risk review, compliance tools |
