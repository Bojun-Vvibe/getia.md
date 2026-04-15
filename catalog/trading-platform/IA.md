# Trading Platform — Information Architecture

## Overview

A stock/crypto trading platform (Robinhood, Binance, E*TRADE style). The mental model is **markets + portfolio** — real-time data drives everything. Users monitor prices, analyze charts, execute trades, and track portfolio performance. Speed and data density are critical.

## Site Map

```
├── Dashboard / Overview
│   ├── Portfolio Value (chart)
│   ├── Today's P&L
│   ├── Watchlist (quick view)
│   ├── Open Positions
│   ├── Recent Orders
│   └── Market Summary (indices)
├── Markets
│   ├── Stocks
│   ├── Crypto
│   ├── ETFs
│   ├── Options
│   ├── Forex
│   ├── Market Movers (gainers, losers, volume)
│   └── Sectors / Industries
├── Asset Detail
│   ├── Price Chart (candlestick, line, area)
│   │   ├── Timeframes (1D, 1W, 1M, 3M, 1Y, All)
│   │   ├── Indicators (MA, RSI, MACD, Bollinger)
│   │   └── Drawing Tools
│   ├── Order Panel (Buy / Sell)
│   │   ├── Order Type (market, limit, stop-loss)
│   │   ├── Quantity / Amount
│   │   ├── Preview
│   │   └── Confirm
│   ├── Key Stats (market cap, P/E, volume, 52w range)
│   ├── News & Analysis
│   ├── Financials (income, balance, cash flow)
│   ├── Analyst Ratings
│   ├── Options Chain (if applicable)
│   └── Related Assets
├── Portfolio
│   ├── Holdings (table with P&L)
│   ├── Performance Chart
│   ├── Allocation (pie chart)
│   ├── Dividends
│   ├── Tax Lots
│   └── Returns (total, YTD, vs benchmark)
├── Orders
│   ├── Open Orders
│   ├── Order History
│   ├── Trade Confirmations
│   └── Order Detail
├── Watchlists
│   ├── My Watchlists
│   ├── Create / Edit Watchlist
│   └── Watchlist View (mini-charts, prices)
├── News & Research
│   ├── Market News Feed
│   ├── Analyst Reports
│   ├── Earnings Calendar
│   └── Economic Calendar
├── Alerts
│   ├── Price Alerts
│   ├── Volume Alerts
│   ├── News Alerts
│   └── Create Alert
├── Account
│   ├── Balances (cash, margin, buying power)
│   ├── Transfers (deposit / withdraw)
│   ├── Statements
│   ├── Tax Documents
│   └── Account Settings
├── Settings
│   ├── Trading Preferences
│   ├── Chart Defaults
│   ├── Notifications
│   ├── Security (2FA)
│   └── API Access
└── Education (optional)
    ├── Learn to Trade
    ├── Glossary
    └── Paper Trading (simulator)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed | Logo, search (ticker lookup), notifications, account |
| **Left Sidebar** | Collapsible | Dashboard, Markets, Portfolio, Orders, Watchlists, News |
| **Trade Panel** | Right sidebar or modal | Buy/Sell form, always accessible from asset page |
| **Chart Tools** | Toolbar above chart | Timeframe, chart type, indicators, drawing tools |
| **Ticker Bar** | Optional scrolling ticker | Live prices across top |
| **Quick Search** | ⌘K or top bar | Search by ticker symbol or company name |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Asset | symbol, name, type, price, change, change_pct, volume, market_cap | has PriceHistory, News |
| Position | asset, quantity, avg_cost, current_value, unrealized_pnl | belongs to Portfolio |
| Order | asset, side (buy/sell), type, quantity, price, status, filled_at | belongs to User |
| Watchlist | name, assets[], columns[] | belongs to User |
| PriceAlert | asset, condition (above/below), target_price, triggered | belongs to User |
| Transaction | type (deposit/withdraw/dividend), amount, date, status | belongs to Account |

### Order Types
`market | limit | stop | stop-limit | trailing-stop`

### Order Status
`pending → submitted → partially_filled → filled → cancelled → rejected`

## User Flows

### Research and Trade
```
Search Ticker → Asset Page → Analyze Chart → Set Indicators → Buy/Sell Panel → Set Order → Review → Confirm → Order Filled
```

### Monitor Portfolio
```
Dashboard → Portfolio → Holdings Table → Click Asset → Chart → Adjust Position
```

### Set Price Alert
```
Asset Page → [Set Alert] → Condition + Price → Save → Push Notification When Triggered
```

## URL / Route Structure

```
/                          → Dashboard
/markets                   → Markets Overview
/markets/stocks            → Stocks
/markets/crypto            → Crypto
/asset/:symbol             → Asset Detail
/asset/:symbol/financials  → Financials
/asset/:symbol/options     → Options Chain
/portfolio                 → Portfolio
/portfolio/performance     → Performance
/orders                    → Orders
/orders/:id                → Order Detail
/watchlist                 → Watchlists
/watchlist/:id             → Watchlist Detail
/news                      → News Feed
/alerts                    → Alerts
/account                   → Account
/account/transfers         → Transfers
/account/statements        → Statements
/settings                  → Settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global | Ticker, company name | Asset type | Relevance |
| Markets | All assets | Type, Sector, Market Cap, Price Range | Price Change, Volume, Market Cap |
| Portfolio | Holdings | Asset Type | Value, P&L, Name |
| Orders | Order ID, ticker | Status, Side, Date Range | Date, Amount |

## Responsive Behavior

| Breakpoint | Chart | Trade Panel | Data Tables |
|------------|-------|------------|-------------|
| Desktop | Full interactive chart + indicators | Right sidebar | Full tables with columns |
| Tablet | Simplified chart | Below chart | Responsive tables |
| Mobile | Touch-optimized chart | Full-screen modal | Card layout |

### Trading-Specific UX
- Real-time price updates (WebSocket)
- Color coding: green (up), red (down)
- Haptic feedback on order execution
- Dark mode (default for traders)
- Keyboard shortcuts for power users
- Multi-monitor support (desktop)

## Access Control

| Role | View Prices | Trade | Transfer | Research | Admin |
|------|------------|-------|----------|----------|-------|
| Unverified | ✅ | — | — | Limited | — |
| Verified (Basic) | ✅ | ✅ (cash only) | ✅ | ✅ | — |
| Margin Account | ✅ | ✅ (margin) | ✅ | ✅ | — |
| Options Enabled | ✅ | ✅ (all) | ✅ | ✅ | — |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
