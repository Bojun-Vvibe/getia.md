---
brand: Grab
tagline: "Southeast Asia's everyday everything app. Ride, eat, shop, pay — all in one."
category: Super App
website: https://grab.com
---

# Grab — Information Architecture

## Overview

Grab is Southeast Asia's leading super-app, serving 8 countries across the region (Singapore, Malaysia, Indonesia, Philippines, Thailand, Vietnam, Cambodia, Myanmar). The mental model is **one app for daily life** — starting as a ride-hailing service and expanding into food delivery (GrabFood), payments (GrabPay), groceries (GrabMart), parcel delivery (GrabExpress), and financial services (loans, insurance, investments). The home screen functions as an operating system for urban life in SEA, with a service grid and unified wallet.

## Site Map

```
├── Home
│   ├── Search Bar (universal: places, food, items)
│   ├── Service Grid (primary entry points)
│   │   ├── 🚗 Transport (ride-hailing)
│   │   ├── 🍔 Food (GrabFood)
│   │   ├── 🛒 Mart (GrabMart — groceries, convenience)
│   │   ├── 📦 Express (parcel delivery)
│   │   ├── 💸 Pay (GrabPay)
│   │   ├── 💳 Finance (GrabFinance)
│   │   ├── 🏨 Hotels (travel)
│   │   ├── 🎟️ Rewards (GrabRewards)
│   │   └── ••• More
│   ├── Promotions / Deals Carousel
│   ├── For You (personalized suggestions)
│   ├── Recent Orders / Rides
│   └── GrabUnlimited Banner (subscription)
├── Transport (GrabCar / GrabBike)
│   ├── Map View (pickup location, GPS)
│   ├── "Where to?" Search
│   ├── Saved Places (Home, Work)
│   ├── Recent Destinations
│   ├── Vehicle Options
│   │   ├── GrabCar (standard 4-seater)
│   │   ├── GrabCar Premium
│   │   ├── GrabCar 6-Seater
│   │   ├── GrabBike (motorbike, SEA-specific)
│   │   ├── GrabShare (shared rides)
│   │   ├── GrabTaxi (metered taxi)
│   │   └── GrabRent (hourly rental)
│   ├── Price Estimate + ETA per Option
│   ├── Payment Method (GrabPay, card, cash)
│   ├── Promo Code
│   ├── [Book] → Match → Track → Ride → Rate
│   └── Safety Features (Share Ride, SOS)
├── Food (GrabFood)
│   ├── Restaurant Discovery
│   │   ├── Near Me
│   │   ├── Cuisine Filters (Asian, Western, Halal, Vegetarian)
│   │   ├── Featured Collections
│   │   ├── Trending
│   │   ├── Budget Meals
│   │   ├── Self-Pickup (cheaper)
│   │   └── Scheduled Orders
│   ├── Restaurant Page
│   │   ├── Menu (categories, items, photos, prices)
│   │   ├── Customizations (spice level, add-ons)
│   │   ├── Rating & Reviews
│   │   ├── Delivery Fee + Time
│   │   └── Minimum Order
│   ├── Cart
│   │   ├── Items
│   │   ├── Notes for Restaurant
│   │   ├── Delivery Address
│   │   ├── Payment
│   │   ├── Promo / Voucher
│   │   └── [Place Order]
│   ├── Order Tracking
│   │   ├── Status (confirmed → preparing → driver assigned → on the way → delivered)
│   │   ├── Driver on Map (live)
│   │   ├── Contact Driver
│   │   └── ETA
│   └── Order History
├── Mart (GrabMart)
│   ├── Store Selection (convenience stores, supermarkets, pharmacies)
│   ├── Store Page (browse by category, search items)
│   ├── Cart & Checkout
│   ├── Order Tracking (same as food)
│   └── Scheduled Delivery
├── Express (GrabExpress)
│   ├── Instant Delivery (same-day)
│   ├── Pickup & Destination
│   ├── Package Size & Weight
│   ├── Price Estimate
│   ├── Book & Track
│   └── Parcel History
├── GrabPay (Wallet)
│   ├── Balance
│   ├── Top Up (bank, card, convenience store, PayNow)
│   ├── Send Money (P2P)
│   ├── QR Pay (scan to pay at merchants)
│   ├── Bill Payments (utilities, phone, internet)
│   ├── Transaction History
│   ├── Linked Payment Methods
│   ├── GrabPay Card (virtual Mastercard)
│   └── PayLater (buy now, pay later)
├── GrabFinance
│   ├── GrabInvest (micro-investing)
│   ├── GrabInsure (insurance products)
│   ├── GrabLoan (personal/business loans)
│   ├── AutoInvest (round-up investing)
│   └── Credit Score
├── Rewards (GrabRewards)
│   ├── Points Balance
│   ├── Earn (per ride, per order, challenges)
│   ├── Redeem (vouchers, partner rewards)
│   ├── Membership Tier (Member → Silver → Gold → Platinum)
│   ├── Tier Benefits
│   ├── GrabUnlimited (subscription: free delivery, discounts)
│   └── Challenges (complete X rides, earn bonus)
├── Activity
│   ├── All Orders / Rides (combined timeline)
│   ├── Order/Ride Detail
│   ├── Receipts
│   ├── Report Issue
│   └── Reorder / Rebook
├── Profile / Account
│   ├── Name, Photo, Phone
│   ├── GrabPay Wallet
│   ├── Saved Places
│   ├── Saved Addresses (delivery)
│   ├── Favorites (restaurants, stores)
│   ├── GrabRewards Tier
│   ├── Referrals
│   ├── Emergency Contacts
│   ├── Notification Settings
│   ├── Language / Region
│   └── Help & Support
└── Help
    ├── Recent Trip/Order Issues
    ├── FAQ
    ├── Safety
    └── Live Chat Support
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4-5 tabs | Home, Food, Pay, Activity, Account |
| **Service Grid** | Icon grid (8-12 icons) | Tap to enter each service's full-screen experience |
| **Transport** | Map-dominant, bottom sheet | Same as Uber pattern: "Where to?" → options → book |
| **Food** | Restaurant feed | Vertical scroll, category filters, cart overlay |
| **Wallet** | Balance-first | QR scanner prominent, quick actions |
| **Universal Search** | Top of home | Search across all services (places, restaurants, products) |

### Service Grid (Home Screen)
```
┌──────────┬──────────┬──────────┬──────────┐
│ 🚗 Car   │ 🍔 Food  │ 🛒 Mart  │ 📦 Express│
├──────────┼──────────┼──────────┼──────────┤
│ 💸 Pay   │ 💳 Finance│ 🏨 Hotels│ ⭐ Rewards│
└──────────┴──────────┴──────────┴──────────┘
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | phone, name, email, avatar, region, language, grab_pay_wallet, rewards_tier | has Wallet, Orders, Rides, Addresses |
| Wallet | balance, currency, payment_methods[], grab_pay_card | belongs to User |
| Transaction | type (ride/food/mart/express/p2p/topup/bill), amount, status, merchant, timestamp | belongs to Wallet |
| Ride | pickup, destination, vehicle_type, driver, fare, status, route, rating | belongs to User |
| Driver | name, photo, vehicle, rating, plate, status | has Rides |
| FoodOrder | restaurant, items[], delivery_address, delivery_fee, total, status, driver | belongs to User |
| Restaurant | name, cuisine[], rating, delivery_time, minimum_order, photos[], operating_hours | has Menu |
| MartStore | name, type (convenience/supermarket/pharmacy), delivery_time | has Products |
| RewardsTier | tier (member/silver/gold/platinum), points, next_tier_threshold, benefits[] | belongs to User |
| GrabUnlimited | status, price, benefits[free_delivery, discounts], renewal | subscription |

### Cross-Service Identity
- Single login for all services
- GrabPay wallet as default payment everywhere
- Shared addresses across transport, food, mart, express
- Unified rewards points from all services
- Combined activity timeline

### Order Status Flow (Food/Mart)
```
placed → confirmed → preparing → driver_assigned → picked_up → on_the_way → delivered
                                                                              ↘ rated
```

## User Flows

### Order Food
```
Home → [Food] → Browse Restaurants → "Hawker Chan" → Select Items → Customize → Add to Cart → Checkout (GrabPay) → Apply Voucher → [Order] → Track Driver on Map → Delivered → Rate
```

### Book a GrabBike
```
Home → [Transport] → "Where to?" → Office → GrabBike S$5, 12 min → [Book] → Driver Matched → Track → Arrive → GrabPay Auto-Charged → Rate → Earn Points
```

### Pay at Store
```
Home → [Pay] → [Scan] → Scan Merchant QR → Enter S$15 → Confirm (PIN/biometric) → Payment Complete → Earn Rewards Points → Receipt
```

### Earn and Use Rewards
```
Complete Rides + Orders → Earn Points → Check Rewards → Redeem for GrabFood Voucher (500 pts = S$5 off) → Use on Next Order → Tier Up to Gold → Unlock Free Delivery
```

## URL / Route Structure

> Grab is primarily a native mobile app. Deep links structure:

```
/                              → Home
/transport                     → Transport (ride-hailing)
/transport/:rideId             → Ride Tracking
/food                          → GrabFood
/food/restaurant/:id           → Restaurant Menu
/food/orders/:id               → Order Tracking
/mart                          → GrabMart
/mart/store/:id                → Store
/express                       → GrabExpress
/pay                           → GrabPay Wallet
/pay/scan                      → QR Scanner
/pay/send                      → Send Money
/pay/bills                     → Bill Payments
/pay/history                   → Transactions
/finance                       → GrabFinance
/rewards                       → GrabRewards
/activity                      → All Orders & Rides
/account                       → Account
/settings                      → Settings
/help                          → Help
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Universal | Places, restaurants, products, services | Service type | Relevance |
| Food | Restaurant name, dish, cuisine | Cuisine, Price, Rating, Delivery Time, Promos, Halal | Recommended, Rating, Distance, Price, Delivery Time |
| Mart | Store name, product | Store type, Delivery Time | Recommended, Distance |
| Transport | Address, place name | — | Relevance, recent |
| Transactions | Amount, merchant | Type, Date Range | Date, amount |

## Responsive Behavior

| Breakpoint | Layout | Navigation |
|------------|--------|------------|
| Mobile (primary) | Single column, service grid, bottom tabs | Tab bar + service grid |
| Tablet | Wider grid, 2-column food | Bottom tabs or sidebar |
| Desktop (merchant dashboard) | Full dashboard | Sidebar |

### Super-App-Specific UX
- Service grid on home = operating system metaphor
- GrabPay wallet is the financial backbone (accepted everywhere)
- GrabBike: motorbike-hailing unique to SEA (faster, cheaper in traffic)
- Halal filter: critical for Muslim-majority markets (Malaysia, Indonesia)
- Cash option: many SEA users are unbanked
- Multiple languages per country (e.g., English + Malay + Chinese in Malaysia)
- QR code payment deeply integrated (offline merchants)
- GrabUnlimited subscription drives loyalty across all services
- Real-time driver tracking across transport, food, and mart

## Access Control

| Feature | Unverified | Verified | GrabUnlimited |
|---------|-----------|----------|---------------|
| Transport | — | ✅ | ✅ + discounts |
| Food | — | ✅ | ✅ + free delivery |
| GrabPay | — | ✅ (limits) | ✅ |
| Finance | — | KYC required | ✅ |
| Rewards | — | ✅ | ✅ + bonus points |
| Cash Payment | — | ✅ | ✅ |

### Regional Compliance
- KYC for wallet features (varies by country)
- Cash payment option (critical in SEA)
- Local payment methods (GCash in PH, OVO in ID)
- Driver background checks per country regulations
- Halal certification for food
- Multi-currency support
