# Ryan Benny — Portfolio

Personal portfolio for Ryan Benny, founder of Dynamic Network.

Static site, no build step. Deployed on Vercel.

## Project structure

```
ryanbenny/
├── index.html         Page markup — the "skeleton". Nav, hero, every
│                      section, footer. No styles or scripts inline.
│
├── css/
│   ├── base.css       Design tokens (--bg, --grad, --pad, etc.),
│   │                  box-sizing reset, body defaults, and the small
│   │                  text helpers used everywhere (.eyebrow, .ital,
│   │                  .grad-text, .mono).
│   │
│   ├── layout.css     Big page-structure pieces: top navigation,
│   │                  hero, the generic <section class="block"> shell,
│   │                  the special case/perf/pipe section shells,
│   │                  the contact closing block, and the footer.
│   │
│   ├── components.css All the reusable building blocks: about/quick
│   │                  card, education card, brand tiles, case-study
│   │                  pieces (results, vs-row, pull quote), collab
│   │                  logo grids, proof images, artwork tiles,
│   │                  achievement cards, industry-experience tiles,
│   │                  performance bar charts, and every piece of
│   │                  the news-pipeline diagram.
│   │
│   └── responsive.css Every @media query lives here, grouped by
│                      breakpoint from widest (1080px) down to
│                      narrowest (480px). Reading top-to-bottom tells
│                      you what the layout does as the screen shrinks.
│
├── js/
│   └── main.js        One tiny job: smooth-scroll the nav links to
│                      their target section, with a 60px offset so the
│                      headings don't hide behind the fixed nav bar.
│
├── assets/            All images (photos, brand logos, screenshots).
│                      Referenced from index.html as assets/filename.png.
│
├── .gitignore
└── README.md
```

## How the CSS files load

Order matters. The browser reads them in the order they appear in
`<head>`, and later rules override earlier ones at the same specificity:

1. `base.css` — variables and resets first, so the rest can use them.
2. `layout.css` — main structural skeleton.
3. `components.css` — component pieces; can use anything from base/layout.
4. `responsive.css` — mobile overrides last, so they win on small screens.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```

A plain `file://` open also works, but a local server is closer to how
Vercel actually serves the site.

## Deploy

Vercel auto-deploys on every push to `main` (GitHub → Vercel webhook).
The live site is at https://ryanbenny.vercel.app.
