---
brand: Instacart
tagline: "Grocery delivery and pickup in as fast as 1 hour. Shop local stores from your couch."
category: Grocery Delivery
website: https://www.instacart.com
---

# Instacart — Information Architecture

## Overview

Instacart is the leading online grocery delivery and pickup platform, partnering with 1,500+ retail banners (grocery stores, pharmacies, warehouse clubs, specialty stores). The mental model is **your local grocery store, delivered** — customers shop from their preferred stores' actual inventory, a personal shopper picks and packs the order in-store, and it's delivered (or prepared for pickup) in as fast as 1 hour. Instacart differentiates through its multi-retailer model (shop from Costco, Kroger, Sprouts, CVS, etc. in one app), real-time shopper communication (approve substitutions live), Instacart+ membership (free delivery), and the personal shopper relationship (tip, rate, communicate during shop). It's grocery-specific, not general food delivery.

## Site Map

```
├── Home / Storefront
│   ├── Address / Location Selector
│   ├── Delivery / Pickup Toggle
│   ├── Search Bar ("Search products and stores")
│   ├── Nearby Stores
│   │   ├── Store Cards (logo, name, delivery time, delivery fee)
│   │   ├── Favorite Stores
│   │   └── By Category (Grocery, Convenience, Pharmacy, Pet, Alcohol)
│   ├── Featured Deals & Coupons
│   ├── Buy It Again (past purchases)
│   ├── Popular Items Near You
│   ├── Flyers & Deals (digital weekly ads)
│   └── Instacart+ Banner (free delivery CTA)
├── Store Page
│   ├── Store Header (logo, name, hours, delivery time + fee)
│   ├── Departments (horizontal scroll or sidebar)
│   │   ├── Produce
│   │   ├── Dairy & Eggs
│   │   ├── Meat & Seafood
│   │   ├── Bakery
│   │   ├── Frozen
│   │   ├── Snacks
│   │   ├── Beverages
│   │   ├── Household
│   │   ├── Personal Care
│   │   ├── Baby
│   │   ├── Pet
│   │   └── Pharmacy / Health
│   ├── Featured / On Sale (store-specific promotions)
│   ├── Buy It Again (from this store)
│   ├── Product Grid (within department)
│   │   ├── Product Card
│   │   │   ├── Image
│   │   │   ├── Name, Size/Weight
│   │   │   ├── Price (unit price, sale price)
│   │   │   ├── Per-Unit Pricing ($/oz, $/lb)
│   │   │   ├── Add to Cart (+/- stepper)
│   │   │   ├── Sale Badge
│   │   │   └── SNAP EBT eligible badge
│   │   └── Product Detail Modal
│   │       ├── Large Image
│   │       ├── Nutrition Facts
│   │       ├── Ingredients
│   │       ├── Product Description
│   │       ├── Quantity / Weight Selector
│   │       ├── Replacement Preference
│   │       │   ├── Best Match (shopper's choice)
│   │       │   ├── Specific Replacement (pick alternative)
│   │       │   └── Don't Replace (refund if unavailable)
│   │       ├── Special Instructions ("pick firm bananas")
│   │       ├── Add to Cart
│   │       └── Similar Items
│   └── Search (within store)
├── Search (Cross-Store)
│   ├── Product Search Results (from multiple stores)
│   ├── Store Search Results
│   ├── Filter by Store, Department, Price, Diet, Brand
│   └── Compare Prices (same product across stores)
├── Cart (Per-Store)
│   ├── Items by Store (if multi-store cart)
│   ├── Item List (quantity, price, replacement preference per item)
│   ├── Per-Store Subtotal
│   ├── Coupons / Promo Code
│   ├── Cart Summary
│   └── Go to Checkout
├── Checkout
│   ├── Delivery Address + Instructions (leave at door, ring bell)
│   ├── Delivery Window
│   │   ├── Priority (fastest, premium price)
│   │   ├── Standard (2-hour window)
│   │   ├── Scheduled (choose date + time window)
│   │   └── Available Slots Calendar
│   ├── Payment Method (credit card, debit, Apple Pay, Google Pay, SNAP EBT, FSA/HSA)
│   ├── Shopper Tip (pre-set amounts + custom, adjustable post-delivery)
│   ├── Replacement Preferences (default for cart)
│   ├── Leave Notes for Shopper
│   ├── Order Summary
│   │   ├── Item Subtotal
│   │   ├── Service Fee
│   │   ├── Delivery Fee (or $0 with Instacart+)
│   │   ├── Tip
│   │   ├── Tax
│   │   ├── Bag Fee (where applicable)
│   │   ├── Instacart+ Savings (if member)
│   │   └── Total
│   └── Place Order
├── Order Tracking (Live)
│   ├── Order Status
│   │   ├── Order Placed
│   │   ├── Shopper Assigned (name, photo)
│   │   ├── Shopping (live cart updates)
│   │   │   ├── Items Found (check marks)
│   │   │   ├── Replacements Suggested (approve/reject in real-time)
│   │   │   ├── Items Not Found (refund or replace)
│   │   │   └── Chat with Shopper
│   │   ├── Checkout (shopper checking out at register)
│   │   ├── On the Way (map with driver location)
│   │   └── Delivered (photo proof)
│   ├── Shopper Chat (text-based, real-time)
│   ├── Live Updated Receipt (adjusts as items change)
│   ├── Contact Shopper (call/text)
│   └── ETA
├── Orders
│   ├── Active Orders (in progress)
│   ├── Past Orders
│   ├── Order Detail (items, receipt, adjustments)
│   ├── Rate & Tip
│   │   ├── Rate Shopper (1-5 stars)
│   │   ├── Adjust Tip (increase/decrease post-delivery)
│   │   ├── Quality Tags (great replacements, careful with fragile items)
│   │   └── Report Issue (wrong item, damaged, missing)
│   ├── Reorder (all items to cart)
│   └── Report Issue → Credits/Refund
├── Lists
│   ├── Shopping Lists (user-created)
│   ├── Buy It Again (automatic from history)
│   ├── Favorites (saved products)
│   └── Share List (collaborative shopping)
├── Instacart+ (Membership)
│   ├── Benefits ($0 delivery, reduced service fee, credit back on pickup, Peacock)
│   ├── Plan (monthly / annual)
│   ├── Family Accounts (shared membership)
│   └── Manage Subscription
├── Deals & Coupons
│   ├── Featured Deals
│   ├── Digital Coupons (clip and apply)
│   ├── Store Flyers (weekly ads)
│   ├── BOGO / Multi-buy Offers
│   └── Instacart Exclusive Offers
├── Account
│   ├── Addresses
│   ├── Payment Methods
│   ├── Instacart+ Membership
│   ├── Credits & Gift Cards
│   ├── Notification Preferences
│   ├── SNAP EBT Card
│   ├── FSA/HSA Card
│   ├── Family Account
│   ├── Loyalty Cards (store rewards cards linked)
│   └── Privacy & Settings
├── Carts by Store
│   └── If shopping from multiple stores: separate carts, separate orders, separate delivery
├── Help
│   ├── Current Order Help
│   ├── Past Order Issues (missing, damaged, wrong items)
│   ├── Account Help
│   ├── Instacart+ Help
│   └── Contact Support (chat, phone)
└── Pickup Option
    ├── Same Store Experience
    ├── Schedule Pickup Window
    ├── Arrive & Notify (I'm here button)
    └── Curbside Delivery to Car
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Instacart logo, address selector, delivery/pickup, search bar, Instacart+ badge, account, cart (per-store badge) |
| **Store List** | Scrollable cards or grid on home | Select store before shopping |
| **Department Nav** | Left sidebar (desktop) or horizontal scroll (mobile) | Navigate grocery departments within store |
| **Product Grid** | Main content area | Add to cart directly from grid with +/- stepper |
| **Cart** | Right sidebar (desktop) or bottom sheet (mobile) | Persistent, per-store, shows running total |
| **Bottom Nav (mobile)** | Fixed bottom bar | Home, Browse, Lists, Orders, Account |
| **Shopper Chat** | Bottom overlay during active order | Real-time communication about replacements |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Store | name, logo, banner, address, hours, delivery_time_estimate, delivery_fee, min_order, departments[], instacart_plus_eligible | has Products (inventory) |
| Product | name, brand, description, images[], price, unit_price ($/oz), size, nutrition_facts, ingredients, upc, snap_eligible | belongs to Store inventory |
| Department | name, icon, sort_order | belongs to Store, has Products |
| Cart | store, items[], subtotal | belongs to User, per-store |
| CartItem | product, quantity, replacement_preference, special_instructions | belongs to Cart |
| Order | store, items[], status, shopper, delivery_address, delivery_window, tip, fees, total, adjustments[] | belongs to User |
| Shopper | name, photo, rating | assigned to Order |
| Replacement | original_product, replacement_product, approved_by (user/auto), price_diff | belongs to Order |
| ShoppingList | name, items[], shared_with[] | belongs to User |
| Coupon | description, discount, store, product, conditions, clipped | available or clipped by User |
| InstacartPlus | plan, status, savings_total, renewal_date | belongs to User |
| LoyaltyCard | store, card_number, linked | belongs to User |

### Order Status Flow
```
placed → shopper_assigned → shopping → items_being_picked → replacements_needed → checkout_at_register → on_the_way → delivered
                                                                                                                     → picked_up (if pickup)
```

### Replacement Flow
```
Shopper finds item unavailable → App notifies customer → Options:
  a) Accept shopper's suggested replacement → Price adjustment
  b) Choose different replacement from suggestions
  c) "Don't replace" → Item removed, refunded
  d) No response → Shopper uses "Best Match" default
```

## User Flows

### Shop and Get Delivery
```
Set address → Browse nearby stores → Select store (Costco) → Browse departments or search → Add items (+/- stepper) → Set replacement preferences per item → Cart → Checkout → Select delivery window (2-3 PM) → Set tip → Place order → Shopper assigned → Chat about replacements → Track delivery → Delivered → Rate shopper → Adjust tip
```

### Real-Time Replacement Approval
```
Order in progress → Shopper can't find organic avocados → Push notification: "Your shopper suggests: regular avocados" → Tap: [Approve] [Choose Different] [Don't Replace] → Approve → Cart total adjusts → Shopping continues
```

### Multi-Store Shopping
```
Search "paper towels" (cross-store) → Compare prices: Costco $18 (24-pack) vs Target $6 (6-pack) → Add from Costco → Search "shampoo" → Add from Target → Two separate carts → Two separate checkouts → Two separate deliveries
```

### Pickup
```
Select store → Switch to "Pickup" → Shop (same experience) → Checkout → Select pickup window → Place order → Shopper picks items → "Your order is ready" notification → Drive to store → "I'm here" button → Curbside delivery → Rate
```

### Reorder
```
Orders → Past order from Costco → [Reorder] → Cart pre-filled → Remove/add items → Checkout → Deliver
```

## URL / Route Structure

```
/                              → Home (store selection)
/store/:retailer/:storeSlug    → Store Home
/store/:retailer/:storeSlug/collections/:dept → Department
/store/:retailer/:storeSlug/product/:productId → Product Detail
/store/:retailer/:storeSlug/search?q=:query → Store Search
/search?q=:query               → Cross-Store Search
/checkout                      → Checkout
/orders                        → Order History
/orders/:id                    → Order Detail
/orders/:id/tracking           → Live Tracking
/orders/:id/chat               → Shopper Chat
/lists                         → Shopping Lists
/lists/:id                     → List Detail
/buy-it-again                  → Buy It Again
/deals                         → Deals & Coupons
/instacart-plus                → Instacart+ Membership
/account                       → Account
/account/addresses             → Addresses
/account/payment               → Payment Methods
/account/loyalty-cards         → Loyalty Cards
/account/credits               → Credits & Gift Cards
/pickup                        → Pickup Stores
/help                          → Help Center
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Cross-Store | Product name, brand, UPC | Store, Department, Brand, Dietary (organic, gluten-free, vegan, keto), Price Range, On Sale, SNAP Eligible | Relevance, Price, Best Selling |
| Within Store | Product name, brand, UPC | Department, Brand, Dietary, Price, On Sale | Relevance, Price, Popular |
| Store Search | Store name, retailer brand | Category (Grocery, Convenience, Pharmacy, Pet), Distance, Delivery Time, Delivery Fee | Distance, Delivery Time, Rating |

### Autocomplete
Search bar suggests: products (with price), departments, stores, past purchases

## Responsive Behavior

| Breakpoint | Home | Store | Product Grid | Cart | Tracking |
|------------|------|-------|-------------|------|----------|
| Desktop (>=1024px) | Store cards grid, search in header | Department sidebar + product grid + cart sidebar | 4-5 columns with quick-add | Right sidebar (always visible) | Map + status + chat |
| Tablet (768-1023px) | Store cards 2-3 cols | Department tabs + grid | 3 columns | Slide-over | Full page |
| Mobile (<768px) | Instacart app (primary); vertical store cards | Horizontal department scroll + grid | 2 columns with quick-add | Bottom sheet with cart count | Full-screen map + chat overlay |

### Instacart-Specific UX
- **Per-item replacement preferences**: set replacement strategy for each item (unique to grocery)
- **Real-time shopper chat**: approve/reject substitutions while shopper is in-store
- **Unit pricing**: $/oz, $/lb shown for price comparison
- **Quick-add stepper**: +/- buttons directly on product card (no detail page needed for basics)
- **Multi-store carts**: shop from multiple stores, each is a separate order
- **Nutrition facts** and ingredients on product detail
- **Digital coupons**: clip store coupons within the app
- **Loyalty card linking**: connect store rewards cards for in-store pricing
- **SNAP EBT / FSA/HSA**: government benefit payment support
- **Buy It Again**: smart reorder based on purchase history and cadence
- **Weight-based pricing**: estimated prices for produce, adjusted at checkout
- **Delivery photos**: shopper takes photo of delivered bags at door
- **Post-delivery tip adjustment**: can increase tip if shopper did great job

## Access Control

| Role | Browse | Order | Track | Review | Manage |
|------|--------|-------|-------|--------|--------|
| Guest | ✅ | — (login required) | — | — | — |
| User | ✅ | ✅ | Own orders | Rate shopper | — |
| Instacart+ | ✅ | ✅ (free delivery) | Own orders | Rate shopper | Subscription |
| Shopper | — | Accept batches | Shop + deliver | — | Own earnings/schedule |
| Retailer | — | Receive via integration | — | — | Catalog, pricing, promotions |
| Admin | ✅ | ✅ | All | Moderate | ✅ |

### Shopper Access
- Shoppers use a separate Shopper app
- See batch offers (store, items, delivery location, estimated earnings)
- Accept/decline batches
- Shop items, scan barcodes, communicate with customer
- Navigate to delivery address
- Deliver and photograph
- Earn tips and ratings
