---
brand: Etsy
tagline: "The global marketplace for unique and creative goods. Handmade, vintage, and craft supplies."
category: Marketplace
website: https://www.etsy.com
---

# Etsy — Information Architecture

## Overview

Etsy is a marketplace focused on unique, handmade, vintage (20+ years old), and craft supply items. The mental model is **creative community commerce** — buyers discover one-of-a-kind items from independent sellers, while sellers run small creative businesses. Etsy differentiates through its niche focus (no mass-produced goods policy), personalization features (custom/made-to-order items), seller stories, strong search (with attribute-based filtering), reviews with photos, and community feel. The platform serves as both a shopping destination and a small-business management platform for sellers.

## Site Map

### Buyer Side

```
├── Home
│   ├── Search Bar (with category suggestions)
│   ├── Personalized Picks ("Based on your activity")
│   ├── Popular Right Now
│   ├── Editors' Picks
│   ├── Recently Viewed & More
│   ├── Category Cards (Jewelry, Clothing, Home & Living, etc.)
│   ├── Gift Ideas
│   ├── Special Occasions (Wedding, Birthday)
│   └── Seasonal / Holiday Featured
├── Category Browse
│   ├── Category Page (subcategories, featured shops)
│   ├── Subcategory (items grid with filters)
│   └── Category Tree
│       ├── Jewelry & Accessories
│       ├── Clothing & Shoes
│       ├── Home & Living
│       ├── Wedding & Party
│       ├── Toys & Entertainment
│       ├── Art & Collectibles
│       ├── Craft Supplies & Tools
│       ├── Vintage
│       └── Gifts
├── Search Results
│   ├── Item Cards Grid
│   │   ├── Photo (hover for second image)
│   │   ├── Title, Price, Shop Name
│   │   ├── Star Seller Badge
│   │   ├── Free Shipping Badge
│   │   ├── Bestseller Badge
│   │   ├── Ad Label (Etsy Ads)
│   │   └── Heart (Save to Favorites)
│   ├── Filters
│   │   ├── Special Offers (on sale, free shipping, Etsy's Pick)
│   │   ├── Price (custom range)
│   │   ├── Shop Location
│   │   ├── Item Type (handmade, vintage, supplies)
│   │   ├── Ordering Options (ready to ship, custom/personalized)
│   │   ├── Category-Specific (color, size, material, style)
│   │   ├── Estimated Arrival (by date)
│   │   └── Star Seller
│   ├── Sort (Relevancy, Price, Top Reviews, Recency)
│   └── Related Searches
├── Listing Detail
│   ├── Images (gallery, video, user-submitted photos from reviews)
│   ├── Title, Price (original + sale price)
│   ├── Seller Info (shop name, rating, Star Seller badge, location)
│   ├── Personalization Field (custom text, color, engraving input)
│   ├── Variations (size, color, style — dropdown or visual)
│   ├── Quantity
│   ├── Add to Cart
│   ├── Buy It Now
│   ├── Estimated Delivery (processing time + shipping time)
│   ├── Returns & Exchanges Policy (per shop)
│   ├── Description (often long, story-telling)
│   ├── Shipping Info (rates by country, processing time)
│   ├── Reviews (with photos from buyers)
│   │   ├── Rating Distribution
│   │   ├── Filter by: has photo, 5 stars, mentions keyword
│   │   └── Seller Response
│   ├── FAQs (seller-defined)
│   ├── From This Shop (more items)
│   ├── Similar Items
│   └── Report This Item
├── Cart
│   ├── Items Grouped by Shop
│   ├── Per-Shop Subtotal
│   ├── Coupon Code (per shop)
│   ├── Gift Wrapping Option (if offered by shop)
│   ├── Note to Seller
│   ├── Estimated Arrival per Item
│   └── Proceed to Checkout
├── Checkout
│   ├── Shipping Address
│   ├── Payment (credit card, PayPal, Etsy gift card, Klarna, Apple Pay)
│   ├── Gift Options (message, wrapping)
│   ├── Order Review (per shop)
│   └── Place Order
├── Purchases & Reviews
│   ├── Purchase History
│   ├── Order Detail (tracking, receipt, contact seller)
│   ├── Write Review (star rating, photo upload, comment)
│   └── Request Help (if order issue)
├── Favorites
│   ├── Favorite Items
│   ├── Favorite Shops
│   └── Collections (organized lists)
├── Messages
│   ├── Conversations with Sellers
│   ├── Order-Related Messages
│   └── Custom Order Requests
├── Account
│   ├── Profile (public, bio, photo)
│   ├── Addresses
│   ├── Payment Methods
│   ├── Credits & Gift Cards
│   ├── Privacy Settings
│   └── Notification Preferences
├── Gift Cards
├── Registry (wish list for events)
└── Help
    ├── Help Center
    ├── Order Help
    ├── Case System (disputes)
    └── Community Forums
```

### Seller Side (Etsy Shop Manager)

```
├── Dashboard
│   ├── Stats Snapshot (views, visits, orders, revenue)
│   ├── To-Do List (new orders, messages, reviews to respond)
│   ├── Recent Activity
│   └── Tips & Announcements
├── Listings
│   ├── Active, Inactive, Draft, Expired, Sold Out
│   ├── Listing Editor
│   │   ├── Photos (10 images, 1 video)
│   │   ├── Listing Details (title, description, tags, materials)
│   │   ├── Inventory & Pricing (price, quantity, SKU)
│   │   ├── Variations (size, color, custom option)
│   │   ├── Personalization (enable, instructions)
│   │   ├── Shipping (origin, processing time, profiles)
│   │   ├── Returns & Exchanges
│   │   ├── Category & Attributes
│   │   ├── Production Partners (if applicable)
│   │   └── SEO (tags, 13 keywords, title optimization)
│   ├── Bulk Edit
│   ├── Listing Stats (views, favorites, orders per listing)
│   └── Copy Listing
├── Orders & Shipping
│   ├── Open Orders (unshipped)
│   ├── Completed Orders
│   ├── Order Detail (buyer info, items, shipping label purchase)
│   ├── Etsy Shipping Labels (discounted USPS/FedEx/UPS)
│   ├── Returns & Cases
│   └── Cancel Order
├── Stats
│   ├── Traffic (views, visits, by source — Etsy search, direct, social, Etsy Ads)
│   ├── Revenue (by day, listing, geographic)
│   ├── Conversion Rate
│   ├── Search Terms (what searches led to your shop)
│   └── Listing Performance (views → favorites → orders funnel)
├── Marketing
│   ├── Etsy Ads (promoted listings, daily budget, CPC)
│   ├── Sales & Coupons (create, share, target)
│   ├── Social Media Sharing
│   └── Star Seller (criteria + status)
├── Finances
│   ├── Payment Account (deposit schedule, current balance)
│   ├── Monthly Statements
│   ├── Fees & Taxes (listing fee, transaction fee, payment processing)
│   └── Sales Tax / VAT
├── Community
│   ├── Teams (seller groups)
│   ├── Forums
│   └── Etsy University (seller education)
├── Shop Settings
│   ├── Shop Name & Info
│   ├── About Section (shop story, photos)
│   ├── Shop Sections (organize listings by category)
│   ├── Shop Policies (shipping, returns, privacy)
│   ├── Message Templates (auto-replies)
│   ├── Shop Members (team access)
│   └── Holiday Mode (vacation pause)
└── Star Seller Dashboard
    ├── Response Rate (within 24h)
    ├── On-Time Shipping Rate (with tracking)
    ├── Rating (4.8+ average)
    ├── Order Count (5+ orders, $300+ revenue)
    └── Monthly Assessment
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, search bar (prominent), Sign In, Favorites (heart), Cart (bag) |
| **Category Bar** | Below header, horizontal links | Main categories + "Gift Ideas" + seasonal |
| **Breadcrumbs** | On category/listing pages | Home > Category > Subcategory > Listing |
| **Filters** | Left sidebar on search results | Faceted filtering with counts |
| **Seller Shop Header** | Custom banner + avatar on shop pages | Shop name, location, Star Seller badge, favorites count, sales count |
| **Shop Manager Nav** | Left sidebar (seller mode) | Dashboard, Listings, Orders, Stats, Marketing, Finances, Settings |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | title, description, price, quantity, tags[13], materials[], images[10], video, category, attributes{}, personalization_enabled, who_made (I did / member / another company), when_made, is_vintage | belongs to Shop |
| Shop | name, banner, avatar, announcement, about, location, star_seller, policies, sections[], member_since, sales_count, rating | has many Listings |
| Variation | property (size/color/style), options[], prices (per option) | belongs to Listing |
| Order | items[], buyer, status, shipping_address, tracking, total, shop_coupon | belongs to Shop and Buyer |
| Review | rating (1-5), text, photos[], item_quality, shipping, customer_service | from Buyer to Listing/Shop |
| Favorite | item or shop | belongs to User |
| Collection | name, items[], privacy (public/private) | belongs to User |
| Coupon | code, type (% or $), min_purchase, expiry | belongs to Shop |
| Message | body, order_ref, read, timestamp | between Buyer and Seller |
| ShippingProfile | origin, destinations[], processing_time, rates{} | belongs to Shop |

### Star Seller Criteria (monthly)
```
Response rate >= 95% (within 24h)
Shipped on time >= 95% (with tracking)
Rating >= 4.8
Orders >= 5 AND Revenue >= $300
```

## User Flows

### Buyer: Discover and Purchase
```
Home → Browse category or search "custom name necklace" → Filter (price, Star Seller, ready to ship) → View listing → Enter personalization ("Emily") → Select variation (gold, 16") → Add to Cart → Checkout → Pay → Receive order → Leave review with photo
```

### Seller: Process Custom Order
```
New order notification → Shop Manager > Orders → Open order → See personalization details → Create item → Purchase shipping label (Etsy) → Ship → Add tracking → Order completes → Buyer reviews
```

### Buyer: Request Custom Order
```
Shop page → Contact seller → Describe custom request → Seller quotes price → Seller creates custom listing → Buyer purchases → Seller creates → Ships → Complete
```

## URL / Route Structure

```
/                                → Home
/search?q=:query                 → Search Results
/search?q=:query&ref=:ref       → Search with tracking
/c/:category                     → Category Page
/c/:category/:subcategory       → Subcategory
/listing/:id/:slug              → Listing Detail
/shop/:shopName                  → Shop Home
/shop/:shopName/reviews          → Shop Reviews
/shop/:shopName?section_id=:id  → Shop Section
/cart                            → Cart
/checkout                        → Checkout
/your/purchases                  → Purchase History
/your/purchases/:id             → Order Detail
/favorites                       → Favorite Items
/favorites/shops                 → Favorite Shops
/people/:username                → User Profile
/conversations                   → Messages
/account                         → Account Settings
/your/shops/me/dashboard        → Seller Dashboard
/your/shops/me/listings         → Manage Listings
/your/shops/me/orders           → Manage Orders
/your/shops/me/stats            → Shop Stats
/your/shops/me/finances         → Finances
/your/shops/me/marketing        → Marketing
/your/shops/me/tools/listings/:id/edit → Edit Listing
/help                            → Help Center
/giftcards                       → Gift Cards
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Buyer Search | Title, tags, description, category, attributes | Category, Price Range, Color, Item Type (handmade/vintage/supplies), Ship-To Location, Estimated Arrival, Special Offers, Star Seller, Ordering Options | Relevancy, Lowest/Highest Price, Most Recent, Top Reviews |
| Seller Listings | Title, tags, SKU | Status (active/inactive/draft/expired/sold out), Section | Various |
| Seller Orders | Buyer name, order ID | Status, Date Range | Date |

## Responsive Behavior

| Breakpoint | Header | Product Grid | Listing Detail | Cart |
|------------|--------|-------------|---------------|------|
| Desktop (>=1024px) | Full nav bar, wide search | 4 columns + sidebar filters | Image gallery + details side by side | Grouped by shop |
| Tablet (768-1023px) | Simplified nav | 2-3 columns, top filters | Stacked | Simplified |
| Mobile (<768px) | Etsy app preferred; web: search + hamburger + cart | 2 columns | Stacked, sticky Add to Cart | Full page |

### Etsy-Specific UX
- **Personalization fields**: inline customization input on listing page
- **Star Seller badge**: trust signal prominently displayed
- **Shop storytelling**: "About" section with seller story and workshop photos
- **Review photos**: buyers upload photos of received items
- **Handmade/Vintage policy**: items must be handmade, vintage (20+ yr), or craft supplies
- **Tags (13 keywords)**: seller SEO through 13 tag slots
- **Favoriting as engagement**: heart button drives save-for-later and social proof
- **Estimated delivery calculator**: processing time + shipping time
- **Group cart by shop**: cart organized per-seller with per-shop coupons
- **Etsy Shipping Labels**: discounted label purchase integrated into order flow
- **Holiday Mode**: sellers can pause shop for vacations

## Access Control

| Role | Browse | Buy | Sell | Review | Admin |
|------|--------|-----|------|--------|-------|
| Guest | ✅ | — | — | — | — |
| Buyer | ✅ | ✅ | — | ✅ (after purchase) | — |
| Seller | ✅ | ✅ | ✅ | ✅ | Own shop |
| Star Seller | ✅ | ✅ | ✅ (priority placement) | ✅ | Own shop |
| Shop Member | ✅ | ✅ | Manage (with permission) | — | Limited |
| Admin (Etsy) | ✅ | ✅ | ✅ | Moderate | ✅ |
