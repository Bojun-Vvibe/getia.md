---
brand: Depop
tagline: The creative community's marketplace.
category: E-Commerce & Fintech
website: https://www.depop.com
---

# Information Architecture — Depop

## Overview
Depop is a social shopping platform targeting Gen-Z, focused on secondhand fashion, vintage clothing, and unique/handmade items. The IA blends **social media patterns** (follow sellers, like items, explore feed) with **marketplace mechanics** (buy, sell, ship). The Explore page is the heart of discovery — curated edits, trending styles, and algorithmically surfaced items create a scrollable, Instagram-like experience for fashion resale.

## Site Map

```
depop.com
├── Home
├── Explore
│   ├── For You (algorithmic feed)
│   ├── Trending
│   ├── Edits (curated collections)
│   ├── Top sellers
│   └── Depop Picks
├── Search
│   ├── Results grid
│   ├── Category browse
│   │   ├── Womenswear
│   │   ├── Menswear
│   │   ├── Jewelry & Accessories
│   │   ├── Bags
│   │   ├── Shoes
│   │   └── Home & Tech
│   └── Style tags (Y2K, Cottagecore, Streetwear, etc.)
├── Sell
│   ├── List an item
│   ├── Seller hub
│   ├── Shipping guide
│   └── Seller tips / blog
├── Item Page
│   ├── Photos
│   ├── Description
│   ├── Size & condition
│   ├── Seller profile link
│   ├── Buy / Make offer
│   ├── Like / Save
│   └── Share
├── User Profile (Shop)
│   ├── Bio & avatar
│   ├── Listings
│   ├── Reviews
│   ├── Followers / Following
│   └── Sold items
├── Messages (DMs)
├── Help
│   ├── Buying
│   ├── Selling
│   ├── Shipping & returns
│   ├── Safety
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Community guidelines
└── Auth
    ├── Log in
    └── Sign up
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar, Explore, Sell, Messages, Profile, Cart |
| Explore | Horizontal tabs | For You, Trending, Edits, Categories |
| Category | Filter bar | Style, size, price, condition, color, brand, sort |
| Footer | Compact | About, Help, Legal, Social links, App badges |
| App | Bottom tab bar | Home, Search, Sell (+), Inbox, Profile |

**Key pattern**: Social-first navigation — the explore/feed experience dominates. User profiles function as storefronts, blending social following with commerce.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Item | photos (up to 4), description, price, size, condition, brand, category, style tags, likes count | belongs to Order/Collection |
| User / Shop | username, avatar, bio, location, followers, following, listings, reviews, verified seller badge | has many Posts, Comments, Settings |
| Edit (Curated) | title, description, items list, editor, cover image | belongs to parent entity |
| Review | buyer, seller, rating (1-5 stars), comment, transaction date | belongs to User and Entity |
| Message Thread | participants, messages, item reference, timestamps | belongs to User, Channel |
| Style Tag | name (e.g., "Y2K", "Grunge"), associated items count | many-to-many with Items |

| AuditLog | action, actor, target, timestamp, ip_address | belongs to Organization |
| Notification | type, message, read, created_at, action_url | belongs to User |
| Integration | name, type, status, credentials, last_synced | belongs to Workspace |
| Webhook | url, events[], secret, active, last_triggered | belongs to Organization |

### Transaction Lifecycle
```
initiated → pending → processing → completed → settled
                                  ↘ failed → retry → completed
initiated → cancelled
completed → disputed → resolved (refunded or upheld)
```
## User Flows

### Browse & buy
```
Open Explore → scroll "For You" feed or browse edits → Tap item → view photos, description, seller reviews → "Buy" or "Make an offer" → Checkout (Apple Pay, card, PayPal) → confirm → Seller ships → buyer receives → leave review
```

### List & sell
```
Tap Sell (+) → take/upload up to 4 photos → Add description, brand, size, condition, price → Add style tags (e.g., #vintage #y2k #streetwear) → Choose shipping option → publish → Item appears in your shop and in search/explore
```

### Social engagement
```
Discover seller on Explore → view their shop/profile → Follow seller → their new listings appear in your feed → Like items → saved to your likes; seller gets notification → DM seller with questions → negotiate or discuss
```

### New User Onboarding
```
Visit Depop → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
### Share and Collaborate
```
Select item → Share → Enter email or copy link → Set permissions (view/edit/admin) → Send invitation → Collaborator receives notification → Opens shared item
                                                                                                                                           ↘ Link expires or access revoked
```
## URL / Route Structure

```
/                           → Home
/explore/                   → Explore / For You
/search/?q={query}          → Search results
/category/{slug}/           → Category browse
/products/{item-id}/        → Item detail page
/sell/                      → List new item
/{username}/                → User shop / profile
/{username}/reviews/        → Seller reviews
/messages/                  → Message inbox
/likes/                     → Liked items (auth)
/help/                      → Help center
/help/{topic}/              → Help article
/blog/                      → Seller tips & style guides
settings  → Settings
billing  → Billing & subscription
notifications  → Notification preferences
api  → API documentation
integrations  → Integrations
admin  → Admin console
admin/members  → Member management
/product/{id}/offer               → Make offer
/bag                               → Shopping bag
/checkout                          → Checkout
/orders                            → Order history
/selling                           → Selling dashboard
/selling/listings                  → My listings
/settings/notifications           → Notification preferences
/settings/shipping                → Shipping preferences
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Autocomplete, trending searches, recent searches |
| Filters | Category, subcategory, size, price range, condition, brand, color, style tag |
| Sort | Relevance, newest, price low-high, price high-low |
| Style tags | Clickable tags (#vintage, #y2k) that filter results |
| Saved search | Notifications when new items match |
| Explore algorithm | Personalized based on likes, follows, browse history |

- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | 4-column item grid, sidebar filters, full seller profiles |
| Tablet (768–1023px) | 3-column grid, top filter bar |
| Mobile (<768px) | 2-column grid, bottom-sheet filters, swipeable photos |
| App (iOS/Android) | Bottom tabs, camera-first sell, pull-to-refresh feed, push notifications for likes/messages |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Depop-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features

### Accessibility
- WCAG 2.1 AA compliance across all interactive elements
- Semantic HTML with proper ARIA labels and landmarks
- Keyboard navigation support for all core workflows
- Screen reader compatibility tested with VoiceOver, NVDA, and JAWS
- Color contrast ratios meeting minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Reduced motion option respecting `prefers-reduced-motion`
- Resizable text up to 200% without content loss

## Access Control

| Role | Access |
|------|--------|
| Visitor | Browse, search, view items and profiles |
| Logged-in User | Buy, sell, like, follow, message, reviews |
| Verified Seller | Verification badge, boosted visibility |
| Top Seller | Featured in Explore, analytics dashboard |
| Internal Moderator | Content moderation, counterfeit review, dispute resolution |
| Editorial Team | Create Edits, featured collections, Depop Picks |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance