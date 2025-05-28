# Thoughtful AI Tools Lab - Astro Version

This branch contains an Astro version of the Thoughtful AI Tools Lab website, built using modern web technologies.

## 🚀 Project Structure

```
/
├── public/          # Static assets (images, people photos, publications)
├── src/
│   ├── components/  # Reusable components
│   │   └── lab/     # Custom lab components (LabHeader, LabHero, LabFooter)
│   ├── layouts/     # Page layouts
│   └── pages/       # Website pages
├── astro.config.mjs # Astro configuration
├── package.json     # Dependencies and scripts
└── tailwind.config.js # Tailwind CSS configuration
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📚 Key Features

- **Modern Stack**: Built with Astro, React, TypeScript, and Tailwind CSS
- **Material Tailwind**: Uses Material Tailwind components for consistent UI
- **Responsive Design**: Fully responsive layout that works on all devices
- **Fast Performance**: Astro's partial hydration ensures optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📄 Pages

- **Home** (`/`): Hero section with lab mission and call-to-action buttons
- **About** (`/about`): Information about the lab, mission, team members, and director
- **Publications** (`/publications`): Research publications with links to papers and posters
- **Projects** (`/projects`): Current and past research projects

## 🎨 Components

### Custom Lab Components
- `LabHeader`: Navigation header with lab branding and menu
- `LabHero`: Hero section for the homepage
- `LabFooter`: Footer with copyright and navigation links

### Styling
- Tailwind CSS for utility-first styling
- Material Tailwind for pre-built components
- Custom color scheme matching lab branding

## 📁 Content Management

- Publications data is embedded in the publications page
- Team member photos are stored in `/people/`
- Publication assets are stored in `/pubs/`

## 🔧 Configuration

- **Base URL**: Currently set to `/` for root domain deployment
- **Site URL**: Configured for `https://aitoolslab.github.io`
- **TypeScript**: Full TypeScript support with strict checking

## 📈 Performance

The Astro version provides significant performance improvements over the original Quarto site:
- Faster page loads through partial hydration
- Optimized bundle sizes
- Modern build pipeline with Vite

## 🚀 Deployment

This site is designed to be deployed to GitHub Pages or any static hosting service. The build output in `dist/` contains all necessary static files.

---

Built with ❤️ by the Thoughtful AI Tools Lab team.
