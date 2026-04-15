---
brand: Google Drive
tagline: "Cloud storage for Google Workspace. 15GB free, Docs/Sheets/Slides integration, shared drives."
category: Productivity
website: https://drive.google.com
---

# Google Drive — Information Architecture

## Overview

Google Drive is cloud storage deeply integrated with Google Workspace (Docs, Sheets, Slides, Forms). The mental model is **files in the cloud with native Google editors** — any file can be stored, but Google-format files open in purpose-built web editors with real-time collaboration. Key differentiators: 15GB free storage, Google Docs/Sheets/Slides native integration, Shared Drives (team-owned storage), powerful search (including OCR and content-based), and Priority page (AI-recommended files).

## Site Map

```
├── Home (Priority)
│   ├── Quick Access (AI-suggested files)
│   ├── Priority Workspaces (suggested collections)
│   └── Recent / Modified by Me
├── My Drive
│   ├── Folder Tree
│   ├── Files (list/grid)
│   └── Actions (New: Doc/Sheet/Slide/Form/Folder/Upload)
├── Shared Drives
│   ├── Team Drive A
│   ├── Team Drive B
│   └── + Create Shared Drive
├── Shared with Me
│   ├── Files shared by others
│   └── Filter by owner/date
├── Recent
├── Starred
├── Spam
├── Trash (30-day auto-delete)
├── Storage
│   ├── Usage Breakdown (Drive, Gmail, Photos)
│   ├── Large Files
│   ├── Clean Up Suggestions
│   └── Buy More Storage
├── File Viewer
│   ├── Preview (PDF, images, video, Office docs)
│   ├── Open with Google Docs/Sheets/Slides
│   ├── Open with Connected Apps
│   └── Comments Panel
├── Search Results
│   ├── Filters (type, owner, modified, location)
│   └── Results list
├── Settings
│   ├── General
│   ├── Notifications
│   ├── Manage Apps (connected third-party)
│   └── Keyboard Shortcuts
└── Drive Desktop
    ├── Streaming (all files available, download on demand)
    ├── Mirror (full local copy)
    └── Offline Access
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed | New (+) button, Home, My Drive, Shared Drives, Shared with Me, Recent, Starred, Spam, Trash, Storage |
| **Top Bar** | Fixed | Search bar (with filter chips), view toggle (list/grid), info panel (ⓘ), settings |
| **Breadcrumbs** | Above file list | My Drive > Folder > Subfolder |
| **Right Panel** | Toggle (ⓘ) | Details, Activity, Sharing for selected file |
| **+ New** | Dropdown menu | Folder, File Upload, Folder Upload, Google Docs, Sheets, Slides, Forms, More |
| **Context Menu** | Right-click | Share, Get Link, Move, Star, Rename, View Details, Download, Remove |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| File | name, mimeType, size, owners[], shared_with[], starred, trashed, created, modified, web_view_link | in Folder, has Permissions |
| Folder | name, color, parent_id | contains Files, Folders |
| SharedDrive | name, members[], storage_used | has Folders, Files |
| Permission | role (owner/editor/commenter/viewer), type (user/group/domain/anyone), email | belongs to File/Folder |
| Comment | content, author, anchor, resolved | belongs to File |
| Revision | id, modified_by, modified_at, size, keep_forever | belongs to File |
| Shortcut | target_file_id, target_mimeType | belongs to Folder (like symlink) |

### Google File Types (zero storage)
```
application/vnd.google-apps.document    → Google Docs
application/vnd.google-apps.spreadsheet → Google Sheets
application/vnd.google-apps.presentation → Google Slides
application/vnd.google-apps.form        → Google Forms
application/vnd.google-apps.drawing     → Google Drawings
```

## User Flows

### Create and Collaborate
```
+ New → Google Docs → Write → Share (+ people) → Collaborate in real-time → Comments → Resolve → Done
```

### Upload and Organize
```
+ New → File Upload → Select files → Upload → Drag to folder → Star important ones
```

### Find Old File
```
Search bar → Type query → Filter by type/date/owner → Click result → Preview or Open
```

## URL / Route Structure

```
/drive/my-drive            → My Drive
/drive/folders/:id         → Folder
/drive/shared-drives       → Shared Drives list
/drive/shared-drives/:id   → Shared Drive
/drive/shared-with-me      → Shared with Me
/drive/recent              → Recent
/drive/starred             → Starred
/drive/trash               → Trash
/drive/search?q=:query     → Search results
/drive/quota               → Storage
/file/d/:fileId/view       → File preview
/file/d/:fileId/edit       → Open in editor
/drive/settings            → Settings
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Global | Type (doc/sheet/slide/pdf/image/video/folder), Owner, Modified Date, Location, Starred, Shared | Modified, Name, Last Opened, Storage Used |
| Within Folder | Type, Modified | Name, Modified |

### Search Features
- Full-text search inside documents
- OCR search (text in images)
- Natural language ("my presentations from last week")

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Sidebar + file grid/list + right detail panel |
| Tablet | Collapsed sidebar, file grid |
| Mobile (app) | Bottom tabs (Home, Starred, Shared, Files), list view |

## Access Control

| Permission | View | Comment | Edit | Manage Sharing |
|------------|------|---------|------|----------------|
| Viewer | ✅ | — | — | — |
| Commenter | ✅ | ✅ | — | — |
| Editor | ✅ | ✅ | ✅ | — |
| Owner | ✅ | ✅ | ✅ | ✅ |

### Sharing Scopes
- Specific people (email)
- Organization (anyone in company)
- Anyone with the link
- Public (search-indexed)
