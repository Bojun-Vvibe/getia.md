---
brand: Shopify
tagline: "The commerce platform powering millions of businesses. Build your store, manage products, sell everywhere."
category: E-Commerce
website: https://www.shopify.com
---

# Shopify — Information Architecture

## Overview

Shopify is the leading e-commerce platform that enables merchants of all sizes to create online stores, manage inventory, process payments, and sell across multiple channels (web, mobile, social, in-person). The mental model is **your business in a box** — merchants manage everything from a single admin panel while customers shop on customizable storefronts. Shopify differentiates through its theme ecosystem (Liquid templates + Online Store 2.0), app marketplace (6000+ apps), Shopify Payments (built-in payment processing), multi-channel selling (Instagram, TikTok, Amazon, POS), and headless commerce via Hydrogen/Oxygen (React-based storefront framework).

## Site Map

### Storefront (Customer-Facing)

```
├── Home
│   ├── Announcement Bar (promotions, free shipping threshold)
│   ├── Hero Banner / Slideshow
│   ├── Featured Collections
│   ├── Featured Products
│   ├── Newsletter Signup
│   ├── Blog Posts (latest)
│   └── Testimonials / Social Proof
├── Collections (Categories)
│   ├── Collection Page (products grid + filters)
│   │   ├── Sidebar Filters (price, size, color, type, vendor, tag)
│   │   ├── Sort (best selling, price, alphabetical, date)
│   │   └── Product Cards (image, title, price, compare-at price, badges)
│   └── Collection List Page (browse all collections)
├── Product Detail
│   ├── Product Images / Gallery (zoom, video)
│   ├── Title, Price, Compare-at Price
│   ├── Variant Selector (size, color, material — swatches)
│   ├── Quantity Selector
│   ├── Add to Cart / Buy Now
│   ├── Description (rich text, tabs, accordion)
│   ├── Metafield Data (specs, ingredients, sizing chart)
│   ├── Reviews & Ratings (via app: Judge.me, Loox, etc.)
│   ├── Related Products / You May Also Like
│   ├── Recently Viewed
│   └── Dynamic Checkout (Shop Pay, Apple Pay, Google Pay)
├── Search
│   ├── Predictive Search (autocomplete: products, collections, pages, articles)
│   ├── Search Results (filterable)
│   └── No Results (suggestions)
├── Cart
│   ├── Cart Drawer (slide-out, AJAX-based)
│   ├── Cart Page
│   │   ├── Line Items (image, title, variant, quantity, price)
│   │   ├── Discount Code Input
│   │   ├── Cart Note
│   │   ├── Subtotal
│   │   └── Checkout Button
│   └── Cart Upsell (cross-sell recommendations)
├── Checkout (Shopify-hosted)
│   ├── Contact Information (email/phone)
│   ├── Shipping Address
│   ├── Shipping Method (calculated rates)
│   ├── Payment
│   │   ├── Credit Card (Shopify Payments)
│   │   ├── Shop Pay (accelerated checkout)
│   │   ├── Apple Pay / Google Pay
│   │   ├── PayPal
│   │   └── Alternative Methods (Klarna, Afterpay, crypto)
│   ├── Order Review
│   ├── Tips (optional)
│   ├── Order Confirmation / Thank You Page
│   └── Order Status Page (trackable via URL)
├── Account
│   ├── Login / Register
│   ├── Order History
│   ├── Order Detail (tracking, receipt)
│   ├── Addresses (saved)
│   ├── Wishlist (via app)
│   └── Account Settings
├── Blog
│   ├── Blog List
│   ├── Article Detail (author, date, tags, comments)
│   └── Blog Tags
├── Pages (static content)
│   ├── About Us
│   ├── Contact (form)
│   ├── FAQ
│   ├── Shipping & Returns Policy
│   ├── Privacy Policy
│   └── Terms of Service
└── Footer
    ├── Navigation Links
    ├── Newsletter Signup
    ├── Social Media Links
    ├── Payment Icons
    └── Copyright / Powered by Shopify
```

### Admin (Merchant Dashboard)

```
├── Home
│   ├── Today's Activity (orders, sessions, sales)
│   ├── To-Do List (unfulfilled orders, abandoned checkouts)
│   ├── Sales Channel Performance
│   └── Tips & Suggestions
├── Orders
│   ├── Order List (filterable by status, date, fulfillment, financial)
│   ├── Order Detail
│   │   ├── Items, Discounts, Shipping, Taxes, Total
│   │   ├── Customer Info
│   │   ├── Fulfillment (create shipment, tracking number, partial fulfillment)
│   │   ├── Payment Status (paid, pending, refunded)
│   │   ├── Timeline (activity log)
│   │   ├── Tags, Notes
│   │   ├── Refund (full/partial)
│   │   ├── Edit Order (add/remove items, change shipping)
│   │   └── Print (packing slip, invoice)
│   ├── Drafts (manual orders)
│   ├── Abandoned Checkouts (recovery emails)
│   └── Returns (if enabled)
├── Products
│   ├── All Products (filterable, bulk edit)
│   ├── Product Detail / Editor
│   │   ├── Title, Description (rich text editor)
│   │   ├── Media (images, video, 3D model)
│   │   ├── Pricing (price, compare-at, cost per item)
│   │   ├── Variants (option combinations: size × color)
│   │   ├── Inventory (tracked, SKU, barcode, locations)
│   │   ├── Shipping (weight, dimensions, HS code)
│   │   ├── SEO (title, description, URL handle)
│   │   ├── Metafields (custom structured data)
│   │   ├── Status (active, draft, archived)
│   │   └── Organization (type, vendor, collections, tags)
│   ├── Collections
│   │   ├── Manual Collections (hand-picked)
│   │   └── Automated Collections (rules-based: tag, price, vendor)
│   ├── Inventory
│   │   ├── Inventory Levels (by location)
│   │   ├── Transfers (between locations)
│   │   └── Purchase Orders
│   ├── Gift Cards
│   └── Price Lists (B2B)
├── Customers
│   ├── Customer List (segmented, filterable)
│   ├── Customer Detail
│   │   ├── Contact Info
│   │   ├── Order History
│   │   ├── Lifetime Value
│   │   ├── Tags, Notes
│   │   ├── Tax Exemptions
│   │   └── Metafields
│   ├── Segments (dynamic customer groups)
│   └── Companies (B2B accounts)
├── Content
│   ├── Metaobjects (custom structured content)
│   ├── Files (media library)
│   └── Metatemplates
├── Analytics
│   ├── Dashboard (sales, sessions, conversion, AOV)
│   ├── Reports
│   │   ├── Sales Reports
│   │   ├── Product Reports (top sellers, sell-through)
│   │   ├── Customer Reports (retention, LTV, cohorts)
│   │   ├── Financial Reports (taxes, payments, refunds)
│   │   ├── Acquisition Reports (sessions by source)
│   │   ├── Behavior Reports (top pages, searches)
│   │   └── Marketing Reports (campaign performance)
│   └── Live View (real-time visitors, globe view)
├── Marketing
│   ├── Campaigns (email, social, ads)
│   ├── Automations (abandoned cart, welcome series, win-back)
│   ├── Shopify Email (built-in email marketing)
│   └── Marketing Apps (integration hub)
├── Discounts
│   ├── Discount List
│   ├── Create Discount
│   │   ├── Code Discount (% off, $ off, free shipping, buy X get Y)
│   │   ├── Automatic Discount (auto-applied)
│   │   ├── Conditions (min purchase, min quantity, customer eligibility)
│   │   └── Usage Limits
│   └── Active / Expired / Scheduled
├── Sales Channels
│   ├── Online Store
│   │   ├── Themes
│   │   │   ├── Theme Library (active + drafts)
│   │   │   ├── Theme Editor (drag-and-drop sections + blocks)
│   │   │   ├── Theme Code (Liquid + JSON templates)
│   │   │   └── Theme Settings (colors, fonts, logo)
│   │   ├── Pages (CRUD)
│   │   ├── Blog Posts (CRUD)
│   │   ├── Navigation (menus: header, footer, sidebar)
│   │   ├── Preferences (title, meta, favicon, password page)
│   │   └── Domains
│   ├── Shop App (Shopify's consumer app)
│   ├── Point of Sale (in-person)
│   │   ├── POS Locations
│   │   ├── Staff
│   │   └── Hardware
│   ├── Facebook & Instagram
│   ├── Google & YouTube
│   ├── TikTok
│   ├── Amazon
│   ├── Buy Button (embed anywhere)
│   └── Wholesale (B2B)
├── Apps
│   ├── Installed Apps
│   ├── Shopify App Store (browse/install)
│   └── App Settings (per-app configuration)
├── Settings
│   ├── Store Details (name, address, currency, timezone)
│   ├── Plan (Basic, Shopify, Advanced, Plus)
│   ├── Users & Permissions (staff accounts, collaborators)
│   ├── Payments (Shopify Payments, PayPal, manual methods)
│   ├── Checkout (customization, Checkout Extensibility)
│   ├── Shipping & Delivery (zones, rates, profiles, local delivery)
│   ├── Taxes & Duties (regions, tax overrides)
│   ├── Markets (international markets, currencies, languages)
│   ├── Locations (warehouses, retail stores)
│   ├── Gift Cards
│   ├── Notifications (order confirmations, shipping updates — editable templates)
│   ├── Metafields (definitions for products, customers, orders)
│   ├── Custom Data (metaobject definitions)
│   ├── Languages (translations)
│   ├── Policies (auto-generated or custom)
│   ├── Domains (primary, custom, subdomains)
│   ├── Brand (logo, colors, slogan, social links)
│   ├── Customer Privacy
│   ├── Customer Accounts (new accounts, classic accounts)
│   └── Files (media management)
└── Shopify Magic (AI)
    ├── Product Description Generator
    ├── Email Subject Lines
    ├── Shopify Inbox Replies
    └── Report Summaries
```

## Navigation Model

### Storefront
| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, mega menu (collections), search, account, cart (badge) |
| **Mega Menu** | Multi-column dropdown | Collections with images, featured products |
| **Breadcrumbs** | Below header | Home > Collections > Category > Product |
| **Collection Filters** | Sidebar or horizontal | Faceted: price, size, color, vendor, tag |
| **Cart Drawer** | Slide-out from right | AJAX cart, upsells, checkout button |
| **Footer** | Full-width | Navigation, newsletter, social, policies |

### Admin
| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Home, Orders, Products, Customers, Content, Analytics, Marketing, Discounts, Sales Channels, Apps, Settings |
| **Top Bar** | Fixed | Search (⌘K), plan indicator, notifications, store name |
| **Contextual Actions** | Top-right of pages | Save, Duplicate, Delete, More actions |
| **Bulk Actions** | Selection mode in lists | Select items → bulk edit, delete, add tags |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Product | title, description, vendor, type, tags[], status (active/draft/archived), handle | has Variants, Images, Metafields, belongs to Collections |
| Variant | sku, price, compare_at_price, cost, inventory_quantity, weight, barcode, options (size/color) | belongs to Product |
| Collection | title, description, image, type (manual/automated), rules[], sort_order | has many Products |
| Order | name (#1001), financial_status, fulfillment_status, total, line_items[], customer, shipping_address, discount_codes[] | belongs to Customer |
| Customer | email, first_name, last_name, orders_count, total_spent, tags[], addresses[], segments[] | has many Orders |
| DiscountCode | code, type (percentage/fixed/shipping/bxgy), value, usage_count, starts_at, ends_at | applied to Orders |
| DraftOrder | line_items[], customer, status (open/invoice_sent/completed) | may become Order |
| Page | title, body_html, handle | standalone content |
| Blog | title, articles[] | has many Articles |
| Article | title, body, author, tags[], image | belongs to Blog |
| Theme | name, role (main/unpublished), files[] | belongs to Store |
| Metafield | namespace, key, value, type (single_line_text/number/json/url/etc.) | belongs to any resource |
| Fulfillment | order, tracking_number, tracking_url, line_items[], status | belongs to Order |

### Order Status Flow
```
unfulfilled → partially_fulfilled → fulfilled → delivered
payment: pending → authorized → paid → partially_refunded → refunded
```

## User Flows



### Customer Purchase
```
Home → Browse Collection → Filter (size, color) → Product Detail → Select Variant → Add to Cart → Cart Drawer → Checkout → Shop Pay (1-click) → Order Confirmation → Email Confirmation → Track Order
```

### Fulfill an Order
```
Orders (new order notification) → Order Detail → Review items → Create fulfillment → Add tracking number → Mark as fulfilled → Customer gets shipping email → Delivered
```

### Add New Product
```
Products → Add Product → Title, description → Upload images → Set price, compare-at → Create variants (S/M/L × Red/Blue) → Set inventory per location → SEO → Organize (collections, tags) → Active → Publish
```

### Customize Theme
```
Online Store → Themes → Customize → Section-based editor → Drag sections (hero, featured collection, image with text) → Configure blocks within sections → Change colors/fonts → Preview on mobile → Publish
```

```
/                              → Home
/collections                   → All Collections
/collections/:handle           → Collection Page
/products/:handle              → Product Detail
/search?q=:query               → Search Results
/cart                          → Cart Page
/checkout                      → Checkout (Shopify-hosted)
/checkouts/:token              → Active Checkout Session
/orders/:token                 → Order Status Page (post-purchase)
/account                       → Account Dashboard
/account/login                 → Login
/account/register              → Register
/account/orders/:id            → Order Detail
/account/addresses             → Saved Addresses
/blogs/:blog                   → Blog
/blogs/:blog/:article          → Blog Article
/pages/:handle                 → Static Page
/policies/:handle              → Policy Page

## URL / Route Structure

```

```
/admin                         → Home
/admin/orders                  → Orders
/admin/orders/:id              → Order Detail
/admin/draft_orders            → Drafts
/admin/products                → Products
/admin/products/:id            → Product Editor
/admin/products/:id/variants/:id → Variant Detail
/admin/collections             → Collections
/admin/collections/:id         → Collection Editor
/admin/customers               → Customers
/admin/customers/:id           → Customer Detail
/admin/customers/segments      → Segments
/admin/analytics               → Analytics Dashboard
/admin/analytics/reports       → Reports
/admin/marketing               → Marketing
/admin/discounts               → Discounts
/admin/discounts/:id           → Discount Detail
/admin/themes                  → Themes
/admin/themes/:id/editor       → Theme Editor
/admin/pages                   → Pages
/admin/blog_posts              → Blog Posts
/admin/navigation              → Navigation Menus
/admin/apps                    → Apps
/admin/settings                → Settings
/admin/settings/payments       → Payments
/admin/settings/shipping       → Shipping
/admin/settings/checkout       → Checkout
/admin/settings/taxes          → Taxes
/admin/settings/markets        → Markets
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Storefront | Products (title, description, SKU, tags), collections, pages, articles | Collection, Price Range, Availability, Vendor, Color, Size (faceted, theme-dependent) | Relevance, Price, Best Selling, Newest, A-Z |
| Admin Products | Title, SKU, barcode, vendor | Status, Collection, Type, Vendor, Tagged, Inventory | Title, Created, Updated, Inventory |
| Admin Orders | Order #, customer name/email | Status, Financial, Fulfillment, Date, Channel, Discount, Risk | Date, Total, Customer |
| Admin Customers | Name, email, phone | Orders Count, Amount Spent, Location, Tags, Accepts Marketing | Date, Orders, Spent |

### Predictive Search (Storefront)
Typing in search bar → instant suggestions: product cards (with image + price), collections, pages

## Responsive Behavior

### Storefront
| Breakpoint | Header | Product Grid | Product Detail | Cart | Checkout |
|------------|--------|-------------|---------------|------|----------|
| Desktop (>=1024px) | Full nav + mega menu | 3-4 columns | Image gallery + details side by side | Drawer or page | Multi-step inline |
| Tablet (768-1023px) | Collapsed menu | 2-3 columns | Stacked | Drawer | Multi-step |
| Mobile (<768px) | Hamburger + search + cart | 1-2 columns, swipeable | Stacked, sticky Add to Cart | Full page | Single step per page |

### Admin
| Breakpoint | Sidebar | Content |
|------------|---------|---------|
| Desktop (>=1024px) | Expanded | Full width |
| Tablet | Collapsed | Full width |
| Mobile | Hidden (Shopify mobile app) | Full width |

### Shopify-Specific UX
- **Online Store 2.0**: section-based theme editor (any page can have sections + blocks)
- **Liquid templates**: Shopify's template language for themes
- **Shop Pay**: accelerated 1-click checkout (saves customer info across Shopify stores)
- **Shopify POS**: in-person selling synced with online inventory
- **Multi-channel sync**: inventory, orders, and products synced across all sales channels
- **Shopify Magic (AI)**: auto-generate product descriptions, email subjects, chat replies
- **Cart drawer**: AJAX-powered slide-out cart (no page reload)
- **Metafields**: custom structured data on any resource (products, customers, orders)
- **Shopify Functions**: server-side customization (discount logic, shipping, payment)
- **Checkout Extensibility**: customize checkout UI via app blocks (Shopify Plus)
- **Live View**: real-time globe visualization of visitors

## Access Control

### Storefront
| Role | Browse | Cart | Checkout | Account |
|------|--------|------|----------|---------|
| Guest | ✅ | ✅ | ✅ (guest checkout) | — |
| Customer | ✅ | ✅ | ✅ (saved info, Shop Pay) | ✅ |
| B2B Customer | ✅ (with price lists) | ✅ | ✅ (terms, PO) | ✅ (company-level) |

### Admin
| Role | Dashboard | Orders | Products | Customers | Analytics | Settings | Apps |
|------|-----------|--------|----------|-----------|-----------|----------|------|
| Store Owner | ✅ | CRUD | CRUD | CRUD | ✅ | ✅ | Install |
| Full Access Staff | ✅ | CRUD | CRUD | CRUD | ✅ | Limited | Manage |
| Limited Staff | ✅ | Per-permission | Per-permission | Per-permission | View | — | — |
| Collaborator (partner) | ✅ | Per-permission | Per-permission | — | View | Theme only | Manage own |

### Shopify Permissions
- 20+ granular permissions (view orders, manage products, manage themes, etc.)
- Collaborator accounts for agencies and developers
- Staff can be restricted to specific POS locations
- API access via access scopes (read_products, write_orders, etc.)
