---
brand: Mercari
tagline: The selling app. Sell almost anything.
category: E-Commerce & Fintech
website: https://www.mercari.com
---

# Information Architecture — Mercari

## Overview
Mercari is a consumer-to-consumer (C2C) marketplace where anyone can buy and sell almost anything — from clothing and electronics to home goods and collectibles. The IA revolves around **listing simplicity** (photo-first listing in minutes), **buyer protection** (item authentication for luxury goods, money-back guarantee), and **prepaid shipping labels** that remove friction. Mercari's architecture supports both web and app with near-feature-parity.

## Site Map

```
mercari.com
├── Home (personalized feed)
├── Browse
│   ├── Categories
│   │   ├── Women's
│   │   ├── Men's
│   │   ├── Electronics
│   │   ├── Home
│   │   ├── Toys & Games
│   │   ├── Sports
│   │   └── ... (20+ categories)
│   ├── Brands
│   ├── Trending
│   └── Deals
├── Search
│   ├── Results
│   ├── Saved searches
│   └── Search alerts
├── Sell
│   ├── List an item
│   ├── Shipping options
│   ├── Smart pricing
│   └── Seller dashboard
├── Item Detail Page
│   ├── Photos
│   ├── Description
│   ├── Seller info
│   ├── Shipping details
│   ├── Make an offer
│   ├── Buy now
│   └── Authenticate (luxury)
├── Mercari Authenticate
│   ├── How it works
│   └── Eligible brands
├── My Page (Profile)
│   ├── Listings
│   ├── Purchases
│   ├── Offers (sent/received)
│   ├── Balance & earnings
│   ├── Reviews
│   └── Settings
├── Help Center
│   ├── Buying
│   ├── Selling
│   ├── Shipping
│   ├── Returns
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Prohibited items
└── Auth
    ├── Log in
    └── Sign up
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar (prominent), Browse, Sell button, Inbox, Profile, Cart |
| Browse | Category sidebar + filters | Category tree, price range, condition, brand |
| Footer | Multi-column | Categories, Resources, Company, Legal, App badges |
| App | Bottom tab bar | Home, Search, Sell (camera icon), Inbox, My Page |

**Key pattern**: Search bar is the dominant navigation element. The "Sell" button is always visible as a persistent CTA, reflecting the two-sided marketplace model.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | title, photos (up to 12), description, price, condition, category, brand, size, shipping method, seller | — |
| Offer | listing, buyer, amount, expiration, counter-offer, status | — |
| User Profile | username, avatar, rating, reviews count, listings, verified badge | — |
| Transaction | listing, buyer, seller, price, shipping tracking, status (purchased → shipped → delivered → rated) | — |
| Shipping Label | carrier, tracking number, estimated delivery, prepaid flag | — |
| Authentication | listing, status (pending/authentic/not authentic), certificate | — |

## User Flows

### List an item
```
Tap "Sell" → camera opens → take/upload photos → AI auto-suggests title, category, brand from photo → Fill in details (condition, description, price) → Select shipping (prepaid label or ship on your own) → Enable Smart Pricing (auto price drops) → Publish
```

### Buy an item
```
Search or browse → find item → view detail page → "Buy Now" or "Make an Offer" (negotiate) → Checkout → select payment method (credit, debit, Mercari balance) → Seller ships → tracking visible to buyer → Item delivered → buyer confirms → rate seller → funds released
```

### Authenticate luxury item
```
Seller lists luxury item → opts into Mercari Authenticate → Buyer purchases → item ships to Mercari authentication center → Expert inspection → item verified authentic → Forwarded to buyer with authentication certificate
```

## URL / Route Structure

```
/                           → Home feed
/search/                    → Search results
/search/?keyword={q}        → Keyword search
/category/{id}/             → Category browse
/item/{item-id}/            → Item detail page
/sell/                      → List new item
/mypage/                    → User profile/dashboard
/mypage/listings/           → Active listings
/mypage/purchases/          → Purchase history
/mypage/balance/            → Earnings & balance
/authenticate/              → Authentication info
/help/                      → Help center
/help/{category}/           → Help category
/help/{category}/{article}/ → Help article
mercari.com/mypage/reviews/              # User reviews
mercari.com/mypage/offers/               # Sent and received offers
mercari.com/mypage/settings/             # Account settings
mercari.com/mypage/settings/profile/     # Profile settings
mercari.com/mypage/settings/shipping/    # Shipping preferences
mercari.com/mypage/settings/payment/     # Payment methods
mercari.com/mypage/settings/notifications/ # Notification settings
mercari.com/brands/{brand}/              # Brand browse page
mercari.com/trending/                    # Trending items
mercari.com/deals/                       # Deals and promotions
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Autocomplete, recent searches, trending terms, photo search |
| Filters | Category, price range, condition (new/like new/good/fair/poor), brand, size, color |
| Sort | Relevance, newest, price low-high, price high-low, likes |
| Saved search | Save criteria → push notification when new match listed |
| Smart pricing alerts | Buyer gets notified when watched item drops in price |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Multi-column grid (4-5 items), sidebar filters, full item detail |
| Tablet (768–1023px) | 3-column grid, collapsible filters |
| Mobile (<768px) | 2-column grid, bottom sheet filters, floating sell button |
| App (iOS/Android) | Bottom tabs, camera-first sell flow, swipeable photos, push notifications |

## Access Control

| Role | Access |
|------|--------|
| Visitor | Browse, search, view items (cannot buy or sell) |
| Logged-in User | Buy, sell, make offers, message sellers, reviews |
| Verified User | Higher selling limits, direct deposit of earnings |
| Seller | Listing management, earnings dashboard, shipping labels |
| Buyer | Purchase history, returns, order tracking |
| Internal Moderator | Listing review, prohibited items enforcement, dispute resolution |
| Authentication Team | Luxury item verification, certificate issuance |

## Transaction Lifecycle

```
Listed → Purchased → Payment Held → Seller Ships (3 day window) → In Transit → Delivered → Buyer Confirms (3 day window) → Seller Paid
                                                                                              ↘ Buyer Opens Return Case → Resolution → Refund or Release
```

## Seller Tools

| Tool | Description |
|------|-------------|
| Smart Pricing | Automatic price drops over time to increase sell probability |
| Promote Listings | Pay to boost visibility in search results |
| Offer to Likers | Send discounted offers to users who liked your item |
| Shipping Calculator | Compare carrier rates (USPS, FedEx, UPS) |
| Sales Analytics | Track views, likes, offers, and conversion per listing |
| Bulk Listing | List multiple items quickly with batch photo upload |
| Photo Enhancer | AI-powered photo background removal and enhancement |

## Trust & Safety

- **Mercari Authenticate:** Expert verification for luxury items ($200+)
- **Buyer Protection:** Full refund if item not as described, missing, or damaged
- **Ratings System:** Mutual ratings after each transaction; visible on profile
- **Prohibited Items:** Automated + manual review of listings for policy violations
- **Payment Hold:** Funds held in escrow until buyer confirms receipt

## Fee Structure

| Fee Type | Amount |
|----------|--------|
| Selling fee | 10% of sale price |
| Payment processing | 2.9% + $0.30 |
| Shipping (prepaid) | Varies by weight/size; discounted USPS/FedEx/UPS rates |
| Direct deposit | Free |
| Instant pay | $2 per withdrawal |
| Authentication | Free for qualifying luxury items |

## Platform Comparison

| Feature | Mercari | eBay | Poshmark |
|---------|---------|------|----------|
| Listing fee | Free | Insertion fees | Free |
| Selling fee | 10% | 13.25% | 20% |
| Shipping | Prepaid labels | Seller arranges | Prepaid USPS |
| Authentication | Built-in ($200+) | Third party | Built-in ($500+) |
| Offer system | Buyer-initiated | Auction + offers | Buyer + seller |
| Social features | Minimal | Minimal | Heavy (parties, sharing) |
| Categories | General merchandise | Everything | Fashion-focused |

## Shipping Options

| Carrier | Weight Limit | Max Dimensions | Tracking |
|---------|-------------|----------------|----------|
| USPS First Class | 1 lb | 22" × 18" × 15" | Yes |
| USPS Priority | 70 lbs | 108" combined | Yes |
| FedEx Home | 150 lbs | 108" length | Yes |
| FedEx SmartPost | 70 lbs | 130" combined | Yes |
| UPS Ground | 150 lbs | 108" length | Yes |
