# E-Commerce — Information Architecture

## Overview

An online retail platform where customers browse, search, and purchase products. The mental model is a **store** — shoppers navigate categories, evaluate products, add to cart, and check out. Sellers/admins manage inventory, orders, and promotions from a back office.

## Site Map

### Storefront (Customer-Facing)

```
├── Home
│   ├── Hero / Promotions Banner
│   ├── Featured Categories
│   ├── Trending Products
│   ├── Personalized Recommendations
│   └── Recently Viewed
├── Catalog
│   ├── Category Page (with subcategories)
│   ├── Product Listing (grid/list + filters)
│   └── Product Detail
│       ├── Images / Gallery
│       ├── Price & Variants (size, color)
│       ├── Description & Specs
│       ├── Reviews & Ratings
│       ├── Related Products
│       └── Q&A
├── Search Results
│   └── Filtered Results (faceted search)
├── Cart
│   ├── Cart Items
│   ├── Promo Code Input
│   └── Order Summary
├── Checkout
│   ├── Shipping Address
│   ├── Shipping Method
│   ├── Payment
│   └── Review & Place Order
├── Order Confirmation
├── Account
│   ├── Orders (list → detail → tracking)
│   ├── Addresses
│   ├── Payment Methods
│   ├── Wishlist / Saved Items
│   ├── Reviews Written
│   ├── Profile Settings
│   └── Notifications
├── Help / Support
│   ├── FAQ
│   ├── Contact Us
│   ├── Returns & Refunds Policy
│   └── Shipping Info
└── Footer
    ├── About Us
    ├── Terms & Conditions
    ├── Privacy Policy
    └── Social Links
```

### Admin / Back Office

```
├── Dashboard (orders today, revenue, low stock alerts)
├── Products
│   ├── All Products
│   ├── Add/Edit Product
│   ├── Categories
│   ├── Inventory
│   └── Reviews Moderation
├── Orders
│   ├── All Orders
│   ├── Order Detail (items, fulfillment, refunds)
│   └── Returns / Exchanges
├── Customers
│   ├── Customer List
│   └── Customer Detail
├── Promotions
│   ├── Coupons
│   ├── Sales / Discounts
│   └── Gift Cards
├── Analytics
│   ├── Sales Reports
│   ├── Product Performance
│   └── Customer Insights
├── Settings
│   ├── Store Info
│   ├── Shipping Zones & Rates
│   ├── Tax Settings
│   ├── Payment Providers
│   └── Notifications
└── Pages / Content (CMS for static pages)
```

## Navigation Model

### Storefront

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header Nav** | Sticky top bar | Logo, category mega menu, search bar, account, cart (with badge) |
| **Category Nav** | Mega menu or sidebar | Multi-level category tree |
| **Breadcrumbs** | Below header | Home > Category > Subcategory > Product |
| **Product Filters** | Left sidebar or top bar | Faceted: price, brand, rating, size, color |
| **Footer Nav** | Full-width footer | Help links, policies, social, newsletter signup |

### Admin

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Sidebar** | Fixed left nav | Products, Orders, Customers, Promotions, Analytics, Settings |
| **Contextual** | Tabs within sections | Product: General / Media / Pricing / Inventory / SEO |

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Product | name, slug, description, price, compare_price, images[], status | belongs to Category, has many Variants, Reviews |
| Variant | sku, price, stock, attributes (size, color) | belongs to Product |
| Category | name, slug, parent_id, image | has many Products, Subcategories |
| Cart | items[], subtotal, discount | belongs to Session/User |
| Order | order_number, status, total, shipping_address, payment_method | belongs to Customer, has many OrderItems |
| OrderItem | product, variant, quantity, price | belongs to Order |
| Customer | name, email, addresses[], orders_count | has many Orders, Reviews, Addresses |
| Review | rating (1-5), title, body, verified_purchase | belongs to Product and Customer |
| Coupon | code, type (% or $), value, conditions, expires_at | applied to Orders |

### Order Status Flow
`pending → confirmed → processing → shipped → delivered → completed`
`↘ cancelled / refunded / returned`

## User Flows

### Browse to Purchase
```
Home → Category → Filter/Sort → Product Detail → Select Variant → Add to Cart → Cart → Checkout → Payment → Confirmation
```

### Search to Purchase
```
Search Bar → Results (with filters) → Product Detail → Add to Cart → Checkout
```

### Reorder
```
Account → Orders → Past Order → Reorder → Cart (pre-filled) → Checkout
```

### Return
```
Account → Orders → Order Detail → Request Return → Select Items → Reason → Submit → Return Label
```

## URL / Route Structure

### Storefront
```
/                              → Home
/collections/:category         → Category Page
/collections/:category/:sub    → Subcategory
/products/:slug                → Product Detail
/search?q=:query               → Search Results
/cart                          → Cart
/checkout                      → Checkout
/checkout/shipping             → Shipping Step
/checkout/payment              → Payment Step
/checkout/confirmation/:id     → Order Confirmation
/account                       → Account Overview
/account/orders                → Order History
/account/orders/:id            → Order Detail
/account/addresses             → Addresses
/account/wishlist              → Wishlist
/pages/:slug                   → Static Pages (about, policy, etc.)
```

### Admin
```
/admin                         → Dashboard
/admin/products                → Product List
/admin/products/:id            → Edit Product
/admin/orders                  → Order List
/admin/orders/:id              → Order Detail
/admin/customers               → Customer List
/admin/promotions              → Promotions
/admin/analytics               → Analytics
/admin/settings                → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Storefront | Product name, description, brand, SKU | Category, Price Range, Brand, Rating, Color, Size, Availability | Relevance, Price (low/high), Rating, Newest, Best Selling |
| Admin Products | Name, SKU, description | Status, Category, Stock Level, Price Range | Name, Price, Stock, Created, Sales |
| Admin Orders | Order #, customer name/email | Status, Date Range, Payment Status, Amount Range | Date, Amount, Status |

### Autocomplete
Search bar suggests: products (with thumbnail + price), categories, popular searches

## Responsive Behavior

| Breakpoint | Header | Product Grid | Filters | Cart |
|------------|--------|-------------|---------|------|
| Desktop (≥1024px) | Full nav bar + mega menu | 3-4 columns | Left sidebar | Side panel or page |
| Tablet (768–1023px) | Collapsed menu + search icon | 2-3 columns | Top bar (collapsible) | Full page |
| Mobile (<768px) | Hamburger + search + cart icons | 1-2 columns | Bottom sheet or modal | Full page, sticky checkout button |

### Mobile Adaptations
- Product images: horizontal swipe carousel
- Filters: full-screen modal with "Apply" button
- Checkout: single-step-per-page flow
- Sticky "Add to Cart" bar on product detail

## Access Control

### Storefront
| Role | Browse | Cart | Checkout | Account | Reviews |
|------|--------|------|----------|---------|---------|
| Guest | ✅ | ✅ | ✅ (guest checkout) | — | — |
| Customer | ✅ | ✅ | ✅ (saved info) | ✅ | ✅ |

### Admin
| Role | Dashboard | Products | Orders | Customers | Settings |
|------|-----------|----------|--------|-----------|----------|
| Owner | ✅ | CRUD | CRUD | CRUD | ✅ |
| Manager | ✅ | CRUD | CRUD | Read | Limited |
| Staff | ✅ | Read/Update | Read/Update | Read | — |
