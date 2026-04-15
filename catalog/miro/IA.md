---
brand: Miro
tagline: The Visual Workspace for Innovation
category: Productivity
website: https://miro.com
---

# Information Architecture — Miro

## Overview

Miro is an infinite-canvas online whiteboard designed for visual collaboration. The IA is flat by design: Teams own Boards, and each Board is a zoomable, pannable canvas containing sticky notes, shapes, connectors, frames, and embedded content. Templates, real-time cursors, and voting/timer facilitation tools make Miro the digital equivalent of a workshop room wall.

## Site Map

```
miro.com
├── Dashboard
│   ├── Recent Boards
│   ├── Starred Boards
│   ├── Shared with Me
│   └── Created by Me
├── Projects
│   └── [Project] → Boards
├── Templates
│   ├── By Category (Brainstorming, Strategy, UX, Agile, etc.)
│   └── Custom Templates
├── Board (Canvas)
│   ├── Toolbar (left)
│   │   ├── Sticky Notes
│   │   ├── Shapes
│   │   ├── Connectors / Lines
│   │   ├── Text
│   │   ├── Pen / Drawing
│   │   ├── Frames
│   │   ├── Upload / Embed
│   │   └── Apps (plugins)
│   ├── Facilitation Bar (bottom)
│   │   ├── Timer
│   │   ├── Voting
│   │   ├── Music
│   │   └── Attention Management
│   ├── Collaboration Cursors
│   ├── Comments
│   └── Presentation Mode (Frames as slides)
├── Admin
│   ├── Team Settings
│   ├── Members
│   ├── Billing
│   └── Security & Compliance
└── Marketing Site
    ├── Product
    ├── Solutions
    ├── Miroverse (community templates)
    ├── Enterprise
    └── Pricing
```

## Navigation Model

- **Dashboard (home):** Grid/list of boards organized by recency, projects, or starred status; team switcher in left sidebar
- **Board canvas:** Toolbar (left), zoom controls (bottom-right), board menu (top-right for export, settings, activity), bottom facilitation bar during sessions
- **Frames navigation:** When frames exist, a mini-map or frame navigator allows jumping between canvas sections
- **Quick search:** Global ⌘K to find boards, templates, and board content

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Team | name, plan, logo | → Members, Projects, Boards |
| Project | name, description | → Boards |
| Board | name, thumbnail, sharing, created date | → Objects, Frames, Comments |
| Frame | title, dimensions, order | → Objects (contained), Presentation slides |
| Sticky Note | text, color, size, author | → Board canvas position |
| Shape | type, text, color, dimensions | → Connectors |
| Connector | start, end, type (line/arrow/curve) | → Shapes, Stickies |
| Comment | text, position, resolved status | → Board, Thread |
| Template | name, category, preview | → Board (instantiation) |

## User Flows


### Run a Brainstorming Workshop
```
Dashboard → Create Board from Template (e.g., Brainwriting) → Share link → Participants add stickies → Vote → Cluster → Capture outcomes
```

### Build a User Journey Map
```
Board → Add Frame → Use Template or draw swim lanes → Add stickies for each stage → Connect with arrows → Add images/embeds → Share
```

### Present from Board
```
Board → Create Frames for each "slide" → Enter Presentation Mode → Navigate frame-to-frame
```

### Async Feedback
```
Board → Add sticky/shape → Select → Add Comment → Tag collaborator → Collaborator opens, replies, resolves
```

## URL / Route Structure

```
miro.com/app/dashboard/                        # Dashboard
miro.com/app/board/{board_id}/                 # Board canvas
miro.com/app/board/{board_id}/?moveToWidget={id}  # Jump to specific object
miro.com/app/settings/team/{team_id}/          # Team settings
miro.com/miroverse/                            # Community templates
miro.com/templates/                            # Official templates
miro.com/app/board/{board_id}/?moveToWidget={id}  # Jump to specific object
miro.com/app/settings/team/{team_id}/profile/    # Team profile settings
miro.com/app/settings/team/{team_id}/members/    # Team members
miro.com/app/settings/team/{team_id}/billing/    # Billing
miro.com/app/settings/team/{team_id}/security/   # Security
miro.com/app/projects/{project_id}/              # Project view
miro.com/miroverse/{template_slug}/              # Community template detail
miro.com/templates/{category}/                   # Template category
miro.com/pricing/                                # Pricing
miro.com/enterprise/                             # Enterprise info
miro.com/marketplace/                            # App marketplace
miro.com/blog/                                   # Blog
miro.com/developers/                             # Developer platform
miro.com/help/                                   # Help center
```

## Search & Filter

- **Dashboard search:** Find boards by name, creator, or content keywords
- **Board-level search:** Find objects, text, stickies, comments within a single board
- **Filter dashboard:** By project, starred, shared, created by me, date range
- **Miroverse search:** Browse/search community templates by category and keyword
- **Tag/color filtering:** Within a board, filter stickies by color or tag

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full canvas with toolbar, multi-cursor collaboration, zoom/pan |
| Tablet | Touch-optimized canvas, simplified toolbar, pinch-to-zoom |
| Mobile app (iOS/Android) | View-only with limited editing, commenting enabled, board browsing |

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Admin | Security, compliance, domain management, all teams |
| Team Admin | Manage team members, billing, default sharing settings |
| Board Owner | Full board control, sharing, export, delete |
| Editor | Add/modify objects, comment, use facilitation tools |
| Commenter | Add/reply to comments, cannot edit canvas objects |
| Viewer | View only, navigate frames, no editing or commenting |
| Anonymous (link share) | View/edit depending on link permissions, no account required |

## Canvas Object Types

| Object | Description | Key Properties |
|--------|-------------|----------------|
| Sticky Note | Text card with color | text, color, size (S/M/L), author |
| Shape | Geometric form | type (rect/circle/triangle/etc.), text, color, dimensions |
| Text | Free-form text | content, font size, style, alignment |
| Connector | Line between objects | start, end, type (straight/curved/elbow), label |
| Frame | Container for grouping | title, dimensions, grid snap, presentation order |
| Image | Uploaded or embedded | URL, dimensions, alt text |
| Document | Embedded file | PDF, Google Doc, OneDrive, etc. |
| Card | Structured content | title, description, assignee, due date, tags |
| Table | Tabular data | rows, columns, cell content |
| Mind Map | Hierarchical tree | nodes, auto-layout |
| Pen Drawing | Freehand sketch | stroke, color, thickness |
| Comment | Contextual discussion | position, thread, resolved status |

## Facilitation Tools

- **Timer:** Countdown timer visible to all participants (e.g., 5-min brainstorm)
- **Voting:** Participants vote on stickies/shapes; results tallied and ranked
- **Estimation:** Story point or effort estimation with hidden votes and reveal
- **Attention Management:** Focus all participants on a specific area of the board
- **Music:** Background music during workshops (Spotify integration)
- **Talktrack:** Record audio narration over board content for async presentation

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Create sticky note | N |
| Create text | T |
| Draw shape | S |
| Pen tool | P |
| Select tool | V |
| Comment | C |
| Frame | F |
| Zoom to fit | Ctrl/Cmd + 1 |
| Search | Ctrl/Cmd + K |

## Board Templates by Use Case

| Category | Templates |
|----------|-----------|
| Brainstorming | Brainwriting, Mind Map, Affinity Diagram, Crazy 8s |
| Strategy | SWOT, Business Model Canvas, Lean Canvas, OKR Planning |
| UX/Design | User Journey Map, Empathy Map, Wireframe, Persona |
| Agile | Sprint Planning, Retrospective, Kanban, Story Map |
| Project Mgmt | RACI, Timeline, Gantt, Project Kickoff |
| Education | Lesson Plan, Classroom Icebreaker, Group Activity |
| Workshops | Icebreaker, Round Robin, Rose/Thorn/Bud, Fishbone |

## Integration Ecosystem

| Category | Integrations |
|----------|-------------|
| Design | Figma, Adobe XD, Sketch, InVision |
| Project Management | Jira, Asana, Monday, Trello, ClickUp |
| Communication | Slack, Microsoft Teams, Zoom, Google Meet |
| Development | GitHub, GitLab, Confluence, Notion |
| Cloud Storage | Google Drive, Dropbox, OneDrive, Box |
| Data | Airtable, Google Sheets, Smartsheet |
| Custom | REST API, Webhooks, SDK, iframe embeds |

## Pricing

| Plan | Boards | Team Members | Price |
|------|--------|-------------|-------|
| Free | 3 | Unlimited | $0 |
| Starter | Unlimited | Limited | $8/member/mo |
| Business | Unlimited | Unlimited | $16/member/mo |
| Enterprise | Unlimited | Unlimited | Custom |
