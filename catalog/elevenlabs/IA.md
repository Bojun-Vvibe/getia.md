---
brand: ElevenLabs
tagline: The most realistic AI voice platform.
category: AI & ML
website: https://elevenlabs.io
---

# ElevenLabs — Information Architecture

## Overview

ElevenLabs is an AI voice technology platform specializing in text-to-speech, voice cloning, and audio content creation. The IA is built around a **voice-centric creative studio** — the core objects are Voices (both pre-made and user-cloned), and the primary workflows involve generating speech, dubbing content, and creating audio experiences (audiobooks, podcasts). The platform spans three main surfaces: the web app (Speech Synthesis, Voice Lab, Projects, Dubbing), the API (for developer integration), and consumer products (Reader app, voice library). ElevenLabs' architecture uniquely supports both individual creators and enterprise-scale voice solutions.

## Site Map

```
elevenlabs.io
├── / (Home — marketing, demos)
├── /app (Web application)
│   ├── /speech-synthesis (Text-to-Speech)
│   ├── /voice-lab (Voice management & cloning)
│   │   └── /{voice_id} (Voice settings)
│   ├── /voice-library (Community voice marketplace)
│   ├── /projects (Long-form content — audiobooks, podcasts)
│   │   └── /{project_id}
│   ├── /dubbing (Video/audio dubbing)
│   │   └── /{dubbing_id}
│   ├── /sound-effects (AI sound effect generation)
│   ├── /voice-isolator (Background noise removal)
│   ├── /history (Generation history)
│   └── /usage (Usage analytics)
├── /docs (API documentation)
├── /pricing
├── /blog
├── /about
├── /settings
│   ├── /profile
│   ├── /subscription
│   ├── /api-keys
│   └── /billing
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Speech Synthesis, Voice Lab, Voice Library, Projects, Dubbing, Sound Effects, Voice Isolator, History
- **Tool-specific navigation**: Each tool has its own workspace layout (speech synthesis has voice selector + text input + audio output)
- **Voice navigation**: Voice selector dropdown appears across all generation tools — pick from My Voices, Pre-made, or Voice Library
- **Project navigation**: Within a Project — chapter list (left), text editor (center), audio playback (bottom)
- **Utility navigation**: Top-right — usage meter, avatar → Settings, API Keys, Billing
- **Mobile**: Responsive; speech synthesis works on mobile; complex tools (Projects, Dubbing) are desktop-optimized

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Voice | Name, description, preview sample, settings (stability, similarity, style), category, language | belongs to User |
| Cloned Voice | Uploaded audio samples, processing status, voice profile | belongs to User |
| Generation | Text input, voice used, model, audio output (MP3), character count, timestamp | belongs to User |
| Project | Title, chapters, voice assignments per character, full manuscript text, generated audio | belongs to User |
| Dubbing Job | Source video/audio, target languages, speaker mapping, dubbed output | belongs to User |
| Sound Effect | Text prompt, generated audio clip | belongs to User |
| Voice Library Entry | Published voice with description, preview, category, usage count | Community-shared |

## User Flows

### Text-to-Speech Generation

```
User opens Speech Synthesis → Selects voice from dropdown (pre-made, cloned, or community voice) →
  Adjusts voice settings: stability (consistency), similarity boost, style... →
  Selects model (Multilingual v2, Turbo v2.5, English v1) →
  Types or pastes text (up to character limit based on plan) →
  Clicks Generate → audio streams/plays immediately → Download as MP3 or save to History
```


### Voice Cloning

```
User opens Voice Lab → "Add Voice" → "Instant Voice Clone" →
  Uploads audio samples (minimum 1 minute of clear speech) →
  Names the voice and adds description/labels → Voice is processed and added to "My Voices" →
  Alternatively: "Professional Voice Clone" requires 30+ minutes of... →
  Cloned voice available across all tools (speech synthesis, projects, dubbing)
```


### Audiobook/Podcast Project

```
User creates a Project → selects type (Audiobook, Podcast) →
  Uploads manuscript (TXT, PDF, EPUB) or pastes text →
  System auto-detects chapters → user can edit chapter boundaries →
  Assigns voices to characters/narrators →
  Generates chapter by chapter — can re-generate individual paragraphs →
  Exports complete audiobook as MP3 files per chapter
```


### Video Dubbing

```
User opens Dubbing → uploads video or provides YouTube URL →
  Selects source language and target language(s) →
  System transcribes → translates → assigns voices → generates dubbed audio →
  User reviews with side-by-side comparison (original vs. dubbed) →
  Can swap voices, edit translated text, adjust timing → Export dubbed video
```



### Sound Effect Generation

```
Open Sound Effects → Type descriptive prompt → Select duration → Generate → Preview → Download MP3 → Use in project
```

### Voice Isolation

```
Open Voice Isolator → Upload audio with background noise → Process → Preview clean audio → Download isolated voice track
```

## URL / Route Structure


```
/                                             # Marketing home
/app/speech-synthesis                         # TTS workspace
/app/voice-lab                                # Voice management
/app/voice-lab/{uuid}                         # Individual voice settings
/app/voice-library                            # Community voices
/app/projects/{uuid}                          # Project workspace
/app/dubbing/{uuid}                           # Dubbing job
/app/sound-effects                            # SFX generator
/app/history                                  # Generation history
/docs/{path}                                  # API documentation
/pricing                                      # Plans
/settings/*                                   # Account settings
/app/voice-lab/clone                      # Voice cloning wizard
/app/voice-lab/professional               # Professional voice clone
/app/projects/new                         # New project creation
/app/dubbing/new                          # New dubbing job
/app/usage                                # Usage analytics
/app/voice-isolator                       # Voice isolation tool
/settings/profile                         # Profile settings
/settings/subscription                    # Subscription management
/settings/api-keys                        # API key management
/settings/billing                         # Billing details
/docs/api/text-to-speech                  # TTS API reference
/docs/api/voice-cloning                   # Clone API reference
/docs/api/dubbing                         # Dubbing API reference
/docs/api/sound-effects                   # SFX API reference
/auth/login                               # Login page
/auth/register                            # Registration page
/about                                    # About page
/blog                                     # Blog
/blog/{slug}                              # Blog post
```

App routes under `/app` prefix. UUIDs for user content. Marketing pages at root.

## Search & Filter

- **Voice Library search**: Search community voices by name, description, language, accent, gender, age, use case
- **Voice Library filters**: Language, gender, age, accent, use case (narration, characters, news, etc.)
- **History search**: Filter generations by voice, date range
- **Project navigation**: Chapters listed in sidebar — no search within project text (use browser search)
- **No generation prompt search**: History organized chronologically, not searchable by text content
- **Voice Lab**: My Voices searchable by name

- **Model Comparison**: Compare outputs across different TTS models (Multilingual v2, Turbo, English v1)
- **Usage filtering**: Filter usage analytics by date range, voice, model type
- **API documentation search**: Full-text search across API reference docs
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + workspace (voice selector, text input, audio player) |
| Desktop (1024-1280px) | Collapsible sidebar + full workspace |
| Tablet (768-1024px) | Sidebar as drawer + stacked workspace elements |
| Mobile (<768px) | Bottom nav or hamburger + speech synthesis as single-column; Projects/Dubbing limited |

- Speech synthesis is the most mobile-friendly tool — text input + voice selector + play button
- Audio player adapts to bottom of viewport (persistent playback bar)
- Voice Library grid (voice cards) reflows from 4→2→1 columns
- Project editor (multi-pane: chapters + editor + audio) collapses to tabbed view on mobile
- Dubbing comparison view stacks vertically on narrow screens


### Platform-Specific UX
- Voice selector dropdown is shared across all generation tools — pick once, generate everywhere
- Audio waveform visualization appears during playback and generation
- Character count meter shows remaining quota prominently
- Generation history preserves all outputs with voice, settings, and text for reproducibility
- Professional Voice Clone requires identity verification and a 30-minute minimum of studio audio
- Projects support per-paragraph voice assignment — ideal for audiobooks with multiple characters
- Dubbing preserves lip-sync timing by matching generated audio duration to original segments
- API playground in docs allows testing endpoints directly in the browser
- Voice Library uses a like/save system for community voice discovery
- Real-time streaming available via WebSocket API for low-latency applications
- Sound effects generation uses text prompts rather than audio samples
- Model comparison lets users hear the same text in different TTS models side by side

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, listen to voice demos, browse Voice Library |
| Free | 10,000 characters/mo, 3 custom voices, speech synthesis only, personal use |
| Starter ($5/mo) | 30,000 chars/mo, 10 custom voices, commercial license |
| Creator ($22/mo) | 100,000 chars/mo, 30 custom voices, Projects, Professional Voice Clone |
| Pro ($99/mo) | 500,000 chars/mo, 160 custom voices, Dubbing, priority queue, usage analytics |
| Scale ($330/mo) | 2,000,000 chars/mo, higher concurrency, dedicated support |
| Enterprise | Custom characters, SLA, SSO, PII redaction, on-premise options |

- Authentication: Email/password, Google OAuth
- Voice cloning consent: Users must confirm they have rights to clone a voice; professional cloning requires identity verification
- API access: Available on all paid plans; API key in Settings
- Commercial use: Starter and above include commercial license
- Content policy: No deepfake/impersonation; voice cloning requires consent documentation
- Usage: Character-based billing (not per-generation)
