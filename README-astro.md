# Thoughtful AI Tools Lab - Astro Version

Astro-based version of the Thoughtful AI Tools Lab website.


## Project Structure

```
/                  # Project root
├── public/        # Static assets
├── src/
│   ├── components/
│   │   └── lab/   # Lab-specific components
│   ├── layouts/   # Layouts
│   └── pages/     # Pages
├── astro.config.mjs
├── package.json
└── tailwind.config.js
```


## Development

- Requires Node.js 18+ and npm.
- Install dependencies: `npm install`
- Start dev server: `npm run dev` (default: http://localhost:4321)
- Build for production: `npm run build` (output in `dist/`)


## Features

- Astro, React, TypeScript, Tailwind CSS
- Material Tailwind components
- Responsive layout
- SEO meta tags and semantic HTML


## Pages

- `/` (Home): Lab mission, call-to-action
- `/about`: Lab info, team, director
- `/publications`: Research publications
- `/projects`: Research projects


## Components

- `LabHeader`: Navigation header
- `LabHero`: Homepage hero
- `LabFooter`: Footer


## Content Management

- Publications data: in publications page
- Team photos: `/people/`
- Publication assets: `/pubs/`


## Configuration

- Base URL: `/`
- Site URL: `https://thoughtful-ai.com`
- TypeScript: strict mode



## Deployment

Deploy to GitHub Pages or any static host. Output: `dist/`.

