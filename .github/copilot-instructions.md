# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a Next.js app (bootstrapped with `create-next-app`) using the `/app` directory structure.
- Main entry point: `app/page.js`. Global layout: `app/layout.js`. Global styles: `app/globals.css`.
- Each subfolder in `app/shoots/` represents a photo shoot, with its own route (e.g., `app/shoots/keisha/page.js`).
- Static assets (SVGs, images) are in `public/` and `public/photos/`.

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Hot reload:** Editing files in `app/` auto-updates the browser.
- **No custom test/build scripts** detected; use standard Next.js commands.
- **Deploy:** Use Vercel for production deployment (see README for link).

## Patterns & Conventions
- **Routing:** Follows Next.js App Router conventions. Each folder with `page.js` is a route.
- **Styling:** Uses CSS modules (e.g., `app/page.module.css`).
- **Font:** Uses `next/font` for optimized font loading (Geist).
- **No API routes** or server components detected; all pages are static or client components.
- **Image usage:** Reference images from `public/photos/` using standard Next.js `<Image>` or `<img>` tags.
- **No custom data fetching or state management** patterns found.

## Integration Points
- **External dependencies:** Next.js, next/font, Geist font. No other major integrations found.
- **No custom middleware, API, or backend integration** present.

## Examples
- To add a new shoot: create a folder in `app/shoots/`, add a `page.js` for the route, and place images in `public/photos/`.
- To update global styles: edit `app/globals.css`.
- To change layout: edit `app/layout.js`.

## Key Files & Directories
- `app/page.js` – main landing page
- `app/layout.js` – global layout
- `app/globals.css` – global styles
- `app/shoots/` – individual shoot routes
- `public/photos/` – images for shoots

---

For more details, see `README.md` or Next.js documentation. If conventions or workflows are unclear, ask for clarification or examples from the user.