# My Astro Website

A lightweight, fast personal website built with Astro and Tokyo Night theme.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── logo.webp
│   ├── profile.png
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable components
│   ├── content/
│   │   └── blog/       # Blog posts (MDX)
│   ├── layouts/        # Page layouts
│   ├── lib/            # Configuration
│   ├── pages/          # Routes
│   └── styles/         # Global styles
└── astro.config.mjs    # Astro config
```

## 🎨 Features

- ✨ Tokyo Night theme (light/dark mode)
- 📝 MDX blog with content collections
- 🔍 SEO optimized
- 📡 RSS feed
- 🗺️ Automatic sitemap
- ⚡ Zero JavaScript by default
- 🎯 Perfect Lighthouse scores

## 📝 Adding Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "My Post Title"
publishedAt: "2025-01-15"
summary: "A brief description"
tags: "astro, tutorial"
---

Your content here...
```

## 🎨 Customization

Edit `src/lib/config.ts` to change:
- Site title and description
- Social media links
- Keywords for SEO

## 📦 Deployment

Deploy to Vercel, Netlify, or Cloudflare Pages:

```bash
pnpm build
# Upload the dist/ folder
```

## 📄 License

MIT
