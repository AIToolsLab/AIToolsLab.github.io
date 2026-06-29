# Contributing

This repository is the **public website** for the Thoughtful AI Tools Lab
(https://thoughtful-ai.com). The research application itself lives in a separate
repo: [`AIToolsLab/writing-tools`](https://github.com/AIToolsLab/writing-tools).
Changes here are about how the lab presents its people, projects, vision, and
publications — not the writing tool's behavior.

## Getting set up

- Requires Node.js 18+ and npm.
- `npm install` — install dependencies.
- `npm run dev` — local dev server at http://localhost:4321.
- `npm run build` — production build into `dist/`. **CI runs this on every PR; if
  it fails, the PR can't merge, so run it locally before pushing.**

## Where things live

| You want to change... | Edit... |
|-----------------------|---------|
| A team member (add yourself, mark graduated) | a JSON file in `src/data/people/` — see that folder's `README.md` |
| Publications | the `publications` array in `src/pages/publications.astro` |
| Projects | `src/pages/projects.astro` and the per-project pages in `src/pages/projects/` |
| The lab's vision statement | `src/pages/vision.md` |
| Site-wide header/footer/nav | `src/components/lab/` |
| Page shell, `<head>`, SEO tags | `src/layouts/Layout.astro` |

## Adding yourself to the team

See [`src/data/people/README.md`](src/data/people/README.md). Short version: add
your photo to `public/people/`, copy `_example.json` to `your_name.json`, fill it
in, and open a PR. One file per person means no merge conflicts when several
people add themselves at once.

## Conventions

- Styling is [Tailwind CSS](https://tailwindcss.com/) utility classes. Match the
  classes already used on nearby elements rather than introducing new CSS.
- Pages are [Astro](https://docs.astro.build/) (`.astro`); interactive UI is React
  (`.tsx`) under `src/components/`.
- Keep content data-driven where a pattern exists (e.g. the people JSON files) so
  future contributors edit data, not markup.

## Deployment

The site is deployed on **Cloudflare** (see `wrangler.jsonc`), serving the built
`dist/` directory. You don't need to deploy manually — merging to `main` is enough.
