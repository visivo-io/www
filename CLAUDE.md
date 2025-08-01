# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Visivo.io, a data visualization and business intelligence tool. It's built with React, Vite, and Tailwind CSS, deployed on Netlify.

## Important: Visivo Product Capabilities

When updating marketing content, ensure accuracy about Visivo's actual capabilities:

### What Visivo IS:
- **Python-based CLI tool** for creating data dashboards (`pip install visivo` or `curl -fsSL https://visivo.sh | bash`)
- **YAML configuration** for defining dashboards, charts, and traces
- **Local development** with `visivo serve` command
- **Multiple data sources**: SQLite, PostgreSQL, MySQL, Snowflake, BigQuery, DuckDB
- **Plotly.js visualizations** with extensive chart types
- **Git-friendly** BI-as-code approach
- **Testing framework** for data quality
- **Alert system** with Slack/email destinations

### What Visivo IS NOT (currently):
- **No npm packages** - There is no `@visivo/cli` or `@visivo/react`
- **No embedding SDK** - Embedding features are in development (beta)
- **No Python SDK** for tracking - No `from visivo import track`
- **Limited deployment** - Uses `visivo deploy -s [stage]` not continuous deployment
- **No SOC2 certification** - Not yet SOC2 certified (in progress)

### Correct Configuration Format:
```yaml
# project.visivo.yml
name: My Project

traces:
  - name: my-trace
    model: ref(my_model)
    columns:
      x: column_name
      y: value_column
    props:
      type: scatter

charts:
  - name: my-chart
    traces:
      - ref(my-trace)

dashboards:
  - name: My Dashboard
    rows:
      - height: medium
        items:
          - chart: ref(my-chart)
```

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

## Component Architecture

### Animation System
The website uses a centralized animation system with Framer Motion:
- Animation variants are defined in `/src/utils/animations.js`
- Animated components are in `/src/components/animated/AnimatedComponents.jsx`
- Base components (without animations) are in `/src/components/cards/`
- Scroll progress bar component is in `/src/components/animated/ScrollProgressBar.jsx`

Example usage:
```jsx
import { 
  AnimatedFeatureCard, 
  AnimatedBenefitItem, 
  AnimatedCodeExample,
  AnimatedSection
} from '../components/animated/AnimatedComponents';
import ScrollProgressBar from '../components/animated/ScrollProgressBar';

// Use directly - animations built in!
<AnimatedFeatureCard 
  icon={<FiCode />} 
  title="Feature" 
  description="Description" 
  color="from-blue-500 to-blue-600" 
/>
```

### File Naming Convention
**IMPORTANT**: Never use `index.jsx` files. Always use descriptive, named files:
- ✅ `AnimatedComponents.jsx` - Good, descriptive name
- ❌ `index.jsx` - Avoid, makes files hard to find

Named files improve:
- File search and navigation
- Debugging and error tracking
- Import clarity
- Overall developer experience

## Important Notes

1. **Mixed JSX/TypeScript**: Despite having TypeScript configuration, the codebase uses `.jsx` files
2. **No Testing**: No test infrastructure is currently implemented
3. **Netlify Functions**: Serverless functions in `/netlify/functions` for backend tasks
4. **SPA Configuration**: Netlify redirects all routes to index.html for client-side routing
5. **Analytics**: Page views tracked via Segment - ensure new pages include analytics
6. **Trademark Usage**: Always use **dbt™** (with trademark symbol) when referring to dbt in marketing content

## Development Workflow

- Always test changes by curling the site or by running the server

## Blog System

### Overview
The blog system uses MDX (Markdown with JSX) for content authoring, with dynamic routing and a mix of internal and external articles.

### MDX Blog Post Structure
Blog posts are stored in `/posts/` directory as `.mdx` files with required frontmatter:

```javascript
export const frontmatter = {
  title: "Post Title",
  date: "Jan 28, 2025",
  description: "Brief description of the post",
  author: "Author Name", // Must match an author in mdxUtils.js
  tag: "Tutorial", // Used for filtering
  imgSrc: "./images/example.webp", // Thumbnail image
  imgAlt: "Image description",
  readTime: "5 min"
};
```

### Blog Components
- **BlogSection.jsx**: Lists all blog posts (both MDX posts and external articles)
- **BlogPost.jsx**: Renders individual MDX posts with styled components
- **BlogArticleCard.jsx**: Card component for blog listing
- **mdxUtils.js**: Handles MDX file loading and author metadata

### Routing
- `/blog` - Blog listing page (all articles)
- `/blog/:slug` - Individual blog post (slug matches MDX filename without extension)

### Adding New Blog Posts
1. Create new `.mdx` file in `/posts/` directory
2. Add required frontmatter export
3. Write content using Markdown and JSX components
4. If new author, add their info to `authors` object in `mdxUtils.js`

### External Articles
External articles (hosted elsewhere) are defined in `BlogSection.jsx` with `external_link` property.

## Performance Optimization Strategies

- To optimize performance of our site we should get the PR comments, find the deploy preview in the netlify comment, run lighthouse on it