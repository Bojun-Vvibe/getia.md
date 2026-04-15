# Design Tool — Information Architecture

## Overview

A collaborative visual design tool (Figma, Canva, Sketch style). The mental model splits into two paradigms: **professional design** (Figma — precision canvas with layers, components, and prototyping) and **template-first design** (Canva — pick a template, customize, export). This IA covers both with emphasis on the professional model.

## Site Map

### File Browser (Home)

```
├── Home
│   ├── Recent Files
│   ├── Drafts
│   ├── Shared with Me
│   └── Community / Explore
├── Team / Organization
│   ├── Team Projects
│   │   ├── Project A
│   │   │   ├── Design File 1
│   │   │   ├── Design File 2
│   │   │   └── FigJam / Whiteboard
│   │   └── Project B
│   └── Team Libraries (shared components)
├── Templates
│   ├── By Category (social media, presentation, UI kit)
│   ├── Community Templates
│   └── Team Templates
└── Settings
    ├── Account
    ├── Team Management
    ├── Billing
    ├── Plugins
    └── Notifications
```

### Design Editor (Canvas)

```
├── Toolbar (Top)
│   ├── Move / Scale Tool
│   ├── Frame / Artboard Tool
│   ├── Shape Tools (rectangle, ellipse, line, polygon, star)
│   ├── Pen / Pencil Tool
│   ├── Text Tool
│   ├── Image / Media Insert
│   ├── Hand / Pan Tool
│   ├── Comment Tool
│   └── Prototype / Present Mode
├── Canvas (Center)
│   ├── Artboards / Frames
│   │   ├── Page 1: Home Screen
│   │   ├── Page 2: Profile
│   │   └── ...
│   ├── Zoom / Pan
│   ├── Rulers & Guides
│   ├── Grid / Layout Grid
│   └── Smart Guides (alignment)
├── Left Panel
│   ├── Layers Panel
│   │   ├── Layer Tree (nested groups/frames)
│   │   ├── Search Layers
│   │   └── Lock / Hide / Rename
│   ├── Assets Panel
│   │   ├── Local Components
│   │   ├── Team Library Components
│   │   └── Search Assets
│   └── Pages List
│       └── Page 1, Page 2, ... + Add Page
├── Right Panel (Properties)
│   ├── Design Tab
│   │   ├── Position & Size (X, Y, W, H, rotation)
│   │   ├── Auto Layout
│   │   ├── Fill (color, gradient, image)
│   │   ├── Stroke (weight, color, style)
│   │   ├── Effects (shadow, blur)
│   │   ├── Border Radius
│   │   ├── Opacity & Blend Mode
│   │   ├── Typography (font, size, weight, spacing)
│   │   └── Constraints (responsive behavior)
│   ├── Prototype Tab
│   │   ├── Interactions (on click → navigate to)
│   │   ├── Animations (dissolve, slide, smart animate)
│   │   ├── Overflow Scrolling
│   │   └── Device Frame
│   ├── Inspect Tab (Dev Handoff)
│   │   ├── CSS / Swift / Android code snippets
│   │   ├── Measurements (spacing, dimensions)
│   │   ├── Colors (hex, rgb, design tokens)
│   │   ├── Typography specs
│   │   └── Export Settings (PNG, SVG, PDF)
│   └── Comments Panel
├── Bottom Bar
│   ├── Zoom Level
│   ├── Page Navigator
│   └── Quick Actions
└── Presentation Mode
    ├── Full-screen prototype
    ├── Device frame preview
    ├── Hotspot hints
    └── Flow navigation
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **File Browser** | Grid/list of files | Home, projects, teams (similar to file storage) |
| **Editor Top Bar** | Fixed toolbar | File name, sharing, tools, view options, present |
| **Left Panel Toggle** | Layers / Assets / Pages tabs | Switch between panels |
| **Right Panel Toggle** | Design / Prototype / Inspect tabs | Context-sensitive to selection |
| **Canvas Navigation** | Pan (space+drag), zoom (scroll/pinch) | Infinite canvas with artboards |
| **Command Palette** | ⌘/ or ⌘P | Quick actions, search components, plugins |
| **Context Menu** | Right-click on canvas | Object-specific actions |

### Keyboard Shortcuts (critical for productivity)
```
V = Move    F = Frame    R = Rectangle    O = Ellipse    T = Text    P = Pen
⌘G = Group    ⌘⇧G = Ungroup    ⌘D = Duplicate    ⌘Z = Undo
⌘0 = Zoom to fit    ⌘1 = Zoom 100%    ⇧1 = Zoom to selection
⌘⌥K = Create Component    ⌘E = Flatten    ⌘⇧O = Outline Stroke
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| File | name, thumbnail, pages[], last_modified, version_history | belongs to Project; has Pages |
| Page | name, order | belongs to File; has many Layers |
| Layer | name, type, visible, locked, position, size, styles{} | belongs to Page/Group; nested tree |
| Frame | auto_layout{}, constraints{}, clip_content, layout_grid | special Layer type |
| Component | name, description, variants[], properties[] | reusable Layer; instances reference master |
| Instance | component_ref, overrides{} | instance of Component |
| Style | name, type (color/text/effect/grid), properties | reusable, applied to Layers |
| Prototype | flows[], starting_frame, device_type | belongs to File |
| Interaction | trigger, action, destination, animation | belongs to Layer (prototype) |
| Comment | body, author, position (x, y), resolved, replies[] | belongs to File, pinned on canvas |
| Plugin | name, version, commands[] | extends editor functionality |

### Layer Types
```
frame | group | rectangle | ellipse | line | polygon | star | vector |
text | image | component | instance | slice | boolean_group
```

### Auto Layout Properties
```
direction: horizontal | vertical
spacing: number (gap)
padding: top, right, bottom, left
alignment: start | center | end | space-between
sizing: fixed | hug | fill
```

## User Flows

### Design Flow
```
Create File → Add Frame (artboard size) → Design UI (shapes, text, images) → Create Components → Build Screens → Prototype Links → Present
```

### Component Workflow
```
Design Element → Select → Create Component (⌘⌥K) → Add Variants → Publish to Team Library → Others Insert from Assets Panel
```

### Collaboration
```
Share File Link → Collaborators Open → Multi-cursor Editing → Leave Comments → Resolve Comments
```

### Developer Handoff
```
Designer Shares → Developer Opens → Inspect Tab → Click Elements → Copy CSS/Specs → Export Assets
```

### Template Workflow (Canva-style)
```
Browse Templates → Select → Customize (text, colors, images) → Download / Share
```

## URL / Route Structure

```
/                              → Home / File browser
/files/recent                  → Recent files
/files/drafts                  → Drafts
/team/:teamId                 → Team projects
/team/:teamId/project/:projId → Project files
/file/:fileId                  → Open in editor
/file/:fileId?node-id=:nodeId  → Deep link to specific frame/layer
/prototype/:fileId             → Prototype preview
/prototype/:fileId?node-id=:nodeId&starting-point=:frameId → Specific prototype flow
/community                     → Community templates & plugins
/community/:resourceId         → Community resource detail
/settings                      → Account settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| File Browser | File name, project name | Team, Project, Modified Date, Owner | Last Modified, Name, Created |
| Assets Panel | Component name, description | Library (local/team), Category | Name, Recently Used |
| Layers Panel | Layer name | Type, Visibility | Tree order |
| Community | Templates, plugins, icons | Category, Type, Free/Paid | Popular, Recent |
| Command Palette | Actions, components, plugins, pages | — | Relevance |

## Responsive Behavior

Design tools are primarily desktop experiences. However:

| Context | Layout |
|---------|--------|
| Desktop (≥1280px) | Full editor: left panel + canvas + right panel |
| Tablet | Simplified editor: canvas + collapsible panels, touch gestures |
| Mobile (viewer) | Read-only: browse files, view designs, add comments, view prototypes |
| Mobile (Canva-style) | Simplified editor: template customization, basic shapes/text |

### Touch Adaptations
- Pinch to zoom
- Two-finger pan
- Long-press for context menu
- Simplified property panel
- Prototype viewer works well on mobile (test designs on actual device)

## Access Control

| Role | View | Edit | Comment | Manage Library | Admin |
|------|------|------|---------|----------------|-------|
| Viewer | ✅ | — | ✅ | — | — |
| Editor | ✅ | ✅ | ✅ | Publish components | — |
| Admin | ✅ | ✅ | ✅ | ✅ | Team settings |
| Owner | ✅ | ✅ | ✅ | ✅ | Full control, billing |

### File-Level Permissions
- Can View (inspect, comment, export)
- Can Edit (modify design)
- Owner (manage sharing, delete)
- Anyone with link: View / Edit
- Embed: read-only interactive embed
