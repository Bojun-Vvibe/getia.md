---
brand: Google Meet
tagline: Real-time meetings by Google
category: Social & Communication
website: https://meet.google.com
---

# Information Architecture — Google Meet

## Overview

Google Meet is Google's video conferencing platform, tightly integrated with Google Workspace (Gmail, Calendar, Chat, Docs). The IA is intentionally streamlined — a single entry point for starting or joining meetings, with in-meeting controls prioritizing simplicity. Meet focuses on reliable video calls with AI-powered features like live captions, noise cancellation, and companion mode, rather than trying to be a full collaboration suite.

## Site Map

```
Google Meet
├── Landing Page
│   ├── New Meeting
│   │   ├── Create a meeting for later
│   │   ├── Start an instant meeting
│   │   └── Schedule in Google Calendar
│   ├── Join Meeting (enter code)
│   └── Upcoming Meetings (from Calendar)
├── Pre-Join Screen (Green Room)
│   ├── Camera preview
│   ├── Microphone test
│   ├── Visual effects (background blur/replace)
│   ├── Audio output selection
│   └── Companion Mode toggle
├── In-Meeting
│   ├── Video Layout
│   │   ├── Auto (speaker spotlight)
│   │   ├── Tiled (gallery)
│   │   ├── Spotlight (single speaker)
│   │   └── Sidebar (presentation + speaker)
│   ├── Bottom Toolbar
│   │   ├── Microphone
│   │   ├── Camera
│   │   ├── Captions
│   │   ├── Reactions / Raise Hand
│   │   ├── Present Screen
│   │   ├── More Options
│   │   └── End Call
│   ├── Side Panels
│   │   ├── People (participants)
│   │   ├── Chat (in-meeting)
│   │   ├── Activities
│   │   │   ├── Whiteboard (Jamboard)
│   │   │   ├── Breakout Rooms
│   │   │   ├── Polls
│   │   │   ├── Q&A
│   │   │   └── Recording
│   │   └── Host Controls
│   ├── Live Captions / Translation
│   ├── AI Notes (Gemini)
│   ├── Noise Cancellation
│   └── Companion Mode
├── Post-Meeting
│   ├── Recording (Google Drive)
│   ├── Transcript
│   ├── AI Summary (Gemini)
│   ├── Attendance Report
│   └── Chat History
├── Settings (gear icon)
│   ├── Audio
│   ├── Video
│   ├── General
│   └── Accessibility
└── Admin Console (Google Workspace)
    ├── Meet Settings
    ├── Recording Policies
    ├── Interoperability
    └── Usage Reports
```

## Navigation Model

- **Type**: Minimal — meeting-centric with single entry point
- **Landing Page**: Two actions — "New meeting" button + "Enter a code" input
- **Entry Points**: meet.google.com, Gmail sidebar, Google Calendar event, Google Chat, direct link
- **In-Meeting**: Bottom toolbar (primary controls) + side panel toggles
- **No Persistent Nav**: Meet has no sidebar or tab bar; it is a single-purpose meeting interface
- **Companion Mode**: Secondary device joins same meeting for chat/controls while primary device handles audio/video

## Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Meeting | code (10-char), title, organizer, participants, scheduled time, recurring flag, recording, transcript | → Calendar Event, → Recording, → Chat |
| Recording | video file, duration, Drive location, sharing permissions, transcript link | → Meeting, → Google Drive |
| Transcript | text, speaker labels, timestamps | → Meeting, → Recording |
| AI Summary | key topics, decisions, action items (Gemini-generated) | → Meeting |
| Chat Message | text, sender, timestamp, links | → Meeting (ephemeral unless saved) |
| Participant | name, email, avatar, mute status, hand raised, role (host/co-host/participant) | → Meeting |
| Calendar Event | title, time, attendees, Meet link, description, attachments | → Google Calendar, → Meeting |
| Breakout Room | name, assigned participants, timer | → Meeting |
| Poll | question, options, responses, anonymous flag | → Meeting |

## User Flows

### Starting an Instant Meeting

```
Go to meet.google.com → Click "New meeting" → "Start an instant meeting" →
  Pre-join screen: preview camera, select mic/speaker, choose background →
  Click "Join now" → In meeting; share link with participants →
  Participants click link → Pre-join screen → "Ask to join" (host admits)
```


### Joining via Calendar

```
Google Calendar event has "Join with Google Meet" button →
  Click button 5 minutes before → Pre-join screen opens →
  Join meeting → Calendar title becomes meeting title →
  Calendar sends notification reminders to attendees
```


### Using Companion Mode

```
Join meeting on primary device (laptop) with audio/video →
  On secondary device (phone/tablet) → Join same meeting → Select "Companion Mode" →
  Secondary device has: chat, raise hand, polls, Q&A, reactions — no audio/video... →
  Useful in conference rooms: room system handles A/V, individual devices handle...
```



### Recording and Transcript

```
Host starts recording → Meeting proceeds → Host stops recording or meeting ends → Recording saved to Google Drive → Transcript auto-generated in Google Docs → AI summary created by Gemini → Shared with participants
```

### Breakout Rooms

```
Host opens Activities → Breakout Rooms → Create rooms → Assign participants (auto or manual) → Set timer → Open rooms → Participants moved to rooms → Timer ends → All return to main meeting
```

## URL / Route Structure

```
meet.google.com/                            # Landing page
meet.google.com/{meeting-code}              # Join meeting (e.g., abc-defg-hij)
meet.google.com/new                         # Create instant meeting
meet.google.com/lookup/{code}               # Meeting lookup
calendar.google.com/                        # Google Calendar (meeting scheduling)
drive.google.com/file/d/{recordingId}       # Meeting recording
admin.google.com/ac/appsettings/meet        # Admin console for Meet
support.google.com/meet/                    # Help center
meet.google.com/                            # Landing page
meet.google.com/{meeting-code}              # Join meeting
meet.google.com/new                         # Create instant meeting
meet.google.com/lookup/{code}               # Meeting lookup
meet.google.com/getalink                    # Get a meeting link
calendar.google.com/calendar/event          # Schedule via Calendar
drive.google.com/file/d/{recordingId}       # Meeting recording
docs.google.com/document/d/{transcriptId}   # Meeting transcript
admin.google.com/ac/appsettings/meet        # Admin console
support.google.com/meet/                    # Help center
support.google.com/meet/answer/{id}         # Specific help article
workspace.google.com/products/meet/         # Product page
```

## Search & Filter

- **Meeting Search**: No built-in search; meetings found via Google Calendar search
- **Participant Search**: Type-ahead search in "Add people" dialog during meeting
- **Chat Search**: In-meeting chat is not searchable (ephemeral); saved chat goes to Calendar event
- **Recording Search**: Recordings saved to Google Drive; searchable via Drive's search
- **Transcript Search**: Full-text search within meeting transcripts in Google Docs
- **Admin Reports**: Search meeting usage by date, user, duration in Admin Console
- **Calendar Integration**: Primary discovery mechanism for past and future meetings

- **Calendar-based Discovery**: All meetings discoverable via Google Calendar search by title, attendee, or date
- **Transcript Full-Text Search**: Search within meeting transcripts for specific topics or keywords
- **Drive Recording Search**: Recordings searchable by meeting title, date, or participants in Google Drive
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Full-screen video; swipe for participant grid; bottom toolbar; minimal controls |
| Tablet | Larger video tiles; landscape gallery view; side panel for chat/participants |
| Desktop Browser (primary) | Tiled video (up to 49 tiles); bottom toolbar; collapsible side panels; floating self-view |
| Companion Mode | Stripped-down UI: no video, chat + reactions + hand raise + polls only |
| Nest Hub / Smart Display | Simplified meeting view for Google smart displays |


### Platform-Specific UX
- Pre-join "green room" shows camera preview and audio test before entering meeting
- Companion Mode enables using a secondary device for chat and reactions while primary handles A/V
- Live captions with real-time translation support multiple languages (Workspace feature)
- Noise cancellation uses AI to filter background sounds (keyboard typing, construction, pets)
- Gemini AI Notes automatically generates meeting summaries with key topics and action items
- Tiled view supports up to 49 simultaneous video participants on desktop
- Screen sharing supports full screen, window, or tab sharing with audio
- Virtual backgrounds and visual effects are available in the pre-join screen and during meetings
- Reactions (thumbs up, clap, heart, etc.) provide non-verbal feedback without interrupting
- Raise hand queue management helps hosts track speaking order
- Hand-off from Gmail/Calendar is seamless — one-click join from email or calendar event

## Access Control

| Role | Capabilities |
|---|---|
| Meeting Creator/Host | Admit participants, mute all, remove participants, manage recording, breakout rooms, end meeting for all |
| Co-Host | Most host capabilities except ending meeting |
| Participant | Mute/unmute self, camera on/off, chat, raise hand, react, share screen (if permitted) |
| Companion Mode User | Chat, raise hand, react, respond to polls; no audio/video |
| External Participant | Join with Google or guest name; host must admit from lobby |
| Google Workspace User | Full features including recording, transcription, AI notes, noise cancellation, extended meeting duration |
| Free Google User | 60-minute meetings (3+ participants), 100 participants, captions, no recording |
| Workspace Admin | Configure Meet policies, recording permissions, interop settings, data regions |
| Education User | Classroom integration, guardian controls, attendance reports |
