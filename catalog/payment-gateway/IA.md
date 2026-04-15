# Payment Gateway — Information Architecture

## Overview

A payment processing dashboard (Stripe, Square, PayPal Business style). The mental model is **money in, money out** — businesses integrate payment processing, monitor transactions, manage payouts, handle disputes, and configure payment methods. Data density, reliability indicators, and developer-friendliness are paramount.

## Site Map

### Merchant Dashboard

```
├── Home / Overview
│   ├── Today's Volume (gross, net, fees)
│   ├── Balance (available, pending)
│   ├── Revenue Chart (daily/weekly/monthly)
│   ├── Recent Payments
│   ├── Recent Payouts
│   ├── Dispute Alerts
│   └── Quick Actions (create payment link, send invoice)
├── Payments
│   ├── All Payments
│   │   ├── Payment Detail
│   │   │   ├── Amount, Status, Timeline
│   │   │   ├── Customer Info
│   │   │   ├── Payment Method
│   │   │   ├── Metadata
│   │   │   ├── Events Log
│   │   │   ├── Refund (full/partial)
│   │   │   └── Related Objects (invoice, subscription)
│   │   └── Export
│   ├── Payment Links
│   │   ├── Create Payment Link
│   │   └── Manage Links
│   └── Invoices
│       ├── All Invoices
│       ├── Create Invoice
│       ├── Invoice Detail (line items, status)
│       └── Invoice Templates
├── Customers
│   ├── Customer List
│   ├── Customer Detail
│   │   ├── Overview (LTV, payments count)
│   │   ├── Payments
│   │   ├── Subscriptions
│   │   ├── Payment Methods on File
│   │   ├── Invoices
│   │   ├── Metadata
│   │   └── Logs
│   └── Create Customer
├── Subscriptions
│   ├── All Subscriptions
│   ├── Subscription Detail
│   │   ├── Status, Plan, Schedule
│   │   ├── Invoices
│   │   ├── Upcoming Invoice Preview
│   │   ├── Update / Cancel
│   │   └── Events
│   └── Products & Prices
│       ├── Product List
│       ├── Create Product
│       ├── Price Tiers
│       └── Pricing Table
├── Balances
│   ├── Available Balance
│   ├── Pending Balance
│   ├── Balance Transactions
│   ├── Payouts
│   │   ├── Payout Schedule
│   │   ├── Payout History
│   │   └── Payout Detail (transactions included)
│   └── Top-Ups
├── Connect (Multi-Party Payments)
│   ├── Connected Accounts
│   ├── Account Detail
│   ├── Transfers
│   └── Application Fees
├── Disputes & Fraud
│   ├── All Disputes
│   ├── Dispute Detail
│   │   ├── Reason, Amount, Deadline
│   │   ├── Evidence Submission
│   │   ├── Counter-Evidence Upload
│   │   └── Status & Outcome
│   ├── Fraud Prevention (Radar)
│   │   ├── Rules
│   │   ├── Block/Allow Lists
│   │   ├── Risk Score Distribution
│   │   └── Review Queue
│   └── Early Fraud Warnings
├── Reports
│   ├── Financial Reports
│   │   ├── Balance Summary
│   │   ├── Payout Reconciliation
│   │   ├── Itemized Transactions
│   │   └── Ending Balance
│   ├── Revenue Reports
│   │   ├── Gross Volume
│   │   ├── Net Volume
│   │   ├── Fees
│   │   └── Refunds
│   ├── Custom Reports
│   ├── Sigma (SQL Queries)
│   └── Downloads / Scheduled Reports
├── Developers
│   ├── API Keys
│   │   ├── Publishable Key
│   │   ├── Secret Key
│   │   └── Restricted Keys
│   ├── Webhooks
│   │   ├── Endpoints
│   │   ├── Create Endpoint
│   │   ├── Event Types
│   │   └── Webhook Logs (attempts, failures)
│   ├── Events / Logs
│   │   ├── API Request Log
│   │   ├── Event Log
│   │   └── Event Detail
│   ├── Documentation (link)
│   ├── API Versions
│   └── Test Mode (toggle)
├── Settings
│   ├── Business Profile
│   ├── Team Members
│   │   ├── Invite
│   │   ├── Roles & Permissions
│   │   └── Activity Log
│   ├── Bank Accounts & Payout Settings
│   ├── Branding (checkout appearance)
│   ├── Payment Methods
│   │   ├── Cards
│   │   ├── Bank Transfers
│   │   ├── Digital Wallets (Apple Pay, Google Pay)
│   │   └── Local Payment Methods
│   ├── Emails & Receipts
│   ├── Tax Settings
│   ├── Compliance (KYC documents)
│   └── Account
└── Test Mode ↔ Live Mode (persistent toggle)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Payments, Customers, Subscriptions, Balances, Connect, Disputes, Reports, Developers, Settings |
| **Top Bar** | Fixed | Search (global), test/live mode toggle, notifications bell, account switcher |
| **Mode Toggle** | Persistent banner (test mode) | Orange banner: "Viewing test data" with toggle to live |
| **Object Header** | Breadcrumb + actions | Back nav, ID display, action buttons (refund, cancel) |
| **Contextual Tabs** | Within detail pages | Payment: Overview / Events / Metadata |
| **Quick Search** | ⌘K or top bar | Search by payment ID, customer email, amount |

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Payment (Charge) | id, amount, currency, status, payment_method, customer, description, metadata, created | belongs to Customer, has Refunds, Disputes |
| Customer | id, email, name, phone, default_payment_method, metadata, created | has Payments, Subscriptions, PaymentMethods |
| PaymentMethod | type (card/bank/wallet), card_brand, last4, exp, fingerprint | belongs to Customer |
| Subscription | id, customer, product, price, status, current_period, cancel_at | belongs to Customer and Product |
| Product | name, description, active, prices[] | has many Prices, Subscriptions |
| Price | amount, currency, interval (monthly/yearly), type (recurring/one-time) | belongs to Product |
| Invoice | number, customer, amount_due, status, line_items[], pdf_url | belongs to Customer |
| Payout | amount, arrival_date, status, method, balance_transactions[] | belongs to Account |
| Dispute | payment, amount, reason, status, evidence_due, evidence | belongs to Payment |
| Refund | payment, amount, reason, status | belongs to Payment |
| Event | type, data, created, request_id | system-generated |
| WebhookEndpoint | url, events[], status, secret | belongs to Account |

### Payment Status Flow
`requires_payment_method → requires_confirmation → requires_action → processing → succeeded`
`↘ cancelled / failed`

### Dispute Status Flow
`warning_needs_response → needs_response → under_review → won / lost`

### Subscription Status
`incomplete → active → past_due → unpaid → cancelled`
`active → trialing → active`

## User Flows

### Accept a Payment
```
Customer on Merchant Site → Checkout → Enter Card → Stripe.js tokenizes → Server creates PaymentIntent → 3D Secure (if needed) → Payment Succeeded → Webhook → Dashboard shows payment
```

### Handle a Dispute
```
Notification (dispute opened) → Disputes → Dispute Detail → Review Reason → Gather Evidence → Upload Counter-Evidence → Submit → Wait for Bank Decision → Won/Lost
```

### Issue a Refund
```
Payments → Find Payment → Payment Detail → Refund → Select Full/Partial → Enter Amount → Reason → Confirm → Refund Processed
```

### Set Up Subscription
```
Products → Create Product → Add Price (recurring) → Copy Price ID → Integrate via API → Customer Subscribes → Recurring Invoices Auto-Generated
```

### Configure Webhooks
```
Developers → Webhooks → Add Endpoint → Enter URL → Select Events → Create → Test with CLI → Verify Signature → Go Live
```

## URL / Route Structure

```
/dashboard                     → Home Overview
/payments                      → Payment List
/payments/:id                  → Payment Detail
/payment-links                 → Payment Links
/invoices                      → Invoice List
/invoices/:id                  → Invoice Detail
/invoices/create               → Create Invoice
/customers                     → Customer List
/customers/:id                 → Customer Detail
/subscriptions                 → Subscription List
/subscriptions/:id             → Subscription Detail
/products                      → Product List
/products/:id                  → Product Detail
/balance                       → Balance Overview
/balance/payouts               → Payout List
/balance/payouts/:id           → Payout Detail
/connect/accounts              → Connected Accounts
/connect/accounts/:id          → Account Detail
/disputes                      → Dispute List
/disputes/:id                  → Dispute Detail
/radar                         → Fraud Prevention
/radar/rules                   → Fraud Rules
/reports                       → Reports
/reports/:type                 → Specific Report
/developers/api-keys           → API Keys
/developers/webhooks           → Webhook Endpoints
/developers/webhooks/:id       → Endpoint Detail
/developers/events             → Event Log
/developers/events/:id         → Event Detail
/developers/logs               → API Request Log
/settings                      → Settings
/settings/team                 → Team Members
/settings/payouts              → Payout Settings
/settings/branding             → Branding
/settings/payments             → Payment Methods Config
/test/...                      → All routes mirrored in test mode
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Payments | Payment ID, amount, customer email, description | Status, Amount Range, Date Range, Currency, Payment Method, Disputed | Date (newest), Amount |
| Customers | Name, email, ID | Created Date, Has Payments, Has Subscriptions | Created, Name, Total Spend |
| Subscriptions | Customer email, subscription ID | Status, Product, Price, Created | Created, Status |
| Disputes | Payment ID, customer, dispute ID | Status, Reason, Amount Range, Due Date | Created, Due Date, Amount |
| Events | Event ID, type, resource ID | Event Type, Date Range | Date |
| Payouts | Payout ID | Status, Date Range, Amount Range | Arrival Date, Amount |

## Responsive Behavior

| Breakpoint | Sidebar | Data Tables | Detail Pages | Charts |
|------------|---------|------------|-------------|--------|
| Desktop (≥1280px) | Full sidebar with labels | Full columns, inline actions | Side-by-side layout | Full interactive charts |
| Tablet (1024–1279px) | Icon-only sidebar | Reduced columns | Stacked layout | Simplified charts |
| Mobile (<1024px) | Hidden (hamburger) | Card layout | Full-width stacked | Sparkline charts |

### Dashboard-Specific UX
- Test/Live mode toggle persists across all pages
- Object IDs displayed in monospace, click to copy
- Timeline/event log on every detail page
- JSON metadata viewer with expand/collapse
- API request log with cURL replay
- Real-time updates for payment status changes
- Keyboard shortcuts for power users (⌘K search, N for new)

## Access Control

| Role | View Data | Payments | Refunds | Disputes | Settings | Developers | Team |
|------|-----------|----------|---------|----------|----------|------------|------|
| Owner | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Invite |
| Developer | ✅ | Read | — | Read | Limited | ✅ | — |
| Analyst | ✅ (reports) | Read | — | Read | — | — | — |
| Support | Limited | Read | ✅ (limits) | ✅ | — | — | — |
| View-Only | ✅ | Read | — | Read | — | — | — |

### Security Requirements
- Two-factor authentication required for all roles
- API secret keys revealed only once, then masked
- Restricted API keys with granular permissions
- Webhook signing secrets for payload verification
- IP allowlisting for API access
- PCI DSS compliance indicators
- Audit log for all sensitive operations
