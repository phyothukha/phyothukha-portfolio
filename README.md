# Phyo Thu Kha — Portfolio

Personal portfolio site for Phyo Thu Kha, a Full-Stack Developer. Built with
[Astro](https://astro.build), using zero React or client-side framework
runtime — every interactive piece (theme toggle, scroll-triggered
animations, the tech-stack carousel, active-nav highlighting) is plain
vanilla JavaScript running inside `.astro` components.

**Live:** [phyothukha-portfolio.vercel.app](https://phyothukha-portfolio.vercel.app)

## Tech Stack

- **[Astro](https://astro.build)** — static site generation, `astro:assets`
  image optimization (auto WebP + responsive sizes)
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling, with
  light/dark theme support
- **[GSAP](https://gsap.com)** (+ ScrollTrigger) — scroll-triggered section
  animations, custom cursor
- **[Swiper](https://swiperjs.com)** — the continuously auto-scrolling
  tech-stack ticker
- **[Vercel Analytics](https://vercel.com/analytics) & [Speed Insights](https://vercel.com/docs/speed-insights)**
- Deployed on **[Vercel](https://vercel.com)**

## Sections

Hero · Education · Services · Projects · Contact — plus a shared header
(nav + theme toggle) and footer.

## Features

- Light/dark theme, persisted via `localStorage`, no flash on load
- Fully responsive layout, shared `max-w-6xl` container across sections
- SEO: sitemap (`@astrojs/sitemap`), `robots.txt`, canonical URL, Open Graph
  - Twitter meta, `Person` JSON-LD structured data
- Accessibility: WCAG AA color contrast, semantic heading order, descriptive
  link names — verified with axe-core (0 violations, light & dark)
- Performance: images served as optimized WebP via `astro:assets`
  (Lighthouse Performance/Accessibility/SEO: 100/100/100)

## Development

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # production build to dist/
pnpm start    # preview the production build locally
```
