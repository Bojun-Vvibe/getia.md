# getIA.md 重构计划：品类 → 品牌

## 核心变化

- 从 50 个品类模板 → 80 个品牌 IA 拆解
- 目录结构：`catalog/{brand-name}/IA.md`（扁平）
- 每个 IA.md 顶部加 frontmatter：品牌名、一句话定位、品类 tag
- README 改成品牌列表风格（像 getdesign.md）

## IA.md 格式规范

```markdown
---
brand: Notion
tagline: "All-in-one workspace. Block-based editor, databases, wikis."
category: Productivity
website: https://notion.so
---

# Notion — Information Architecture

## Overview
...（其余结构不变）
```

## 品牌清单（80 个）

### Batch 1: SaaS & Productivity（16 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 1 | Notion | Productivity | note-taking |
| 2 | Obsidian | Productivity | note-taking |
| 3 | Linear | Project Management | project-management |
| 4 | Jira | Project Management | project-management |
| 5 | Slack | Messaging | messaging-app |
| 6 | Discord | Messaging | messaging-app |
| 7 | Gmail | Email | email-client |
| 8 | Superhuman | Email | email-client |
| 9 | Google Calendar | Calendar | calendar-app |
| 10 | Cal.com | Calendar | calendar-app |
| 11 | Figma | Design | design-tool |
| 12 | Canva | Design | design-tool |
| 13 | Airtable | Database | spreadsheet-database |
| 14 | Dropbox | File Storage | file-storage |
| 15 | Google Drive | File Storage | file-storage |
| 16 | 1Password | Security | (new) |

### Batch 2: Developer Tools（10 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 17 | GitHub | Code Repository | code-repository |
| 18 | GitLab | Code Repository | code-repository |
| 19 | Vercel | Developer Platform | developer-platform |
| 20 | Stripe Dashboard | Payment / DevTools | payment-gateway + developer-platform |
| 21 | Supabase | Developer Platform | developer-platform |
| 22 | Postman | API Tool | developer-platform |
| 23 | Sentry | Monitoring | analytics-dashboard |
| 24 | Datadog | Monitoring | analytics-dashboard |
| 25 | Terraform Cloud | Infrastructure | (new) |
| 26 | Raycast | Launcher / CLI | cli-dashboard |

### Batch 3: E-Commerce & Marketplace（10 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 27 | Shopify | E-Commerce | e-commerce |
| 28 | Amazon | E-Commerce | e-commerce |
| 29 | Airbnb | Marketplace | marketplace |
| 30 | Etsy | Marketplace | marketplace |
| 31 | DoorDash | Food Delivery | food-delivery |
| 32 | Uber Eats | Food Delivery | food-delivery |
| 33 | eBay | Auction | auction-platform |
| 34 | Kickstarter | Crowdfunding | crowdfunding |
| 35 | StockX | Marketplace | marketplace |
| 36 | Instacart | Grocery Delivery | food-delivery |

### Batch 4: Content & Media（10 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 37 | YouTube | Video | video-streaming |
| 38 | Netflix | Video | video-streaming |
| 39 | Spotify | Music | music-streaming |
| 40 | Medium | Blog | blog-magazine |
| 41 | Substack | Newsletter | blog-magazine |
| 42 | Wikipedia | Wiki | wiki-knowledge-base |
| 43 | Kindle | Reading | ebook-reading |
| 44 | Apple Podcasts | Podcast | podcast-platform |
| 45 | Twitch | Live Streaming | video-streaming |
| 46 | TikTok | Short Video | social-network |

### Batch 5: Social & Community（8 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 47 | Twitter/X | Social | social-network |
| 48 | Reddit | Forum | forum-community |
| 49 | Instagram | Photo Social | photo-sharing |
| 50 | WhatsApp | Messaging | messaging-app |
| 51 | Telegram | Messaging | messaging-app |
| 52 | Threads | Social | social-network |
| 53 | Stack Overflow | Q&A | forum-community |
| 54 | Mastodon | Social (Fediverse) | social-network |

### Batch 6: Finance & Fintech（8 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 55 | Robinhood | Trading | trading-platform |
| 56 | Coinbase | Crypto Exchange | trading-platform |
| 57 | Revolut | Banking | banking-app |
| 58 | Wise | Money Transfer | banking-app |
| 59 | Stripe | Payment Gateway | payment-gateway |
| 60 | Square | POS / Payment | payment-gateway |
| 61 | Lemonade | Insurance | insurance-platform |
| 62 | Plaid | Financial API | developer-platform |

### Batch 7: Health, Education, HR（8 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 63 | Strava | Fitness | health-fitness |
| 64 | MyFitnessPal | Nutrition | health-fitness |
| 65 | Teladoc | Telemedicine | telemedicine |
| 66 | Coursera | Learning | learning-platform |
| 67 | Duolingo | Learning | learning-platform |
| 68 | BambooHR | HR | hr-platform |
| 69 | Gusto | HR / Payroll | hr-platform |
| 70 | ClassDojo | School | school-management |

### Batch 8: Lifestyle & Services（10 个）
| # | Brand | Category Tag | 对标品类模板 |
|---|-------|-------------|------------|
| 71 | Uber | Ride-Hailing | ride-hailing |
| 72 | Booking.com | Travel | travel-booking |
| 73 | Google Maps | Maps / Local | (new) |
| 74 | Zillow | Real Estate | real-estate |
| 75 | OpenTable | Reservation | restaurant-reservation |
| 76 | Eventbrite | Events | event-platform |
| 77 | LinkedIn | Job / Professional | job-board |
| 78 | Tinder | Dating | dating-app |
| 79 | Grab | Super App | mobile-super-app |
| 80 | Home Assistant | IoT / Smart Home | iot-smart-home |

## Session 分工

| Session | Batch | 品牌数 | 基于品类模板 |
|---------|-------|--------|------------|
| **Session A** | Batch 1: SaaS & Productivity | 16 | note-taking, project-management, messaging-app, email-client, calendar-app, design-tool, spreadsheet-database, file-storage |
| **Session B** | Batch 2 + 3: DevTools + E-Commerce | 20 | code-repository, developer-platform, payment-gateway, e-commerce, marketplace, food-delivery, auction-platform, crowdfunding |
| **Session C** | Batch 4 + 5: Content & Social | 18 | video-streaming, music-streaming, blog-magazine, wiki-knowledge-base, ebook-reading, podcast-platform, social-network, forum-community, photo-sharing |
| **Session D** | Batch 6 + 7 + 8: Finance + Health + Lifestyle | 18 | trading-platform, banking-app, payment-gateway, insurance-platform, health-fitness, telemedicine, learning-platform, hr-platform, ride-hailing, travel-booking, real-estate, etc. |
| **Session E (this)** | README 重写 + 旧品类清理 + 最终校验 | — | — |

## 执行步骤

### 每个 Session 做：
1. 读对应的品类模板作为基底
2. 为每个品牌创建 `catalog/{brand}/IA.md`
3. 基于品类模板改写，突出该品牌的独特 IA 特征
4. 加 frontmatter（brand, tagline, category, website）

### Session E（本 session）做：
1. 等所有 batch 完成
2. 删除旧品类目录
3. 重写 README.md（品牌列表风格）
4. 最终校验 80 个文件

## 品牌命名规范（目录名）

- 全小写，kebab-case
- `notion/`, `google-calendar/`, `uber-eats/`, `stack-overflow/`
- 避免 `.com` 后缀，避免 `app` 后缀

## 旧品类模板处理

重构完成后删除旧的 50 个品类目录。品类模板的内容已经融入各品牌 IA 中。
