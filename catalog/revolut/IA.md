---
brand: Revolut
tagline: "One app for all things money. Banking, crypto, trading, and international transfers."
category: Banking
website: https://revolut.com
---

# Revolut — Information Architecture

## Overview

Revolut is a financial super-app that started as an international spending card and evolved into a full banking alternative. The mental model is **one hub for all money** — users hold multiple currencies, spend abroad at interbank rates, send money globally, trade stocks and crypto, and manage budgets. The app is aggressively feature-rich, with a service grid reminiscent of super-apps. Key differentiators: multi-currency accounts, instant cross-border transfers, and a modular "Pockets" savings system.

## Site Map

```
├── Home
│   ├── Total Balance (across all currencies)
│   ├── Account Cards (swipeable: GBP, EUR, USD, crypto, etc.)
│   ├── Recent Transactions
│   ├── Quick Actions (Send, Request, Exchange, Top Up)
│   ├── Pockets (savings goals)
│   ├── Rewards / Cashback Summary
│   └── RevPoints Balance
├── Accounts
│   ├── Multi-Currency Accounts
│   │   ├── GBP Account (sort code + account number)
│   │   ├── EUR Account (IBAN)
│   │   ├── USD Account (routing + account number)
│   │   └── 30+ More Currencies
│   ├── Account Detail
│   │   ├── Balance
│   │   ├── Transaction History
│   │   ├── Account Details (numbers, IBAN)
│   │   ├── Direct Debits
│   │   └── Statements
│   ├── Joint Accounts
│   └── Business Account (upgrade)
├── Cards
│   ├── Physical Cards (standard, metal, ultra)
│   ├── Virtual Cards (disposable, recurring)
│   ├── Card Controls
│   │   ├── Freeze / Unfreeze
│   │   ├── Spending Limits
│   │   ├── Location-Based Security
│   │   ├── Online Payments Toggle
│   │   ├── Contactless Toggle
│   │   ├── ATM Withdrawals Toggle
│   │   └── Swipe Payments Toggle
│   ├── PIN Management
│   └── Order New Card (choose design)
├── Payments
│   ├── Send Money
│   │   ├── To Revolut User (instant, free)
│   │   ├── To Bank Account (domestic)
│   │   ├── International Transfer (SWIFT / local rails)
│   │   └── To Crypto Wallet
│   ├── Request Money
│   ├── Scheduled Payments
│   ├── Standing Orders
│   ├── Direct Debits
│   └── Payment Links
├── Exchange
│   ├── Currency Exchange (FX)
│   │   ├── From / To Currency
│   │   ├── Interbank Rate Display
│   │   ├── Weekend Markup Warning
│   │   └── Auto-Exchange (set target rate)
│   ├── Crypto
│   │   ├── Buy / Sell Crypto
│   │   ├── Crypto Portfolio
│   │   ├── Staking
│   │   └── Learn about Crypto
│   └── Commodities (Gold, Silver)
├── Invest
│   ├── Stocks
│   │   ├── Browse Stocks
│   │   ├── Stock Detail (chart, stats)
│   │   ├── Buy / Sell (fractional)
│   │   └── Portfolio
│   └── Robo-Advisor (Revolut Invest)
├── Pockets (Savings)
│   ├── Active Pockets (visual jars)
│   ├── Create Pocket (name, target, emoji)
│   ├── Auto-Save Rules (round-ups, recurring)
│   ├── Group Pockets (shared goals)
│   └── Savings Vaults (interest-bearing)
├── Budgets & Analytics
│   ├── Monthly Budget
│   ├── Spending by Category (charts)
│   ├── Merchant Analysis
│   ├── Subscription Tracker
│   ├── Income vs Spending
│   └── Trends (month over month)
├── Insurance & Extras
│   ├── Travel Insurance
│   ├── Phone Insurance
│   ├── Device Insurance
│   ├── Medical Insurance
│   ├── Lounge Access (Ultra plan)
│   └── RevPoints (rewards program)
├── Subscriptions
│   ├── Standard (free)
│   ├── Plus
│   ├── Premium
│   ├── Metal
│   └── Ultra
├── Settings
│   ├── Personal Details
│   ├── Security (PIN, biometrics, passcode, 2FA)
│   ├── Notification Preferences
│   ├── Privacy
│   ├── Linked Accounts (Open Banking)
│   ├── Appearance (dark/light, app icon)
│   └── Help & Support
└── Help
    ├── Chat Support (in-app)
    ├── FAQ
    ├── Community Forum
    └── Suggest a Feature
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs | Home, Cards, Payments Hub, Invest, Profile |
| **Currency Switcher** | Horizontal scroll cards on Home | Tap to view account, swipe between GBP/EUR/USD |
| **Quick Actions** | Row of icons below balance | Send, Request, Exchange, Top Up, Add Money |
| **Service Grid** | Scrollable grid (similar to super-apps) | Crypto, Stocks, Insurance, Pockets, Rewards, etc. |
| **Search** | Top of Home | Search transactions, contacts, features |
| **Pay Button** | Prominent FAB or bottom sheet | Quick payment initiation |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Account | currency, balance, account_number, iban, sort_code, type (personal/joint/business) | has many Transactions, Cards |
| Transaction | amount, currency, merchant, category (auto-tagged), date, status, exchange_rate, cashback | belongs to Account |
| Card | type (physical/virtual/disposable), design (standard/metal/ultra), status, limits, controls{} | belongs to Account |
| Transfer | from_account, to (user/bank/international), amount, currency, fx_rate, fee, status, eta | belongs to User |
| Pocket | name, emoji, target_amount, current_amount, auto_save_rules[], shared_with[] | belongs to User |
| CryptoHolding | asset, amount, value, avg_cost, pnl | belongs to User |
| StockPosition | ticker, shares (fractional), avg_cost, value | belongs to User |
| Subscription | plan (standard/plus/premium/metal/ultra), features[], price, renewal_date | belongs to User |
| RevPoints | balance, earned_history[], redeemed_history[] | belongs to User |
| Budget | category, limit, spent, period (monthly) | belongs to User |

### Transaction Status
`pending → completed → settled`
`↘ declined / reversed / refunded`

## User Flows

### Send Money Internationally
```
Payments → Send → International → Enter Recipient (name, IBAN) → Amount → See FX Rate & Fee → Review → Biometric → Sent → Track Status
```

### Currency Exchange
```
Exchange → GBP to EUR → Enter Amount → See Interbank Rate → Exchange → EUR Balance Updated Instantly
```

### Create Savings Pocket
```
Pockets → [+] → Name ("Holiday Fund") → Target (£2000) → Add Auto-Save (round-ups + £50/month) → Create → Watch Progress
```

### Freeze Stolen Card
```
Cards → Select Card → [Freeze] → Instant → Order Replacement → Virtual Card Generated Immediately
```

## URL / Route Structure

```
/                              → Home
/accounts                      → All Accounts
/accounts/:currency            → Account Detail (e.g., /accounts/gbp)
/transactions                  → All Transactions
/transactions/:id              → Transaction Detail
/cards                         → Card List
/cards/:id                     → Card Detail & Controls
/payments/send                 → Send Money
/payments/request              → Request Money
/payments/scheduled            → Scheduled Payments
/exchange                      → Currency Exchange
/crypto                        → Crypto Portfolio
/crypto/:symbol                → Crypto Detail
/stocks                        → Stocks Portfolio
/stocks/:symbol                → Stock Detail
/pockets                       → Savings Pockets
/pockets/:id                   → Pocket Detail
/budgets                       → Budget & Analytics
/insurance                     → Insurance Products
/rewards                       → RevPoints
/subscriptions                 → Plan Management
/settings                      → Settings
/help                          → Help & Support
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Transactions | Merchant, amount, reference | Category, Date Range, Currency, Account, Type (in/out) | Date, amount, merchant |
| Contacts | Name, username | Recently used | Frequency, name |
| Crypto / Stocks | Asset name, symbol | Tradeable, category | Market cap, change, name |
| Features | Feature name (search for "insurance", "lounge") | — | Relevance |

## Responsive Behavior

| Breakpoint | Layout | Key Adaptation |
|------------|--------|---------------|
| Mobile (primary) | Single column, bottom tabs, card swipe | Full mobile-first experience |
| Tablet | Wider cards, 2-column analytics | Enhanced charts |
| Desktop (web) | Sidebar nav + dashboard grid | Full account management, settings |

### Mobile-First Design
- Biometric authentication on every open
- Multi-currency card swipe (horizontal carousel)
- Pull-to-refresh balances
- Instant push notifications on every transaction
- Haptic feedback on payments
- Disposable virtual cards generated in one tap
- Offline mode (cached balances)
- Dark mode with signature Revolut purple accents

## Access Control

| Feature | Standard (Free) | Plus | Premium | Metal | Ultra |
|---------|-----------------|------|---------|-------|-------|
| Multi-Currency | 5 currencies | 5 | Unlimited | Unlimited | Unlimited |
| FX Exchange | £1000/mo free | £3000/mo | Unlimited | Unlimited | Unlimited |
| Crypto Fee | 1.99% | 1.49% | 0.99% | 0.99% | 0% |
| Stock Trades | 1/mo free | 3/mo | Unlimited | Unlimited | Unlimited |
| Lounge Access | — | — | — | 1/flight | 3/flight + guest |
| Insurance | — | — | Travel | Travel + device | Comprehensive |
| Cards | Standard plastic | Custom | Premium metal | Metal | Ultra metal |
| Cashback | — | — | 0.1% | 0.1% EUR, 1% non-EUR | 1% + boosted |
| Support | Standard | Priority | Priority | Priority | Dedicated |

### Security Requirements
- Biometric or passcode on every session
- Card controls: per-transaction toggle for online, contactless, ATM
- Location-based security (block transactions outside your area)
- Disposable virtual cards for one-time online purchases
- Transaction notifications within seconds
- Device management and session control
