# getIA.md

**Structured information architecture files for AI coding agents.**

[![200+ Brands](https://img.shields.io/badge/brands-200%2B-blue)](https://getia-md.github.io) [![MIT License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

Drop an `IA.md` into your project. Your AI agent builds with proven navigation, page hierarchy, content models, and user flows — instead of guessing.

For AI-native builders, `IA.md` acts like a missing structural input layer: not just prompt text, but a reusable product map your agent can actually build from.

Website: [getia-md.github.io](https://getia-md.github.io) | GitHub: [getia-md/getia-md.github.io](https://github.com/getia-md/getia-md.github.io)

---

## What is IA.md?

An `IA.md` file describes the **information architecture** of a real-world product — its sitemap, navigation model, content entities, user flows, routes, and more. It gives AI coding agents (Claude Code, Cursor, v0, Copilot) the structural context they need to scaffold apps that feel like real products, not generic templates.

Think of it as a reusable product blueprint for agent-driven building: something between a sitemap, a product spec, and a scaffolding contract.

Each file is reverse-engineered from a production app, distilled into a standardized 9-section format.

---

## Quick Start

```bash
# 1. Pick a brand from the catalog
curl -O https://raw.githubusercontent.com/getia-md/getia-md.github.io/main/catalog/spotify/IA.md

# 2. Drop it into your project root
mv IA.md ./IA.md

# 3. Tell your AI agent to use it
# "Build a music streaming app following the IA in IA.md"
```

Or browse and copy from the [catalog](./catalog) directly.

### Why this works better than prompting from scratch

Without structure, AI coding agents usually improvise:
- flat page hierarchies
- weak navigation patterns
- generic CRUD screens
- missing user flows

With `IA.md`, the agent starts from a stronger default: real route structure, real entities, real navigation, and real product shape.

---

## What's Inside

Every `IA.md` contains 9 standardized sections:

| # | Section | What it covers |
|---|---------|---------------|
| 1 | **Overview** | Product description, core mental model |
| 2 | **Site Map** | Full page hierarchy with depth levels |
| 3 | **Navigation Model** | Global nav, local nav, contextual nav patterns |
| 4 | **Content Model** | Core entities, attributes, relationships |
| 5 | **User Flows** | Key task flows with step-by-step paths |
| 6 | **URL / Route Structure** | RESTful route patterns |
| 7 | **Search & Filter** | Search scopes, filter dimensions, sort options |
| 8 | **Responsive Behavior** | How IA adapts across breakpoints |
| 9 | **Access Control** | Role-based page/feature visibility |

---

## Catalog

200+ brand architectures across 14 categories.

### Productivity (26)

| Brand | Description |
|-------|-------------|
| [Notion](./catalog/notion/IA.md) | All-in-one workspace. Block editor, databases, wikis. |
| [Obsidian](./catalog/obsidian/IA.md) | Knowledge base with local-first markdown and graph view. |
| [Linear](./catalog/linear/IA.md) | Streamlined issue tracking. Keyboard-first, real-time sync. |
| [Jira](./catalog/jira/IA.md) | Enterprise project management. Scrum, Kanban, roadmaps. |
| [Slack](./catalog/slack/IA.md) | Team messaging with channels, threads, and integrations. |
| [Discord](./catalog/discord/IA.md) | Community platform with voice, video, and text channels. |
| [Gmail](./catalog/gmail/IA.md) | Google email. Inbox categories, search operators, labels. |
| [Superhuman](./catalog/superhuman/IA.md) | Fastest email. Keyboard-driven, AI triage, split inbox. |
| [Google Calendar](./catalog/google-calendar/IA.md) | Scheduling with day/week/month views and smart suggestions. |
| [Cal.com](./catalog/cal-com/IA.md) | Open-source scheduling. Booking pages, team availability. |
| [Airtable](./catalog/airtable/IA.md) | Spreadsheet-database hybrid. Multi-view, automations. |
| [Dropbox](./catalog/dropbox/IA.md) | Cloud file storage with sync, sharing, and Paper docs. |
| [Google Drive](./catalog/google-drive/IA.md) | Cloud storage integrated with Google Workspace. |
| [Asana](./catalog/asana/IA.md) | Work management. My Tasks, Timeline, Portfolios, Goals. |
| [Monday.com](./catalog/monday/IA.md) | Work OS. Colorful boards, automations, dashboards. |
| [ClickUp](./catalog/clickup/IA.md) | All-in-one productivity. Spaces/Folders/Lists hierarchy. |
| [Trello](./catalog/trello/IA.md) | Kanban boards. Power-Ups, Butler automation. |
| [Todoist](./catalog/todoist/IA.md) | Task manager. Natural language input, Karma, filters. |
| [Miro](./catalog/miro/IA.md) | Online whiteboard. Templates, sticky notes, real-time. |
| [Loom](./catalog/loom/IA.md) | Async video messaging. Screen recording, viewer insights. |
| [Calendly](./catalog/calendly/IA.md) | Scheduling. Event types, round-robin, workflows. |
| [Zapier](./catalog/zapier/IA.md) | Automation. Zaps, 6000+ app integrations. |
| [Make](./catalog/make/IA.md) | Visual automation. Scenarios, modules, data mapping. |
| [Coda](./catalog/coda/IA.md) | Doc-powered apps. Formulas, Packs, publishing. |
| [Bear](./catalog/bear/IA.md) | Markdown notes. Tags, nested tags, focus mode. |
| [Things 3](./catalog/things/IA.md) | GTD task manager. Areas, Projects, Today view. |
| [Craft](./catalog/craft/IA.md) | Beautiful docs. Blocks, cards, AI assistant. |
| [Basecamp](./catalog/basecamp/IA.md) | Project management. Hill Charts, Campfire, Lineup. |
| [Zoom](./catalog/zoom/IA.md) | Video meetings. Rooms, Webinars, Phone, Team Chat. |
| [Microsoft Teams](./catalog/ms-teams/IA.md) | Chat, channels, meetings, apps, M365 integration. |
| [Google Meet](./catalog/google-meet/IA.md) | Video calls. Companion mode, hand raise, captions. |
| [Gather](./catalog/gather/IA.md) | Virtual office. Spatial video, customizable maps. |
| [Notion Calendar](./catalog/notion-calendar/IA.md) | Calendar + Notion integration, scheduling links. |

### Developer Tools (25)

| Brand | Description |
|-------|-------------|
| [GitHub](./catalog/github/IA.md) | Code hosting. Pull requests, Actions CI/CD, Copilot. |
| [GitLab](./catalog/gitlab/IA.md) | DevSecOps platform. CI/CD, code review, security scanning. |
| [Vercel](./catalog/vercel/IA.md) | Frontend cloud. Deploy, preview, ship web apps. |
| [Stripe Dashboard](./catalog/stripe-dashboard/IA.md) | Payment developer console. API keys, logs, test mode. |
| [Supabase](./catalog/supabase/IA.md) | Open-source Firebase. Postgres, Auth, Storage, Realtime. |
| [Postman](./catalog/postman/IA.md) | API development platform. Collections, testing, documentation. |
| [Sentry](./catalog/sentry/IA.md) | Error monitoring. Stack traces, performance, release tracking. |
| [Datadog](./catalog/datadog/IA.md) | Infrastructure monitoring. Metrics, traces, logs unified. |
| [Terraform Cloud](./catalog/terraform-cloud/IA.md) | Infrastructure as code. Workspaces, runs, state management. |
| [Raycast](./catalog/raycast/IA.md) | Productivity launcher. Extensions, AI, clipboard history. |
| [Netlify](./catalog/netlify/IA.md) | JAMstack hosting. Deploy previews, forms, functions. |
| [Cloudflare](./catalog/cloudflare/IA.md) | CDN, Workers, Pages, R2, D1, Zero Trust. |
| [Docker Hub](./catalog/docker-hub/IA.md) | Container registry. Official images, automated builds. |
| [npm](./catalog/npm/IA.md) | Node package registry. Package pages, search, stats. |
| [PlanetScale](./catalog/planetscale/IA.md) | Serverless MySQL. Branching, deploy requests. |
| [Neon](./catalog/neon/IA.md) | Serverless Postgres. Branching, autoscaling. |
| [Railway](./catalog/railway/IA.md) | Deploy anything. Project canvas, logs, metrics. |
| [Render](./catalog/render/IA.md) | Cloud hosting. Blueprints, auto-deploy, managed DB. |
| [Fly.io](./catalog/fly-io/IA.md) | Edge compute. Machines API, global deployment. |
| [CircleCI](./catalog/circleci/IA.md) | CI/CD pipelines. Orbs, insights, parallelism. |
| [Grafana](./catalog/grafana/IA.md) | Dashboards. Prometheus, Loki, alerting, plugins. |
| [LaunchDarkly](./catalog/launchdarkly/IA.md) | Feature flags. Targeting, experiments, rollouts. |
| [Prisma](./catalog/prisma/IA.md) | ORM. Schema, migrations, Prisma Studio. |
| [Retool](./catalog/retool/IA.md) | Internal tools builder. Drag-and-drop, queries. |
| [Expo](./catalog/expo/IA.md) | React Native framework. EAS Build, OTA updates. |

### Business (15)

| Brand | Description |
|-------|-------------|
| [BambooHR](./catalog/bamboohr/IA.md) | HR platform. Employee directory, time-off, onboarding. |
| [Gusto](./catalog/gusto/IA.md) | Payroll & HR. Payroll runs, benefits, hiring. |
| [Intercom](./catalog/intercom/IA.md) | Customer messaging. Fin AI, inbox, product tours. |
| [HubSpot](./catalog/hubspot/IA.md) | CRM platform. Marketing, Sales, Service, CMS Hubs. |
| [Salesforce](./catalog/salesforce/IA.md) | Enterprise CRM. Lightning, AppExchange, Einstein AI. |
| [Mailchimp](./catalog/mailchimp/IA.md) | Email marketing. Audiences, automations, landing pages. |
| [Zendesk](./catalog/zendesk/IA.md) | Customer service. Ticketing, Guide, Chat, Talk. |
| [Freshdesk](./catalog/freshdesk/IA.md) | Helpdesk. Freddy AI, ticket dispatch, SLA. |
| [Segment](./catalog/segment/IA.md) | Customer data platform. Sources, destinations, protocols. |
| [Amplitude](./catalog/amplitude/IA.md) | Product analytics. Behavioral cohorts, experiments. |
| [Mixpanel](./catalog/mixpanel/IA.md) | Event analytics. Funnels, flows, retention charts. |
| [Hotjar](./catalog/hotjar/IA.md) | Heatmaps, session recordings, surveys, feedback. |
| [Twilio](./catalog/twilio/IA.md) | Communications API. SMS, Voice, Video, Flex. |
| [SendGrid](./catalog/sendgrid/IA.md) | Transactional email API. Templates, analytics. |
| [Braze](./catalog/braze/IA.md) | Customer engagement. Canvas flows, push/email/in-app. |
| [Looker](./catalog/looker/IA.md) | BI platform. LookML, Explores, embedded analytics. |
| [Tableau](./catalog/tableau/IA.md) | Data visualization. Worksheets, stories, Tableau Public. |

### AI (15)

| Brand | Description |
|-------|-------------|
| [ChatGPT](./catalog/chatgpt/IA.md) | AI chatbot. GPTs, Canvas, memory, plugins. |
| [Claude](./catalog/claude/IA.md) | Anthropic AI. Projects, Artifacts, long context. |
| [Perplexity](./catalog/perplexity/IA.md) | AI search engine. Citations, Focus modes, Pro Search. |
| [Midjourney](./catalog/midjourney/IA.md) | AI image generation. /imagine, variations, upscale. |
| [Hugging Face](./catalog/hugging-face/IA.md) | ML model hub. Spaces, datasets, inference API. |
| [Replicate](./catalog/replicate/IA.md) | Run ML models via API. Model marketplace, predictions. |
| [Runway](./catalog/runway/IA.md) | AI video generation. Gen-2, motion brush, green screen. |
| [Jasper](./catalog/jasper/IA.md) | AI marketing content. Brand voice, campaigns, templates. |
| [Cursor](./catalog/cursor/IA.md) | AI code editor. Cmd+K, Composer, Tab completion. |
| [v0](./catalog/v0/IA.md) | AI UI generator by Vercel. Prompt to React components. |
| [Anthropic Console](./catalog/anthropic-console/IA.md) | API playground, Workbench, usage, billing. |
| [Google AI Studio](./catalog/google-ai-studio/IA.md) | Gemini API playground, prompts, tuning. |
| [Stability AI](./catalog/stability-ai/IA.md) | Stable Diffusion, DreamStudio, image generation. |
| [ElevenLabs](./catalog/elevenlabs/IA.md) | AI voice synthesis, voice cloning, dubbing. |
| [Descript](./catalog/descript/IA.md) | AI video/audio editor. Transcript-based editing. |

### Social (18)

| Brand | Description |
|-------|-------------|
| [Twitter / X](./catalog/twitter/IA.md) | Microblogging. Timeline, threads, Spaces, Communities. |
| [Reddit](./catalog/reddit/IA.md) | Community forums. Subreddits, voting, nested comments. |
| [Instagram](./catalog/instagram/IA.md) | Photo & video sharing. Feed, Stories, Reels, DMs. |
| [WhatsApp](./catalog/whatsapp/IA.md) | End-to-end encrypted messaging. Groups, calls, Status. |
| [Telegram](./catalog/telegram/IA.md) | Cloud messaging. Channels, bots, file sharing, stickers. |
| [Threads](./catalog/threads/IA.md) | Text-based social by Meta. Conversations, reposts. |
| [Stack Overflow](./catalog/stack-overflow/IA.md) | Developer Q&A. Voting, accepted answers, reputation. |
| [Mastodon](./catalog/mastodon/IA.md) | Decentralized social. Federated servers, toots, boosts. |
| [Signal](./catalog/signal/IA.md) | Encrypted messaging. Disappearing messages, sealed sender. |
| [Snapchat](./catalog/snapchat/IA.md) | Ephemeral stories. Snap Map, Spotlight, AR lenses. |
| [Pinterest](./catalog/pinterest/IA.md) | Visual discovery. Pins, boards, shopping, Lens. |
| [Clubhouse](./catalog/clubhouse/IA.md) | Drop-in audio. Rooms, clubs, replays. |
| [BeReal](./catalog/bereal/IA.md) | Daily photo. Dual camera, 2-min window, RealMojis. |
| [Bluesky](./catalog/bluesky/IA.md) | Decentralized social. AT Protocol, custom feeds. |
| [Quora](./catalog/quora/IA.md) | Q&A platform. Spaces, Poe AI, monetization. |
| [Hacker News](./catalog/hacker-news/IA.md) | Tech news. Minimal UI, karma, Show HN. |
| [Product Hunt](./catalog/producthunt/IA.md) | Product launches. Upvotes, daily leaderboard. |
| [Dribbble](./catalog/dribbble/IA.md) | Design showcase. Shots, rebounds, hiring. |
| [Behance](./catalog/behance/IA.md) | Creative portfolio. Projects, moodboards, Adobe. |

### Media (16)

| Brand | Description |
|-------|-------------|
| [YouTube](./catalog/youtube/IA.md) | Video platform. Creator studio, Shorts, recommendations. |
| [Netflix](./catalog/netflix/IA.md) | Streaming. Profiles, continue watching, personalized rows. |
| [Spotify](./catalog/spotify/IA.md) | Music streaming. Playlists, Discover Weekly, Connect. |
| [Medium](./catalog/medium/IA.md) | Writing platform. Clean reading, publications, claps. |
| [Substack](./catalog/substack/IA.md) | Newsletter platform. Subscriber-first, paid subscriptions. |
| [Wikipedia](./catalog/wikipedia/IA.md) | Free encyclopedia. Collaborative editing, citations, infoboxes. |
| [Kindle](./catalog/kindle/IA.md) | E-reading. Library, highlights, synced progress. |
| [Apple Podcasts](./catalog/apple-podcasts/IA.md) | Podcast directory. Subscribe, chapters, transcripts. |
| [Twitch](./catalog/twitch/IA.md) | Live streaming. Chat, subscriptions, raids, clips. |
| [TikTok](./catalog/tiktok/IA.md) | Short video. For You feed, duets, sounds, effects. |
| [Vimeo](./catalog/vimeo/IA.md) | Professional video hosting. OTT, live streaming. |
| [SoundCloud](./catalog/soundcloud/IA.md) | Independent music. Waveform player, reposts. |
| [Audible](./catalog/audible/IA.md) | Audiobooks. Credits, Whispersync, Plus catalog. |
| [Pocket](./catalog/pocket/IA.md) | Read-it-later. Tags, highlights, recommendations. |
| [Feedly](./catalog/feedly/IA.md) | RSS reader. AI feeds, boards, Leo AI assistant. |
| [Flipboard](./catalog/flipboard/IA.md) | Magazine-style news. Flip animation, Storyboards. |
| [Dev.to](./catalog/devto/IA.md) | Developer community. Articles, listings, Forem. |
| [Hashnode](./catalog/hashnode/IA.md) | Developer blogging. Custom domain, series, newsletter. |
| [Ghost](./catalog/ghost/IA.md) | Publishing platform. Memberships, newsletters, open-source. |
| [WordPress](./catalog/wordpress/IA.md) | CMS. Themes, plugins, Gutenberg editor. |

### Fintech (12)

| Brand | Description |
|-------|-------------|
| [Robinhood](./catalog/robinhood/IA.md) | Commission-free trading. Simplicity-first, fractional shares. |
| [Coinbase](./catalog/coinbase/IA.md) | Crypto exchange. Buy, sell, stake, wallet, NFTs. |
| [Revolut](./catalog/revolut/IA.md) | Digital banking. Multi-currency, crypto, budgeting. |
| [Wise](./catalog/wise/IA.md) | International money transfer. Real exchange rate, multi-currency. |
| [Stripe](./catalog/stripe/IA.md) | Payment infrastructure. APIs, checkout, billing, Connect. |
| [Square](./catalog/square/IA.md) | POS & payments. In-person, online, invoices, banking. |
| [Lemonade](./catalog/lemonade/IA.md) | AI-powered insurance. Instant quotes, claims via chat. |
| [Plaid](./catalog/plaid/IA.md) | Financial data API. Bank linking, transactions, identity. |
| [Klarna](./catalog/klarna/IA.md) | Buy now pay later. 4 installments, Klarna app. |
| [Affirm](./catalog/affirm/IA.md) | BNPL. Transparent pricing, no late fees. |
| [Venmo](./catalog/venmo/IA.md) | P2P payments. Social feed, Venmo card, business. |
| [Cash App](./catalog/cashapp/IA.md) | P2P, Bitcoin, Cash Card, Boost rewards. |
| [Wealthfront](./catalog/wealthfront/IA.md) | Robo-advisor. Automated investing, tax-loss harvesting. |
| [Betterment](./catalog/betterment/IA.md) | Goal-based investing. Robo-advisor, tax coordination. |

### E-Commerce (8)

| Brand | Description |
|-------|-------------|
| [Shopify](./catalog/shopify/IA.md) | E-commerce platform. Online store, POS, payments. |
| [Amazon](./catalog/amazon/IA.md) | Everything store. Search-driven, Prime, recommendations. |
| [DoorDash](./catalog/doordash/IA.md) | Food delivery. Restaurant browse, real-time tracking. |
| [Uber Eats](./catalog/uber-eats/IA.md) | Food ordering. Quick commerce, restaurant discovery. |
| [Instacart](./catalog/instacart/IA.md) | Grocery delivery. Store browse, real-time substitutions. |
| [Gumroad](./catalog/gumroad/IA.md) | Sell digital products. Simple checkout, subscriptions. |
| [Lemon Squeezy](./catalog/lemonsqueezy/IA.md) | Digital commerce. Managed tax, subscriptions. |
| [WooCommerce](./catalog/woocommerce/IA.md) | WordPress e-commerce. Extensions, self-hosted. |
| [BigCommerce](./catalog/bigcommerce/IA.md) | Enterprise e-commerce. Headless, multi-storefront. |

### Marketplace (10)

| Brand | Description |
|-------|-------------|
| [Airbnb](./catalog/airbnb/IA.md) | Travel marketplace. Homes, experiences, map + list search. |
| [Etsy](./catalog/etsy/IA.md) | Handmade & vintage marketplace. Shop small, unique goods. |
| [eBay](./catalog/ebay/IA.md) | Auction & fixed-price marketplace. Bidding, seller ratings. |
| [Kickstarter](./catalog/kickstarter/IA.md) | Crowdfunding. Campaign pages, reward tiers, stretch goals. |
| [StockX](./catalog/stockx/IA.md) | Sneaker & streetwear marketplace. Bid/ask, authentication. |
| [Mercari](./catalog/mercari/IA.md) | C2C marketplace. Shipping labels, authentication. |
| [Depop](./catalog/depop/IA.md) | Gen-Z fashion resale. Social shopping, explore. |
| [Poshmark](./catalog/poshmark/IA.md) | Social commerce. Posh Parties, offers, bundles. |
| [Fiverr](./catalog/fiverr/IA.md) | Freelance marketplace. Gigs, packages, Fiverr Pro. |
| [Upwork](./catalog/upwork/IA.md) | Freelance platform. Proposals, contracts, Connects. |

### Lifestyle (10)

| Brand | Description |
|-------|-------------|
| [Uber](./catalog/uber/IA.md) | Ride-hailing. Real-time map, driver matching, surge pricing. |
| [Booking.com](./catalog/booking-com/IA.md) | Travel booking. Hotels, flights, map search, reviews. |
| [Google Maps](./catalog/google-maps/IA.md) | Maps & navigation. Places, reviews, Street View, transit. |
| [Zillow](./catalog/zillow/IA.md) | Real estate. Listings, Zestimate, map search, agent finder. |
| [OpenTable](./catalog/opentable/IA.md) | Restaurant reservations. Table booking, reviews, rewards. |
| [Eventbrite](./catalog/eventbrite/IA.md) | Event ticketing. Discovery, registration, check-in. |
| [LinkedIn](./catalog/linkedin/IA.md) | Professional network. Jobs, feed, messaging, recruiter. |
| [Tinder](./catalog/tinder/IA.md) | Dating app. Swipe, match, chat, passport. |
| [Grab](./catalog/grab/IA.md) | Super app. Rides, food, payments, deliveries. |
| [Lyft](./catalog/lyft/IA.md) | Ride-hailing. Shared rides, bikes/scooters, Lyft Pink. |
| [Deliveroo](./catalog/deliveroo/IA.md) | Food delivery. Editions dark kitchens, Plus. |
| [Tripadvisor](./catalog/tripadvisor/IA.md) | Travel reviews. Things to do, restaurants, forums. |
| [Expedia](./catalog/expedia/IA.md) | Travel booking. Bundles, One Key rewards. |
| [Yelp](./catalog/yelp/IA.md) | Local business reviews. Photos, check-in, reservations. |

### Design (6)

| Brand | Description |
|-------|-------------|
| [Figma](./catalog/figma/IA.md) | Collaborative design. Multiplayer canvas, components, prototyping. |
| [Canva](./catalog/canva/IA.md) | Template-first design for everyone. Drag-and-drop editor. |
| [Webflow](./catalog/webflow/IA.md) | Visual web builder. CMS, interactions, hosting. |
| [Framer](./catalog/framer/IA.md) | Website builder. Components, CMS, animations. |
| [Sketch](./catalog/sketch/IA.md) | Mac design tool. Symbols, Libraries, Cloud. |
| [InVision](./catalog/invision/IA.md) | Design prototyping. Freehand, DSM, collaboration. |
| [Adobe Creative Cloud](./catalog/adobe-cc/IA.md) | Photoshop, Illustrator, Premiere, Creative Cloud. |

### Health (6)

| Brand | Description |
|-------|-------------|
| [Strava](./catalog/strava/IA.md) | Fitness tracking. GPS activities, segments, social. |
| [MyFitnessPal](./catalog/myfitnesspal/IA.md) | Nutrition tracker. Food diary, barcode scan, macros. |
| [Teladoc](./catalog/teladoc/IA.md) | Virtual healthcare. Video visits, prescriptions, mental health. |
| [Headspace](./catalog/headspace/IA.md) | Meditation, sleep, focus, mindfulness courses. |
| [Calm](./catalog/calm/IA.md) | Meditation, Sleep Stories, music, Daily Calm. |
| [Peloton](./catalog/peloton/IA.md) | Connected fitness. Live classes, leaderboard, metrics. |
| [Noom](./catalog/noom/IA.md) | Weight management. Psychology-based, food logging. |
| [Oura](./catalog/oura/IA.md) | Health tracking ring. Sleep score, readiness, activity. |

### Education (6)

| Brand | Description |
|-------|-------------|
| [Coursera](./catalog/coursera/IA.md) | Online learning. University courses, certificates, degrees. |
| [Duolingo](./catalog/duolingo/IA.md) | Language learning. Gamified lessons, streaks, leaderboards. |
| [ClassDojo](./catalog/classdojo/IA.md) | School communication. Points, portfolios, parent-teacher. |
| [Khan Academy](./catalog/khan-academy/IA.md) | Free education. Mastery learning, Khanmigo AI. |
| [Skillshare](./catalog/skillshare/IA.md) | Creative classes. Projects, workshops. |
| [Udemy](./catalog/udemy/IA.md) | Course marketplace. Instructor-created, ratings. |
| [edX](./catalog/edx/IA.md) | University MOOCs. MicroMasters, professional certificates. |

### Security (1)

| Brand | Description |
|-------|-------------|
| [1Password](./catalog/1password/IA.md) | Password manager. Vaults, secure sharing, Watchtower. |

### IoT (1)

| Brand | Description |
|-------|-------------|
| [Home Assistant](./catalog/home-assistant/IA.md) | Smart home. Device control, automations, dashboards. |

---

## Built with IA.md

These demo apps were scaffolded entirely from IA.md files using AI coding agents, proving the format works end-to-end.

| Demo | IA.md Used | Live Preview |
|------|-----------|--------------|
| Notion Clone | [`catalog/notion/IA.md`](./catalog/notion/IA.md) | [demos/notion-demo](./demos/notion-demo) |
| Spotify Clone | [`catalog/spotify/IA.md`](./catalog/spotify/IA.md) | [demos/spotify-demo](./demos/spotify-demo) |
| Linear Clone | [`catalog/linear/IA.md`](./catalog/linear/IA.md) | [demos/linear-demo](./demos/linear-demo) |
| Reddit Clone | [`catalog/reddit/IA.md`](./catalog/reddit/IA.md) | [demos/reddit-demo](./demos/reddit-demo) |
| Robinhood Clone | [`catalog/robinhood/IA.md`](./catalog/robinhood/IA.md) | [demos/robinhood-demo](./demos/robinhood-demo) |

---

## How It Works

```
┌─────────────┐     ┌──────────┐     ┌─────────────────┐
│  Pick a      │     │  Drop    │     │  AI agent reads  │
│  brand from  │────>│  IA.md   │────>│  IA.md and       │
│  catalog     │     │  into    │     │  scaffolds app   │
│              │     │  project │     │  with correct    │
│              │     │          │     │  structure       │
└─────────────┘     └──────────┘     └─────────────────┘
```

1. **You pick** an IA.md that matches the product you want to build.
2. **You drop** the file into your project root (or reference it in your prompt).
3. **Your AI agent** (Claude Code, Cursor, v0, etc.) reads the IA.md and scaffolds the app with the correct navigation hierarchy, routes, content models, and user flows.

The result: your AI-generated app has the information architecture of a real product instead of a flat, generic layout.

---

## Contributing

1. Fork this repo
2. Add a new directory under `/catalog/your-brand-name/`
3. Create an `IA.md` following the 9-section template structure above
4. Submit a PR

You can also contribute by:
- Improving existing IA.md files with more accurate or detailed patterns
- Adding demo apps built from IA.md files
- Reporting inaccuracies in existing architectures

---

## License

MIT
