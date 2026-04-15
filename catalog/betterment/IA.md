---
brand: Betterment
tagline: Investing made better.
category: E-Commerce & Fintech
website: https://www.betterment.com
---

# Information Architecture — Betterment

## Overview
Betterment is a goal-based robo-advisor that helps users invest toward specific life goals (retirement, safety net, major purchase). The IA is organized around **goals as first-class objects** — each goal gets its own portfolio, allocation, and timeline. Betterment also offers a cash management account, 401(k) for businesses, and crypto portfolios. The platform emphasizes tax coordination across accounts and automated rebalancing.

## Site Map

```
betterment.com
├── Home
├── Investing
│   ├── Goal-based investing
│   ├── Portfolio strategies
│   │   ├── Core (broad market)
│   │   ├── Socially responsible (SRI)
│   │   ├── Goldman Sachs Smart Beta
│   │   ├── BlackRock Target Income
│   │   └── Crypto portfolios
│   ├── Tax-loss harvesting
│   ├── Tax coordination
│   ├── Charitable giving
│   └── Retirement (IRA, Roth, Rollover)
├── Cash Management
│   ├── Cash Reserve (high-yield)
│   ├── Checking
│   └── Features & rates
├── Betterment at Work (401k)
│   ├── For employers
│   ├── For employees
│   ├── Pricing
│   └── Request demo
├── Advisor Solutions (B2B)
│   ├── Betterment for Advisors
│   ├── Features
│   └── Get started
├── Resources
│   ├── Blog / Perspectives
│   ├── Help center
│   ├── Calculators & tools
│   └── Retirement calculator
├── Pricing
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Security
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Disclosures
└── Auth
    ├── Log in
    └── Get started
├── Tax Center
│   ├── Tax Forms (1099, K-1)
│   ├── Tax-Loss Harvesting Log
│   └── Tax Impact Preview
├── Referral Program
│   ├── Invite Friends
│   └── Referral Rewards
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Investing, Cash, 401(k), Advisors, Resources, Pricing, Log in, Get started |
| Product | Sub-nav | Overview, Strategies, Tax features, Performance, FAQ |
| Footer | Multi-column | Products, Resources, Company, Legal |
| Dashboard | Left sidebar + goal cards | Overview, Goals (each as a card), Cash, Tax, Settings |

**Key pattern**: Goal cards are the primary UI metaphor in the dashboard — each goal is a visual card showing progress toward target with its own allocation.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Goal | name, type (retirement, safety net, custom), target amount, timeline, portfolio strategy, risk level | belongs to parent entity |
| Portfolio | strategy name, ETF allocations, risk score, performance, rebalancing log | belongs to parent entity |
| Tax-loss Harvest | primary security, replacement, harvest amount, wash-sale status | belongs to parent entity |
| Cash Reserve | balance, APY, FDIC coverage, linked accounts | belongs to parent entity |
| 401(k) Plan | employer, match formula, vesting schedule, participant count | belongs to parent entity |
| Blog Post | title, author, date, category, body, CTA | belongs to User, has many Comments |
| Deposit | amount, frequency, source_account, goal_id, status | belongs to Goal |
| Withdrawal | amount, destination_account, goal_id, status | belongs to Goal |
| Tax Form | type (1099-B/1099-DIV/K-1), year, document | belongs to User |
| Allocation | etf_ticker, weight, asset_class | belongs to Portfolio |

## User Flows

### Create a goal
```
Sign up / log in → "Add a goal" from dashboard → Select goal type (Retirement, Safety Net, Major Purchase, General Investing, Education) → Set target amount + target date → Select portfolio strategy (Core, SRI, Smart Beta, etc.) → Adjust risk level slider → preview allocation → Fund initial deposit → enable auto-deposit → goal live
```

### Tax coordination
```
Connect external accounts (401k, IRA, taxable) → Betterment analyzes all holdings across accounts → Recommends asset location (which assets in which account type for tax efficiency) → User approves → rebalancing adjusts allocations across accounts
```

### 401(k) employer setup
```
HR visits Betterment at Work → "Request demo" → Sales consultation → plan design → Employer sets match rules, vesting schedule → Employees invited → individual goal-based 401(k) experience → Payroll integration → contributions automated
```

### Auto-Deposit Setup
```
Dashboard → Goal → Auto-deposit → Set amount and frequency (weekly/biweekly/monthly) → Link bank account → Enable → Automatic investing begins
                                                                                                                                                          ↘ Adjust or pause anytime
```

### Tax-Loss Harvesting
```
Betterment monitors portfolio daily → Market dip triggers harvest opportunity → Sell losing position → Buy tax-equivalent replacement → Harvest logged → Tax savings reflected in dashboard
                                                                                                                                                                                      ↘ Wash-sale rule enforced automatically
```
## URL / Route Structure

```
/                               → Home
/investing/                     → Investing overview
/portfolio/core/                → Core portfolio strategy
/portfolio/sri/                 → SRI portfolio
/portfolio/crypto/              → Crypto portfolios
/tax-loss-harvesting/           → TLH feature
/tax-coordination/              → Tax coordination
/cash-reserve/                  → Cash management
/checking/                      → Betterment Checking
/401k/                          → Betterment at Work
/advisors/                      → Advisor Solutions
/pricing/                       → Fee schedule
/resources/                     → Blog & tools
/resources/{slug}/              → Blog post
/calculators/retirement/        → Retirement calculator
/help/                          → Help center
/help/{category}/{article}/     → Help article
/app/goals/                     → Dashboard (auth)
/app/goals/{goal-id}/           → Individual goal (auth)
/app/cash-reserve/             → Cash Reserve account
/app/checking/                 → Checking account
/app/transfers/                → Transfer money
/app/tax/                      → Tax impact preview
/app/activity/                 → Activity log
/app/settings/                 → Account settings
/app/settings/security/        → Security settings
/app/settings/linked-accounts/ → Linked external accounts
/app/referrals/                → Referral program
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Help search | Keyword-based, categorized by product area |
| Blog search | By topic (Investing, Taxes, Retirement, Market Commentary) |
| Portfolio comparison | Side-by-side strategy comparison tool |
| Goal filtering | Dashboard filters by goal type, performance, funding status |
| Calculator inputs | Interactive sliders for age, savings, expected return |

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full nav, goal card grid, side-by-side charts, interactive tools |
| Tablet (768–1023px) | 2-column goal cards, collapsible sidebar |
| Mobile (<768px) | Hamburger menu, stacked goal cards, simplified charts |
| App (iOS/Android) | Tab bar (Home, Goals, Cash, Transfers, More), swipeable goal cards |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Betterment-Specific UX Patterns
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
| Visitor | Marketing, pricing, blog, calculators |
| Free User | Account overview, basic financial tools |
| Funded Investor | Goal management, portfolio, TLH, tax coordination, performance |
| Cash Reserve User | High-yield savings, checking, transfers |
| 401(k) Participant | Employer plan, goal-based investing, rollovers |
| 401(k) Admin (Employer) | Plan configuration, employee management, compliance |
| Financial Advisor (B2B) | Multi-client dashboard, model portfolios, billing |
| Internal | Compliance review, support, account management |
