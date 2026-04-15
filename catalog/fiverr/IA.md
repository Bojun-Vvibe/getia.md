---
brand: Fiverr
tagline: Find the perfect freelance services for your business.
category: E-Commerce & Fintech
website: https://www.fiverr.com
---

# Information Architecture — Fiverr

## Overview
Fiverr is a freelance services marketplace where sellers offer productized services called **gigs** — fixed-scope deliverables with tiered pricing packages. The IA is buyer-centric: categories, search, and recommendations are optimized for clients finding talent. Key differentiators include the gig-based model (vs. hourly bidding), Fiverr Pro (vetted premium talent), Fiverr Business (team collaboration), and a resolution center for dispute management.

## Site Map

```
fiverr.com
├── Home
├── Explore (Categories)
│   ├── Graphics & Design
│   ├── Digital Marketing
│   ├── Writing & Translation
│   ├── Video & Animation
│   ├── Music & Audio
│   ├── Programming & Tech
│   ├── Business
│   ├── Data
│   ├── Photography
│   ├── AI Services
│   └── ... (subcategories per category)
├── Fiverr Pro
│   ├── Vetted talent directory
│   └── Pro seller profiles
├── Fiverr Business
│   ├── Team collaboration
│   ├── Business invoicing
│   └── Dedicated success manager
├── Gig Page
│   ├── Gig title & gallery (images/video)
│   ├── About the gig
│   ├── Packages (Basic / Standard / Premium)
│   ├── Gig extras (add-ons)
│   ├── Seller profile snippet
│   ├── Reviews
│   ├── FAQ
│   ├── Compare packages table
│   └── Contact seller / Order
├── Seller Profile
│   ├── Bio, skills, languages
│   ├── Portfolio
│   ├── Active gigs
│   ├── Reviews
│   ├── Response time / Delivery time stats
│   └── Seller level (New / Level 1 / Level 2 / Top Rated)
├── Become a Seller
│   ├── How it works
│   ├── Create a gig
│   └── Seller resources / Academy
├── Orders (Auth)
│   ├── Active orders
│   ├── Delivered orders
│   ├── Completed
│   ├── Cancelled
│   └── Resolution center
├── Help & Education
│   ├── Help center
│   ├── Community forum
│   ├── Blog
│   └── Fiverr Academy (courses)
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Content policy
└── Auth
    ├── Log in
    └── Join (sign up)
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar (prominent), Explore (categories), Fiverr Pro, Fiverr Business, Become a Seller, Sign in/Join |
| Category | Sub-nav bar | Category breadcrumb → subcategory links |
| Gig page | Tabbed sections | Overview, Packages, About Seller, Reviews, FAQ |
| Footer | Multi-column | Categories, About, Support, Community, Legal |
| Seller dashboard | Left sidebar | Dashboard, Gigs, Orders, Earnings, Analytics, Learn |

**Key pattern**: The search bar and category mega-menu are the primary discovery mechanisms. Gig pages use a comparison table for packages — a unique pattern in freelance marketplaces.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Gig | title, gallery (images + intro video), description, category, subcategory, tags, packages (3 tiers), extras, delivery time, revisions, FAQ | → Seller, has Packages, has Reviews |
| Package | tier (Basic/Standard/Premium), name, description, price, delivery days, revisions, features checklist | belongs to Gig |
| Seller | username, avatar, bio, country, languages, skills, member since, level, rating, reviews count, response time | has Gigs, has Reviews |
| Order | gig, package, extras, buyer, seller, requirements, delivery, revisions, status, timeline | belongs to Gig, → Buyer, → Seller |
| Review | buyer, rating (1-5), comment, timestamp, seller response | belongs to Gig/Seller, → Buyer |
| Portfolio Item | title, images/video, category, associated gig | belongs to Seller, → Gig |

## User Flows

### 5a. Buyer — Find & order a gig

```
Search or browse category → view gig results (grid/list) →
  Open gig page → compare Basic/Standard/Premium packages →
  Select package → add extras (faster delivery, extra revisions) →
  Proceed to order → fill in buyer requirements (brief) →
  Pay → seller begins work → delivery → approve or request revision
```


### 5b. Seller — Create a gig

```
"Become a Seller" → complete profile (skills, languages, bio) → Create gig → title, category, tags →
  Define 3 packages (scope, price, delivery time, revisions) → Upload gallery (images, intro video) →
  Write description, FAQ → publish → Promote via social or Fiverr's promoted gigs
```


### 5c. Custom order

```
Buyer contacts seller via inbox → discusses requirements →
  Seller creates a custom offer (price, scope, delivery time) →
  Buyer reviews → accepts → order created → Standard delivery/revision flow
```


## URL / Route Structure

```
/                               → Home
/categories/{category}/         → Category page
/categories/{cat}/{subcat}/     → Subcategory
/search/gigs?query={q}          → Search results
/{username}/{gig-slug}          → Gig detail page
/{username}/                    → Seller profile
/pro/                           → Fiverr Pro
/business/                      → Fiverr Business
/start_selling/                 → Become a seller
/users/{username}/manage_gigs   → Seller dashboard (auth)
/orders/                        → Order management (auth)
/inbox/                         → Messages (auth)
/help/                          → Help center
/community/                     → Forum
/resources/                     → Blog / Academy
/gig/create/                   # Create new gig
/gig/{gig-id}/manage/          # Manage gig
/users/{username}/seller_dashboard/  # Seller dashboard
/users/{username}/analytics/    # Seller analytics
/users/{username}/earnings/     # Earnings overview
/reviews/                       # Reviews management
/resolution_center/             # Dispute resolution
/settings/account/              # Account settings
/settings/security/             # Security settings
/settings/notifications/        # Notification preferences
/support/                       # Support center
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Autocomplete, trending searches, AI-powered matching, category suggestions |
| Filters | Category, seller level, budget range, delivery time, seller language, seller location, Pro seller toggle |
| Sort | Relevance, Best Selling, Newest, Budget-friendly |
| Gig comparison | Side-by-side package tiers on gig page |
| Saved gigs | Bookmark for later, organized in lists |
| Buyer requests | Sellers can browse buyer requests and submit offers |

- **Review search**: Search reviews by keyword or rating
- **Earnings filtering**: Filter earnings by period, gig, status
- **Order history search**: Search past orders by buyer, gig, date
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Category mega-menu, multi-column gig grid, package comparison table, sidebar filters |
| Tablet (768–1023px) | 2-3 column grid, collapsible filters, scrollable packages |
| Mobile (<768px) | Single column, bottom-sheet filters, swipeable package tabs, sticky order bar |
| App (iOS/Android) | Bottom tabs (Home, Search, Orders, Inbox, Profile), push for order updates |


### Platform-Specific UX
- Three-tier package comparison table is Fiverr's signature UI pattern for gig pricing
- Seller response time and delivery stats are prominently displayed as trust signals
- Custom offers enable direct negotiation outside the standard gig packages
- Buyer Requirements form collects the brief before the seller begins work
- Resolution Center provides structured dispute escalation with Fiverr as mediator
- Seller levels (New → Level 1 → Level 2 → Top Rated) unlock progressively more features
- Promoted Gigs allow sellers to boost visibility through an auction-based ad system
- Fiverr's review system is one-directional: only buyers review sellers (no seller reviews of buyers)
- Portfolio section lets sellers showcase past work samples beyond gig gallery images
- Fiverr Business adds team collaboration, consolidated invoicing, and dedicated account management
- Order activity timeline shows all communications, deliveries, and revisions in chronological order

### Integration Points
- Fiverr API enables programmatic order management and gig data access
- Fiverr Workspace (formerly AND CO) provides invoicing and contract management
- Integrations with payment processors support PayPal, credit cards, and Apple Pay


- Quick response indicator shows sellers' average response time to new inquiries
- Mobile app provides push notifications for new orders, messages, and delivery deadlines
- Gig SEO relies on 5 tags per gig and keyword-optimized titles and descriptions

## Access Control

| Role | Access |
|------|--------|
| Visitor | Browse categories, view gigs and profiles, read reviews |
| Buyer | Order gigs, message sellers, leave reviews, manage orders |
| Seller (New) | Create gigs (up to 7), receive orders, limited analytics |
| Seller (Level 1) | More gig slots, custom offers, gig extras |
| Seller (Level 2) | Priority support, gig multiples, higher visibility |
| Top Rated Seller | Badge, premium support, eligibility for Fiverr's Choice |
| Fiverr Pro | Vetted badge, Pro search placement, dedicated support |
| Business Account | Team management, consolidated billing, success manager |
| Internal | Dispute resolution, content moderation, seller vetting |
