# AutoExpress — Website

Marketing site for **AutoExpress** (tyres, alloy wheels, mobile fitting, wheel
alignment & balancing, nitrogen inflation, and fleet/industrial tyre solutions),
built with **React + Vite**.

## Getting started

```bash
npm install
npm run dev      # dev server with hot reload, http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built output locally
```

## Structure

```
index.html              Vite entry document (page metadata, font links)
src/
  main.jsx              React entry point
  App.jsx               Page composition — section order lives here
  index.css             The entire stylesheet, one global sheet
  components/           One component per page section
  data/site.js          All copy and content: nav, services, values, footer
  lib/assets.js         Resolves public/assets paths through BASE_URL
public/
  assets/               Logo and section imagery, served verbatim
  .nojekyll             Keeps GitHub Pages from running Jekyll
```

### Editing content

Most routine changes need no JSX. Copy, service cards, nav items, footer links
and facility highlights all live in [`src/data/site.js`](src/data/site.js) —
add or edit an entry and the matching section re-renders.

To add an image, drop the file into `public/assets/` and reference it by
filename through the `asset()` helper, e.g. `asset('new-photo.jpg')`.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

One-time setup on the repo: **Settings → Pages → Source: GitHub Actions**.

`vite.config.js` sets `base: './'`, so the same build works at a domain root and
under a project subpath such as `username.github.io/autoexpress-site/`.

## Notes

- The brand typeface from the original mockup was a private upload that could
  not be redistributed; the site uses
  [Archivo](https://fonts.google.com/specimen/Archivo) from Google Fonts, which
  matches the bold grotesque look.
- Section imagery is AI-generated and carries a small corner disclosure badge.
  Which images show it is controlled by the `aiGenerated` flag in `src/data/site.js`.
- `index.html` was a complete standalone static page before the React rewrite;
  that version is in git history if you ever need it.
