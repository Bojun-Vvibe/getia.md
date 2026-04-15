---
brand: Figma
tagline: "Collaborative design tool. Multiplayer canvas, components, prototyping, Dev Mode."
category: Design
website: https://figma.com
---

# Figma — Information Architecture

## Overview

Figma is the industry-standard collaborative design tool. The mental model is a **multiplayer infinite canvas** — multiple designers edit simultaneously with live cursors. Key differentiators: browser-based (no install), real-time collaboration, Components with variants and properties, Auto Layout, Dev Mode (developer handoff), FigJam (whiteboard), and a thriving plugin/community ecosystem.

## Site Map

### File Browser

```
├── Home
│   ├── Recent Files
│   ├── Drafts
│   └── Deleted (trash)
├── Team
│   ├── Projects
│   │   ├── Project A → Files
│   │   ├── Project B → Files
│   │   └── + New Project
│   ├── Team Library (shared components/styles)
│   └── Team Settings
├── Community
│   ├── Explore (plugins, widgets, files)
│   ├── Templates
│   └── My Published Resources
├── Notifications
└── Account Settings
```

### Editor (Canvas)

```
├── Toolbar (Top)
│   ├── Figma Menu (hamburger)
│   ├── Move (V) / Scale (K)
│   ├── Frame (F) / Slice
│   ├── Shapes (R, O, L, Polygon, Star, Arrow)
│   ├── Pen (P) / Pencil (⇧P)
│   ├── Text (T)
│   ├── Resources (Components, Plugins, Widgets)
│   ├── Hand (H) / Comment (C)
│   ├── Actions (Play prototype, Share, Dev Mode toggle, Zoom)
│   └── Multiplayer Avatars
├── Left Panel
│   ├── Layers (hierarchical tree)
│   ├── Assets (local + team library components)
│   └── Pages (Page 1, Page 2, + Add)
├── Canvas (Center)
│   ├── Frames / Artboards
│   ├── Rulers + Guides
│   ├── Layout Grids
│   ├── Smart Guides (alignment)
│   ├── Auto Layout visualization
│   └── Comments (pinned on canvas)
├── Right Panel
│   ├── Design Tab
│   │   ├── Alignment + Distribution
│   │   ├── Frame: Auto Layout (direction, spacing, padding, sizing)
│   │   ├── Position: X, Y, W, H, rotation, constraints
│   │   ├── Fill (solid, gradient, image)
│   │   ├── Stroke
│   │   ├── Effects (drop shadow, inner shadow, blur, background blur)
│   │   ├── Typography (font, size, weight, line height, letter spacing)
│   │   ├── Corner Radius (individual corners)
│   │   ├── Opacity + Blend Mode
│   │   └── Export
│   ├── Prototype Tab
│   │   ├── Interactions (trigger → action → destination → animation)
│   │   ├── Flows (starting points)
│   │   ├── Overflow Scrolling
│   │   ├── Device Preview (iPhone, Android, Desktop)
│   │   └── Smart Animate
│   ├── Dev Mode Tab
│   │   ├── Inspect (CSS, iOS, Android code)
│   │   ├── Measurements (click to see spacing)
│   │   ├── Assets (exportable)
│   │   ├── Variables / Design Tokens
│   │   ├── Annotations
│   │   └── VS Code integration (link to code)
│   └── Component Properties (when component selected)
│       ├── Properties (boolean, text, instance swap, variant)
│       ├── Variants grid
│       └── Documentation
└── Bottom Bar
    ├── Zoom level
    ├── Page selector
    └── Mini map
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **File Browser** | Grid of file thumbnails | Recent, projects, teams |
| **Editor Toolbar** | Fixed top | Tools, share, present, dev mode toggle |
| **Left Panel** | Layers / Assets / Pages tabs | Toggle with keyboard shortcuts |
| **Right Panel** | Design / Prototype / Dev Mode tabs | Context-sensitive to selection |
| **⌘/ or ⌘P** | Quick Actions palette | Search actions, components, plugins |
| **Canvas** | Space+drag to pan, scroll to zoom | Infinite 2D canvas |
| **Right-click** | Context menu | Selection-specific actions |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| File | name, thumbnail, pages[], last_modified, version_history[] | belongs to Project |
| Page | name, order, frames[] | belongs to File |
| Frame | name, position, size, auto_layout{}, constraints{}, fills[], strokes[], effects[] | contains Layers |
| Component | name, description, properties[], variants[] | master definition, instances reference |
| Instance | component_ref, overrides{} | instance of Component |
| Style | name, type (color/text/effect/grid) | reusable, applied to elements |
| Variable | name, type (color/number/string/boolean), modes[] | design tokens, collections |
| Comment | body, author, position{x,y}, resolved | pinned on canvas |
| Plugin | name, id, commands[] | extends functionality |
| Branch | name, status (open/merged/archived), file_ref | parallel editing |

### Auto Layout
```
direction: horizontal | vertical | wrap
gap: number (spacing)
padding: top, right, bottom, left (independent)
alignment: top-left → bottom-right (9 positions)
sizing: fixed | hug | fill
min/max width/height
```

## User Flows

### Design a Screen
```
New File → Frame Tool (F) → Select device size → Add shapes/text → Style properties → Add Auto Layout → Create Component → Prototype links → Present
```

### Component System
```
Design element → Right-click → Create Component → Add Variants (property panel) → Publish to Team Library → Teammates drag from Assets panel → Instance with overrides
```

### Dev Handoff
```
Toggle Dev Mode → Developer clicks element → Inspect panel shows CSS/iOS/Android → Redlines auto-appear → Export assets → Copy code snippets
```

### Branching
```
Create Branch → Make changes independently → Request Review → Compare changes → Merge to main file
```

## URL / Route Structure

```
/files/recent              → Recent files
/files/drafts              → Drafts
/files/team/:teamId        → Team files
/files/project/:projectId  → Project files
/design/:fileId            → Editor (design mode)
/design/:fileId?node-id=:nodeId → Deep link to frame
/dev/:fileId               → Editor (dev mode)
/proto/:fileId             → Prototype viewer
/proto/:fileId?node-id=:id&starting-point-node-id=:id → Specific flow
/community                 → Community hub
/community/file/:id        → Community file
/community/plugin/:id      → Plugin detail
/settings                  → Account settings
```

## Search & Filter

| Context | Scope | Filters | Sort |
|---------|-------|---------|------|
| File Browser | File names | Team, Project, Owner | Last Modified, Name |
| Assets Panel | Component names | Library (local/team) | Name, Recently Used |
| Layers | Layer names | Type, Visibility | Tree order |
| Quick Actions (⌘/) | Actions, components, plugins | — | Relevance |
| Community | Files, plugins, widgets | Category, Free/Paid | Popular, Recent |

## Responsive Behavior

Figma is desktop-first:

| Context | Layout |
|---------|--------|
| Desktop (≥1280px) | Left panel + canvas + right panel (3-column) |
| Tablet | View/comment only (mobile app) |
| Mobile | View/comment, prototype testing on real device |

## Access Control

| Role | View | Edit | Comment | Library Publish | Admin |
|------|------|------|---------|-----------------|-------|
| Viewer | ✅ | — | ✅ | — | — |
| Editor | ✅ | ✅ | ✅ | ✅ | — |
| Admin | ✅ | ✅ | ✅ | ✅ | Team settings |
| Owner | ✅ | ✅ | ✅ | ✅ | Full control |

### Dev Mode Access
- Requires seat (separate from design seats)
- Can inspect, measure, export — cannot edit design
