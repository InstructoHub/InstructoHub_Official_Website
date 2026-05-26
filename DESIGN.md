```markdown
---
name: InstructoHub
colors:
  brand-50: '#fdf4f0'
  brand-100: '#fce8e0'
  brand-200: '#f9d1c1'
  brand-300: '#f5b9a2'
  brand-400: '#f09c7d'
  brand-500: '#e16b3b'
  brand-600: '#d15a2b'
  brand-700: '#b44a22'
  brand-800: '#933c1d'
  brand-900: '#78301a'
  brand: '#e16b3b'
  secondary-50: '#e7eaeb'
  secondary-100: '#cfd5d7'
  secondary-200: '#a0acb0'
  secondary-300: '#728389'
  secondary-400: '#435a62'
  secondary-500: '#1b3942'
  secondary-600: '#18333b'
  secondary-700: '#152b32'
  secondary-800: '#122229'
  secondary-900: '#0e1a20'
  secondary: '#1b3942'
  success: '#4CAF50'
  success-dark: '#3a8c3f'
  danger: '#EF4444'
  danger-dark: '#B91C1C'
  neutral-50: '#fafafa'
  neutral-100: '#f5f5f5'
  neutral-200: '#e5e5e5'
  neutral-300: '#d4d4d4'
  neutral-400: '#a3a3a3'
  neutral-500: '#737373'
  neutral-600: '#525252'
  neutral-700: '#404040'
  neutral-800: '#262626'
  neutral-900: '#171717'
  background-page: '#f7f7f7'
  background-card: '#ffffff'
  border: '#e5e7eb'
  border-accent: '#e16b3b'
  text-primary: '#1b3942'
  text-secondary: '#4b5563'
  text-muted: '#6b7280'
  text-light: '#ffffff'
typography:
  display-xl:
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1'
  display-lg:
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.25'
  headline-md:
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-xl:
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.6'
  body-lg:
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontSize: 14px
    fontWeight: '600'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  full: 9999px
spacing:
  container-max: 1536px
  gutter: 16px
  section-padding: 80px
  section-padding-lg: 96px
  stack-sm: 16px
  stack-md: 24px
  stack-lg: 32px
---

## Brand & Style
The design system for InstructoHub is engineered to convey innovation, reliability, and modern education. As a top AI-powered Learning Management System for schools and businesses, the visual language prioritizes clarity and focus. It avoids clutter in favor of clean space, stark contrasts between the lively brand color and grounded secondary tones, and clear semantic rules. The goal is to build a digital campus that feels both highly advanced (AI-first) and incredibly approachable for educators, students, and corporate trainers.

## Colors
The palette is restricted exactly to the configured Tailwind dictionary, ensuring strict consistency across the application. 
- **Brand (`#e16b3b`):** A vibrant terracotta/orange that acts as the primary accent. It highlights active states, primary buttons, and key focus areas, drawing the eye to calls to action. Lighter tones (`brand-50`, `brand-200`) are used for subtle hover backgrounds and soft borders.
- **Secondary (`#1b3942`):** A deep slate-navy used for structural authority. It dominates headers, primary text (`text-primary`), and inverted product cards. It anchors the energetic brand color and provides high-contrast legibility.
- **Backgrounds:** `background-page` (`#f7f7f7`) is used for alternating page sections to create horizontal rhythm, while `background-card` (`#ffffff`) elevates content blocks off the page.
- **Text Mapping:** `text-primary` (`#1b3942`) is used for headlines. `text-secondary` (`#4b5563`) is used for general reading paragraphs. `text-muted` (`#6b7280`) handles supplementary metadata.
- **Semantic/Status:** `success` (`#4CAF50`) and `danger` (`#EF4444`) are reserved strictly for system feedback, grading indicators, and alerts.

## Typography
The typographic hierarchy relies on standard sans-serif system fonts with massive scale contrasts to establish clear information architecture.
- **Hero & Section Titles:** Use massive display sizing (`text-7xl` down to `text-5xl`) with `leading-tight` to create editorial-style impact. These are almost always mapped to `text-secondary` to feel grounded.
- **Subheadings & Accents:** Emphasized introductory text blocks use `text-2xl` and `text-secondary-700` alongside a left border accent to guide the reader into the content.
- **Body Text:** Generous sizes (`text-lg` or `text-xl`) with loose line heights ensure comfortable reading across course materials and landing pages.

## Layout & Spacing
The layout relies on distinct, full-width horizontal sections to pace the user's journey.
- **Containers:** Content is horizontally bound by `container mx-auto px-4`.
- **Rhythm:** Major sections utilize `py-20` or `py-24` to allow the dense educational text to breathe. 
- **Section Headers:** A strict pattern is used to introduce sections: A small `w-2 h-2 bg-brand` dot next to an uppercase tracking label, followed by the large main heading.

## Elevation & Depth
Depth is utilized functionally to distinguish interactive components from flat backgrounds.
- **Interactive Cards:** Standard feature cards sit in a `shadow-lg`. On hover, they utilize `-translate-y-2` combined with `shadow-2xl` to indicate they are clickable.
- **Modals & Overlays:** The highest elevation is reserved for full-screen video players or critical alerts, utilizing a `bg-black bg-opacity-75` backdrop to obscure the page entirely.

## Shapes
The geometry is clean but softened to remain user-friendly.
- **Buttons:** Use `rounded-md` for a sturdy, reliable click area.
- **Cards & Banners:** Use large radii like `rounded-xl` or `rounded-2xl` for the primary content blocks (like Pricing or Feature grids) to make the enterprise software feel more accessible.
- **Borders:** Feature cards often use a thick top border (`border-t-4 border-brand-200` or `border-brand`) to inject color into otherwise white structural blocks.

## Components
### Buttons
- **Primary Action:** `bg-brand text-light font-bold rounded-md shadow-md hover:bg-brand-600`.
- **Secondary Action:** Text links using `text-secondary-700 hover:text-brand transition-colors`.
### Highlight & Product Cards
- **Dark Variant:** `bg-secondary text-light p-8 rounded-2xl border-t-4 border-brand shadow-lg`. Used for premium pathways (e.g., Launch Your AI-First Campus).
- **Light Variant:** `bg-background-card p-8 text-center rounded-2xl border-t-4 border-brand-200 shadow-lg`. Used for core features and capabilities.
### Informational Blocks
- Emphasized quotes and introductory paragraphs are wrapped in a container utilizing `border-l-2 border-solid border-brand p-4`.
### Accordions
- FAQ items utilize `bg-neutral-50 border border-border rounded-xl` that animate to reveal `bg-background-card` content panels on click.

```