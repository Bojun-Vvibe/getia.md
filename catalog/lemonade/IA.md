---
brand: Lemonade
tagline: "Insurance that doesn't suck. AI-powered, instant quotes, fast claims."
category: Insurance
website: https://lemonade.com
---

# Lemonade — Information Architecture

## Overview

Lemonade is a digital-first insurance company that uses AI and behavioral economics to reinvent insurance. The mental model is **insurance as a simple, transparent, delightful experience** — the opposite of traditional insurance complexity. Key differentiators: Maya (AI chatbot) guides the entire experience, quotes in 90 seconds, claims paid in 3 minutes, and the Giveback program donates unclaimed premiums to charities. Products span renters, homeowners, pet, life, and car insurance.

## Site Map

### Customer-Facing

```
├── Home / Landing
│   ├── Hero ("Forget everything you know about insurance")
│   ├── Product Cards (Renters, Homeowners, Pet, Life, Car)
│   ├── How It Works (3 steps: Get a Quote, Get Covered, Get Paid)
│   ├── Instant Quote CTA ("Check Our Prices")
│   ├── Giveback Program Highlight
│   ├── App Store / Google Play Badges
│   ├── Trust Signals (ratings, press logos)
│   └── Charity Partners
├── Products
│   ├── Renters Insurance
│   │   ├── What's Covered (personal property, liability)
│   │   ├── Starting At $5/mo
│   │   └── Get a Quote
│   ├── Homeowners Insurance
│   │   ├── Coverage Details
│   │   ├── Dwelling + Personal Property + Liability
│   │   └── Get a Quote
│   ├── Pet Insurance
│   │   ├── Dogs & Cats
│   │   ├── Accident + Illness
│   │   ├── Preventive Care Add-On
│   │   └── Get a Quote
│   ├── Life Insurance (Lemonade Life)
│   │   ├── Term Life
│   │   ├── Starting at $9/mo
│   │   └── Get a Quote
│   └── Car Insurance (Lemonade Car)
│       ├── Full Coverage
│       ├── Telematics Discount
│       └── Get a Quote
├── Quote Flow (AI Maya Chatbot)
│   ├── Chat Interface (conversational)
│   ├── Select Product
│   ├── Personal Details (name, address, DOB)
│   ├── Product-Specific Questions
│   │   ├── Renters: apartment details, roommates
│   │   ├── Home: property type, year built, roof
│   │   ├── Pet: breed, age, health history
│   │   ├── Life: health questions, beneficiaries
│   │   └── Car: vehicle, driving history
│   ├── Coverage Selection
│   │   ├── Recommended Package (default)
│   │   ├── Customize Coverage (sliders)
│   │   ├── Deductible Options
│   │   └── Add-Ons / Extra Coverage
│   ├── Select Giveback Charity
│   ├── Quote Result
│   │   ├── Monthly / Annual Price
│   │   ├── Coverage Summary
│   │   ├── What's Covered / Not Covered
│   │   └── Price Breakdown
│   ├── Purchase
│   │   ├── Payment Method
│   │   ├── Start Date
│   │   └── Accept Terms
│   └── Welcome
│       ├── Policy Confirmation
│       ├── Download App
│       └── Digital ID Card
├── My Policies (App)
│   ├── Active Policies (visual cards)
│   ├── Policy Detail
│   │   ├── Coverage Summary
│   │   ├── Monthly Premium
│   │   ├── Deductible
│   │   ├── Policy Documents
│   │   ├── ID Cards
│   │   ├── Giveback Charity
│   │   └── Edit Coverage
│   │       ├── Adjust Coverage Limits
│   │       ├── Add/Remove Items (scheduled personal property)
│   │       ├── Add Roommate
│   │       └── Change Address
│   └── Bundle Savings
├── Claims (AI Jim)
│   ├── File a Claim (chatbot-driven)
│   │   ├── Select Policy
│   │   ├── What Happened? (conversational)
│   │   ├── Record Video Statement (anti-fraud, empathy)
│   │   ├── Upload Photos / Documentation
│   │   ├── AI Assessment
│   │   ├── Review & Submit
│   │   └── Instant Approval (if eligible) or Handoff to Adjuster
│   ├── My Claims
│   │   ├── Open Claims
│   │   ├── Claim Detail
│   │   │   ├── Status (Submitted, Reviewing, Approved, Paid)
│   │   │   ├── Timeline
│   │   │   ├── Payout Amount
│   │   │   ├── Documents
│   │   │   └── Contact Support
│   │   └── Closed Claims
│   └── AI Claims: "3 minutes to get paid"
├── Giveback
│   ├── How It Works
│   ├── My Charity Selection
│   ├── Giveback History (annual donations)
│   └── Charities Supported
├── Payments
│   ├── Upcoming Payments
│   ├── Payment History
│   ├── Payment Method
│   └── Auto-Pay Settings
├── Account
│   ├── Personal Info
│   ├── Communication Preferences
│   ├── Referral Program ("Give $25, Get $25")
│   ├── Security Settings
│   └── Help
├── Help / FAQ
│   ├── By Product
│   ├── Claims Process
│   ├── Coverage Explanations (in plain language)
│   ├── Chat Support
│   └── Blog (Lemonade Blog — insurance education)
└── Footer
    ├── Products
    ├── Company (About, Careers, Press)
    ├── Giveback
    ├── Blog
    ├── Terms & Privacy
    └── Licenses & Disclosures
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header (Web)** | Clean top bar | Logo, Products dropdown, Claims, Check Our Prices (CTA), Login |
| **Bottom Tab Bar (App)** | 4 tabs | Home, Policies, Claims, Chat (Maya) |
| **Maya Chat** | Full-screen conversational UI | Quote flow runs as a chat conversation with Maya |
| **Quote Customizer** | Slider-based on results | Drag sliders to adjust coverage + see price change in real time |
| **Giveback Picker** | Charity grid in quote flow | Choose which charity gets unclaimed money |

### Signature UX: Chatbot-First
Lemonade replaces traditional forms with a conversational AI experience:
- **Maya** (quote bot): "Hi! I'm Maya, and I'll help you get insured."
- **AI Jim** (claims bot): "Sorry to hear that. Let's get you taken care of."
- Users type or select options in a chat interface, not fill out forms

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Customer | name, dob, email, phone, address, charity_selection | has Policies, Claims |
| Policy | product_type, status, effective_date, premium, deductible, coverages[], giveback_charity, documents[] | belongs to Customer |
| Coverage | type (dwelling/personal_property/liability/medical), limit, deductible | belongs to Policy |
| ScheduledItem | description, value, photos[] (e.g., engagement ring, laptop) | belongs to Policy |
| Claim | policy, incident_date, description, video_statement_url, photos[], ai_assessment, status, payout | belongs to Policy |
| Quote | product, customer_info, coverages, premium, valid_until | becomes Policy on purchase |
| Giveback | year, charity, amount_donated, pool_total | aggregated annual |
| Referral | referrer, referee, bonus_amount, status | belongs to Customer |

### Policy Status Flow
```
quoted → purchased → active → renewal_pending → renewed
                                                 ↘ lapsed / cancelled
```

### Claim Status Flow (AI-Powered)
```
started (chat) → submitted → ai_reviewing → instant_approved → paid (in minutes!)
                              ↘ needs_review → adjuster_assigned → reviewed → approved/denied → paid
```

## User Flows

### Get a Quote (90 seconds)
```
Home → [Check Our Prices] → Maya Chat: "Hi! What can I help you insure?" → Select Product → Chat Q&A (5-10 questions) → Coverage Recommendation → Customize (sliders) → Choose Charity → See Price → Purchase → Policy Active
```

### File a Claim (3 minutes)
```
App → Claims → [File a Claim] → AI Jim Chat → Describe Incident → Record Video Statement (30 sec) → Upload Photos → AI Reviews → Instant Approval → Money Deposited → Done
```

### Adjust Coverage
```
Policies → Select Policy → Edit Coverage → Adjust Sliders → See Price Change → Confirm → Updated Immediately
```

### Add Scheduled Item
```
Policies → Renters → [+] Schedule Item → Describe Item → Enter Value → Upload Photo → Added → Extra Coverage Active
```

## URL / Route Structure

```
/                              → Home / Landing
/renters                       → Renters Insurance
/homeowners                    → Homeowners Insurance
/pet                           → Pet Insurance
/life                          → Life Insurance
/car                           → Car Insurance
/get-started                   → Start Quote (Maya chat)
/get-started/:product          → Product-Specific Quote
/policies                      → My Policies
/policies/:id                  → Policy Detail
/policies/:id/edit             → Edit Coverage
/claims                        → My Claims
/claims/new                    → File a Claim
/claims/:id                    → Claim Detail
/giveback                      → Giveback Program
/billing                       → Payments
/account                       → Account Settings
/referral                      → Referral Program
/faq                           → FAQ
/blog                          → Blog
/help                          → Help Center
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| FAQ / Help | Articles, coverage questions | Product type | Relevance |
| Policies | Policy number, product | Status, product type | Renewal date, premium |
| Claims | Claim number, description | Status, product, date | Date, amount |

## Responsive Behavior

| Breakpoint | Quote Flow | Policies | Claims |
|------------|-----------|----------|--------|
| Mobile (primary) | Chat interface, full-screen | Card stack | Chat-based claim filing |
| Tablet | Wider chat bubble, side preview | Grid | Chat + side panel |
| Desktop (web) | Centered chat + coverage preview | Dashboard | Not typical (app-first) |

### Lemonade-Specific UX
- **Chatbot-first**: No traditional forms; everything is conversational
- **Video claims**: Record a 30-second video explaining what happened
- **Instant claims**: AI Jim can approve and pay in under 3 minutes
- **Giveback transparency**: Annual report on donations per charity
- **Slider-based customization**: Drag to adjust coverage, see price change live
- **Pink brand color**: Warm, approachable, anti-insurance feeling
- **Plain language**: No insurance jargon; everything explained simply
- **Social proof**: "Join 2M+ Lemonade members"

## Access Control

| Role | Browse | Quote | Policies | Claims | Billing |
|------|--------|-------|----------|--------|---------|
| Guest | ✅ | ✅ (start) | — | — | — |
| Customer | ✅ | ✅ | Own | File + track | ✅ |
| Policyholder | ✅ | ✅ | Own + edit coverage | File + track + instant payout | ✅ |

### Security & Trust
- SOC 2 compliant
- Encrypted data at rest and in transit
- Biometric authentication in app
- Anti-fraud: AI cross-references claims with video statements
- Licensed in all 50 US states
- Behavioral economics: Giveback reduces fraud (your fraud hurts your charity)
