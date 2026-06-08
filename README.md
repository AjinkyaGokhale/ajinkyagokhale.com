# Ajinkya Gokhale — Portfolio

Live at [ajinkyagokhale.com](https://ajinkyagokhale.com)

---



## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | SvelteKit (Svelte 5) |
| Adapter | `@sveltejs/adapter-static` → `dist/` |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Blog | mdsvex (markdown) |
| i18n | Svelte store (EN / DE) |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |

## Getting Started

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build     # prerenders to dist/
npm run preview
```

## Project Structure

```
src/
  routes/         # Pages: /, /about, /projects, /blog, /blog/[slug], /inspiration, /workbench
                  # Feeds: /sitemap.xml + /rss.xml (prerendered from the blog posts)
  lib/
    components/   # Nav, Footer, Seo, PageHeader, PostCard, LangToggle
    home/         # Home sections: Hero, Collage, Bento, BlogTeaser
    i18n/         # translations.js (ported) + ui.js (new) merged via a Svelte store
    data/         # workbench.js, inspiration.js
    actions/      # reveal.js (scroll-reveal)
    posts.js      # blog post loader
  posts/          # Markdown blog posts
static/
  img/            # Hero, avatar, collage placeholders
  static/         # Brand assets (logo)
```

## Notes

- Inner pages (About, Projects, Blog, Inspiration, Workbench) are solid scaffolds using ported content; the home page is the fully polished centerpiece.
- Collage images in `static/img/collage-*.svg` are placeholders — swap for real photos.
- Clean URLs (`/about` → `about.html`): CloudFront should be configured to resolve directory-style paths to the matching `.html` file.

## License

Code is released under the [MIT License](LICENSE).

Personal content — blog posts, images, résumé and other written material — remains © Ajinkya Gokhale and is not covered by the MIT License.
