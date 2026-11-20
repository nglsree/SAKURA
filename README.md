# 🌸 SAKURA — landing page

**Your space. Your style. Your links.**

The landing page for Sakura, a free-first, open-source link-in-bio platform for designers, artists,
photographers, developers and creators.

It's a fully static site (no backend, no API keys, no paid services), built with
React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide icons.

---

## Folder structure

```
PROJECT-SAKURA/
├─ .github/workflows/
│  └─ ci.yml                    # build check on every push / PR
├─ .gitattributes               # LF line endings on every OS
├─ public/
│  ├─ _headers                  # Cloudflare Pages cache + security headers
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/
│  │  ├─ sections/              # one file per page section
│  │  │  ├─ Navbar.tsx          # responsive nav + mobile menu
│  │  │  ├─ Hero.tsx            # headline + interactive phone preview
│  │  │  ├─ ThemeShowcase.tsx   # live 6-theme customization demo
│  │  │  ├─ Features.tsx        # 12 features, MVP vs planned filter
│  │  │  ├─ HowItWorks.tsx
│  │  │  ├─ WhySakura.tsx       # "About" — philosophy
│  │  │  ├─ CreatorShowcase.tsx # "Explore" — 5 example creators
│  │  │  ├─ OpenSource.tsx      # "GitHub" — community section
│  │  │  ├─ Pricing.tsx
│  │  │  ├─ FinalCTA.tsx
│  │  │  └─ Footer.tsx
│  │  └─ ui/                    # Button, Logo, Reveal, dialogs, icons, decorations
│  ├─ profile/                  # the profile renderer used by every preview
│  │  ├─ themes.ts              # themes = plain data (CSS variables)
│  │  ├─ profiles.ts            # fictional example creators
│  │  ├─ ProfileCard.tsx        # renders a profile from a theme
│  │  ├─ Wallpaper.tsx          # CSS/SVG wallpapers (no image files)
│  │  ├─ Avatar.tsx             # illustrated placeholder avatars
│  │  └─ PhoneFrame.tsx
│  ├─ config.ts                 # URLs, placeholders, nav items
│  ├─ index.css                 # design tokens (CSS variables) + Tailwind
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html                   # SEO metadata, fonts
├─ .env.example
├─ vite.config.ts
├─ tsconfig*.json
└─ package.json
```

### How theming works

Every profile preview is rendered by `ProfileCard` from a theme object in `src/profile/themes.ts`.
A theme is just CSS custom properties (`--pf-bg`, `--pf-accent`, `--pf-radius`, `--pf-font-display`…) plus
a wallpaper and a couple of layout switches. To add a theme, copy one, change values, and add it to
`showcaseThemes`. The site's own palette lives as CSS variables at the top of `src/index.css`.

---

## 1. Run locally

Requires **Node.js 20.19+ or 22.12+**.

```powershell
cd PROJECT-SAKURA
npm install
npm run dev
```

Open http://localhost:5173.

Other scripts:

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run build`   | Type-check and build the static site to `dist/` |
| `npm run preview` | Serve the built `dist/` locally                 |

### Placeholders to replace

| What               | Where                                              |
| ------------------ | -------------------------------------------------- |
| GitHub repo URL    | `VITE_GITHUB_URL` env var, or `src/config.ts`      |
| Contact email      | `VITE_CONTACT_EMAIL` env var, or `src/config.ts`   |
| Domain             | `index.html` (canonical / og:url), `public/robots.txt`, `public/sitemap.xml` |
| Profile domain     | `PROFILE_DOMAIN` in `src/config.ts` (mockups use the reserved `sakura.example`) |
| Social image       | add `public/og-image.png` (1200×630) and un-comment the tag in `index.html` |

While `VITE_GITHUB_URL` is unset, the site visibly labels GitHub links as placeholders.
Copy `.env.example` to `.env` to set them locally. These are **public** build-time values — never put secrets in `VITE_*` variables.

---

## 2. Push to GitHub

1. Create an empty repository on GitHub (no README/licence, so there's nothing to merge), e.g. `sakura`.
2. In the project folder:

```powershell
git init
```

```powershell
git add .
```

```powershell
git commit -m "Initial Sakura landing page"
```

```powershell
git branch -M main
```

```powershell
git remote add origin https://github.com/YOUR-USERNAME/sakura.git
```

```powershell
git push -u origin main
```

The **CI** workflow will build the site on every push and pull request.

---

## 3. Deploy free on Cloudflare Pages

**Recommended: Git integration (no secrets needed)**

1. Sign in at https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorise GitHub and pick your `sakura` repository.
3. Build settings:
   - Framework preset: **Vite** (or *None*)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables (optional): `NODE_VERSION = 22`, `VITE_GITHUB_URL`, `VITE_CONTACT_EMAIL`
4. **Save and Deploy.** You'll get a free `https://<project>.pages.dev` URL.

Every push to `main` redeploys automatically, and pull requests get preview URLs.
`public/_headers` adds long-term caching for hashed assets plus basic security headers.

Deployment is handled entirely by Cloudflare's Git integration — no API tokens or GitHub secrets are needed.
(If you ever prefer deploying from GitHub Actions instead, use `cloudflare/wrangler-action` with a
`CLOUDFLARE_API_TOKEN` secret — but don't run both methods at once.)

---

## 4. Connect a custom domain later

1. Cloudflare dashboard → your Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `sakura.yourdomain.com` or the apex `yourdomain.com`).
3. If the domain's DNS is already on Cloudflare, the record is created automatically.
   Otherwise add the `CNAME` record Cloudflare shows (pointing to `<project>.pages.dev`) at your DNS provider —
   apex domains need the domain's nameservers moved to Cloudflare.
4. HTTPS is issued automatically once DNS resolves (usually minutes).
5. Replace `sakura.example` in `index.html`, `public/robots.txt` and `public/sitemap.xml` with the new domain and push.

---

## Principles for this page

- No fake sign-up, auth, publishing or analytics. Buttons for unreleased features open an honest "not live yet" dialog.
- Features are labelled **MVP** (first release) or **Planned** — nothing is claimed as already working.
- No invented prices.
- All creators and links shown are fictional.
- Motion respects `prefers-reduced-motion`.

## Licence

MIT — see [LICENSE](LICENSE).
