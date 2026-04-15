# Insurance Platform — Information Architecture

## Overview

A digital insurance platform (Lemonade, Geico, Oscar Health style). The mental model is **protection and peace of mind** — customers browse plans, get quotes, purchase policies, manage coverage, and file claims. Trust, transparency (no hidden terms), and speed (instant quotes, fast claims) differentiate digital-first insurers.

## Site Map

### Customer-Facing

```
├── Home / Landing
│   ├── Hero (value proposition + Get a Quote CTA)
│   ├── Product Lines (auto, home, life, health, pet)
│   ├── How It Works (3-step)
│   ├── Coverage Calculator / Quick Quote
│   ├── Testimonials / Trust Signals
│   ├── Claims in Minutes (highlight)
│   └── Partners / Ratings (AM Best, BBB)
├── Products
│   ├── Auto Insurance
│   ├── Home / Renters Insurance
│   ├── Life Insurance
│   ├── Health Insurance
│   ├── Pet Insurance
│   ├── Business / Liability Insurance
│   └── Bundle Options
├── Product Detail Page
│   ├── Coverage Overview
│   ├── What's Covered / Not Covered
│   ├── Sample Pricing
│   ├── Comparison Table (plans/tiers)
│   ├── FAQ
│   └── Get a Quote CTA
├── Quote Flow
│   ├── Select Product Type
│   ├── About You
│   │   ├── Personal Info (age, address)
│   │   ├── Coverage-Specific Questions
│   │   │   ├── Auto: vehicle, driving history
│   │   │   ├── Home: property details, value
│   │   │   ├── Life: health, beneficiaries
│   │   │   └── Health: dependents, conditions
│   │   └── Current Coverage (if any)
│   ├── Coverage Selection
│   │   ├── Coverage Levels (basic/standard/premium)
│   │   ├── Deductible Options
│   │   ├── Add-Ons / Riders
│   │   └── Customize Limits
│   ├── Quote Results
│   │   ├── Monthly / Annual Premium
│   │   ├── Coverage Summary
│   │   ├── Price Breakdown
│   │   ├── Discounts Applied
│   │   └── Compare Plans Side-by-Side
│   ├── Purchase
│   │   ├── Review Policy Details
│   │   ├── Payment (monthly/annual)
│   │   ├── Effective Date
│   │   ├── Accept Terms
│   │   └── Confirmation
│   └── Post-Purchase
│       ├── Welcome & Onboarding
│       ├── Download Policy Documents
│       ├── Digital ID Card (auto)
│       └── App Download CTA
├── My Policies
│   ├── Active Policies (cards)
│   ├── Policy Detail
│   │   ├── Coverage Summary
│   │   ├── Policy Documents (PDF)
│   │   ├── ID Cards
│   │   ├── Premium & Payment Schedule
│   │   ├── Covered Items / People
│   │   ├── Deductible Info
│   │   ├── Policy Changes
│   │   │   ├── Update Coverage
│   │   │   ├── Add/Remove Items or People
│   │   │   ├── Change Address
│   │   │   └── Change Payment Method
│   │   └── Renewal Info
│   ├── Expired / Cancelled Policies
│   └── Bundle Management
├── Claims
│   ├── File a Claim
│   │   ├── Select Policy
│   │   ├── Incident Details
│   │   │   ├── Date & Time
│   │   │   ├── Description
│   │   │   ├── Photos / Documentation
│   │   │   ├── Police Report (if applicable)
│   │   │   └── Third Party Info
│   │   ├── Damage Assessment (AI-assisted)
│   │   ├── Review & Submit
│   │   └── Confirmation & Claim Number
│   ├── My Claims
│   │   ├── Open Claims
│   │   ├── Claim Detail
│   │   │   ├── Status Timeline
│   │   │   ├── Adjuster Info
│   │   │   ├── Documents Uploaded
│   │   │   ├── Payout Info
│   │   │   ├── Communication Log
│   │   │   └── Additional Info Requests
│   │   └── Closed Claims
│   └── Track Repair (auto claims)
├── Payments & Billing
│   ├── Upcoming Payments
│   ├── Payment History
│   ├── Payment Methods
│   ├── Auto-Pay Settings
│   ├── Download Invoices
│   └── Payment Plans
├── Account
│   ├── Personal Info
│   ├── Household Members
│   ├── Vehicles (auto)
│   ├── Properties (home)
│   ├── Beneficiaries (life)
│   ├── Communication Preferences
│   ├── Documents Center
│   └── Security Settings
├── Help & Resources
│   ├── FAQ (by product)
│   ├── Coverage Guide
│   ├── Glossary (insurance terms)
│   ├── Blog / Learning Center
│   ├── Chat Support
│   ├── Phone Support
│   ├── Find an Agent (if applicable)
│   └── Emergency Contacts
└── Footer
    ├── About Us
    ├── Careers
    ├── Press
    ├── Licensing Info
    ├── Terms & Conditions
    ├── Privacy Policy
    ├── Accessibility
    └── State Disclosures
```

### Agent / Broker Portal (if applicable)

```
├── Agent Dashboard
│   ├── Book of Business Overview
│   ├── Commission Summary
│   ├── Pending Quotes
│   └── Renewal Queue
├── Clients
│   ├── Client List
│   ├── Client Detail (policies, claims, history)
│   └── Add Client
├── Quotes
│   ├── Create Quote (on behalf of client)
│   ├── Pending Quotes
│   └── Quote History
├── Policies
│   ├── Active Policies (all clients)
│   ├── Endorsements / Changes
│   └── Renewals
├── Claims
│   ├── File on Behalf
│   ├── Track Claims
│   └── Claim Documents
├── Commissions
│   ├── Statement
│   ├── History
│   └── Hierarchy
└── Resources
    ├── Product Guides
    ├── Underwriting Guidelines
    └── Marketing Materials
```

### Admin / Underwriting

```
├── Dashboard
│   ├── KPIs (GWP, loss ratio, claims frequency)
│   ├── New Applications Queue
│   └── Alerts
├── Underwriting
│   ├── Application Queue
│   ├── Risk Assessment
│   ├── Approval / Decline
│   └── Exceptions
├── Policies
│   ├── All Policies
│   ├── Endorsements Queue
│   ├── Renewals Management
│   └── Cancellations
├── Claims Management
│   ├── Claims Queue
│   ├── Assignment (adjusters)
│   ├── Reserves Management
│   ├── Payments / Settlements
│   ├── Fraud Detection Flags
│   └── SIU Referrals
├── Products & Pricing
│   ├── Product Configuration
│   ├── Rating Engine
│   ├── State Filings
│   └── Discounts / Surcharges
├── Analytics & Actuarial
│   ├── Loss Ratio by Product
│   ├── Claims Trends
│   ├── Pricing Adequacy
│   ├── Retention Analysis
│   └── Geographical Heat Maps
├── Compliance
│   ├── State Regulations
│   ├── Filing Status
│   ├── Audit Trails
│   └── Reporting
└── Settings
    ├── Users & Roles
    ├── Workflow Rules
    ├── Document Templates
    ├── Third-Party Integrations (DMV, credit, claims DB)
    └── Rating Tables
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, Products dropdown, Get a Quote CTA, Claims, Account, Help |
| **Product Nav** | Mega menu or tab bar | Product lines with icons |
| **Quote Flow** | Progress stepper | Multi-step with clear progress indication |
| **Policy Dashboard** | Tab or card grid | Quick switch between policies |
| **Claim Wizard** | Step-by-step wizard | Guided claim filing with contextual help |
| **Admin Sidebar** | Fixed left nav | Dashboard, Underwriting, Policies, Claims, Products, Analytics |
| **Contextual Help** | Tooltip / info icons | Insurance term explanations inline |

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Customer | name, dob, email, phone, address, ssn_last4, risk_profile | has Policies, Claims, Quotes |
| Policy | number, product, status, effective_date, expiry_date, premium, deductible, limits, documents[] | belongs to Customer, has Claims |
| Coverage | type, limit, deductible, description | belongs to Policy |
| Quote | product, customer_info, coverages, premium, valid_until, status | becomes Policy on purchase |
| Claim | number, policy, incident_date, description, status, amount_claimed, amount_paid, adjuster | belongs to Policy |
| Premium | amount, frequency, next_due, payment_method, auto_pay | belongs to Policy |
| Document | type (policy/id_card/claim_doc), file_url, generated_at | belongs to Policy or Claim |
| Agent | name, license, agency, commission_rate, clients[] | has many Customers |
| Product | name, type, states_available, base_rate, coverages[], riders[] | has many Policies |
| Rider | name, description, additional_premium, conditions | add-on to Policy |

### Policy Status Flow
`quoted → applied → underwriting → bound → active → renewal → renewed / lapsed`
`↘ declined / cancelled / non-renewed`

### Claim Status Flow
`reported → assigned → under_investigation → assessed → approved / denied → payment_issued → closed`
`↘ reopened → under_investigation`
`↘ fraud_flagged → SIU_review`

### Quote Status
`started → completed → presented → accepted → purchased`
`↘ expired / declined`

## User Flows

### Get a Quote and Purchase
```
Home → Select Product → Enter Details (personal + risk) → Choose Coverage → View Quote → Compare Plans → Select Plan → Payment → Policy Issued → Download Documents
```

### File a Claim
```
My Policies → Select Policy → File a Claim → Incident Details → Upload Photos/Docs → AI Assessment (optional) → Submit → Claim Number → Track Status → Settlement → Payout
```

### Renew Policy
```
Notification (renewal approaching) → My Policies → Policy Detail → Review Renewal Terms → Accept / Modify Coverage → Confirm → Payment → Renewed
```

### Update Coverage
```
My Policies → Policy Detail → Policy Changes → Add Vehicle/Person → Updated Premium Quote → Accept → Endorsement Issued
```

### Contact About Claim
```
My Claims → Claim Detail → Communication Log → Send Message → Adjuster Response → Resolution
```

## URL / Route Structure

### Customer
```
/                              → Home / Landing
/products                      → All Products
/products/:type                → Product Detail (auto, home, life, etc.)
/quote                         → Start Quote
/quote/:type                   → Product-Specific Quote
/quote/:type/details           → Enter Details
/quote/:type/coverage          → Choose Coverage
/quote/:type/results           → View Quote
/quote/:type/purchase          → Purchase
/quote/confirmation            → Policy Confirmation
/policies                      → My Policies
/policies/:id                  → Policy Detail
/policies/:id/documents        → Policy Documents
/policies/:id/changes          → Make Changes
/policies/:id/renew            → Renewal
/claims                        → My Claims
/claims/new                    → File a Claim
/claims/new/:policyId          → File Claim for Specific Policy
/claims/:id                    → Claim Detail
/billing                       → Payments & Billing
/billing/history               → Payment History
/account                       → Account Settings
/account/household             → Household Members
/account/vehicles              → Vehicles (auto)
/account/properties            → Properties (home)
/account/documents             → All Documents
/help                          → Help Center
/help/:topic                   → Help Article
/blog                          → Learning Center
```

### Agent Portal
```
/agent                         → Agent Dashboard
/agent/clients                 → Client List
/agent/clients/:id             → Client Detail
/agent/quotes                  → Quotes
/agent/quotes/new              → Create Quote
/agent/policies                → All Policies
/agent/claims                  → Claims
/agent/commissions             → Commissions
/agent/resources               → Resources
```

### Admin
```
/admin                         → Dashboard
/admin/underwriting            → Underwriting Queue
/admin/underwriting/:id        → Application Review
/admin/policies                → All Policies
/admin/claims                  → Claims Management
/admin/claims/:id              → Claim Detail
/admin/products                → Product Configuration
/admin/products/:id/rating     → Rating Engine
/admin/analytics               → Analytics
/admin/compliance              → Compliance
/admin/settings                → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Products | Product name, coverage type | Product Type, State | Relevance |
| My Policies | Policy number, product type | Status (active/expired), Product, Renewal Date | Renewal Date, Premium, Product |
| My Claims | Claim number, description | Status, Policy, Date Range, Amount | Date Filed, Status, Amount |
| Help | FAQ articles, guides | Product, Topic | Relevance |
| Admin Policies | Policy number, customer name, agent | Product, Status, State, Premium Range, Effective Date | Created, Premium, Expiry |
| Admin Claims | Claim number, claimant, adjuster | Status, Product, Amount Range, Date, Fraud Flag | Date, Amount, Priority |

## Responsive Behavior

| Breakpoint | Quote Flow | Policy Dashboard | Claim Filing | Admin |
|------------|-----------|-----------------|-------------|-------|
| Desktop (≥1024px) | Side-by-side (form + preview) | Card grid + detail panel | Multi-section form | Full table + sidebar |
| Tablet (768–1023px) | Single column + sticky summary | Card stack | Stepped form | Responsive table |
| Mobile (<768px) | Full-screen steps | Stacked cards, swipe between policies | Wizard (one step per screen) | Card layout |

### Insurance-Specific UX
- Quote comparison: side-by-side plan cards with "most popular" badge
- Coverage explainers: "What does this mean?" tooltips on every term
- Price transparency: breakdown showing base + additions − discounts
- Instant ID cards: downloadable / wallet-compatible
- Claim photo upload: camera integration with guided photo capture
- Status timelines: visual progress for claims and underwriting
- Chat/AI assistant for coverage questions
- Annual review reminders with coverage suggestions
- Bundle discount calculator: show savings for multi-policy

## Access Control

### Customer

| Role | Browse | Quote | Policies | Claims | Billing |
|------|--------|-------|----------|--------|---------|
| Guest | ✅ | ✅ (start) | — | — | — |
| Registered | ✅ | ✅ | Own | Own | Own |
| Policyholder | ✅ | ✅ | Own + modify | File + track | ✅ |
| Named Insured | ✅ | — | View | File own | View |

### Agent

| Role | Dashboard | Clients | Quotes | Policies | Claims | Commissions |
|------|-----------|---------|--------|----------|--------|-------------|
| Agent | ✅ | Own clients | CRUD | View + endorse | File + track | Own |
| Senior Agent | ✅ | Team clients | CRUD | View + endorse | File + track | Team |
| Agency Admin | ✅ | All | CRUD | All | All | All |

### Admin

| Role | Dashboard | Underwriting | Policies | Claims | Products | Analytics | Compliance |
|------|-----------|-------------|----------|--------|----------|-----------|------------|
| Admin | ✅ | ✅ | CRUD | CRUD | ✅ | ✅ | ✅ |
| Underwriter | ✅ | ✅ | Read | Read | — | Limited | — |
| Claims Adjuster | ✅ | — | Read | Assigned claims | — | Limited | — |
| Actuarial | ✅ | — | — | Read (aggregate) | Read | ✅ | — |
| Compliance | ✅ | Read | Read | Read | Read | ✅ | ✅ |

### Security Requirements
- PII encryption at rest and in transit
- Role-based data masking (SSN, DOB)
- Audit trail for all policy and claim changes
- SOC 2 / HIPAA compliance (health products)
- State-specific regulatory compliance
- Multi-factor authentication for sensitive operations
