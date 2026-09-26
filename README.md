# Mahir Foysal — Portfolio

A React + Vite + Tailwind portfolio for a Canva / social media visual designer.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production and deploy (Netlify, Vercel, GitHub Pages, etc.):

```bash
npm run build
```

The output goes to `dist/`.

## Replacing placeholder content

- **Your portrait**: replace `src/assets/profile.png` with your own photo (same filename, or update the import in `Hero.jsx` and `About.jsx`).
- **Project covers**: replace the files in `src/assets/projects/` with your own designs, keeping the same filenames, or update the imports in `src/data/projects.js`.
- **Project details**: edit `src/data/projects.js` — title, category, description, and every case-study field (objective, palette, process, etc.).
- **Contact info**: open `src/components/Contact.jsx` and `src/components/Footer.jsx` and replace the placeholder email and social links (LinkedIn, Behance, Fiverr, Instagram) with your real profile URLs.
- **Testimonials**: once you have real client feedback, replace the placeholder message in `src/components/Testimonials.jsx` with actual quotes (always with real names/permission).

## Notes

- All placeholder images were generated locally — no third-party or copyrighted imagery was used.
- No fake clients, stats, testimonials or years of experience are included anywhere in the copy; update these sections truthfully as your portfolio grows.
- Respects `prefers-reduced-motion` and includes visible keyboard focus states throughout.
