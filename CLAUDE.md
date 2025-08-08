# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI-First Vietnam Strategy website built with Next.js, TypeScript, and Tailwind CSS. It's an interactive executive dashboard for Vietnamese enterprises showcasing AI-First operating models and strategic assessments.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom Vietnamese business theme colors
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualizations
- **Icons**: Lucide React
- **Fonts**: Inter (body), Playfair Display (headings)

## Development Commands

```bash
# Install dependencies
npm install

# Development server (user will run manually)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # React components
│   ├── charts/    # Chart components (Recharts)
│   └── sections/  # Page section components
├── data/          # Content and data files
└── lib/           # Utilities, types, and helpers
```

## Key Architecture Patterns

### Component Organization
- Section components in `src/components/sections/` handle major page sections
- Each section is self-contained with its own data and styling
- AuthenticatedApp component wraps the main application with password protection

### Data Management
- All content is centralized in `src/data/content.ts`
- Type definitions in `src/lib/types.ts`
- No external API calls - all data is static

### Styling Convention
- Uses Tailwind CSS with custom theme colors:
  - Vietnamese red: `#da1a32`
  - Gold: `#ffd700`
  - Navy: `#1e293b`
  - Executive grays: `executive-dark`, `executive-medium`, `executive-light`
- Responsive design with mobile-first approach

### Path Aliases
TypeScript path aliases configured:
- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/app/*` → `./src/app/*`
- `@/lib/*` → `./src/lib/*`
- `@/data/*` → `./src/data/*`

## Deployment

### GitHub Pages
The site is configured for GitHub Pages deployment:
- Static export enabled when `GITHUB_ACTIONS=true`
- Base path: `/ai-first`
- Automated deployment via `.github/workflows/deploy.yml`

### Local Development
- No test framework currently configured
- Static site generation for production builds
- Output directory: `out/` for static export

## Important Notes

- This is a single-page application with client-side navigation
- Password protection implemented client-side in `AuthenticatedApp`
- No backend API - all functionality is client-side
- Charts and animations are performance-optimized for executive presentations
- Content focuses on Vietnamese business context and AI transformation strategies