# Jay Khairnar — Portfolio

Personal developer portfolio built with React, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **React 19** — UI framework
- **Tailwind CSS v4** — utility-first styling with class-based dark mode
- **Framer Motion** — animations and page transitions
- **Vite 8** — build tool and dev server
- **react-icons** — icon library

## Features

- Dark / light mode toggle with `localStorage` persistence and OS preference detection
- Animated scroll progress bar
- Custom magnetic cursor with spotlight glow
- Bento grid project cards with expand-to-modal animation
- Spotlight hover effect on cards
- Fully responsive — mobile, tablet, desktop
- SEO meta tags and Open Graph support
- Contact form with Formspree integration

## Sections

1. Hero — name, tagline, resume download, CTAs
2. About — bio, stats
3. Education — degree, GPA
4. Experience — internship at Nexonica Systems
5. Projects — Student Skill Gap Analysis, E-Commerce Platform, Spam Detector
6. Skills — Languages, Frameworks, Databases, Tools, Web Technologies, Cloud & AI
7. Achievements — certifications and hackathons
8. Contact — form + direct links

## Getting Started

```bash
npm install
npm run dev
```

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To activate it:

1. Sign up at formspree.io and create a new form
2. Copy your form ID
3. Replace `YOUR_FORM_ID` in `src/components/Contact.jsx` with your actual ID

## Resume

Place your resume PDF at `public/resume.pdf` to enable the download button in the Hero section.

## Build

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment on Vercel, Netlify, or GitHub Pages.

## Live

[jaykhairnar.vercel.app](https://jaykhairnar.vercel.app)
