---
brand: InVision
tagline: Digital product design, workflow, and collaboration.
category: Content & Media
website: https://www.invisionapp.com
---

# Information Architecture — InVision

## Overview
InVision is a digital product design platform that pioneered **clickable prototyping** from static screens and later expanded into collaborative whiteboarding (Freehand) and design system management (DSM). While the company has scaled down its product suite, the IA reflects its historical role as a design collaboration hub — connecting designers, developers, and stakeholders through prototypes, design specs, and real-time collaboration boards. Key products include prototyping, Freehand, and DSM.

## Site Map

```
invisionapp.com
├── Home
├── Product
│   ├── Freehand (collaborative whiteboard)
│   │   ├── Overview
│   │   ├── Templates
│   │   ├── Brainstorming
│   │   ├── Wireframing
│   │   ├── Diagramming
│   │   └── Meetings & workshops
│   ├── Prototyping
│   │   ├── Create prototypes
│   │   ├── Transitions & gestures
│   │   ├── Comments & feedback
│   │   └── User testing
│   ├── Design System Manager (DSM)
│   │   ├── Component library
│   │   ├── Design tokens
│   │   ├── Documentation
│   │   └── Code snippets
│   ├── Inspect (developer handoff)
│   │   ├── Specs & measurements
│   │   ├── Asset export
│   │   └── Code generation
│   └── Integrations
│       ├── Sketch plugin (Craft)
│       ├── Figma
│       ├── Jira
│       ├── Slack
│       └── Confluence
├── Solutions
│   ├── By role (Designers, Product Managers, Developers)
│   ├── By use case (Brainstorming, Wireframing, Prototyping, Handoff)
│   └── Enterprise
├── Pricing
│   ├── Free / Pro / Enterprise
│   └── Feature comparison
├── Templates (Freehand)
│   ├── Brainstorming
│   ├── Wireframe kits
│   ├── Sprint planning
│   ├── User journey maps
│   └── Retrospectives
├── Resources
│   ├── Blog (Inside Design)
│   ├── Design resources & guides
│   ├── Webinars
│   ├── Community
│   └── Design Genome (research)
├── Learn
│   ├── Help center
│   ├── Tutorials
│   └── API documentation
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Security
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── DPA
└── Auth
    ├── Sign in
    └── Sign up free

InVision App (Web)
├── Dashboard
│   ├── All projects
│   ├── Spaces (team folders)
│   ├── Recent
│   ├── Archived
│   └── Trash
├── Prototype Project
│   ├── Screens (uploaded designs)
│   ├── Build mode (add hotspots, links, transitions)
│   ├── Preview / Play mode
│   ├── Comment mode (annotate screens)
│   ├── Inspect mode (developer specs)
│   ├── History (version tracking)
│   └── Share / Invite
├── Freehand Board
│   ├── Infinite canvas
│   ├── Drawing tools (pen, shapes, sticky notes)
│   ├── Text, images, embeds
│   ├── Templates
│   ├── Voting / reactions
│   ├── Timer
│   ├── Cursor presence (real-time)
│   └── Share / Export
├── DSM
│   ├── Components
│   ├── Design tokens (colors, typography, spacing)
│   ├── Documentation pages
│   ├── Code snippets (per component)
│   └── Version history
├── Team Settings
│   ├── Members & roles
│   ├── Billing
│   ├── SSO
│   └── Integrations
└── Profile
    ├── Account
    ├── Notifications
    └── Preferences
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| invisionapp.com | Top nav | Logo, Product, Solutions, Pricing, Templates, Resources, Sign in, Sign up |
| Product | Dropdown | Freehand, Prototyping, DSM, Inspect, Integrations |
| Dashboard | Left sidebar | All, Spaces, Recent, Archived, Trash, Freehand, DSM |
| Prototype | Mode switcher | Build, Preview, Comment, Inspect, History |
| Freehand | Floating toolbar | Drawing tools, shapes, text, sticky notes, connectors |

**Key pattern**: InVision uses a mode-switching paradigm in prototypes — Build (add interactions), Preview (test), Comment (feedback), Inspect (handoff) — each mode shows the same screens with different overlays.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Project (Prototype) | name, type, screens, hotspots, comments, collaborators, space, status | has Chapters, → Voices, belongs to User |
| Screen | image, name, sort order, hotspots, fixed elements, transition effects | belongs to parent entity |
| Hotspot | position (x, y, w, h), target screen, gesture (tap, swipe, hover), transition (slide, fade, etc.) | belongs to parent entity |
| Comment | author, screen, position (x, y), text, status (open/resolved), replies, timestamp | belongs to Post, → Author |
| Freehand Board | name, elements, collaborators, template source, space | has Articles, belongs to User/Team |
| Freehand Element | type (sticky, shape, drawing, text, image, embed), position, style | belongs to parent entity |
| DSM Component | name, description, design preview, code snippet, design tokens, version | used by Pages, has Variants |
| Design Token | category (color, typography, spacing), name, value, platform (web/iOS/Android) | belongs to parent entity |
| Space | name, projects, members, permissions | belongs to parent entity |

## User Flows

### 5a. Create a prototype

```
New Project → upload screen designs (PNG/JPG from Sketch, Figma, etc.) →
  Enter Build mode → draw hotspots on interactive elements →
  Link hotspots to target screens → set transition animation →
  Preview mode → click through prototype on device frame →
  Share link → stakeholders comment directly on screens
```


### 5b. Freehand brainstorming session

```
Create new Freehand → choose template (or blank) → Share link with team → real-time cursors visible →
  Add sticky notes, drawings, diagrams, wireframes →
  Vote on ideas (dot voting) → use timer for timeboxing → Export as PDF or continue iterating
```


### 5c. Design system management (DSM)

```
Set up DSM → add components from design tool → Add design tokens (colors, fonts, spacing) →
  Write documentation for each component → Add code snippets (HTML/CSS, React, Swift) →
  Team references DSM as single source of truth
```


### 5d. Developer handoff (Inspect)

```
Developer opens shared prototype → Inspect mode →
  Click any element → view specs (dimensions, spacing, colors, fonts) →
  Copy generated code (CSS, Swift, Android) →
  Download assets (images, icons in multiple resolutions) →
  Leave comments for questions → designer responds
```


## URL / Route Structure

```
# invisionapp.com (marketing)
/                               → Home
/freehand/                      → Freehand product
/prototyping/                   → Prototyping product
/dsm/                           → Design System Manager
/inspect/                       → Developer handoff
/pricing/                       → Pricing
/templates/                     → Freehand templates
/inside-design/                 → Blog
/resources/                     → Design resources
/learn/                         → Help & tutorials
/enterprise/                    → Enterprise

# InVision App
/d/main/                        → Dashboard
/d/{project-id}/                → Project overview
/console/{project-id}/          → Prototype build mode
/console/{project-id}/play      → Prototype preview
/freehand/{board-id}            → Freehand board
/dsm/{org-slug}/                → DSM library
/dsm/{org-slug}/{component}/    → Component detail
/settings/                      → Team settings
projects.invisionapp.com/d/{documentId}              # Prototype document
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Dashboard search | Search projects by name, filter by space |
| Template search | Search Freehand templates by category, keyword |
| DSM search | Search components, tokens by name |
| Comment filter | Open, resolved, by author, by screen |
| Blog search | By keyword, category (design, product, culture) |
| Help search | Keyword across tutorials and documentation |
| Screen search | Find screens within prototype by name |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full dashboard, prototype builder, Freehand canvas, Inspect panel |
| Tablet (768–1023px) | Freehand usable (touch), prototype viewer functional, limited builder |
| Mobile (<768px) | Prototype preview (playback), Freehand view-only, marketing site responsive |
| Prototype preview | Renders in device frame (iPhone, Android, desktop) with proper viewport |
| Freehand | Touch-optimized for tablets, supports Apple Pencil |

## Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing site, blog, resources, template gallery |
| Free User | Freehand (limited boards), prototype viewing |
| Pro User | Unlimited prototypes, Freehand boards, Inspect, DSM |
| Enterprise | SSO, advanced permissions, audit logs, dedicated support |
| Collaborator (invited) | View + comment on shared prototypes (no seat required) |
| Editor | Full project access — upload, build, comment, manage |
| Viewer | View prototypes, use Inspect, download assets |
| Admin | Team management, billing, SSO, permissions, spaces |
| Developer (Inspect) | Inspect mode, code, assets — no design editing |
| Internal | Platform management, template curation, support |
