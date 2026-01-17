# Kifzl X Pterodactyl Documentation Website

## Overview
This is the documentation website for Kifzl X Pterodactyl, a game server management panel compatible with pterodactyl-native and blueprint addons.

## Tech Stack
- **Framework**: Next.js 15 with Turbopack
- **Documentation**: Fumadocs (fumadocs-ui, fumadocs-core, fumadocs-mdx)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Lucide React, React Icons, Revicons

## Project Structure
```
src/
├── app/
│   ├── (home)/           # Home page and landing sections
│   │   ├── blog/         # Blog pages
│   │   ├── docs/         # Docs portal page
│   │   ├── donate/       # Donation page
│   │   └── icons/        # Icons page
│   ├── api/              # API routes (search, version, stars)
│   ├── telegram/          # Telegram redirect
│   └── docs/[...slug]/   # Documentation pages (catch-all route)
├── components/           # Reusable components
├── lib/                  # Utilities and source configuration
└── mdx-components.tsx    # MDX component overrides
content/
└── docs/                 # MDX documentation content
public/                   # Static assets
```

## Running Locally
The development server runs on port 5000:
```bash
npm run dev -- -H 0.0.0.0 -p 5000
```

## Building for Production
```bash
npm run build
npm run start -- -H 0.0.0.0 -p 5000
```

## Recent Changes
- 2026-01-17: Configured for Replit environment
  - Fixed route conflict by converting optional catch-all `[[...slug]]` to required catch-all `[...slug]`
  - Added `allowedDevOrigins` to Next.js config for Replit proxy compatibility
  - Set up deployment configuration for autoscale
  