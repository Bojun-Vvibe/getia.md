---
brand: DoorDash
tagline: "Your door to more. Food delivery, grocery, and convenience from local businesses."
category: Food Delivery
website: https://www.doordash.com
---

# DoorDash — Information Architecture

## Overview

DoorDash is the leading food delivery platform in the US, connecting consumers with local restaurants, grocery stores, and convenience stores. The mental model is **get anything delivered fast** — users browse nearby restaurants, order food, and track delivery in real-time. DoorDash differentiates through DashPass (subscription for free delivery), DoorDash Drive (white-label delivery for merchants), pickup option, grocery delivery, convenience items (DashMart), group orders, and an expanding scope beyond restaurant food. The three-sided marketplace serves consumers, merchants (restaurants/stores), and Dashers (delivery drivers).

## Site Map

```
├── Home
│   ├── Address / Location Bar (delivery or pickup toggle)
│   ├── Search Bar
│   ├── Category Quick Filters (horizontal scroll)
│   │   ├── Offers Near You
│   │   ├── Grocery
│   │   ├── Convenience
│   │   ├── Pizza, Chinese, Mexican, Indian, Sushi, Thai
│   │   ├── Fast Food, Healthy, Breakfast, Coffee
│   │   └── Alcohol, Retail, Pets, Flowers
│   ├── Featured Sections
│   │   ├── National Favorites (chain restaurants)
│   │   ├── Fastest Near You
│   │   ├── Popular Right Now
│   │   ├── New on DoorDash
│   │   ├── DashPass Exclusives
│   │   ├── Under $2 Delivery Fee
│   │   ├── Previously Ordered
│   │   └── Highly Rated
│   ├── DashPass Banner (join/upgrade CTA)
│   └── Store/Restaurant Cards
│       ├── Image, Name, Rating, Delivery Time
│       ├── Delivery Fee / DashPass Free Delivery
│       └── Promotion Badge (20% off, $0 delivery)
├── Search / Browse
│   ├── Restaurant Search Results
│   ├── Item Search Results (specific dishes across restaurants)
│   ├── Filters
│   │   ├── Sort (Fastest, Rating, Price, Distance)
│   │   ├── Price ($, $$, $$$, $$$$)
│   │   ├── Rating (4.5+)
│   │   ├── Offers / Deals
│   │   ├── DashPass
│   │   ├── Open Now
│   │   └── Dietary (Vegan, Gluten-Free, Halal, Kosher)
│   └── Popular Categories (nearby)
├── Restaurant / Store Page
│   ├── Header (image, name, rating, delivery time + fee, distance)
│   ├── Restaurant Info (hours, address, DashPass eligible)
│   ├── Menu Categories (sticky tabs / sidebar scroll)
│   ├── Menu Items
│   │   ├── Item Card (name, description, price, image, popular badge)
│   │   └── Item Detail Modal
│   │       ├── Image
│   │       ├── Description
│   │       ├── Required Selections (size, protein)
│   │       ├── Optional Add-Ons (extra cheese, avocado)
│   │       ├── Special Instructions (text field)
│   │       ├── Quantity
│   │       └── Add to Cart
│   ├── Reviews (recent, with photos)
│   ├── Hours & Location
│   └── Group Order (invite others to add items)
├── Cart (Slide-Out Drawer)
│   ├── Restaurant Name (cart per restaurant)
│   ├── Items (editable: quantity, remove)
│   ├── Promo Code
│   ├── Subtotal
│   ├── Estimated Delivery Fee + Service Fee + Tax
│   ├── DashPass Savings Indicator
│   └── Go to Checkout
├── Checkout
│   ├── Delivery Address (saved, add new, apartment/suite)
│   ├── Delivery Instructions (leave at door, hand to me)
│   ├── Delivery Time (ASAP, schedule later)
│   ├── Payment Method (cards, Apple Pay, Google Pay, PayPal, Venmo, gift card)
│   ├── Dasher Tip (suggested amounts + custom)
│   ├── Priority Delivery (pay extra for faster)
│   ├── Promo Code
│   ├── Order Summary
│   │   ├── Subtotal
│   │   ├── Delivery Fee (or $0 with DashPass)
│   │   ├── Service Fee
│   │   ├── Tax
│   │   ├── Tip
│   │   └── Total
│   └── Place Order
├── Order Tracking
│   ├── Status Steps (confirmed → preparing → Dasher on the way → delivered)
│   ├── Live Map (Dasher location, real-time)
│   ├── Estimated Arrival (updating countdown)
│   ├── Dasher Info (name, photo, vehicle)
│   ├── Contact Dasher (call, text, chat)
│   ├── Contact Restaurant
│   ├── Order Details (items list)
│   └── Receipt
├── Orders
│   ├── Recent Orders
│   ├── Past Orders (history)
│   ├── Order Detail (items, receipt, tracking)
│   ├── Reorder (one-tap)
│   ├── Rate & Review (stars, tags: fast delivery, correct order)
│   └── Help with Order (report issue → credits/refund)
├── DashPass
│   ├── Benefits ($0 delivery, reduced service fees, exclusive offers)
│   ├── Plan Options (monthly, annual, student, family)
│   ├── Eligible Restaurants
│   └── Manage Subscription
├── Account
│   ├── Addresses (saved)
│   ├── Payment Methods
│   ├── DashPass Membership
│   ├── DoorDash Credits / Gift Cards
│   ├── Promotions
│   ├── Notification Settings
│   ├── Privacy
│   └── Help
├── Group Order
│   ├── Create Group Order (share link)
│   ├── Participants Add Items Independently
│   ├── Cart Summary (all participants)
│   ├── Individual Limits (optional spending cap)
│   └── Host Checks Out
├── DashMart (Convenience Store)
│   ├── Categories (snacks, drinks, household, personal care)
│   ├── Item Browsing (quick add)
│   └── Fast Delivery (15-20 min)
├── Grocery
│   ├── Connected Stores (partner grocers)
│   ├── Department Browse
│   ├── Item Search
│   └── Substitution Preferences
└── Help
    ├── Current Order Help (missing items, wrong items, late delivery)
    ├── Past Order Help
    ├── Account Issues
    ├── DashPass Help
    ├── Safety
    └── Contact Support (chat)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | DoorDash logo, delivery/pickup toggle, address selector, search, DashPass, user menu |
| **Category Bar** | Horizontal scroll chips | Cuisine types + special categories (Grocery, Convenience, Alcohol) |
| **Restaurant Menu Nav** | Sticky category tabs within restaurant page | Jump to section (Popular, Appetizers, Entrees, Desserts) |
| **Cart** | Slide-out right drawer (desktop) or bottom sheet (mobile) | Persistent, accessible from any page, cart badge on icon |
| **Bottom Nav (mobile)** | Fixed bottom bar | Home, Search, Orders, Account |
| **Tracking View** | Full-screen overlay or dedicated page | Map + status steps + Dasher info |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Restaurant | name, logo, cover_image, cuisine_tags[], rating, num_ratings, delivery_time_estimate, delivery_fee, distance, dashpass_eligible, hours, address, promotions[] | has MenuCategories |
| MenuCategory | name, sort_order | belongs to Restaurant, has MenuItems |
| MenuItem | name, description, price, image, popular, num_ratings | belongs to MenuCategory, has Customizations |
| Customization | group_name, type (required/optional), options[], max_selections | belongs to MenuItem |
| Order | id, items[], status, total, delivery_address, dasher, restaurant, timestamps{}, tip, fees{} | belongs to User |
| Dasher | name, photo, rating, vehicle | assigned to Order |
| Review | rating, tags (fast delivery, correct order, quality food), text | belongs to Order/Restaurant |
| DashPass | plan (monthly/annual/student), status, benefits | belongs to User |
| GroupOrder | host, link, participants[], cart_items[], spending_limit, deadline | associated with Order |
| Promotion | code, type, value, conditions, expires | applied to Order |
| Address | label, street, apt_suite, instructions, coordinates | belongs to User |

### Order Status Flow
```
placed → confirmed (by restaurant) → preparing → ready_for_pickup → dasher_assigned → dasher_picking_up → dasher_on_the_way → delivered
                                                                                                                                → cancelled (by user/restaurant)
```

### Delivery Speed Tiers
- **Priority**: faster delivery (higher fee)
- **Standard**: regular delivery
- **Scheduled**: choose a delivery window
- **No-Rush**: save on fees, flexible window

## User Flows

### Order Food
```
Set address → Browse (or search "pad thai") → Select restaurant → Browse menu → Add items (customize: extra spicy, no peanuts) → Cart → Checkout → Select payment + tip → Place order → Track live → Receive delivery → Rate
```

### Reorder
```
Orders → Past orders → [Reorder] → Cart pre-filled → Modify if needed → Checkout → Track
```

### Group Order
```
Restaurant page → [Group Order] → Get sharable link → Send to friends → Each person adds items → Host reviews cart → Set tip → Checkout → Track → Everyone gets food
```

### DashPass Value
```
Checkout → See delivery fee ($4.99) → DashPass saves this ($0 delivery) → Service fee reduced → Total savings shown → CTA: "Get DashPass and save"
```

### New User Onboarding
```
Visit DoorDash → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

```
/                              → Home
/search?q=:query               → Search Results
/store/:storeSlug              → Restaurant/Store Page
/store/:storeSlug/item/:id     → Item Detail (usually modal)
/checkout                      → Checkout
/orders                        → Order History
/orders/:id                    → Order Detail
/orders/:id/tracking           → Live Tracking
/dashpass                      → DashPass Info / Manage
/account                       → Account
/account/addresses             → Saved Addresses
/account/payments              → Payment Methods
/account/credits               → Credits & Gift Cards
/account/promotions            → Promotions
/group-order/:code             → Join Group Order
/dashmart                      → DashMart (convenience)
/grocery                       → Grocery
/help                          → Help Center
/help/order/:id                → Order-specific Help
settings  → Settings
/account/addresses                → Saved addresses
```

## Search & Filter

| Filter | Type | Options |
|--------|------|---------|
| Cuisine | Multi-select chips | Pizza, Chinese, Mexican, Indian, Sushi, American, Thai, etc. |
| Sort | Single select | Fastest, Most Popular, Rating, Price, Distance |
| Price | Chips | $, $$, $$$, $$$$ |
| Rating | Threshold | 4.5+ |
| Delivery Fee | Toggle/Range | Free delivery, Under $3 |
| Offers | Toggle | Has deals |
| DashPass | Toggle | DashPass eligible only |
| Dietary | Multi-select | Vegan, Vegetarian, Gluten-Free, Halal, Kosher |
| Open Now | Toggle | Currently accepting orders |

## Responsive Behavior

| Breakpoint | Home | Restaurant | Cart | Tracking |
|------------|------|-----------|------|----------|
| Desktop (>=1024px) | Grid 3-4 cols, filters in header | Menu with category sidebar, cart sidebar | Right sidebar drawer | Inline page with map |
| Tablet (768-1023px) | Grid 2-3 cols | Full width menu, floating cart | Slide-over | Full page |
| Mobile (<768px) | DoorDash app preferred; web: vertical cards | Sticky category tabs, bottom cart bar | Bottom sheet | Full-screen map + steps |

### DoorDash-Specific UX
- **Item search across restaurants**: search "tacos" and see results from multiple restaurants
- **DashPass savings display**: show per-order savings prominently during checkout
- **Group Order**: collaborative ordering via shareable link with optional spending limits
- **Priority Delivery**: pay more for faster delivery option at checkout
- **Dasher tracking**: real-time GPS tracking with ETA updates
- **Rate with tags**: quick rating using pre-defined tags (fast, correct, quality) + optional text
- **Substitution handling**: for grocery orders, set preferences for out-of-stock items
- **Credits system**: refunds often issued as DoorDash credits for future orders
- **Reorder one-tap**: prominent reorder button on past orders
- **Delivery instructions**: detailed options (leave at door, hand to me, meet outside)

## Access Control

| Role | Browse | Order | Track | Review | Manage |
|------|--------|-------|-------|--------|--------|
| Guest | ✅ | — (login required) | — | — | — |
| User | ✅ | ✅ | Own orders | ✅ | — |
| DashPass User | ✅ | ✅ (free delivery) | Own orders | ✅ | Subscription |
| Dasher | — | Accept/Reject | Active deliveries | — | Own schedule |
| Merchant | — | Receive/Manage | Update status | Respond | Restaurant portal |
| Admin | ✅ | ✅ | All | Moderate | ✅ |
