---
brand: Amazon
tagline: "Earth's most customer-centric company. Everything store with Prime, marketplace, and same-day delivery."
category: E-Commerce
website: https://www.amazon.com
---

# Amazon — Information Architecture

## Overview

Amazon is the world's largest e-commerce platform, operating as both a first-party retailer and a third-party marketplace (60%+ of sales from third-party sellers). The mental model is **the everything store** — a search-driven shopping experience where customers can find virtually any product, compare sellers, read reviews, and receive fast delivery via Prime. Amazon differentiates through its recommendation engine (personalization at scale), Prime ecosystem (free shipping, video, music), Buy Box algorithm (seller competition for the default purchase option), A+ Content, and fulfillment network (FBA — Fulfilled by Amazon). The IA reflects massive catalog breadth with deep product taxonomy and seller-side complexity.

## Site Map

### Customer-Facing

```
├── Home
│   ├── Search Bar (dominant, with category dropdown)
│   ├── Deals of the Day
│   ├── Personalized Recommendations ("Inspired by your browsing")
│   ├── Keep Shopping For (recently viewed)
│   ├── Category Cards (quick access)
│   ├── Buy Again (past purchases)
│   ├── Prime Video / Music / Reading picks
│   └── Trending Deals
├── Department Navigation
│   ├── All Departments (hamburger menu — massive category tree)
│   ├── Category Page (subcategories, featured brands)
│   └── Sub-category (product listings)
├── Search Results
│   ├── Product Listings (title, image, price, rating, Prime badge)
│   ├── Sponsored Products (labeled ads, intermixed)
│   ├── Left Sidebar Filters
│   │   ├── Department
│   │   ├── Customer Reviews (4+ stars)
│   │   ├── Brand
│   │   ├── Price Range
│   │   ├── Prime (eligible toggle)
│   │   ├── Condition (new, used, renewed)
│   │   ├── Deals (today's deals, Lightning Deals)
│   │   └── Category-Specific Filters (size, color, material)
│   ├── Sort (Featured, Price, Avg Reviews, Newest)
│   └── "Did you mean..." / Related Searches
├── Product Detail Page (PDP)
│   ├── Images (multi-angle, zoom, 360°, video)
│   ├── Title (verbose, keyword-rich)
│   ├── Brand Link
│   ├── Rating (stars + review count)
│   ├── Price / Deal Price / List Price
│   ├── Prime Badge
│   ├── Buy Box (primary seller)
│   │   ├── Add to Cart
│   │   ├── Buy Now
│   │   ├── Quantity Selector
│   │   ├── Delivery Estimate
│   │   ├── Ship From / Sold By
│   │   └── Gift Option
│   ├── Variant Selector (size, color — visual swatches)
│   ├── "Other Sellers on Amazon" (price comparison)
│   ├── Subscribe & Save (recurring delivery discount)
│   ├── Coupons (clip coupon for discount)
│   ├── Product Description / About This Item (bullets)
│   ├── A+ Content (enhanced brand content — rich media)
│   ├── Product Information / Specifications (table)
│   ├── Customer Q&A
│   ├── Customer Reviews
│   │   ├── Rating Distribution (5-star histogram)
│   │   ├── Top Reviews
│   │   ├── Review Filters (star rating, verified purchase, keyword)
│   │   ├── Review with Images/Video
│   │   └── Helpful Votes
│   ├── Frequently Bought Together
│   ├── Customers Who Bought Also Bought
│   ├── Compare With Similar Items (table)
│   ├── Brand Store Link
│   └── Report Incorrect Product Information
├── Cart
│   ├── Cart Items (price changes highlighted)
│   ├── "Saved for Later" (moved from cart)
│   ├── Recommendations ("Items Related to Your Cart")
│   ├── Price Breakdown (subtotal, quantity)
│   ├── Proceed to Checkout
│   └── "Buy Again" Quick Add
├── Checkout
│   ├── Shipping Address (saved, add new)
│   ├── Delivery Options (standard, Prime same-day, Prime next-day, No-Rush)
│   ├── Payment Method (saved cards, gift card balance, Amazon Pay)
│   ├── Gift Options (wrapping, message)
│   ├── Order Review
│   ├── Place Order
│   └── Subscribe & Save Options
├── Orders
│   ├── Your Orders (recent, past 3 months, yearly filter)
│   ├── Order Detail
│   │   ├── Items, Prices, Order Total
│   │   ├── Tracking (shipment map, delivery date)
│   │   ├── Return / Refund (self-service)
│   │   ├── Write Review
│   │   ├── Buy Again
│   │   ├── Invoice Download
│   │   └── Contact Seller
│   ├── Returns (pending, completed)
│   ├── Buy Again (sortable past purchases)
│   └── Digital Orders (Kindle, video, apps)
├── Account
│   ├── Your Account (hub page)
│   ├── Addresses
│   ├── Payment Methods
│   ├── Prime Membership
│   ├── Gift Cards / Balance
│   ├── Login & Security (password, 2FA)
│   ├── Your Lists (Wish Lists, custom lists)
│   ├── Your Recommendations
│   ├── Your Reviews
│   ├── Browsing History
│   ├── Subscribe & Save Subscriptions
│   ├── Digital Content (Kindle, Audible, Music, Video)
│   ├── Communication Preferences
│   ├── Trade-In
│   ├── Amazon Household (family sharing)
│   └── Manage Content & Devices (Kindle/Echo)
├── Prime
│   ├── Prime Benefits Overview
│   ├── Prime Video
│   ├── Prime Music
│   ├── Prime Reading
│   ├── Prime Gaming
│   ├── Prime Try Before You Buy
│   ├── Amazon Fresh / Whole Foods
│   └── Prime Day (annual event)
├── Deals
│   ├── Today's Deals
│   ├── Lightning Deals (time-limited)
│   ├── Coupons
│   ├── Warehouse Deals (open-box)
│   └── Outlet
├── Brand Stores
│   ├── Brand Storefront (custom pages per brand)
│   ├── Brand Collection Pages
│   └── About the Brand
├── Help
│   ├── Customer Service Hub
│   ├── Returns Center (self-service)
│   ├── Track Package
│   ├── Digital Services Help
│   └── Contact Us (chat, phone, email)
└── Footer
    ├── Back to Top
    ├── Get to Know Us / Make Money / Payment / Help
    ├── Country Selector
    └── Subsidiaries (Ring, Alexa, AWS, etc.)
```

### Seller Central (Merchant Dashboard)

```
├── Dashboard (performance summary, action items, news)
├── Catalog
│   ├── Add Product (match existing or create new)
│   ├── Manage Inventory
│   │   ├── Product List (active, inactive, suppressed, stranded)
│   │   ├── Manage FBA Inventory
│   │   ├── Manage FBA Shipments
│   │   └── Upload via Spreadsheet (flat file)
│   ├── Categories & Listing Restrictions
│   └── Brand Registry
├── Orders
│   ├── Manage Orders
│   ├── Order Reports
│   ├── Returns
│   └── Buyer-Seller Messaging
├── Advertising
│   ├── Campaign Manager (Sponsored Products, Brands, Display)
│   ├── Reports
│   └── A+ Content Manager
├── Pricing
│   ├── Automate Pricing (rule-based repricing)
│   ├── Fee Preview
│   └── Business Pricing (B2B)
├── Fulfillment
│   ├── FBA (Fulfilled by Amazon)
│   │   ├── Inventory Planning
│   │   ├── Shipments
│   │   ├── Removal Orders
│   │   └── FBA Fees
│   ├── FBM (Fulfilled by Merchant)
│   └── Multi-Channel Fulfillment
├── Reports
│   ├── Business Reports (sales, traffic, conversion)
│   ├── Inventory Reports
│   ├── Payment Reports
│   ├── Tax Reports
│   └── Advertising Reports
├── Performance
│   ├── Account Health (metrics, policy compliance)
│   ├── Customer Feedback
│   ├── A-to-z Guarantee Claims
│   ├── Chargeback Claims
│   └── Voice of Customer
├── Growth
│   ├── Sell Globally (cross-marketplace)
│   ├── Brand Analytics (search terms, market basket)
│   └── New Product Opportunities
└── Settings
    ├── Account Info
    ├── Shipping Settings
    ├── Return Settings
    ├── Tax Settings
    ├── User Permissions
    └── Notification Preferences
```

## Navigation Model

### Customer
| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Navigation** | Sticky, two-tier | Row 1: Logo, delivery address, search bar (category + query), language, account, returns, cart. Row 2: Hamburger (All), department links, deals, Prime |
| **Hamburger Menu** | Full-screen flyout | Department tree (3+ levels deep), Trending, Digital, Programs |
| **Breadcrumbs** | Below nav on category/product pages | Department > Category > Subcategory |
| **Left Sidebar Filters** | On search/category pages | Faceted filtering (checkbox + range) |
| **Buy Box** | Right-column sticky on PDP | Price, delivery, Add to Cart, Buy Now |
| **Recommendations** | Inline carousels throughout | "Inspired by...", "Frequently bought together", "Similar items" |

### Seller Central
| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar + Dropdown Menus** | Fixed top | Catalog, Inventory, Pricing, Orders, Advertising, Reports, Performance, Settings — each with dropdown submenus |
| **Search** | Within Seller Central | Search inventory by ASIN, SKU, product title |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Product (ASIN) | ASIN, title, brand, category, description, bullet_points[], images[], price, rating, review_count | has Offers, Variants, Reviews |
| Offer (Buy Box) | seller, price, shipping, condition, fulfillment (FBA/FBM), buy_box_winner | belongs to Product |
| Variant | ASIN, parent_ASIN, variation_type (size/color/style), attributes | belongs to Parent Product |
| Order | order_id, items[], status, total, shipping_address, delivery_date | belongs to Customer and Seller |
| Review | rating, title, text, images[], verified_purchase, helpful_votes, author | belongs to Product |
| Question | text, answer_count, votes | belongs to Product |
| Seller | seller_id, name, rating, feedback_count, store_url | has many Offers |
| Cart | items[], subtotal, saved_for_later[] | belongs to Customer |
| WishList | name, items[], visibility (public/private) | belongs to Customer |
| Subscription (SnS) | product, frequency, discount, status | belongs to Customer |
| Deal | type (lightning/daily/coupon), product, discount, start, end | belongs to Product |
| Brand Store | brand, pages[], layout, featured_products[] | has many Products |

### Buy Box Algorithm (conceptual)
```
Eligible sellers compete → Algorithm considers: price + shipping, fulfillment method (FBA preferred), seller metrics (order defect rate, cancellation rate, late shipment rate) → Winner gets default "Add to Cart" → Other sellers listed under "Other Sellers"
```

### Order Status
```
pending → processing → shipped → out_for_delivery → delivered
                                                   → delivery_attempted
                    → cancelled / refunded / returned
```

## User Flows

### Search to Purchase
```
Search "wireless earbuds" → Filter: 4+ stars, Prime → Sort: Featured → Compare products (reviews, ratings, price) → Product Detail → Check reviews → Add to Cart → Continue shopping or Checkout → Place Order → Track → Delivered → Leave Review
```

### Subscribe & Save
```
Product Detail → Subscribe & Save checkbox (save 5-15%) → Select frequency (monthly/bi-monthly) → Add to Cart → Checkout → Auto-delivered on schedule → Manage subscription (skip, change frequency, cancel)
```

### Seller: List Product
```
Seller Central → Catalog → Add Product → Search existing ASIN or Create New → Enter product details → Set price → Choose fulfillment (FBA/FBM) → Upload images → Activate listing → Monitor Buy Box share
```

### Return
```
Your Orders → Order Detail → Return Items → Select reason → Print return label → Ship back → Refund processed (often instant) → Receive refund
```

### New User Onboarding
```
Visit Amazon → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

```
/                              → Home
/s?k=:query                    → Search Results
/s?k=:query&rh=n::nodeId      → Filtered Search
/dp/:asin                      → Product Detail Page
/dp/:asin?th=1                 → Product with variant selector
/gp/product/:asin             → Alternate PDP path
/b?node=:nodeId                → Category/Browse Page
/stores/:brandName             → Brand Store
/gp/cart/view.html             → Cart
/gp/buy/spc/handlers/display.html → Checkout
/gp/your-account/order-history → Your Orders
/gp/your-account/order-details?orderID=:id → Order Detail
/hz/wishlist                   → Your Lists
/gp/yourstore/home             → Your Amazon
/deals                         → Today's Deals
/amazonprime                   → Prime
/gp/help/customer              → Help
/gp/returns                    → Returns Center
/sellercentral/                → Seller Central (separate domain)
settings  → Settings
/gp/subscribe-and-save          → Subscribe & Save management
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Product Search | Product title, description, brand, ASIN, keywords | Department, Prime, Customer Review, Price, Brand, Condition, Seller, Delivery Day, Deals, Climate Pledge Friendly | Featured, Price (low/high), Avg Customer Review, Newest |
| Seller Central | ASIN, SKU, product title, order ID | Status, Fulfillment, Category, Condition | Various |

### Search Features
- Autocomplete with product suggestions (with images + prices)
- "Did you mean" typo correction
- Related searches
- Visual search (mobile camera)
- Voice search (Alexa integration)

## Responsive Behavior

| Breakpoint | Header | Product Grid | PDP | Cart |
|------------|--------|-------------|-----|------|
| Desktop (>=1200px) | Full two-tier nav, wide search bar | 4-5 columns with sidebar filters | Image gallery + Buy Box side by side | Full table |
| Tablet (768-1199px) | Simplified nav | 2-3 columns | Stacked | Simplified |
| Mobile (<768px) | Amazon app preferred; web: search + hamburger + cart | 1-2 columns, swipeable | Stacked, sticky Buy Now bar | Full-page, sticky checkout |

### Amazon-Specific UX
- **Search-dominant**: the search bar is the primary navigation path
- **Buy Box**: the single most important UI element — determines default seller
- **Review ecosystem**: detailed reviews with images, votes, verified badges
- **Recommendation carousels**: multiple "inspired by" sections on every page
- **Prime badges**: visual distinction for Prime-eligible products
- **Price history awareness**: show list price vs deal price, coupon clips
- **1-Click ordering**: patented instant purchase (address + payment pre-configured)
- **Subscribe & Save**: recurring delivery at discount
- **A+ Content**: brands can create rich HTML product descriptions
- **Frustration-free packaging**: Amazon-specific packaging option indicator
- **Dense information display**: maximizes data per screen (not minimalist)

## Access Control

### Customer
| Role | Browse | Cart | Purchase | Review | Lists |
|------|--------|------|----------|--------|-------|
| Guest | ✅ | ✅ | — (login required) | — | — |
| Registered | ✅ | ✅ | ✅ | ✅ (after purchase) | ✅ |
| Prime | ✅ | ✅ | ✅ + free delivery | ✅ | ✅ |

### Seller Central
| Role | Inventory | Orders | Advertising | Reports | Account |
|------|-----------|--------|-------------|---------|---------|
| Account Owner | CRUD | CRUD | CRUD | ✅ | ✅ |
| Admin | CRUD | CRUD | CRUD | ✅ | Limited |
| Catalog Manager | CRUD | Read | — | Limited | — |
| Order Manager | Read | CRUD | — | Limited | — |
| Advertising Manager | — | — | CRUD | Ad reports | — |
