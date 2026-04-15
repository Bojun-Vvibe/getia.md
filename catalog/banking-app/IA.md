# Banking App — Information Architecture

## Overview

A personal/business banking application (Chase, Revolut, Monzo style). The mental model is **accounts and money flow** — users check balances, track transactions, move money, and manage cards. Trust, clarity, and security are paramount.

## Site Map

```
├── Home / Overview
│   ├── Account Summary (total balance)
│   ├── Account Cards (checking, savings, credit)
│   ├── Recent Transactions
│   ├── Quick Actions (send, pay, transfer)
│   ├── Spending Insights (chart)
│   └── Notifications / Alerts
├── Accounts
│   ├── Account List
│   └── Account Detail
│       ├── Balance & Available
│       ├── Transaction History (filterable)
│       ├── Statements
│       ├── Account Settings
│       └── Close Account
├── Transactions
│   ├── All Transactions
│   ├── Transaction Detail
│   │   ├── Amount, Date, Status
│   │   ├── Merchant Info
│   │   ├── Category (auto-tagged)
│   │   ├── Receipt / Attachment
│   │   ├── Notes
│   │   └── Dispute
│   ├── Pending
│   └── Search / Filter
├── Transfers
│   ├── Between Own Accounts
│   ├── To Other People (P2P)
│   ├── To External Account (wire)
│   ├── International Transfer
│   ├── Recurring Transfers
│   └── Transfer History
├── Payments
│   ├── Pay Bills
│   ├── Scheduled Payments
│   ├── Payees / Recipients
│   └── Payment History
├── Cards
│   ├── Card List (physical + virtual)
│   ├── Card Detail
│   │   ├── Card Number (show/hide)
│   │   ├── Spending Limits
│   │   ├── Freeze / Unfreeze
│   │   ├── PIN Management
│   │   ├── Contactless Toggle
│   │   ├── Transaction Controls
│   │   └── Report Lost/Stolen
│   └── Order New Card
├── Budgets & Insights
│   ├── Spending by Category (charts)
│   ├── Monthly Budget Tracking
│   ├── Trends (month over month)
│   ├── Merchant Analysis
│   └── Export Data
├── Savings / Goals
│   ├── Savings Pots / Goals
│   ├── Create Goal
│   ├── Auto-save Rules
│   └── Interest Rates
├── Investments (optional)
│   ├── Portfolio Overview
│   ├── Buy / Sell
│   └── Performance
├── Notifications
│   ├── Transaction Alerts
│   ├── Security Alerts
│   ├── Account Updates
│   └── Promotional
├── Settings
│   ├── Profile & Personal Info
│   ├── Security (password, 2FA, biometrics)
│   ├── Notification Preferences
│   ├── Privacy
│   ├── Linked Accounts
│   ├── Appearance
│   └── Help & Support
└── Help
    ├── FAQ
    ├── Chat Support
    ├── Call Bank
    └── Find Branch / ATM
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Mobile** | Bottom tab bar (5 tabs) | Home, Payments, Cards, Insights, More |
| **Desktop** | Left sidebar | All sections visible |
| **Quick Actions** | Home screen shortcuts or FAB | Send Money, Pay Bill, Transfer |
| **Account Switcher** | Horizontal scroll cards or dropdown | Switch between checking, savings, credit |
| **Security Gates** | Biometric / PIN prompts | Before showing sensitive data or confirming transactions |

### Mobile Bottom Tabs
```
[ 🏠 Home ] [ 💸 Pay ] [ 💳 Cards ] [ 📊 Insights ] [ ••• More ]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Account | type, name, number (masked), balance, available, currency, status | has many Transactions, Cards, Statements |
| Transaction | amount, type (debit/credit), merchant, category, date, status, reference | belongs to Account |
| Card | type (debit/credit/virtual), number (masked), expiry, status (active/frozen), limits | belongs to Account |
| Transfer | from_account, to_account/payee, amount, date, status, reference | initiated by User |
| Payee | name, account_number, bank, saved | belongs to User |
| Budget | category, limit, period (monthly), spent | belongs to User |
| SavingsGoal | name, target_amount, current_amount, deadline, auto_save_rule | belongs to User |
| Statement | period, pdf_url | belongs to Account |
| Alert | type, message, read, created_at | belongs to User |

### Transaction Status
`pending → posted → settled`
`↘ declined / reversed / disputed`

## User Flows

### Check Balance & Transactions
```
Open App (biometric) → Home → Account Card → Transaction List → Transaction Detail
```

### Send Money
```
Home → [Send Money] → Select Payee (or add new) → Enter Amount → Review → Authenticate (biometric/PIN) → Confirm → Receipt
```

### Freeze Card
```
Cards → Select Card → Freeze Toggle → Confirm → Card Frozen (instant)
```

### Set Budget
```
Insights → Budgets → [+ Add Budget] → Select Category → Set Limit → Save → Track Monthly
```

## URL / Route Structure

```
/                              → Home / Overview
/accounts                      → Account List
/accounts/:id                  → Account Detail
/accounts/:id/transactions     → Transaction History
/accounts/:id/statements       → Statements
/transactions/:id              → Transaction Detail
/transfer                      → New Transfer
/transfer/history              → Transfer History
/payments                      → Payments
/payments/bills                → Pay Bills
/payments/payees               → Manage Payees
/cards                         → Card List
/cards/:id                     → Card Detail
/insights                      → Spending Insights
/insights/budgets              → Budgets
/savings                       → Savings Goals
/savings/:id                   → Goal Detail
/notifications                 → Notifications
/settings                      → Settings
/help                          → Help Center
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Transactions | Merchant, amount, reference | Category, Date Range, Amount Range, Type (debit/credit), Account | Date (newest), Amount, Merchant |
| Payees | Name, account number | Bank, Recently Used | Name, Frequency |
| Help | FAQ articles | Category | Relevance |

## Responsive Behavior

| Breakpoint | Nav | Home | Transactions |
|------------|-----|------|-------------|
| Desktop | Left sidebar | Dashboard grid | Full table |
| Tablet | Bottom tabs or sidebar | Simplified grid | Table |
| Mobile | Bottom tab bar | Stacked cards | Card list |

### Mobile-First Design
- Biometric authentication (Face ID / fingerprint)
- Pull-to-refresh balances
- Swipe transaction for quick actions (categorize, hide)
- Haptic feedback on transfers
- Offline mode (cached balances, queue transactions)

## Access Control

| Role | View Balance | Transactions | Transfer | Cards | Settings |
|------|-------------|-------------|----------|-------|----------|
| Primary Holder | ✅ | ✅ | ✅ | Full control | ✅ |
| Joint Holder | ✅ | ✅ | ✅ | Own card | Limited |
| Authorized User | ✅ | View | Limited | Own card | — |
| Read-Only (accountant) | ✅ | View + Export | — | — | — |

### Security Requirements
- All sensitive screens: biometric or PIN gate
- Transfer over threshold: step-up authentication (SMS/email OTP)
- New payee: cooling-off period or additional verification
- Card number reveal: re-authenticate
- Session timeout: 5 min inactive → lock
