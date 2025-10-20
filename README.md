# task.co

A small Next.js 15 project using React 19, Tailwind CSS, and the Geist Google fonts.

This repository contains a simple app scaffolded with Next.js. It includes a global layout that loads two Google fonts (Geist and Geist Mono), a header, and a hero section component used on the home page.

## Quick facts

- Next.js: 15.5.5
- React: 19.1.0
- Styling: Tailwind CSS (configured via `postcss.config.mjs` and `tailwindcss` dependency)
- Icon set: `lucide-react`

## Scripts

The project uses the scripts defined in `package.json`.

- `npm run dev` — Start the development server (uses Turbopack): runs `next dev --turbopack`
- `npm run build` — Build the production app: runs `next build --turbopack`
- `npm run start` — Start the production server: runs `next start`
- `npm run lint` — Run ESLint

## Getting started

1. Install dependencies

```powershell
npm install
```

2. Run the development server

```powershell
npm run dev
```

3. Open the app

Open http://localhost:3000 in your browser.

## Project structure

- `app/` — Next.js app directory
  - `layout.tsx` — Root layout; imports global styles and Google fonts, renders the `Header` and page children.
  - `page.tsx` — Home page that renders the `HeroSection` component.
  - `Header.tsx` — Header component (site navigation/branding).
  - `HeroSection.tsx` — Hero/landing section shown on the home page.
- `public/` — Static assets
- `globals.css` — Global styles (Tailwind entry)
- `package.json` — Project metadata and scripts
- `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs` — Config files

## Notes & tips

- The project is configured to use Turbopack for development and build (`--turbopack` flags). If you want to use the classic Next.js bundler, remove those flags from the `dev` and `build` scripts.
- Fonts are loaded using the `next/font/google` helpers inside `layout.tsx` — keep an eye on font loading behavior during production builds.
- Tailwind is present as a dependency; ensure `globals.css` includes the Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`) for styles to apply.

## Troubleshooting

- If you see type errors, run `npm run lint` and check TypeScript config in `tsconfig.json`.
- If styles don't appear, confirm `globals.css` is imported in `layout.tsx` and Tailwind build is running correctly.
