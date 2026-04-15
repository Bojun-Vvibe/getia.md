---
brand: Poshmark
tagline: Social commerce. Sell and shop, powered by community.
category: E-Commerce & Fintech
website: https://www.poshmark.com
---

# Information Architecture — Poshmark

## Overview
Poshmark is a social commerce marketplace for new and secondhand fashion, home, and beauty. Its differentiator is the **social selling model** — Posh Parties (themed live shopping events), sharing listings to boost visibility, bundles for multi-item purchases, and an offer/counter-offer negotiation system. The IA treats every user as both a buyer and a seller, with the closet (profile) as the storefront and sharing as the primary growth mechanic.

## Site Map

```
poshmark.com
├── Home (feed)
├── Browse
│   ├── Women
│   ├── Men
│   ├── Kids
│   ├── Home
│   ├── Beauty
│   ├── Pets
│   ├── Electronics
│   ├── Luxury (Posh Authenticate)
│   └── Boutiques
├── Brands
│   ├── A-Z directory
│   └── /{brand-name}
├── Posh Parties
│   ├── Upcoming parties
│   ├── Current parties
│   ├── Past parties
│   └── Party detail (themed: "Best in Shoes", "Nike Party", etc.)
├── Sell
│   ├── List an item
│   ├── Seller tools
│   ├── Posh Ambassador program
│   └── Shipping guide (prepaid labels)
├── Listing Page
│   ├── Photos
│   ├── Description & details
│   ├── Size, brand, condition
│   ├── Buy now / Make offer
│   ├── Bundle (add to bundle with same seller)
│   ├── Comments
│   ├── Share / Like
│   └── Seller closet link
├── Closet (User Profile)
│   ├── Available listings
│   ├── Sold items
│   ├── About
│   ├── Meet the Posher
│   ├── Love Notes (reviews)
│   └── Followers / Following
├── My Closet (Dashboard)
│   ├── My listings
│   ├── My purchases
│   ├── My offers (sent/received)
│   ├── My bundles
│   ├── My earnings
│   ├── Posh Stats
│   └── Settings
├── Help Center
│   ├── Buying
│   ├── Selling
│   ├── Shipping & returns
│   ├── Posh Protect
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Seller policy
└── Auth
    ├── Log in
    └── Sign up
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search, Browse (categories), Posh Parties, Sell, notifications, Profile |
| Browse | Category mega-menu | Departments → Categories → Subcategories, Brand browse |
| Listing | Action bar | Buy, Offer, Bundle, Share, Like, Comment |
| Footer | Multi-column | Categories, Company, Resources, Legal, App badges |
| App | Bottom tabs | Feed, Shop, Sell (+), Closet, Account |

**Key pattern**: "Share" is a primary action — sharing your own or others' listings to followers and parties is how items get visibility. The feed is a social timeline of shared listings.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Listing | photos (up to 16), title, description, size, brand, category, original price, listing price, condition, likes, comments, shares | — |
| Closet (User) | username, avatar, bio, cover photo, listings count, followers, following, Love Notes, Posh Ambassador status | — |
| Offer | listing, buyer, amount, counter-amount, expiration (24h), status | — |
| Bundle | seller, buyer, items list, bundle discount, offer, shipping | — |
| Posh Party | theme, date/time, host(s), listed items, duration | — |
| Love Note (Review) | buyer, seller, listing, rating, comment, photo | — |

## User Flows

### Buy with offer
```
Browse/search → find listing → "Make an Offer" → Enter offer amount (must meet minimum % of listing price) → Seller receives → Accept / Counter / Decline within 24h → If accepted → buyer charged → seller ships with prepaid label → Item delivered → buyer accepts or opens case → seller paid after 3 days
```

### Create a bundle
```
Visit a seller's closet → add multiple items to bundle → Seller sees bundle → offers bundle discount → Buyer can also make an offer on the bundle → Single checkout, single shipping for all items
```

### Posh Party participation
```
View upcoming parties → join a themed party (e.g., "Date Night Style") → Share eligible listings to the party → Browse party listings → like, share, buy → Host picks "Host Picks" — featured listings get extra visibility
```

### Sell an item
```
Tap "Sell" → photo first (up to 16 photos) → Fill in brand, size, category, condition, price → Publish → share to feed, parties, followers → Buyer purchases → prepaid USPS label generated → ship within 3 days → Earnings credited to Posh balance after buyer accepts
```

## URL / Route Structure

```
/                           → Home feed
/search?query={q}           → Search results
/category/{department}/     → Department browse
/brand/{brand-name}/        → Brand listings
/listing/{listing-id}       → Listing detail
/closet/{username}          → User closet (shop)
/closet/{username}/about    → Meet the Posher
/parties/                   → Posh Parties index
/party/{party-id}           → Party detail
/sell/                      → List item
/account/                   → Dashboard (auth)
/account/listings/          → My listings (auth)
/account/offers/            → My offers (auth)
/account/earnings/          → My earnings (auth)
/help/                      → Help center
poshmark.com/feed                             # Social feed
poshmark.com/discover                         # Discover page
poshmark.com/search?query={q}&type=listings   # Search with filters
poshmark.com/search?query={q}&type=people     # Search users
poshmark.com/category/{dept}/{cat}            # Category browse
poshmark.com/brand/{brand-name}/{category}    # Brand + category
poshmark.com/closet/{username}/love-notes     # Seller reviews
poshmark.com/account/stats                    # Posh Stats
poshmark.com/account/offers/active            # Active offers
poshmark.com/account/bundles                  # Bundles dashboard
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | By keyword, brand, seller; autocomplete with suggestions |
| Filters | Category, size, brand, price range, condition (NWT/NWOT/Good/Fair), color |
| Sort | Just Shared, Recently Reduced, Lowest Price, Highest Price, Relevance |
| Brand browse | A-Z directory, popular brands, brand + category combos |
| Saved search | Push alerts when new matching listings posted |
| My Closet filter | Available, sold, drafts, price drops needed |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | 4-5 column listing grid, sidebar filters, full closet view |
| Tablet (768–1023px) | 3-column grid, collapsible filters |
| Mobile (<768px) | 2-column grid, bottom-sheet filters, sticky sell button |
| App (iOS/Android) | Bottom tabs, swipe-to-share, camera-first sell, party notifications |

## Access Control

| Role | Access |
|------|--------|
| Visitor | Browse, search, view listings and closets |
| Logged-in User | Buy, sell, offer, bundle, share, like, comment, follow |
| Posh Ambassador | Verified badge, community leader perks, party hosting eligibility |
| Suggested User | Boosted visibility, onboarding mentor for new users |
| Seller | Earnings dashboard, shipping labels, Posh Stats analytics |
| Internal Moderator | Listing review, counterfeit detection, dispute resolution |
| Authentication Team | Posh Authenticate for luxury items ($500+) |

## Social Commerce Mechanics

| Feature | How It Works | Impact |
|---------|-------------|--------|
| Sharing | Share listings to your followers' feeds | More visibility = more sales |
| Posh Parties | Themed virtual shopping events (e.g., "Nike Party") | Targeted buyers see your listings |
| Bundles | Buyer adds multiple items from one seller | Higher order value, single shipping |
| Offer System | Buyer proposes lower price; seller counters | 24-hour negotiation window |
| Likes | Bookmark listings; seller sees who liked | Seller can send "Offer to Likers" discount |
| Comments | Q&A on listings | Build trust, clarify details |

## Posh Ambassador Program

- **Requirements:** 5,000+ community shares, 15+ sales, 4.5+ rating, fast shipping
- **Benefits:** Verified badge, increased visibility, party hosting eligibility
- **Mentoring:** Assigned new users to guide through first sales
- **Community status:** Recognized as trusted, experienced seller

## Fee Structure

| Fee | Amount |
|-----|--------|
| Selling commission | 20% (items $15+) or flat $2.95 (items under $15) |
| Shipping | $7.67 flat rate (buyer pays); Priority Mail |
| Discounted shipping | Seller can offer reduced shipping (absorbs cost) |
| Posh Authenticate | Free for luxury items over $500 |
| Direct deposit | Free |
| Instant transfer | $0.25 per transfer |

## Posh Party Format

| Element | Description |
|---------|-------------|
| Theme | Category or brand focus (e.g., "Best in Shoes", "Nike Party", "Date Night") |
| Duration | Typically 2 hours |
| Frequency | Multiple parties daily |
| Host | 1-4 community hosts (Posh Ambassadors) |
| Host Picks | Hosts select standout listings for extra visibility |
| Participation | Share eligible listings to the party feed |
