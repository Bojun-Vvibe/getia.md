---
brand: Stripe
tagline: "Financial infrastructure for the internet. Accept payments, send payouts, and manage your business online."
category: Payment Gateway
website: https://stripe.com
---

# Stripe — Information Architecture

## Overview

Stripe is the payment infrastructure that powers millions of internet businesses. This IA covers the **Stripe product suite from the merchant's perspective** — the APIs, checkout experiences, and payment processing that businesses integrate. (The Stripe Dashboard developer console is a separate IA.) The mental model is **payments as infrastructure** — Stripe handles the entire money flow: accept payments via cards/wallets/bank transfers, manage subscriptions, prevent fraud, handle disputes, and disburse payouts. Everything is API-first with pre-built UI components available.

## Site Map

### Marketing & Documentation Site

```
├── Home
│   ├── Hero (API-first messaging)
│   ├── Product Suite Overview
│   ├── Customer Logos (trust signals)
│   ├── Code Example (live, interactive)
│   └── Get Started CTA
├── Products
│   ├── Payments
│   │   ├── Stripe Checkout (hosted payment page)
│   │   ├── Payment Links (no-code)
│   │   ├── Elements (embeddable UI components)
│   │   ├── Payment Methods (cards, wallets, BNPL, bank)
│   │   └── Pricing
│   ├── Billing (Subscriptions)
│   │   ├── Subscription Management
│   │   ├── Invoicing
│   │   ├── Revenue Recovery (smart retries)
│   │   ├── Usage-Based Billing (metered)
│   │   └── Customer Portal
│   ├── Connect (Marketplace Payments)
│   │   ├── Platform Payments
│   │   ├── Onboarding (KYC for sub-merchants)
│   │   ├── Split Payments
│   │   └── Payouts to Connected Accounts
│   ├── Radar (Fraud Prevention)
│   │   ├── Machine Learning Fraud Detection
│   │   ├── Custom Rules
│   │   ├── 3D Secure
│   │   └── Block/Allow Lists
│   ├── Terminal (In-Person Payments)
│   │   ├── Hardware (readers)
│   │   ├── SDKs
│   │   └── Unified Online + In-Person
│   ├── Atlas (Company Incorporation)
│   ├── Sigma (SQL Reporting)
│   ├── Climate (Carbon Removal)
│   ├── Identity (ID Verification)
│   ├── Tax (Automated Tax Calculation)
│   ├── Revenue Recognition
│   └── Financial Connections (Bank Linking)
├── Documentation
│   ├── Quick Start Guide
│   ├── API Reference
│   │   ├── Core Resources (PaymentIntents, Charges, Customers)
│   │   ├── Checkout
│   │   ├── Billing
│   │   ├── Connect
│   │   └── Full API (200+ endpoints)
│   ├── SDKs (Node, Python, Ruby, Go, Java, .NET, PHP)
│   ├── Client Libraries (Stripe.js, React, iOS, Android)
│   ├── Guides
│   │   ├── Accept a Payment
│   │   ├── Set Up Subscriptions
│   │   ├── Build a Marketplace
│   │   ├── Handle Webhooks
│   │   └── Go Live Checklist
│   ├── Recipes / Samples (GitHub)
│   ├── Webhooks Reference
│   ├── Testing (test card numbers, test clocks)
│   └── API Changelog
├── Pricing
│   ├── Standard Rate (2.9% + 30¢)
│   ├── International Cards
│   ├── Volume Discounts (contact sales)
│   ├── Product-Specific Pricing
│   └── Pricing Calculator
├── Resources
│   ├── Stripe Press (books)
│   ├── Stripe Sessions (conference)
│   ├── Customer Stories
│   ├── Guides & Reports
│   ├── Blog / Engineering Blog
│   └── Partner Directory
└── Company
    ├── About
    ├── Careers
    ├── Newsroom
    └── Contact Sales
```

### Stripe Checkout (Buyer-Facing)

```
├── Checkout Session
│   ├── Product / Cart Summary
│   ├── Payment Methods (auto-optimized by region)
│   │   ├── Card (Visa, MC, Amex)
│   │   ├── Apple Pay / Google Pay
│   │   ├── Bank Debit (SEPA, ACH)
│   │   ├── Buy Now Pay Later (Afterpay, Klarna, Affirm)
│   │   ├── Wallets (Cash App, WeChat Pay, Alipay)
│   │   └── Local Methods (iDEAL, Bancontact, BLIK)
│   ├── Billing Address
│   ├── Shipping Address (if applicable)
│   ├── Tax Calculation
│   ├── Promo Code
│   ├── 3D Secure (if required)
│   └── Confirm & Pay
├── Customer Portal (subscription management)
│   ├── Active Subscriptions
│   ├── Update Plan (upgrade/downgrade)
│   ├── Update Payment Method
│   ├── View Invoices
│   ├── Cancel Subscription
│   └── Billing History
└── Payment Link Page
    ├── Product Info
    ├── Quantity Selector
    ├── Payment Form
    └── Confirmation
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Docs Top Nav** | Persistent top bar | Products dropdown, Docs, API Reference, Pricing, Sign In |
| **Docs Sidebar** | Left nav tree | Expandable tree: Payments > Accept a Payment > Card |
| **Code Tabs** | Language selector in code blocks | curl / Node / Python / Ruby / PHP / Java / Go / .NET |
| **API Reference** | Two-column (docs + code) | Left: description, Right: request/response examples |
| **Checkout** | Single-page, no nav | Focused conversion: product → payment → confirm |
| **Version Selector** | Dropdown in API docs | Select API version (2023-10-16, etc.) |

## Content Model

### API Objects (Core)

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| PaymentIntent | id, amount, currency, status, payment_method, customer, metadata, client_secret | central payment object |
| Customer | id, email, name, default_payment_method, metadata | has PaymentMethods, Subscriptions, Invoices |
| PaymentMethod | type (card/bank_transfer/wallet), card{brand, last4, exp}, billing_details | belongs to Customer |
| Charge | id, amount, currency, payment_method, status, receipt_url, refunded | belongs to PaymentIntent |
| Subscription | id, customer, items[], status, current_period, cancel_at_period_end | belongs to Customer, has Invoices |
| Invoice | id, customer, amount_due, status, lines[], hosted_url, pdf | belongs to Customer |
| Product | id, name, description, images[], active | has many Prices |
| Price | id, product, unit_amount, currency, type (one-time/recurring), interval | belongs to Product |
| Payout | id, amount, currency, arrival_date, status, method | belongs to Account |
| Dispute | id, charge, amount, reason, status, evidence_due_by | belongs to Charge |
| Refund | id, charge, amount, reason, status | belongs to Charge |
| WebhookEndpoint | id, url, enabled_events[], status | belongs to Account |
| ConnectedAccount | id, type (express/custom/standard), charges_enabled, payouts_enabled | belongs to Platform |

### Payment Status Flow
```
requires_payment_method → requires_confirmation → requires_action (3DS) → processing → succeeded
                                                                                        ↘ requires_capture (auth only)
↘ canceled
```

### Subscription Status
```
incomplete → active → past_due → unpaid → canceled
             trialing → active
```

## User Flows

### Accept a Card Payment (Developer Integration)
```
Install SDK → Create PaymentIntent (server) → Render Elements (client) → Customer Enters Card → Confirm Payment → Handle 3DS (if needed) → PaymentIntent Succeeds → Webhook Fires → Fulfill Order
```

### Stripe Checkout (No-Code / Low-Code)
```
Create Checkout Session (server) → Redirect Customer to Stripe-Hosted Page → Customer Pays → Redirect to Success URL → Webhook Confirms
```

### Payment Link (Zero Code)
```
Dashboard → Create Payment Link → Set Product/Price → Copy URL → Share (email/social/QR) → Customer Clicks → Pays → Done
```

### Handle a Dispute
```
Webhook: dispute.created → Review Reason → Gather Evidence (receipts, logs, shipping proof) → Submit via API/Dashboard → Bank Decides → Won/Lost
```

### Set Up Subscription
```
Create Product + Price → Create Customer → Create Subscription → First Invoice Auto-Generated → Payment Collected → Recurring Invoices on Schedule
```

## URL / Route Structure

### Documentation Site
```
/docs                              → Docs Home
/docs/payments                     → Payments Overview
/docs/payments/accept-a-payment    → Accept Payment Guide
/docs/payments/payment-methods     → Payment Methods
/docs/checkout                     → Stripe Checkout
/docs/billing                      → Billing / Subscriptions
/docs/billing/subscriptions        → Subscriptions Guide
/docs/connect                      → Connect (Marketplace)
/docs/connect/onboarding           → Connected Account Onboarding
/docs/radar                        → Fraud Prevention
/docs/terminal                     → In-Person Payments
/docs/webhooks                     → Webhooks Guide
/docs/testing                      → Testing
/docs/api                          → API Reference Home
/docs/api/payment_intents          → PaymentIntents API
/docs/api/customers                → Customers API
/docs/api/subscriptions            → Subscriptions API
```

### Checkout / Payment Links
```
/checkout/session/:id              → Hosted Checkout Page
/pay/:link_id                      → Payment Link Page
/customer-portal/:session          → Customer Portal
/receipt/:charge_id                → Email Receipt
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Documentation | All docs, guides, API reference | Product area, language | Relevance |
| API Reference | Object names, field names, endpoint paths | Resource category | Alphabetical |
| Changelog | Release notes, breaking changes | Date range, product area | Date |

## Responsive Behavior

| Breakpoint | Docs | Checkout | API Reference |
|------------|------|----------|--------------|
| Desktop (≥1280px) | Sidebar + content + code pane (3 columns) | Centered form (480px max) | Two-column (description + code) |
| Tablet (768–1279px) | Collapsible sidebar + content | Same centered form | Stacked (description, then code) |
| Mobile (<768px) | Hamburger menu + full-width content | Full-width form, optimized inputs | Stacked, horizontal scroll for code |

### Developer-Specific UX
- Copy-to-clipboard on all code snippets and API keys
- Syntax-highlighted code in every language
- Live API playground (make real test requests)
- Test mode data clearly indicated (orange banner, test card numbers)
- Inline expandable JSON objects
- "Try it" buttons in API reference
- Version pinning with migration guides
- Webhook event tester (send test events to your endpoint)

## Access Control

### Stripe Account Roles
| Role | Dashboard | API Keys | Payments | Refunds | Settings | Developers |
|------|-----------|----------|----------|---------|----------|------------|
| Owner | ✅ | Full | ✅ | ✅ | ✅ | ✅ |
| Admin | ✅ | Full | ✅ | ✅ | ✅ | ✅ |
| Developer | ✅ | Test only | Read | — | Limited | ✅ |
| Analyst | ✅ (reports) | — | Read | — | — | — |
| Support | Limited | — | Read | ✅ (limits) | — | — |
| View-Only | ✅ | — | Read | — | — | — |

### API Key Types
- **Publishable Key**: Client-side, limited scope (create tokens, confirm payments)
- **Secret Key**: Server-side, full API access
- **Restricted Key**: Custom permissions per resource
- **Webhook Signing Secret**: Verify webhook payload integrity

### Security & Compliance
- PCI DSS Level 1 certified
- SOC 2 Type II
- GDPR compliant
- Test/Live mode strict separation
- API keys shown only once on creation
- IP allowlisting for API access
- Two-factor authentication required
- Idempotency keys for safe retries
