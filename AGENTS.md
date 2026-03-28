# Agent Guidelines

## Project Overview

Astro-based static site for billson.me. Uses TypeScript with strict mode enabled.

## Build Commands

All commands run from `/home/billson/Source/billson.me/site`:

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Code Style Guidelines

### TypeScript

- Use strict TypeScript (config extends `astro/tsconfigs/strict`)
- Always define explicit types for function parameters and return values
- Use `type` over `interface` for object shapes
- Enable `@ts-check` in JS config files

### Imports

- Use ES modules (`"type": "module"` in package.json)
- Order imports: external packages first, then internal modules
- Use explicit `.js` extensions for imports from JS files
- Use `@/` alias for src directory imports when configured

### Formatting

- Use tabs for indentation (not spaces)
- No explicit line length limit, but keep lines readable
- Use single quotes for strings
- No trailing semicolons required

### Naming Conventions

- Components: PascalCase (e.g., `Welcome.astro`, `Layout.astro`)
- Files/directories: camelCase or kebab-case
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE for true constants
- Astro components use `.astro` extension

### Astro Components

- Use frontmatter dashes `---` at top and bottom of script section
- Keep component script logic minimal; prefer separate TS files for complex logic
- Use scoped `<style>` tags for component-specific CSS
- Prefer CSS custom properties for theming over hardcoded values

### Error Handling

- Use try/catch for async operations
- Prefer early returns over nested conditionals
- Validate external data with type guards or zod schemas
- Log errors to console in development, handle gracefully in production

### CSS

- Use CSS variables for reusable values
- Prefer modern CSS features (flexbox, grid, custom properties)
- Mobile-first responsive design with `@media` queries
- Use `rem` units for font sizes, `px` for borders/small fixed values

### Project Structure

```
src/
  components/     # Reusable UI components
  layouts/        # Page layout templates
  pages/          # Route pages (file-based routing)
  assets/         # Static assets (images, fonts)
public/           # Static files served at root
```

### Git

- Commit message style: present tense, imperative mood
  - Good: "Add contact form component"
  - Bad: "Added contact form" or "adds contact form"
- Do not commit: `dist/`, `.astro/`, `node_modules/`, `.env` files

## Testing

No test framework currently configured. When adding tests:
- Use Vitest for unit testing
- Use Playwright for E2E testing
- Place tests alongside source files or in `__tests__` directories

## Environment

- Node.js >=22.12.0 required
- Package manager: npm
- No linting/formatting tools currently configured
