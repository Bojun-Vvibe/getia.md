---
brand: Pinterest
tagline: Discover and do what you love
category: Social & Communication
website: https://pinterest.com
---

# Information Architecture — Pinterest

## Overview

Pinterest is a visual discovery engine that helps users find inspiration, save ideas, and shop products through an image-first interface. The IA is organized around Pins (individual ideas), Boards (curated collections), and a personalized Home Feed powered by visual recommendation algorithms. The platform bridges inspiration and action — from mood board to purchase, recipe to meal, design idea to renovation.

## Site Map

```
Pinterest
├── Home Feed (personalized)
├── Search / Explore
│   ├── Trending
│   ├── Categories
│   │   ├── Home Decor
│   │   ├── Fashion
│   │   ├── Food & Drink
│   │   ├── Beauty
│   │   ├── DIY & Crafts
│   │   ├── Travel
│   │   └── [30+ categories]
│   └── Lens (visual search / camera)
├── Create
│   ├── Create Pin
│   ├── Create Idea Pin (multi-page)
│   └── Create Board
├── Notifications
│   ├── Activity
│   └── Messages
├── Profile
│   ├── Created Pins
│   ├── Saved Boards
│   │   └── [Board] → Pins, Sections
│   ├── Tried (completed ideas)
│   └── Followers / Following
├── Business Hub (creator/business accounts)
│   ├── Analytics
│   ├── Ads Manager
│   ├── Catalogs
│   └── Claim Website
├── Settings
│   ├── Account
│   ├── Profile
│   ├── Privacy
│   ├── Notifications
│   ├── Security
│   └── Brand Permissions
└── Shopping
    ├── Shop Tab
    ├── Product Pins
    ├── Shopping Lists
    └── Verified Merchant badges
```

## Navigation Model

- **Type**: Top nav bar (desktop), bottom tab bar (mobile)
- **Desktop Top Bar**: Home, Explore, Create (+), Notifications (bell), Messages, Profile avatar, Search bar (prominent)
- **Mobile Bottom Tabs**: Home, Search, Create (+), Notifications, Profile
- **Pin Detail**: Overlay / full-screen modal; "More like this" waterfall below
- **Board Navigation**: Grid of boards → tap board → masonry grid of pins within
- **Back Behavior**: Browser-like history stack; pins can be deep-linked

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Pin | image/video, title, description, link (source URL), creator, saves count, comments | → Board(s), → Topic, → Product |
| Idea Pin | multi-page (up to 20 pages), video/image per page, music, tags, step-by-step | → Profile, → Topic |
| Board | name, description, cover, privacy (public/secret), collaborators, sections | → Pins, → Profile |
| Board Section | name, position within board | → Pins, → Board |
| Product Pin | price, availability, merchant, buy link, reviews | → Pin, → Catalog |
| Topic | name, related topics, curated Pins | → Pins, → Search |
| User Profile | display name, username, bio, avatar, website, verified status, follower count | → Boards, → Pins |
| Collection (Shopping List) | saved product pins, price tracking | → Product Pins |

## User Flows

### Saving Inspiration
```
Scroll Home Feed → Tap Pin → View detail with source link → Tap "Save" → Select existing board or create new board → Pin saved to board → "More like this" suggestions appear below → Repeat to build a thematic collection
```

### Visual Search with Lens
```
Tap Search → Tap Camera icon (Lens) → Point camera at object (furniture, outfit, food) → Capture → Pinterest returns visually similar Pins and shoppable products → Tap result → View Pin detail → Save or shop
```

### Shopping Flow
```
Browse Home Feed or Search → Tap Product Pin (price badge visible) → View product details, price, availability, merchant info → Tap "Visit" → Redirect to merchant website for checkout → Or tap "Save to Shopping List" for price-drop notifications
```

## URL / Route Structure

```
pinterest.com/                              # Home feed (logged in) / landing (logged out)
pinterest.com/search/pins/?q={query}        # Search results
pinterest.com/ideas/{topic}/                # Topic / category page
pinterest.com/pin/{pinId}/                  # Pin detail
pinterest.com/{username}/                   # User profile
pinterest.com/{username}/{board-slug}/      # Board view
pinterest.com/{username}/{board}/{section}/ # Board section
pinterest.com/settings/                     # Account settings
pinterest.com/business/                     # Business hub
ads.pinterest.com/                          # Ads Manager
analytics.pinterest.com/                    # Analytics dashboard
pinterest.com/pin/create/                       # Create new pin
pinterest.com/pin/create/idea/                  # Create idea pin
pinterest.com/{username}/boards/                # User's boards list
pinterest.com/{username}/{board-slug}/edit      # Edit board
pinterest.com/{username}/tried/                 # Tried pins
pinterest.com/shopping/                         # Shopping hub
pinterest.com/shopping/lists/                   # Shopping lists
pinterest.com/notifications/                    # Notifications
pinterest.com/messages/                         # Messages
pinterest.com/settings/account/                 # Account settings
pinterest.com/settings/notifications/           # Notification settings
pinterest.com/settings/privacy/                 # Privacy settings
pinterest.com/business/create/                  # Create business account
```

## Search & Filter

- **Search Bar**: Keyword search with autocomplete, trending suggestions, recent searches
- **Guided Search**: Clickable filter bubbles (e.g., "modern" "minimalist" "small space") refine results contextually
- **Visual Search (Lens)**: Camera-based; crop area of an image to search for similar items
- **Search Filters**: Pins / Boards / Profiles toggle; aspect ratio, color filter for design searches
- **Shop Filter**: Filter by price range, brand, availability, verified merchant
- **Board Search**: Search within a specific board's pins
- **Home Feed Tuning**: "Hide" or "See fewer like this" to adjust algorithmic recommendations

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | 2-column masonry grid; bottom tab bar; full-screen pin detail; swipe to browse |
| Tablet (768–1024px) | 3–4 column masonry grid; bottom tab bar; split view for boards |
| Desktop (1024–1440px) | 5–6 column masonry grid; top nav bar; pin detail as centered overlay modal |
| Large Desktop (> 1440px) | 7+ column masonry grid; wider pin modal with side panel for "More like this" |
| Web (logged out) | Full-screen pin preview with signup wall after scroll threshold |

## Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | View pins (limited), search; prompted to sign up after a few interactions |
| Registered User | Save pins, create boards, follow users/topics, comment, message, shop |
| Creator Account | All user features + Idea Pins analytics, audience insights, claim website |
| Business Account | All creator features + Ads Manager, catalog upload, conversion tracking, Shopping API |
| Board Collaborator | Add/remove pins on shared board; cannot delete the board itself |
| Verified Merchant | Blue checkmark on product pins, "Verified Merchant" badge, Shop tab eligibility |
| Advertiser | Create promoted pins, set targeting, manage campaigns and budgets |

## Pin Types

| Type | Content | Features |
|------|---------|----------|
| Standard Pin | Single image + link + description | Save, share, click-through to source |
| Idea Pin | Multi-page (up to 20) stories | Video, music, tagged products, step-by-step |
| Product Pin | Image + price + availability | Buy button, merchant info, price tracking |
| Video Pin | Video (up to 15 min) | Autoplay in feed, engagement metrics |
| Rich Pin | Enhanced metadata from website | Article (headline, author), Recipe (ingredients, time), Product (price, stock) |
| Try-On Pin | AR-enabled product preview | Virtual try-on for makeup, accessories (Lens) |
| Collection Pin | Group of products in one image | Click hotspots to view individual products |

## Algorithm & Ranking

- **Home feed:** Personalized based on followed topics, saved pins, engaged-with content, and similar users
- **Related pins:** Visual similarity + engagement patterns + same source domain
- **Search ranking:** Keyword relevance + pin quality (saves, clicks) + freshness + pinner trust score
- **Guided search bubbles:** Contextual refinements (e.g., search "living room" → bubbles: "modern", "small", "boho", "farmhouse")
- **Taste graph:** Pinterest's proprietary interest mapping; clusters users by aesthetic preferences

## Visual Search (Lens)

- **Crop search:** Select a region of any pin or photo → find visually similar items
- **Camera search:** Point camera at real-world object → matching pins and products
- **Shop the look:** Identify multiple items in an outfit or room → individual product links
- **Skin tone range:** Beauty results adjusted to match user's skin tone
- **AR Try-On:** Virtually apply lipstick, eyeshadow, furniture placement

## Advertising

| Ad Format | Description |
|-----------|-------------|
| Standard Pins | Promoted pins in feeds and search results |
| Video Pins | Promoted video content (autoplay) |
| Carousel Pins | Multi-image swipeable ads (up to 5 images) |
| Shopping Ads | Promoted product pins with price and availability |
| Collection Ads | Hero image/video + product grid below |
| Idea Ads | Sponsored Idea Pins with brand partnership |

## Creator Tools

| Tool | Description |
|------|-------------|
| Idea Pin analytics | Views, saves, clicks, profile visits per Idea Pin |
| Audience insights | Follower demographics, interests, engagement patterns |
| Claimed accounts | Link website, Instagram, Etsy, YouTube for attribution |
| Rich Pins | Auto-sync metadata from website (article, recipe, product) |
| Pin scheduling | Schedule pins for optimal posting times |
| Trends tool | See trending searches by region and category |
| Analytics dashboard | Total impressions, engagements, audience growth |

## Board Organization

- **Board sections:** Subdivide boards into sections (e.g., "Living Room" board → sections: "Furniture", "Lighting", "Art")
- **Secret boards:** Private boards not visible on profile or in search
- **Collaborative boards:** Invite others to pin; useful for shared planning (wedding, renovation)
- **Board covers:** Custom cover pin for visual organization on profile
- **Board notes:** Description text for context on the board's purpose
- **Archive boards:** Hide boards from profile without deleting
