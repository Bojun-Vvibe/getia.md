---
brand: Stripe Dashboard
tagline: "Financial infrastructure for the internet. API-first payments with a powerful merchant dashboard."
category: Payment / DevTools
website: https://dashboard.stripe.com
---

# Stripe Dashboard — Information Architecture

## Overview

Stripe Dashboard is the merchant management interface for Stripe's payment infrastructure. The mental model combines **money operations** (payments, subscriptions, payouts) with **developer tooling** (API keys, webhooks, event logs). Stripe's defining IA feature is the **test/live mode toggle** — every page has parallel test and live views, with a persistent orange banner in test mode. The dashboard is deeply API-aligned: every UI object maps 1:1 to an API resource, and object IDs (`pi_`, `cus_`, `sub_`) are displayed prominently with click-to-copy.

## Site Map

```
├── Home
│   ├── Today's Volume (gross, net, fees)
│   ├── Balance (available, pending, connect)
│   ├── Revenue Chart (customizable period)
│   ├── Recent Payments
│   ├── Action Items (disputes, reviews, incomplete onboarding)
│   └── Getting Started (new accounts — integration checklist)
├── Payments
│   ├── All Payments
│   │   ├── Payment Detail
│   │   │   ├── Amount, Currency, Status, Timeline
│   │   │   ├── Customer Info (linked)
│   │   │   ├── Payment Method (card brand, last4, 3D Secure)
│   │   │   ├── Metadata (key-value, editable)
│   │   │   ├── Events & Logs (timeline of API events)
│   │   │   ├── Refund (full / partial)
│   │   │   ├── Related Objects (invoice, subscription, checkout session)
│   │   │   └── JSON View (raw API object)
│   │   └── Export
│   ├── Payment Links
│   │   ├── Create Payment Link
│   │   ├── Manage Links (active, share URL)
│   │   └── Analytics per Link
│   ├── Invoices
│   │   ├── All Invoices
│   │   ├── Create Invoice
│   │   ├── Invoice Detail (line items, PDF, status)
│   │   └── Invoice Templates
│   ├── Quotes
│   ├── Checkout Sessions
│   └── Terminal (in-person payments)
│       ├── Readers (hardware devices)
│       ├── Locations
│       └── Orders
├── Balances
│   ├── Overview (available, pending, reserved)
│   ├── Balance Transactions (all movements)
│   ├── Payouts
│   │   ├── Payout Schedule (daily/weekly/monthly)
│   │   ├── Payout History
│   │   └── Payout Detail (included transactions)
│   └── Top-Ups
├── Customers
│   ├── Customer List (searchable, filterable)
│   ├── Customer Detail
│   │   ├── Overview (LTV, payment count, subscription)
│   │   ├── Payments (history)
│   │   ├── Subscriptions (active, canceled)
│   │   ├── Payment Methods (on file)
│   │   ├── Invoices
│   │   ├── Credit Balance
│   │   ├── Metadata
│   │   ├── Tax IDs
│   │   └── Logs (API interactions for this customer)
│   └── Customer Portal (hosted page for self-service)
├── Billing (Subscriptions)
│   ├── Subscriptions
│   │   ├── Subscription List
│   │   ├── Subscription Detail
│   │   │   ├── Status, Plan, Price, Schedule
│   │   │   ├── Invoices (upcoming preview)
│   │   │   ├── Usage Records (metered billing)
│   │   │   ├── Pause / Cancel / Update
│   │   │   └── Events
│   │   └── Create Subscription
│   ├── Products
│   │   ├── Product List
│   │   ├── Product Detail
│   │   ├── Create Product
│   │   └── Price Tiers (recurring, one-time, metered, tiered)
│   ├── Pricing Tables (embeddable)
│   ├── Revenue Recovery
│   │   ├── Smart Retries
│   │   ├── Dunning Emails
│   │   └── Revenue Recovery Stats
│   ├── Test Clocks (simulate subscription lifecycle)
│   └── Coupons & Promotions
├── Connect (Platform/Marketplace Payments)
│   ├── Accounts (connected accounts list)
│   ├── Account Detail
│   │   ├── Onboarding Status
│   │   ├── Capabilities
│   │   ├── Payouts
│   │   └── Requirements
│   ├── Transfers
│   ├── Application Fees
│   ├── Account Types (Standard / Express / Custom)
│   └── Onboarding Flows
├── Revenue Recognition
│   ├── Revenue Waterfall
│   ├── Deferred Revenue
│   └── Journal Entries
├── Radar (Fraud Prevention)
│   ├── Overview (fraud rate, blocked)
│   ├── Rules (default + custom)
│   ├── Block/Allow Lists
│   ├── Reviews (manual fraud review queue)
│   ├── Risk Insights
│   └── Radar for Fraud Teams (ML-powered)
├── Disputes
│   ├── All Disputes
│   ├── Dispute Detail
│   │   ├── Reason, Amount, Deadline
│   │   ├── Evidence Submission (form + file upload)
│   │   ├── Status Timeline
│   │   └── Outcome (won/lost)
│   ├── Early Fraud Warnings
│   └── Dispute Stats
├── Sigma (SQL Reporting)
│   ├── Query Editor
│   ├── Schema Browser
│   ├── Saved Queries
│   └── Scheduled Reports
├── Reports
│   ├── Financial Reports
│   │   ├── Balance Summary
│   │   ├── Payout Reconciliation
│   │   ├── Itemized Balance Changes
│   │   └── Ending Balance
│   ├── Revenue Reports
│   │   ├── Gross Volume
│   │   ├── Net Volume
│   │   ├── Fees
│   │   └── Refunds
│   ├── Tax Reports
│   ├── Custom Reports
│   └── Downloads / Scheduled
├── Developers
│   ├── API Keys
│   │   ├── Publishable Key (pk_test_ / pk_live_)
│   │   ├── Secret Key (sk_test_ / sk_live_)
│   │   └── Restricted Keys (with scoped permissions)
│   ├── Webhooks
│   │   ├── Endpoints (list)
│   │   ├── Create Endpoint (URL + events)
│   │   ├── Endpoint Detail (deliveries, failures)
│   │   └── Webhook Signing Secret
│   ├── Events
│   │   ├── Event Log (all events)
│   │   └── Event Detail (type, data, linked object)
│   ├── API Logs
│   │   ├── Request Log (method, endpoint, status, latency)
│   │   ├── Request Detail (request/response bodies)
│   │   └── cURL Replay
│   ├── API Version
│   ├── Apps (Stripe Apps — installable extensions)
│   ├── Workbench (new — integrated dev environment)
│   └── Overview (integration health)
├── Settings
│   ├── Business Settings
│   │   ├── Business Details (legal name, address, tax ID)
│   │   ├── Branding (logo, colors, checkout appearance)
│   │   ├── Public Details (support contact, statement descriptor)
│   │   └── Custom Domains (for checkout, portal)
│   ├── Team
│   │   ├── Team Members
│   │   ├── Invite (email + role)
│   │   ├── Roles & Permissions
│   │   └── Audit Trail
│   ├── Bank Accounts & Scheduling
│   ├── Payment Methods
│   │   ├── Cards
│   │   ├── Bank Transfers
│   │   ├── Digital Wallets (Apple Pay, Google Pay)
│   │   ├── Local Methods (Alipay, iDEAL, SEPA, etc.)
│   │   └── Crypto (USDC)
│   ├── Emails (receipt templates, invoice templates)
│   ├── Tax Settings (Stripe Tax)
│   ├── Compliance (PCI, KYC documents)
│   ├── Data Pipeline (data export to warehouse)
│   └── Account (2FA, sessions)
└── Test Mode ↔ Live Mode Toggle (persistent, global)
    ├── Orange Banner: "Viewing test data — everything here is simulated"
    ├── Test API Keys (pk_test_, sk_test_)
    ├── Test Card Numbers (4242...)
    └── Test Clocks (time simulation for subscriptions)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible (icons or expanded) | Home, Payments, Balances, Customers, Billing, Connect, Radar, Reporting, Developers, Settings — grouped by function |
| **Top Bar** | Fixed | Global search (⌘K), test/live mode toggle, notification bell, help (?), account switcher |
| **Test/Live Toggle** | Persistent in top bar | Orange pill "Test mode" with switch; entire dashboard mirrors test/live data |
| **Object Header** | Breadcrumb + ID + actions | Object type, ID (click to copy), status badge, action buttons (refund, cancel) |
| **Detail Tabs** | Within object detail pages | Payment: Overview / Events / Logs / Metadata |
| **Quick Search** | ⌘K (Spotlight-style) | Search by payment ID, customer email, amount, invoice number |
| **Context Panel** | Right sidebar (optional) | JSON inspector, API docs link, recent events |

### Sidebar Structure
```
[Account Switcher ▾]
[🔴 Test mode / 🟢 Live mode]
─────────────
🏠 Home
💳 Payments
💰 Balances
👤 Customers
📦 Billing
🔗 Connect
🛡 Radar
📊 Reports
─────────────
</> Developers
⚙ Settings
```

## Content Model

### Core Entities (API-aligned)

| Entity | API Object ID Prefix | Key Attributes | Relationships |
|--------|---------------------|---------------|---------------|
| PaymentIntent | `pi_` | amount, currency, status, payment_method, customer, description, metadata{} | belongs to Customer, has Charges, Refunds |
| Charge | `ch_` | amount, status, payment_method_details, outcome, receipt_url | belongs to PaymentIntent |
| Customer | `cus_` | email, name, phone, default_payment_method, metadata{}, balance | has PaymentIntents, Subscriptions, PaymentMethods, Invoices |
| PaymentMethod | `pm_` | type (card/bank/wallet), card.brand, card.last4, card.exp | belongs to Customer |
| Subscription | `sub_` | status, customer, items[], current_period, cancel_at, trial_end | belongs to Customer and Product |
| Product | `prod_` | name, description, active, default_price, images[] | has many Prices |
| Price | `price_` | unit_amount, currency, recurring.interval, type (one_time/recurring), billing_scheme | belongs to Product |
| Invoice | `in_` | number, customer, amount_due, status, lines[], hosted_invoice_url | belongs to Customer |
| Payout | `po_` | amount, arrival_date, status, method, description | belongs to Account |
| Dispute | `dp_` | payment_intent, amount, reason, status, evidence_due_by | belongs to Payment |
| Refund | `re_` | amount, charge, reason, status | belongs to Charge |
| Event | `evt_` | type, data{}, created, request.id | system-generated |
| WebhookEndpoint | `we_` | url, enabled_events[], status, secret | belongs to Account |
| ConnectedAccount | `acct_` | type, capabilities, payouts_enabled, charges_enabled | belongs to Platform |

### Payment Status Flow
```
requires_payment_method → requires_confirmation → requires_action (3DS) → processing → succeeded
                                                                                     → requires_capture (auth only)
↘ cancelled
↘ failed (with failure_code)
```

### Test Mode vs Live Mode
- Completely parallel data environments
- Test mode: `sk_test_`, `pk_test_` keys
- Live mode: `sk_live_`, `pk_live_` keys
- Test card numbers: `4242424242424242` (success), `4000000000000002` (decline)
- Test clocks: simulate time progression for subscription testing

## User Flows

### Accept First Payment
```
Sign up → Dashboard → Getting Started checklist → Get API keys (test mode) → Read docs → Integrate Stripe.js + server → Test with 4242... → Verify in Dashboard → Switch to Live mode → Activate account → Real payments
```

### Investigate Failed Payment
```
Home (see failed payment) → Payments → Filter: status=failed → Payment Detail → View decline reason → Check Events log → View API request/response → Identify issue → Fix integration → Re-attempt
```

### Handle Dispute
```
Notification email → Disputes → Dispute Detail → Review reason + evidence deadline → Gather evidence (receipts, logs, customer communication) → Upload counter-evidence → Submit → Wait for bank decision → Won/Lost
```

### Set Up Subscription Billing
```
Billing → Products → Create Product → Add Price (e.g., $29/month) → Integrate via API (or Pricing Table embed) → Customer subscribes → Invoice auto-generated → Payment auto-collected → Dashboard tracks MRR
```

### Debug Webhook
```
Developers → Webhooks → Select endpoint → View recent deliveries → Expand failed delivery → See request payload + response → Test with Stripe CLI (`stripe listen --forward-to localhost`) → Fix handler → Re-send event
```

### Test Subscription Lifecycle
```
Test mode → Billing → Test Clocks → Create clock → Create customer + subscription at clock time → Advance time → Watch invoice creation → Advance past trial → Watch payment attempt → Test dunning → Verify lifecycle
```

## URL / Route Structure

```
/dashboard                         → Home
/test/dashboard                    → Home (test mode)
/payments                          → Payment List
/payments/:id                      → Payment Detail (pi_xxx)
/payment-links                     → Payment Links
/invoices                          → Invoice List
/invoices/:id                      → Invoice Detail
/customers                         → Customer List
/customers/:id                     → Customer Detail
/subscriptions                     → Subscription List
/subscriptions/:id                 → Subscription Detail
/products                          → Product List
/products/:id                      → Product Detail
/balance                           → Balance Overview
/balance/payouts                   → Payout List
/balance/payouts/:id               → Payout Detail
/connect/accounts                  → Connected Accounts
/connect/accounts/:id              → Account Detail
/connect/transfers                 → Transfers
/disputes                          → Dispute List
/disputes/:id                      → Dispute Detail
/radar                             → Radar Overview
/radar/rules                       → Fraud Rules
/radar/reviews                     → Review Queue
/reports                           → Reports Hub
/reports/balance                   → Balance Report
/sigma                             → SQL Query Editor
/developers                        → Developer Overview
/developers/api-keys               → API Keys
/developers/webhooks               → Webhooks
/developers/webhooks/:id           → Webhook Detail
/developers/events                 → Event Log
/developers/events/:id             → Event Detail
/developers/logs                   → API Request Log
/settings                          → Settings
/settings/team                     → Team Members
/settings/branding                 → Branding
/settings/payments                 → Payment Methods Config
/settings/billing                  → Platform billing
/test/...                          → All routes mirrored in test mode
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Global (⌘K) | Everything: payment IDs, customer emails, amounts, invoice numbers, product names | — | Relevance, Recent |
| Payments | Payment ID, amount, customer email, description, metadata values | Status, Amount Range, Date Range, Currency, Payment Method Type, Disputed | Date (newest), Amount |
| Customers | Name, email, customer ID | Created Date, Has Active Subscriptions, Location | Created, Name, Total Spend |
| Subscriptions | Customer, subscription ID | Status, Product, Price, Created, Trial | Created, Status |
| Events | Event ID, event type, resource ID | Event Type, Date Range | Timestamp |
| API Logs | Request URL, response body | Method, Status Code, Endpoint, Date Range, API Version | Timestamp |

## Responsive Behavior

| Breakpoint | Sidebar | Data Tables | Detail Pages | Charts |
|------------|---------|------------|-------------|--------|
| Desktop (>=1280px) | Full sidebar with labels | Full columns, inline actions | Side-by-side layout | Interactive charts |
| Tablet (1024-1279px) | Icon-only sidebar | Reduced columns | Stacked layout | Simplified charts |
| Mobile (<1024px) | Hidden (hamburger), Stripe mobile app preferred | Card layout | Full-width stacked | Sparklines |

### Stripe-Specific UX
- **Test/Live mode toggle** persists globally with orange banner in test mode
- **Object IDs** in monospace font, click-to-copy (pi_xxx, cus_xxx, sub_xxx)
- **API object mapping**: every dashboard entity maps 1:1 to API object
- **Timeline/event log** on every detail page (shows API events chronologically)
- **JSON viewer**: expand raw API object on any detail page
- **Metadata** key-value editor on most objects
- **cURL replay**: copy any API request as cURL command from logs
- **Keyboard shortcuts**: ⌘K for search, N for new, / for filter
- **Stripe Apps**: installable extensions in the dashboard sidebar
- **Developer-friendly**: docs links inline, code snippets, API version tracking
- **Dark mode** available

## Access Control

| Role | View Data | Payments | Refunds | Disputes | Connect | API Keys | Billing | Settings | Team |
|------|-----------|----------|---------|----------|---------|----------|---------|----------|------|
| Administrator | ✅ | ✅ | ✅ | ✅ | ✅ | Create/Revoke | ✅ | ✅ | ✅ |
| Developer | ✅ | Read | — | Read | View | View (masked) | — | Limited | — |
| Analyst | ✅ (reports) | Read | — | Read | — | — | View | — | — |
| Support Specialist | Limited | Read | ✅ (with limits) | ✅ | — | — | — | — | — |
| View-Only | ✅ | Read | — | Read | Read | — | — | — | — |
| Custom Roles | Configurable per permission | ... | ... | ... | ... | ... | ... | ... | — |

### Security
- Two-factor authentication required for all roles
- API secret keys shown only once, then permanently masked
- Restricted API keys with granular resource-level permissions
- Webhook signing secrets for payload verification
- IP allowlisting (for API and dashboard)
- PCI DSS Level 1 compliance
- Audit trail for all sensitive operations
- SSO / SAML (enterprise)
- Hardware security key support
