# MIGRATION_TO_CURSOR.md — Wordshiper Website

Handoff guide: Replit prototype → GitHub → Cursor (macOS) → Cloudflare Pages.

---

## 1. Stack summary

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS + shadcn/ui (Radix) |
| Routing | wouter (client-side) |
| i18n | Custom translation system (`client/src/data/`), 12 UI languages; new pages KO/EN |
| Fonts | Self-hosted in `client/public/fonts/` (EB Garamond Italic, Binggrae Taom) + Google Fonts (Inter, EB Garamond, Noto Serif KR) |
| Backend (dev) | Express in `server/` (used on Replit / Node hosting) |
| Backend (prod) | Cloudflare Pages Functions in `functions/` |
| DB | Neon Postgres via Drizzle ORM (`shared/schema.ts`) |

## 2. Exact commands

```bash
npm install
npm run dev            # full dev server (Express + Vite) → http://localhost:5000
npm run build:static   # static frontend build (Cloudflare Pages)
npm run build          # frontend + Express bundle (Node hosting alternative)
npm run preview        # preview static build
```

## 3. Deploy output folder

- **Cloudflare Pages:** `dist/public` (from `npm run build:static`)
- Cloudflare automatically picks up `functions/` at the repo root for the API.

## 4. Environment variables

See `.env.example`. Summary:

| Var | Required | Used by |
|---|---|---|
| `DATABASE_URL` | Yes (forms) | `server/db.ts`, `functions/api/newsletter/subscribe.ts` |
| `SENDGRID_API_KEY` | Optional | Admin email notification on new subscriber |
| `GOOGLE_APPLICATION_CREDENTIALS_JSON` | Optional | Legacy TTS/STT demo endpoints (Express only) |
| `SESSION_SECRET` | Only if Replit auth on | `server/replitAuth.ts` |
| `REPLIT_DOMAINS`, `REPL_ID` | Replit only | Auth auto-disables when unset (portable mode) |

## 5. Third-party services

- **Neon Postgres** — newsletter/pre-registration storage (`newsletter_subscribers` table)
- **SendGrid** — optional admin notification email
- **Google Fonts** — Inter, EB Garamond, Noto Serif KR (CDN)
- (Legacy, Express-only, not used by the new site: Google Cloud TTS/STT demo, Stripe donation endpoints)

## 6. Known Replit-only leftovers (safe to remove after migration)

- `server/replitAuth.ts` — Replit OIDC auth; already auto-disables without `REPLIT_DOMAINS`. The new site does not use login.
- `.replit`, `replit.md`, `replit.nix` (if present) — Replit config/docs.
- Legacy pages not routed: `client/src/pages/{home,revolution-home,simple-revolution-home,enhanced-revolution-home}.tsx` and legacy components (`hero.tsx`, `hero-section.tsx`, etc.) — keep or delete at will.
- `attached_assets/` contains many unused legacy uploads; the site imports only files referenced via `@assets/...` (grep for `@assets` to see the live list).

## 7. Cloudflare Pages settings

| Setting | Value |
|---|---|
| Build command | `npm run build:static` |
| Output directory | `dist/public` |
| Node version | 20 (set `NODE_VERSION=20` env var) |
| Functions | auto-detected from `functions/` |
| Env vars | `DATABASE_URL` (required), `SENDGRID_API_KEY` (optional) |

## 8. Domain cutover checklist (www.wordshiper.org)

1. Push repo to GitHub; connect repo to Cloudflare Pages.
2. Deploy and verify the `*.pages.dev` preview (routes, form, both languages).
3. Cloudflare Pages → Custom domains → add `www.wordshiper.org`.
4. At the DNS host (whois.com), point `www` CNAME to the `pages.dev` target (or move NS to Cloudflare).
5. Keep the root-domain → `www` 301 redirect (registrar forwarding or Cloudflare redirect rule).
6. After propagation, remove the Replit deployment / custom-domain binding.

## 9. Login · DB · Admin → Neon + Cloudflare Workers plan

The current site needs no login (Replit auth auto-disables off-Replit). If/when
login, richer DB features, or an admin dashboard are added, use this architecture:

### Database — Neon Postgres (already in place)
- Schema lives in `shared/schema.ts` (Drizzle). Keep it as the single source of truth.
- Migrations: `npm run db:push` (drizzle-kit) from Cursor against `DATABASE_URL`.
- From Workers/Pages Functions, always use `@neondatabase/serverless` (HTTP/WebSocket
  driver — already a dependency, used by `functions/api/newsletter/subscribe.ts`).
  Never use `pg`/TCP drivers in Workers.

### API — Cloudflare Workers / Pages Functions
- Small endpoints (forms, counters): keep as Pages Functions in `functions/api/...`
  (deployed automatically with the site, zero extra infra).
- A larger API surface (auth, admin CRUD): create a dedicated Worker with Hono
  (`npm create hono@latest -- --template cloudflare-workers`), reuse `shared/schema.ts`
  + `drizzle-orm/neon-http`, and route it via `api.wordshiper.org` or a
  `/api/*` service binding on the Pages project.
- Express code in `server/routes.ts` maps almost 1:1 to Hono handlers; migrate
  endpoint by endpoint, keeping request/response shapes identical so the frontend
  doesn't change.

### Auth — standard, portable (no Replit OIDC)
- Recommended: **Lucia or Auth.js (JWT session cookies) on the Worker**, or
  Clerk/Auth0 if managed auth is preferred. Google/email OAuth providers.
- Store users in the existing `users` table (`shared/schema.ts`); sessions as
  httpOnly secure cookies (JWT) — no server session store needed on Workers.
- Delete `server/replitAuth.ts` after cutover; the frontend `useAuth` hook only
  needs `/api/auth/user` to keep returning the same JSON shape.

### Admin dashboard
- Add as a protected route in the same SPA (e.g. `/admin`) guarded by an
  `role = 'admin'` check on the Worker API — avoids a second deploy target.
- Data needs (subscribers list, donations, volunteers) already have tables;
  expose read endpoints from the Worker with the admin JWT check.

### Env vars to add at that stage
| Var | Purpose |
|---|---|
| `JWT_SECRET` | signing session tokens |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | OAuth login |
| `ADMIN_EMAILS` | comma-separated bootstrap admin allowlist |

## 10. Deploy rehearsal (run this before the real cutover)

### Prerequisites
- Repo pushed to GitHub (public or private; Cloudflare Pages supports both).
- A Cloudflare account with Pages enabled (free tier is fine).

### Steps

#### (a) Push to GitHub
```bash
git add -A
git commit -m "chore: Cloudflare Pages deploy rehearsal prep"
git push origin main
```

#### (b) Create the Cloudflare Pages project
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the GitHub repo.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build:static`
   - **Build output directory:** `dist/public`
   - **Root directory:** *(leave blank — repo root)*
4. **Environment variables → Production** (add before first deploy):
   - `NODE_VERSION` = `20`
   - `DATABASE_URL` = *(your Neon connection string)*
   - `SENDGRID_API_KEY` = *(optional — admin email notification)*
5. Click **Save and Deploy**.

#### (c) Set DATABASE_URL (if not done above)
Pages → your project → **Settings → Environment variables → Production → Add variable**:
- Key: `DATABASE_URL`  Value: `postgresql://...` (from Neon dashboard)

After adding/changing env vars, trigger a **Retry deployment** so the Functions pick them up.

#### (d) Verify on *.pages.dev
Once the deploy is green, open the assigned `*.pages.dev` URL and check:

| Test | Expected result |
|---|---|
| `https://<name>.pages.dev/` | Home page loads (both KO & EN) |
| `https://<name>.pages.dev/about` | About page loads on direct entry |
| `https://<name>.pages.dev/investors` | Investors page loads on direct entry |
| Pre-registration form submit | `POST /api/newsletter/subscribe` returns 200; row appears in Neon |
| Language switcher | Toggles KO ↔ EN and persists on reload |
| `/fonts/BinggraeTaom.woff2` | 200 (self-hosted font served) |

If `/about` or `/investors` return a 404, confirm that `dist/public/_redirects` is present in the build output (`/* /index.html 200`).

---

## 11. "Do not break" list

- **Routes:** `/` (home), `/about`, `/investors` — client-side routing needs SPA fallback. Cloudflare Pages serves SPA fallback automatically for Vite builds (404 → `index.html`); if not, add a `_redirects` file with `/* /index.html 200`.
- **Form:** `POST /api/newsletter/subscribe` (pre-registration) — must keep working (Pages Function).
- **SEO:** `<title>`/meta/OG in `client/index.html`, `robots.txt`, `sitemap.xml`, `favicon.svg`.
- **Fonts:** `client/public/fonts/*` must be deployed (relative URLs `/fonts/...`).
- **i18n:** language switcher persists in `localStorage` — no server dependency.
