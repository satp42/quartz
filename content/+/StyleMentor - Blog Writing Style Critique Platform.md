## Architecture Document

---

## 1. High-Level System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT (Next.js)                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   Auth UI   │  │ Blog Input  │  │ Writing     │  │   Critique Display  │ │
│  │   (Supabase)│  │   Form      │  │   Editor    │  │   & History         │ │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘ │
└─────────┼────────────────┼────────────────┼────────────────────┼────────────┘
          │                │                │                    │
          ▼                ▼                ▼                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           API LAYER (Next.js API Routes)                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ /api/auth/* │  │/api/crawl   │  │/api/analyze │  │  /api/critique      │ │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘ │
└─────────┼────────────────┼────────────────┼────────────────────┼────────────┘
          │                │                │                    │
          ▼                ▼                ▼                    ▼
┌─────────────────┐ ┌─────────────┐ ┌───────────────────────────────────────┐
│    SUPABASE     │ │  FIRECRAWL  │ │          ML SERVICE (Python)          │
│  ┌───────────┐  │ │   ┌─────┐   │ │  ┌─────────────┐  ┌─────────────────┐ │
│  │   Auth    │  │ │   │Crawl│   │ │  │    JEPA     │  │   LLM Critique  │ │
│  ├───────────┤  │ │   │ API │   │ │  │  Encoder    │  │   Generator     │ │
│  │  Postgres │  │ │   └─────┘   │ │  └─────────────┘  └─────────────────┘ │
│  ├───────────┤  │ └─────────────┘ └───────────────────────────────────────┘
│  │  Storage  │  │
│  └───────────┘  │
└─────────────────┘
```

---

## 2. File & Folder Structure

```
stylementor/
├── apps/
│   ├── web/                          # Next.js Frontend
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── signup/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── (dashboard)/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx              # Dashboard home
│   │   │   │   ├── bloggers/
│   │   │   │   │   ├── page.tsx          # List saved bloggers
│   │   │   │   │   ├── [id]/
│   │   │   │   │   │   └── page.tsx      # Single blogger detail
│   │   │   │   │   └── new/
│   │   │   │   │       └── page.tsx      # Add new blogger
│   │   │   │   ├── critique/
│   │   │   │   │   ├── page.tsx          # Writing critique interface
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx      # View past critique
│   │   │   │   └── history/
│   │   │   │       └── page.tsx          # All past critiques
│   │   │   ├── api/
│   │   │   │   ├── auth/
│   │   │   │   │   └── callback/
│   │   │   │   │       └── route.ts      # Supabase auth callback
│   │   │   │   ├── crawl/
│   │   │   │   │   └── route.ts          # Trigger Firecrawl
│   │   │   │   ├── bloggers/
│   │   │   │   │   ├── route.ts          # CRUD bloggers
│   │   │   │   │   └── [id]/
│   │   │   │   │       ├── route.ts
│   │   │   │   │       └── articles/
│   │   │   │   │           └── route.ts
│   │   │   │   ├── embeddings/
│   │   │   │   │   └── route.ts          # Trigger JEPA encoding
│   │   │   │   ├── critique/
│   │   │   │   │   └── route.ts          # Generate critique
│   │   │   │   └── webhooks/
│   │   │   │       └── crawl-complete/
│   │   │   │           └── route.ts      # Firecrawl webhook
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                  # Landing page
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── ui/                       # Shadcn components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   └── ...
│   │   │   ├── auth/
│   │   │   │   ├── login-form.tsx
│   │   │   │   └── signup-form.tsx
│   │   │   ├── bloggers/
│   │   │   │   ├── blogger-card.tsx
│   │   │   │   ├── blogger-form.tsx
│   │   │   │   ├── crawl-status.tsx
│   │   │   │   └── article-list.tsx
│   │   │   ├── critique/
│   │   │   │   ├── writing-editor.tsx
│   │   │   │   ├── critique-display.tsx
│   │   │   │   ├── style-rubric.tsx
│   │   │   │   └── comparison-view.tsx
│   │   │   └── layout/
│   │   │       ├── navbar.tsx
│   │   │       ├── sidebar.tsx
│   │   │       └── footer.tsx
│   │   ├── lib/
│   │   │   ├── supabase/
│   │   │   │   ├── client.ts             # Browser client
│   │   │   │   ├── server.ts             # Server client
│   │   │   │   ├── middleware.ts         # Auth middleware
│   │   │   │   └── types.ts              # Generated DB types
│   │   │   ├── firecrawl/
│   │   │   │   └── client.ts
│   │   │   ├── ml-service/
│   │   │   │   └── client.ts             # Calls Python ML service
│   │   │   └── utils.ts
│   │   ├── hooks/
│   │   │   ├── use-blogger.ts
│   │   │   ├── use-critique.ts
│   │   │   ├── use-crawl-status.ts
│   │   │   └── use-auth.ts
│   │   ├── stores/
│   │   │   ├── critique-store.ts         # Zustand store
│   │   │   └── ui-store.ts
│   │   ├── types/
│   │   │   ├── blogger.ts
│   │   │   ├── article.ts
│   │   │   ├── critique.ts
│   │   │   └── embedding.ts
│   │   ├── middleware.ts                 # Next.js middleware (auth)
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── ml-service/                       # Python ML Backend
│       ├── app/
│       │   ├── __init__.py
│       │   ├── main.py                   # FastAPI entrypoint
│       │   ├── api/
│       │   │   ├── __init__.py
│       │   │   ├── routes/
│       │   │   │   ├── __init__.py
│       │   │   │   ├── embeddings.py     # JEPA encoding endpoints
│       │   │   │   └── critique.py       # Critique generation
│       │   │   └── dependencies.py
│       │   ├── core/
│       │   │   ├── __init__.py
│       │   │   ├── config.py
│       │   │   └── security.py
│       │   ├── models/
│       │   │   ├── __init__.py
│       │   │   ├── jepa/
│       │   │   │   ├── __init__.py
│       │   │   │   ├── encoder.py        # JEPA text encoder
│       │   │   │   ├── predictor.py      # Style predictor
│       │   │   │   └── style_extractor.py
│       │   │   └── critique/
│       │   │       ├── __init__.py
│       │   │       ├── rubric_generator.py
│       │   │       └── llm_critic.py     # LLM-based critique
│       │   ├── services/
│       │   │   ├── __init__.py
│       │   │   ├── embedding_service.py
│       │   │   ├── style_analysis.py
│       │   │   └── critique_service.py
│       │   ├── schemas/
│       │   │   ├── __init__.py
│       │   │   ├── embedding.py
│       │   │   └── critique.py
│       │   └── db/
│       │       ├── __init__.py
│       │       └── supabase_client.py    # Supabase Python client
│       ├── tests/
│       │   └── ...
│       ├── requirements.txt
│       ├── Dockerfile
│       └── pyproject.toml
│
├── packages/
│   └── shared/                           # Shared types/utils
│       ├── src/
│       │   ├── types.ts
│       │   └── constants.ts
│       ├── tsconfig.json
│       └── package.json
│
├── supabase/
│   ├── migrations/
│   │   ├── 20240101000000_initial_schema.sql
│   │   ├── 20240101000001_rls_policies.sql
│   │   └── 20240101000002_functions.sql
│   ├── functions/
│   │   └── process-crawl/                # Edge function for async processing
│   │       └── index.ts
│   ├── seed.sql
│   └── config.toml
│
├── docker-compose.yml
├── turbo.json                            # Turborepo config
├── package.json
└── README.md
```

---

## 3. Component Responsibilities

### 3.1 Frontend (Next.js)

|Component/Module|Responsibility|
|---|---|
|`app/(auth)/*`|Authentication pages using Supabase Auth UI|
|`app/(dashboard)/*`|Protected routes for main application|
|`app/api/crawl/route.ts`|Initiates Firecrawl job, stores job ID|
|`app/api/embeddings/route.ts`|Triggers ML service to generate JEPA embeddings|
|`app/api/critique/route.ts`|Orchestrates critique generation flow|
|`components/critique/writing-editor.tsx`|Rich text editor for user's writing input|
|`components/critique/critique-display.tsx`|Renders structured critique with highlights|
|`lib/supabase/client.ts`|Browser-side Supabase client with auth|
|`lib/ml-service/client.ts`|HTTP client for Python ML service|
|`stores/critique-store.ts`|Zustand store for critique session state|
|`hooks/use-crawl-status.ts`|Real-time subscription to crawl job status|

### 3.2 ML Service (Python/FastAPI)

|Module|Responsibility|
|---|---|
|`models/jepa/encoder.py`|JEPA-based text encoder for style embeddings|
|`models/jepa/style_extractor.py`|Extracts style features from embeddings|
|`models/critique/rubric_generator.py`|Generates style rubric from blogger's corpus|
|`models/critique/llm_critic.py`|LLM-based critique using rubric + user text|
|`services/embedding_service.py`|Manages embedding generation & storage|
|`services/critique_service.py`|Orchestrates full critique pipeline|
|`api/routes/embeddings.py`|REST endpoints for embedding operations|
|`api/routes/critique.py`|REST endpoints for critique generation|

### 3.3 Supabase

|Component|Responsibility|
|---|---|
|`auth`|User authentication (email, OAuth)|
|`bloggers` table|Stores blogger metadata (url, name, status)|
|`articles` table|Stores crawled article content|
|`embeddings` table|Stores JEPA vectors (pgvector)|
|`style_rubrics` table|Stores generated style rubrics|
|`critiques` table|Stores user submissions + critiques|
|`crawl_jobs` table|Tracks Firecrawl job status|
|`storage`|Article raw HTML/markdown backups|

---

## 4. Database Schema

```sql
-- Enable pgvector extension
create extension if not exists vector;

-- Users (managed by Supabase Auth, extended here)
create table public.profiles (
    id uuid references auth.users primary key,
    email text,
    full_name text,
    created_at timestamptz default now()
);

-- Bloggers (the writing style sources)
create table public.bloggers (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references public.profiles(id) on delete cascade,
    name text not null,
    blog_url text not null,
    description text,
    status text default 'pending', -- pending, crawling, processing, ready, error
    article_count int default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Crawled articles
create table public.articles (
    id uuid primary key default gen_random_uuid(),
    blogger_id uuid references public.bloggers(id) on delete cascade,
    url text not null,
    title text,
    content text not null,           -- cleaned markdown/text
    raw_html text,                   -- original HTML
    word_count int,
    published_at timestamptz,
    crawled_at timestamptz default now(),
    unique(blogger_id, url)
);

-- JEPA embeddings (article-level and aggregate)
create table public.embeddings (
    id uuid primary key default gen_random_uuid(),
    blogger_id uuid references public.bloggers(id) on delete cascade,
    article_id uuid references public.articles(id) on delete cascade,
    embedding_type text not null,    -- 'article', 'aggregate', 'style_centroid'
    vector vector(768),              -- JEPA embedding dimension
    metadata jsonb,                  -- additional features
    created_at timestamptz default now()
);

-- Style rubrics (derived from embeddings)
create table public.style_rubrics (
    id uuid primary key default gen_random_uuid(),
    blogger_id uuid references public.bloggers(id) on delete cascade,
    rubric jsonb not null,           -- structured style characteristics
    /*
    Example rubric structure:
    {
        "voice": { "score_range": [1,10], "description": "...", "examples": [...] },
        "sentence_structure": { ... },
        "vocabulary_level": { ... },
        "rhetoric_devices": { ... },
        ...
    }
    */
    version int default 1,
    created_at timestamptz default now()
);

-- User critique submissions
create table public.critiques (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references public.profiles(id) on delete cascade,
    blogger_id uuid references public.bloggers(id) on delete cascade,
    rubric_id uuid references public.style_rubrics(id),
    user_text text not null,
    user_embedding vector(768),
    critique_result jsonb not null,
    /*
    Example critique structure:
    {
        "overall_score": 7.5,
        "dimensions": {
            "voice": { "score": 8, "feedback": "...", "suggestions": [...] },
            ...
        },
        "highlights": [
            { "start": 0, "end": 50, "type": "strength", "comment": "..." },
            ...
        ],
        "rewrite_suggestions": [...]
    }
    */
    created_at timestamptz default now()
);

-- Crawl job tracking
create table public.crawl_jobs (
    id uuid primary key default gen_random_uuid(),
    blogger_id uuid references public.bloggers(id) on delete cascade,
    firecrawl_job_id text,
    status text default 'pending',   -- pending, running, completed, failed
    total_pages int,
    crawled_pages int default 0,
    error_message text,
    started_at timestamptz,
    completed_at timestamptz,
    created_at timestamptz default now()
);

-- Indexes
create index idx_articles_blogger on public.articles(blogger_id);
create index idx_embeddings_blogger on public.embeddings(blogger_id);
create index idx_embeddings_vector on public.embeddings 
    using ivfflat (vector vector_cosine_ops) with (lists = 100);
create index idx_critiques_user on public.critiques(user_id);
```

---

## 5. State Management & Data Flow

### 5.1 Where State Lives

```
┌─────────────────────────────────────────────────────────────────────┐
│                         STATE LOCATIONS                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  SERVER STATE (Supabase)                                     │   │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━                                     │   │
│  │  • User profiles & auth sessions                             │   │
│  │  • Bloggers, articles, embeddings                            │   │
│  │  • Style rubrics & critique history                          │   │
│  │  • Crawl job status                                          │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              │ Real-time subscriptions              │
│                              │ + React Query cache                  │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  CLIENT CACHE (React Query / TanStack Query)                 │   │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                │   │
│  │  • Cached bloggers list                                      │   │
│  │  • Cached articles per blogger                               │   │
│  │  • Cached critique history                                   │   │
│  │  • Stale-while-revalidate patterns                           │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  UI STATE (Zustand Stores)                                   │   │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━                                     │   │
│  │  critique-store.ts:                                          │   │
│  │    • currentBloggerId                                        │   │
│  │    • userWritingDraft                                        │   │
│  │    • isAnalyzing                                             │   │
│  │    • currentCritique (before saved)                          │   │
│  │                                                              │   │
│  │  ui-store.ts:                                                │   │
│  │    • sidebarOpen                                             │   │
│  │    • activeTab                                               │   │
│  │    • toast notifications                                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  COMPONENT LOCAL STATE (useState)                            │   │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                            │   │
│  │  • Form inputs                                               │   │
│  │  • Modal open/close                                          │   │
│  │  • Hover/focus states                                        │   │
│  │  • Editor cursor position                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.2 Data Flow: Adding a New Blogger

```
User                    Frontend                API Routes              External Services
  │                        │                        │                         │
  │ 1. Enter blog URL      │                        │                         │
  │───────────────────────>│                        │                         │
  │                        │                        │                         │
  │                        │ 2. POST /api/bloggers  │                         │
  │                        │───────────────────────>│                         │
  │                        │                        │                         │
  │                        │                        │ 3. Insert blogger       │
  │                        │                        │    (status: pending)    │
  │                        │                        │───────────────────────> │ Supabase
  │                        │                        │                         │
  │                        │                        │ 4. POST /crawl          │
  │                        │                        │───────────────────────> │ Firecrawl
  │                        │                        │                         │
  │                        │                        │ 5. Return job_id        │
  │                        │                        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │
  │                        │                        │                         │
  │                        │                        │ 6. Update blogger       │
  │                        │                        │    (status: crawling)   │
  │                        │                        │───────────────────────> │ Supabase
  │                        │                        │                         │
  │                        │ 7. Return blogger_id   │                         │
  │                        │<───────────────────────│                         │
  │                        │                        │                         │
  │                        │ 8. Subscribe to        │                         │
  │                        │    blogger.status      │                         │
  │                        │───────────────────────────────────────────────> │ Supabase
  │                        │                        │                         │ Realtime
  │ 9. Show "Crawling..."  │                        │                         │
  │<───────────────────────│                        │                         │
  │                        │                        │                         │
  │                        │                        │ 10. Webhook: pages done │
  │                        │                        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ Firecrawl
  │                        │                        │                         │
  │                        │                        │ 11. Store articles      │
  │                        │                        │───────────────────────> │ Supabase
  │                        │                        │                         │
  │                        │                        │ 12. Trigger embeddings  │
  │                        │                        │───────────────────────> │ ML Service
  │                        │                        │                         │
  │                        │                        │ 13. Store embeddings    │
  │                        │                        │    + generate rubric    │
  │                        │                        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │
  │                        │                        │                         │
  │                        │                        │ 14. Update blogger      │
  │                        │                        │    (status: ready)      │
  │                        │                        │───────────────────────> │ Supabase
  │                        │                        │                         │
  │                        │ 15. Realtime update    │                         │
  │                        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ Supabase
  │                        │                        │                         │
  │ 16. Show "Ready!"      │                        │                         │
  │<───────────────────────│                        │                         │
```

### 5.3 Data Flow: Generating a Critique

```
User                    Frontend                API Routes              ML Service
  │                        │                        │                       │
  │ 1. Select blogger      │                        │                       │
  │    + paste writing     │                        │                       │
  │───────────────────────>│                        │                       │
  │                        │                        │                       │
  │                        │ 2. Update Zustand      │                       │
  │                        │    critique-store      │                       │
  │                        │                        │                       │
  │ 3. Click "Critique"    │                        │                       │
  │───────────────────────>│                        │                       │
  │                        │                        │                       │
  │                        │ 4. POST /api/critique  │                       │
  │                        │    {blogger_id, text}  │                       │
  │                        │───────────────────────>│                       │
  │                        │                        │                       │
  │                        │                        │ 5. Fetch rubric       │
  │                        │                        │    from Supabase      │
  │                        │                        │                       │
  │                        │                        │ 6. POST /critique     │
  │                        │                        │    {text, rubric,     │
  │                        │                        │     blogger_embedding}│
  │                        │                        │──────────────────────>│
  │                        │                        │                       │
  │                        │                        │                       │ 7. JEPA encode
  │                        │                        │                       │    user text
  │                        │                        │                       │
  │                        │                        │                       │ 8. Compare to
  │                        │                        │                       │    blogger style
  │                        │                        │                       │
  │                        │                        │                       │ 9. LLM generate
  │                        │                        │                       │    detailed critique
  │                        │                        │                       │
  │                        │                        │ 10. Return critique   │
  │                        │                        │<──────────────────────│
  │                        │                        │                       │
  │                        │                        │ 11. Store in Supabase │
  │                        │                        │                       │
  │                        │ 12. Return critique    │                       │
  │                        │<───────────────────────│                       │
  │                        │                        │                       │
  │                        │ 13. Update store +     │                       │
  │                        │     React Query cache  │                       │
  │                        │                        │                       │
  │ 14. Display critique   │                        │                       │
  │     with highlights    │                        │                       │
  │<───────────────────────│                        │                       │
```

---

## 6. Service Connections

### 6.1 Environment Variables

```bash
# apps/web/.env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...  # Server-side only

FIRECRAWL_API_KEY=fc-xxx
FIRECRAWL_WEBHOOK_SECRET=whsec_xxx

ML_SERVICE_URL=http://localhost:8000  # or deployed URL
ML_SERVICE_API_KEY=xxx

# apps/ml-service/.env
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=eyJhbG...
OPENAI_API_KEY=sk-xxx  # For LLM critique
HF_TOKEN=hf_xxx        # For JEPA model access
```

### 6.2 Connection Code Examples

**Next.js → Supabase (Client)**

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'
import { Database } from './types'

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
```

**Next.js → Supabase (Server)**

```typescript
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createClient = () => {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )
}
```

**Next.js → Firecrawl**

```typescript
// lib/firecrawl/client.ts
import FirecrawlApp from '@mendable/firecrawl-js'

export const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY!
})

export async function crawlBlog(url: string, webhookUrl: string) {
  return firecrawl.crawlUrl(url, {
    limit: 100,
    scrapeOptions: {
      formats: ['markdown', 'html'],
    },
    webhook: webhookUrl
  })
}
```

**Next.js → ML Service**

```typescript
// lib/ml-service/client.ts
const ML_SERVICE_URL = process.env.ML_SERVICE_URL!

export async function generateEmbeddings(bloggerId: string, articles: string[]) {
  const response = await fetch(`${ML_SERVICE_URL}/api/embeddings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ML_SERVICE_API_KEY}`
    },
    body: JSON.stringify({ blogger_id: bloggerId, articles })
  })
  return response.json()
}

export async function generateCritique(
  userText: string, 
  bloggerId: string
): Promise<CritiqueResult> {
  const response = await fetch(`${ML_SERVICE_URL}/api/critique`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ML_SERVICE_API_KEY}`
    },
    body: JSON.stringify({ 
      user_text: userText, 
      blogger_id: bloggerId 
    })
  })
  return response.json()
}
```

**ML Service → Supabase (Python)**

```python
# app/db/supabase_client.py
from supabase import create_client, Client
from app.core.config import settings

def get_supabase() -> Client:
    return create_client(
        settings.SUPABASE_URL,
        settings.SUPABASE_SERVICE_KEY
    )

async def store_embeddings(blogger_id: str, embeddings: list[dict]):
    client = get_supabase()
    return client.table('embeddings').insert([
        {
            'blogger_id': blogger_id,
            'article_id': emb['article_id'],
            'embedding_type': 'article',
            'vector': emb['vector'],
            'metadata': emb['metadata']
        }
        for emb in embeddings
    ]).execute()
```

---

## 7. JEPA Architecture for Style Embeddings

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        JEPA STYLE EMBEDDING PIPELINE                        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────┐
│   Article Text      │
│   "The morning..."  │
└──────────┬──────────┘
           │
           ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  TEXT PREPROCESSING                                                      │
│  ━━━━━━━━━━━━━━━━━━                                                      │
│  • Sentence segmentation                                                 │
│  • Paragraph chunking (overlapping windows)                              │
│  • Style-relevant feature extraction (punctuation patterns, etc.)        │
└──────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  JEPA CONTEXT ENCODER (frozen or fine-tuned)                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                              │
│                                                                          │
│  ┌────────────┐   ┌────────────┐   ┌────────────┐                       │
│  │  Chunk 1   │   │  Chunk 2   │   │  Chunk N   │                       │
│  │  Encoder   │   │  Encoder   │   │  Encoder   │                       │
│  └─────┬──────┘   └─────┬──────┘   └─────┬──────┘                       │
│        │                │                │                              │
│        ▼                ▼                ▼                              │
│     [z₁]            [z₂]             [zₙ]     ← Latent representations  │
│                                                                          │
│  Key JEPA principle: Predict latent representations, not raw text        │
└──────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  STYLE PREDICTOR (trained on style prediction task)                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                         │
│                                                                          │
│  Given: [z₁, z₂, ..., zₖ]  (context chunks)                             │
│  Predict: [zₖ₊₁]           (next chunk's latent)                        │
│                                                                          │
│  The predictor learns to capture stylistic patterns                      │
│  that allow predicting how an author continues                           │
└──────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  STYLE AGGREGATION                                                       │
│  ━━━━━━━━━━━━━━━━━━                                                      │
│                                                                          │
│  Per Article:   z_article = AttentionPool([z₁, z₂, ..., zₙ])            │
│                                                                          │
│  Per Blogger:   z_style = Centroid([z_article₁, z_article₂, ...])       │
│                          + Covariance matrix for style variance          │
│                                                                          │
│  Output: 768-dim style embedding + style variance descriptor             │
└──────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  STYLE RUBRIC GENERATION                                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━                                                 │
│                                                                          │
│  Decode embeddings into interpretable dimensions:                        │
│                                                                          │
│  {                                                                       │
│    "sentence_complexity": 0.73,     // via probe classifier             │
│    "vocabulary_richness": 0.81,                                          │
│    "narrative_vs_expository": 0.45,                                      │
│    "formality_level": 0.62,                                              │
│    "rhetoric_density": 0.55,                                             │
│    ...                                                                   │
│  }                                                                       │
│                                                                          │
│  + LLM-generated natural language descriptions                           │
└──────────────────────────────────────────────────────────────────────────┘
```

### JEPA Implementation

```python
# app/models/jepa/encoder.py
import torch
import torch.nn as nn
from transformers import AutoModel, AutoTokenizer

class JEPAStyleEncoder(nn.Module):
    """
    JEPA-inspired encoder for writing style.
    Uses a pre-trained language model as the base encoder,
    with a learned predictor for style-aware representations.
    """
    
    def __init__(
        self, 
        base_model: str = "sentence-transformers/all-mpnet-base-v2",
        hidden_dim: int = 768,
        predictor_depth: int = 4
    ):
        super().__init__()
        
        # Context encoder (can be frozen or fine-tuned)
        self.encoder = AutoModel.from_pretrained(base_model)
        self.tokenizer = AutoTokenizer.from_pretrained(base_model)
        
        # JEPA-style predictor: predicts latent of next chunk
        # given context of previous chunks
        self.predictor = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(
                d_model=hidden_dim,
                nhead=12,
                dim_feedforward=hidden_dim * 4,
                dropout=0.1,
                batch_first=True
            ),
            num_layers=predictor_depth
        )
        
        # Style projection head
        self.style_head = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim),
            nn.GELU(),
            nn.Linear(hidden_dim, hidden_dim)
        )
        
    def encode_chunk(self, text: str) -> torch.Tensor:
        """Encode a single text chunk to latent space."""
        inputs = self.tokenizer(
            text, 
            return_tensors="pt", 
            truncation=True, 
            max_length=512,
            padding=True
        )
        outputs = self.encoder(**inputs)
        # Use [CLS] or mean pooling
        return outputs.last_hidden_state.mean(dim=1)
    
    def encode_article(self, text: str, chunk_size: int = 200) -> torch.Tensor:
        """
        Encode full article by chunking and aggregating.
        Returns style-aware embedding.
        """
        # Split into overlapping chunks
        chunks = self._chunk_text(text, chunk_size, overlap=50)
        
        # Encode each chunk
        chunk_embeddings = torch.stack([
            self.encode_chunk(chunk) for chunk in chunks
        ])  # [num_chunks, hidden_dim]
        
        # Pass through predictor for style-aware contextualization
        style_embeddings = self.predictor(chunk_embeddings.unsqueeze(0))
        
        # Aggregate via attention pooling
        article_embedding = self._attention_pool(style_embeddings.squeeze(0))
        
        # Project to style space
        return self.style_head(article_embedding)
    
    def compute_blogger_style(
        self, 
        articles: list[str]
    ) -> tuple[torch.Tensor, torch.Tensor]:
        """
        Compute aggregate style embedding for a blogger.
        Returns: (centroid, covariance) for style description.
        """
        article_embeddings = torch.stack([
            self.encode_article(article) for article in articles
        ])
        
        centroid = article_embeddings.mean(dim=0)
        covariance = torch.cov(article_embeddings.T)
        
        return centroid, covariance
```

---

## 8. Real-time Features

### 8.1 Crawl Status Updates

```typescript
// hooks/use-crawl-status.ts
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { RealtimeChannel } from '@supabase/supabase-js'

export function useCrawlStatus(bloggerId: string) {
  const [status, setStatus] = useState<'pending' | 'crawling' | 'processing' | 'ready' | 'error'>('pending')
  const [progress, setProgress] = useState({ crawled: 0, total: 0 })
  
  useEffect(() => {
    const supabase = createClient()
    
    // Subscribe to blogger status changes
    const channel: RealtimeChannel = supabase
      .channel(`blogger:${bloggerId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'bloggers',
          filter: `id=eq.${bloggerId}`
        },
        (payload) => {
          setStatus(payload.new.status)
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'crawl_jobs',
          filter: `blogger_id=eq.${bloggerId}`
        },
        (payload) => {
          setProgress({
            crawled: payload.new.crawled_pages,
            total: payload.new.total_pages
          })
        }
      )
      .subscribe()
    
    return () => {
      supabase.removeChannel(channel)
    }
  }, [bloggerId])
  
  return { status, progress }
}
```

---

## 9. Key API Route Implementations

### 9.1 Crawl Initiation

```typescript
// app/api/crawl/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { crawlBlog } from '@/lib/firecrawl/client'

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const { blogUrl, bloggerId } = await req.json()
  
  // Verify user owns this blogger
  const { data: { user } } = await supabase.auth.getUser()
  const { data: blogger } = await supabase
    .from('bloggers')
    .select('*')
    .eq('id', bloggerId)
    .eq('user_id', user?.id)
    .single()
    
  if (!blogger) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // Start crawl
  const webhookUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/crawl-complete`
  const crawlResult = await crawlBlog(blogUrl, webhookUrl)
  
  // Store job reference
  await supabase.from('crawl_jobs').insert({
    blogger_id: bloggerId,
    firecrawl_job_id: crawlResult.jobId,
    status: 'running',
    started_at: new Date().toISOString()
  })
  
  // Update blogger status
  await supabase
    .from('bloggers')
    .update({ status: 'crawling' })
    .eq('id', bloggerId)
  
  return NextResponse.json({ jobId: crawlResult.jobId })
}
```

### 9.2 Critique Generation

```typescript
// app/api/critique/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateCritique } from '@/lib/ml-service/client'

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const { bloggerId, userText } = await req.json()
  
  // Verify blogger exists and is ready
  const { data: blogger } = await supabase
    .from('bloggers')
    .select('*, style_rubrics(*)')
    .eq('id', bloggerId)
    .eq('status', 'ready')
    .single()
    
  if (!blogger) {
    return NextResponse.json(
      { error: 'Blogger not found or not ready' }, 
      { status: 404 }
    )
  }
  
  // Call ML service for critique
  const critiqueResult = await generateCritique(userText, bloggerId)
  
  // Store critique
  const { data: critique } = await supabase
    .from('critiques')
    .insert({
      user_id: user.id,
      blogger_id: bloggerId,
      rubric_id: blogger.style_rubrics[0]?.id,
      user_text: userText,
      user_embedding: critiqueResult.userEmbedding,
      critique_result: critiqueResult.critique
    })
    .select()
    .single()
  
  return NextResponse.json(critique)
}
```

---

## 10. Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            PRODUCTION DEPLOYMENT                            │
└─────────────────────────────────────────────────────────────────────────────┘

                              ┌─────────────────┐
                              │   Cloudflare    │
                              │      CDN        │
                              └────────┬────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              VERCEL                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                     Next.js Application                              │   │
│  │  • SSR pages                                                         │   │
│  │  • API routes (serverless functions)                                 │   │
│  │  • Edge middleware (auth)                                            │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────┬─────────────────────────────────────────┘
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          │                         │                         │
          ▼                         ▼                         ▼
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────┐
│    SUPABASE     │     │    MODAL / REPLICATE │     │   FIRECRAWL     │
│  (Managed)      │     │    (ML Service)      │     │   (API)         │
│                 │     │                      │     │                 │
│  • Postgres     │     │  • GPU inference     │     │  • Web crawling │
│  • Auth         │     │  • JEPA encoder      │     │  • Webhooks     │
│  • Realtime     │     │  • LLM critique      │     │                 │
│  • Storage      │     │  • Auto-scaling      │     │                 │
│  • Edge Funcs   │     │                      │     │                 │
└─────────────────┘     └─────────────────────┘     └─────────────────┘

Environment Variables (Vercel):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT_PUBLIC_SUPABASE_URL      → Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY → Supabase anon key (public)
SUPABASE_SERVICE_ROLE_KEY     → Supabase service key (secret)
FIRECRAWL_API_KEY             → Firecrawl API key
ML_SERVICE_URL                → Modal/Replicate endpoint
ML_SERVICE_API_KEY            → ML service auth
```

---

## 11. Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/yourorg/stylementor
cd stylementor

# Install dependencies
pnpm install

# Setup Supabase locally
supabase init
supabase start
supabase db push

# Setup environment
cp apps/web/.env.example apps/web/.env.local
cp apps/ml-service/.env.example apps/ml-service/.env

# Run development
pnpm dev  # Runs both Next.js and ML service

# Generate Supabase types
pnpm supabase:types
```

---

This architecture gives you a scalable foundation with clear separation of concerns: Next.js handles the UI and orchestration, Supabase manages persistence and auth, and the Python ML service handles the computationally intensive JEPA encoding and critique generation.