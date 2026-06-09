# Ozone Limited - Project Context

This document provides a comprehensive overview of the **Ozone Limited** website project, intended to give an AI model the full technical and business context for further improvements and feature development.

---

## 1. Project Identity & Vision
**Ozone Limited** is a premium, high-end software development agency. The website's goal is to showcase technical excellence, authority in AI and advanced tech, and a "dark-first" corporate aesthetic that feels modern, scalable, and premium.

- **Primary Brand Color**: Accent Blue (`#38bdf8`)
- **Aesthetic**: Dark mode by default, glassmorphism, smooth animations (Framer Motion), and high-density typography.

---

## 2. Technical Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Optimized for static hosting (Vercel/Netlify).

---

## 3. Project Structure
The project follows a standard React/Vite structure, with a heavy emphasis on data-driven components.

```text
ozone-limited-website/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images, videos, and SVG icons (OzIcon.svg)
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Navbar, Footer
│   │   ├── Home/           # Hero, CaseStudies, Stats, etc.
│   │   ├── Services/       # Service-specific sub-components
│   │   └── ui/             # Atomic UI components
│   ├── data/               # Centralized content management
│   │   └── siteData.js     # The "Source of Truth" for all site content
│   ├── pages/              # Main page views
│   │   ├── Home/
│   │   ├── Services/
│   │   ├── Company/
│   │   └── Contact/
│   ├── styles/             # Global CSS and Tailwind directives
│   ├── App.jsx             # Main routing and global layout wrapper
│   └── main.jsx            # Entry point
├── index.html              # HTML template with SEO and favicon configuration
└── package.json            # Dependency manifest
```

---

## 4. Core Data Model (`siteData.js`)
Most of the website's content is abstracted into `src/data/siteData.js`. This allows for rapid content updates and powers dynamic pages.

- **`navLinks`**: Defines the multi-level Mega Menu structure.
- **`services`**: High-level service summaries used on the Home page.
- **`servicesDetail`**: A massive object mapping service slugs (e.g., `web-development`) to full-page content including:
    - Headlines, descriptions, and icons.
    - Features, sub-services, and tech stacks.
    - Performance stats and process workflows.
- **`caseStudies`**: Project portfolio with impact metrics and tech tags.
- **`testimonials`**: Social proof with client details.
- **`techStack`**: Hierarchical list of technologies used across various domains (Mobile, Web, Cloud).

---

## 5. Key UI Components & Features

### Navigation (`Navbar.jsx`)
- **Sticky & Hidden on Scroll**: Disappears on scroll down, reappears on scroll up.
- **Mega Menu**: Large, informative dropdowns for "Services" and "Solutions".
- **Dynamic Theming**: Changes from transparent to white/blurred background based on scroll position and route.

### Hero Section (`Hero.jsx`)
- **Background Video**: High-quality looped MP4 for visual impact.
- **Floating CTA**: An "Expert Consultation" tab anchored to the hero section.
- **Pulsing Badge**: A rotating "Let's Discuss" badge for conversion.

### Service Detail Template (`ServiceDetail/index.jsx`)
- **Slug-based Routing**: `/services/:slug` renders content dynamically from `siteData.js`.
- **Modular Sections**: Features Hero, Process, Tech Stack, and FAQs specific to each service.

---

## 6. Current Implementation Status
- [x] Full branding integration (Logo, Favicon, Color Palette).
- [x] Responsive Hero section with background video.
- [x] Mega Menu navigation for desktop and mobile.
- [x] Dynamic Services ecosystem with 13+ specialized detail pages.
- [x] Contact page with form and global office locations.
- [x] About/Company page (in progress/refined).
- [x] Client logo marquee removal (replaced with extended hero).

---

## 7. Guidelines for AI Improvements
- **Maintain Dark Aesthetic**: Do not introduce light-colored sections unless explicitly asked.
- **Use HSL for Colors**: Prefer HSL or standard Tailwind 4 colors for consistency.
- **Framer Motion**: Keep animations subtle but premium (staggered entries, spring transitions).
- **Data-First**: Always check `siteData.js` before hardcoding text in components.
- **Responsive**: All components must be tested for mobile (`px-6`) and ultra-wide screens (`max-w-[1600px]`).
