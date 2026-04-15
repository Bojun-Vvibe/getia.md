# Subscription Box — Information Architecture

## Overview

A recurring subscription commerce platform (Birchbox, FabFitFun, HelloFresh style). The mental model is **curated surprise + recurring delivery** — subscribers choose a plan, customize preferences, receive periodic boxes, and discover products. Retention, personalization, and unboxing delight drive the experience.

## Site Map

### Subscriber-Facing

```
├── Home / Landing
│   ├── Hero (value proposition + CTA)
│   ├── How It Works (3-step visual)
│   ├── Current / Past Boxes Showcase
│   ├── Testimonials / Reviews
│   ├── Plan Options & Pricing
│   └── Gift a Box CTA
├── How It Works
│   ├── Choose Your Plan
│   ├── Set Preferences / Quiz
│   ├── Receive & Enjoy
│   └── Rate & Review Items
├── Plans & Pricing
│   ├── Plan Comparison (monthly, 3mo, 6mo, annual)
│   ├── What's Included
│   └── FAQ
├── Subscribe Flow
│   ├── Select Plan
│   ├── Preference Quiz (multi-step)
│   │   ├── Profile Questions (age, skin type, size, etc.)
│   │   ├── Category Preferences
│   │   ├── Exclusions / Allergies
│   │   └── Style / Taste Selections
│   ├── Account Creation
│   ├── Shipping Address
│   ├── Payment
│   └── Confirmation
├── My Box (Current Month)
│   ├── Box Contents Preview (if applicable)
│   ├── Customization Window
│   │   ├── Choice Items (pick 1 of 3)
│   │   └── Add-Ons
│   ├── Shipping Status & Tracking
│   └── Estimated Delivery
├── Shop
│   ├── Add-On Marketplace
│   ├── Past Box Items
│   ├── Full-Size Versions
│   ├── Limited Editions
│   └── Cart & Checkout (one-time purchase)
├── Box History
│   ├── Past Boxes (by month)
│   ├── Box Detail (items, photos)
│   ├── Item Reviews & Ratings
│   └── Reorder Items
├── Account
│   ├── Subscription Status
│   │   ├── Current Plan
│   │   ├── Next Billing Date
│   │   ├── Upgrade / Downgrade
│   │   ├── Pause Subscription
│   │   ├── Skip a Month
│   │   └── Cancel
│   ├── Preferences / Profile Quiz
│   ├── Shipping Address
│   ├── Payment Method
│   ├── Billing History
│   ├── Referral Program
│   ├── Rewards / Points
│   └── Notification Settings
├── Community
│   ├── Unboxing Feed (user photos)
│   ├── Product Reviews
│   └── Member Forum
├── Gifts
│   ├── Gift Plans (1mo, 3mo, 6mo)
│   ├── Gift Card
│   ├── Customize Gift Message
│   └── Recipient Info
├── Help
│   ├── FAQ
│   ├── Shipping & Delivery
│   ├── Returns & Exchanges
│   ├── Contact Support
│   └── Manage Subscription FAQ
└── Footer
    ├── About Us
    ├── Careers
    ├── Press
    ├── Terms & Conditions
    ├── Privacy Policy
    └── Social Links
```

### Admin / Back Office

```
├── Dashboard
│   ├── Active Subscribers Count
│   ├── MRR / Revenue
│   ├── Churn Rate
│   ├── Upcoming Shipments
│   └── Key Metrics (LTV, CAC)
├── Subscribers
│   ├── Subscriber List
│   ├── Subscriber Detail (plan, preferences, history)
│   ├── Segments (new, at-risk, churned)
│   └── Export
├── Boxes
│   ├── Current Box (curation)
│   │   ├── Items Selected
│   │   ├── Variant Assignments
│   │   └── Preview
│   ├── Box Calendar (upcoming months)
│   └── Past Boxes
├── Products
│   ├── Product Catalog
│   ├── Add / Edit Product
│   ├── Vendor Management
│   └── Inventory
├── Orders & Fulfillment
│   ├── Shipment Queue
│   ├── Fulfillment Status
│   ├── Returns
│   └── One-Time Orders (shop)
├── Shop Management
│   ├── Add-Ons
│   ├── Marketplace Settings
│   └── Promotions
├── Analytics
│   ├── Subscriber Growth
│   ├── Churn Analysis
│   ├── Product Ratings
│   ├── Revenue Reports
│   └── Cohort Analysis
├── Marketing
│   ├── Referral Program
│   ├── Gift Cards
│   ├── Coupons / Promos
│   └── Email Campaigns
└── Settings
    ├── Billing Cycles
    ├── Shipping Zones & Rates
    ├── Payment Providers
    ├── Quiz Configuration
    └── Notifications
```

## Navigation Model

### Subscriber

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, Shop, My Box, Account, Cart |
| **CTA Bar** | Persistent (logged-out) | "Subscribe Now" banner or sticky button |
| **Box Navigation** | Horizontal timeline | Navigate between past boxes by month |
| **Quiz Flow** | Step indicator | Progress bar during preference quiz |
| **Account Tabs** | Tabbed interface | Subscription, Preferences, Billing, Referrals |
| **Footer** | Full-width | Help, About, Social, Legal |

### Admin

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Sidebar** | Fixed left nav | Dashboard, Subscribers, Boxes, Products, Orders, Analytics |
| **Contextual** | Tabs within sections | Box: Items / Variants / Preview / Ship |

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Subscriber | name, email, plan, status, preferences, joined_at | has Subscription, Preferences, Orders |
| Subscription | plan_type, status, billing_cycle, next_billing, price | belongs to Subscriber |
| Plan | name, price, frequency, item_count, description | has many Subscriptions |
| Box | month, year, theme, status (curating/shipped/delivered) | has many BoxItems |
| BoxItem | product, variant_assignment, is_choice, is_addon | belongs to Box and Product |
| Product | name, description, images[], full_size_price, vendor | belongs to Vendor, has many Reviews |
| Preference | category, values[], exclusions[] | belongs to Subscriber |
| Review | rating (1-5), text, product_photo | belongs to Subscriber and Product |
| Order | type (subscription/shop), items, total, status | belongs to Subscriber |
| GiftSubscription | plan, sender, recipient, message, months, redeemed | created by User |
| Referral | referrer, referee, reward_type, status | between Subscribers |

### Subscription Status Flow
`trial → active → paused → active → cancelled`
`↘ past_due → suspended → cancelled`

### Box Lifecycle
`planning → curating → customization_window → locked → fulfilling → shipped → delivered`

## User Flows

### Subscribe
```
Landing → Plans & Pricing → Select Plan → Preference Quiz → Create Account → Shipping → Payment → Confirmation → Welcome Email
```

### Monthly Box Experience
```
Email (box preview) → My Box → Customize Choices → Add-Ons → Wait for Delivery → Track Shipment → Receive → Unbox → Rate Items
```

### Shop Add-On
```
My Box → Add-Ons → Browse → Add to Cart → Checkout (uses saved payment) → Ships with Box
```

### Gift a Subscription
```
Gifts → Select Plan Duration → Recipient Info → Gift Message → Payment → Send Gift Email/Card
```

### Skip / Pause
```
Account → Subscription → Skip Next Month → Confirm → Reactivation Date Shown
```

## URL / Route Structure

### Subscriber
```
/                              → Landing / Home
/how-it-works                  → How It Works
/plans                         → Plans & Pricing
/subscribe                     → Subscribe Flow
/subscribe/quiz                → Preference Quiz
/subscribe/checkout            → Payment
/my-box                        → Current Month Box
/my-box/customize              → Choice / Add-On Window
/my-box/tracking               → Shipment Tracking
/shop                          → Add-On Marketplace
/shop/:slug                    → Product Detail
/cart                          → Shopping Cart
/checkout                      → One-Time Purchase Checkout
/history                       → Past Boxes
/history/:year/:month          → Box Detail
/account                       → Account Overview
/account/subscription          → Manage Subscription
/account/preferences           → Edit Preferences
/account/billing               → Billing & Payment
/account/referrals             → Referral Program
/account/rewards               → Points / Rewards
/gift                          → Gift Options
/community                     → Community Feed
/help                          → Help Center
```

### Admin
```
/admin                         → Dashboard
/admin/subscribers             → Subscriber List
/admin/subscribers/:id         → Subscriber Detail
/admin/boxes                   → Box Management
/admin/boxes/:id               → Box Curation
/admin/products                → Product Catalog
/admin/orders                  → Orders & Fulfillment
/admin/shop                    → Shop Management
/admin/analytics               → Analytics
/admin/marketing               → Marketing & Promos
/admin/settings                → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Shop | Product name, brand, category | Category, Price Range, Rating, In Stock | Popularity, Price, Rating, Newest |
| Box History | Month, product name | Year, Rating Given | Date (newest), Rating |
| Admin Subscribers | Name, email | Plan, Status, Joined Date, Segment | Name, Join Date, LTV, Status |
| Admin Products | Name, vendor, SKU | Category, Vendor, Stock | Name, Rating, Times Featured |

## Responsive Behavior

| Breakpoint | Landing | My Box | Shop | Quiz |
|------------|---------|--------|------|------|
| Desktop (≥1024px) | Full hero + grid | Timeline + detail | 3-4 column grid | Side preview |
| Tablet (768–1023px) | Stacked sections | Simplified timeline | 2-3 column grid | Single column |
| Mobile (<768px) | Stacked, sticky CTA | Card layout | 1-2 column grid | Full-screen steps |

### Mobile Adaptations
- Swipe through past boxes horizontally
- Tap to reveal item details in box preview
- Sticky "Subscribe" CTA on landing
- Quiz: one question per screen with progress indicator
- Pull-to-refresh tracking status

## Access Control

### Subscriber

| Role | Browse | Subscribe | My Box | Shop | Community |
|------|--------|-----------|--------|------|-----------|
| Guest | ✅ | ✅ | — | — | View only |
| Subscriber | ✅ | Manage | ✅ | ✅ | ✅ |
| Gift Recipient | ✅ | Redeem | ✅ | ✅ | ✅ |

### Admin

| Role | Dashboard | Subscribers | Boxes | Products | Analytics | Settings |
|------|-----------|-------------|-------|----------|-----------|----------|
| Owner | ✅ | CRUD | CRUD | CRUD | ✅ | ✅ |
| Curator | ✅ | Read | CRUD | Read | ✅ | — |
| Support | ✅ | Read/Update | Read | Read | — | — |
| Fulfillment | ✅ | — | Read | Read | — | — |
