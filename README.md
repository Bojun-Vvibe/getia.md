# getIA.md

**Curated Information Architecture patterns for AI coding agents.**

Just like [getdesign.md](https://getdesign.md/) provides design system files for AI agents to build matching UI, **getIA.md** provides standardized `IA.md` files so AI agents can scaffold products with proven information architecture patterns.

## What is this?

A collection of `IA.md` files — each one describes the information architecture of a specific product type. Drop one into your project, and let your AI coding agent (Claude Code, Cursor, Copilot, etc.) build a product with a well-structured navigation, page hierarchy, content model, and user flows.

## Quick Start

1. Browse the [`/catalog`](./catalog) directory
2. Pick the IA pattern that matches your product type
3. Copy the `IA.md` file into your project root
4. Let your AI agent reference it when scaffolding your app

## Catalog

### SaaS & Business Tools
| Pattern | Description |
|---------|-------------|
| [SaaS Dashboard](./catalog/saas-dashboard/IA.md) | Admin panels, analytics dashboards, B2B tools |
| [CRM](./catalog/crm/IA.md) | Customer relationship management platforms |
| [Project Management](./catalog/project-management/IA.md) | Task tracking, sprint planning, team collaboration |
| [HR Platform](./catalog/hr-platform/IA.md) | Employee management, payroll, recruitment |
| [Email Client](./catalog/email-client/IA.md) | Inbox management, compose, threading (Gmail/Outlook) |
| [Calendar App](./catalog/calendar-app/IA.md) | Event scheduling, day/week/month views, invites |
| [Note-Taking App](./catalog/note-taking/IA.md) | Block editor, knowledge management, wikis (Notion/Obsidian) |
| [File Storage](./catalog/file-storage/IA.md) | Cloud files, sharing, sync, version history (Dropbox/Drive) |
| [Spreadsheet / Database](./catalog/spreadsheet-database/IA.md) | Structured data, multi-view tables (Airtable/Coda) |
| [Design Tool](./catalog/design-tool/IA.md) | Visual design canvas, components, prototyping (Figma/Canva) |
| [Customer Support](./catalog/customer-support/IA.md) | Ticketing, help center, live chat (Zendesk/Intercom) |
| [Analytics Dashboard](./catalog/analytics-dashboard/IA.md) | Product analytics, funnels, retention (Mixpanel/Amplitude) |

### E-Commerce & Marketplace
| Pattern | Description |
|---------|-------------|
| [E-Commerce](./catalog/e-commerce/IA.md) | Online stores, product catalogs, checkout flows |
| [Marketplace](./catalog/marketplace/IA.md) | Two-sided platforms (buyers & sellers) |
| [Food Delivery](./catalog/food-delivery/IA.md) | Restaurant ordering, delivery tracking |
| [Subscription Box](./catalog/subscription-box/IA.md) | Recurring curated deliveries, preference quizzes |
| [Auction Platform](./catalog/auction-platform/IA.md) | Bidding, timed listings, buyer/seller marketplace |
| [Crowdfunding](./catalog/crowdfunding/IA.md) | Campaign-based funding, reward tiers, backer management |

### Content & Media
| Pattern | Description |
|---------|-------------|
| [Blog / Magazine](./catalog/blog-magazine/IA.md) | Publishing platforms, editorial content |
| [Documentation Site](./catalog/documentation/IA.md) | Technical docs, API references, knowledge bases |
| [Video Streaming](./catalog/video-streaming/IA.md) | On-demand video platforms |
| [Podcast Platform](./catalog/podcast-platform/IA.md) | Audio content, episode management |
| [News Portal](./catalog/news-portal/IA.md) | News aggregation, real-time updates |
| [Music Streaming](./catalog/music-streaming/IA.md) | Music playback, playlists, artist discovery |
| [Photo Sharing](./catalog/photo-sharing/IA.md) | Visual content sharing, feeds, stories |
| [Wiki / Knowledge Base](./catalog/wiki-knowledge-base/IA.md) | Collaborative documentation, team wikis |
| [Ebook / Reading App](./catalog/ebook-reading/IA.md) | Digital books, reading experience, annotations |

### Social & Community
| Pattern | Description |
|---------|-------------|
| [Social Network](./catalog/social-network/IA.md) | Feed-based social platforms |
| [Forum / Community](./catalog/forum-community/IA.md) | Discussion boards, Q&A platforms |
| [Messaging App](./catalog/messaging-app/IA.md) | Real-time chat, group conversations |

### Developer Tools
| Pattern | Description |
|---------|-------------|
| [Developer Platform](./catalog/developer-platform/IA.md) | API consoles, developer portals |
| [Code Repository](./catalog/code-repository/IA.md) | Source code hosting, PR workflows |

### Finance & Fintech
| Pattern | Description |
|---------|-------------|
| [Banking App](./catalog/banking-app/IA.md) | Personal banking, account management |
| [Trading Platform](./catalog/trading-platform/IA.md) | Stock/crypto trading, portfolio management |
| [Payment Gateway](./catalog/payment-gateway/IA.md) | Payment processing, merchant dashboards, Stripe-style |
| [Insurance Platform](./catalog/insurance-platform/IA.md) | Policy management, quotes, claims filing |

### Health & Fitness
| Pattern | Description |
|---------|-------------|
| [Health & Fitness](./catalog/health-fitness/IA.md) | Workout tracking, health monitoring |
| [Telemedicine](./catalog/telemedicine/IA.md) | Virtual healthcare, appointment booking |

### Education
| Pattern | Description |
|---------|-------------|
| [Learning Platform](./catalog/learning-platform/IA.md) | Online courses, LMS, e-learning |
| [School Management](./catalog/school-management/IA.md) | Student/teacher portals, grade tracking |

### Travel & Hospitality
| Pattern | Description |
|---------|-------------|
| [Travel Booking](./catalog/travel-booking/IA.md) | Flights, hotels, trip planning |
| [Restaurant / Reservation](./catalog/restaurant-reservation/IA.md) | Table booking, menu management |

### Real Estate & Property
| Pattern | Description |
|---------|-------------|
| [Real Estate](./catalog/real-estate/IA.md) | Property listings, agent portals |

### Lifestyle & Services
| Pattern | Description |
|---------|-------------|
| [Job Board](./catalog/job-board/IA.md) | Job search, applications, recruitment pipelines (LinkedIn Jobs/Indeed) |
| [Event Platform](./catalog/event-platform/IA.md) | Event discovery, ticketing, check-in (Eventbrite) |
| [Ride-Hailing](./catalog/ride-hailing/IA.md) | On-demand transportation, driver matching (Uber/Lyft) |
| [Dating App](./catalog/dating-app/IA.md) | Profile matching, swipe discovery, chat (Tinder/Hinge) |

### Specialized
| Pattern | Description |
|---------|-------------|
| [Mobile Super App](./catalog/mobile-super-app/IA.md) | Multi-service mobile apps (WeChat, Grab style) |
| [IoT / Smart Home Dashboard](./catalog/iot-smart-home/IA.md) | Device control, room management, home automation |
| [CLI Dashboard](./catalog/cli-dashboard/IA.md) | Terminal-based tool companion web UIs |

## IA.md Template Structure

Every `IA.md` follows a consistent structure:

```markdown
# [Product Type] — Information Architecture

## Overview
Brief description and core user mental model.

## Site Map
Page hierarchy with max depth levels.

## Navigation Model
Global nav, local nav, contextual nav patterns.

## Content Model
Core entities, their attributes, and relationships.

## User Flows
Key task flows with step-by-step paths.

## URL / Route Structure
RESTful route patterns.

## Search & Filter
Search scopes, filter dimensions, sort options.

## Responsive Behavior
How IA adapts across breakpoints.

## Access Control
Role-based page/feature visibility.
```

## Contributing

1. Fork this repo
2. Add a new directory under `/catalog/your-pattern-name/`
3. Create an `IA.md` following the template structure
4. Submit a PR

## License

MIT
