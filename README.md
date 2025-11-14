# Next.js copy of Portfolio

This folder contains a Next.js scaffold created from the existing Vite React portfolio.

What I created:

- package.json (Next 14 + React 18, lucide-react, tailwind dev deps)
- `pages/_app.jsx` to include global CSS and ThemeProvider
- `pages/index.jsx` that renders the `Portfolio` component
- `src/` containing copied components and `context/ThemeContext.jsx` (adjusted to be SSR-safe)
- Tailwind (`tailwind.config.js`) and PostCSS (`postcss.config.js`) files
- `src/index.css` with Tailwind directives (you may edit if your Tailwind version differs)
- `public/` (placeholders). Please copy the real images and PDFs from the original project's `public/` into this folder.

Quick start (from `next/`):

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

Notes / next steps:

- Copy the files from the original `public/` folder into `next/public/` (images, `projects/` folder, and `Theophilus_Kolawole_Resume.pdf`).
- Tailwind CSS directives in `src/index.css` may need adjustment depending on your installed Tailwind version. If you use Tailwind v4, replace `@tailwind base;` with `@import "tailwindcss/preflight"` etc.
- I made `ThemeContext` SSR-safe (avoid accessing `window` during server render). Other components that use `document`/`window` are used inside `useEffect` and should be OK.
- Run `npm run build` and `npm run start` to test production build.

If you'd like, I can now:

- copy the actual `public/` assets into `next/public/` (I can add placeholders but binaries won't be changed), or
- tweak Tailwind config to match your original setup precisely, or
- run a quick local `npm install` and start dev server (I can provide commands for you to run locally).
