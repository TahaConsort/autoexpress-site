# AutoExpress — Website

Static marketing site for **AutoExpress** (tyres, alloy wheels, mobile fitting,
wheel alignment & balancing, nitrogen inflation, and fleet/industrial tyre solutions).

## Live site

Published with GitHub Pages — see the **Environments → github-pages** link on the
repository homepage, or the URL under *Settings → Pages*.

## Structure

```
index.html    Entire site — markup, CSS and JS in one self-contained file
assets/       Logo and section imagery
.nojekyll     Tells GitHub Pages to serve files as-is (no Jekyll processing)
```

## Editing

There is no build step. Edit `index.html`, commit, and push — GitHub Pages
redeploys automatically within a minute or so.

To preview locally:

```bash
python -m http.server 8000    # then open http://localhost:8000
# or
npx serve .
```

## Notes

- The brand typeface used in the original mockup was a private upload and could
  not be redistributed; the site now uses [Archivo](https://fonts.google.com/specimen/Archivo)
  from Google Fonts, which matches the bold condensed-grotesque look.
- Section imagery is AI-generated and carries the small corner disclosure badge.
- The header call-to-action links to the official site at autoexpress.com.pk.
