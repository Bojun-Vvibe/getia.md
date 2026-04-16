#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// ANSI colors
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  white: '\x1b[37m',
  bgCyan: '\x1b[46m',
  bgMagenta: '\x1b[45m',
};

const BASE_URL = 'https://raw.githubusercontent.com/getia-md/getia-md.github.io/main/catalog';

// Brand catalog
const brands = [
  { name: "Notion", slug: "notion", tagline: "All-in-one workspace. Block editor, databases, wikis.", category: "Productivity" },
  { name: "Obsidian", slug: "obsidian", tagline: "Knowledge base with local-first markdown and graph view.", category: "Productivity" },
  { name: "Linear", slug: "linear", tagline: "Streamlined issue tracking. Keyboard-first, real-time sync.", category: "Productivity" },
  { name: "Jira", slug: "jira", tagline: "Enterprise project management. Scrum, Kanban, roadmaps.", category: "Productivity" },
  { name: "Slack", slug: "slack", tagline: "Team messaging with channels, threads, and integrations.", category: "Productivity" },
  { name: "Discord", slug: "discord", tagline: "Community platform with voice, video, and text channels.", category: "Productivity" },
  { name: "Gmail", slug: "gmail", tagline: "Google email. Inbox categories, search operators, labels.", category: "Productivity" },
  { name: "Superhuman", slug: "superhuman", tagline: "Fastest email. Keyboard-driven, AI triage, split inbox.", category: "Productivity" },
  { name: "Google Calendar", slug: "google-calendar", tagline: "Scheduling with day/week/month views and smart suggestions.", category: "Productivity" },
  { name: "Cal.com", slug: "cal-com", tagline: "Open-source scheduling. Booking pages, team availability.", category: "Productivity" },
  { name: "Figma", slug: "figma", tagline: "Collaborative design. Multiplayer canvas, components, prototyping.", category: "Design" },
  { name: "Canva", slug: "canva", tagline: "Template-first design for everyone. Drag-and-drop editor.", category: "Design" },
  { name: "Airtable", slug: "airtable", tagline: "Spreadsheet-database hybrid. Multi-view, automations.", category: "Productivity" },
  { name: "Dropbox", slug: "dropbox", tagline: "Cloud file storage with sync, sharing, and Paper docs.", category: "Productivity" },
  { name: "Google Drive", slug: "google-drive", tagline: "Cloud storage integrated with Google Workspace.", category: "Productivity" },
  { name: "1Password", slug: "1password", tagline: "Password manager. Vaults, secure sharing, Watchtower.", category: "Security" },
  { name: "GitHub", slug: "github", tagline: "Code hosting. Pull requests, Actions CI/CD, Copilot.", category: "Developer Tools" },
  { name: "GitLab", slug: "gitlab", tagline: "DevSecOps platform. CI/CD, code review, security scanning.", category: "Developer Tools" },
  { name: "Vercel", slug: "vercel", tagline: "Frontend cloud. Deploy, preview, ship web apps.", category: "Developer Tools" },
  { name: "Stripe Dashboard", slug: "stripe-dashboard", tagline: "Payment developer console. API keys, logs, test mode.", category: "Developer Tools" },
  { name: "Supabase", slug: "supabase", tagline: "Open-source Firebase. Postgres, Auth, Storage, Realtime.", category: "Developer Tools" },
  { name: "Postman", slug: "postman", tagline: "API development platform. Collections, testing, documentation.", category: "Developer Tools" },
  { name: "Sentry", slug: "sentry", tagline: "Error monitoring. Stack traces, performance, release tracking.", category: "Developer Tools" },
  { name: "Datadog", slug: "datadog", tagline: "Infrastructure monitoring. Metrics, traces, logs unified.", category: "Developer Tools" },
  { name: "Terraform Cloud", slug: "terraform-cloud", tagline: "Infrastructure as code. Workspaces, runs, state management.", category: "Developer Tools" },
  { name: "Raycast", slug: "raycast", tagline: "Productivity launcher. Extensions, AI, clipboard history.", category: "Developer Tools" },
  { name: "Shopify", slug: "shopify", tagline: "E-commerce platform. Online store, POS, payments.", category: "E-Commerce" },
  { name: "Amazon", slug: "amazon", tagline: "Everything store. Search-driven, Prime, recommendations.", category: "E-Commerce" },
  { name: "Airbnb", slug: "airbnb", tagline: "Travel marketplace. Homes, experiences, map + list search.", category: "Marketplace" },
  { name: "Etsy", slug: "etsy", tagline: "Handmade & vintage marketplace. Shop small, unique goods.", category: "Marketplace" },
  { name: "DoorDash", slug: "doordash", tagline: "Food delivery. Restaurant browse, real-time tracking.", category: "E-Commerce" },
  { name: "Uber Eats", slug: "uber-eats", tagline: "Food ordering. Quick commerce, restaurant discovery.", category: "E-Commerce" },
  { name: "eBay", slug: "ebay", tagline: "Auction & fixed-price marketplace. Bidding, seller ratings.", category: "Marketplace" },
  { name: "Kickstarter", slug: "kickstarter", tagline: "Crowdfunding. Campaign pages, reward tiers, stretch goals.", category: "Marketplace" },
  { name: "StockX", slug: "stockx", tagline: "Sneaker & streetwear marketplace. Bid/ask, authentication.", category: "Marketplace" },
  { name: "Instacart", slug: "instacart", tagline: "Grocery delivery. Store browse, real-time substitutions.", category: "E-Commerce" },
  { name: "YouTube", slug: "youtube", tagline: "Video platform. Creator studio, Shorts, recommendations.", category: "Media" },
  { name: "Netflix", slug: "netflix", tagline: "Streaming. Profiles, continue watching, personalized rows.", category: "Media" },
  { name: "Spotify", slug: "spotify", tagline: "Music streaming. Playlists, Discover Weekly, Connect.", category: "Media" },
  { name: "Medium", slug: "medium", tagline: "Writing platform. Clean reading, publications, claps.", category: "Media" },
  { name: "Substack", slug: "substack", tagline: "Newsletter platform. Subscriber-first, paid subscriptions.", category: "Media" },
  { name: "Wikipedia", slug: "wikipedia", tagline: "Free encyclopedia. Collaborative editing, citations, infoboxes.", category: "Media" },
  { name: "Kindle", slug: "kindle", tagline: "E-reading. Library, highlights, synced progress.", category: "Media" },
  { name: "Apple Podcasts", slug: "apple-podcasts", tagline: "Podcast directory. Subscribe, chapters, transcripts.", category: "Media" },
  { name: "Twitch", slug: "twitch", tagline: "Live streaming. Chat, subscriptions, raids, clips.", category: "Media" },
  { name: "TikTok", slug: "tiktok", tagline: "Short video. For You feed, duets, sounds, effects.", category: "Media" },
  { name: "Twitter / X", slug: "twitter", tagline: "Microblogging. Timeline, threads, Spaces, Communities.", category: "Social" },
  { name: "Reddit", slug: "reddit", tagline: "Community forums. Subreddits, voting, nested comments.", category: "Social" },
  { name: "Instagram", slug: "instagram", tagline: "Photo & video sharing. Feed, Stories, Reels, DMs.", category: "Social" },
  { name: "WhatsApp", slug: "whatsapp", tagline: "End-to-end encrypted messaging. Groups, calls, Status.", category: "Social" },
  { name: "Telegram", slug: "telegram", tagline: "Cloud messaging. Channels, bots, file sharing, stickers.", category: "Social" },
  { name: "Threads", slug: "threads", tagline: "Text-based social by Meta. Conversations, reposts.", category: "Social" },
  { name: "Stack Overflow", slug: "stack-overflow", tagline: "Developer Q&A. Voting, accepted answers, reputation.", category: "Social" },
  { name: "Mastodon", slug: "mastodon", tagline: "Decentralized social. Federated servers, toots, boosts.", category: "Social" },
  { name: "Robinhood", slug: "robinhood", tagline: "Commission-free trading. Simplicity-first, fractional shares.", category: "Fintech" },
  { name: "Coinbase", slug: "coinbase", tagline: "Crypto exchange. Buy, sell, stake, wallet, NFTs.", category: "Fintech" },
  { name: "Revolut", slug: "revolut", tagline: "Digital banking. Multi-currency, crypto, budgeting.", category: "Fintech" },
  { name: "Wise", slug: "wise", tagline: "International money transfer. Real exchange rate, multi-currency.", category: "Fintech" },
  { name: "Stripe", slug: "stripe", tagline: "Payment infrastructure. APIs, checkout, billing, Connect.", category: "Fintech" },
  { name: "Square", slug: "square", tagline: "POS & payments. In-person, online, invoices, banking.", category: "Fintech" },
  { name: "Lemonade", slug: "lemonade", tagline: "AI-powered insurance. Instant quotes, claims via chat.", category: "Fintech" },
  { name: "Plaid", slug: "plaid", tagline: "Financial data API. Bank linking, transactions, identity.", category: "Fintech" },
  { name: "Strava", slug: "strava", tagline: "Fitness tracking. GPS activities, segments, social.", category: "Health" },
  { name: "MyFitnessPal", slug: "myfitnesspal", tagline: "Nutrition tracker. Food diary, barcode scan, macros.", category: "Health" },
  { name: "Teladoc", slug: "teladoc", tagline: "Virtual healthcare. Video visits, prescriptions, mental health.", category: "Health" },
  { name: "Coursera", slug: "coursera", tagline: "Online learning. University courses, certificates, degrees.", category: "Education" },
  { name: "Duolingo", slug: "duolingo", tagline: "Language learning. Gamified lessons, streaks, leaderboards.", category: "Education" },
  { name: "BambooHR", slug: "bamboohr", tagline: "HR platform. Employee directory, time-off, onboarding.", category: "Business" },
  { name: "Gusto", slug: "gusto", tagline: "Payroll & HR. Payroll runs, benefits, hiring.", category: "Business" },
  { name: "ClassDojo", slug: "classdojo", tagline: "School communication. Points, portfolios, parent-teacher.", category: "Education" },
  { name: "Uber", slug: "uber", tagline: "Ride-hailing. Real-time map, driver matching, surge pricing.", category: "Lifestyle" },
  { name: "Booking.com", slug: "booking-com", tagline: "Travel booking. Hotels, flights, map search, reviews.", category: "Lifestyle" },
  { name: "Google Maps", slug: "google-maps", tagline: "Maps & navigation. Places, reviews, Street View, transit.", category: "Lifestyle" },
  { name: "Zillow", slug: "zillow", tagline: "Real estate. Listings, Zestimate, map search, agent finder.", category: "Lifestyle" },
  { name: "OpenTable", slug: "opentable", tagline: "Restaurant reservations. Table booking, reviews, rewards.", category: "Lifestyle" },
  { name: "Eventbrite", slug: "eventbrite", tagline: "Event ticketing. Discovery, registration, check-in.", category: "Lifestyle" },
  { name: "LinkedIn", slug: "linkedin", tagline: "Professional network. Jobs, feed, messaging, recruiter.", category: "Lifestyle" },
  { name: "Tinder", slug: "tinder", tagline: "Dating app. Swipe, match, chat, passport.", category: "Lifestyle" },
  { name: "Grab", slug: "grab", tagline: "Super app. Rides, food, payments, deliveries.", category: "Lifestyle" },
  { name: "Home Assistant", slug: "home-assistant", tagline: "Smart home. Device control, automations, dashboards.", category: "IoT" },
  { name: "ChatGPT", slug: "chatgpt", tagline: "AI chatbot. GPTs, Canvas, memory, plugins.", category: "AI" },
  { name: "Claude", slug: "claude", tagline: "Anthropic AI. Projects, Artifacts, long context.", category: "AI" },
  { name: "Perplexity", slug: "perplexity", tagline: "AI search engine. Citations, Focus modes, Pro Search.", category: "AI" },
  { name: "Midjourney", slug: "midjourney", tagline: "AI image generation. /imagine, variations, upscale.", category: "AI" },
  { name: "Hugging Face", slug: "hugging-face", tagline: "ML model hub. Spaces, datasets, inference API.", category: "AI" },
  { name: "Replicate", slug: "replicate", tagline: "Run ML models via API. Model marketplace, predictions.", category: "AI" },
  { name: "Runway", slug: "runway", tagline: "AI video generation. Gen-2, motion brush, green screen.", category: "AI" },
  { name: "Jasper", slug: "jasper", tagline: "AI marketing content. Brand voice, campaigns, templates.", category: "AI" },
  { name: "Cursor", slug: "cursor", tagline: "AI code editor. Cmd+K, Composer, Tab completion.", category: "AI" },
  { name: "v0", slug: "v0", tagline: "AI UI generator by Vercel. Prompt to React components.", category: "AI" },
  { name: "Anthropic Console", slug: "anthropic-console", tagline: "API playground, Workbench, usage, billing.", category: "AI" },
  { name: "Google AI Studio", slug: "google-ai-studio", tagline: "Gemini API playground, prompts, tuning.", category: "AI" },
  { name: "Stability AI", slug: "stability-ai", tagline: "Stable Diffusion, DreamStudio, image generation.", category: "AI" },
  { name: "ElevenLabs", slug: "elevenlabs", tagline: "AI voice synthesis, voice cloning, dubbing.", category: "AI" },
  { name: "Descript", slug: "descript", tagline: "AI video/audio editor. Transcript-based editing.", category: "AI" },
  { name: "Netlify", slug: "netlify", tagline: "JAMstack hosting. Deploy previews, forms, functions.", category: "Developer Tools" },
  { name: "Cloudflare", slug: "cloudflare", tagline: "CDN, Workers, Pages, R2, D1, Zero Trust.", category: "Developer Tools" },
  { name: "Docker Hub", slug: "docker-hub", tagline: "Container registry. Official images, automated builds.", category: "Developer Tools" },
  { name: "npm", slug: "npm", tagline: "Node package registry. Package pages, search, stats.", category: "Developer Tools" },
  { name: "PlanetScale", slug: "planetscale", tagline: "Serverless MySQL. Branching, deploy requests.", category: "Developer Tools" },
  { name: "Neon", slug: "neon", tagline: "Serverless Postgres. Branching, autoscaling.", category: "Developer Tools" },
  { name: "Railway", slug: "railway", tagline: "Deploy anything. Project canvas, logs, metrics.", category: "Developer Tools" },
  { name: "Render", slug: "render", tagline: "Cloud hosting. Blueprints, auto-deploy, managed DB.", category: "Developer Tools" },
  { name: "Fly.io", slug: "fly-io", tagline: "Edge compute. Machines API, global deployment.", category: "Developer Tools" },
  { name: "CircleCI", slug: "circleci", tagline: "CI/CD pipelines. Orbs, insights, parallelism.", category: "Developer Tools" },
  { name: "Grafana", slug: "grafana", tagline: "Dashboards. Prometheus, Loki, alerting, plugins.", category: "Developer Tools" },
  { name: "LaunchDarkly", slug: "launchdarkly", tagline: "Feature flags. Targeting, experiments, rollouts.", category: "Developer Tools" },
  { name: "Prisma", slug: "prisma", tagline: "ORM. Schema, migrations, Prisma Studio.", category: "Developer Tools" },
  { name: "Retool", slug: "retool", tagline: "Internal tools builder. Drag-and-drop, queries.", category: "Developer Tools" },
  { name: "Expo", slug: "expo", tagline: "React Native framework. EAS Build, OTA updates.", category: "Developer Tools" },
  { name: "Asana", slug: "asana", tagline: "Work management. My Tasks, Timeline, Portfolios, Goals.", category: "Productivity" },
  { name: "Monday.com", slug: "monday", tagline: "Work OS. Colorful boards, automations, dashboards.", category: "Productivity" },
  { name: "ClickUp", slug: "clickup", tagline: "All-in-one productivity. Spaces/Folders/Lists hierarchy.", category: "Productivity" },
  { name: "Trello", slug: "trello", tagline: "Kanban boards. Power-Ups, Butler automation.", category: "Productivity" },
  { name: "Todoist", slug: "todoist", tagline: "Task manager. Natural language input, Karma, filters.", category: "Productivity" },
  { name: "Miro", slug: "miro", tagline: "Online whiteboard. Templates, sticky notes, real-time.", category: "Productivity" },
  { name: "Loom", slug: "loom", tagline: "Async video messaging. Screen recording, viewer insights.", category: "Productivity" },
  { name: "Calendly", slug: "calendly", tagline: "Scheduling. Event types, round-robin, workflows.", category: "Productivity" },
  { name: "Zapier", slug: "zapier", tagline: "Automation. Zaps, 6000+ app integrations.", category: "Productivity" },
  { name: "Make", slug: "make", tagline: "Visual automation. Scenarios, modules, data mapping.", category: "Productivity" },
  { name: "Coda", slug: "coda", tagline: "Doc-powered apps. Formulas, Packs, publishing.", category: "Productivity" },
  { name: "Bear", slug: "bear", tagline: "Markdown notes. Tags, nested tags, focus mode.", category: "Productivity" },
  { name: "Things 3", slug: "things", tagline: "GTD task manager. Areas, Projects, Today view.", category: "Productivity" },
  { name: "Craft", slug: "craft", tagline: "Beautiful docs. Blocks, cards, AI assistant.", category: "Productivity" },
  { name: "Basecamp", slug: "basecamp", tagline: "Project management. Hill Charts, Campfire, Lineup.", category: "Productivity" },
  { name: "Intercom", slug: "intercom", tagline: "Customer messaging. Fin AI, inbox, product tours.", category: "Business" },
  { name: "HubSpot", slug: "hubspot", tagline: "CRM platform. Marketing, Sales, Service, CMS Hubs.", category: "Business" },
  { name: "Salesforce", slug: "salesforce", tagline: "Enterprise CRM. Lightning, AppExchange, Einstein AI.", category: "Business" },
  { name: "Mailchimp", slug: "mailchimp", tagline: "Email marketing. Audiences, automations, landing pages.", category: "Business" },
  { name: "Zendesk", slug: "zendesk", tagline: "Customer service. Ticketing, Guide, Chat, Talk.", category: "Business" },
  { name: "Freshdesk", slug: "freshdesk", tagline: "Helpdesk. Freddy AI, ticket dispatch, SLA.", category: "Business" },
  { name: "Segment", slug: "segment", tagline: "Customer data platform. Sources, destinations, protocols.", category: "Business" },
  { name: "Amplitude", slug: "amplitude", tagline: "Product analytics. Behavioral cohorts, experiments.", category: "Business" },
  { name: "Mixpanel", slug: "mixpanel", tagline: "Event analytics. Funnels, flows, retention charts.", category: "Business" },
  { name: "Hotjar", slug: "hotjar", tagline: "Heatmaps, session recordings, surveys, feedback.", category: "Business" },
  { name: "Twilio", slug: "twilio", tagline: "Communications API. SMS, Voice, Video, Flex.", category: "Business" },
  { name: "SendGrid", slug: "sendgrid", tagline: "Transactional email API. Templates, analytics.", category: "Business" },
  { name: "Braze", slug: "braze", tagline: "Customer engagement. Canvas flows, push/email/in-app.", category: "Business" },
  { name: "Looker", slug: "looker", tagline: "BI platform. LookML, Explores, embedded analytics.", category: "Business" },
  { name: "Tableau", slug: "tableau", tagline: "Data visualization. Worksheets, stories, Tableau Public.", category: "Business" },
  { name: "Klarna", slug: "klarna", tagline: "Buy now pay later. 4 installments, Klarna app.", category: "Fintech" },
  { name: "Affirm", slug: "affirm", tagline: "BNPL. Transparent pricing, no late fees.", category: "Fintech" },
  { name: "Venmo", slug: "venmo", tagline: "P2P payments. Social feed, Venmo card, business.", category: "Fintech" },
  { name: "Cash App", slug: "cashapp", tagline: "P2P, Bitcoin, Cash Card, Boost rewards.", category: "Fintech" },
  { name: "Wealthfront", slug: "wealthfront", tagline: "Robo-advisor. Automated investing, tax-loss harvesting.", category: "Fintech" },
  { name: "Betterment", slug: "betterment", tagline: "Goal-based investing. Robo-advisor, tax coordination.", category: "Fintech" },
  { name: "Mercari", slug: "mercari", tagline: "C2C marketplace. Shipping labels, authentication.", category: "Marketplace" },
  { name: "Depop", slug: "depop", tagline: "Gen-Z fashion resale. Social shopping, explore.", category: "Marketplace" },
  { name: "Poshmark", slug: "poshmark", tagline: "Social commerce. Posh Parties, offers, bundles.", category: "Marketplace" },
  { name: "Fiverr", slug: "fiverr", tagline: "Freelance marketplace. Gigs, packages, Fiverr Pro.", category: "Marketplace" },
  { name: "Upwork", slug: "upwork", tagline: "Freelance platform. Proposals, contracts, Connects.", category: "Marketplace" },
  { name: "Gumroad", slug: "gumroad", tagline: "Sell digital products. Simple checkout, subscriptions.", category: "E-Commerce" },
  { name: "Lemon Squeezy", slug: "lemonsqueezy", tagline: "Digital commerce. Managed tax, subscriptions.", category: "E-Commerce" },
  { name: "WooCommerce", slug: "woocommerce", tagline: "WordPress e-commerce. Extensions, self-hosted.", category: "E-Commerce" },
  { name: "BigCommerce", slug: "bigcommerce", tagline: "Enterprise e-commerce. Headless, multi-storefront.", category: "E-Commerce" },
  { name: "Vimeo", slug: "vimeo", tagline: "Professional video hosting. OTT, live streaming.", category: "Media" },
  { name: "SoundCloud", slug: "soundcloud", tagline: "Independent music. Waveform player, reposts.", category: "Media" },
  { name: "Audible", slug: "audible", tagline: "Audiobooks. Credits, Whispersync, Plus catalog.", category: "Media" },
  { name: "Pocket", slug: "pocket", tagline: "Read-it-later. Tags, highlights, recommendations.", category: "Media" },
  { name: "Feedly", slug: "feedly", tagline: "RSS reader. AI feeds, boards, Leo AI assistant.", category: "Media" },
  { name: "Flipboard", slug: "flipboard", tagline: "Magazine-style news. Flip animation, Storyboards.", category: "Media" },
  { name: "Dev.to", slug: "devto", tagline: "Developer community. Articles, listings, Forem.", category: "Media" },
  { name: "Hashnode", slug: "hashnode", tagline: "Developer blogging. Custom domain, series, newsletter.", category: "Media" },
  { name: "Ghost", slug: "ghost", tagline: "Publishing platform. Memberships, newsletters, open-source.", category: "Media" },
  { name: "WordPress", slug: "wordpress", tagline: "CMS. Themes, plugins, Gutenberg editor.", category: "Media" },
  { name: "Webflow", slug: "webflow", tagline: "Visual web builder. CMS, interactions, hosting.", category: "Design" },
  { name: "Framer", slug: "framer", tagline: "Website builder. Components, CMS, animations.", category: "Design" },
  { name: "Sketch", slug: "sketch", tagline: "Mac design tool. Symbols, Libraries, Cloud.", category: "Design" },
  { name: "InVision", slug: "invision", tagline: "Design prototyping. Freehand, DSM, collaboration.", category: "Design" },
  { name: "Adobe Creative Cloud", slug: "adobe-cc", tagline: "Photoshop, Illustrator, Premiere, Creative Cloud.", category: "Design" },
  { name: "Signal", slug: "signal", tagline: "Encrypted messaging. Disappearing messages, sealed sender.", category: "Social" },
  { name: "Snapchat", slug: "snapchat", tagline: "Ephemeral stories. Snap Map, Spotlight, AR lenses.", category: "Social" },
  { name: "Pinterest", slug: "pinterest", tagline: "Visual discovery. Pins, boards, shopping, Lens.", category: "Social" },
  { name: "Clubhouse", slug: "clubhouse", tagline: "Drop-in audio. Rooms, clubs, replays.", category: "Social" },
  { name: "BeReal", slug: "bereal", tagline: "Daily photo. Dual camera, 2-min window, RealMojis.", category: "Social" },
  { name: "Bluesky", slug: "bluesky", tagline: "Decentralized social. AT Protocol, custom feeds.", category: "Social" },
  { name: "Quora", slug: "quora", tagline: "Q&A platform. Spaces, Poe AI, monetization.", category: "Social" },
  { name: "Hacker News", slug: "hacker-news", tagline: "Tech news. Minimal UI, karma, Show HN.", category: "Social" },
  { name: "Product Hunt", slug: "producthunt", tagline: "Product launches. Upvotes, daily leaderboard.", category: "Social" },
  { name: "Dribbble", slug: "dribbble", tagline: "Design showcase. Shots, rebounds, hiring.", category: "Social" },
  { name: "Behance", slug: "behance", tagline: "Creative portfolio. Projects, moodboards, Adobe.", category: "Social" },
  { name: "Zoom", slug: "zoom", tagline: "Video meetings. Rooms, Webinars, Phone, Team Chat.", category: "Productivity" },
  { name: "Microsoft Teams", slug: "ms-teams", tagline: "Chat, channels, meetings, apps, M365 integration.", category: "Productivity" },
  { name: "Google Meet", slug: "google-meet", tagline: "Video calls. Companion mode, hand raise, captions.", category: "Productivity" },
  { name: "Gather", slug: "gather", tagline: "Virtual office. Spatial video, customizable maps.", category: "Productivity" },
  { name: "Headspace", slug: "headspace", tagline: "Meditation, sleep, focus, mindfulness courses.", category: "Health" },
  { name: "Calm", slug: "calm", tagline: "Meditation, Sleep Stories, music, Daily Calm.", category: "Health" },
  { name: "Peloton", slug: "peloton", tagline: "Connected fitness. Live classes, leaderboard, metrics.", category: "Health" },
  { name: "Noom", slug: "noom", tagline: "Weight management. Psychology-based, food logging.", category: "Health" },
  { name: "Oura", slug: "oura", tagline: "Health tracking ring. Sleep score, readiness, activity.", category: "Health" },
  { name: "Khan Academy", slug: "khan-academy", tagline: "Free education. Mastery learning, Khanmigo AI.", category: "Education" },
  { name: "Skillshare", slug: "skillshare", tagline: "Creative classes. Projects, workshops.", category: "Education" },
  { name: "Udemy", slug: "udemy", tagline: "Course marketplace. Instructor-created, ratings.", category: "Education" },
  { name: "edX", slug: "edx", tagline: "University MOOCs. MicroMasters, professional certificates.", category: "Education" },
  { name: "Notion Calendar", slug: "notion-calendar", tagline: "Calendar + Notion integration, scheduling links.", category: "Productivity" },
  { name: "Lyft", slug: "lyft", tagline: "Ride-hailing. Shared rides, bikes/scooters, Lyft Pink.", category: "Lifestyle" },
  { name: "Deliveroo", slug: "deliveroo", tagline: "Food delivery. Editions dark kitchens, Plus.", category: "Lifestyle" },
  { name: "Tripadvisor", slug: "tripadvisor", tagline: "Travel reviews. Things to do, restaurants, forums.", category: "Lifestyle" },
  { name: "Expedia", slug: "expedia", tagline: "Travel booking. Bundles, One Key rewards.", category: "Lifestyle" },
  { name: "Yelp", slug: "yelp", tagline: "Local business reviews. Photos, check-in, reservations.", category: "Lifestyle" },
];

// ============================================
// Helpers
// ============================================

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function findBrand(query) {
  const q = query.toLowerCase();
  return brands.find(b => b.slug === q || b.name.toLowerCase() === q);
}

function getCategories() {
  const cats = {};
  brands.forEach(b => {
    if (!cats[b.category]) cats[b.category] = [];
    cats[b.category].push(b);
  });
  return cats;
}

// ============================================
// Commands
// ============================================

function showHelp() {
  console.log(`
${c.bold}${c.cyan}getia${c.reset} — Download Information Architecture blueprints

${c.bold}USAGE${c.reset}
  getia ${c.green}<slug>${c.reset}              Download IA.md for a brand
  getia ${c.green}<slug>${c.reset} --info        Show brand info (no download)
  getia --list                List all brands by category
  getia --search ${c.green}"query"${c.reset}     Search brands by name or tagline
  getia --help                Show this help

${c.bold}EXAMPLES${c.reset}
  ${c.dim}$ getia notion${c.reset}              Download Notion's IA.md
  ${c.dim}$ getia notion --info${c.reset}        Show Notion info
  ${c.dim}$ getia --search "video"${c.reset}     Find video-related brands
  ${c.dim}$ getia --list${c.reset}               Browse all ${brands.length} brands
`);
}

function showList() {
  const cats = getCategories();
  const sortedCats = Object.entries(cats).sort((a, b) => b[1].length - a[1].length);

  console.log(`\n${c.bold}${c.cyan}getia${c.reset} — ${brands.length} brands available\n`);

  sortedCats.forEach(([cat, items]) => {
    console.log(`${c.bold}${c.magenta}${cat}${c.reset} ${c.dim}(${items.length})${c.reset}`);
    items.forEach(b => {
      console.log(`  ${c.green}${b.slug.padEnd(20)}${c.reset} ${c.white}${b.name}${c.reset} ${c.dim}— ${b.tagline}${c.reset}`);
    });
    console.log();
  });
}

function showSearch(query) {
  const q = query.toLowerCase();
  const results = brands.filter(b =>
    b.name.toLowerCase().includes(q) ||
    b.tagline.toLowerCase().includes(q) ||
    b.slug.includes(q)
  );

  if (results.length === 0) {
    console.log(`\n${c.red}No results for "${query}"${c.reset}\n`);
    process.exit(1);
  }

  console.log(`\n${c.bold}${c.cyan}Search results for "${query}"${c.reset} ${c.dim}(${results.length} found)${c.reset}\n`);
  results.forEach(b => {
    console.log(`  ${c.green}${b.slug.padEnd(20)}${c.reset} ${c.white}${b.name}${c.reset} ${c.dim}[${b.category}]${c.reset}`);
    console.log(`  ${c.dim}${''.padEnd(20)} ${b.tagline}${c.reset}`);
  });
  console.log();
}

function showInfo(brand) {
  console.log(`
${c.bold}${c.cyan}${brand.name}${c.reset}
${c.dim}────────────────────────────${c.reset}
  ${c.bold}Slug:${c.reset}     ${c.green}${brand.slug}${c.reset}
  ${c.bold}Category:${c.reset} ${c.magenta}${brand.category}${c.reset}
  ${c.bold}Tagline:${c.reset}  ${brand.tagline}
  ${c.bold}Source:${c.reset}   ${c.dim}${BASE_URL}/${brand.slug}/IA.md${c.reset}
`);
}

async function downloadIA(brand) {
  const url = `${BASE_URL}/${brand.slug}/IA.md`;
  const dest = path.join(process.cwd(), 'IA.md');

  console.log(`\n${c.cyan}Downloading${c.reset} ${c.bold}${brand.name}${c.reset} IA.md...`);
  console.log(`${c.dim}${url}${c.reset}\n`);

  try {
    const data = await download(url);
    fs.writeFileSync(dest, data);
    const lines = data.split('\n').length;
    const size = Buffer.byteLength(data);
    console.log(`${c.green}Done!${c.reset} Saved to ${c.bold}${dest}${c.reset}`);
    console.log(`${c.dim}${lines} lines, ${size} bytes${c.reset}\n`);
  } catch (err) {
    console.error(`${c.red}Error:${c.reset} Failed to download — ${err.message}`);
    console.error(`${c.dim}URL: ${url}${c.reset}\n`);
    process.exit(1);
  }
}

// ============================================
// Main
// ============================================

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

if (args.includes('--list') || args.includes('-l')) {
  showList();
  process.exit(0);
}

const searchIdx = args.indexOf('--search');
if (searchIdx === -1 && args.indexOf('-s') !== -1) {
  const idx = args.indexOf('-s');
  const query = args[idx + 1];
  if (!query) {
    console.error(`${c.red}Error:${c.reset} --search requires a query argument`);
    process.exit(1);
  }
  showSearch(query);
  process.exit(0);
}
if (searchIdx !== -1) {
  const query = args[searchIdx + 1];
  if (!query) {
    console.error(`${c.red}Error:${c.reset} --search requires a query argument`);
    process.exit(1);
  }
  showSearch(query);
  process.exit(0);
}

// Brand slug command
const slug = args[0];
const brand = findBrand(slug);

if (!brand) {
  console.error(`\n${c.red}Error:${c.reset} Unknown brand "${slug}"`);
  console.error(`${c.dim}Run ${c.reset}getia --list${c.dim} to see available brands or ${c.reset}getia --search "${slug}"${c.dim} to search.${c.reset}\n`);
  process.exit(1);
}

if (args.includes('--info') || args.includes('-i')) {
  showInfo(brand);
  process.exit(0);
}

downloadIA(brand);
