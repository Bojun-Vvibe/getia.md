---
brand: Canva
tagline: "Design for everyone. Templates, drag-and-drop editor, Brand Kit, Magic Studio AI."
category: Design
website: https://canva.com
---

# Canva — Information Architecture

## Overview

Canva is a template-first design tool for non-designers. The mental model is **pick a template, customize, publish** — users start from professionally designed templates and modify text, images, colors, and layouts. Key differentiators: 250K+ templates, Magic Studio (AI-powered design), Brand Kit, real-time collaboration, direct publishing to social platforms, and Canva Docs/Presentations/Whiteboards expansion.

## Site Map

```
├── Home
│   ├── Recent Designs
│   ├── Design Type Shortcuts (Instagram Post, Presentation, Resume...)
│   ├── Recommended Templates
│   └── Create a Design (custom size)
├── Templates
│   ├── By Category (Social Media, Marketing, Business, Education...)
│   ├── By Format (Instagram, Facebook, YouTube, A4, Poster...)
│   ├── Search Templates
│   └── Template Detail (preview + use)
├── Editor
│   ├── Left Panel
│   │   ├── Design (templates for current format)
│   │   ├── Elements (shapes, graphics, stickers, frames, grids)
│   │   ├── Text (heading, subheading, body, font combos)
│   │   ├── Brand Kit (logos, colors, fonts)
│   │   ├── Uploads (images, videos, audio)
│   │   ├── Photos (Canva stock library)
│   │   ├── Videos (stock video clips)
│   │   ├── Audio (music, sound effects)
│   │   ├── Apps (Giphy, Pexels, Mockups, Charts, QR Code...)
│   │   ├── Magic Studio (AI tools)
│   │   └── Projects (switch between designs)
│   ├── Canvas (Center)
│   │   ├── Page(s) with artboard
│   │   ├── Drag & drop elements
│   │   ├── Smart alignment guides
│   │   └── Page navigation (carousel below)
│   ├── Top Bar
│   │   ├── File menu
│   │   ├── Resize (Magic Resize)
│   │   ├── Undo / Redo
│   │   ├── Share / Collaborate
│   │   ├── Present
│   │   ├── Download (PNG, JPG, PDF, SVG, MP4, GIF)
│   │   └── Publish (to social, print, website)
│   └── Context Toolbar (above canvas)
│       ├── Font, size, color, bold/italic (text selected)
│       ├── Filters, crop, flip (image selected)
│       ├── Color, border, opacity (shape selected)
│       └── Animation, timing (element animation)
├── Magic Studio (AI)
│   ├── Magic Write (AI text generation)
│   ├── Magic Design (prompt → layout)
│   ├── Magic Edit (select area → describe change)
│   ├── Magic Eraser (remove objects)
│   ├── Magic Expand (extend image)
│   ├── Magic Grab (separate subject from background)
│   ├── Text to Image (AI image generation)
│   ├── Magic Animate (auto-animate elements)
│   ├── Magic Resize (adapt to different formats)
│   └── Translate (auto-translate text)
├── Projects
│   ├── All Designs
│   ├── Folders
│   ├── Shared with You
│   └── Trash
├── Brand Kit (Pro/Teams)
│   ├── Brand Colors
│   ├── Brand Fonts
│   ├── Brand Logos
│   ├── Brand Templates
│   └── Brand Voice (AI tone)
├── Canva Docs
├── Canva Presentations
├── Canva Whiteboards
├── Canva Websites (single-page publisher)
├── Print
│   ├── Business Cards
│   ├── Flyers
│   ├── Posters
│   └── Order & Delivery
├── Account / Settings
│   ├── Profile
│   ├── Billing & Plans
│   ├── Teams
│   ├── Connected Social Accounts
│   └── App Integrations
└── Learn (Canva Design School)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Home** | Card-based grid | Design type shortcuts + recent + templates |
| **Editor Left Panel** | Icon tabs (vertical) | Design, Elements, Text, Uploads, Brand, Apps... |
| **Editor Top Bar** | Fixed | File, resize, undo/redo, share, download, publish |
| **Context Toolbar** | Above canvas, changes by selection | Font/color for text, filters for images, etc. |
| **Page Nav** | Bottom carousel | Thumbnails of pages, add/reorder/delete |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Design | title, type, dimensions, pages[], thumbnail, created_at | belongs to User/Team, in Folder |
| Page | elements[], background, transitions | belongs to Design |
| Element | type, position, size, rotation, opacity, animations | on Page |
| Template | title, category, format, pages[], premium | in Template Library |
| BrandKit | colors[], fonts[], logos[], templates[] | belongs to Team |
| Folder | name, designs[], shared_with | belongs to User/Team |
| Upload | type (image/video/audio), url, filename | belongs to User |

### Element Types
`text | image | shape | frame | grid | sticker | graphic | video | audio | chart | qr_code | mockup`

## User Flows

### Template to Design
```
Home → Pick format (e.g., Instagram Post) → Browse templates → Select → Customize text/images/colors → Download or Publish
```

### AI Design
```
Magic Studio → Magic Design → Enter prompt ("birthday party invitation") → AI generates layouts → Pick one → Customize → Export
```

### Brand Consistency
```
Brand Kit → Upload logo + set colors + choose fonts → Any new design → Apply Brand Kit → Consistent look
```

### Publish to Social
```
Design → Share → Publish to Social → Select platform (Instagram, Facebook) → Schedule or Publish Now
```

## URL / Route Structure

```
/                          → Home
/templates                 → Template gallery
/templates/:category       → Category
/design/:id                → Editor
/folder/:id                → Folder
/projects                  → All designs
/brand-kit                 → Brand Kit
/magic-studio              → AI tools
/docs                      → Canva Docs
/presentations             → Presentations
/whiteboards               → Whiteboards
/print                     → Print products
/learn                     → Design School
/settings                  → Settings
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Templates | Category, Format, Color, Style, Free/Pro | Popular, Recent |
| Elements | Type (photo/graphic/video/audio), Free/Pro | Relevant, Popular |
| Projects | Type, Folder, Shared status | Modified, Name, Created |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Full editor with all panels |
| Tablet | Simplified editor, collapsible panels |
| Mobile | Template browsing + basic editing, limited features |

## Access Control

| Tier | Templates | AI Features | Brand Kit | Storage | Team |
|------|-----------|-------------|-----------|---------|------|
| Free | Limited | Basic | — | 5GB | — |
| Pro | Full (100M+) | Full Magic Studio | ✅ | 1TB | — |
| Teams | Full | Full | ✅ + Brand Voice | 1TB/person | ✅ |
| Enterprise | Full | Full | ✅ + approval flows | Unlimited | ✅ + SSO |
