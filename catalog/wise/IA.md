---
brand: Wise
tagline: "The cheapest way to send money abroad. Real exchange rate, low fees."
category: Money Transfer
website: https://wise.com
---

# Wise — Information Architecture

## Overview

Wise (formerly TransferWise) is built around one core premise: **transparent, low-cost international money transfers at the real mid-market exchange rate.** Unlike traditional banks that hide fees in inflated exchange rates, Wise shows the real rate plus a small, upfront fee. The product has expanded into multi-currency accounts (hold 50+ currencies), debit cards for spending abroad, and a business account. The IA is deliberately simple — the transfer flow is always front and center.

## Site Map

```
├── Home
│   ├── Balances (multi-currency, swipeable)
│   ├── Recent Activity
│   ├── Quick Actions (Send, Convert, Add Money)
│   ├── Rate Alerts Summary
│   └── Wise Card Summary
├── Send Money (Primary Flow)
│   ├── Amount Input
│   │   ├── You Send (amount + currency)
│   │   ├── Recipient Gets (amount + currency)
│   │   ├── Real Exchange Rate (mid-market, live)
│   │   ├── Fee Breakdown (transparent, itemized)
│   │   ├── Estimated Arrival Time
│   │   └── Comparison vs Banks (savings shown)
│   ├── Recipient
│   │   ├── Select Existing Recipient
│   │   ├── Add New Recipient
│   │   │   ├── Name
│   │   │   ├── Bank Details (varies by country: IBAN, SWIFT, local)
│   │   │   ├── Email (for email-based transfers)
│   │   │   └── Reason for Transfer
│   │   └── Recent Recipients
│   ├── Review
│   │   ├── Transfer Summary
│   │   ├── Fee + Rate Guarantee Window
│   │   └── Delivery Estimate
│   ├── Pay for Transfer
│   │   ├── Bank Transfer (cheapest)
│   │   ├── Debit Card
│   │   ├── Credit Card (higher fee, shown clearly)
│   │   ├── Wise Balance
│   │   ├── Apple Pay / Google Pay
│   │   └── SWIFT Transfer
│   └── Confirmation & Tracking
│       ├── Transfer Created
│       ├── Tracking Timeline (steps shown)
│       └── Estimated Delivery
├── Multi-Currency Account
│   ├── Currency Balances (50+ currencies)
│   ├── Get Account Details
│   │   ├── GBP (sort code + account number)
│   │   ├── EUR (IBAN, Belgian)
│   │   ├── USD (routing + account number, via Mercury)
│   │   ├── AUD (BSB + account number)
│   │   └── ... (local details per currency)
│   ├── Add Money
│   ├── Convert Between Currencies
│   ├── Auto-Convert (set target rate)
│   ├── Transaction History (per currency)
│   └── Direct Debits
├── Wise Card
│   ├── Physical Card (green signature card)
│   ├── Digital Card (instant, for Apple/Google Pay)
│   ├── Card Controls
│   │   ├── Freeze / Unfreeze
│   │   ├── Spending Limits
│   │   ├── Online / In-Store / ATM Toggles
│   │   └── PIN Management
│   ├── Spending Currency Priority (auto-select cheapest)
│   └── ATM Limits & Fees
├── Recipients
│   ├── Saved Recipients
│   ├── Add Recipient
│   ├── Recipient Detail (bank details, transfer history)
│   └── Request Money
├── Track Transfer
│   ├── Active Transfers
│   ├── Transfer Detail
│   │   ├── Timeline (money sent → converted → delivered)
│   │   ├── Reference Number
│   │   ├── Rate Locked
│   │   └── Delivery Status
│   └── Past Transfers
├── Rate Alerts
│   ├── Active Alerts
│   ├── Create Alert (currency pair + target rate)
│   └── Alert History
├── Wise Business
│   ├── Batch Payments (CSV upload)
│   ├── API Integration
│   ├── Multi-User Access
│   ├── Invoice Payments
│   └── Accounting Integrations (Xero, QuickBooks)
├── Account
│   ├── Personal Details
│   ├── Verification (ID + address proof)
│   ├── Statements
│   ├── Tax Documents
│   ├── Referrals (invite friends, earn £75)
│   └── Settings
│       ├── Security (2FA, login notifications)
│       ├── Notifications
│       ├── Connected Apps
│       └── Close Account
└── Help
    ├── Help Center (searchable FAQ)
    ├── Chat Support
    ├── Status Page
    └── Community
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4 tabs (mobile) | Home, Cards, Recipients, Account |
| **Send Button** | Prominent CTA on Home | Always-visible "Send money" — the primary action |
| **Currency Tabs** | Horizontal scroll on Home | Switch between currency balances |
| **Transfer Tracker** | Banner on Home (when active) | "Transfer in progress" with step indicator |
| **Top Bar (web)** | Fixed | Home, Send, Card, Recipients, Business, Help |

### Signature UX: Transfer Calculator
The transfer flow starts with a **live calculator widget** (visible on homepage and landing page) that shows:
- You Send: [amount] [currency]
- Recipient Gets: [amount] [currency]
- Mid-market rate: X.XXXX (verifiable on Google)
- Fee: £X.XX (no hidden markup)
- Arrival: by [date]
- You save: £XX vs your bank

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Transfer | amount_send, currency_send, amount_receive, currency_receive, rate, fee, status, created_at, estimated_delivery, reference | belongs to User, has one Recipient |
| Recipient | name, currency, bank_details{}, country, email | belongs to User, has many Transfers |
| Balance | currency, amount, account_details{} | belongs to User |
| Card | type (physical/digital), status, currency_priority[], limits, controls{} | belongs to User |
| RateAlert | currency_pair, target_rate, direction (above/below), triggered | belongs to User |
| Conversion | from_currency, to_currency, amount, rate, fee | belongs to User |
| AutoConversion | currency_pair, target_rate, amount, status (pending/triggered) | belongs to User |

### Transfer Status Flow
```
created → funded → processing → in_transit → delivered
           ↘ cancelled
           ↘ bounced_back (wrong details)
```

### Transfer Timeline Steps
```
1. Transfer created
2. Money received by Wise
3. Converting (rate locked)
4. Sending to recipient's bank
5. Money delivered ✓
```

## User Flows

### Send Money Abroad (Core Flow)
```
Home → [Send Money] → Enter Amount (see rate + fee + savings) → Select Recipient → Review → Pay (bank/card/balance) → Confirm → Track Timeline → Delivered
```

### Get Paid Like a Local
```
Account → GBP Balance → Get Account Details → Share Sort Code + Account Number → Employer/Client Pays In → GBP Balance Updated → Convert to Home Currency
```

### Auto-Convert at Target Rate
```
Convert → Set Target Rate (e.g., 1 GBP = 1.30 EUR) → Amount → Enable Auto-Convert → Wait → Rate Hits Target → Converted Automatically → Notification
```

### Spend Abroad with Card
```
Arrive in France → Pay with Wise Card → App Auto-Selects EUR Balance → If No EUR, Converts from Cheapest Balance → Transaction Notification with Rate Used
```

## URL / Route Structure

```
/                              → Home / Balances
/send                          → Send Money
/send/:transferId              → Transfer Detail
/send/:transferId/track        → Transfer Tracking
/balances                      → All Balances
/balances/:currency            → Currency Balance Detail
/balances/:currency/details    → Account Details (IBAN, etc.)
/convert                       → Currency Conversion
/card                          → Wise Card
/recipients                    → Saved Recipients
/recipients/new                → Add Recipient
/recipients/:id                → Recipient Detail
/rate-alerts                   → Rate Alerts
/activity                      → All Activity
/business                      → Business Account
/account                       → Account Settings
/account/verification          → Verification
/account/statements            → Statements
/help                          → Help Center
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Activity | Recipient, amount, reference | Currency, Date Range, Type (send/receive/convert), Status | Date, amount |
| Recipients | Name, bank details | Currency, Country | Frequency, name, recent |
| Help | FAQ articles, topics | Category | Relevance |

## Responsive Behavior

| Breakpoint | Transfer Flow | Balances | Navigation |
|------------|-------------|----------|------------|
| Mobile (primary) | Full-screen step-by-step | Horizontal card carousel | Bottom tab bar |
| Tablet | Single-page calculator | Grid layout | Bottom tabs |
| Desktop (web) | Calculator widget + side panel | Dashboard grid | Top nav |

### Design Principles
- **Radical transparency**: Fee, rate, and savings comparison shown upfront before any commitment
- **Rate verifiability**: "Check our rate on Google" link next to exchange rate
- Green brand color: trust, money, go
- Transfer tracker as a timeline (package-tracking mental model)
- Push notifications at every transfer step
- Multi-currency card auto-selects cheapest balance
- Biometric for all transactions

## Access Control

| Role | Send | Hold Balances | Card | Business Features | API |
|------|------|--------------|------|-------------------|-----|
| Unverified | Limited (£500) | — | — | — | — |
| Verified Personal | ✅ (limits by route) | ✅ (50+ currencies) | ✅ | — | — |
| Business Account | ✅ + batch payments | ✅ | ✅ (team cards) | ✅ | ✅ |
| API User | Via API | Via API | — | ✅ | ✅ |

### Compliance
- FCA-regulated (UK), FinCEN (US), licensed in 50+ countries
- ID verification required (passport/driving license + selfie)
- Source of funds checks for large transfers
- Address verification for account details
- Transaction monitoring for AML
