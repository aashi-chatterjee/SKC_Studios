# DEVELOPER DOCUMENTATION & PROJECT MAP
**SKC STUDIOS — Architectural Interiors & Spatial Design**

---

## 1. PROJECT OVERVIEW

### What This Website Is
This is the official digital presence and portfolio for **SKC STUDIOS**, an architectural interior design practice founded by a designer with a previous civil engineering background. The studio specializes in contemplative private residences, heritage transformations, workplace environments, and bespoke millwork.

### Core Intent & Goals
The website is intended to:
1. **Express Brand Identity**: Present an editorial, architectural, minimal, image-led, and spacious atmosphere. It is deliberately designed to feel like a high-end architectural monograph or design publication—not a generic commercial SaaS site or personal portfolio.
2. **Demonstrate Technical & Design Discipline**: Reflect the founder's dual background in structural engineering and architectural interior design, emphasizing that "good spaces don't simply look right; they work right."
3. **Showcase Commission Archive**: Provide an archival gallery of selected works across international locations (Zurich, Copenhagen, Kolkata, Berlin, Kyoto) with photography, materiality, and spatial narratives.
4. **Offer Interactive Price Estimation**: Give prospective clients a transparent, multi-step indicative cost estimator for residential interiors (1 BHK to 5+ BHK, area sizing, space selections, and package tiers) before initiating contact.
5. **Answer Client Inquiries (FAQ)**: Address the top architectural and procedural questions regarding scope, structural alterations, schedules, and turnkey delivery.
6. **Capture Qualified Inquiries**: Enable clients to submit detailed project briefs with location, timeline, scope, and auto-populated estimate summaries.

### Technology Stack
- **Framework**: React 19 (`react` ^19.0.1, `react-dom` ^19.0.1)
- **Language**: TypeScript (`typescript` ~5.8.2) in strict mode with standard ES modules
- **Build Tool & Bundler**: Vite 6 (`vite` ^6.2.3, `@vitejs/plugin-react` ^5.0.4)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` ^4.1.14, `@import "tailwindcss";` in `src/index.css`)
- **Animation**: Motion (`motion/react` ^12.23.24) with full `prefers-reduced-motion` compliance
- **Iconography**: Lucide React (`lucide-react` ^0.546.0)
- **Node & Server Support**: Node.js with native TypeScript type stripping, Express (`express` ^4.21.2) ready for custom SSR/container routing if deployed to production.

### Architecture & Runtime Pattern
- **Architecture**: Single-Page Application (SPA) with native browser history routing (`popstate` and `history.pushState`).
- **Backend Status**: Frontend-only client-side architecture. Server-side packages (`express`, `@google/genai`) are available in the container environment if needed, but all client interactions, routing, calculations, and animations execute directly in the browser with zero external server dependencies.
- **Entry Points**:
  - HTML Entry: `/index.html`
  - JavaScript/TypeScript Entry: `/src/main.tsx`
  - Root Component: `/src/App.tsx`
  - Global Styles: `/src/index.css`

---

## 2. ACTUAL FILE TREE

```text
/
├── .env.example                # Declares required environment variables (GEMINI_API_KEY, APP_URL)
├── .gitignore                  # Git ignore rules for node_modules, build artifacts, dist
├── bun.lock                    # Dependency lockfile
├── index.html                  # HTML entry point, Google Fonts, meta tags, root container
├── metadata.json               # Application metadata, name, description, capabilities
├── package.json                # Project dependencies, scripts, and build configuration
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite plugins (React, Tailwind CSS v4) and path aliases
├── public/                     # Static files served directly by Vite
│   └── assets/
│       └── aistudio/           # Platform asset placeholder directory
└── src/                        # Primary application source code
    ├── App.tsx                 # Root application component: routing, state, page layout
    ├── index.css               # Tailwind CSS v4 import, font variables, accessibility rules
    ├── main.tsx                # React DOM root render mount
    ├── types.ts                # TypeScript interface definitions for projects, services
    ├── components/             # Reusable UI sections and global interface components
    │   ├── ArchitecturalCursor.tsx # Subtle custom cursor indicator for project cards (desktop only)
    │   ├── ContactDrawer.tsx   # Slide-over inquiry modal drawer with prefilled estimates
    │   ├── FAQ.tsx             # Accessible 10-item accordion with category tabs & CTA
    │   ├── FinalStatement.tsx  # Editorial full-width closing call-to-action section
    │   ├── Footer.tsx          # Studio coordinates (Zurich/Copenhagen), links, colophon
    │   ├── Hero.tsx            # Full-viewport typographic landing banner and high-res image
    │   ├── Intro.tsx           # Studio thesis on structural awareness vs decoration
    │   ├── Navigation.tsx      # Fixed top navigation bar with mobile full-screen drawer
    │   ├── Philosophy.tsx      # 5 core principles: Spatial Planning, Function, Materials, etc.
    │   ├── PriceCalculator.tsx # 5-step interactive cost estimator with live calculation
    │   ├── ProjectModal.tsx    # Modal overlay for quick project preview
    │   ├── SelectedWork.tsx    # Curated portfolio grid on the home page
    │   └── Services.tsx        # Expandable studio capabilities list on the home page
    ├── data/                   # Centralized content and configuration files
    │   ├── faq.ts              # 10 editorial architectural questions, categories, answers
    │   ├── pricingConfig.ts    # BHK multipliers, area brackets, room costs, estimation formulas
    │   └── projects.ts         # Portfolio projects dataset, photography URLs, services array
    ├── pages/                  # Top-level view pages corresponding to URL paths
    │   ├── ContactPage.tsx     # Full-page inquiry form, office addresses, direct coordinates
    │   ├── NotFoundPage.tsx    # Editorial 404 "Void" screen with return navigation
    │   ├── ProjectDetailPage.tsx # Dedicated single-project case study with galleries
    │   ├── ServicesPage.tsx    # In-depth architectural scope, calculator, FAQ, inquiry callout
    │   ├── StudioPage.tsx      # Studio manifesto, engineering discipline, founder background
    │   └── WorkPage.tsx        # Unconventional editorial archive of all studio commissions
    └── utils/                  # Utility functions and browser helpers
        └── seo.ts              # Dynamic page title, meta description, and Open Graph updater
```

### Folder Purpose & Connections

- **`/src/components/`**
  - **Purpose**: Reusable architectural UI sections, persistent navigation, drawers, calculators, and cursor enhancements.
  - **Contains**: React components styled with Tailwind CSS v4 and animated using `motion/react`.
  - **Leads to**: Mounted in `/src/App.tsx` and in page components under `/src/pages/`.
- **`/src/data/`**
  - **Purpose**: Single source of truth for all editable studio copy, portfolio imagery, pricing rates, and FAQ items.
  - **Contains**: TypeScript objects, arrays, and pure calculation helper functions.
  - **Leads to**: Imported by components and pages (e.g. `projects.ts` powers `SelectedWork`, `WorkPage`, and `ProjectDetailPage`; `pricingConfig.ts` powers `PriceCalculator.tsx`).
- **`/src/pages/`**
  - **Purpose**: Standalone screen views corresponding to canonical studio routes (`/work`, `/work/:slug`, `/studio`, `/services`, `/contact`, `/404`).
  - **Contains**: Page-level compositions combining data models, layout grids, and sub-components.
  - **Leads to**: Conditionally rendered by `/src/App.tsx` based on the active route.
- **`/src/utils/`**
  - **Purpose**: Pure browser utilities and helpers.
  - **Contains**: `seo.ts` which synchronizes `<title>`, `<meta>`, canonical links, and Open Graph tags.
  - **Leads to**: Called by `App.tsx` and `ProjectDetailPage.tsx` whenever views change.

---

## 3. FILE-BY-FILE DOCUMENTATION

### Application Core & Entry Files

--------------------------------------------------
FILE: `/index.html`
PURPOSE: The static HTML entry point loaded by the browser. Declares meta tags, Google Fonts (`Cormorant Garamond`, `Plus Jakarta Sans`, `Space Mono`), hero image preloading, and the `#root` mount point.
USED BY: Vite development server and production static build.
LEADS TO: `/src/main.tsx`, `/src/index.css`.
MODIFY WHEN: Adding new Google Fonts, changing baseline favicon/manifest tags, or updating static Open Graph defaults.
DO NOT MODIFY FOR: Dynamic page titles or route-specific descriptions (handled dynamically in `/src/utils/seo.ts`).
DEPENDENCIES: Google Fonts CDN (`fonts.googleapis.com`).
--------------------------------------------------

--------------------------------------------------
FILE: `/src/main.tsx`
PURPOSE: React DOM client initialization. Mounts `<App />` into the DOM `#root` container within `React.StrictMode`.
USED BY: Browser entry point via `/index.html`.
LEADS TO: `/src/App.tsx`, `/src/index.css`.
MODIFY WHEN: Adding global top-level providers (e.g., error boundaries, telemetry wrappers).
DO NOT MODIFY FOR: UI styling, routing, or page layouts.
DEPENDENCIES: `react`, `react-dom/client`, `/src/App.tsx`, `/src/index.css`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/App.tsx`
PURPOSE: The central nervous system of the client application. Manages active route views (`home`, `work`, `project`, `studio`, `services`, `contact`, `404`), browser history synchronization via `popstate` and `pushState`, global contact drawer state, estimate prefill state, and dynamic SEO updates.
USED BY: `/src/main.tsx`.
LEADS TO: All files in `/src/components/`, all files in `/src/pages/`, `/src/utils/seo.ts`, `/src/data/projects.ts`.
MODIFY WHEN: Adding a new top-level page route, altering global drawer behavior, or adjusting the home page section stack.
DO NOT MODIFY FOR: Individual page typography, specific project data, or calculation math.
DEPENDENCIES:
- `/src/components/*` (Navigation, Hero, Intro, SelectedWork, Philosophy, Services, PriceCalculator, FAQ, FinalStatement, Footer, ContactDrawer, ArchitecturalCursor)
- `/src/pages/*` (WorkPage, ProjectDetailPage, StudioPage, ServicesPage, ContactPage, NotFoundPage)
- `/src/utils/seo.ts`
- `/src/data/projects.ts`
--------------------------------------------------

--------------------------------------------------
FILE: `/src/index.css`
PURPOSE: Global CSS stylesheet. Imports Tailwind CSS v4 via `@import "tailwindcss";`, defines CSS font variables (`--font-serif`, `--font-sans`, `--font-mono`), custom font utility classes (`font-editorial`, `font-sans-clean`, `font-tech`), accessible focus rings, skip-to-content links, and reduced-motion overrides.
USED BY: Entire project via `/src/main.tsx`.
LEADS TO: All Tailwind utility classes and typography styling throughout the site.
MODIFY WHEN: Adjusting global color tokens, adding font variables, or updating accessibility focus rings.
DO NOT MODIFY FOR: Component-specific layouts (use inline Tailwind utility classes).
DEPENDENCIES: Tailwind CSS v4.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/types.ts`
PURPOSE: Shared TypeScript interfaces defining the shape of `Project` objects (slug, title, location, dimensions, gallery, layout) and `ServiceItem` objects.
USED BY: `/src/data/projects.ts`, `/src/components/SelectedWork.tsx`, `/src/components/ProjectModal.tsx`.
LEADS TO: Type validation across all project and service consumers.
MODIFY WHEN: Adding new fields to projects (e.g., client name, award list, floor plan PDF link).
DO NOT MODIFY FOR: Calculation types (pricing interfaces live in `/src/data/pricingConfig.ts`).
DEPENDENCIES: None.
--------------------------------------------------

### Content & Configuration Files

--------------------------------------------------
FILE: `/src/data/projects.ts`
PURPOSE: Central archive of all architectural commissions and studio service offerings. Contains project metadata (slugs, descriptions, locations, years, materials, dimensions, hero images, gallery arrays) and helper functions (`getProjectBySlug`, `getNextProject`).
USED BY:
- `/src/App.tsx`
- `/src/components/Hero.tsx`
- `/src/components/SelectedWork.tsx`
- `/src/components/Services.tsx`
- `/src/pages/WorkPage.tsx`
- `/src/pages/ProjectDetailPage.tsx`
- `/src/pages/ServicesPage.tsx`
LEADS TO: All project and service presentation across the site.
MODIFY WHEN: Adding a new project, updating photography URLs, editing project descriptions, or adding/editing services.
DO NOT MODIFY FOR: Page layouts, animation settings, or modal rendering logic.
DEPENDENCIES: `/src/types.ts`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/data/pricingConfig.ts`
PURPOSE: Centralized pricing and calculation engine for the Interior Design Price Calculator. Defines BHK tiers, area brackets, room types with base costs, package multipliers, timeline options, currency formatting, and the `calculateProjectEstimate()` algorithm.
USED BY:
- `/src/components/PriceCalculator.tsx`
LEADS TO: Live interactive estimates in the calculator and auto-generated message summaries in the contact drawer.
MODIFY WHEN: Updating interior rates, adjusting BHK or package multipliers, adding rooms, or changing currency labels.
DO NOT MODIFY FOR: Calculator UI layout, step button animations, or input form styling.
DEPENDENCIES: None (self-contained interfaces and pure functions).
--------------------------------------------------

--------------------------------------------------
FILE: `/src/data/faq.ts`
PURPOSE: Central repository of the studio's 10 architectural FAQ items, including question numbering, category tags, and detailed answers.
USED BY:
- `/src/components/FAQ.tsx`
LEADS TO: Rendered accordions on the Home Page and Services Page.
MODIFY WHEN: Adding, removing, or editing FAQ questions, answers, or categories.
DO NOT MODIFY FOR: Accordion animation, icon styles, or expand/collapse toggles.
DEPENDENCIES: None.
--------------------------------------------------

### Reusable Interface Components

--------------------------------------------------
FILE: `/src/components/Navigation.tsx`
PURPOSE: Persistent top navigation bar. Handles scroll detection (elevating styling on scroll), active page link indicators, "Start a Project" drawer trigger, and full-screen mobile menu drawer with focus trapping and ESC key dismissal.
USED BY: `/src/App.tsx`.
LEADS TO: Route navigation triggers in `App.tsx` and contact drawer opening.
MODIFY WHEN: Changing navigation labels, reordering header links, or adjusting mobile menu layout.
DO NOT MODIFY FOR: Changing page contents or URL routing algorithms.
DEPENDENCIES: `lucide-react` (`Menu`, `X`, `ArrowRight`), `motion/react`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/Hero.tsx`
PURPOSE: Full-viewport hero statement on the homepage featuring the core tagline ("Where function finds form"), high-resolution architectural image, and quick explore button.
USED BY: `/src/App.tsx` (Homepage view).
LEADS TO: Scrolls down to `#work` on interaction.
MODIFY WHEN: Changing the hero headline, hero sub-copy, or primary hero image layout.
DO NOT MODIFY FOR: Sub-page hero sections (each page in `/src/pages/` has its own header).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/data/projects.ts` (`HERO_IMAGE`).
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/Intro.tsx`
PURPOSE: Studio thesis section ("01 / Orientation"). Highlights the studio's focus on structural discipline, daylight paths, and everyday movement before decorative finishes.
USED BY: `/src/App.tsx` (Homepage view).
LEADS TO: Transitions into the Selected Work section.
MODIFY WHEN: Updating the introductory studio thesis copy.
DO NOT MODIFY FOR: Studio page manifesto (which lives in `/src/pages/StudioPage.tsx`).
DEPENDENCIES: `motion/react`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/SelectedWork.tsx`
PURPOSE: Curated homepage showcase featuring the top four studio commissions with varied editorial layout treatments (wide panoramic, offset portrait, duo composition).
USED BY: `/src/App.tsx` (Homepage view).
LEADS TO: Direct project detail navigation via slug and full archive navigation (`/work`).
MODIFY WHEN: Changing which projects are featured on the homepage or altering the home grid layout.
DO NOT MODIFY FOR: The complete archive page (which lives in `/src/pages/WorkPage.tsx`).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/data/projects.ts` (`PROJECTS`).
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/Philosophy.tsx`
PURPOSE: Homepage summary of the 5 foundational engineering & design principles (Spatial Planning, Functionality, Material Choices, Construction Awareness, Problem Solving).
USED BY: `/src/App.tsx` (Homepage view).
LEADS TO: Leads into Studio Capabilities.
MODIFY WHEN: Updating the 5 core principles or their descriptions on the homepage.
DO NOT MODIFY FOR: The comprehensive philosophy essay on `/src/pages/StudioPage.tsx`.
DEPENDENCIES: `motion/react`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/Services.tsx`
PURPOSE: Accordion-style overview of studio capabilities (Architectural Interiors, Bespoke Millwork, Spatial Planning, Site Execution) on the homepage.
USED BY: `/src/App.tsx` (Homepage view).
LEADS TO: Expands deliverables for each service.
MODIFY WHEN: Changing the services accordion design on the homepage.
DO NOT MODIFY FOR: The dedicated services page with full deliverable grids (use `/src/pages/ServicesPage.tsx`).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/data/projects.ts` (`SERVICES`).
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/PriceCalculator.tsx`
PURPOSE: The interactive 5-step Interior Design Price Calculator. Manages multi-step navigation (Home Type → Area Size → Spaces → Package Tier → Project Details → Estimate Result), live estimate calculation, optional lead capture, and forwarding estimate summaries to the contact drawer.
USED BY: `/src/App.tsx` (Homepage view), `/src/pages/ServicesPage.tsx`.
LEADS TO: `/src/data/pricingConfig.ts`, `/src/components/ContactDrawer.tsx`.
MODIFY WHEN: Changing the calculator's UI layout, step order, progress tabs, or button styles.
DO NOT MODIFY FOR: Modifying base costs, multipliers, or formula math (modify `/src/data/pricingConfig.ts` instead).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/data/pricingConfig.ts`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/FAQ.tsx`
PURPOSE: Renders the accessible 10-question accordion list, category filter badges, expand/collapse icons, ARIA accessibility attributes, and direct "Have a specific question? Discuss Your Project →" CTA.
USED BY: `/src/App.tsx` (Homepage view), `/src/pages/ServicesPage.tsx`.
LEADS TO: `/src/data/faq.ts`, `/src/components/ContactDrawer.tsx`.
MODIFY WHEN: Adjusting accordion expand/collapse styling, hover animations, or category tags layout.
DO NOT MODIFY FOR: Modifying the question text or answers (modify `/src/data/faq.ts` instead).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/data/faq.ts`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/FinalStatement.tsx`
PURPOSE: Editorial closing call-to-action ("Let's make space for better living") on the homepage leading directly into the contact flow.
USED BY: `/src/App.tsx` (Homepage view).
LEADS TO: Calls `onStartConversation` which navigates to `/contact`.
MODIFY WHEN: Updating the closing homepage invitation copy.
DO NOT MODIFY FOR: Footer contents or contact page forms.
DEPENDENCIES: `motion/react`, `lucide-react`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/Footer.tsx`
PURPOSE: Global site footer displaying studio brand, navigation links, studio coordinates (Zurich and Copenhagen), email, phone, "Start a Brief" trigger, and copyright colophon.
USED BY: `/src/App.tsx`.
LEADS TO: Global page navigation and opening the contact drawer.
MODIFY WHEN: Updating physical studio addresses, phone numbers, email addresses, or social media links.
DO NOT MODIFY FOR: Main header navigation (use `/src/components/Navigation.tsx`).
DEPENDENCIES: None.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/ContactDrawer.tsx`
PURPOSE: Global slide-over inquiry drawer accessible from the navigation bar, price calculator, and footer. Features ESC key handling, background body scroll locking, form fields, prefilled estimate message support, and submission confirmation state.
USED BY: `/src/App.tsx`.
LEADS TO: Captures user project briefs and estimate details.
MODIFY WHEN: Adding/removing form fields in the drawer, changing drawer animation speed, or styling confirmation messages.
DO NOT MODIFY FOR: The full-page `/contact` view (which lives in `/src/pages/ContactPage.tsx`).
DEPENDENCIES: `motion/react`, `lucide-react`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/ProjectModal.tsx`
PURPOSE: Reusable popup modal to preview project details over the current screen without a full page change.
USED BY: Available as an overlay utility in `/src/App.tsx`.
LEADS TO: Quick project preview with ESC key and backdrop dismissal.
MODIFY WHEN: Adjusting quick-view modal styling or metadata fields.
DO NOT MODIFY FOR: The full canonical project case study (use `/src/pages/ProjectDetailPage.tsx`).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/types.ts`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/components/ArchitecturalCursor.tsx`
PURPOSE: Custom floating cursor badge displaying "[ VIEW ↗ ]" that follows the mouse only when hovering over elements with the `data-cursor-project` attribute on desktop fine-pointer devices.
USED BY: `/src/App.tsx`.
LEADS TO: Visual hover enhancement on project gallery images.
MODIFY WHEN: Changing cursor badge style, label text, or offset positioning.
DO NOT MODIFY FOR: Touch devices or mobile screens (automatically disabled via CSS media query `pointer: fine`).
DEPENDENCIES: `motion/react`, `lucide-react`.
--------------------------------------------------

### Page-Level View Components

--------------------------------------------------
FILE: `/src/pages/WorkPage.tsx`
PURPOSE: The complete Selected Works archive page at `/work`. Presents all studio commissions in an unconventional editorial gallery format with detailed material tags, location badges, and click-throughs to individual case studies.
USED BY: `/src/App.tsx` when `currentView === 'work'`.
LEADS TO: `/src/pages/ProjectDetailPage.tsx` via project slug selection.
MODIFY WHEN: Changing the layout structure or grid rhythm of the full portfolio archive.
DO NOT MODIFY FOR: Adding projects (add to `/src/data/projects.ts` instead).
DEPENDENCIES: `motion/react`, `/src/data/projects.ts`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/pages/ProjectDetailPage.tsx`
PURPOSE: Deep-dive single project case study at `/work/:slug`. Displays hero photograph, project metadata (location, year, dimensions, materials), architectural thesis, secondary dual composition, full gallery, and "Next Project" bottom navigation.
USED BY: `/src/App.tsx` when `currentView === 'project'`.
LEADS TO: Dynamic SEO updates via `setPageSEO`, Next Project navigation, or 404 fallback if slug is invalid.
MODIFY WHEN: Adjusting the project case study layout, image gallery ordering, or metadata specs display.
DO NOT MODIFY FOR: Updating project content (update `/src/data/projects.ts`).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/data/projects.ts`, `/src/utils/seo.ts`, `/src/pages/NotFoundPage.tsx`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/pages/StudioPage.tsx`
PURPOSE: Studio manifesto and leadership page at `/studio`. Outlines the founder's background in civil engineering, five architectural principles (Function, Proportion, Material, Light, Detail), studio practice statistics, and collaborative ethics.
USED BY: `/src/App.tsx` when `currentView === 'studio'`.
LEADS TO: Opening the contact drawer via `onStartProject`.
MODIFY WHEN: Editing founder biography, manifesto text, studio statistics, or office culture statements.
DO NOT MODIFY FOR: The short homepage philosophy section (use `/src/components/Philosophy.tsx`).
DEPENDENCIES: `motion/react`, `lucide-react`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/pages/ServicesPage.tsx`
PURPOSE: Comprehensive capabilities and pricing page at `/services`. Features deep architectural scope descriptions, interactive Price Calculator, FAQ accordion, and inquiry callout.
USED BY: `/src/App.tsx` when `currentView === 'services'`.
LEADS TO: `/src/components/PriceCalculator.tsx`, `/src/components/FAQ.tsx`, `/src/components/ContactDrawer.tsx`.
MODIFY WHEN: Restructuring how capabilities, pricing, and FAQ are presented together on the dedicated services page.
DO NOT MODIFY FOR: Changing pricing math (in `pricingConfig.ts`) or FAQ questions (in `faq.ts`).
DEPENDENCIES: `motion/react`, `lucide-react`, `/src/data/projects.ts` (`SERVICES`), `/src/components/PriceCalculator.tsx`, `/src/components/FAQ.tsx`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/pages/ContactPage.tsx`
PURPOSE: Dedicated full-screen contact and commission brief page at `/contact`. Includes an expanded form with approximate area and timeline inputs, physical studio office addresses, and direct correspondence details.
USED BY: `/src/App.tsx` when `currentView === 'contact'`.
LEADS TO: Form submission handler and studio email/phone links.
MODIFY WHEN: Adding new fields to the full contact page or updating studio addresses.
DO NOT MODIFY FOR: Quick drawer inquiries (use `/src/components/ContactDrawer.tsx`).
DEPENDENCIES: `motion/react`, `lucide-react`.
--------------------------------------------------

--------------------------------------------------
FILE: `/src/pages/NotFoundPage.tsx`
PURPOSE: Custom 404 "Void" error screen for unmapped URLs or nonexistent project slugs. Renders architectural coordinates ("404 / Void — Unmapped Coordinates"), thoughtful explanation, and recovery buttons.
USED BY: `/src/App.tsx` when an invalid route or project slug is requested.
LEADS TO: Safely returning users to `/` or `/work`.
MODIFY WHEN: Changing the 404 error copy or return buttons.
DO NOT MODIFY FOR: Valid route handling logic.
DEPENDENCIES: `motion/react`, `lucide-react`.
--------------------------------------------------

### Utilities & Infrastructure

--------------------------------------------------
FILE: `/src/utils/seo.ts`
PURPOSE: Dynamic client-side SEO utility. Safely mutates `document.title`, `<meta name="description">`, `<link rel="canonical">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), and Twitter Cards on route transitions.
USED BY: `/src/App.tsx`, `/src/pages/ProjectDetailPage.tsx`.
LEADS TO: Real-time head tag updates in the browser DOM.
MODIFY WHEN: Adding new social tags (e.g., Pinterest rich pins, Schema.org JSON-LD structured data).
DO NOT MODIFY FOR: Static baseline HTML headers (in `/index.html`).
DEPENDENCIES: Standard browser DOM API.
--------------------------------------------------

--------------------------------------------------
FILE: `/vite.config.ts`
PURPOSE: Vite configuration for React and Tailwind CSS v4. Configures path alias `@` to root and manages HMR behavior.
USED BY: Vite development server (`npm run dev`) and production build (`npm run build`).
LEADS TO: Asset bundling and TypeScript transformation.
MODIFY WHEN: Adding Vite plugins or configuring build output targets.
DO NOT MODIFY FOR: Application UI styling or runtime business logic.
DEPENDENCIES: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`.
--------------------------------------------------

--------------------------------------------------
FILE: `/metadata.json`
PURPOSE: Google AI Studio and container platform metadata declaring the application name, description, frame permissions, and server capabilities.
USED BY: Platform container runtime and deployment systems.
LEADS TO: Container provisioning.
MODIFY WHEN: Updating the formal application title or container permission declarations.
DO NOT MODIFY FOR: General client-side HTML meta tags (use `/src/utils/seo.ts`).
DEPENDENCIES: None.
--------------------------------------------------

---

## 4. PAGE / ROUTE MAP

The application uses an integrated browser history router (`popstate` + `window.history.pushState`) with hash fallback support (`#/work`).

| Route | Page Component | Purpose | Key Components Included | Content Source | Leads To |
|---|---|---|---|---|---|
| `/` | Homepage (`App.tsx`) | Primary introduction to the studio, selected work, philosophy, pricing, FAQ, and contact callout. | `Navigation`, `Hero`, `Intro`, `SelectedWork`, `Philosophy`, `Services`, `PriceCalculator`, `FAQ`, `FinalStatement`, `Footer`, `ContactDrawer` | `projects.ts`, `pricingConfig.ts`, `faq.ts` | `/work`, `/work/:slug`, `/studio`, `/services`, `/contact`, Contact Drawer |
| `/work` | `WorkPage.tsx` | Comprehensive archive of all studio projects with full photography and specifications. | `Navigation`, `WorkPage`, `Footer`, `ContactDrawer` | `projects.ts` (`PROJECTS`) | `/work/:slug`, Contact Drawer |
| `/work/:slug` | `ProjectDetailPage.tsx` | In-depth case study for a specific commission (e.g. `villa-rungsted`, `atelier-seefeld`). | `Navigation`, `ProjectDetailPage`, `Footer`, `ContactDrawer`, `NotFoundPage` (fallback) | `projects.ts` (`getProjectBySlug`, `getNextProject`) | Next Project, `/work`, Contact Drawer |
| `/studio` | `StudioPage.tsx` | Detailed studio manifesto, civil engineering background, core principles, and practice ethics. | `Navigation`, `StudioPage`, `Footer`, `ContactDrawer` | Inline manifesto text & founder narrative | Contact Drawer, `/services` |
| `/services` | `ServicesPage.tsx` | Detailed breakdown of architectural scope, interactive cost calculator, and FAQ. | `Navigation`, `ServicesPage`, `PriceCalculator`, `FAQ`, `Footer`, `ContactDrawer` | `projects.ts` (`SERVICES`), `pricingConfig.ts`, `faq.ts` | Contact Drawer, `/contact` |
| `/contact` | `ContactPage.tsx` | Dedicated full-page inquiry form, physical studio addresses (Zurich, Copenhagen), and correspondence info. | `Navigation`, `ContactPage`, `Footer`, `ContactDrawer` | Studio physical coordinates & email | Direct email, form submit |
| Any unmapped URL or bad slug | `NotFoundPage.tsx` | "404 / Void" graceful recovery screen for missing content. | `Navigation`, `NotFoundPage`, `Footer` | `NotFoundPage.tsx` | `/` (Home), `/work` (Selected Work) |

---

## 5. COMPONENT RELATIONSHIPS

```text
App.tsx (Root Controller & Router)
│
├── Navigation.tsx (Fixed Header)
│   └── Mobile Menu Drawer (Animated overlay)
│
├── [Route Switcher]
│   │
│   ├── currentView === 'home'
│   │   ├── Hero.tsx
│   │   ├── Intro.tsx
│   │   ├── SelectedWork.tsx
│   │   │   └── Project Cards with [data-cursor-project]
│   │   ├── Philosophy.tsx
│   │   ├── Services.tsx (Expandable list)
│   │   ├── PriceCalculator.tsx (Interactive Estimator)
│   │   ├── FAQ.tsx (Accordion List)
│   │   └── FinalStatement.tsx (CTA)
│   │
│   ├── currentView === 'work'
│   │   └── WorkPage.tsx (Archive Gallery Grid)
│   │
│   ├── currentView === 'project'
│   │   └── ProjectDetailPage.tsx (Single Case Study)
│   │       ├── Hero Image & Metadata Block
│   │       ├── Architectural Thesis & Detail Grid
│   │       ├── Multi-Aspect Gallery
│   │       └── Next Project Footer Navigation
│   │
│   ├── currentView === 'studio'
│   │   └── StudioPage.tsx (Manifesto & Civil Engineering Foundation)
│   │
│   ├── currentView === 'services'
│   │   └── ServicesPage.tsx
│   │       ├── Capabilities Grid
│   │       ├── PriceCalculator.tsx
│   │       ├── FAQ.tsx
│   │       └── Inquiry Callout
│   │
│   ├── currentView === 'contact'
│   │   └── ContactPage.tsx (Comprehensive Brief Form & Locations)
│   │
│   └── currentView === '404'
│       └── NotFoundPage.tsx (Architectural Void Screen)
│
├── Footer.tsx (Persistent Studio Coordinates & Colophon)
│
├── ContactDrawer.tsx (Slide-over Inquiry Modal with estimate prefill)
│
└── ArchitecturalCursor.tsx (Desktop Pointer Enhancement)
```

---

## 6. CONTENT / DATA MAP

All user-editable studio content is organized into centralized data files to eliminate hardcoded text in components:

### 1. Project Information & Photography
- **Location**: `/src/data/projects.ts`
- **What It Controls**: Project titles, numbers, slugs, locations, categories, years, materials, dimensions, descriptive paragraphs, and gallery photography.
- **Used By**: Homepage (`SelectedWork.tsx`), Archive (`WorkPage.tsx`), Case Studies (`ProjectDetailPage.tsx`), and SEO (`seo.ts`).
- **To Add a New Project**:
  1. Open `/src/data/projects.ts`.
  2. Append a new object to the `PROJECTS` array conforming to the `Project` interface in `/src/types.ts`.
  3. Ensure a unique `slug` (e.g. `residence-bellevue`).
  4. Provide high-resolution architectural image URLs (Unsplash or self-hosted).
  5. The new project will automatically appear on `/work` and have its own `/work/residence-bellevue` route.

### 2. Services & Capabilities
- **Location**: `/src/data/projects.ts` (`SERVICES` array)
- **What It Controls**: Service titles, numbering (`01`, `02`, `03`, `04`), summary descriptions, and itemized lists of architectural deliverables.
- **Used By**: Homepage (`Services.tsx`) and `/services` (`ServicesPage.tsx`).

### 3. FAQ Questions & Answers
- **Location**: `/src/data/faq.ts`
- **What It Controls**: All 10 architectural questions, answers, numerical labels, and categories (`Scope`, `Services`, `Process`, `Execution`, `Timeline`, `Cost`, `Customization`, `Consultation`, `Onboarding`).
- **Used By**: Homepage (`FAQ.tsx`) and `/services` (`ServicesPage.tsx`).

### 4. Interior Design Pricing & Rates
- **Location**: `/src/data/pricingConfig.ts`
- **What It Controls**: BHK multipliers, area brackets, room prices, package tier deliverables, timeline options, currency symbols, and estimate formula logic.
- **Used By**: `/src/components/PriceCalculator.tsx`.

### 5. Physical Studio Addresses & Coordinates
- **Location**: `/src/components/Footer.tsx` and `/src/pages/ContactPage.tsx`
- **What It Controls**: Studio locations (Zurich: Seefeldstrasse 42; Copenhagen: Bredgade 19), direct email (`inquiries@skcstudios.com`), and phone number (`+41 44 892 4100`).

### 6. Meta Tags & Social Sharing
- **Location**: `/src/utils/seo.ts` and `/index.html`
- **What It Controls**: Browser tab titles, canonical URLs, meta descriptions, and Open Graph card preview images.

---

## 7. PRICE CALCULATOR MAP

The Interior Design Price Calculator is a core conversion tool. It is architecturally decoupled into **Configuration/Math** (`pricingConfig.ts`) and **User Interface** (`PriceCalculator.tsx`).

```text
User Selects Parameters (Step 1-5)
               │
               ▼
   /src/data/pricingConfig.ts
   calculateProjectEstimate(selections)
   ├── Base Area Cost (SqFt or Area Bracket)
   ├── + Sum of Selected Room Base Costs
   ├── * BHK Multiplier (0.85 to 1.90)
   ├── * Package Tier Multiplier (Essential: 1.0, Standard: 1.35, Premium: 1.75)
   └── Generates Indicative Range (±12%)
               │
               ▼
   /src/components/PriceCalculator.tsx
   Renders Live Estimated Project Cost (e.g. ₹2.4L – ₹3.1L)
               │
               ▼
   "Discuss Your Project →" Clicked
               │
               ▼
   /src/components/ContactDrawer.tsx
   Drawer opens with formatted estimate summary pre-filled in message textarea
```

### Where to Make Specific Calculator Changes:
- **Change Prices, Multipliers, or Area Brackets**: Modify `/src/data/pricingConfig.ts`.
  - Edit `pricingConfig.bhkOptions` to change BHK multipliers.
  - Edit `pricingConfig.areaRanges` to change square footage costs.
  - Edit `pricingConfig.rooms` to change room base prices.
  - Edit `pricingConfig.packages` to change package multipliers or deliverables.
- **Change the Calculation Formula**: Modify the `calculateProjectEstimate()` function in `/src/data/pricingConfig.ts`.
- **Change the Calculator UI / Layout / Step Flow**: Modify `/src/components/PriceCalculator.tsx`.
- **Change the Estimate Disclaimer**: Modify `pricingConfig.disclaimer` in `/src/data/pricingConfig.ts`.

---

## 8. FAQ MAP

The FAQ system provides clear answers to prospective clients and improves search indexability.

- **Data File**: `/src/data/faq.ts` (`FAQ_ITEMS` array).
- **Component File**: `/src/components/FAQ.tsx`.
- **State Management**: Local state `openId` tracks which accordion is open (`null` if all closed). Only one question expands at a time to maintain clean vertical rhythm.
- **Accessibility (a11y)**:
  - Trigger uses a native `<button>` with `aria-expanded={isOpen}` and `aria-controls={contentId}`.
  - Collapsible container has `role="region"` and `id={contentId}`.
  - Keyboard navigation is fully supported (Enter / Spacebar triggers toggle).
  - Motion expands smoothly using `AnimatePresence` and collapses instantly if `prefers-reduced-motion` is detected.
- **Where to Add/Edit Questions**: Edit `/src/data/faq.ts`. Do not edit the JSX component to change text.

---

## 9. DESIGN SYSTEM MAP

The website uses a refined architectural design system centered on restraint, tactile materials, and generous negative space.

| Design Attribute | Implementation Location | Values / Tokens |
|---|---|---|
| **Serif Display Font** | `/index.html`, `/src/index.css` | `'Cormorant Garamond', Georgia, serif` (`font-editorial`). Used for headings and editorial statements. |
| **Clean Body Font** | `/index.html`, `/src/index.css` | `'Plus Jakarta Sans', sans-serif` (`font-sans-clean`). Used for descriptions, inputs, body paragraphs. |
| **Monospace / Technical Font** | `/index.html`, `/src/index.css` | `'Space Mono', monospace` (`font-tech`). Used for numbering, dates, specifications, metadata. |
| **Primary Canvas Background** | `/src/index.css`, `App.tsx` | `#F8F7F4` (Warm limestone neutral). |
| **Secondary Container Background** | Inline Tailwind classes | `#F2EFE9` and `#ECE8E1` (Muted plaster tints). |
| **Primary Ink / Charcoal** | `/src/index.css`, `App.tsx` | `#1A1A18` (Deep architectural charcoal, never harsh pure `#000000`). |
| **Muted Grey / Secondary Ink** | Inline Tailwind classes | `#504D47`, `#7A7670`, `#8A8780`. |
| **Dividers & Borders** | `/src/index.css` (`.border-subtle`) | `rgba(26, 26, 24, 0.08)` to `rgba(26, 26, 24, 0.15)`. Delicate, hairline dividers. |
| **Border Radius** | Inline Tailwind classes | Strictly limited. `rounded-none` or `rounded-sm` for cards/inputs. Small pills (`rounded-full`) reserved exclusively for circular toggle buttons or selection chips. |
| **Architectural Easing Curve** | `/src/index.css` (`.ease-architectural`) | `cubic-bezier(0.16, 1, 0.3, 1)`. Generous, decelerated motion. |
| **Reduced Motion Safety** | `/src/index.css`, components | `@media (prefers-reduced-motion: reduce)` globally disables animations, while components check `useReducedMotion()` from `motion/react`. |

---

## 10. IMAGE / ASSET MAP

- **Image Hosting**: All high-resolution architectural photography is loaded from Unsplash using optimized query parameters (`auto=format&fit=crop&q=85`).
- **Hero Image Preload**: The primary hero background is preloaded in `/index.html` via `<link rel="preload" as="image" fetchpriority="high" href="..." />` to eliminate layout shifts (CLS).
- **Aspect Ratios**:
  - Panoramas: `aspect-[16/9]` or `aspect-[21/9]`
  - Portraits: `aspect-[3/4]` or `aspect-[4/5]`
  - Details: `aspect-square` (`aspect-[1/1]`)
- **Replacing Imagery**: Update image URL strings in `/src/data/projects.ts` (`HERO_IMAGE`, `project.image`, `project.heroImage`, `galleryImages`). For local images, place them in `/public/images/` and reference them as `/images/your-photo.jpg`.

---

## 11. FORM / CONTACT MAP

The website provides two ways to submit an inquiry:
1. **Quick Slide-Over Drawer**: `/src/components/ContactDrawer.tsx` (accessible from any page).
2. **Dedicated Full Contact Page**: `/src/pages/ContactPage.tsx` (accessible via `/contact`).

```text
User fills Form (Drawer or Page)
               │
               ▼
Client-Side Validation (Required fields: name, email)
               │
               ▼
handleSubmit (e.preventDefault())
               │
               ▼
setSubmitted(true) displays clean confirmation screen
```

- **Calculator Integration**: When a visitor clicks **Discuss Your Project →** inside the Price Calculator, `handleOpenEstimateInquiry()` passes the formatted estimate string into `contactPrefill`, which auto-populates the drawer's message field.
- **Future Backend Mailer Integration**: To connect this form to an email service (such as Resend, SendGrid, or AWS SES), update `handleSubmit` in `ContactDrawer.tsx` and `ContactPage.tsx` to send a `fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })` request.

---

## 12. STATE MANAGEMENT MAP

The application uses standard, lightweight React 19 state patterns. No external state library (Zustand, Redux) is required:
- **Active Route View**: `currentView` in `/src/App.tsx` (`home` | `work` | `project` | `studio` | `services` | `contact` | `404`).
- **Active Project Slug**: `activeProjectSlug` in `/src/App.tsx`.
- **Drawer State**: `contactOpen` (boolean) and `contactPrefill` (string) in `/src/App.tsx`.
- **Calculator State**: `selections` and `currentStep` in `/src/components/PriceCalculator.tsx`.
- **Accordion State**: `openId` in `/src/components/FAQ.tsx` and `activeService` in `/src/components/Services.tsx`.
- **Mobile Menu State**: `mobileMenuOpen` in `/src/components/Navigation.tsx`.

---

## 13. ROUTING / NAVIGATION MAP

The routing system integrates browser history with single-page performance:
- When a user clicks a navigation link, the application executes:
  ```ts
  window.history.pushState(null, '', path);
  setCurrentView(viewName);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  ```
- The `useEffect` hook in `/src/App.tsx` listens to the browser's native `popstate` event. Back and Forward browser buttons work as expected.
- Hash URLs like `#/work` are automatically parsed and converted for deep linking support.
- If an unrecognized path or invalid project slug is visited, the router safely renders `NotFoundPage.tsx`.

---

## 14. SEO / METADATA MAP

- **Global SEO Controller**: `/src/utils/seo.ts` (`setPageSEO()`).
- Whenever `currentView` changes in `App.tsx` or `ProjectDetailPage.tsx`, `setPageSEO` updates:
  - `document.title`
  - `<meta name="description">`
  - `<link rel="canonical">`
  - `<meta property="og:title">`, `og:description`, `og:image`, `og:url`, `og:site_name`
  - `<meta name="twitter:card">`, `twitter:title`, `twitter:description`, `twitter:image`

---

## 15. DEPENDENCY MAP

| Package | Version | Purpose | Used By | Safe to Remove? |
|---|---|---|---|---|
| `react` & `react-dom` | `^19.0.1` | Core UI library & DOM renderer. | Entire application. | **NO**. Core framework. |
| `vite` | `^6.2.3` | Development server and production bundler. | Build tooling. | **NO**. Core bundler. |
| `@tailwindcss/vite` & `tailwindcss` | `^4.1.14` | Official Tailwind CSS v4 Vite compiler plugin. | Styling throughout the project. | **NO**. Core styling engine. |
| `motion` | `^12.23.24` | Smooth transitions, accordion expansion, and fade animations. | Navigation, Hero, Work, Pages, Calculator, FAQ. | **NO**. Critical for motion design. |
| `lucide-react` | `^0.546.0` | Accessible, minimalist vector icons (`ArrowRight`, `Plus`, `Minus`, `Menu`, `X`, `Check`). | Navigation, Calculator, FAQ, Drawers, Footers. | **NO**. Primary icon system. |
| `typescript` | `~5.8.2` | Static type checking and interface safety. | Build and development. | **NO**. Project is written in TypeScript. |
| `express` | `^4.21.2` | Minimal Node.js HTTP server. | Ready for container deployment. | Safe in static SPA mode, needed for container deployments. |
| `@google/genai` | `^2.4.0` | Google GenAI SDK. | Optional AI capabilities. | Safe to remove if AI features are not implemented. |

---

## 16. ENVIRONMENT & SETUP

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or bun

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Run local development server (binds to http://localhost:3000)
npm run dev

# 3. Type check / lint
npm run lint

# 4. Build for production (outputs to /dist)
npm run build

# 5. Preview production build locally
npm run preview
```

### Environment Variables
Variables are declared in `.env.example`:
- `GEMINI_API_KEY`: Reserved for Gemini AI server-side features.
- `APP_URL`: Production hosting domain (e.g. `https://skcstudios.com`).
*Note: Never commit secret keys or production credentials to source control.*

---

## 17. COMMON TASKS — "WHERE DO I GO?"

- **I want to add a new project to the portfolio:**
  → Open `/src/data/projects.ts` and add a new item to the `PROJECTS` array.
- **I want to replace the homepage hero photo:**
  → Change `HERO_IMAGE` in `/src/data/projects.ts`.
- **I want to edit or add FAQ questions:**
  → Open `/src/data/faq.ts` and modify the `FAQ_ITEMS` array.
- **I want to adjust interior design prices or BHK rates:**
  → Open `/src/data/pricingConfig.ts` and adjust values in `pricingConfig`.
- **I want to change the calculation formula in the estimator:**
  → Open `/src/data/pricingConfig.ts` and edit `calculateProjectEstimate()`.
- **I want to change the calculator's steps or visual layout:**
  → Open `/src/components/PriceCalculator.tsx`.
- **I want to change the typography or fonts:**
  → Open `/src/index.css` and `/index.html`.
- **I want to change studio office addresses or phone numbers:**
  → Open `/src/components/Footer.tsx` and `/src/pages/ContactPage.tsx`.
- **I want to add a new page to the website:**
  1. Create your page in `/src/pages/YourNewPage.tsx`.
  2. Add the route string to `currentView` in `/src/App.tsx`.
  3. Add a navigation link in `/src/components/Navigation.tsx` and `/src/components/Footer.tsx`.
- **I want to update SEO meta descriptions or social share cards:**
  → Open `/src/utils/seo.ts`.

---

## 18. "DO NOT BREAK THIS" — CRITICAL ARCHITECTURAL RULES

1. **Do Not Hardcode Pricing in Components**: All rates, package multipliers, and room costs must remain in `/src/data/pricingConfig.ts`. Modifying prices directly inside `PriceCalculator.tsx` breaks single-source-of-truth consistency.
2. **Preserve Accessible Focus Rings & ARIA Roles**: The FAQ and Navigation accordions rely on `aria-expanded`, `aria-controls`, and `role="region"`. Removing these impairs keyboard and screen-reader accessibility.
3. **Respect `prefers-reduced-motion`**: All animations must respect the user's reduced motion preferences via `useReducedMotion()`. Never force rapid looping animations.
4. **Maintain Project Slugs Consistency**: Project URLs depend on `project.slug`. If you rename an existing slug in `projects.ts`, existing bookmarks or links to `/work/old-slug` will 404 unless redirected.
5. **Keep Tailwind CSS v4 Configuration Intact**: Tailwind v4 is imported directly via `@import "tailwindcss";` in `/src/index.css` using the `@tailwindcss/vite` plugin. Do not attempt to revert to an older `tailwind.config.js` PostCSS setup.

---

## 19. DESIGNER HANDOFF GUIDELINES

### What Designers Can Change Safely:
- **All Editorial Copy**: Change text directly in `/src/data/projects.ts` (projects and services), `/src/data/faq.ts` (questions/answers), and `/src/pages/StudioPage.tsx` (manifesto).
- **Photography & Visual Assets**: Swap image URLs in `/src/data/projects.ts`.
- **Pricing & Multipliers**: Adjust numbers in `/src/data/pricingConfig.ts`.
- **Padding & Margins**: Adjust Tailwind spacing classes (`py-28`, `mb-16`, `gap-8`) directly on sections.

### What Should NOT Be Casual Edited:
- **Font Scale & Variables**: Changing `--font-serif` or `--font-sans` in `/src/index.css` affects the typographic rhythm across every single page.
- **Route State Handlers**: Changing the `handlePopState` logic in `/src/App.tsx` can break back/forward browser navigation.
- **Container Max-Widths**: All sections align to `max-w-7xl mx-auto px-6 md:px-12 lg:px-16`. Changing max-width arbitrarily breaks architectural vertical grid alignments.

---

## 20. FUTURE DEVELOPMENT RECOMMENDATIONS

### Current State Observations
- **Static Dataset**: All projects and FAQ items are currently bundled into client TypeScript files. This ensures fast load times, zero API downtime, and offline reliability.
- **Form Submission**: Contact forms currently capture input and show an elegant visual confirmation without calling a live email server.

### Optional Future Improvements
1. **Live Email Delivery API**: Implement a serverless function or Express endpoint at `/api/contact` using Resend or Postmark to deliver inquiry emails directly to the studio inbox.
2. **Headless CMS Integration**: If the studio adds dozens of projects per month, migrate `/src/data/projects.ts` to a headless CMS (e.g. Sanity, Strapi, or Contentful).
3. **Project Filtering**: Add category filter pills (`Residential`, `Workplace`, `Heritage`) to `/work` if the portfolio expands beyond 15 projects.
4. **Currency Selector**: Add a currency switcher in the Price Calculator (EUR, USD, CHF, GBP) for international clients.

---

## 21. DOCUMENTATION CHANGE LOG

- **Date**: September 2026
- **Version**: 1.0.1
- **Author**: AI Studio Lead Developer
- **Summary**: Strengthened iframe runtime resilience: encapsulated `onStartProject` action handlers to avoid forwarding DOM synthetic events into form text state; added type validation on drawer prefill messages; safely wrapped `window.location` and `window.history` operations with graceful try/catch fallbacks; and updated `ArchitecturalCursor` to use Framer Motion transforms rather than inline styles.
- **Version**: 1.0.0
- **Summary**: Initial comprehensive handover documentation and architectural map generated directly from the inspected codebase.
