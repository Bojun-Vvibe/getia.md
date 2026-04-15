---
brand: Descript
tagline: The AI video and audio editor that feels like a doc.
category: AI & ML
website: https://descript.com
---

# Descript — Information Architecture

## Overview

Descript is a video and audio editing platform built on a revolutionary concept: **edit media by editing text**. The IA centers on a **transcript-driven editing paradigm** — when you upload a video or audio file, Descript transcribes it, and editing the transcript directly edits the underlying media. Delete a sentence from the transcript, and the corresponding audio/video segment is removed. This document-like metaphor makes the product accessible to non-editors while supporting professional workflows. Key AI features include Studio Sound (audio enhancement), Eye Contact (gaze correction), Green Screen (background removal), Filler Word Removal, and AI Voices (text-to-speech overdubbing). The IA supports both individual creators and team collaboration.

## Site Map

```
descript.com
├── / (Marketing home)
├── /pricing
├── /features
│   ├── /transcription
│   ├── /screen-recording
│   ├── /video-editing
│   ├── /podcasting
│   └── /ai-features
├── /templates (Video/audio templates)
├── /blog
├── /resources
│   ├── /tutorials
│   └── /help-center
└── /download

app.descript.com (Web app) / Desktop app
├── / (Drive — all projects)
├── /project/{project_id} (Project workspace)
│   ├── Transcript editor (main)
│   ├── Timeline (bottom panel)
│   ├── Canvas (video preview + scenes)
│   ├── Scenes panel (left)
│   └── Inspector (right — properties)
├── /templates (Template gallery)
├── /settings
│   ├── /account
│   ├── /team
│   ├── /billing
│   └── /ai-voices
└── /record (Screen/webcam recorder)
```

## Navigation Model

- **Drive navigation**: Grid or list view of all projects, sorted by date; folders for organization
- **Project workspace navigation**: Multi-panel layout — Scenes sidebar (left), Canvas + Transcript (center), Inspector panel (right), Timeline (bottom)
- **Toolbar navigation**: Top toolbar — text formatting, media insertion, AI actions (Filler Word Removal, Studio Sound, etc.)
- **Mode switching**: Toggle between Script mode (text-first), Timeline mode (traditional NLE), and Canvas mode (visual design)
- **Utility navigation**: Top-right — share/export button, collaborate button, avatar → Settings
- **Panel toggles**: Each panel (Scenes, Inspector, Timeline, Comments) can be shown/hidden
- **Mobile**: Not available — desktop application + web app (desktop-optimized)

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | Container for all media, transcript, compositions, scenes | User/Team-owned |
| Composition | A single video/audio output with its own transcript, scenes, and timeline | Part of project |
| Transcript | Auto-generated text with word-level timestamps, speaker labels, editable | Part of composition |
| Scene | Visual layout template applied to a segment (title card, talking head, B-roll, etc.) | Part of composition |
| Media Asset | Video, audio, image, or screen recording file imported into project | Part of project |
| AI Voice | Cloned or stock voice for text-to-speech overdubbing | User/Descript-provided |
| Template | Pre-designed scene layouts and project structures | Descript-curated or user-created |
| Comment | Timestamped comment on transcript for collaboration | Team collaboration |


### Entity Lifecycle
```
created → active → updated → archived
                  ↘ suspended → reactivated → active
created → deleted (soft delete with recovery period)
```
## User Flows

### Podcast Editing (Transcript-First)
```
User creates new project → uploads audio file(s) → Descript transcribes automatically (speaker detection for multi-person) → User reads transcript → selects and deletes filler words ("um", "uh") or entire sentences → Corresponding audio segments are removed — no waveform editing needed → Applies Studio Sound (AI noise removal, loudness normalization) → Exports as MP3/WAV with chapter markers
```

### Video Editing
```
User imports video or records screen/webcam via built-in recorder → Transcript generated → user edits text to trim video → Switches to Canvas mode → applies Scene templates (lower thirds, titles, B-roll inserts) → Applies AI features: Eye Contact correction, Green Screen background removal → Adds transitions between scenes → Exports as MP4 or publishes directly to YouTube/social
```

### AI Overdubbing
```
User trains an AI Voice clone (reads a script for ~10 minutes) → Types new text in transcript where they want to add/change words → AI Voice generates speech matching the user's voice → Seamlessly inserted into the audio/video — sounds like the original speaker → Used for correcting mistakes, adding new sections, or translating
```

### Team Collaboration
```
Project owner shares project with team members → Team members can add timestamped comments on the transcript → Assigned reviewers can suggest edits (tracked changes style) → Owner accepts/rejects changes → Version history allows rollback to any previous state
```

### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `descript.com/` | Marketing site |
| `descript.com/pricing` | Plans |
| `descript.com/features/{feature}` | Feature pages |
| `descript.com/download` | Desktop app download |
| `app.descript.com/` | Drive (project list) |
| `app.descript.com/project/{uuid}` | Project workspace |
| `app.descript.com/templates` | Template gallery |
| `app.descript.com/settings/*` | Account settings |
| `app.descript.com/record` | Screen recorder |

Desktop app is the primary editing surface (Electron). Web app provides cloud project management and lighter editing. UUIDs for projects.

### Additional Routes

```
descript.com/billing  → Billing & subscription
descript.com/notifications  → Notification preferences
descript.com/help  → Help center
descript.com/help/{topic}  → Help article
descript.com/api  → API documentation
descript.com/search?q={query}  → Search results
descript.com/integrations  → Integrations
descript.com/admin  → Admin console
descript.com/admin/members  → Member management
descript.com/import  → Import data
descript.com/export  → Export data
```

## Search & Filter

- **Project search**: Search projects by name in Drive
- **Transcript search**: Cmd+F within a project searches transcript text (finds specific words/phrases in the recording)
- **Template search**: Search templates by category (Social, Podcast, Education, Business)
- **Media search**: Search imported media files within a project by filename
- **No cross-project search**: Cannot search transcript content across all projects
- **Speaker filter**: Filter transcript by speaker (useful for multi-person recordings)

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Surface | Behavior |
|---|---|
| Desktop App (primary) | Multi-panel workspace: Scenes (left) + Canvas/Transcript (center) + Inspector (right) + Timeline (bottom). All panels resizable, draggable, dockable |
| Web App | Similar layout to desktop but lighter — some AI features desktop-only |
| Marketing Site | Fully responsive: hero → features grid → testimonials → CTA |

- Desktop app requires minimum ~1200px width for comfortable use
- Panel layout can be customized: hide/show individual panels
- Canvas preview scales to available width while maintaining aspect ratio
- Transcript editor has a max-width container for readability
- Marketing site adapts fully from desktop to mobile


### Descript-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features

### Accessibility
- WCAG 2.1 AA compliance across all interactive elements
- Semantic HTML with proper ARIA labels and landmarks
- Keyboard navigation support for all core workflows
- Screen reader compatibility tested with VoiceOver, NVDA, and JAWS
- Color contrast ratios meeting minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Reduced motion option respecting `prefers-reduced-motion`
- Resizable text up to 200% without content loss


### API & Integration Patterns
- RESTful API with JSON request/response format
- Webhook support for real-time event notifications
- OAuth 2.0 for third-party application authorization
- Rate limiting with clear headers (X-RateLimit-Remaining)
- Pagination via cursor-based or offset-based parameters
- Versioned API endpoints for backward compatibility
- Comprehensive API documentation with interactive examples
- SDKs available for popular languages (JavaScript, Python, Ruby, Go)


### AI-Powered Editing
```
Import audio/video → Descript auto-transcribes → Edit transcript text → Audio/video updates to match → Delete filler words (um, uh) with one click → AI Eye Contact corrects gaze → Green Screen removes background → Export polished video
                                                                                                                                                                                        ↘ Overdub: type new words → AI clones your voice → Audio generated
```

### Podcast Production
```
Record multitrack in Descript → Each speaker on separate track → Transcription per speaker → Edit by editing text → Add Studio Sound (AI noise reduction + leveling) → Insert chapter markers → Export MP3 + show notes → Publish to hosting platform
```

### Screen Recording
```
New recording → Select screen/window/camera → Record with teleprompter script → Stop → Auto-transcribed → Edit mistakes by editing text → Remove pauses → Add titles and transitions → Export as MP4 or GIF
```

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, download app (trial) |
| Free | 1 project, 1 hour transcription, basic editing, watermark on video |
| Hobbyist ($24/mo) | Unlimited projects, 10 hrs transcription/mo, no watermark, basic AI features |
| Business ($33/mo) | Hobbyist features + full AI suite (Studio Sound, Eye Contact, Green Screen, Filler Words), team collaboration |
| Enterprise | Business + SSO, admin controls, custom training, priority support |
| Team roles | Owner → Editor → Commenter → Viewer |

- Authentication: Email/password, Google OAuth
- Project sharing: Link-based sharing with role assignment; public link for view-only
- AI Voice cloning: Requires consent verification; available on Business+ plans
- Export: Watermark on Free tier; paid plans have clean export
- Storage: Cloud storage included (varies by plan); media files synced across devices
- Transcription: Character/hour limits per plan per month
