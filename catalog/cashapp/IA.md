---
brand: Cash App
tagline: Do more with your money.
category: E-Commerce & Fintech
website: https://cash.app
---

# Information Architecture — Cash App

## Overview
Cash App by Block (formerly Square) is a mobile-first financial platform combining P2P payments, Bitcoin trading, stock investing, the Cash Card (customizable Visa debit), Boost instant rewards, and direct deposit. The IA is minimal and action-oriented, reflecting Cash App's design philosophy of reducing financial friction. The website primarily drives app downloads; the app itself is the product.

## Site Map

```
cash.app
├── Home
├── Features
│   ├── Send & Receive
│   ├── Cash Card
│   │   ├── Customize design
│   │   └── Boosts (rewards)
│   ├── Direct Deposit
│   ├── Bitcoin
│   ├── Stocks
│   ├── Cash App Borrow
│   ├── Cash App Taxes
│   └── Cash App Pay (for merchants)
├── $Cashtag (public profiles)
│   └── /{$cashtag}
├── Help
│   ├── Getting started
│   ├── Sending & receiving
│   ├── Cash Card
│   ├── Bitcoin
│   ├── Stocks
│   ├── Account & settings
│   └── Contact support
├── Legal
│   ├── Terms
│   ├── Privacy
│   ├── Licenses
│   └── Law enforcement guide
├── Card (app-only)
│   ├── Active Boosts
│   ├── Card settings
│   └── Spending history
└── Auth
    ├── Log in (phone/email)
    └── Sign up
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Website global | Minimal top nav | Logo, features link, sign in, download CTA |
| Website footer | Compact | Legal, Support, Social links |
| App | Bottom tab bar | Home ($), Card, Investing, Banking |
| App home | Action buttons | Pay, Request, Scan QR |

**Key pattern**: The website is ultra-minimal — almost a single-page experience funneling to the app. Navigation in-app is icon-driven with the $ symbol as the central action hub.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Transaction | sender, recipient, amount, note, status, timestamp | belongs to parent entity |
| $Cashtag Profile | display name, $cashtag, avatar, QR code | belongs to User/Folder |
| Cash Card | design, Boosts enabled, last 4, status | belongs to parent entity |
| Boost | merchant/category, reward (% or $), duration, activation status | belongs to parent entity |
| Bitcoin Holding | amount (BTC/sats), USD value, buy/sell history | belongs to parent entity |
| Stock Holding | ticker, shares (fractional), value, buy/sell history | belongs to parent entity |
| Direct Deposit | routing number, account number, pay schedule | belongs to parent entity |

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

### Send money
```
Open app → tap $ on home screen → Enter dollar amount → Tap "Pay" → search by $cashtag, phone, or email → Add note (optional) → confirm → Instant transfer from balance or linked bank
```

### Buy Bitcoin
```
Navigate to Investing tab → Bitcoin → Tap "Buy" → enter USD amount → Review exchange rate → confirm → BTC added to wallet → option to withdraw to external wallet
```

### Activate Boost
```
Go to Card tab → browse available Boosts → Tap a Boost (e.g., "10% off at Chipotle") → "Add Boost" → Use Cash Card at that merchant → discount applied instantly → One active Boost at a time → swap anytime
```

### Cash App Pay (merchant)
```
Merchant integrates Cash App Pay button → Customer taps Cash App Pay at checkout → Redirected to Cash App → approve payment → Confirmation → return to merchant
```

### New User Onboarding
```
Visit Cash App → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

```
/                           → Home (minimal landing)
/app/                       → App download redirect
/$cashtag/                  → Public cashtag profile
/card/                      → Cash Card info
/bitcoin/                   → Bitcoin feature
/stocks/                    → Stock investing
/direct-deposit/            → Direct deposit info
/taxes/                     → Cash App Taxes
/borrow/                    → Cash App Borrow
/help/                      → Help center
/help/{category}/           → Help category
/help/{category}/{article}/ → Help article
/legal/                     → Legal index
settings  → Settings
billing  → Billing & subscription
notifications  → Notification preferences
api  → API documentation
search?q={query}  → Search results
integrations  → Integrations
admin  → Admin console
/pay/                             → Cash App Pay (merchant)
/boost/                           → Boost rewards info
/app/card/                        → Card management (deep link)
/app/investing/                   → Investing (deep link)
/app/bitcoin/                     → Bitcoin (deep link)
/app/banking/                     → Banking (deep link)
/referral/                        → Referral program
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Person search | By $cashtag, phone, email; recent contacts prioritized |
| QR scan | Camera-based instant lookup |
| Stock search | By ticker or company name |
| Boost browse | By category, nearby merchants |
| Help search | Keyword search across all support articles |
| Transaction filter | By type (sent/received), date, amount |

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Marketing page with animated product showcases, download CTAs |
| Tablet (768–1023px) | Simplified marketing layout |
| Mobile web (<768px) | Deep-link to app, app-store redirect, minimal content |
| App (iOS/Android) | Full product experience — payments, card, investing, banking |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Cash App-Specific UX Patterns
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


### API & Integration Patterns
- RESTful API with JSON request/response format
- Webhook support for real-time event notifications
- OAuth 2.0 for third-party application authorization
- Rate limiting with clear headers (X-RateLimit-Remaining)
- Pagination via cursor-based or offset-based parameters
- Versioned API endpoints for backward compatibility
- Comprehensive API documentation with interactive examples
- SDKs available for popular languages (JavaScript, Python, Ruby, Go)

## Access Control

| Role | Access |
|------|--------|
| Visitor | Website marketing, help center, $cashtag profiles |
| Basic User | Send/receive (low limits), Cash Card |
| Verified User (ID) | Higher limits, Bitcoin, stocks, direct deposit, Borrow |
| Cash Card Holder | Boosts, card customization, ATM withdrawals |
| Business Account | Cash App Pay acceptance, invoicing, analytics |
| Internal Admin | Fraud detection, compliance, account review |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance