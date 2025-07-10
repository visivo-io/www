# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Visivo.io, a data visualization and business intelligence tool. It's built with React, Vite, and Tailwind CSS, deployed on Netlify.

## Development Commands

```bash
# Use Node.js version 20
nvm use 20

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Code quality checks (run these before committing)
yarn lint          # Check for linting errors
yarn typecheck     # Check TypeScript types
yarn format        # Format code with Prettier

# Fix issues automatically
yarn lint:fix      # Fix linting errors
yarn format        # Fix formatting
```

## Architecture

### Technology Stack
- **Frontend**: React 18 with JSX (not TypeScript despite tsconfig)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Flowbite React components
- **Routing**: React Router v7
- **Content**: MDX for blog posts
- **Deployment**: Netlify with serverless functions
- **Analytics**: Segment

### Project Structure
- `/src` - Application source code
  - `main.jsx` - Entry point with all routes defined
  - `App.jsx` - Main layout with navigation
  - `/components` - Reusable components
  - `/solutions` - Solution-specific pages
  - `/analytics` - Segment integration
  - `/utils` - MDX processing utilities
- `/posts` - Blog content in MDX format
  - `/drafts` - Unpublished blog posts
- `/public` - Static assets (images, videos, gifs)
- `/netlify/functions` - Serverless functions (e.g., Slack integration)

### Key Features
1. **Dynamic Comparison Pages**: Auto-generated from `vendor-data.json` for all vendor combinations
2. **Blog System**: MDX-based with dynamic routing (`/blog/:slug`)
3. **Marketing Pages**: Home, Pricing, About Us, Examples, Get Started
4. **Solution Pages**: Tailored for Business Intelligence, Software Engineering, Embedding

### Routing
All routes are defined in `src/main.jsx`. The app uses React Router v7 with:
- Static routes for main pages
- Dynamic route for blog posts (`/blog/:slug`)
- Programmatically generated comparison routes from vendor data
- 404 catch-all route

### External Dependencies
- **Main App**: Links to app.visivo.io for login/signup
- **Documentation**: External docs site
- **Community**: Slack workspace and GitHub repository
- **Support**: Chatlio widget for customer support

## Important Notes

1. **Mixed JSX/TypeScript**: Despite having TypeScript configuration, the codebase uses `.jsx` files
2. **No Testing**: No test infrastructure is currently implemented
3. **Netlify Functions**: Serverless functions in `/netlify/functions` for backend tasks
4. **SPA Configuration**: Netlify redirects all routes to index.html for client-side routing
5. **Analytics**: Page views tracked via Segment - ensure new pages include analytics