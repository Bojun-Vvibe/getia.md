---
brand: Things 3
tagline: The award-winning personal task manager
category: Productivity
website: https://culturedcode.com/things
---

# Information Architecture — Things 3

## Overview

Things 3 is a GTD (Getting Things Done)-inspired task manager for Apple platforms. Its IA faithfully implements GTD's structure: an Inbox for capture, Today/Upcoming/Anytime/Someday for temporal scoping, and Areas → Projects → Tasks for the organizational hierarchy. The design is intentionally opinionated — no custom views, no team features, just a refined personal productivity system. Things 3 is widely regarded for its craft-level UI polish, fluid animations, and keyboard-first interaction model on macOS.

## Site Map

```
Things 3
├── Inbox (Quick Capture)
├── Today
│   ├── Today items (sorted by manual order)
│   ├── This Evening (sub-section, auto-splits day)
│   └── Calendar events (integrated, read-only)
├── Upcoming (date-based timeline)
│   ├── Day-by-day list (scrollable)
│   ├── Calendar events inline
│   └── Scheduled repeating tasks
├── Anytime (no specific date, ready to work on)
├── Someday (deferred / low priority / ideas)
├── Logbook (completed items)
│   ├── Completed tasks with timestamps
│   ├── Completed projects
│   └── Grouped by completion date
├── Trash
├── Areas (life domains)
│   └── [Area] (e.g., Work, Personal, Health)
│       ├── Area-level tasks (not in any project)
│       └── Projects
│           └── [Project]
│               ├── Headings (sections within project)
│               └── Tasks
│                   ├── Checklist Items (sub-steps)
│                   ├── Notes (rich text with Markdown)
│                   ├── Tags (multi-select)
│                   ├── Deadline (hard due date)
│                   ├── When (start date: Today/Evening/Someday/specific date)
│                   ├── Reminders (time-based)
│                   └── Repeating schedule
├── Quick Find (⌘F)
└── Preferences
    ├── General (appearance, language, start of week)
    ├── Quick Entry (global shortcut ⌃Space)
    ├── Calendar Integration (iCloud, Google, Exchange)
    ├── Siri & Shortcuts
    ├── Things Cloud (sync settings)
    ├── Mail to Things (personal email address)
    └── Apple Watch
```

## Navigation Model

- **Left sidebar:** Fixed list — Inbox, Today, Upcoming, Anytime, Someday, Logbook, Trash; followed by Areas and Projects tree (drag-to-reorder)
- **Main content:** Task list for selected view; projects show headings as section dividers
- **Task detail:** Inline expansion below task title — notes, checklist, tags, dates, reminders (no modal or side panel)
- **Quick Entry (⌃Space):** Global floating window to capture a task from any app on macOS
- **Quick Find (⌘F):** Instant search across all tasks, projects, and areas with keyboard navigation
- **Magic Plus (+):** Context-aware add button — adds to the currently visible list, project, or heading
- **Keyboard shortcuts:** Extensive — ⌘N (new task), ⌘. (complete), ⌘S (move to Someday), Tab (indent), Space (expand/collapse)
- **Drag and drop:** Move tasks between projects, reorder within lists, drag to sidebar destinations
- **Multiple windows (macOS):** Open different views in separate windows; detach task detail

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Inbox | Default capture location, pinned at top | → Tasks |
| Area | title, order, emoji icon | → Projects, Tasks (area-level) |
| Project | title, area, notes, deadline, when (start), tags, progress (checklist-like), completed | → Headings, Tasks |
| Heading | title, order | → Tasks (within project) |
| Task (To-Do) | title, notes (Markdown), when (today/evening/someday/date), deadline, tags[], checklist[], reminder, repeating_schedule, completed, completed_at | → Checklist Items, Project, Area |
| Checklist Item | title, completed, order | → Task |
| Tag | name, shortcut_key (optional) | → Tasks, Projects (many-to-many) |
| Logbook | Completed tasks and projects with completion date | → Tasks, Projects (historical) |
| Repeating Task | repeat schedule (daily/weekly/monthly/after_completion/custom), skip logic | → Task template |
| Calendar Event | title, start/end time, calendar source (read-only, integrated display) | displayed inline in Today/Upcoming |

## User Flows

### GTD Capture
```
⌃Space (Quick Entry) → Type task title → Optionally set When/Deadline/Tags/Project → Save → Lands in Inbox or specified project
```

### Daily Review (Today)
```
Today → Review morning tasks → Drag to reorder by importance → Complete tasks (⌘.) → Evening section auto-appears → Work through evening items → Clear Today
```

### Weekly Review
```
Inbox → Process each item → Assign project + set When date or move to Someday → Review Someday list → Promote items to Anytime or schedule → Check Upcoming for the week ahead
```

### Project Planning
```
+ New Project → Set area → Add Headings (e.g., "Research", "Draft", "Review") → Add tasks under each heading → Set project deadline → Track progress bar → Review in Upcoming
```

### Tag-Based Filtering
```
Click tag in sidebar or task → All tasks with that tag shown across all projects → Multi-tag AND filtering → Work through filtered list → Clear filter
```

## URL / Route Structure

Things 3 is a native Apple app using URL schemes and Shortcuts integration:

```
things:///show?id=inbox                          # Show Inbox
things:///show?id=today                          # Show Today
things:///show?id=upcoming                       # Show Upcoming
things:///show?id=anytime                        # Show Anytime
things:///show?id=someday                        # Show Someday
things:///show?id=logbook                        # Show Logbook
things:///show?id=trash                          # Show Trash
things:///show?id={project-uuid}                 # Show specific project
things:///show?id={area-uuid}                    # Show specific area
things:///show?id={tag-name}                     # Show tag filter
things:///add?title={t}&when={d}                 # Quick add task with date
things:///add?title={t}&list={project}           # Add task to specific project
things:///add?title={t}&heading={heading}        # Add task under heading
things:///add?title={t}&tags={tag1,tag2}         # Add task with tags
things:///add?title={t}&deadline={date}          # Add task with deadline
things:///add?title={t}&checklist-items={a,b,c}  # Add task with checklist
things:///add?title={t}&notes={text}             # Add task with notes
things:///add-project?title={t}&area={area}      # Create project in area
things:///add-project?title={t}&when={d}         # Create scheduled project
things:///search?query={q}                       # Search
things:///json?data=[...]                        # Bulk import (JSON)
things:///update?id={uuid}&completed=true        # Update task status
xcallback://x-things3/                           # x-callback-url scheme
```

### Shortcuts Integration
```
shortcuts://run-shortcut?name=AddToThings        # Run a Shortcut
x-apple-reminderkit://                           # Import from Reminders
```

## Search & Filter

- **Quick Find (⌘F):** Instant full-text search across task titles, notes, project names, area names, tags; results appear as-you-type
- **Tag filtering:** Click a tag to filter current view to matching items; multi-tag AND filtering supported
- **Built-in views as filters:** Today, Upcoming, Anytime, Someday are effectively temporal filters applied across all projects
- **Type-to-filter:** In any list, start typing to narrow visible items instantly
- **Calendar search:** Calendar events searchable through the native calendar app integration
- **No custom filter/query builder** — intentionally limited to keep UX simple and aligned with GTD philosophy
- **Logbook search:** Search completed items by title or project

## Responsive Behavior

| Context | Behavior |
|---------|----------|
| macOS | Two-pane: sidebar + task list; task detail expands inline; multiple windows supported; keyboard-first navigation; trackpad gestures |
| iPad | Sidebar + list; landscape shows both panes; portrait collapses sidebar; drag & drop between lists; Slide Over and Split View support; Apple Pencil for handwritten notes |
| iPhone | Single-pane push navigation; swipe right to complete, left to schedule; Magic Plus button for context-aware add; 3D Touch / Haptic Touch quick actions; widgets (Today, Inbox) |
| Apple Watch | View Today list, complete tasks, add via dictation; complications for task count |
| Widgets | iOS/macOS widgets for Today count, Inbox count, upcoming tasks; multiple sizes |
| No web/Android | Apple ecosystem only; sync via Things Cloud (proprietary) |

## Access Control

| Level | Description |
|-------|-------------|
| Single-user | Things is personal — no collaboration or sharing features by design |
| Things Cloud | Proprietary end-to-end encrypted sync across Mac, iPhone, iPad, Apple Watch |
| One-time purchase | No subscription; separate purchases per platform (Mac, iPhone/Watch, iPad) |
| No export | No built-in bulk export (data accessible via AppleScript on Mac, Shortcuts on iOS) |
| AppleScript (macOS) | Full scripting access to read/write tasks, projects, areas, tags |
| Siri / Shortcuts | Add tasks via voice or iOS/macOS Shortcuts automation; Shortcuts actions for query, add, update |
| Mail to Things | Forward emails to a personal Things email address to create tasks (title = subject, notes = body) |
| Calendar integration | Read-only display of calendar events in Today and Upcoming; supports iCloud, Google, Exchange |
| Handoff | Start viewing on one device, continue on another via Apple Handoff |
