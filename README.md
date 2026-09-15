# Portfolio

The source for my personal game-development portfolio — a single-page React site that showcases my projects, experience, and skills, with all content managed through a Git-backed CMS.

## About

I'm **Mohammed Amaan Khan**, a **Game Developer** working in Unity and C#.

My work sits across two connected areas: building games, and designing the systems that make them work. That means gameplay programming, level design, and prototyping the mechanics that connect the two.

My broader direction is **Technical Game Design** — the space where design intent and implementation meet. I'm building toward that from a gameplay programming foundation, not presenting myself as an established technical designer.

> Building games and designing the systems that make them work.

## Portfolio

**Live Portfolio:** [darkrayportfolio.mooo.com](https://darkrayportfolio.mooo.com/)

<!-- Update the URL above if the domain ever changes. This is the only place the live URL is stored. -->

## Features

- Single-page portfolio with smooth section navigation (Work, About, Experience, Skills, Contact)
- Selected Work showcase, ordered by a CMS-managed `order` field
- Project detail view with galleries, contributions, systems and mechanics, design decisions, technical challenges, and lessons learned
- External project links (store, GitHub, itch.io, custom) rendered per project
- Experience and education timeline
- Skill groups with proficiency levels (Primary, Familiar, Learning)
- Fully responsive layout with a mobile navigation menu
- CMS-editable site settings, section headings, and SEO metadata
- Build-time SEO injection into `index.html` (title, description, author, theme colour)
- Decap CMS admin panel served at `/admin`
- Static build output — no server runtime required

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| TypeScript | Application code and content typing |
| Vite | Dev server and production build |
| Decap CMS | Content management UI (`/admin`) |
| GitHub | Content storage, version control, and CMS backend |
| GitHub Actions | Deployment automation |
| Docker | Isolated build step on the deploy host |
| Caddy | Reverse proxy and TLS termination |
| ESLint | Linting |

## Content Management

All portfolio content lives in the repository as JSON files and is edited through **Decap CMS**, which is served as a static admin panel at `/admin`.

The CMS uses the **GitHub backend**, meaning every content change made in the CMS is committed back to this repository. There is no separate database — Git *is* the content store.

Content is organised as follows:

| Collection | Location | Type |
|---|---|---|
| Projects | `src/content/projects/` | Multiple entries |
| Experience | `src/content/experience/` | Multiple entries |
| Education | `src/content/education/` | Multiple entries |
| Skills | `src/content/skills/` | Multiple entries |
| About | `src/content/site/about.json` | Single file |
| Contact | `src/content/site/contact.json` | Single file |
| Site Settings | `src/content/site/settings.json` | Single file |

Supporting details:

- The collection schemas are defined in `public/admin/config.yml`.
- Uploaded media is stored in `public/uploads/` and served from `/uploads`.
- Site settings include branding, role, hero copy, section headings, SEO metadata, and optional profile image / resume files.
- Because content is committed to Git, every CMS edit is versioned and reviewable.
- Authentication is handled by an external OAuth broker configured in `config.yml`. Its credentials are not stored in this repository.

## Deployment

Pushes to `main` deploy automatically. The pipeline is defined in `.github/workflows/deploy.yaml`.

```text
Decap CMS / GitHub
        ↓
GitHub Actions
        ↓
Oracle VPS
        ↓
Build
        ↓
Caddy
        ↓
Live Portfolio
```

In short:

1. A commit lands on `main` (either directly or via the CMS).
2. The GitHub Actions workflow connects to the deploy host over SSH.
3. The host pulls the latest commit and runs the production build inside a pinned Node Docker container.
4. Caddy serves the built output and terminates TLS.

Deployment requires repository secrets and host-level configuration that are intentionally not documented here.

## Project Structure

```text
public/
  admin/            Decap CMS admin panel and config.yml
  uploads/          CMS-managed media
src/
  components/       React UI components
  content/          CMS-managed JSON content
  data/             Content loading and normalisation
  types/            TypeScript types
  utils/            Shared helpers
.github/workflows/  Deployment workflow
```

## Local Development

Requirements: Node.js and npm.

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # type-check and build for production
npm run preview # preview the production build
npm run lint    # run ESLint
```

The dev server also serves the CMS at `/admin`. Local CMS editing requires OAuth configuration and will not work against `localhost` without additional setup — editing the JSON content files directly is the normal local workflow.
