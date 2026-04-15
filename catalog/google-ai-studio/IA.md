---
brand: Google AI Studio
tagline: Build with Gemini. Prototype, test, and deploy generative AI.
category: AI & ML
website: https://aistudio.google.com
---

# Google AI Studio — Information Architecture

## Overview

Google AI Studio (formerly MakerSuite) is Google's free, web-based developer tool for prototyping and building with Gemini models. The IA is organized as a **prompt development environment** with three core modes: Freeform (single-turn), Chat (multi-turn), and Structured (few-shot). Unlike the Anthropic Console which focuses on API management, AI Studio emphasizes prompt prototyping and fine-tuning workflows, serving as the on-ramp to the Gemini API and Vertex AI. Key features include multi-modal inputs (text, images, video, audio, code), model tuning, prompt gallery, and one-click export to Google Colab or Vertex AI.

## Site Map

```
aistudio.google.com
├── / (Home — recent prompts, quick start)
├── /prompts
│   ├── /new (New prompt editor)
│   └── /{prompt_id} (Saved prompt)
├── /library (Prompt gallery — templates and examples)
├── /tuning (Model tuning / fine-tuning)
│   ├── / (Tuned models list)
│   └── /{tuning_job_id} (Tuning job detail)
├── /apikey (API key management)
├── /plan (Usage & billing)
├── /settings
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home (New Prompt), My Library, Prompt Gallery, Tuned Models, API Keys, Settings
- **Prompt editor navigation**: Top bar with model selector (Gemini 2.5 Pro, Gemini 2.5 Flash, etc.), prompt type tabs (Freeform, Structured, Chat)
- **Parameter panel**: Right sidebar in prompt editor — temperature, top-p, top-k, max output tokens, safety settings, stop sequences
- **Utility navigation**: Top-right — Google account avatar, Help, Feedback
- **Gallery navigation**: Browse prompt templates by category (Code, Creative, Data, Extract, Summarize, Transform)
- **Breadcrumbs**: Home → My Library → Prompt Name

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Freeform Prompt | Single text/multimodal input → single response, with model config | belongs to User |
| Structured Prompt | Input/output column definitions + few-shot examples + test input | belongs to User |
| Chat Prompt | System instruction + multi-turn conversation, with model config | belongs to User |
| Prompt Template | Pre-built prompt with description, use case, example inputs | curated by Google |
| Tuned Model | Base model + training data + hyperparameters + tuning metrics | belongs to User |
| API Key | Key string tied to Google Cloud project | belongs to User |
| Safety Settings | Per-category thresholds (harassment, hate, sexual, dangerous) | belongs to prompt config |

## User Flows

### Freeform Prompt Prototyping

```
User clicks "New Prompt" → Freeform mode opens → Selects model (Gemini 2.5 Pro, Flash, etc.) →
  Types prompt — can include text, paste images, upload files, record audio →
  Adjusts parameters in right panel (temperature, max tokens) →
  Clicks "Run" → response appears below →
  Clicks "Get Code" → generates Python, JavaScript, Kotlin, Swift, or curl code →
  Saves prompt to Library for later iteration
```


### Structured Prompt (Few-Shot)

```
User selects "Structured" mode →
  Defines input and output columns (e.g., "Product Description" → "Marketing... →
  Adds few-shot examples in table format → Enters test input → model generates based on pattern →
  Can add system instructions for additional guidance → Export as API code or save to Library
```


### Model Tuning

```
User navigates to Tuned Models → "Create Tuned Model" → Selects base model (Gemini Flash) →
  Uploads training data (JSONL format with input/output pairs) →
  Configures hyperparameters (epochs, learning rate, batch size) →
  Starts tuning job → monitors progress (loss curves, metrics) →
  Tuned model available for use in prompts and via API
```


### Multi-Modal Input

```
User opens Freeform prompt → Clicks attachment → uploads image, video, or audio file →
  Types prompt referencing the uploaded media →
  Gemini analyzes the media and responds (e.g., "describe this image",... →
  Can combine multiple modalities in a single prompt
```



### Chat Prompt Prototyping

```
Select Chat mode → Set system instruction → Begin conversation → Test multi-turn interaction → Adjust parameters → Export as API code → Integrate into application
```

### API Key Management

```
Navigate to API Keys → Create new key → Link to Google Cloud project → Copy key → Use in application code → Monitor usage in Plan tab
```

## URL / Route Structure


```
/                                             # Home dashboard
/prompts/new                                  # New prompt editor
/prompts/{uuid}                               # Saved prompt
/library                                      # User's saved prompts
/gallery                                      # Prompt template gallery
/tuning                                       # Tuned models list
/tuning/{uuid}                                # Tuning job detail
/apikey                                       # API key management
/plan                                         # Usage and billing
/settings                                     # Account settings
/prompts/new/freeform                     # New freeform prompt
/prompts/new/structured                   # New structured prompt
/prompts/new/chat                         # New chat prompt
/library                                  # Saved prompts library
/gallery                                  # Prompt template gallery
/gallery/{category}                       # Gallery category filter
/tuning/new                               # New tuning job
/tuning/{uuid}/metrics                    # Tuning metrics
/apikey/create                            # Create API key
/plan/usage                               # Usage details
/settings/profile                         # Profile settings
/settings/preferences                     # Preferences
```

Simple flat route structure. UUIDs for user content. SPA with Google account integration.

## Search & Filter

- **Prompt Gallery search**: Search templates by keyword, filter by category (Code, Creative, Data, etc.)
- **My Library search**: Search saved prompts by name
- **No full-text prompt search**: Cannot search by prompt content
- **Tuned model filtering**: Filter by base model, creation date, status
- **Model selector**: Not a search, but a dropdown filtering available models by capability

- **Prompt content search**: Search prompts by content within saved library
- **Tuning job filtering**: Filter by status (running, completed, failed), base model, date
- **Gallery category browsing**: Browse templates by Code, Creative, Data, Extract, Summarize, Transform
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Sidebar + prompt editor (main) + parameter panel (right) — 3-column |
| Desktop (1024-1280px) | Sidebar collapsible + editor + parameter panel as overlay |
| Tablet (768-1024px) | Sidebar as drawer + full-width editor + parameters as bottom sheet |
| Mobile (<768px) | Functional but cramped — designed for desktop use |

- Prompt editor takes maximum available width for text editing
- Structured prompt table scrolls horizontally on narrow screens
- Parameter panel collapses to a floating button on small screens
- Gallery cards reflow from grid to single column
- File upload/media preview adapts to available width


### Platform-Specific UX
- Three prompt modes serve different use cases: Freeform (single-turn), Chat (multi-turn), Structured (few-shot)
- Multi-modal input supports text, images, video, audio, and code files in a single prompt
- Right-side parameter panel provides real-time control over temperature, top-p, top-k, and safety settings
- "Get Code" button generates implementation code in Python, JavaScript, Kotlin, Swift, and curl
- Model selector dropdown shows all available Gemini models with capability indicators
- Safety settings are configurable per-prompt across 4 harm categories with adjustable thresholds
- Structured prompts use a spreadsheet-like input/output table for few-shot example definition
- Prompt versioning in the Library allows iterating on prompts while preserving history
- One-click export to Google Colab enables immediate experimentation in notebook environments
- Token count visualization shows input/output tokens in real-time during prompt editing
- Gallery templates provide starting points organized by use case (Code, Creative, Data, Extract, Summarize)
- Free tier includes generous API quotas — rate-limited but not usage-capped for most models

### Integration Points
- Direct path from AI Studio to Vertex AI for production deployment
- API keys are linked to Google Cloud projects for billing and quota management
- Gemini API supports streaming responses for real-time generation


### Model Selection Guide
```
Gemini 2.5 Pro:    Best quality, slowest, highest cost — complex reasoning tasks
Gemini 2.5 Flash:  Fast, efficient — most everyday tasks and chat applications
Gemini 2.0 Flash:  Previous generation fast model — proven stability
```

### Safety Settings Matrix
```
Category              Threshold Options
─────────────────────────────────────────
Harassment            Block None / Few / Some / Most
Hate Speech           Block None / Few / Some / Most
Sexually Explicit     Block None / Few / Some / Most
Dangerous Content     Block None / Few / Some / Most
```

### Prompt Export Targets
- Python (google-generativeai SDK)
- JavaScript (Google AI SDK)
- Kotlin (Android)
- Swift (iOS)
- curl (REST API)
- Google Colab notebook

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (Google account required) |
| Free (Google account) | Full access to AI Studio — prompts, gallery, API keys, limited tuning |
| Pay-as-you-go | Higher rate limits, more tuning capacity, Vertex AI integration |

- Authentication: Google account (required)
- API keys: Tied to Google Cloud project; one-click creation from AI Studio
- Free tier: Generous free API usage (rate-limited, not usage-capped for most models)
- Safety settings: Configurable per-prompt; 4 harm categories with adjustable thresholds
- Data usage: API data not used for training by default (Google Cloud ToS)
- Geographic restrictions: Some features not available in all regions (EU data residency considerations)
- Tuning: Free tier includes limited tuning; advanced tuning on Vertex AI
