---
brand: Sketch
tagline: Design, prototype, collaborate — all in one Mac app.
category: Content & Media
website: https://www.sketch.com
---

# Information Architecture — Sketch

## Overview
Sketch is a macOS-native vector design tool for UI/UX design, known for pioneering **Symbols** (reusable components), **Libraries** (shared design systems), and the artboard-based workflow that became the standard for digital design. The IA spans the **Mac app** (core design tool), **Sketch Cloud** (collaboration, prototyping, handoff), and the **marketing website**. Sketch differentiates from Figma by being Mac-native (faster performance) and offering a one-time license option alongside subscription.

## Site Map

```
sketch.com
├── Home
├── Product
│   ├── Design (Mac app)
│   │   ├── Vector editing
│   │   ├── Symbols & Components
│   │   ├── Responsive design
│   │   ├── Smart Layout
│   │   └── Color Variables
│   ├── Prototyping
│   │   ├── Artboard linking
│   │   ├── Interactions
│   │   └── Preview
│   ├── Collaboration (Cloud)
│   │   ├── Workspaces
│   │   ├── Real-time editing
│   │   ├── Comments
│   │   ├── Version history
│   │   └── Shared Libraries
│   ├── Developer Handoff
│   │   ├── Inspect mode
│   │   ├── Code snippets (CSS, Swift, etc.)
│   │   ├── Asset export
│   │   └── Measurement tools
│   └── Extensions
│       ├── Plugins
│       └── Integrations (Abstract, Zeplin, etc.)
├── Pricing
│   ├── Standard (per editor / month)
│   ├── Business
│   ├── Mac-only license
│   └── Education
├── Libraries & Resources
│   ├── Design templates
│   ├── UI kits (iOS, Material Design)
│   ├── Icon libraries
│   └── Plugin directory
├── Learn
│   ├── Documentation
│   ├── Tutorials
│   ├── Blog
│   ├── Release notes
│   └── Community (forum)
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Values
├── Support
│   ├── Help center
│   ├── System requirements
│   ├── License management
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── EULA
└── Auth
    ├── Sign in
    └── Try for free

Sketch Cloud (Web)
├── Workspace
│   ├── Projects
│   │   ├── Documents
│   │   └── Shared Libraries
│   ├── Shared with Me
│   ├── Drafts
│   └── Trash
├── Document View
│   ├── Artboards / Pages
│   ├── Prototype preview
│   ├── Inspect (developer)
│   │   ├── Element properties
│   │   ├── CSS / Swift code
│   │   ├── Measurements
│   │   └── Asset download
│   ├── Comments (artboard-level)
│   ├── Version history
│   └── Share settings
├── Settings
│   ├── Workspace settings
│   ├── Members & roles
│   ├── Billing
│   ├── SSO configuration
│   └── Library management
└── Profile
    ├── Account
    ├── Notifications
    └── Devices
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| sketch.com | Top nav | Logo, Product, Pricing, Learn, Extensions, Download, Sign in |
| Product | Dropdown | Design, Collaborate, Prototype, Handoff, Extensions |
| Cloud workspace | Left sidebar | Projects, Shared with Me, Drafts, Trash |
| Document viewer | Top tabs | Canvas view, Prototype, Inspect, Comments, History |
| Mac app | Menu bar + inspector | Layers list (left), Canvas (center), Inspector panel (right) |

**Key pattern**: Sketch's Mac app uses the classic "layers panel + canvas + inspector" three-pane layout that defined modern design tools. Sketch Cloud mirrors this layout for web-based viewing and handoff.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Document | name, pages, artboards, Symbols, version history, shared flag, workspace | — |
| Page | name, artboards, layers | — |
| Artboard | name, size, layers, prototype links, export settings | — |
| Symbol | name, overrides (text, image, nested), Smart Layout, library source | — |
| Library | name, document source, Symbols, Color Variables, Text Styles, Layer Styles, consumers | — |
| Color Variable | name, hex/RGBA, usage count | — |
| Text Style | name, font, size, weight, line height, color | — |
| Comment | author, artboard, position (x,y), text, resolved flag, timestamp | — |
| Prototype Link | source artboard, target artboard, trigger (click/hover), animation | — |
| Plugin | name, author, description, version, download URL | — |

## User Flows

### Design a UI screen
```
Open Sketch → new document → create artboard (iPhone 16, Desktop, etc.) → Draw shapes, add text, insert images → Use Symbols for reusable components (buttons, cards, nav bars) → Apply Smart Layout → components resize responsively → Organize layers → name artboards → save to Cloud
```

### Collaborate & review
```
Upload document to Sketch Cloud (auto-save or manual) → Share link with stakeholders → they view in browser → Stakeholders add comments on specific artboards/positions → Designer addresses feedback → update document → Version history tracks all changes
```

### Developer handoff
```
Developer opens shared document in Sketch Cloud → Switch to Inspect mode → click any element → View properties (dimensions, spacing, colors, typography) → Copy code snippets (CSS, Swift, React Native) → Download assets (PNG, SVG, PDF) at 1x/2x/3x
```

### Design system with Libraries
```
Create a Library document (Symbols, Colors, Text Styles) → Share Library across workspace → Team members use Library Symbols in their documents → Update Symbol in Library → consumers see "Library Update Available" → Accept updates → changes propagate across all documents
```

## URL / Route Structure

```
# sketch.com (marketing)
/                               → Home
/design/                        → Design features
/collaborate/                   → Collaboration features
/prototype/                     → Prototyping features
/developer-handoff/             → Developer handoff
/extensions/                    → Plugins & integrations
/pricing/                       → Pricing
/templates/                     → Design templates
/docs/                          → Documentation
/blog/                          → Blog
/updates/                       → Release notes
/support/                       → Help center

# Sketch Cloud
/workspace/                     → Workspace home
/workspace/{project-id}/        → Project
/s/{share-id}/                  → Shared document view
/s/{share-id}/a/{artboard-id}   → Specific artboard
/s/{share-id}/p/{page-id}       → Prototype preview
/settings/                      → Workspace settings
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Workspace search | Search documents by name across all projects |
| Mac app (Find) | Search layers, Symbols, artboards by name |
| Plugin directory | Search by keyword, category |
| Documentation search | Full-text across all docs |
| Inspect search | Search elements by layer name |
| Symbol search | Find Symbols in Library by name |
| Blog search | By keyword, release version |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full marketing site, Sketch Cloud with full Inspect panel |
| Tablet (768–1023px) | Marketing site responsive, Cloud viewer functional but limited |
| Mobile (<768px) | Marketing site mobile-optimized, Cloud viewer limited (view artboards, comment) |
| Mac app | Fixed layout, responsive Inspector panel, resizable sidebars |
| Sketch Cloud | Responsive viewer — adapts panel layout, but optimized for desktop |

## Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing site, documentation, blog |
| Free Viewer | View shared documents, Inspect, comment (no editor seat needed) |
| Editor | Full Mac app access, create/edit documents, manage Libraries |
| Workspace Admin | Member management, billing, SSO, workspace settings |
| Guest (external) | View + comment on shared documents only |
| Developer (Inspect) | Inspect mode, code snippets, asset downloads — no editing |
| Plugin Developer | Plugin API, development tools, submission to directory |
| Business Plan | SSO, advanced permissions, priority support |
| Internal | Infrastructure, plugin review, community management |

## Plugin Ecosystem

- **1000+ plugins** available via Sketch plugin directory
- **Popular plugins:** Stark (accessibility), Anima (export to code), Content Generator, Craft
- **Plugin development:** JavaScript/CocoaScript API
- **Plugin manager:** Install, update, and manage from Sketch Preferences

## Version History

| Version | Key Feature |
|---------|-------------|
| Sketch 100 (2024) | Variable fonts, enhanced prototyping |
| Sketch 99 | AI-powered features, Smart Layout improvements |
| Sketch 98 | Color variables, style overrides |
| Sketch 97 | Real-time collaboration improvements |
