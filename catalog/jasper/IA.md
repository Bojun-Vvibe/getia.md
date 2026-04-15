---
brand: Jasper
tagline: AI copilot for enterprise marketing teams.
category: AI & ML
website: https://jasper.ai
---

# Jasper — Information Architecture

## Overview

Jasper is an AI marketing platform designed for enterprise content teams. Unlike general-purpose AI chatbots, Jasper's IA is built around a **brand-aware content production pipeline** — every feature is oriented toward producing on-brand marketing content at scale. The architecture integrates brand voice profiles, knowledge bases (company facts, style guides, product info), campaign management, and multi-channel content creation (blog posts, ads, social media, emails). The IA reflects enterprise marketing workflows: plan campaign → generate content → review → publish, with governance and approval layers. Key structural elements include the Brand Voice engine, Template library, Document editor, Art generation, and Campaign planner.

## Site Map

```
app.jasper.ai
├── / (Dashboard — recent, campaigns, usage)
├── /chat (AI chat with brand context)
├── /documents
│   ├── / (All documents)
│   └── /{doc_id} (Document editor)
├── /campaigns
│   ├── / (Campaign list)
│   └── /{campaign_id} (Campaign workspace)
│       ├── /brief
│       ├── /content
│       └── /analytics
├── /templates
│   ├── / (Template gallery)
│   └── /{template_id} (Template runner)
├── /art (AI image generation)
├── /brand-voice
│   ├── / (Voice profiles)
│   ├── /{voice_id} (Individual voice config)
│   └── /knowledge (Knowledge base)
├── /workflows (Automated content pipelines)
├── /integrations (Connected tools — Google Docs, Notion, etc.)
├── /analytics (Content performance)
├── /admin
│   ├── /team (User management)
│   ├── /billing
│   ├── /security
│   └── /usage
└── /settings
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home, Chat, Documents, Campaigns, Templates, Art, Brand Voice
- **Secondary navigation**: Within Campaigns — tabs for Brief, Content Assets, Analytics
- **Admin navigation**: Separate Admin section in sidebar for team managers
- **Template navigation**: Category-based browsing (Blog, Ads, Social, Email, SEO, etc.)
- **Brand Voice selector**: Persistent dropdown in content creation interfaces — applies voice to all generations
- **Utility navigation**: Top-right — notifications bell, credits/usage indicator, avatar → Settings
- **Mobile**: Responsive but desktop-optimized; sidebar collapses to hamburger

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Document | Rich-text editor document with AI assistance, title, folder, tags | User/Team |
| Campaign | Brief (goals, audience, channels) + linked content assets + analytics | Team-owned |
| Brand Voice | Name, description, tone attributes, example content, rules | Org-level |
| Knowledge Base Entry | Company facts, product specs, style rules — fed as context to all generations | Org-level |
| Template | Predefined form with input fields → structured AI output (e.g., "Facebook Ad Copy") | Jasper-provided or custom |
| Art Image | AI-generated image with prompt, style, mood, brand colors | belongs to User |
| Workflow | Automated multi-step content pipeline (e.g., blog post → social snippets → email) | Org-level |

## User Flows

### Brand Voice-Powered Content Creation

```
Admin configures Brand Voice: uploads style guide, sets tone (witty,... →
  Admin adds Knowledge Base entries: product names, FAQs, competitive positioning →
  Content creator opens Document editor → Brand Voice auto-selected →
  Types or uses `/` command to trigger AI generation with brand context →
  AI generates content matching the brand's tone, using accurate product details →
  Review → publish or export to CMS
```


### Campaign Workflow

```
Marketing lead creates Campaign → fills brief (objective, target audience, key... →
  Jasper suggests content plan based on brief: 3 blog posts, 10 social posts, 2... →
  Team members generate individual assets using Templates or Document editor →
  All assets linked to Campaign → visible in Campaign workspace →
  Analytics track content performance across channels
```


### Template-Based Generation

```
User browses Template gallery → selects "Google Ads Copy" →
  Fills input fields: product name, target keyword, audience, CTA →
  Brand Voice automatically applied → clicks Generate →
  Jasper produces multiple variations → user picks best ones →
  Copy to clipboard or export to Google Ads
```



### AI Chat with Brand Context

```
Open Chat → Brand Voice auto-applied → Ask marketing question → Jasper responds with brand-aware suggestions → Request copy variations → Copy to document or campaign asset
```

### Workflow Automation

```
Create Workflow → Define trigger (e.g., 'new blog post published') → Add steps (generate social posts, create email snippet, produce ad copy) → Brand Voice applied at each step → Review generated assets → Approve and distribute
```

## URL / Route Structure


```
/                                             # Dashboard
/chat                                         # AI chat interface
/documents/{uuid}                             # Document editor
/campaigns/{uuid}                             # Campaign workspace
/campaigns/{uuid}/brief                       # Campaign brief
/templates                                    # Template gallery
/templates/{slug}                             # Template runner
/art                                          # Image generation
/brand-voice/{uuid}                           # Brand voice config
/brand-voice/knowledge                        # Knowledge base
/admin/*                                      # Admin panel
/settings                                     # User settings
/documents                                # Documents list
/documents/new                            # New document
/campaigns                                # Campaigns list
/campaigns/new                            # New campaign
/campaigns/{uuid}/content                 # Campaign content assets
/campaigns/{uuid}/analytics               # Campaign analytics
/templates/{slug}/run                     # Run template
/art/new                                  # New art generation
/art/gallery                              # Generated art gallery
/brand-voice                              # Brand voice list
/brand-voice/new                          # Create brand voice
/brand-voice/knowledge                    # Knowledge base
/brand-voice/knowledge/new                # Add knowledge entry
/workflows                                # Workflow automations
/workflows/new                            # New workflow
/analytics                                # Content analytics
/integrations                             # Connected integrations
/admin/team                               # Team management
/admin/billing                            # Billing
/admin/security                           # Security settings
/admin/usage                              # Usage analytics
```

UUIDs for user-generated content. Templates use slugs. Single-page application.

## Search & Filter

- **Document search**: Full-text search across document titles and content
- **Template search**: Search by name + category filters (Blog, Ads, Social Media, Email, SEO, Product Description, etc.)
- **Campaign filtering**: Filter by status (Active, Draft, Completed), date, owner
- **Knowledge Base search**: Search company knowledge entries by keyword
- **No public content**: All content is private to the organization
- **Tag system**: Documents and assets can be tagged for organization

- **Brand Voice search**: Search and compare brand voice profiles
- **Knowledge Base search**: Full-text search within knowledge entries
- **Art search**: Search generated images by prompt text or style
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + document editor with AI panel + Brand Voice selector |
| Desktop (1024-1280px) | Collapsible sidebar + full editor |
| Tablet (768-1024px) | Sidebar as overlay + simplified editor toolbar |
| Mobile (<768px) | Functional but limited — chat works well, document editor is basic |

- Document editor adapts to available width (max-width container for readability)
- Template forms stack vertically on mobile
- Campaign workspace shows card grid that reflows
- AI art generation adapts image preview to viewport


### Platform-Specific UX
- Brand Voice is the core differentiator — all content generation is filtered through brand tone and style
- Knowledge Base entries provide factual grounding to prevent AI hallucination about company details
- Document editor supports AI commands via "/" shortcuts for inline content generation
- Campaign workspace aggregates all related content assets for cross-channel consistency
- Template gallery covers 50+ marketing content types (ads, blog, social, email, product descriptions)
- Art generation creates brand-consistent images using company color palettes and style preferences
- Workflow automation chains multiple generation steps (e.g., blog → social posts → email)
- Usage analytics track word generation, team activity, and content performance metrics
- Multi-language support enables content creation in 30+ languages with brand voice applied


### Template Categories
```
Blog:          Blog post intro, outline, conclusion, full post
Ads:           Facebook ads, Google ads, LinkedIn ads, headline variations
Social:        Instagram caption, Twitter thread, LinkedIn post, TikTok script
Email:         Subject lines, cold email, newsletter, follow-up
SEO:           Meta descriptions, title tags, FAQ schema, content brief
Product:       Product description, feature-benefit, comparison
Framework:     AIDA, PAS, BAB, Before-After-Bridge
```

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site only; no product access |
| Creator | Generate content, use templates, create documents, limited Brand Voice access |
| Team ($49/seat/mo) | Full Brand Voice, campaigns, collaboration, knowledge base, custom templates |
| Business | Team features + API, workflows, SSO, advanced analytics, custom AI models |
| Enterprise | Business + dedicated CSM, custom training, SLA, audit logs |
| Admin | Manage users, Brand Voice, Knowledge Base, billing, usage limits |
| Editor | Create and edit content; no admin access |
| Viewer | Read-only access to shared content |

- Authentication: Email/password, Google SSO, SAML (Enterprise)
- Word limits: Plans have monthly word generation limits
- Seat-based pricing: Per-user licensing for teams
- Data privacy: SOC 2 compliant; customer data not used for training
- Brand Voice governance: Only Admins can create/modify Brand Voice profiles
