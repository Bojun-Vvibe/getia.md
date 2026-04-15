# Food Delivery — Information Architecture

## Overview

A food ordering and delivery platform (DoorDash, Uber Eats, Meituan style). The mental model is **browse restaurants → pick dishes → order → track delivery**. Speed and simplicity are paramount — users are hungry and want to order fast.

## Site Map

```
├── Home
│   ├── Address / Location Selector
│   ├── Category Quick Filters (cuisine type)
│   ├── Promotions / Deals Banner
│   ├── Nearby Restaurants
│   ├── Popular Right Now
│   ├── Previously Ordered
│   └── Collections (e.g., "Under 30 min", "Free Delivery")
├── Search / Browse
│   ├── Restaurant Results
│   ├── Dish Results
│   └── Filters (cuisine, price, rating, delivery time, dietary)
├── Restaurant Page
│   ├── Info (hours, rating, delivery fee, min order)
│   ├── Menu Categories (scrollable)
│   ├── Menu Items
│   │   └── Item Detail Modal (description, customizations, add to cart)
│   └── Reviews
├── Cart (Persistent Drawer/Sheet)
│   ├── Items (editable quantities)
│   ├── Special Instructions
│   ├── Promo Code
│   ├── Subtotal / Fees / Total
│   └── Checkout Button
├── Checkout
│   ├── Delivery Address
│   ├── Delivery Time (ASAP / Schedule)
│   ├── Payment Method
│   ├── Tip
│   ├── Order Summary
│   └── Place Order
├── Order Tracking
│   ├── Status Steps (confirmed → preparing → picked up → on the way → delivered)
│   ├── Live Map (driver location)
│   ├── Driver Info
│   ├── Contact Driver / Restaurant
│   └── ETA
├── Orders History
│   ├── Past Orders
│   ├── Order Detail (items, receipt)
│   ├── Reorder
│   └── Rate & Review
├── Account
│   ├── Addresses (saved)
│   ├── Payment Methods
│   ├── Promotions / Credits
│   ├── Favorites
│   ├── Settings (dietary preferences, notifications)
│   └── Help / Support
└── For Restaurants (CTA → separate portal)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top | Address selector, search, cart icon (badge), user menu |
| **Category Bar** | Horizontal scroll chips | Cuisine types: Pizza, Chinese, Sushi, Burgers... |
| **Restaurant Menu** | Sticky category sidebar/tabs | Jump to section within menu |
| **Cart** | Persistent bottom sheet (mobile) or right sidebar (desktop) | Always accessible, shows item count + total |
| **Bottom Nav** | Mobile only | Home, Search, Orders, Account |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Restaurant | name, logo, cover_image, cuisine[], rating, delivery_fee, min_order, delivery_time_estimate, hours | has many MenuCategories, Reviews |
| MenuCategory | name, order | belongs to Restaurant, has many MenuItems |
| MenuItem | name, description, price, image, available, popular_flag | belongs to MenuCategory, has many Customizations |
| Customization | group_name (e.g., "Size"), options[], required, max_select | belongs to MenuItem |
| Order | items[], status, total, delivery_address, payment, driver, timestamps | belongs to User and Restaurant |
| Driver | name, photo, rating, vehicle, location (live) | assigned to Order |
| Review | rating, text, photos[], order_id | belongs to Restaurant and User |
| Address | label, street, apt, instructions, coordinates | belongs to User |
| Promotion | code, type, value, conditions, expires | applied to Order |

### Order Status Flow
```
placed → confirmed → preparing → ready_for_pickup → picked_up → on_the_way → delivered
                                                                              ↘ cancelled (with reason)
```

## User Flows

### Order Food
```
Set Address → Browse/Search → Pick Restaurant → Browse Menu → Add Items (customize) → Cart → Checkout → Pay → Track → Receive → Rate
```

### Reorder
```
Orders → Past Order → Reorder → Cart (pre-filled) → Checkout
```

### Quick Search
```
Search "pizza" → See dishes + restaurants → Tap dish → Item modal → Add to cart
```

## URL / Route Structure

```
/                           → Home
/search?q=:query            → Search Results
/restaurants/:slug          → Restaurant Page
/restaurants/:slug/reviews  → Restaurant Reviews
/checkout                   → Checkout
/orders                     → Order History
/orders/:id                 → Order Detail
/orders/:id/tracking        → Live Tracking
/account                    → Account
/account/addresses          → Saved Addresses
/account/payments           → Payment Methods
/account/favorites          → Favorite Restaurants
/help                       → Help Center
```

## Search & Filter

| Filter | Type | Options |
|--------|------|---------|
| Cuisine | Multi-select chips | Pizza, Chinese, Japanese, Mexican, Indian... |
| Sort | Single select | Recommended, Rating, Delivery Time, Price |
| Delivery Fee | Toggle/Range | Free delivery, Under $3 |
| Price Range | Chips | $, $$, $$$, $$$$ |
| Rating | Min threshold | 4.0+, 4.5+ |
| Dietary | Multi-select | Vegetarian, Vegan, Gluten-free, Halal |
| Delivery Time | Chips | Under 30 min, Under 45 min |

## Responsive Behavior

| Breakpoint | Home | Restaurant | Cart |
|------------|------|-----------|------|
| Desktop | Grid 3-4 cols, search in header | Menu with left category nav, right cart | Right sidebar |
| Tablet | Grid 2-3 cols | Full width menu, floating cart button | Slide-over |
| Mobile | Vertical cards | Sticky category tabs, bottom cart bar | Bottom sheet |

### Mobile-First Patterns
- Bottom sheet cart with drag handle
- Item customization in full-screen modal
- Swipeable category filters
- Pull-to-refresh restaurant list
- Sticky "View Cart" bar when items added

## Access Control

| Role | Browse | Order | Track | Review | Manage |
|------|--------|-------|-------|--------|--------|
| Guest | ✅ | — (prompt login) | — | — | — |
| User | ✅ | ✅ | Own orders | ✅ | — |
| Restaurant | — | Receive | Update status | Respond | Own restaurant |
| Driver | — | Accept | Update location | — | — |
| Admin | ✅ | ✅ | All | Moderate | ✅ |
