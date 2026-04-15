---
brand: Deliveroo
tagline: Your favourite food, delivered
category: Food Delivery
website: https://deliveroo.com
---

# Information Architecture — Deliveroo

## Overview

Deliveroo is a food delivery platform connecting customers with local restaurants, grocery stores, and its own "Editions" dark kitchens. The IA is location-first — the home screen adapts to the user's delivery address, showing nearby restaurants with estimated delivery times. The platform supports on-demand delivery (30-45 min) and scheduled delivery, with Deliveroo Plus (subscription) offering free delivery for frequent users.

## Site Map

```
Deliveroo
├── Home (location-based)
│   ├── Address Input / Saved Addresses
│   ├── Offers / Promotions
│   ├── Categories
│   │   ├── Restaurants
│   │   ├── Grocery
│   │   ├── Convenience
│   │   ├── Alcohol
│   │   └── Pharmacy (select markets)
│   ├── Cuisines
│   │   ├── Pizza
│   │   ├── Sushi
│   │   ├── Indian
│   │   ├── Chinese
│   │   ├── Burgers
│   │   ├── Healthy
│   │   └── [20+ cuisines]
│   ├── Featured Collections
│   │   ├── Top Rated
│   │   ├── Fastest Delivery
│   │   ├── New on Deliveroo
│   │   └── Staff Picks
│   └── Recently Ordered
├── Restaurant Page
│   ├── Menu
│   │   ├── Categories (Starters, Mains, Desserts, Drinks)
│   │   └── Menu Items
│   │       ├── Name, Description, Price
│   │       ├── Photo
│   │       ├── Customizations (size, toppings, extras)
│   │       ├── Dietary Labels (vegan, GF, halal)
│   │       └── Allergen Info
│   ├── Restaurant Info
│   │   ├── Rating
│   │   ├── Delivery Fee
│   │   ├── Estimated Delivery Time
│   │   ├── Minimum Order
│   │   ├── Distance
│   │   └── Hours
│   └── Reviews
├── Cart
│   ├── Items (with customizations)
│   ├── Restaurant name
│   ├── Subtotal / Delivery Fee / Service Fee
│   ├── Promo Code
│   ├── Delivery Instructions
│   └── Tip for Rider
├── Checkout
│   ├── Delivery Address
│   ├── Delivery Time (ASAP or Scheduled)
│   ├── Payment Method
│   ├── Order Summary
│   └── Place Order
├── Order Tracking
│   ├── Order Status (preparing, picked up, on the way)
│   ├── Live Rider Map
│   ├── Rider Info
│   ├── Estimated Arrival
│   ├── Contact Rider
│   └── Contact Support
├── Orders (History)
│   ├── Past Orders
│   ├── Receipts
│   ├── Reorder
│   └── Rate & Review
├── Deliveroo Plus (subscription)
│   ├── Free Delivery (orders over threshold)
│   ├── Reduced Service Fees
│   ├── Member Offers
│   └── Plan Management
├── Editions (Dark Kitchens)
│   └── Delivery-only restaurant brands
├── Grocery & Retail
│   ├── Store Page
│   ├── Category Browse
│   └── Product Search
├── Account
│   ├── Profile
│   ├── Addresses
│   ├── Payment Methods
│   ├── Promotions / Credits
│   ├── Deliveroo Plus
│   └── Settings
├── Rider App (separate)
│   ├── Go Online
│   ├── Order Queue
│   ├── Navigation
│   ├── Earnings
│   └── Fees / Incentives
└── Restaurant Hub (partner portal)
    ├── Menu Management
    ├── Order Management
    ├── Analytics
    ├── Marketing Tools
    └── Financials
```

## Navigation Model

- **Type**: Top nav (desktop) + bottom tab bar (mobile app)
- **Desktop Top Bar**: Deliveroo logo, Address (editable), Search, Offers, Account, Cart
- **Mobile Bottom Tabs**: Home, Search, Orders, Account
- **Cart**: Persistent floating button showing item count and total; slides up to full cart view
- **Restaurant Drill-Down**: Home → Restaurant → Menu → Item customization → Cart → Checkout
- **Category Scroll**: Horizontal cuisine/category chips on home; vertical menu categories in restaurant

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Restaurant | name, logo, banner, cuisine tags, rating, delivery fee, min order, delivery time, distance, hours, Editions flag | → Menu, → Reviews |
| Menu Category | name, position | → Restaurant, → Menu Items |
| Menu Item | name, description, price, photo, customization groups, dietary labels, allergens, popular flag | → Menu Category |
| Customization | name, options (multi-select or single), price adjustments | → Menu Item |
| Order | items, restaurant, total, delivery fee, service fee, tip, payment method, delivery address, status, timestamp | → Restaurant, → Rider |
| Rider | name, photo, live location, vehicle type | → Order |
| Review | rating (1-5), text, order reference, date | → Restaurant |
| Promotion | code, discount type (%, fixed, free delivery), conditions, expiry | → Order |
| Grocery Store | name, categories, delivery time, min order | → Products |
| Product (grocery) | name, price, weight/quantity, brand, photo, category | → Grocery Store |
| Plus Plan | tier, price, free delivery threshold, benefits | → Account |

## User Flows

### Ordering Food
```
Open app → Confirm delivery address → Home shows nearby restaurants → Browse by cuisine or search → Tap restaurant → View menu → Select items → Customize (size, toppings, extras) → Add to cart → View cart → Enter promo code → Add delivery instructions and tip → Checkout → Select payment → Place order → Track order: Preparing → Rider picking up → On the way → Delivered → Receive food → Rate restaurant and rider
```

### Scheduling a Delivery
```
Browse and select items → Go to checkout → Tap "Delivery Time" → Switch from "ASAP" to "Schedule" → Select date and time slot (30-min windows, up to 7 days ahead) → Place order → Confirmation with scheduled time → Reminder before delivery
```

### Grocery Shopping
```
Home → Grocery category → Browse stores → Select store → Browse categories or search products → Add items to cart → View cart with substitution preferences → Checkout → Rider shops and delivers → Receive within 20-30 min
```

### New User Onboarding
```
Visit Deliveroo → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

```
deliveroo.com/                              # Homepage (location prompt)
deliveroo.com/restaurants/{city}            # City restaurant listing
deliveroo.com/menu/{city}/{restaurant-slug} # Restaurant menu
deliveroo.com/menu/{city}/{slug}?item={id}  # Menu item deeplink
deliveroo.com/checkout                      # Checkout
deliveroo.com/orders                        # Order history
deliveroo.com/orders/{orderId}              # Order detail / tracking
deliveroo.com/plus                          # Deliveroo Plus
deliveroo.com/grocery                       # Grocery & retail
deliveroo.com/offers                        # Current promotions
deliveroo.com/rider                         # Rider signup
deliveroo.com/restaurants/partner           # Restaurant partner signup
restaurant-hub.deliveroo.com/              # Partner portal
deliveroo.com/settings  # Settings
deliveroo.com/account  # Account settings
deliveroo.com/account/security  # Security settings
deliveroo.com/billing  # Billing & subscription
deliveroo.com/notifications  # Notification preferences
deliveroo.com/help  # Help center
deliveroo.com/help/{topic}  # Help article
```

## Search & Filter

- **Restaurant Search**: By name, cuisine, dish name
- **Cuisine Filter**: Pizza, Sushi, Indian, Chinese, Burgers, Healthy, Vegan, etc.
- **Sort**: Recommended, Rating, Delivery Time, Distance, Delivery Fee
- **Dietary Filter**: Vegan, Vegetarian, Gluten-Free, Halal
- **Price Filter**: £ / ££ / £££ price range indicators
- **Offers Filter**: Show only restaurants with active promotions
- **Free Delivery**: Show only free delivery or Plus-eligible restaurants
- **Grocery Search**: Product search within specific stores
- **Reorder**: Quick-reorder from past orders (1-tap)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; scrollable restaurant cards; full-screen restaurant menu; live tracking map |
| Tablet | Grid restaurant layout; expanded menu view; split cart + menu |
| Desktop Web | Horizontal restaurant grid; sticky cart sidebar on restaurant page; wider checkout |
| Mobile Web | Responsive web app; prompts to download native app; same functionality as app |

## Access Control

| Role | Capabilities |
|---|---|
| Guest (no account) | Browse restaurants and menus; must create account to order |
| Registered User | Order food, track delivery, save addresses, rate, view history, use promos |
| Plus Subscriber | Free delivery above threshold, reduced fees, member-only offers |
| Rider | Accept/reject deliveries, navigate, earn per delivery, track earnings |
| Restaurant Partner | Manage menu, accept/reject orders, view analytics, run promotions, manage hours |
| Restaurant Manager | Multi-location management, team access, financial reports |
| Deliveroo Staff | Manage platform operations, support, restaurant onboarding, pricing |
| Business Account | Company ordering, expense tracking, employee meal programs |
