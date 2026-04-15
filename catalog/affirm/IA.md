---
brand: Affirm
tagline: Buy now, pay over time. No hidden fees.
category: E-Commerce & Fintech
website: https://www.affirm.com
---

# Information Architecture — Affirm

## Overview
Affirm provides transparent buy-now-pay-later financing with no late fees, no hidden charges, and no compounding interest. The IA is bifurcated between **consumers** (flexible payment plans, Affirm Card, savings) and **merchants** (checkout integration, analytics). Affirm's differentiator is radical transparency — every payment schedule is shown upfront with the total cost clearly stated.

## Site Map

```
affirm.com
├── Home
├── How it works
│   ├── Pay in 4 (0% APR)
│   ├── Monthly payments (up to 60 months)
│   └── Affirm Card (physical + virtual)
├── Shop
│   ├── Shop directory
│   ├── Browse by category
│   ├── Featured deals
│   └── Store detail page
├── Affirm Card
│   ├── Overview
│   ├── Apply
│   └── Manage card
├── Affirm Money (Savings)
│   ├── High-yield savings
│   └── Account overview
├── Business
│   ├── Solutions
│   │   ├── Affirm checkout
│   │   ├── Adaptive checkout
│   │   └── Business analytics
│   ├── Pricing
│   ├── Integrations / Platforms
│   └── Developer docs
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Investor relations
├── Help Center
│   ├── Getting started
│   ├── Payments & billing
│   ├── Affirm Card FAQ
│   └── Contact support
├── Legal
│   ├── Terms of Service
│   ├── Privacy Policy
│   └── Licenses
└── Auth
    ├── Log in
    └── Sign up
├── Investor Relations
│   ├── SEC Filings
│   ├── Quarterly Earnings
│   └── Stock Information
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Persistent top bar | Logo, For Shopping, For Business, Affirm Card, Log in |
| Consumer | Dropdown menus | How it works, Shop directory, Affirm Card, Savings |
| Business | Dropdown menus | Solutions, Pricing, Integrations, Docs, Contact sales |
| Footer | Multi-column | Products, Company, Resources, Legal, Social |
| Mobile | Hamburger drawer | Collapsible sections for consumer/business |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Payment Plan | type (Pay-in-4 / Monthly), APR, term length, total cost, eligibility | belongs to User/Order |
| Merchant | name, logo, categories, Affirm options offered, URL | belongs to parent entity |
| Deal | merchant, discount/offer, validity, featured flag | belongs to parent entity |
| Help Article | title, body, category, tags, related articles | belongs to parent entity |
| Affirm Card | status, credit limit, active loans, payment schedule | belongs to parent entity |
| Savings Account | balance, APY, transactions | belongs to parent entity |
| Transaction | amount, merchant, date, status, payment_method | belongs to User and PaymentPlan |
| Refund | amount, reason, status, original_transaction | belongs to Transaction |
| Referral | referrer, referee, status, reward_amount | belongs to User |

## User Flows

### Consumer — Pay in 4
```
Shop at partner store → select Affirm at checkout → Enter phone number → verify via SMS → View transparent payment schedule (4 biweekly, 0% APR) → Approve → purchase confirmed → Autopay or manual payments via Affirm app/website
```

### Consumer — Affirm Card
```
Apply for Affirm Card → credit check → Receive virtual card instantly, physical card by mail → Use card anywhere Visa is accepted → Choose payment plan per purchase in the app → Track all loans and payments in dashboard
```

### Merchant — Setup
```
Visit Business page → explore solutions → Select platform (Shopify, BigCommerce, custom API) → Sign agreement → receive API credentials → Integrate checkout widget → test in sandbox → Launch → access merchant dashboard for analytics
```

### Return & Refund
```
Consumer dashboard → Active payment plan → Merchant issues refund → Affirm adjusts remaining payments → Refund reflected in plan
                                                                                                                          ↘ Full refund → Plan closed → Payments refunded
```

### Affirm Card Anywhere Purchase
```
Tap Affirm Card at any Visa terminal → Transaction appears in app → Choose: Pay in Full or Split into payments → Select term (4 biweekly / 6-36 months) → Payment schedule created → Auto-pay enabled
```
## URL / Route Structure

```
/                           → Home
/how-it-works/              → Consumer overview
/pay-in-4/                  → Biweekly plan details
/monthly-payments/          → Monthly financing
/affirm-card/               → Card product page
/savings/                   → Affirm Money
/shop/                      → Store directory
/shop/{category}/           → Category browse
/business/                  → Merchant landing
/business/solutions/        → Product solutions
/business/pricing/          → Merchant pricing
/developers/                → API documentation
/help/                      → Help center
/help/{topic}/              → Help article
/about/                     → Company
/app/dashboard/               → Consumer dashboard (auth)
/app/payments/                → Active payment plans
/app/payments/:id/            → Payment plan detail
/app/transactions/            → Transaction history
/app/card/                    → Affirm Card management
/app/card/virtual/            → Virtual card numbers
/app/settings/                → Account settings
/app/settings/payment-methods/ → Payment methods
/app/settings/notifications/  → Notification preferences
/app/referrals/               → Referral program
/business/integrations/       → Platform integrations
/business/docs/               → API documentation
/business/docs/api/           → API reference
/business/dashboard/          → Merchant dashboard
/legal/licenses/              → State licenses
/careers/                     → Careers page
/press/                       → Press & media
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Shop search | Autocomplete merchant names, category chips |
| Category browse | Electronics, Fashion, Home, Auto, Travel, etc. |
| Deal sort | Newest, highest discount, most popular |
| Help search | Keyword → grouped results (consumer / merchant) |
| Loan lookup | Search by order or merchant within user dashboard |
| Merchant dashboard | Filter by date range, transaction status, settlement period | Date, Amount |
| Payment plans | Filter by status (active, completed, past due) | Creation date, Amount |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full nav with dropdowns, side-by-side comparisons, multi-column directory |
| Tablet (768–1023px) | Collapsed nav, 2-column grid, sticky CTA bar |
| Mobile (<768px) | Hamburger menu, stacked cards, bottom-anchored "Get the app" |
| App (iOS/Android) | Tab bar (Home, Card, Shop, Payments, Profile), swipe for plan details |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Affirm-Specific UX Patterns
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
| Visitor | Browse shops, learn about products, view help |
| Logged-in Consumer | Payment dashboard, loan history, Affirm Card management, savings |
| Affirm Card Holder | Card settings, per-purchase plan selection, virtual card numbers |
| Merchant Admin | Dashboard, settlements, refunds, integration settings |
| Merchant Developer | API keys, sandbox, webhooks, documentation |
| Internal | Risk assessment tools, compliance, user management |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance