# Mobile Super App — Information Architecture

## Overview

A multi-service mobile platform that bundles messaging, payments, commerce, transportation, and lifestyle services into a single app (WeChat, Grab, Gojek, KakaoTalk style). The mental model is a **digital Swiss Army knife** — one app for everything in daily life. Discovery happens through a home screen of services, with chat as the social backbone and a unified wallet tying transactions together.

## Site Map

```
├── Home
│   ├── Search Bar (universal)
│   ├── Service Grid (primary services)
│   │   ├── Messaging
│   │   ├── Wallet / Pay
│   │   ├── Ride-Hailing
│   │   ├── Food Delivery
│   │   ├── Shopping
│   │   ├── Bill Payments
│   │   ├── Travel / Hotels
│   │   └── More Services...
│   ├── Promotions / Deals Carousel
│   ├── Recent Transactions
│   ├── Nearby (location-based services)
│   └── Recommended / For You
├── Messaging
│   ├── Conversation List
│   ├── Chat View
│   │   ├── Text / Voice / Image / Video / File
│   │   ├── Stickers / Emoji
│   │   ├── Voice / Video Call
│   │   ├── Location Sharing
│   │   ├── In-Chat Payment (red envelopes, split bill)
│   │   └── Mini Program / Service Share
│   ├── Group Chats
│   │   ├── Group Info
│   │   ├── Member Management
│   │   ├── Group Announcements
│   │   └── Shared Files / Media
│   ├── Contacts
│   │   ├── Contact List
│   │   ├── Add Contact (QR / phone / search)
│   │   └── Contact Profile
│   ├── Official Accounts / Channels
│   └── Status / Stories
├── Wallet
│   ├── Balance Overview
│   ├── Top Up
│   ├── Send Money (P2P)
│   ├── Request Money
│   ├── QR Pay (scan / show code)
│   ├── Transaction History
│   ├── Bank Accounts (linked)
│   ├── Cards (credit / debit)
│   ├── Bill Payments
│   │   ├── Utilities
│   │   ├── Phone / Internet
│   │   ├── Insurance
│   │   └── Government
│   ├── Rewards / Cashback
│   └── Financial Services
│       ├── Savings / Deposits
│       ├── Investments
│       ├── Insurance
│       ├── Loans / Credit
│       └── Credit Score
├── Ride-Hailing
│   ├── Set Pickup & Destination
│   ├── Vehicle Type Selection (bike, car, premium)
│   ├── Price Estimate
│   ├── Book & Match Driver
│   ├── Live Tracking (map + ETA)
│   ├── Driver Info & Contact
│   ├── Ride History
│   └── Rate Driver
├── Food Delivery
│   ├── Nearby Restaurants
│   ├── Restaurant Page & Menu
│   ├── Cart
│   ├── Checkout
│   ├── Order Tracking
│   └── Order History
├── Shopping / E-Commerce
│   ├── Categories
│   ├── Product Listings
│   ├── Product Detail
│   ├── Cart
│   ├── Checkout
│   ├── Order Tracking
│   └── Returns / Refunds
├── Mini Programs / Mini Apps
│   ├── Featured
│   ├── Categories
│   ├── Recently Used
│   ├── Mini Program View (embedded webview)
│   └── Mini Program Settings
├── Discover
│   ├── Feed (social posts, articles, short videos)
│   ├── Nearby People / Services
│   ├── Trending
│   ├── Live Streams
│   └── Games
├── Notifications
│   ├── System Alerts
│   ├── Transaction Notifications
│   ├── Service Updates
│   ├── Promotional
│   └── Social (likes, follows, mentions)
├── Profile / Me
│   ├── Avatar, Name, QR Code
│   ├── Wallet Summary
│   ├── Favorites / Bookmarks
│   ├── My Orders (aggregated across services)
│   ├── Rewards / Loyalty Points
│   ├── Subscription / Premium
│   ├── Addresses (saved)
│   ├── Privacy Settings
│   ├── Help & Support
│   └── Settings
│       ├── Account Security
│       ├── Notification Preferences
│       ├── Language / Region
│       ├── Storage Management
│       ├── Dark Mode
│       └── About
└── Onboarding
    ├── Phone Verification
    ├── Profile Setup
    ├── Enable Permissions (location, contacts, notifications)
    └── Service Introduction Tour
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4–5 tabs | Home, Messages, Wallet, Discover, Me |
| **Service Grid** | Icon grid on home | Primary entry point for all services (8–12 icons, "More" expands) |
| **Service-Level Nav** | Full-screen takeover with back arrow | Each service (ride, food, shopping) has its own internal navigation |
| **Quick Actions** | Floating button or swipe gesture | QR scan, pay, shortcuts |
| **Search** | Top of home screen | Universal search across messages, services, contacts, mini programs |
| **In-Chat Actions** | Chat toolbar "+" menu | Send payment, share location, open mini program, transfer |

### Bottom Tab Bar
```
[ 🏠 Home ] [ 💬 Messages ] [ 💰 Wallet ] [ 🔍 Discover ] [ 👤 Me ]
```

### Service Grid (Home Screen)
```
┌──────────┬──────────┬──────────┬──────────┐
│ 🚗 Ride  │ 🍔 Food  │ 🛍 Shop  │ 💸 Pay   │
├──────────┼──────────┼──────────┼──────────┤
│ 📱 Bills │ ✈️ Travel│ 🎮 Games │ ••• More │
└──────────┴──────────┴──────────┴──────────┘
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | phone, name, avatar, qr_code, region, language, verified | has one Wallet, many Conversations, Orders, Addresses |
| Wallet | balance, currency, pin_hash, status | belongs to User, has many Transactions, LinkedAccounts |
| Transaction | type (p2p/payment/topup/withdrawal), amount, currency, merchant, status, timestamp | belongs to Wallet |
| Conversation | type (1:1/group/official), last_message, unread_count, pinned | has many Messages, Participants |
| Message | type (text/image/voice/video/file/payment/location/mini_program), content, sender, timestamp, status | belongs to Conversation |
| Order | service_type (ride/food/shopping), status, total, items[], timestamps | belongs to User |
| MiniProgram | app_id, name, icon, developer, permissions[], category | many-to-many with User (recently used, favorites) |
| Contact | user_id, nickname, notes, blocked, favorite | belongs to User |
| Address | label, street, city, coordinates, is_default | belongs to User |
| Reward | type (cashback/points/coupon), value, expires_at, redeemed | belongs to User |

### Cross-Service Identity
- Single login across all services
- Unified wallet for all payments
- Shared address book and delivery addresses
- Aggregated order history across services
- Consolidated loyalty points

### Transaction Types
```
P2P Transfer: initiated → completed / failed
Payment: authorized → captured → settled / refunded
Top-Up: pending → credited
Ride: requested → matched → in_progress → completed → charged
Food Order: placed → confirmed → preparing → delivering → delivered → charged
```

## User Flows

### Pay at Store (QR)
```
Home → [Scan] → Scan Merchant QR (or show own code) → Confirm Amount → Enter PIN / Biometric → Payment Complete → Receipt
```

### Send Money to Friend
```
Messages → Chat → [+] → Send Money → Enter Amount → Add Note → Confirm (PIN/biometric) → Sent → Friend Claims
```

### Book a Ride
```
Home → [Ride] → Set Pickup (auto-detect) → Set Destination → Choose Vehicle Type → Confirm → Match Driver → Track → Arrive → Auto-charge Wallet → Rate
```

### Order Food
```
Home → [Food] → Browse / Search → Restaurant → Add Items → Cart → Checkout (wallet auto-selected) → Track → Delivered → Rate
```

### Use a Mini Program
```
Home → [More] or Search → Mini Program → Grant Permissions (first time) → Use Service → Pay via Wallet → Return to Home
```

## URL / Route Structure

_(Mobile-first deep link / route structure)_

```
/                                → Home
/messages                        → Conversation List
/messages/:id                    → Chat View
/messages/:id/info               → Chat / Group Info
/contacts                        → Contact List
/contacts/:id                    → Contact Profile
/wallet                          → Wallet Home
/wallet/topup                    → Top Up
/wallet/send                     → Send Money
/wallet/scan                     → QR Scanner
/wallet/history                  → Transaction History
/wallet/history/:id              → Transaction Detail
/wallet/banks                    → Linked Bank Accounts
/wallet/bills                    → Bill Payments
/wallet/financial                → Financial Services
/ride                            → Ride-Hailing
/ride/:id                        → Ride Tracking
/ride/history                    → Ride History
/food                            → Food Delivery Home
/food/restaurant/:id             → Restaurant Menu
/food/orders/:id                 → Order Tracking
/shopping                        → Shopping Home
/shopping/product/:id            → Product Detail
/shopping/orders/:id             → Order Detail
/mini/:app_id                    → Mini Program
/discover                        → Discover Feed
/notifications                   → Notifications
/me                              → Profile
/me/orders                       → All Orders (aggregated)
/me/rewards                      → Rewards & Points
/me/addresses                    → Saved Addresses
/me/settings                     → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Universal (Home) | Messages, contacts, services, mini programs, merchants, articles | Service type | Relevance, Recent |
| Messages | Chat content, contact names | Time range, Media type, Sender | Date (newest) |
| Food | Restaurants, dishes | Cuisine, Price, Rating, Delivery Time, Distance | Recommended, Rating, Distance, Price |
| Shopping | Products | Category, Price Range, Rating, Brand | Relevance, Price, Sales, Rating |
| Wallet | Transactions | Type (in/out), Date Range, Amount Range, Service | Date (newest), Amount |
| Mini Programs | App name, category | Category | Recently Used, Popular |

## Responsive Behavior

| Breakpoint | Layout | Navigation |
|------------|--------|------------|
| Mobile (primary) | Single column, bottom tabs | Tab bar + service grid |
| Tablet | Adaptive 2-column (chat list + chat) | Bottom tabs or sidebar |
| Desktop (companion) | Multi-panel (sidebar + content + detail) | Left sidebar |

### Mobile-First Design
- Bottom tab navigation with badge counts (unread messages, pending orders)
- Service grid with customizable icon positions
- Swipe gestures (swipe chat to pin/archive/delete)
- QR scanner always one tap away (camera integration)
- Floating payment button in chat
- Offline mode for messages (queue and sync)
- Push notifications per service (granular controls)
- App size optimization (lazy-load services, mini program sandboxing)
- Biometric auth for wallet operations

## Access Control

| Role | Messaging | Wallet | Services | Mini Programs | Settings |
|------|-----------|--------|----------|---------------|----------|
| Unverified | Limited (read only) | — | Browse | — | Basic |
| Verified (phone) | ✅ | Basic (limits) | ✅ | ✅ | ✅ |
| Verified (ID / KYC) | ✅ | Full (higher limits, financial services) | ✅ | ✅ | ✅ |
| Merchant | ✅ | Receive payments | Manage storefront | Publish | ✅ |
| Mini Program Developer | ✅ | ✅ | ✅ | Publish & manage | ✅ |

### Security Model
- Phone number as primary identity
- PIN + biometric for wallet operations
- Per-transaction confirmation above threshold
- Device binding (trusted devices list)
- Login verification for new device
- Mini program permission sandboxing (camera, location, contacts — user grants per app)
- Session timeout: configurable (default 24h, re-auth for sensitive ops)
