---
brand: Coinbase
tagline: "The most trusted crypto exchange. Buy, sell, store, and earn crypto."
category: Crypto Exchange
website: https://coinbase.com
---

# Coinbase — Information Architecture

## Overview

Coinbase is the largest regulated crypto exchange in the US, designed for both beginners and advanced traders. The mental model splits into two tiers: **Coinbase (simple)** for casual buyers who want to buy Bitcoin in three taps, and **Coinbase Advanced** (formerly Pro) for serious traders who need order books, charts, and advanced order types. The platform also acts as a crypto wallet, staking provider, and educational hub.

## Site Map

```
├── Home / Portfolio
│   ├── Total Balance (chart)
│   ├── Asset Breakdown (pie chart)
│   ├── Watchlist
│   ├── Top Movers
│   ├── Trending on Coinbase
│   ├── Earn Rewards (staking summary)
│   ├── Learning Rewards ("Earn while you learn")
│   └── News & Market Updates
├── Explore / Prices
│   ├── All Assets (500+ crypto)
│   ├── Gainers & Losers
│   ├── New Listings
│   ├── Categories (DeFi, NFTs, Layer 2, Meme Coins)
│   ├── Trending
│   └── Crypto News
├── Asset Detail
│   ├── Price Chart (line/candlestick)
│   │   ├── Timeframes (1H, 1D, 1W, 1M, 1Y, All)
│   │   └── Technical Indicators (Advanced)
│   ├── Buy / Sell / Convert Buttons
│   ├── Your Balance (if held)
│   ├── About (project description, whitepaper link)
│   ├── Stats (market cap, volume, supply, all-time high)
│   ├── Price Alerts
│   ├── Related Assets
│   └── On-Chain Data (Advanced)
├── Trade (Simple)
│   ├── Buy → Select Asset → Enter Amount ($) → Payment Method → Preview → Confirm
│   ├── Sell → Select Asset → Enter Amount → Destination (USD/USDC) → Confirm
│   └── Convert → From Asset → To Asset → Amount → Preview → Confirm
├── Advanced Trade
│   ├── Trading Pair Selector
│   ├── Order Book (bids/asks)
│   ├── Depth Chart
│   ├── Price Chart (TradingView, full indicators)
│   ├── Trade History (recent fills)
│   ├── Order Panel
│   │   ├── Market / Limit / Stop-Limit
│   │   ├── Size / Amount
│   │   ├── Post-Only, IOC, FOK
│   │   └── Place Order
│   ├── Open Orders
│   └── Fills
├── Wallet
│   ├── All Assets (balances)
│   ├── Send Crypto (to address)
│   ├── Receive Crypto (show address / QR)
│   ├── Coinbase Wallet (self-custody, separate app)
│   └── Transaction History
├── Earn / Staking
│   ├── Staking Assets (ETH, SOL, ATOM, etc.)
│   ├── Staking Dashboard (rewards earned)
│   ├── Earn Campaigns ("Learn & Earn" — watch video, earn crypto)
│   └── DeFi Yield (via Wallet)
├── NFTs (reduced scope)
│   ├── Browse
│   ├── Collections
│   └── My NFTs
├── Pay
│   ├── Send/Receive via Username
│   ├── Request Payment
│   └── Payment History
├── Recurring Buys
│   ├── Active Recurring Orders
│   ├── Create (asset, amount, frequency)
│   └── Pause / Edit
├── Notifications
│   ├── Price Alerts
│   ├── Transaction Confirmations
│   ├── Staking Rewards
│   └── Security Alerts
├── Account & Settings
│   ├── Profile
│   ├── Payment Methods (bank, card, PayPal)
│   ├── Limits & Verification
│   ├── Security (2FA, passkeys, vault)
│   ├── Tax Reports (gain/loss reports)
│   ├── Coinbase One (subscription)
│   ├── Referrals
│   └── Preferences (currency display, notifications)
└── Learn
    ├── Crypto Basics
    ├── What is Bitcoin/Ethereum/etc.
    ├── DeFi Explained
    ├── Security Best Practices
    └── Tax Guide
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4-5 tabs (mobile) | Home, Explore, Trade (center, prominent), Activity, Account |
| **Trade Button** | Center tab, visually distinct | Opens buy/sell/convert modal — the primary CTA |
| **Advanced Toggle** | Switch in trade view | Toggle between Simple and Advanced trade interfaces |
| **Asset Page** | Full-scroll page | Chart → Trade buttons → Stats → About → Related |
| **Top Bar** | Desktop | Logo, Explore, Trade, Earn, Wallet, Notifications, Profile |
| **Search** | Top of Explore or ⌘K (web) | Search by crypto name or symbol |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| CryptoAsset | symbol, name, price, change_24h, market_cap, volume, circulating_supply, max_supply, all_time_high | has PriceHistory, OnChainData |
| Balance | asset, amount, value_usd, staked_amount, pending_rewards | belongs to User |
| Order | asset_pair, side (buy/sell), type (market/limit/stop), amount, price, fee, status | belongs to User |
| StakingPosition | asset, amount_staked, reward_rate_apy, rewards_earned, unbonding_period | belongs to User |
| RecurringBuy | asset, amount_usd, frequency, next_date, payment_method | belongs to User |
| WalletTransaction | type (send/receive), asset, amount, from_address, to_address, tx_hash, network_fee, status, confirmations | belongs to User |
| LearnModule | title, description, video_url, quiz, reward_asset, reward_amount | platform content |
| PriceAlert | asset, condition (above/below), target_price | belongs to User |

### Order Types (Advanced)
`market | limit | stop-limit | post-only | IOC | FOK`

## User Flows

### Buy Crypto (Simple — 3 taps)
```
Home → [Trade] → Buy → Search "BTC" → Enter $100 → Select Payment (bank) → Preview Fee → Confirm → BTC Added to Portfolio
```

### Convert Between Crypto
```
Trade → Convert → From ETH → To USDC → Enter Amount → Preview Rate → Confirm → Instant
```

### Stake & Earn
```
Earn → ETH Staking → Enter Amount → Review APY → Stake → Rewards Accrue Daily → Claim or Auto-Compound
```

### Learn & Earn
```
Learn → "What is Solana?" → Watch 3-min Video → Take Quiz → Earn $3 in SOL → Asset Added to Portfolio
```

### Send Crypto to External Wallet
```
Wallet → Send → Select Asset → Enter Address (or scan QR) → Amount → Network → Preview Fee → 2FA → Confirm → Track Confirmations
```

## URL / Route Structure

```
/                              → Home / Portfolio
/price/:symbol                 → Asset Detail
/trade                         → Simple Trade
/advanced-trade/:pair          → Advanced Trade (e.g., BTC-USD)
/earn                          → Staking & Earn
/earn/:asset                   → Asset Staking Detail
/wallet                        → Wallet Balances
/wallet/send                   → Send Crypto
/wallet/receive                → Receive Crypto
/wallet/transactions           → Transaction History
/nft                           → NFT Marketplace
/pay                           → Coinbase Pay
/recurring                     → Recurring Buys
/learn                         → Learn Hub
/learn/:slug                   → Learn Module
/notifications                 → Notifications
/settings                      → Account & Settings
/settings/payment-methods      → Payment Methods
/settings/security             → Security
/settings/taxes                → Tax Reports
/prices                        → All Crypto Prices
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Explore | Crypto name, symbol | Category (DeFi, L2, Meme), tradeable on Coinbase | Market cap, price change, volume, name |
| Portfolio | Holdings | Asset type | Value, change, name |
| Advanced Trade | Trading pairs | Base/quote currency, volume | Volume, name |
| Transactions | TX hash, asset, address | Type (send/receive/buy/sell), date range | Date, amount |

## Responsive Behavior

| Breakpoint | Portfolio | Trade | Advanced |
|------------|----------|-------|----------|
| Mobile (primary) | Single chart + asset cards | Bottom-sheet trade modal | Simplified charts, stacked order book |
| Tablet | Wider charts, 2-column | Side panel | Near-desktop layout |
| Desktop (web) | Dashboard grid | Inline trade panel | Full TradingView chart + order book + trade panel |

### Platform-Specific UX
- Two-tier interface: Simple (default) vs Advanced (opt-in)
- Learn & Earn gamification: watch → quiz → earn
- Vault for cold storage with time-delayed withdrawals
- Real-time price updates via WebSocket
- Push notifications for price movements and staking rewards
- QR code scanning for wallet addresses
- Biometric authentication for transactions

## Access Control

| Role | View Prices | Buy/Sell | Advanced Trade | Send/Receive | Staking | Margin |
|------|------------|----------|---------------|-------------|---------|--------|
| Unverified | ✅ | — | — | — | — | — |
| Basic (Level 1) | ✅ | Limited ($) | — | Limited | — | — |
| Verified (Level 2) | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Coinbase One | ✅ | ✅ (0 fee) | ✅ | ✅ | ✅ (boosted) | — |
| Institutional | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### Security & Compliance
- KYC/AML verification required for trading
- 2FA required for all accounts
- Vault: multi-signature, time-delayed withdrawals
- 98% of crypto stored in cold storage (offline)
- FDIC-insured USD balances (up to $250K)
- SOC 2 Type II compliant
- State money transmitter licenses
