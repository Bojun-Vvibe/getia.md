---
brand: Hugging Face
tagline: The AI community building the future.
category: AI & ML
website: https://huggingface.co
---

# Hugging Face — Information Architecture

## Overview

Hugging Face is the central hub for the open-source machine learning community, functioning as a **GitHub-for-ML** that hosts models, datasets, and interactive demos (Spaces). The IA is built around a **repository-centric model** — every artifact (model, dataset, Space) lives in a Git-backed repo with a standardized card (README), files, discussion, and versioning. The platform aggregates over 800K models and 200K datasets, making discoverability and taxonomy critical. The Hub is complemented by an ecosystem of libraries (Transformers, Diffusers, Datasets, TGI), inference endpoints, and enterprise features. Community engagement is driven by model cards, discussions, likes, and organization pages.

## Site Map

```
huggingface.co
├── / (Home — trending models, datasets, Spaces)
├── /models (Model Hub — browse & search)
│   └── /{org}/{model_name} (Model card & files)
├── /datasets (Dataset Hub)
│   └── /{org}/{dataset_name} (Dataset card & viewer)
├── /spaces (Spaces — interactive demos)
│   └── /{org}/{space_name} (Running Space)
├── /collections (Curated model/dataset collections)
│   └── /{collection_id}
├── /posts (Community blog posts)
├── /papers (Daily Papers — arxiv with discussions)
│   └── /{arxiv_id}
├── /docs/{library_name} (Library documentation)
├── /tasks (ML task taxonomy)
│   └── /{task_name}
├── /organizations
│   └── /{org_name}
├── /{username} (User profile)
├── /settings (Account settings)
├── /pricing (Plans & pricing)
├── /enterprise (Enterprise hub)
├── /inference-endpoints (Managed deployment)
└── /new-space | /new-model | /new-dataset (Creation flows)
```

## Navigation Model

- **Primary navigation**: Top bar — Models, Datasets, Spaces, Posts, Docs, Pricing
- **Search**: Global search bar in top nav — searches across models, datasets, Spaces, users
- **Repository navigation**: Within a model/dataset page — tabs for Model Card, Files, Community (discussions), Settings, Deploy
- **Sidebar filters**: On Hub pages — task type, library, language, license, size, trending/recent
- **Utility navigation**: Top-right avatar → Profile, Settings, Organizations, API Tokens, Log out
- **Breadcrumbs**: Organization → Repository → File path
- **Mobile**: Hamburger menu for primary nav; filter sidebar becomes a modal sheet

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Model Repo | Model card (README.md), weights files, config, tokenizer, Git history, discussions | belongs to Organization |
| Model Card | YAML frontmatter (task, library, license, metrics) + Markdown body | belongs to repo |
| Dataset Repo | Dataset card, data files (Parquet/CSV/JSON), viewer, Git history | belongs to Organization |
| Space | Gradio/Streamlit/Docker app with code, Dockerfile, README | belongs to Organization |
| Collection | Curated list of models/datasets/Spaces with descriptions | User-created |
| Discussion/PR | Threaded conversation or pull request on any repo | Community |
| Paper | ArXiv paper with HF community discussion layer | Linked to arxiv |
| Organization | Group of users with shared repos, team management | Org members |

## User Flows

### Finding & Using a Model

```
User navigates to `/models` → browses or searches (e.g., "text-to-image") →
  Filters by task (Text Generation), library (PyTorch), language, trending →
  Clicks model card → reads description, metrics, usage examples →
  Options: (a) Download weights, (b) Use Inference API widget on page, (c) Deploy... →
  Can open Discussion tab to ask questions or report issues
```


### Creating a Space

```
User clicks "New Space" → selects SDK (Gradio, Streamlit, Docker, Static) →
  Names the Space, sets hardware (CPU, GPU), visibility →
  Uploads code or connects Git repo → Space builds and deploys automatically →
  Live demo is accessible at `{username}/{space_name}` URL →
  Community can duplicate (fork) the Space
```


### Model Upload & Publishing

```
User creates new model repo via web or `huggingface_hub` CLI →
  Uploads model weights, tokenizer, config files via Git LFS →
  Writes model card with YAML metadata (task, library, license, metrics) →
  Model auto-indexed in Hub search; appears in relevant task/library filters →
  Community can like, discuss, and submit PRs to improve the card
```



### Deploying an Inference Endpoint

```
Model page → Deploy → Select Inference Endpoints → Choose cloud provider and region → Select hardware (GPU type) → Configure scaling → Deploy → Get API endpoint URL → Integrate into application
```

### Contributing to a Model via Pull Request

```
Model page → Community tab → New Discussion or Pull Request → Fork repo → Make changes (improve model card, add files) → Submit PR → Maintainer reviews → Merge
```

## URL / Route Structure


```
/models                                       # Model Hub listing
/{org_or_user}/{model_name}                   # Model card page
/{org_or_user}/{model_name}/tree/main         # File browser
/{org_or_user}/{model_name}/discussions       # Community discussions
/datasets/{org_or_user}/{dataset_name}        # Dataset page
/spaces/{org_or_user}/{space_name}            # Running Space
/papers/{arxiv_id}                            # Paper discussion
/docs/{library}/{page}                        # Library documentation
/tasks/{task_slug}                            # Task taxonomy page
/{username}                                   # User profile
/collections/{user}/{slug}-{id}               # Collection page
/{org_or_user}/{model_name}/blob/main/{file}     # View specific file
/{org_or_user}/{model_name}/resolve/main/{file}   # Download file directly
/{org_or_user}/{model_name}/settings               # Repo settings
/spaces/{org_or_user}/{space_name}/settings        # Space settings
/new-model                                          # Create model repo
/new-dataset                                        # Create dataset repo
/new-space                                          # Create Space
/new-collection                                     # Create collection
/settings/profile                                   # Profile settings
/settings/tokens                                    # API tokens
/settings/organizations                             # Org management
/inference-endpoints/new                             # Create inference endpoint
/pricing                                             # Pricing plans
```

GitHub-inspired URL structure with `org/repo` convention. Models live at root path; datasets and Spaces are prefixed.

## Search & Filter

- **Global search**: Searches across models, datasets, Spaces, users, organizations, papers
- **Model filters**: Task (30+ types), Library (PyTorch, TF, JAX, etc.), Language (100+), License, Model size, Dataset used, Gated/ungated
- **Dataset filters**: Task, Language, Size, Format, License, Modality
- **Spaces filters**: SDK, Hardware, Running status, Likes
- **Sort options**: Trending, Most Downloads, Most Likes, Recently Updated, Recently Created
- **Tags**: Extensive tag system for models (e.g., `text-generation`, `gguf`, `4-bit`, `chat`)
- **Dataset viewer**: In-browser preview of dataset rows with column filtering

- **Paper search**: Search arxiv papers by title, author, or topic on the Papers page
- **Collection browsing**: Browse curated collections by theme or creator
- **Organization search**: Find organizations by name or domain focus
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full nav bar + sidebar filters + content grid (3 columns) |
| Desktop (1024-1280px) | Collapsible filter sidebar + 2-column grid |
| Tablet (768-1024px) | Hamburger nav, filter as modal, 2-column grid |
| Mobile (<768px) | Hamburger nav, filter as bottom sheet, single-column list |

- Model/dataset cards are responsive cards that stack vertically on mobile
- Spaces (Gradio apps) embed responsively but may require horizontal scroll for complex UIs
- Code blocks in model cards have horizontal scroll
- File browser adapts to narrower widths with truncated paths


### Platform-Specific UX
- Model cards use YAML frontmatter for structured metadata (task, library, license, metrics, language)
- Inference API widget on every model page allows instant testing without code
- Dataset viewer provides in-browser preview of dataset rows with column filtering and search
- Spaces run as containerized web apps — supporting Gradio, Streamlit, and Docker SDKs
- Git LFS handles large model weight files (often multi-GB) seamlessly
- Discussion and PR system mirrors GitHub — enabling community contributions to model cards and data
- ZeroGPU (Pro feature) provides on-demand GPU access for Spaces without dedicated hardware
- Collection feature enables curating themed sets of models, datasets, and Spaces
- Papers page adds community discussion layer on top of daily arxiv papers
- Organization pages aggregate team repositories with role-based access control
- Gated models require explicit access requests with optional form fields and approval workflows
- Model comparison tools allow side-by-side evaluation of different models on the same inputs

### Ecosystem Libraries
- Transformers: Core library for model loading, fine-tuning, and inference
- Diffusers: Stable Diffusion and image generation pipelines
- Datasets: Efficient data loading and processing with streaming support
- TGI (Text Generation Inference): Optimized serving for LLMs
- PEFT: Parameter-efficient fine-tuning (LoRA, QLoRA)
- Accelerate: Multi-GPU and distributed training utilities


### Model Card YAML Frontmatter
```yaml
language: en
license: apache-2.0
tags:
  - text-generation
  - pytorch
datasets:
  - openwebtext
metrics:
  - perplexity
library_name: transformers
pipeline_tag: text-generation
```

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Browse models/datasets/Spaces, read model cards, use Inference API widget (rate limited) |
| Free (signed in) | Upload models/datasets, create Spaces (free CPU), Inference API, community discussions |
| Pro ($9/mo) | Higher Inference API limits, ZeroGPU Spaces, private repos, dataset viewer for large datasets |
| Enterprise Hub | SSO, resource groups, audit logs, advanced compute, private Spaces with GPU, compliance features |

- Authentication: Email/password, GitHub OAuth, Google OAuth
- Repo visibility: Public (default) or Private; gated models require access request approval
- Organizations: Roles — Admin, Write, Read, with per-repo permissions
- API tokens: Fine-grained tokens (read, write, manage) for programmatic access
- Content policy: No explicit content; automated scanning for secrets/credentials in repos
