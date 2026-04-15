---
brand: Gumroad
tagline: Sell what you know and see what sticks.
category: E-Commerce & Fintech
website: https://www.gumroad.com
---

# Information Architecture — Gumroad

## Overview
Gumroad is a minimalist platform for creators to sell digital products — e-books, courses, software, music, templates, memberships — directly to their audience. The IA is radically simple: a creator gets a product page, a checkout flow, and a dashboard. No storefronts to design, no complex catalogs. Gumroad's philosophy is "start selling in minutes" with features like simple checkout links, pay-what-you-want pricing, email delivery, and subscription/membership support.

## Site Map

```
gumroad.com
├── Home
├── Discover
│   ├── Featured products
│   ├── Categories
│   │   ├── Design
│   │   ├── Drawing & Painting
│   │   ├── Software Development
│   │   ├── Education
│   │   ├── Music & Sound Design
│   │   ├── Fitness & Health
│   │   ├── Photography
│   │   ├── Writing & Publishing
│   │   ├── Business & Money
│   │   ├── 3D
│   │   ├── Films
│   │   └── Other
│   ├── Top products
│   └── New releases
├── Product Page (/{creator}/{product})
│   ├── Cover image / preview
│   ├── Description (rich text)
│   ├── Pricing (fixed, tiered, or pay-what-you-want)
│   ├── Ratings & reviews
│   ├── Buy / Subscribe button
│   └── Creator info
├── Creator Profile (/{creator})
│   ├── Bio & avatar
│   ├── Products list
│   ├── Followers
│   └── Social links
├── Checkout
│   ├── Cart / single product
│   ├── Payment (card, PayPal)
│   ├── Discount code
│   └── Confirmation + download/access
├── Creator Dashboard (Auth)
│   ├── Products
│   │   ├── Create / Edit product
│   │   ├── Content files
│   │   ├── Pricing & variants
│   │   └── Workflow automations
│   ├── Sales & analytics
│   ├── Customers / email list
│   ├── Payouts
│   ├── Affiliates
│   └── Settings
├── Features
│   ├── Digital products
│   ├── Subscriptions / memberships
│   ├── Email marketing
│   ├── Affiliates
│   └── Workflows
├── Pricing
├── Blog / University
├── Help Center
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Creator terms
└── Auth
    ├── Log in
    └── Start selling
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Minimal top bar | Logo, Discover, Features, Pricing, Log in, Start selling CTA |
| Discover | Category sidebar + sort | Browse by category, top/new/featured |
| Creator profile | Product list | Simple scrollable product cards |
| Dashboard | Left sidebar | Products, Sales, Customers, Payouts, Affiliates, Settings |
| Footer | Minimal | Features, Company, Resources, Legal |

**Key pattern**: Extreme minimalism. The product page IS the storefront. Creators share direct links — no need for a full website. One URL = one product = one checkout.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Product | name, description (rich text), cover image, preview, price (fixed/PWYW/tiered), files/content, category, tags, ratings | has Variants, has Reviews, belongs to Creator |
| Variant | name, price, description (e.g., different tiers of a course) | belongs to Product |
| Subscription | product, interval (monthly/annually), price, subscriber count | belongs to Product, → Subscriber |
| Creator | name, bio, avatar, products, followers, social links, payout info | has Products, has Followers |
| Sale | product, customer, amount, discount code, timestamp, payout status | → Product, → Customer |
| Review | customer, rating (1-5 stars), comment, product | belongs to Gig/Seller, → Buyer |
| Workflow | trigger (purchase, refund), actions (email, webhook, content unlock) | → Product, triggered by Events |

## User Flows

### 5a. Creator — Sell a product

```
Sign up → "New Product" → choose type (digital, course, membership, physical) →
  Upload content files, set cover image, write description →
  Set pricing (fixed, pay-what-you-want with minimum, tiered variants) →
  Configure delivery (instant download, drip content, email) →
  Get product URL → share anywhere (social, email, website embed)
```


### 5b. Buyer — Purchase

```
Click product link → view product page → Select variant (if applicable) → set price (if PWYW) →
  Enter email + payment → checkout (overlay or full page) →
  Receive email with download link / access → Optionally leave a review
```


### 5c. Creator — Membership

```
Create membership product → set monthly/annual pricing →
  Define member-only content (posts, files, community) → Members subscribe → recurring billing →
  Creator posts updates → members notified via email
```



### Email Marketing

```
Dashboard → Email → New Post/Update → Write content → Select audience (all customers / product-specific) → Schedule or send immediately → Track opens and clicks
```

### Affiliate Program Setup

```
Dashboard → Affiliates → Enable for product → Set commission rate (%) → Generate affiliate signup link → Affiliates register → Track referrals and payouts
```

## URL / Route Structure

```
/                           → Home
/discover/                  → Discovery marketplace
/discover/{category}/       → Category browse
/{creator}/                 → Creator profile
/{creator}/{product}/       → Product page
/checkout/                  → Checkout flow
/features/                  → Feature overview
/pricing/                   → Pricing (flat fee %)
/blog/                      → Blog
/university/                → Creator education
/help/                      → Help center
/dashboard/                 → Creator dashboard (auth)
/dashboard/products/        → Manage products (auth)
/dashboard/sales/           → Sales analytics (auth)
/dashboard/customers/       → Email list (auth)
/dashboard/payouts/         → Payout history (auth)
/library/                   → Buyer's purchased products (auth)
/discover/{category}/{subcategory}/  # Subcategory browse
/discover/top/                       # Top products
/discover/new/                       # New releases
/{creator}/follow/                   # Follow creator
/dashboard/products/{id}/edit/       # Edit product
/dashboard/products/{id}/analytics/  # Product analytics
/dashboard/products/{id}/content/    # Product content files
/dashboard/affiliates/               # Affiliate management
/dashboard/workflows/                # Workflow automations
/dashboard/email/                    # Email campaigns
/dashboard/settings/                 # Account settings
/dashboard/settings/profile/         # Profile settings
/dashboard/settings/payout/          # Payout settings
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Discover search | Keyword search across all products, autocomplete |
| Category filter | Browse by category, rating, price range |
| Sort | Top rated, newest, most popular, price |
| Creator search | Find creators by name |
| Dashboard search | Filter sales by product, date, customer |
| Customer search | Search email list, filter by product purchased |

- **Product content search**: Search within product descriptions and titles
- **Email campaign filtering**: Filter past campaigns by product, date, open rate
- **Affiliate tracking**: Search affiliates by name, product, performance
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Multi-column product grid, sidebar filters, full dashboard charts |
| Tablet (768–1023px) | 2-column grid, collapsible sidebar |
| Mobile (<768px) | Single-column, full-width product cards, bottom-sheet checkout, simplified dashboard |
| Embedded | Checkout overlay widget embeddable on any website |


### Platform-Specific UX
- Product page IS the storefront — no separate website needed, just share the URL
- Pay-what-you-want pricing with minimum lets buyers set their own price
- Overlay checkout embeds directly on any website via Gumroad.js widget
- Workflow automations trigger actions (emails, webhooks) on purchase, refund, or subscription events

## Access Control

| Role | Access |
|------|--------|
| Visitor | Browse Discover, view product pages, read reviews |
| Buyer | Purchase, download, access memberships, library of purchases, leave reviews |
| Creator (Free) | Unlimited products, sales, customers — Gumroad takes % per sale |
| Creator (Pro) | Lower fee %, custom domain, remove Gumroad branding, advanced analytics |
| Affiliate | Unique referral links, commission tracking, payout |
| Internal Admin | Content moderation, payout management, abuse detection |
