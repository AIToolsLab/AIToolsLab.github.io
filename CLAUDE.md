# CLAUDE.md

Guidance for AI coding agents working in this repo. For human onboarding see
[`CONTRIBUTING.md`](CONTRIBUTING.md), which this file does not repeat.

## What this repo is

The **public website** for the Thoughtful AI Tools Lab (https://thoughtful-ai.com),
built with Astro 5 + React + Tailwind, deployed on Cloudflare. The lab's actual
research application is a *different* repo (`AIToolsLab/writing-tools`) — do not
look for app/model code here.

## Build & verify

- `npm install`, then `npm run build` must pass. CI (`.github/workflows/ci.yml`)
  runs the build on every PR. Always run `npm run build` before claiming a change
  works — there is no test suite, so a clean build is the bar.

## Agent-specific notes

- **Content is data-driven; prefer editing data over markup.** People are
  per-person JSON files in `src/data/people/`; publications are an array in
  `src/pages/publications.astro`. When adding similar content, follow the
  existing data pattern instead of hand-writing new markup blocks.
- The page shell, SEO tags, and canonical URL live in `src/layouts/Layout.astro`.
  The canonical URL is derived from the request path — don't hardcode it.
- Header/footer are React islands hydrated with `client:load` so they appear in
  static HTML. Don't switch them back to `client:only`.
- Match surrounding Tailwind utility classes; avoid introducing bespoke CSS.

## Why this file is separate from CONTRIBUTING.md / README

`README` orients a visitor ("what is this"), `CONTRIBUTING.md` onboards a human
contributor ("how to set up and where things live"), and `CLAUDE.md` is read
automatically by coding agents as standing instructions — so it focuses on the
constraints and verification steps an agent needs to not break things, and stays
short to keep the agent's context lean.
