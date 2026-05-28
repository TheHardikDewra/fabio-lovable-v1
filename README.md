# fabio-lovable-v1

v1 build of the **Nuora Gut Biofilm Ritual** PDP, exported from Lovable.dev. Built on Vite + React + TanStack Router + Tailwind + Supabase, deployable to Cloudflare via Wrangler.

## Stack

- **Build:** Vite + Bun
- **Framework:** React + TanStack Router (file-based routing)
- **Styling:** Tailwind + shadcn/ui
- **Backend:** Supabase
- **Hosting:** Cloudflare (Wrangler)

## Local setup

```bash
bun install
cp .env.example .env   # fill with real Supabase keys
bun run dev
```

## Project structure

```
.
├── src/                  # App source
│   ├── assets/           # Static images (BA shots, doctor headshots, bottles, etc)
│   ├── components/       # React components
│   ├── routes/           # TanStack file-based routes
│   ├── integrations/     # Supabase client + auth middleware
│   └── context/          # React contexts (CartContext)
├── public/               # Static public assets
│   └── videos/           # Hero + UGC videos (NOT in git - too large, see below)
├── supabase/             # Supabase config
├── reference/            # Reference materials (the saved PDP page from production)
└── .lovable/             # Lovable.dev project metadata
```

## Missing from git

Two videos were excluded because they exceed GitHub's 100MB per-file limit:

- `public/videos/gallery-hero.mp4` (~123MB)
- `public/videos/ugc-1.mp4` (~115MB)

Get them from the original Lovable export or ask Hardik. For production, host these on a CDN (Cloudflare R2, Bunny, Mux) and reference via URL instead of bundling.

## Reference

`reference/nuora-gut-biofilm-ritual.html` is the saved HTML from the live Nuora PDP - use it as the visual + copy spec when iterating.

## Notes

- `.env` contains only Supabase **publishable** keys (safe to expose), but kept out of git as best practice. Copy `.env.example` to start.
- Original Lovable `.git` worktree pointer was junk from their Nix sandbox; stripped.
