# Ajinkya Gokhale — Pixel Portfolio

A retro terminal-themed personal portfolio built with **React 19**, **Vite**, and **Tailwind CSS**. Features pixel art aesthetics, smooth animations, multilingual support (English / German), and an integrated resume page.

Live at [ajinkyagokhale.com](https://ajinkyagokhale.com)

---

## Features

- Pixel / retro terminal aesthetic with dot-grid canvas background
- Animated skill bars and typewriter text effects
- EN / DE language toggle with full i18n support
- Downloadable resume (PDF)
- Deployed to AWS S3 + CloudFront via GitHub Actions
- Responsive and mobile-first

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| i18n | Custom context (EN / DE) |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |

## Getting Started

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # Reusable UI components
  context/      # Language context
  i18n/         # EN/DE translations
  pages/        # Hero, About, Projects, Professional, Resume
  lib/          # Utilities
public/
  static/       # Resume PDFs, images
```

## License

All rights reserved © Ajinkya Gokhale
