---
brand: Mailchimp
tagline: Turn emails into revenue
category: Business SaaS
website: https://mailchimp.com
---

# Information Architecture — Mailchimp

## Overview

Mailchimp is an email marketing and automation platform that has expanded into a full marketing suite. The IA is organized around Audiences (contact lists), Campaigns (emails, ads, social posts, landing pages), and Automations (triggered email journeys). The drag-and-drop email builder and template gallery remain the core experience, while analytics track opens, clicks, and revenue attribution.

## Site Map

```
mailchimp.com
├── Home (Dashboard)
│   ├── Campaign Performance Summary
│   ├── Audience Growth
│   └── Revenue Attribution
├── Campaigns
│   ├── All Campaigns
│   ├── Email Campaigns
│   │   ├── Regular
│   │   ├── A/B Test
│   │   └── Multivariate
│   ├── Automations (Customer Journeys)
│   │   ├── Pre-built Journeys
│   │   └── Custom Journey Builder
│   ├── Landing Pages
│   ├── Signup Forms
│   ├── Social Posts
│   ├── Ads (Facebook, Instagram, Google)
│   └── Postcards
├── Audience
│   ├── All Contacts
│   ├── Segments
│   ├── Tags
│   ├── Groups
│   ├── Signup Forms
│   ├── Dashboard (audience stats)
│   └── Surveys
├── Content
│   ├── My Files (images, assets)
│   ├── Creative Assistant (AI design)
│   └── Content Studio
├── Analytics
│   ├── Email Performance
│   ├── Audience Analytics
│   ├── Revenue Reports
│   ├── Comparative Reports
│   └── Campaign Benchmarks
├── Integrations
│   ├── E-commerce (Shopify, WooCommerce)
│   ├── CRM
│   └── API
├── Website
│   ├── Website Builder
│   ├── Domains
│   └── Stores (e-commerce)
├── Settings
│   ├── Account
│   ├── Billing
│   ├── Users
│   ├── Verified Domains
│   └── API Keys
└── Marketing Site
    ├── Products
    ├── Pricing
    ├── Resources
    └── Templates
```

## Navigation Model

- **Left sidebar:** Home, Campaigns, Automations, Audience, Content, Analytics, Website, Integrations
- **Campaign builder:** Step flow — Select type → Audience → Design (drag-and-drop editor) → Preview & Test → Send/Schedule
- **Audience view:** Table with search/filter; segments and tags in sub-nav
- **Journey builder:** Visual flowchart — starting point → conditions → actions → branches
- **Top bar:** Account dropdown, search, create button (+), help

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Audience | name, contacts count, signup forms | → Contacts, Segments, Tags, Groups |
| Contact | email, name, status (subscribed/unsubscribed/cleaned), merge fields | → Audience, Tags, Segments |
| Segment | name, filter conditions (AND/OR) | → Contacts (dynamic) |
| Tag | name | → Contacts (many-to-many) |
| Campaign (Email) | subject, from, content, audience/segment, status (draft/sent/scheduled) | → Audience, Report |
| Customer Journey | name, starting point, steps (conditions/actions), status | → Audience, Contacts |
| Template | name, HTML/drag-and-drop layout | → Campaigns |
| Landing Page | title, URL, form, template | → Audience |
| Report | opens, clicks, bounces, unsubscribes, revenue | → Campaign |
| Automation | trigger (signup/purchase/date/etc.), emails sequence | → Audience |

## User Flows


### Send an Email Campaign
```
Campaigns → + Create → Email → Select Audience/Segment → Design email (drag-and-drop) → Add subject & preview text → Test send → Schedule or Send Now
```

### Build a Customer Journey
```
Automations → + Create Journey → Choose starting point (e.g., "Signed up") → Add delay → Add email → Add if/else condition → Add another email → Activate
```

### Grow Audience
```
Audience → Signup Forms → Customize embedded form or pop-up → Copy embed code → Place on website → New signups flow into audience → Auto-tagged
```

### Analyze Campaign Performance
```
Analytics → Select campaign → View opens, clicks, click map (heatmap on email), revenue → Compare against industry benchmarks → Export report
```

## URL / Route Structure

```
us{dc}.admin.mailchimp.com/                              # Dashboard
us{dc}.admin.mailchimp.com/campaigns/                     # All campaigns
us{dc}.admin.mailchimp.com/campaigns/edit?id={id}         # Campaign editor
us{dc}.admin.mailchimp.com/customer-journey/              # Customer journeys
us{dc}.admin.mailchimp.com/lists/members/?id={audience_id} # Audience contacts
us{dc}.admin.mailchimp.com/lists/segments?id={audience_id} # Segments
us{dc}.admin.mailchimp.com/reports/                       # Reports
us{dc}.admin.mailchimp.com/landing-pages/                 # Landing pages
{audience_slug}.mailchimpsites.com/                       # Published landing page
us{dc}.admin.mailchimp.com/account/                       # Account settings
us{dc}.admin.mailchimp.com/account/billing/                # Billing
us{dc}.admin.mailchimp.com/account/users/                  # Users management
us{dc}.admin.mailchimp.com/audience/                       # Audience dashboard
us{dc}.admin.mailchimp.com/audience/contacts/              # All contacts
us{dc}.admin.mailchimp.com/lists/signup-forms/             # Signup forms
us{dc}.admin.mailchimp.com/content/                        # Content studio
us{dc}.admin.mailchimp.com/integrations/                   # Integrations
us{dc}.admin.mailchimp.com/website/                        # Website builder
us{dc}.admin.mailchimp.com/automations/                    # Automations
mailchimp.com/pricing/                                     # Pricing page
```

## Search & Filter

- **Contact search:** Search by email, name; filter by tag, segment, signup date, campaign activity, e-commerce data
- **Campaign search:** Search by name, filter by type, status (sent/draft/scheduled), date range
- **Segment builder:** Multi-condition filter (contact info, campaign activity, e-commerce, tags) with AND/OR
- **Report filtering:** By date range, campaign, audience
- **Content search:** Search uploaded files and templates by name

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full admin with sidebar navigation and drag-and-drop email editor |
| Tablet (768–1023px) | Responsive admin; email editor functional but optimized for larger screens |
| Mobile app (iOS/Android) | View reports, manage audience, send campaigns; limited email design |
| Email rendering | Email preview/testing across 40+ clients (desktop, mobile, web) |

## Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full account control, billing, all audiences and campaigns |
| Admin | Manage users, all audiences, all campaigns, reports |
| Manager | Create/send campaigns, manage audiences, view reports |
| Author | Create campaigns (cannot send), manage content |
| Viewer | Read-only access to reports and campaigns |
| API Key | Programmatic access with full or limited scope |

## Automation Triggers

| Trigger | Example Use Case |
|---------|-----------------|
| Signup | Welcome email series for new subscribers |
| Purchase | Post-purchase follow-up and cross-sell |
| Abandoned cart | Remind shoppers to complete checkout |
| Date-based | Birthday or anniversary campaigns |
| Tag applied | Segment-specific drip sequences |
| API event | Custom triggers from application events |

## Email Builder Components

- **Content blocks:** Text, image, button, divider, social links, video, product
- **Layout blocks:** 1-column, 2-column, 3-column, full-width
- **Dynamic content:** Show/hide blocks based on audience segment or merge tag
- **Code editor:** Direct HTML/CSS editing for custom designs
- **Template library:** 100+ pre-designed templates by category
- **A/B testing:** Subject line, sender name, content, send time variants
- **Preview:** Desktop, mobile, and dark mode previews; inbox rendering test

## Deliverability & Compliance

- **SPF/DKIM/DMARC:** Domain authentication required for sending
- **Engagement tracking:** Opens, clicks, bounces, unsubscribes per campaign
- **List hygiene:** Automatic cleaning of hard bounces and repeated soft bounces
- **CAN-SPAM compliance:** Unsubscribe link mandatory in all campaigns
- **GDPR tools:** Consent tracking, data export, right to deletion
- **Abuse prevention:** Send rate limits, content scanning, account review for high complaint rates
- **Deliverability score:** Inbox placement prediction before sending

## Key Metrics Dashboard

| Metric | Description |
|--------|-------------|
| Open Rate | % of delivered emails opened (affected by Apple MPP) |
| Click Rate | % of delivered emails with at least one click |
| Bounce Rate | % hard + soft bounces relative to sends |
| Unsubscribe Rate | % unsubscribes per campaign |
| Revenue Attribution | Revenue tracked via e-commerce integration |
| List Growth Rate | New subscribers minus unsubscribes over time |

## Integration Ecosystem

| Category | Integrations |
|----------|-------------|
| E-commerce | Shopify, WooCommerce, Magento, BigCommerce, Squarespace |
| CRM | Salesforce, HubSpot, Zoho, Pipedrive |
| Social | Facebook, Instagram, Twitter, LinkedIn |
| Analytics | Google Analytics, Facebook Pixel |
| Forms | Typeform, Gravity Forms, WordPress |
| Productivity | Zapier, Make, Slack, Microsoft 365 |
| Development | REST API, Webhooks, OAuth 2.0 |
