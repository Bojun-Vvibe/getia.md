---
brand: Uber Eats
tagline: "Get almost, almost anything delivered. Restaurant food, grocery, and convenience on demand."
category: Food Delivery
website: https://www.ubereats.com
---

# Uber Eats — Information Architecture

## Overview

Uber Eats is Uber's food and grocery delivery platform, leveraging Uber's existing driver network and mapping infrastructure. The mental model is **the Uber of food** — tap to browse, order, and track delivery in real-time with the same reliability and map experience as ride-hailing. Uber Eats differentiates through its integration with the Uber super app (rides + eats in one app), Uber One membership (combined ride + delivery subscription), live activity tracking (real-time driver GPS), restaurant Eats Pass, grocery delivery partnerships, and a strong international presence. The platform also serves merchants via Uber Direct (white-label delivery API).

## Site Map

```
├── Home
│   ├── Address / Delivery Location
│   ├── Delivery / Pickup / Dine-In Toggle
│   ├── Search Bar ("Food, groceries, drinks, etc.")
│   ├── Category Quick Filters (horizontal scroll)
│   │   ├── Deals, Pizza, Burgers, Asian, Mexican, Desserts
│   │   ├── Grocery, Convenience, Alcohol, Pharmacy
│   │   └── "See All" (full category list)
│   ├── Featured Sections
│   │   ├── Uber One Members Save
│   │   ├── $0 Delivery Fee
│   │   ├── Popular Near You
│   │   ├── Today's Offers
│   │   ├── New on Uber Eats
│   │   ├── Under 30 Minutes
│   │   ├── Highly Rated
│   │   ├── Picked for You
│   │   └── National Brands
│   └── Restaurant/Store Cards
│       ├── Image, Name, Rating, Delivery Time
│       ├── Delivery Fee
│       ├── Uber One Badge
│       └── Offer Badge (buy 1 get 1, % off)
├── Search / Browse
│   ├── Results (restaurants + specific dishes)
│   ├── Filters
│   │   ├── Sort (Most Popular, Rating, Delivery Time, Price)
│   │   ├── Price Range ($-$$$$)
│   │   ├── Max Delivery Fee
│   │   ├── Dietary (Vegan, Vegetarian, Gluten-Free, Halal)
│   │   ├── Rating (4.5+)
│   │   ├── Uber One (eligible)
│   │   └── Deals
│   └── Related Searches
├── Restaurant / Store Page
│   ├── Header (photo, name, rating, delivery time/fee, distance)
│   ├── Promotions Bar (active deals)
│   ├── Info (hours, address, ratings breakdown)
│   ├── Menu Categories (sticky scrollable tabs)
│   ├── Menu Items
│   │   ├── Item Card (name, description, price, image)
│   │   └── Item Detail Sheet
│   │       ├── Image
│   │       ├── Description
│   │       ├── Required Choices
│   │       ├── Optional Add-Ons
│   │       ├── Special Instructions
│   │       ├── Quantity (+/-)
│   │       └── Add to Cart (showing total price)
│   ├── Previously Ordered (if returning customer)
│   └── Ratings & Reviews
├── Cart (Bottom Drawer / Sidebar)
│   ├── Restaurant Name
│   ├── Items (edit quantity, remove, customize)
│   ├── Add More Items (return to menu)
│   ├── Promotions / Promo Code
│   ├── Subtotal + Delivery Fee + Service Fee + Tax
│   └── Go to Checkout
├── Checkout
│   ├── Delivery Address + Drop-off Options
│   │   ├── Meet at Door
│   │   ├── Leave at Door (+ photo confirmation)
│   │   ├── Meet Outside
│   │   └── Delivery Notes
│   ├── Delivery Time (ASAP / Schedule)
│   ├── Priority Delivery Option (extra cost for faster)
│   ├── Payment (cards, Apple Pay, Google Pay, PayPal, Uber Cash, Venmo)
│   ├── Tip (pre/post delivery, suggested amounts)
│   ├── Price Breakdown
│   │   ├── Subtotal
│   │   ├── Delivery Fee
│   │   ├── Service Fee
│   │   ├── Tax
│   │   ├── Tip
│   │   └── Total
│   ├── Uber One Savings (if member)
│   └── Place Order
├── Order Tracking (Live Activity)
│   ├── Status Timeline
│   │   ├── Order Confirmed
│   │   ├── Restaurant Preparing
│   │   ├── Driver Picking Up
│   │   ├── On the Way (live map with route)
│   │   └── Delivered (photo proof)
│   ├── Live Map (real-time driver location, animated route)
│   ├── ETA (dynamic, updates based on traffic)
│   ├── Driver Info (name, photo, vehicle, rating)
│   ├── Contact Driver (call, message)
│   ├── Contact Restaurant
│   ├── Share ETA (with friends/family)
│   ├── Order Details
│   └── Cancel Order (with policy info)
├── Orders
│   ├── Active Orders
│   ├── Past Orders
│   ├── Order Detail (receipt, rating, help)
│   ├── Reorder
│   ├── Rate Order (thumbs up/down + specific feedback tags)
│   ├── Rate Driver
│   └── Get Help (missing items, wrong order, late delivery)
├── Uber One
│   ├── Benefits ($0 delivery fee, reduced service fee, special offers, 5% savings on rides)
│   ├── Plan (monthly / annual)
│   ├── Eligible Restaurants
│   └── Manage Membership
├── Grocery
│   ├── Partner Stores (local grocery, convenience)
│   ├── Department Browse
│   ├── Product Search
│   ├── Substitution Preferences
│   └── Large Order Support
├── Account
│   ├── Addresses
│   ├── Wallet / Payment Methods
│   ├── Uber Cash & Credits
│   ├── Promotions & Offers
│   ├── Uber One Membership
│   ├── Order History
│   ├── Favorites (restaurants)
│   ├── Business Profile (Uber for Business)
│   ├── Privacy & Settings
│   └── Help
└── Uber App Integration
    ├── Rides Tab (ride-hailing)
    ├── Eats Tab (food delivery — this IA)
    ├── Grocery Tab
    ├── Uber One (cross-product)
    └── Wallet (shared across Uber products)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky | Uber Eats logo, delivery/pickup toggle, address selector, search, cart, profile |
| **Category Chips** | Horizontal scroll below header | Cuisine filters + verticals (grocery, convenience) |
| **Restaurant Menu** | Sticky category tabs | Auto-scroll to section, highlight active category |
| **Cart** | Floating bottom bar (mobile) or right sidebar (desktop) | Shows item count + total, tap to expand |
| **Bottom Nav (mobile app)** | Fixed bottom tabs | Home, Browse, Orders, Account |
| **Live Activity** | iOS Dynamic Island / Lock Screen / notification | Persistent tracking without opening app |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Restaurant | name, image, cuisine[], rating, num_ratings, delivery_time, delivery_fee, distance, uber_one_eligible, hours, promotions[] | has Menu |
| MenuCategory | name, items[] | belongs to Restaurant |
| MenuItem | name, description, price, image, customization_groups[] | belongs to MenuCategory |
| CustomizationGroup | name, required, max_select, options[] | belongs to MenuItem |
| Order | id, items[], status, total, delivery_address, driver, restaurant, timestamps, tip, fees | belongs to User |
| Driver | name, photo, rating, vehicle_type, license_plate, location (live) | assigned to Order |
| Review | rating (thumbs up/down), tags[], text | belongs to Order |
| UberOne | plan, status, savings_total, renewal_date | belongs to User |
| Promotion | code, type, value, conditions, auto_applied | applied to Order |

### Order Status
```
placed → confirmed → preparing → driver_assigned → driver_en_route_to_restaurant → driver_at_restaurant → driver_picking_up → on_the_way → near_you → delivered
```

## User Flows

### Order Food
```
Open Uber app → Eats tab → Search or browse → Select restaurant → Menu → Add items (customize) → Cart → Checkout → Tip + payment → Place order → Track on map → Delivered (photo proof) → Rate food + driver
```

### Live Tracking
```
Order placed → Status: preparing → Driver assigned (see name/photo) → Map shows driver going to restaurant → Pickup → Map shows driver driving to you → Near you notification → Delivered → Photo at door → Rate
```

### Uber One Checkout Savings
```
Add items → Cart shows: Delivery Fee $4.99 → Uber One Applied: -$4.99 → Service Fee Reduced → Total Savings: $7.48 → "Saved with Uber One" badge
```

### Schedule Order
```
Restaurant page → Cart → Checkout → Delivery Time: Schedule → Pick date + time window → Place order → Order confirmed for scheduled time → Auto-prepared and delivered at scheduled time
```

## URL / Route Structure

```
/                              → Home
/search?q=:query               → Search Results
/store/:storeSlug/:storeId     → Restaurant/Store Page
/category/:slug                → Category Browse
/checkout                      → Checkout
/orders                        → Order History
/orders/:id                    → Order Detail
/orders/:id/tracking           → Live Tracking
/uber-one                      → Uber One
/feed                          → Browse / Discovery
/account                       → Account
/account/wallet                → Payment Methods
/account/addresses             → Saved Addresses
/account/promotions            → Promotions
/help                          → Help Center
```

## Search & Filter

| Filter | Type | Options |
|--------|------|---------|
| Cuisine | Multi-select chips | Pizza, Sushi, Mexican, Indian, Chinese, Thai, etc. |
| Sort | Single select | Most Popular, Rating, Delivery Time, Price |
| Price | Chips | $, $$, $$$, $$$$ |
| Max Delivery Fee | Slider | $0 - $10+ |
| Rating | Threshold | 4.5+ |
| Dietary | Multi-select | Vegetarian, Vegan, Gluten-Free, Halal |
| Uber One | Toggle | Members-only deals |
| Deals | Toggle | Has active offers |

## Responsive Behavior

| Breakpoint | Home | Restaurant | Cart | Tracking |
|------------|------|-----------|------|----------|
| Desktop (>=1024px) | Grid cards, search in header | Menu + cart sidebar | Right sidebar | Map + details side by side |
| Tablet (768-1023px) | Grid 2-3 cols | Full menu, floating cart | Slide-over | Full page map |
| Mobile (<768px) | Uber Eats app (primary); web: vertical cards | Sticky menu tabs, bottom cart bar | Bottom sheet | Full-screen map + Live Activity (iOS) |

### Uber Eats-Specific UX
- **Uber super app integration**: one app for rides + eats + grocery, shared wallet and account
- **Live Activity (iOS)**: order tracking on Lock Screen and Dynamic Island
- **Photo proof of delivery**: driver takes photo when leaving at door
- **Driver tip adjustment**: can increase/decrease tip after delivery
- **Share ETA**: share live tracking link with friends/family
- **Priority Delivery**: pay extra for faster delivery
- **Uber One cross-product**: membership benefits across rides + eats
- **Item-level feedback**: report specific missing or incorrect items
- **Previously ordered**: shows past items from a restaurant for quick reorder
- **Real-time map**: leverages Uber's mapping infrastructure for accurate ETAs

## Access Control

| Role | Browse | Order | Track | Review | Manage |
|------|--------|-------|-------|--------|--------|
| Guest | ✅ | — (login required) | — | — | — |
| User | ✅ | ✅ | Own orders | ✅ | — |
| Uber One | ✅ | ✅ (free delivery) | Own orders | ✅ | Subscription |
| Driver | — | Accept deliveries | Active deliveries | — | Own schedule/earnings |
| Merchant | — | Receive/manage | Update status | Respond to reviews | Restaurant Manager |
| Business Admin | ✅ | ✅ (business account) | Team orders | — | Team settings |
