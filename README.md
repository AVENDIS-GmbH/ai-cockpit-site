# ai-cockpit-site

The product site of [ai-cockpit](https://avendis-gmbh.github.io/ai-cockpit-site/): what the platform
is, what it does today and where it is heading.

Static HTML and CSS. No build step, no framework, no request to another host.

| File | Page |
|---|---|
| `index.html` | Overview |
| `platform.html` | Concept model, principles, architecture |
| `features.html` | Features with screenshots |
| `use-cases.html` | Processes that run, and what the pattern fits |
| `roadmap.html` | The three stages |
| `404.html` | Not found |
| `assets/` | `styles.css`, `site.js`, the logo and the screenshots |

## Preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080      # http://localhost:8080
```

## Publishing

GitHub Pages serves the branch `main` from the repository root (Settings → Pages → Source:
"Deploy from a branch", `main`, `/ (root)`). Every push to `main` is published. `.nojekyll` keeps
GitHub from processing the files.

## Editing

- Header and footer are repeated in every page. A new page copies them and gets an entry in each
  `nav`.
- Every statement must hold for the application as it is. What runs is tagged "Available", what
  the pattern would fit "Fits the pattern", plans "Next" or "Later". No dates, no customer names,
  no figures that were not measured.
- Screenshots show the clean demo state at 1440 × 900, reduced to 256 colours.

© 2026 AVENDIS GmbH. All rights reserved.
