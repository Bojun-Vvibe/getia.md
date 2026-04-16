# getIA.md — Claude Code Vibepack

You have access to **200 real-world IA.md files** — information architecture blueprints reverse-engineered from top products. Each file documents the complete IA of a specific brand: site map, navigation model, content model, user flows, URL structure, search/filter patterns, responsive behavior, and access control.

## What is IA.md?

An `IA.md` file is a structured markdown document describing a product's **information architecture**. It answers: what pages exist, how they connect, what data entities underpin them, and how users navigate between them. It is the architectural blueprint that sits between a PRD and code.

## When to Use

Use an IA.md when the user asks you to:

- **Scaffold a new app** — Pick the closest brand and use its IA.md as the structural skeleton
- **Clone or rebuild a product** — Use the exact brand's IA.md for page hierarchy, routes, and navigation
- **Design a page layout** — Reference the relevant section (Site Map, Navigation Model) for structure
- **Define a data model** — Use the Content Model section for entities, attributes, and relationships
- **Plan URL/route structure** — Use the URL / Route Structure section for RESTful patterns
- **Implement search/filters** — Use the Search & Filter section for dimensions, scopes, and sort options
- **Build navigation** — Use the Navigation Model section for global nav, sidebar, breadcrumbs
- **Understand user flows** — Use the User Flows section for task-oriented step-by-step paths

## How to Use

1. Identify the brand or product type closest to what the user wants to build
2. Read the IA.md file at: `catalog/{slug}/IA.md` (relative to the getia.md project root)
3. Use the IA.md as the structural source of truth when generating code, routes, components, or data models
4. You can combine multiple IA.md files for hybrid products (e.g., Airbnb IA + Stripe IA for a marketplace with payments)

## IA.md File Structure

Every IA.md follows this format:

```
---
brand: {Name}
tagline: "{description}"
category: {Category}
website: {url}
---

# {Brand} — Information Architecture

## Overview          — Mental model and product summary
## Site Map          — Full page hierarchy tree
## Navigation Model  — Global nav, sidebar, contextual nav
## Content Model     — Core entities, attributes, relationships
## User Flows        — Key task flows (step-by-step)
## URL / Route Structure — RESTful route patterns
## Search & Filter   — Search scopes, filter dimensions, sort options
## Responsive Behavior — Breakpoint adaptations
## Access Control    — Role-based visibility
```

## Complete Brand Catalog (200 brands)

### Productivity (33)
| Brand | Slug | Description |
|-------|------|-------------|
| Notion | `notion` | All-in-one workspace. Block editor, databases, wikis |
| Obsidian | `obsidian` | Knowledge base with local-first markdown and graph view |
| Linear | `linear` | Streamlined issue tracking. Keyboard-first, real-time sync |
| Jira | `jira` | Enterprise project management. Scrum, Kanban, roadmaps |
| Slack | `slack` | Team messaging with channels, threads, and integrations |
| Discord | `discord` | Community platform with voice, video, and text channels |
| Gmail | `gmail` | Google email. Inbox categories, search operators, labels |
| Superhuman | `superhuman` | Fastest email. Keyboard-driven, AI triage, split inbox |
| Google Calendar | `google-calendar` | Scheduling with day/week/month views and smart suggestions |
| Cal.com | `cal-com` | Open-source scheduling. Booking pages, team availability |
| Airtable | `airtable` | Spreadsheet-database hybrid. Multi-view, automations |
| Dropbox | `dropbox` | Cloud file storage with sync, sharing, and Paper docs |
| Google Drive | `google-drive` | Cloud storage integrated with Google Workspace |
| Asana | `asana` | Work management. My Tasks, Timeline, Portfolios, Goals |
| Monday.com | `monday` | Work OS. Colorful boards, automations, dashboards |
| ClickUp | `clickup` | All-in-one productivity. Spaces/Folders/Lists hierarchy |
| Trello | `trello` | Kanban boards. Power-Ups, Butler automation |
| Todoist | `todoist` | Task manager. Natural language input, Karma, filters |
| Miro | `miro` | Online whiteboard. Templates, sticky notes, real-time |
| Loom | `loom` | Async video messaging. Screen recording, viewer insights |
| Calendly | `calendly` | Scheduling. Event types, round-robin, workflows |
| Zapier | `zapier` | Automation. Zaps, 6000+ app integrations |
| Make | `make` | Visual automation. Scenarios, modules, data mapping |
| Coda | `coda` | Doc-powered apps. Formulas, Packs, publishing |
| Bear | `bear` | Markdown notes. Tags, nested tags, focus mode |
| Things 3 | `things` | GTD task manager. Areas, Projects, Today view |
| Craft | `craft` | Beautiful docs. Blocks, cards, AI assistant |
| Basecamp | `basecamp` | Project management. Hill Charts, Campfire, Lineup |
| Zoom | `zoom` | Video meetings. Rooms, Webinars, Phone, Team Chat |
| Microsoft Teams | `ms-teams` | Chat, channels, meetings, apps, M365 integration |
| Google Meet | `google-meet` | Video calls. Companion mode, hand raise, captions |
| Gather | `gather` | Virtual office. Spatial video, customizable maps |
| Notion Calendar | `notion-calendar` | Calendar + Notion integration, scheduling links |

### Developer Tools (25)
| Brand | Slug | Description |
|-------|------|-------------|
| GitHub | `github` | Code hosting. Pull requests, Actions CI/CD, Copilot |
| GitLab | `gitlab` | DevSecOps platform. CI/CD, code review, security scanning |
| Vercel | `vercel` | Frontend cloud. Deploy, preview, ship web apps |
| Stripe Dashboard | `stripe-dashboard` | Payment developer console. API keys, logs, test mode |
| Supabase | `supabase` | Open-source Firebase. Postgres, Auth, Storage, Realtime |
| Postman | `postman` | API development platform. Collections, testing, documentation |
| Sentry | `sentry` | Error monitoring. Stack traces, performance, release tracking |
| Datadog | `datadog` | Infrastructure monitoring. Metrics, traces, logs unified |
| Terraform Cloud | `terraform-cloud` | Infrastructure as code. Workspaces, runs, state management |
| Raycast | `raycast` | Productivity launcher. Extensions, AI, clipboard history |
| Netlify | `netlify` | JAMstack hosting. Deploy previews, forms, functions |
| Cloudflare | `cloudflare` | CDN, Workers, Pages, R2, D1, Zero Trust |
| Docker Hub | `docker-hub` | Container registry. Official images, automated builds |
| npm | `npm` | Node package registry. Package pages, search, stats |
| PlanetScale | `planetscale` | Serverless MySQL. Branching, deploy requests |
| Neon | `neon` | Serverless Postgres. Branching, autoscaling |
| Railway | `railway` | Deploy anything. Project canvas, logs, metrics |
| Render | `render` | Cloud hosting. Blueprints, auto-deploy, managed DB |
| Fly.io | `fly-io` | Edge compute. Machines API, global deployment |
| CircleCI | `circleci` | CI/CD pipelines. Orbs, insights, parallelism |
| Grafana | `grafana` | Dashboards. Prometheus, Loki, alerting, plugins |
| LaunchDarkly | `launchdarkly` | Feature flags. Targeting, experiments, rollouts |
| Prisma | `prisma` | ORM. Schema, migrations, Prisma Studio |
| Retool | `retool` | Internal tools builder. Drag-and-drop, queries |
| Expo | `expo` | React Native framework. EAS Build, OTA updates |

### Media (20)
| Brand | Slug | Description |
|-------|------|-------------|
| YouTube | `youtube` | Video platform. Creator studio, Shorts, recommendations |
| Netflix | `netflix` | Streaming. Profiles, continue watching, personalized rows |
| Spotify | `spotify` | Music streaming. Playlists, Discover Weekly, Connect |
| Medium | `medium` | Writing platform. Clean reading, publications, claps |
| Substack | `substack` | Newsletter platform. Subscriber-first, paid subscriptions |
| Wikipedia | `wikipedia` | Free encyclopedia. Collaborative editing, citations, infoboxes |
| Kindle | `kindle` | E-reading. Library, highlights, synced progress |
| Apple Podcasts | `apple-podcasts` | Podcast directory. Subscribe, chapters, transcripts |
| Twitch | `twitch` | Live streaming. Chat, subscriptions, raids, clips |
| TikTok | `tiktok` | Short video. For You feed, duets, sounds, effects |
| Vimeo | `vimeo` | Professional video hosting. OTT, live streaming |
| SoundCloud | `soundcloud` | Independent music. Waveform player, reposts |
| Audible | `audible` | Audiobooks. Credits, Whispersync, Plus catalog |
| Pocket | `pocket` | Read-it-later. Tags, highlights, recommendations |
| Feedly | `feedly` | RSS reader. AI feeds, boards, Leo AI assistant |
| Flipboard | `flipboard` | Magazine-style news. Flip animation, Storyboards |
| Dev.to | `devto` | Developer community. Articles, listings, Forem |
| Hashnode | `hashnode` | Developer blogging. Custom domain, series, newsletter |
| Ghost | `ghost` | Publishing platform. Memberships, newsletters, open-source |
| WordPress | `wordpress` | CMS. Themes, plugins, Gutenberg editor |

### Social (19)
| Brand | Slug | Description |
|-------|------|-------------|
| Twitter / X | `twitter` | Microblogging. Timeline, threads, Spaces, Communities |
| Reddit | `reddit` | Community forums. Subreddits, voting, nested comments |
| Instagram | `instagram` | Photo & video sharing. Feed, Stories, Reels, DMs |
| WhatsApp | `whatsapp` | End-to-end encrypted messaging. Groups, calls, Status |
| Telegram | `telegram` | Cloud messaging. Channels, bots, file sharing, stickers |
| Threads | `threads` | Text-based social by Meta. Conversations, reposts |
| Stack Overflow | `stack-overflow` | Developer Q&A. Voting, accepted answers, reputation |
| Mastodon | `mastodon` | Decentralized social. Federated servers, toots, boosts |
| Signal | `signal` | Encrypted messaging. Disappearing messages, sealed sender |
| Snapchat | `snapchat` | Ephemeral stories. Snap Map, Spotlight, AR lenses |
| Pinterest | `pinterest` | Visual discovery. Pins, boards, shopping, Lens |
| Clubhouse | `clubhouse` | Drop-in audio. Rooms, clubs, replays |
| BeReal | `bereal` | Daily photo. Dual camera, 2-min window, RealMojis |
| Bluesky | `bluesky` | Decentralized social. AT Protocol, custom feeds |
| Quora | `quora` | Q&A platform. Spaces, Poe AI, monetization |
| Hacker News | `hacker-news` | Tech news. Minimal UI, karma, Show HN |
| Product Hunt | `producthunt` | Product launches. Upvotes, daily leaderboard |
| Dribbble | `dribbble` | Design showcase. Shots, rebounds, hiring |
| Behance | `behance` | Creative portfolio. Projects, moodboards, Adobe |

### Business (17)
| Brand | Slug | Description |
|-------|------|-------------|
| BambooHR | `bamboohr` | HR platform. Employee directory, time-off, onboarding |
| Gusto | `gusto` | Payroll & HR. Payroll runs, benefits, hiring |
| Intercom | `intercom` | Customer messaging. Fin AI, inbox, product tours |
| HubSpot | `hubspot` | CRM platform. Marketing, Sales, Service, CMS Hubs |
| Salesforce | `salesforce` | Enterprise CRM. Lightning, AppExchange, Einstein AI |
| Mailchimp | `mailchimp` | Email marketing. Audiences, automations, landing pages |
| Zendesk | `zendesk` | Customer service. Ticketing, Guide, Chat, Talk |
| Freshdesk | `freshdesk` | Helpdesk. Freddy AI, ticket dispatch, SLA |
| Segment | `segment` | Customer data platform. Sources, destinations, protocols |
| Amplitude | `amplitude` | Product analytics. Behavioral cohorts, experiments |
| Mixpanel | `mixpanel` | Event analytics. Funnels, flows, retention charts |
| Hotjar | `hotjar` | Heatmaps, session recordings, surveys, feedback |
| Twilio | `twilio` | Communications API. SMS, Voice, Video, Flex |
| SendGrid | `sendgrid` | Transactional email API. Templates, analytics |
| Braze | `braze` | Customer engagement. Canvas flows, push/email/in-app |
| Looker | `looker` | BI platform. LookML, Explores, embedded analytics |
| Tableau | `tableau` | Data visualization. Worksheets, stories, Tableau Public |

### AI (15)
| Brand | Slug | Description |
|-------|------|-------------|
| ChatGPT | `chatgpt` | AI chatbot. GPTs, Canvas, memory, plugins |
| Claude | `claude` | Anthropic AI. Projects, Artifacts, long context |
| Perplexity | `perplexity` | AI search engine. Citations, Focus modes, Pro Search |
| Midjourney | `midjourney` | AI image generation. /imagine, variations, upscale |
| Hugging Face | `hugging-face` | ML model hub. Spaces, datasets, inference API |
| Replicate | `replicate` | Run ML models via API. Model marketplace, predictions |
| Runway | `runway` | AI video generation. Gen-2, motion brush, green screen |
| Jasper | `jasper` | AI marketing content. Brand voice, campaigns, templates |
| Cursor | `cursor` | AI code editor. Cmd+K, Composer, Tab completion |
| v0 | `v0` | AI UI generator by Vercel. Prompt to React components |
| Anthropic Console | `anthropic-console` | API playground, Workbench, usage, billing |
| Google AI Studio | `google-ai-studio` | Gemini API playground, prompts, tuning |
| Stability AI | `stability-ai` | Stable Diffusion, DreamStudio, image generation |
| ElevenLabs | `elevenlabs` | AI voice synthesis, voice cloning, dubbing |
| Descript | `descript` | AI video/audio editor. Transcript-based editing |

### Fintech (14)
| Brand | Slug | Description |
|-------|------|-------------|
| Robinhood | `robinhood` | Commission-free trading. Simplicity-first, fractional shares |
| Coinbase | `coinbase` | Crypto exchange. Buy, sell, stake, wallet, NFTs |
| Revolut | `revolut` | Digital banking. Multi-currency, crypto, budgeting |
| Wise | `wise` | International money transfer. Real exchange rate, multi-currency |
| Stripe | `stripe` | Payment infrastructure. APIs, checkout, billing, Connect |
| Square | `square` | POS & payments. In-person, online, invoices, banking |
| Lemonade | `lemonade` | AI-powered insurance. Instant quotes, claims via chat |
| Plaid | `plaid` | Financial data API. Bank linking, transactions, identity |
| Klarna | `klarna` | Buy now pay later. 4 installments, Klarna app |
| Affirm | `affirm` | BNPL. Transparent pricing, no late fees |
| Venmo | `venmo` | P2P payments. Social feed, Venmo card, business |
| Cash App | `cashapp` | P2P, Bitcoin, Cash Card, Boost rewards |
| Wealthfront | `wealthfront` | Robo-advisor. Automated investing, tax-loss harvesting |
| Betterment | `betterment` | Goal-based investing. Robo-advisor, tax coordination |

### Lifestyle (14)
| Brand | Slug | Description |
|-------|------|-------------|
| Uber | `uber` | Ride-hailing. Real-time map, driver matching, surge pricing |
| Booking.com | `booking-com` | Travel booking. Hotels, flights, map search, reviews |
| Google Maps | `google-maps` | Maps & navigation. Places, reviews, Street View, transit |
| Zillow | `zillow` | Real estate. Listings, Zestimate, map search, agent finder |
| OpenTable | `opentable` | Restaurant reservations. Table booking, reviews, rewards |
| Eventbrite | `eventbrite` | Event ticketing. Discovery, registration, check-in |
| LinkedIn | `linkedin` | Professional network. Jobs, feed, messaging, recruiter |
| Tinder | `tinder` | Dating app. Swipe, match, chat, passport |
| Grab | `grab` | Super app. Rides, food, payments, deliveries |
| Lyft | `lyft` | Ride-hailing. Shared rides, bikes/scooters, Lyft Pink |
| Deliveroo | `deliveroo` | Food delivery. Editions dark kitchens, Plus |
| Tripadvisor | `tripadvisor` | Travel reviews. Things to do, restaurants, forums |
| Expedia | `expedia` | Travel booking. Bundles, One Key rewards |
| Yelp | `yelp` | Local business reviews. Photos, check-in, reservations |

### Marketplace (10)
| Brand | Slug | Description |
|-------|------|-------------|
| Airbnb | `airbnb` | Travel marketplace. Homes, experiences, map + list search |
| Etsy | `etsy` | Handmade & vintage marketplace. Shop small, unique goods |
| eBay | `ebay` | Auction & fixed-price marketplace. Bidding, seller ratings |
| Kickstarter | `kickstarter` | Crowdfunding. Campaign pages, reward tiers, stretch goals |
| StockX | `stockx` | Sneaker & streetwear marketplace. Bid/ask, authentication |
| Mercari | `mercari` | C2C marketplace. Shipping labels, authentication |
| Depop | `depop` | Gen-Z fashion resale. Social shopping, explore |
| Poshmark | `poshmark` | Social commerce. Posh Parties, offers, bundles |
| Fiverr | `fiverr` | Freelance marketplace. Gigs, packages, Fiverr Pro |
| Upwork | `upwork` | Freelance platform. Proposals, contracts, Connects |

### E-Commerce (9)
| Brand | Slug | Description |
|-------|------|-------------|
| Shopify | `shopify` | E-commerce platform. Online store, POS, payments |
| Amazon | `amazon` | Everything store. Search-driven, Prime, recommendations |
| DoorDash | `doordash` | Food delivery. Restaurant browse, real-time tracking |
| Uber Eats | `uber-eats` | Food ordering. Quick commerce, restaurant discovery |
| Instacart | `instacart` | Grocery delivery. Store browse, real-time substitutions |
| Gumroad | `gumroad` | Sell digital products. Simple checkout, subscriptions |
| Lemon Squeezy | `lemonsqueezy` | Digital commerce. Managed tax, subscriptions |
| WooCommerce | `woocommerce` | WordPress e-commerce. Extensions, self-hosted |
| BigCommerce | `bigcommerce` | Enterprise e-commerce. Headless, multi-storefront |

### Health (8)
| Brand | Slug | Description |
|-------|------|-------------|
| Strava | `strava` | Fitness tracking. GPS activities, segments, social |
| MyFitnessPal | `myfitnesspal` | Nutrition tracker. Food diary, barcode scan, macros |
| Teladoc | `teladoc` | Virtual healthcare. Video visits, prescriptions, mental health |
| Headspace | `headspace` | Meditation, sleep, focus, mindfulness courses |
| Calm | `calm` | Meditation, Sleep Stories, music, Daily Calm |
| Peloton | `peloton` | Connected fitness. Live classes, leaderboard, metrics |
| Noom | `noom` | Weight management. Psychology-based, food logging |
| Oura | `oura` | Health tracking ring. Sleep score, readiness, activity |

### Design (7)
| Brand | Slug | Description |
|-------|------|-------------|
| Figma | `figma` | Collaborative design. Multiplayer canvas, components, prototyping |
| Canva | `canva` | Template-first design for everyone. Drag-and-drop editor |
| Webflow | `webflow` | Visual web builder. CMS, interactions, hosting |
| Framer | `framer` | Website builder. Components, CMS, animations |
| Sketch | `sketch` | Mac design tool. Symbols, Libraries, Cloud |
| InVision | `invision` | Design prototyping. Freehand, DSM, collaboration |
| Adobe Creative Cloud | `adobe-cc` | Photoshop, Illustrator, Premiere, Creative Cloud |

### Education (7)
| Brand | Slug | Description |
|-------|------|-------------|
| Coursera | `coursera` | Online learning. University courses, certificates, degrees |
| Duolingo | `duolingo` | Language learning. Gamified lessons, streaks, leaderboards |
| ClassDojo | `classdojo` | School communication. Points, portfolios, parent-teacher |
| Khan Academy | `khan-academy` | Free education. Mastery learning, Khanmigo AI |
| Skillshare | `skillshare` | Creative classes. Projects, workshops |
| Udemy | `udemy` | Course marketplace. Instructor-created, ratings |
| edX | `edx` | University MOOCs. MicroMasters, professional certificates |

### Security (1)
| Brand | Slug | Description |
|-------|------|-------------|
| 1Password | `1password` | Password manager. Vaults, secure sharing, Watchtower |

### IoT (1)
| Brand | Slug | Description |
|-------|------|-------------|
| Home Assistant | `home-assistant` | Smart home. Device control, automations, dashboards |

## Matching Strategy

When a user describes a product, match it to the closest brand(s) using this priority:

1. **Exact match** — User names the brand directly (e.g., "build me a Notion clone")
2. **Category match** — User describes a product type (e.g., "project management tool" -> Linear, Jira, Asana, Trello)
3. **Feature match** — User describes features (e.g., "kanban board with time tracking" -> Trello + Linear)
4. **Hybrid match** — Combine multiple IA.md files for novel products (e.g., "marketplace for freelance designers" -> Fiverr IA + Dribbble IA)

## Usage Examples

**User says:** "Build me a task management app"
**Action:** Read `catalog/todoist/IA.md` or `catalog/linear/IA.md`, use the Site Map for page structure, Content Model for data schema, URL Structure for routes.

**User says:** "I want to build something like Airbnb but for parking spaces"
**Action:** Read `catalog/airbnb/IA.md`, adapt the Content Model (listings = parking spots), keep the search/filter patterns, modify user flows for parking-specific booking.

**User says:** "Create a developer documentation site"
**Action:** Read `catalog/github/IA.md` for developer-oriented navigation patterns, or check the generic pattern at `catalog/documentation/IA.md`.

**User says:** "Build a fintech app for peer-to-peer lending"
**Action:** Read `catalog/venmo/IA.md` for P2P flow patterns + `catalog/stripe/IA.md` for payment infrastructure IA + `catalog/robinhood/IA.md` for financial dashboard patterns.

## Generic Patterns

In addition to the 200 brand-specific IA.md files, the catalog also includes generic pattern templates:

| Pattern | Slug | Use Case |
|---------|------|----------|
| SaaS Dashboard | `saas-dashboard` | Admin panels, analytics dashboards, B2B tools |
| CRM | `crm` | Customer relationship management platforms |
| Project Management | `project-management` | Task tracking, sprint planning, team collaboration |
| HR Platform | `hr-platform` | Employee management, payroll, recruitment |
| Email Client | `email-client` | Inbox management, compose, threading |
| Calendar App | `calendar-app` | Event scheduling, day/week/month views |
| Note-Taking App | `note-taking` | Block editor, knowledge management, wikis |
| File Storage | `file-storage` | Cloud files, sharing, sync, version history |
| Spreadsheet / Database | `spreadsheet-database` | Structured data, multi-view tables |
| Design Tool | `design-tool` | Visual design canvas, components, prototyping |
| Customer Support | `customer-support` | Ticketing, help center, live chat |
| Analytics Dashboard | `analytics-dashboard` | Product analytics, funnels, retention |
| E-Commerce | `e-commerce` | Online stores, product catalogs, checkout flows |
| Marketplace | `marketplace` | Two-sided platforms (buyers & sellers) |
| Food Delivery | `food-delivery` | Restaurant ordering, delivery tracking |
| Subscription Box | `subscription-box` | Recurring curated deliveries, preference quizzes |
| Auction Platform | `auction-platform` | Bidding, timed listings |
| Crowdfunding | `crowdfunding` | Campaign-based funding, reward tiers |
| Blog / Magazine | `blog-magazine` | Publishing platforms, editorial content |
| Documentation Site | `documentation` | Technical docs, API references |
| Video Streaming | `video-streaming` | On-demand video platforms |
| Podcast Platform | `podcast-platform` | Audio content, episode management |
| News Portal | `news-portal` | News aggregation, real-time updates |
| Music Streaming | `music-streaming` | Music playback, playlists, artist discovery |
| Photo Sharing | `photo-sharing` | Visual content sharing, feeds, stories |
| Wiki / Knowledge Base | `wiki-knowledge-base` | Collaborative documentation, team wikis |
| Ebook / Reading App | `ebook-reading` | Digital books, reading experience |
| Social Network | `social-network` | Feed-based social platforms |
| Forum / Community | `forum-community` | Discussion boards, Q&A platforms |
| Messaging App | `messaging-app` | Real-time chat, group conversations |
| Developer Platform | `developer-platform` | API consoles, developer portals |
| Code Repository | `code-repository` | Source code hosting, PR workflows |
| Banking App | `banking-app` | Personal banking, account management |
| Trading Platform | `trading-platform` | Stock/crypto trading, portfolio management |
| Payment Gateway | `payment-gateway` | Payment processing, merchant dashboards |
| Insurance Platform | `insurance-platform` | Policy management, quotes, claims |
| Health & Fitness | `health-fitness` | Workout tracking, health monitoring |
| Telemedicine | `telemedicine` | Virtual healthcare, appointment booking |
| Learning Platform | `learning-platform` | Online courses, LMS, e-learning |
| School Management | `school-management` | Student/teacher portals, grade tracking |
| Travel Booking | `travel-booking` | Flights, hotels, trip planning |
| Restaurant / Reservation | `restaurant-reservation` | Table booking, menu management |
| Real Estate | `real-estate` | Property listings, agent portals |
| Job Board | `job-board` | Job search, applications, recruitment |
| Event Platform | `event-platform` | Event discovery, ticketing, check-in |
| Ride-Hailing | `ride-hailing` | On-demand transportation, driver matching |
| Dating App | `dating-app` | Profile matching, swipe discovery |
| Mobile Super App | `mobile-super-app` | Multi-service mobile apps |
| IoT / Smart Home | `iot-smart-home` | Device control, room management |
| CLI Dashboard | `cli-dashboard` | Terminal tool companion web UIs |
