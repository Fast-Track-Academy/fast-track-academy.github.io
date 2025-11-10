# The Grand Plan - Fast Track Academy

**Cognita Potestas Est.** *Knowledge is Power.*

A digital temple and interactive hub for "The Grand Plan" - an elite educational system built with Next.js, TypeScript, and Tailwind CSS.

![Fast Track Academy](https://github.com/user-attachments/assets/7e666599-3df0-4c43-bd6a-94926495a791)

## Overview

This is not just a website; it is the central lodge for an elite educational system. The design draws inspiration from Masonic and esoteric traditions, featuring clean lines, geometric precision, and a sense of order and gravitas.

### Design Aesthetic

- **Symbolism:** Inspired by Masonic and esoteric traditions
- **Color Palette:** Black and white with gold/brass accents
- **Typography:** Playfair Display (serif) for headings, Lato (sans-serif) for body text
- **Tone:** Authoritative, profound, mysterious, and empowering

## Structure

The website is a single-page application with four distinct sections:

### 1. The Antechamber (Landing Page)
- Full-screen landing area with a slowly rotating geometric symbol
- Headline: "The Grand Plan"
- Sub-headline: "Cognita Potestas Est." (Knowledge is Power.)
- Smooth scroll navigation to the First Degree

### 2. The First Degree: The Entered Apprentice
**Part 1: The Language of Creation (The Tool)**
- Master Python fundamentals through CodeCombat
- Complete the first 20 levels of 'Computer Science 1'
- Record learnings in the Grimoire

**Part 2: The Art of Deconstruction (The Shield)**
- Study logical fallacies (starting with the Straw Man fallacy)
- Learn to identify and dismantle flawed logic
- Document findings in the Grimoire

**Progress Tracker** (Placeholder)
- Visual representation of completion status (future feature)

### 3. The Scribe's Chamber (The Grimoire)
- Establishes the importance of journaling and documentation
- Your personal book of power and knowledge

### 4. The Sanctum Sanctorum (Future Degrees)
- Preview of future learning paths
- The Second Degree: The Fellow Craft (locked)
- The Third Degree: The Master Mason (locked)
- Beyond: The Architect's Chamber (locked)

## Technical Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts (Playfair Display, Lato)
- **Deployment:** GitHub Pages (static export)

## Development

### Prerequisites
- Node.js 20.x or later
- npm 10.x or later

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Linting

```bash
npm run lint
```

## Deployment

This site is configured for GitHub Pages deployment:

1. The `next.config.ts` is set to output static files (`output: 'export'`)
2. Images are set to be unoptimized for static hosting
3. A `.nojekyll` file is included in the `public/` directory
4. The build output goes to the `out/` directory

The site is automatically deployed to: [https://fast-track-academy.github.io](https://fast-track-academy.github.io)

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and theme
│   └── favicon.ico         # Site icon
├── public/
│   └── .nojekyll          # GitHub Pages configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Future Enhancements

- Interactive progress tracking system
- User authentication and personal Grimoires
- Additional degrees and learning paths
- Gamification elements
- Community features

## License

© 2024 Fast Track Academy. All rights reserved.

---

*"From this foundation, we will build a monument to true education."*
