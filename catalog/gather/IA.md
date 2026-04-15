---
brand: Gather
tagline: Build the office of your dreams
category: Social & Communication
website: https://gather.town
---

# Information Architecture — Gather

## Overview

Gather is a virtual office platform that uses 2D spatial video to recreate the spontaneous interactions of a physical office. The IA combines a customizable pixel-art map (the "space") with proximity-based audio/video — conversations activate as avatars walk near each other, and fade as they walk away. The platform bridges the gap between Slack-style async chat and Zoom-style scheduled meetings by enabling ambient, always-on presence.

## Site Map

```
Gather
├── Space (Virtual Office)
│   ├── Map (2D pixel-art layout)
│   │   ├── Open Areas (desks, lobby, lounge)
│   │   ├── Private Rooms (enclosed areas)
│   │   ├── Meeting Rooms
│   │   ├── Social Zones (games, watercooler)
│   │   └── Interactive Objects (whiteboards, TV screens, games)
│   ├── Avatars (team members moving in space)
│   ├── Proximity Audio/Video (spatial)
│   ├── Chat
│   │   ├── Nearby Chat (proximity-based)
│   │   ├── Direct Messages
│   │   └── Space-wide Chat
│   ├── Screen Share (to nearby or room)
│   ├── Desk Assignment (personal desk)
│   └── Status / Away
├── Mapmaker (space editor)
│   ├── Tile Map Editor
│   ├── Objects Library
│   ├── Room Configuration
│   ├── Spawn Points
│   ├── Interactive Areas (private, spotlight)
│   └── Templates
├── Calendar Integration
│   ├── Scheduled meetings (auto-gather in rooms)
│   └── Google Calendar / Outlook sync
├── Dashboard (admin)
│   ├── Members
│   ├── Spaces
│   ├── Usage Analytics
│   ├── Billing
│   └── Guest Access Policies
├── Settings
│   ├── Profile / Avatar
│   ├── Audio / Video
│   ├── Notifications
│   ├── Keyboard Shortcuts
│   └── Accessibility
├── Templates
│   ├── Office Templates
│   ├── Event Templates
│   ├── Classroom Templates
│   └── Social Templates
└── Website (gather.town)
    ├── Product
    ├── Use Cases (Remote Teams, Events, Education)
    ├── Pricing
    ├── Blog
    └── Support
```

## Navigation Model

- **Type**: Spatial (2D movement) + bottom toolbar
- **Primary Navigation**: Move avatar with arrow keys / WASD; walk to areas/people to interact
- **Bottom Toolbar**: Minimap, Chat, Screen Share, Emotes, Calendar, Settings
- **Left Panel**: Participants list with status indicators; click name to locate on map
- **Minimap**: Overview of entire space; click to teleport to location
- **Right-click Menu**: On objects (interact, configure) or people (follow, message, invite to room)
- **Room Entry**: Walk into enclosed area → automatic private room (audio/video isolated from main space)

## Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Space | name, map (tiles/objects), capacity, access settings, members | → Rooms, → Members, → Objects |
| Room (Map Area) | boundaries, privacy flag, capacity, label | → Space, → Occupants |
| Avatar | user reference, appearance (sprite), position (x,y), status, desk assignment | → User, → Space |
| Interactive Object | type (whiteboard, screen, game, poster), position, configuration, link/embed | → Space, → Room |
| Chat Message | text, sender, timestamp, scope (nearby/DM/space-wide) | → User(s), → Space |
| Screen Share | stream, sharer, scope (nearby/room), active flag | → Space |
| Desk | position, assigned user, label, decorations | → Space, → User |
| Calendar Event | title, time, linked room, participants | → Space Room, → Calendar |
| Map Template | layout, objects, theme, capacity recommendation | → Mapmaker |

## User Flows

### Spontaneous Conversation

```
Open Gather → Avatar appears at assigned desk in virtual office →
  See colleague's avatar nearby → Walk over (arrow keys) →
  Proximity video activates as you get close → Start talking → Walk away → Video fades out naturally →
  No scheduling, no links — just walk and talk
```


### Setting Up a Virtual Office

```
Create new Space → Choose template (small office, large campus, custom) →
  Open Mapmaker → Drag-and-drop tiles, walls, furniture, objects →
  Define private rooms, meeting areas, social zones →
  Add interactive objects: whiteboards, embedded links, games →
  Set spawn point → Invite team via link → Members create avatars → Join space → Assigned to desks
```


### Hosting a Virtual Event

```
Create Space from event template (conference hall, expo floor) →
  Configure: stage area (spotlight mode), breakout rooms, info boards →
  Share link → Guests join with avatars → Keynote: speaker in spotlight area → broadcasts to all →
  Networking: attendees walk around and chat spatially
```



### Quick Meeting

```
Click colleague's avatar → Select 'Follow' → Walk to private room together → Proximity video activates → Meeting begins → Walk out when done
```

### Scheduled Meeting Integration

```
Create Google Calendar event → Link to Gather room → Participants get notification → Join Gather at meeting time → Avatars auto-teleport to meeting room → Meeting starts
```

## URL / Route Structure

```
gather.town/                                # Marketing homepage
gather.town/pricing                         # Pricing page
app.gather.town/app/{spaceId}               # Space (virtual office)
app.gather.town/app/{spaceId}/mapmaker       # Map editor
app.gather.town/dashboard                   # Admin dashboard
app.gather.town/invite/{inviteCode}         # Space invite link
gather.town/templates                       # Space templates
gather.town/blog                            # Blog
gather.town/use-cases/{useCase}             # Use case pages
app.gather.town/app/{spaceId}/settings    # Space settings
app.gather.town/app/{spaceId}/members     # Member management
app.gather.town/app/{spaceId}/calendar     # Calendar view
app.gather.town/dashboard/spaces            # Spaces list
app.gather.town/dashboard/billing           # Billing
app.gather.town/dashboard/analytics         # Usage analytics
app.gather.town/dashboard/settings          # Organization settings
gather.town/product                         # Product page
gather.town/use-cases/remote-teams          # Remote teams use case
gather.town/use-cases/events                # Events use case
gather.town/use-cases/education             # Education use case
gather.town/support                         # Support page
gather.town/api                             # API documentation
```

## Search & Filter

- **Participant Search**: Find people in space by name → click to locate on map
- **Object Search**: In Mapmaker, search object library by category (furniture, tech, decor, games)
- **Template Browse**: Filter by use case (office, event, education), size, theme
- **Chat Search**: Search chat history within space
- **No Content Search**: Gather is a spatial presence tool, not a content repository; search is limited to people and objects
- **Status Filter**: Filter participant list by online/away/busy/desk status

- **Map element search**: In Mapmaker, search objects by type or keyword
- **Space member search**: Filter members by role or online status
- **Template category filter**: Filter templates by use case, capacity, theme
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop Browser (primary) | Full 2D map view; avatar movement; proximity video; split screen with chat panel |
| Tablet | Touch-based movement (virtual joystick); reduced map viewport; video overlay |
| Mobile App | Simplified view; participant list with tap-to-call; limited spatial features; primarily for joining conversations |
| Large Display | Expanded map view; higher fidelity tiles; more simultaneous video tiles |
| Mapmaker | Desktop-only; drag-and-drop editor requires mouse/keyboard |


### Platform-Specific UX
- Proximity-based audio/video is the core differentiator — conversations fade in/out based on avatar distance
- Private rooms are defined by map boundaries — walking in activates room-scoped audio isolation
- Desk assignments give members persistent locations with customizable decorations
- Interactive objects (whiteboards, embedded links, games) add functionality to the spatial environment
- Mapmaker provides a pixel-art tile editor for customizing every aspect of the space layout
- Spawn points determine where new visitors appear when entering the space
- Calendar integration auto-moves avatars to meeting rooms when scheduled events begin
- Status indicators (Available, Away, Do Not Disturb) affect proximity interaction behavior
- Emotes provide non-verbal communication through avatar animations and effects
- Minimap provides a bird's-eye view of the entire space with teleport-on-click functionality
- Guest access via invite links enables temporary visitors for events and meetings


### Interaction Types
```
Proximity Chat: Walk near → Audio/video activates automatically
Private Room:   Walk into enclosed area → Room-scoped audio isolation
Spotlight:      Event mode → Speaker broadcasts to all attendees
Do Not Disturb: Status set → Proximity interactions disabled
Follow Mode:    Follow colleague → Your avatar tracks their movement
Portal:         Step on portal tile → Teleport to another area/space
```

## Access Control

| Role | Capabilities |
|---|---|
| Space Owner | Full admin: edit map, manage members, billing, configure space settings, delete space |
| Admin | Edit map, manage members, configure rooms and objects, view analytics |
| Moderator (Builder) | Edit map and objects; cannot manage members or billing |
| Member | Enter space, move avatar, chat, video, screen share, interact with objects |
| Guest | Temporary access via invite link; limited to specific areas; no map editing |
| Spotlight Speaker | Broadcast audio/video to entire space (event mode); others are listen-only |
| Desk Holder | Assigned desk with personalized decorations; desk acts as persistent location |
| Away / Do Not Disturb | Avatar shows status; proximity video may be disabled; still visible on map |
