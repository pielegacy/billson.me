# billson.me 

My personal site, visit it at https://billson.me.

## Technical Overview

### Stack

- **Framework**: [Astro](https://astro.build/) v6.1.1 - Static site generator with TypeScript support
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.2.2 - Utility-first CSS framework
- **Build Tool**: Vite - Integrated via `@tailwindcss/vite` plugin
- **Language**: TypeScript with strict mode enabled
- **Runtime**: Node.js >=22.12.0

### Project Structure

```
site/
├── src/
│   ├── assets/         # Static assets (images, fonts)
│   ├── components/     # Reusable Astro components (.astro files)
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Route pages (file-based routing)
│   └── styles/         # Global CSS styles
├── public/             # Static files served at root
├── dist/               # Production build output
└── .astro/             # Generated types
```

### Development

```bash
cd site
npm install    # Install dependencies
npm run dev    # Start dev server at localhost:4321
npm run build  # Build production site to ./dist/
npm run preview # Preview production build locally
```

### CI/CD

GitHub Actions workflow (`.github/workflows/build.yml`) automatically builds the site on every push to `main` branch. Node.js version >=22.12.0 is required.

### Code Style

- TypeScript with explicit types for all function parameters and return values
- Tabs for indentation
- Single quotes for strings
- No trailing semicolons required
- ES modules (`"type": "module"`)
- Components use PascalCase (e.g., `Welcome.astro`)
- Mobile-first responsive design