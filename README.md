# Wordshiper Website

Marketing & pre-registration website for **Wordshiper** — a global Scripture memory movement.
"One verse a day. A life of worship."

## Stack

- **Frontend:** Vite + React 18 + TypeScript, Tailwind CSS, shadcn/ui, wouter (routing)
- **Backend (dev/Replit):** Express (`server/`) — newsletter, TTS demo, donations APIs
- **Backend (production/Cloudflare):** Cloudflare Pages Functions (`functions/`)
- **Database:** Neon Postgres (Drizzle ORM, schema in `shared/schema.ts`)

## Local development

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL (Neon) at minimum
npm run dev            # Express + Vite dev server on http://localhost:5000
```

## Build

```bash
npm run build:static   # static frontend only → dist/public  (Cloudflare Pages)
npm run build          # frontend + Express bundle → dist/    (Node hosting)
npm run preview        # preview the static build locally
```

## Deployment

Primary target: **Cloudflare Pages + GitHub** — see [MIGRATION_TO_CURSOR.md](./MIGRATION_TO_CURSOR.md)
for full migration/deployment instructions.

## Project layout

```
client/            React app (pages, components, data, hooks)
client/public/     Static assets (fonts, favicon, robots.txt, sitemap.xml)
server/            Express API (dev / Node hosting)
functions/         Cloudflare Pages Functions (production API)
shared/            Drizzle schema shared by both backends
attached_assets/   Brand assets & app screenshots (imported via @assets alias)
```
