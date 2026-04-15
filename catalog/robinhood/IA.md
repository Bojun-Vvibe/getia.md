---
brand: Robinhood
tagline: "Commission-free stock, ETF, options, and crypto trading for everyone."
category: Trading
website: https://robinhood.com
---

# Robinhood — Information Architecture

## Overview

Robinhood is a commission-free trading platform designed to democratize investing. Unlike traditional brokerages with dense, professional interfaces, Robinhood's mental model is **simplicity first** — a clean, mobile-native experience that strips away complexity. Users monitor a single portfolio view, tap into individual stocks or crypto, and execute trades in a few taps. The signature design: one asset at a time, big green/red chart, and a prominent Buy/Sell button.

## Site Map

```
├── Home / Portfolio
│   ├── Portfolio Value (single line chart, dramatic)
│   ├── Daily Change ($ and %)
│   ├── Buying Power
│   ├── Watchlist (custom lists)
│   ├── Top Movers (popular on Robinhood)
│   ├── News Feed (personalized)
│   ├── Recurring Investments Summary
│   └── Robinhood Gold Banner (upsell)
├── Search / Explore
│   ├── Ticker / Company Search
│   ├── Categories (Technology, Healthcare, Energy, etc.)
│   ├── Collections (100 Most Popular, Upcoming Earnings)
│   ├── Daily Movers
│   ├── Crypto
│   ├── IPO Access
│   └── Trending Lists
├── Asset Detail (Stock / ETF / Crypto)
│   ├── Price Chart (line chart, touch-to-scrub)
│   │   ├── Timeframes (1D, 1W, 1M, 3M, 1Y, 5Y)
│   │   └── Color shifts green/red based on period
│   ├── Buy / Sell Buttons (prominent)
│   ├── Your Position (shares, avg cost, return)
│   ├── Key Statistics
│   │   ├── Market Cap, P/E, 52W Range, Volume
│   │   ├── Dividend Yield
│   │   └── Earnings Date
│   ├── About (company description)
│   ├── News (related articles)
│   ├── Analyst Ratings (buy/hold/sell bar)
│   ├── Earnings (chart)
│   ├── People Also Own
│   └── Add to Watchlist
├── Order Flow
│   ├── Buy / Sell Toggle
│   ├── Order Type (market, limit, stop, stop-limit)
│   ├── Shares or Dollars Toggle (fractional shares)
│   ├── Amount Input
│   ├── Review Order
│   ├── Swipe Up to Confirm (signature UX)
│   └── Order Confirmed (confetti animation)
├── Crypto
│   ├── Crypto Portfolio
│   ├── Crypto List (BTC, ETH, DOGE, etc.)
│   ├── Crypto Detail (same layout as stocks)
│   ├── Crypto Wallet (send/receive)
│   └── Staking (earn rewards)
├── Options Trading
│   ├── Options Chain
│   ├── Strategy Builder (calls, puts, spreads)
│   ├── Risk / Reward Preview
│   └── Options Order Flow
├── Recurring Investments
│   ├── Active Recurring Buys
│   ├── Create Recurring (asset, amount, frequency)
│   └── Pause / Edit / Cancel
├── Cash Card
│   ├── Card Overview (virtual + physical)
│   ├── Round-Ups (spare change investing)
│   ├── Weekly Rewards (cashback categories)
│   ├── Card Controls (freeze, PIN)
│   └── Spending History
├── Notifications
│   ├── Price Alerts (set by user)
│   ├── Order Executed
│   ├── Earnings Alerts
│   ├── Dividend Received
│   └── News Alerts
├── Account
│   ├── Profile
│   ├── Investing (account type, margin status)
│   ├── Transfers (deposit / withdraw)
│   ├── Statements & Documents
│   ├── Tax Documents (1099)
│   ├── Robinhood Gold (subscription management)
│   ├── Linked Banks
│   └── Settings
│       ├── Security (2FA, biometrics)
│       ├── Notifications
│       ├── Appearance (dark/light)
│       └── Legal & Regulatory
├── Learn (Snacks)
│   ├── Articles & Explainers
│   ├── Robinhood Snacks (newsletter)
│   └── First Trade Experience (educational)
└── Help
    ├── FAQ
    ├── Contact Support
    └── Chat
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs | Portfolio (home), Search, Cash Card (optional), Notifications, Account |
| **Asset Page** | Full-screen scroll | Chart → Buy/Sell → Stats → News (single continuous page) |
| **Trade Panel** | Bottom sheet (slides up) | Order entry from any asset page |
| **Search** | Full-screen overlay | Ticker symbol + company name search, trending lists |
| **Chart Interaction** | Touch-and-hold scrub | Drag finger across chart to see historical prices with haptic |

### Signature UX Patterns
- **Swipe Up to Submit**: Orders confirmed by swiping up (prevents accidental taps)
- **Confetti on First Trade**: Celebration animation for first stock purchase
- **Fractional Shares**: Dollar-based investing ($5 in AAPL) not just share counts
- **Color as Feedback**: Entire chart and numbers shift green/red based on performance

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Asset | symbol, name, type (stock/etf/crypto), price, change, change_pct, market_cap | has PriceHistory, News, AnalystRatings |
| Position | asset, shares (supports fractional), avg_cost, current_value, total_return, unrealized_pnl | belongs to Portfolio |
| Order | asset, side, type (market/limit/stop), quantity_or_dollars, price, status, filled_at | belongs to User |
| Watchlist | name, assets[] | belongs to User |
| RecurringInvestment | asset, amount, frequency (daily/weekly/biweekly/monthly), next_date, status | belongs to User |
| CryptoWallet | asset, balance, address, send/receive_enabled | belongs to User |
| PriceAlert | asset, condition (above/below), target_price, triggered | belongs to User |
| CashCard | card_number (masked), status, weekly_reward_category, round_up_enabled | belongs to User |
| GoldSubscription | status, tier, margin_limit, interest_rate, research_access | belongs to User |

### Order Types
`market | limit | stop | stop-limit | trailing-stop`

### Order Status
`queued → placed → partially_filled → filled → cancelled → rejected`

## User Flows



### Buy Stock (Dollar-Based)
```
Search → Find AAPL → Asset Page → [Buy] → Dollars or Shares → Enter $50 → Review → Swipe Up → Confetti → Position Appears on Home
```

### Set Price Alert
```
Asset Page → [...] → Set Alert → Above/Below → Enter Price → Save → Push Notification When Triggered
```

### Set Up Recurring Investment
```
Asset Page → [...] → Recurring Investment → Amount ($10) → Frequency (Weekly) → Start → Auto-buys Every Week
```

### Send Crypto
```
Crypto Asset → Send → Enter Address → Amount → Review → 2FA Confirm → Sent
```


## URL / Route Structure

```
/                              → Portfolio Home
/stocks/:symbol                → Stock Detail
/crypto/:symbol                → Crypto Detail
/stocks/:symbol/options        → Options Chain
/order/:id                     → Order Detail
/account                       → Account
/account/transfers             → Transfers
/account/documents             → Statements & Tax Docs
/account/gold                  → Robinhood Gold
/cash-card                     → Cash Card
/notifications                 → Notifications
/learn                         → Education
/search                        → Search / Explore
/lists/:name                   → Watchlist
/recurring                     → Recurring Investments
/settings                      → Settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global | Ticker symbol, company name, crypto | Asset type (stocks, ETFs, crypto) | Relevance, popularity |
| Explore | Categories, collections, trending | Sector, market cap tier | Popular, price change |
| Portfolio | Holdings | Asset type | Value, change, name |
| Watchlist | Watchlist items | — | Custom order, change |

## Responsive Behavior

| Breakpoint | Chart | Trade | Navigation |
|------------|-------|-------|------------|
| Mobile (primary) | Full-width line chart, touch-scrub | Bottom sheet, swipe-up confirm | Bottom tab bar |
| Tablet | Larger chart with more detail | Side panel | Bottom tabs |
| Desktop (web) | Full interactive chart, hover data | Right sidebar order form | Top nav + left sidebar |

### Mobile-First Design Principles
- Single-column, full-bleed design
- One asset at a time (no multi-chart dashboards)
- Large touch targets, minimal text density
- Green/red color coding as primary information signal
- Haptic feedback on chart scrub and order submission
- Pull-to-refresh portfolio value
- Dark mode default (brand identity)
- Fractional shares make $1 minimum accessible

## Access Control

| Role | View Prices | Trade | Options | Crypto | Margin | Gold Features |
|------|------------|-------|---------|--------|--------|--------------|
| Unverified | ✅ | — | — | — | — | — |
| Basic (Cash) | ✅ | ✅ | Level 1-2 | ✅ | — | — |
| Options Enabled | ✅ | ✅ | Level 1-3 | ✅ | — | — |
| Gold Subscriber | ✅ | ✅ | All levels | ✅ | ✅ | Research, larger instant deposits, lower margin rates |

### Regulatory Requirements
- SEC/FINRA compliance disclosures on all trade screens
- Pattern Day Trader warning (< $25k accounts)
- Options risk disclosures
- Crypto not SIPC-insured disclaimer
- Fractional share limitations disclosure
