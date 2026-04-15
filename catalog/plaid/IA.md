---
brand: Plaid
tagline: "The easiest way for users to connect their bank accounts to fintech apps."
category: Financial API
website: https://plaid.com
---

# Plaid — Information Architecture

## Overview

Plaid is the financial data infrastructure that connects consumer bank accounts to fintech applications. The mental model splits into two distinct user experiences: **for developers**, Plaid is an API platform (integrate bank connectivity in hours, not months); **for consumers**, Plaid is the "Connect your bank" modal that appears inside thousands of apps (Venmo, Robinhood, Coinbase). Plaid's IA must serve both the developer console and the consumer-facing Link widget.

## Site Map

### Developer Platform / Marketing Site

```
├── Home
│   ├── Hero (Connect to bank accounts — one API)
│   ├── Product Suite Overview
│   ├── Customer Logos (Venmo, Coinbase, Betterment, etc.)
│   ├── How It Works (user connects bank → Plaid fetches data → app gets data)
│   ├── Code Snippet (interactive)
│   └── Get API Keys CTA
├── Products
│   ├── Auth (bank account + routing numbers)
│   ├── Transactions (transaction history)
│   ├── Identity (account holder info)
│   ├── Balance (real-time balance check)
│   ├── Investments (brokerage data)
│   ├── Liabilities (loans, credit cards)
│   ├── Assets (income/asset verification)
│   ├── Income (payroll data)
│   ├── Transfer (ACH payments)
│   ├── Signal (risk scoring for ACH)
│   ├── Identity Verification (KYC)
│   ├── Monitor (AML screening)
│   └── Beacon (fraud network)
├── Use Cases
│   ├── Personal Finance (budgeting apps)
│   ├── Lending (income/asset verification)
│   ├── Payments (ACH initiation)
│   ├── Wealth Management (portfolio aggregation)
│   ├── Banking (account opening)
│   └── Crypto (fund deposits)
├── Documentation
│   ├── Quick Start
│   ├── API Reference
│   │   ├── Items & Link
│   │   ├── Auth
│   │   ├── Transactions
│   │   ├── Identity
│   │   ├── Balance
│   │   ├── Investments
│   │   ├── Liabilities
│   │   ├── Transfer
│   │   ├── Income
│   │   └── Webhooks
│   ├── SDKs (Node, Python, Ruby, Go, Java)
│   ├── Client Libraries (Link SDKs: Web, iOS, Android, React Native)
│   ├── Guides
│   │   ├── Link Integration
│   │   ├── Handling Errors
│   │   ├── OAuth Bank Flows
│   │   ├── Webhook Best Practices
│   │   └── Migration Guides
│   ├── Sandbox & Testing
│   │   ├── Sandbox Environment
│   │   ├── Test Credentials
│   │   ├── Sandbox Institutions
│   │   └── Test Scenarios
│   └── Changelog
├── Dashboard (Developer Console)
│   ├── Overview
│   │   ├── Connected Items (count)
│   │   ├── API Calls (chart)
│   │   ├── Error Rate
│   │   ├── Status Banner
│   │   └── Quick Links
│   ├── Activity
│   │   ├── Item Activity (connections, disconnections)
│   │   ├── API Request Logs
│   │   └── Error Logs
│   ├── Link Customization
│   │   ├── Branding (logo, colors)
│   │   ├── Institution Selection
│   │   ├── Products Requested
│   │   └── Link Preview
│   ├── Integrations
│   │   ├── Products Enabled
│   │   ├── Webhook Configuration
│   │   └── Transfer Settings
│   ├── Team
│   │   ├── Members
│   │   ├── Roles
│   │   └── Invite
│   ├── Keys
│   │   ├── Client ID
│   │   ├── Sandbox Secret
│   │   ├── Development Secret
│   │   └── Production Secret
│   ├── Billing
│   │   ├── Current Plan
│   │   ├── Usage (items billed)
│   │   ├── Invoices
│   │   └── Payment Method
│   └── Settings
│       ├── Company Info
│       ├── Compliance (application review)
│       ├── Environments
│       └── Allowed Redirect URIs
├── Pricing
│   ├── Free Tier (100 Items)
│   ├── Growth
│   ├── Enterprise
│   ├── Per-Product Pricing
│   └── Volume Discounts
├── Security & Compliance
│   ├── SOC 2 Type II
│   ├── GDPR
│   ├── Data Encryption
│   └── Penetration Testing
└── Company
    ├── About
    ├── Careers
    ├── Blog
    ├── Plaid Exchange (partner directory)
    └── Contact
```

### Plaid Link (Consumer-Facing Widget)

```
├── Link Widget (Modal / WebView)
│   ├── Welcome Screen
│   │   ├── App Name + Logo (customized per developer)
│   │   ├── "Connect your bank account"
│   │   ├── Permissions Requested (transactions, identity, etc.)
│   │   └── Continue
│   ├── Institution Search
│   │   ├── Search Bar ("Search for your bank")
│   │   ├── Popular Institutions (Chase, BofA, Wells Fargo)
│   │   ├── All Institutions (12,000+)
│   │   └── "Can't find your bank?"
│   ├── Credentials
│   │   ├── Username
│   │   ├── Password
│   │   └── Submit
│   ├── MFA (Multi-Factor Authentication)
│   │   ├── SMS Code
│   │   ├── Security Questions
│   │   ├── Push Notification
│   │   └── Device Verification
│   ├── OAuth Flow (for supported banks)
│   │   ├── Redirect to Bank's Login
│   │   ├── Authorize in Bank's UI
│   │   └── Redirect Back to App
│   ├── Account Selection
│   │   ├── Checking Accounts
│   │   ├── Savings Accounts
│   │   ├── Credit Cards
│   │   └── Select One or More
│   ├── Success
│   │   ├── "Account connected!"
│   │   ├── Return to App
│   │   └── (App receives public_token → exchanges for access_token)
│   └── Error States
│       ├── Invalid Credentials
│       ├── MFA Failed
│       ├── Institution Down
│       ├── Timeout
│       └── Connection Lost (repair flow)
├── Plaid Portal (Consumer Data Management)
│   ├── Connected Apps (list of apps using your bank data)
│   ├── App Detail
│   │   ├── Data Accessed
│   │   ├── Connected Accounts
│   │   └── Disconnect
│   ├── Privacy Settings
│   └── Delete My Data
└── Update Mode (Re-authentication)
    ├── "Your bank connection needs attention"
    ├── Re-enter Credentials
    ├── MFA
    └── Connection Restored
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Marketing Site** | Top nav | Products (mega menu), Use Cases, Docs, Pricing, Dashboard, Contact |
| **Dashboard Sidebar** | Fixed left nav | Overview, Activity, Link, Integrations, Team, Keys, Billing, Settings |
| **Docs Sidebar** | Left nav tree | Expandable: Quick Start > Link > Products > API Reference |
| **Code Tabs** | Language selector in docs | curl, Node, Python, Ruby, Go, Java |
| **Link Widget** | Full-screen modal (no nav) | Linear flow: search → credentials → MFA → select → done |
| **Environment Toggle** | Top of dashboard | Sandbox / Development / Production |

## Content Model

### API Objects

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Item | id, institution_id, status, error, consent_expiration, products[] | represents one bank connection |
| Account | id, name, type (checking/savings/credit), subtype, mask (last 4), balances{} | belongs to Item |
| Transaction | id, account_id, amount, date, name, merchant_name, category[], pending | belongs to Account |
| Institution | id, name, logo, url, products_supported[], oauth | reference data (12,000+) |
| Identity | name, email, phone, address | belongs to Account |
| Balance | current, available, limit | belongs to Account |
| LinkToken | token, client_name, products[], country_codes[], language | created per Link session |
| AccessToken | token, item_id | server-side credential for API access |
| Webhook | url, type, code, item_id | events pushed to developer |
| TransferAuthorization | decision (approved/declined), reason | belongs to Transfer |

### Link Flow Data Model
```
1. Developer creates link_token (server-side)
2. Link widget opens with link_token
3. User connects bank → receives public_token (client-side, ephemeral)
4. Developer exchanges public_token for access_token (server-side, persistent)
5. Developer uses access_token to call Plaid APIs
```

### Item Status
```
active → needs_attention (credentials changed) → update_mode → active
          ↘ revoked (user disconnected via Plaid Portal)
          ↘ login_required → expired
```

## User Flows

```
Sign Up → Get API Keys (Sandbox) → Create Link Token (server) → Open Link (client) → User Connects Bank → Exchange Token → Fetch Transactions → Build Feature
```
```
[Inside fintech app] → "Connect Bank" → Plaid Link opens → Search "Chase" → Enter Credentials → SMS Code → Select Checking Account → "Connected!" → Back to App
```
```
my.plaid.com → See Connected Apps → "Venmo has access to Chase Checking" → [Disconnect] → Confirm → Data Access Revoked
```
```
Webhook: ITEM_ERROR → Dashboard: Error for Item → User opens app → App triggers update mode → User re-enters credentials → Connection restored
```
## URL / Route Structure

### Marketing + Docs
```
/                              → Home
/products/:product             → Product Detail
/docs                          → Docs Home
/docs/quickstart               → Quick Start
/docs/api                      → API Reference
/docs/api/:product             → Product API Docs
/docs/link                     → Link Integration Guide
/docs/webhooks                 → Webhooks
/pricing                       → Pricing
/security                      → Security
/blog                          → Blog
```

### Dashboard
```
/dashboard                     → Overview
/dashboard/activity            → Activity & Logs
/dashboard/activity/items      → Item Activity
/dashboard/activity/api-logs   → API Logs
/dashboard/link                → Link Customization
/dashboard/integrations        → Products & Webhooks
/dashboard/team                → Team
/dashboard/keys                → API Keys
/dashboard/billing             → Billing & Usage
/dashboard/settings            → Settings
```

### Consumer Portal
```
/portal                        → Connected Apps
/portal/:appId                 → App Detail
/portal/privacy                → Privacy Settings
/portal/delete                 → Delete Data
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Institution Search (Link) | Bank name (fuzzy match) | Country, Products Supported | Popularity, name |
| Documentation | All docs, API reference | Product area, language | Relevance |
| Dashboard Activity | Item ID, error code | Environment, Product, Status, Date Range | Date |
| API Logs | Request URL, response code | Method, Status, Endpoint, Date | Timestamp |

## Responsive Behavior

| Breakpoint | Marketing | Dashboard | Link Widget |
|------------|-----------|-----------|-------------|
| Desktop | Full-width + code examples | Sidebar + content | Centered modal (400px) |
| Tablet | Stacked sections | Collapsible sidebar | Same modal |
| Mobile | Mobile-optimized | Simplified (key info) | Full-screen takeover (native WebView) |

### Developer-Specific UX
- Sandbox with pre-built test institutions and credentials
- API playground with live responses
- Copy-to-clipboard everywhere
- Environment indicator (sandbox = green banner, production = no banner)
- Webhook tester (send test events)
- Link customization with live preview
- Client ID and secrets shown with copy + reveal/hide

### Consumer-Facing Link UX
- Bank logo recognition in search results
- OAuth flow for modern banks (redirect to bank's own login)
- Error messages with clear recovery steps
- Institution status page (if bank is down)
- Smooth re-authentication flow for broken connections
- Privacy-first: Plaid Portal gives consumers control over their data

## Access Control

### Dashboard
| Role | Overview | Activity | Keys | Billing | Team | Settings |
|------|----------|----------|------|---------|------|----------|
| Owner | ✅ | ✅ | All | ✅ | Manage | ✅ |
| Admin | ✅ | ✅ | All | View | Manage | ✅ |
| Developer | ✅ | ✅ | Sandbox only | — | View | Limited |
| Viewer | ✅ | View | — | — | View | — |

### API Access Levels (Environments)
| Environment | Data | Billing | Banks |
|-------------|------|---------|-------|
| Sandbox | Simulated data, test credentials | Free | Test institutions |
| Development | Real banks, 100 live Items free | Free (limited) | All |
| Production | Real banks, full scale | Per-Item billing | All (12,000+) |

### Security & Compliance
- SOC 2 Type II audited
- End-to-end encryption (TLS 1.2+, AES-256 at rest)
- No credentials stored (OAuth preferred, credentials passed through)
- Token-based access (access_tokens never exposed client-side)
- Consumer data deletion via Plaid Portal
- GDPR / CCPA compliant
- Regular penetration testing
- Bank-level security standards
