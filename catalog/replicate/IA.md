---
brand: Replicate
tagline: Run and fine-tune open-source models. Deploy custom models at scale.
category: AI & ML
website: https://replicate.com
---

# Replicate — Information Architecture

## Overview

Replicate is a platform for running machine learning models via a simple API, eliminating the need for infrastructure management. The IA is organized as a **model marketplace and API console** — users discover models, test them via a web playground, and integrate them via REST API or client libraries. Each model page is both a demo and documentation hub, showing inputs, outputs, example runs, and API usage. Replicate supports community-contributed models (via Cog packaging), fine-tuning (training), and deployment scaling. The platform emphasizes developer experience: minimal friction from discovery to production API call.

## Site Map

```
replicate.com
├── / (Home — featured models, trending)
├── /explore (Browse models by category)
├── /models (Model search)
│   └── /{owner}/{model_name} (Model page — playground + API docs)
│       ├── /versions (Model version history)
│       ├── /api (API reference)
│       └── /examples (Community examples)
├── /collections (Curated model collections)
│   └── /{slug}
├── /deployments (User's scaled deployments)
│   └── /{deployment_name}
├── /trainings (Fine-tuning jobs)
│   └── /{training_id}
├── /predictions (Prediction history / logs)
│   └── /{prediction_id}
├── /dashboard (Usage, billing overview)
├── /account
│   ├── /api-tokens
│   ├── /billing
│   └── /settings
├── /docs (Documentation)
│   ├── /get-started
│   ├── /topics
│   └── /reference
└── /signin
```

## Navigation Model

- **Primary navigation**: Top bar — Explore, Docs, Pricing, Blog, Dashboard (signed in)
- **Model page tabs**: Playground (demo), API, Versions, Examples
- **User dashboard navigation**: Predictions, Trainings, Deployments, Models (my published models), Billing
- **Search**: Global search bar in top nav — searches models by name, description, tags
- **Utility navigation**: Top-right avatar → Dashboard, API Tokens, Settings, Sign out
- **Breadcrumbs**: Category → Owner → Model → Version
- **Mobile**: Hamburger menu; model playground adapts to vertical layout

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Model | Name, description, owner, cover image, input/output schema, playground, versions, run count | Owner (user/org) |
| Model Version | Cog container image, input schema, output schema, changelog | Part of model |
| Prediction | Input params, output (URL/JSON), status, duration, logs, cost | User-owned |
| Training | Base model, training data, output model version, hyperparameters, logs | User-owned |
| Deployment | Dedicated model instance with scaling config (min/max replicas, hardware) | User-owned |
| Collection | Curated group of models around a theme (e.g., "Image Upscalers") | Replicate-curated or user-created |
| Example | Community-shared input/output combinations | Community |

## User Flows

### Discovering & Running a Model
```
Browses Explore or searches for a capability (e.g., "background removal") → Clicks model → lands on playground with pre-filled example inputs → Adjusts inputs (upload image, set parameters) → clicks "Run" → Output renders (image, text, audio, video) in ~seconds to minutes → "API" tab shows exact curl/Python/JS code to replicate the call programmatically
```

### Deploying a Model to Production
```
Identifies a model they want to use at scale → Creates a Deployment with hardware selection (CPU, GPU type) and scaling config → Deployment gets a dedicated endpoint URL with guaranteed capacity → Autoscales between min and max replicas based on traffic → Monitors via Dashboard — latency, throughput, cost
```

### Publishing a Custom Model
```
Packages model using Cog (Docker-based ML packaging tool) → Defines input/output schema in `predict.py` → Pushes to Replicate: `cog push r8.im/{username}/{model_name}` → Model appears on their profile with auto-generated playground → Can be public (discoverable) or private
```

### Fine-Tuning
```
Selects a base model that supports training (e.g., SDXL, Llama) → Uploads training data (images for SDXL, text for LLMs) → Configures hyperparameters → starts training job → Training creates a new model version → testable in playground immediately → Deploy the fine-tuned version via API or Deployment
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home |
| `/explore` | Browse models |
| `/{owner}/{model_name}` | Model page (playground) |
| `/{owner}/{model_name}/versions/{id}` | Specific version |
| `/{owner}/{model_name}/api` | API reference |
| `/collections/{slug}` | Curated collection |
| `/deployments/{name}` | Deployment management |
| `/predictions/{id}` | Prediction detail |
| `/trainings/{id}` | Training job detail |
| `/dashboard` | User dashboard |
| `/docs/{path}` | Documentation |

Owner/model URL pattern similar to GitHub. Predictions and trainings use unique IDs.

## Search & Filter

- **Model search**: Full-text search across model names, descriptions, tags
- **Category filters**: Text-to-Image, Image-to-Image, Text Generation, Audio, Video, etc.
- **Sort**: Most Popular (runs), Trending, Newest
- **Tags**: Language model, diffusion, upscaler, etc.
- **Hardware filter**: Filter by required hardware (CPU-only vs GPU)
- **Prediction search**: Filter own predictions by model, status, date range
- **No community ratings**: Popularity measured by run count, not user reviews

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Full nav + model playground with input panel left, output right |
| Tablet (768-1024px) | Playground stacks vertically (inputs above, output below) |
| Mobile (<768px) | Hamburger nav, full-width playground (stacked), simplified API examples |

- Model playground inputs (file upload, sliders, text areas) adapt to full-width on mobile
- Output media (images, video) scale to viewport width
- API code examples have horizontal scroll with copy button
- Dashboard charts resize responsively

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Browse models, view playgrounds (no running) |
| Free (signed in) | Run models (pay-per-use), create predictions, publish models |
| Paid (usage-based) | All features, billed per compute-second by hardware type |
| Team | Shared billing, team API tokens, shared models and deployments |
| Enterprise | SSO, audit logs, VPC, dedicated support, SLA |

- Authentication: GitHub OAuth, Google OAuth, email/password
- Billing: Usage-based — charged per second of compute (CPU: ~$0.0001/s, GPU: $0.0005-0.003/s)
- API tokens: Bearer token authentication; tokens scoped to user/org
- Model visibility: Public (free to run, anyone can see) or Private (only owner can access)
- Rate limits: Concurrent prediction limits based on plan

## Model Categories

| Category | Popular Models | Use Cases |
|----------|---------------|-----------|
| Image Generation | Stable Diffusion, SDXL, Flux | Art, product photos, design |
| Image Editing | InstructPix2Pix, ControlNet | Photo editing, style transfer |
| Language | Llama, Mistral, Mixtral | Chat, summarization, code |
| Audio | Whisper, MusicGen, Bark | Transcription, music, speech |
| Video | Stable Video Diffusion, AnimateDiff | Video generation, animation |
| Vision | BLIP, LLaVA, SAM | Image captioning, segmentation |
| Upscaling | Real-ESRGAN, SwinIR | Image enhancement, super-resolution |
| 3D | Point-E, Shap-E | 3D model generation |

## API Usage

```python
import replicate

output = replicate.run(
    "stability-ai/sdxl:version_hash",
    input={
        "prompt": "a cyberpunk cityscape at sunset",
        "negative_prompt": "blurry, low quality",
        "width": 1024,
        "height": 1024,
        "num_outputs": 1
    }
)
print(output)  # URL to generated image
```

## Deployment Options

| Option | Description | Best For |
|--------|-------------|----------|
| Serverless | Pay-per-prediction; cold starts possible | Occasional/variable usage |
| Custom Deployment | Dedicated GPU; always warm | Production, low-latency |
| Fine-tuning | Train model on custom data | Brand-specific outputs |

## Pricing

- **Pay-per-second:** Billed by GPU-second of computation
- **GPU types:** CPU, T4, A40, A100 (40GB/80GB), H100
- **No minimum:** Start at $0; pay only for what you use
- **Custom deployments:** Fixed hourly rate for dedicated GPU
- **Free tier:** Some community models offer free predictions

## Cog (Model Packaging)

```
cog.yaml → defines GPU, Python dependencies, model weights
predict.py → defines predict() function with typed inputs/outputs
cog push → builds Docker image, pushes to Replicate
```

## Model Publishing

- **Cog packaging:** Define model with `cog.yaml` and `predict.py`
- **Version management:** Each push creates a new version; pin to specific versions
- **Hardware selection:** Choose GPU type per model (CPU, T4, A40, A100, H100)
- **README:** Markdown documentation with usage examples
- **Schema:** Auto-generated API schema from typed predict function
- **Visibility:** Public (listed on Explore) or Private (your account only)

## Webhook & Async Predictions

- **Webhook URL:** Receive prediction results at your endpoint when complete
- **Polling:** Check prediction status via GET request
- **Streaming:** Stream output tokens for language models in real-time
- **Cancellation:** Cancel in-progress predictions to save credits

## Community Models

- **Open source models:** Most models on Replicate are open source (Llama, Stable Diffusion, Whisper)
- **Model leaderboard:** Popular models ranked by prediction count
- **Version pinning:** Always pin to a specific version hash for production stability
- **Fork models:** Fork and customize community models with your own fine-tuning
- **Model collections:** Curated groups by category (image generation, audio, language)
- **Community contributions:** Anyone can push models via Cog
