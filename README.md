# HMF Consulting Engineering - Corporate Web Application

A premium, enterprise-grade corporate platform for **HMF Consulting Engineering**, specializing in technical and engineering consultancy for infrastructure and development projects since 2010.

Built with a focus on **visual excellence**, **high performance**, and **architectural scalability**.

---

## 🚀 Vision & Design Philosophy

The project implements a modern **Glassmorphism** aesthetic, utilizing deep dark themes, subtle translucency, and dynamic micro-animations to create a premium brand experience. Every pixel is optimized for high-end cinematic presentation.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Components**: Atomic Design Pattern
- **Deployment**: [Vercel](https://vercel.com/)

---

## ✨ Key Features

### 1. **Premium Interactive UI**
- **Dynamic Hero Section**: Featuring full-screen video background with autoplay, custom typed text animations, and quick-stats overview.
- **Glassmorphic Navigation**: A sophisticated header with animated line tracking and multi-column dropdown menus.
- **Micro-Animations**: Hover-triggered staggered animations on social links, buttons, and card containers.

### 2. **Professional Engineering Sections**
- **Project Showcase**: Interactive tab-based project browser with smooth state transitions.
- **Media Center**: A localized news and activities slider with responsive preview cards.
- **Service Hub**: Detailed service catalog utilizing flexible grid layouts and image-driven discovery.

### 3. **Accessibility (A11y) & SEO**
- **Standardized Semantics**: Correct use of HTML5 landmarks (`<main>`, `<nav>`, `<section>`).
- **Screen Reader Ready**: Full ARIA attribute audit, including `aria-expanded`, localized `aria-labels`, and "Skip to Content" functionality.
- **RTL Support**: Native Arabic support with fluid layout adjustments for multi-language readiness.

### 4. **Enterprise Architecture**
- **Modular Atomic System**: Structured around Atoms (UI), Molecules (Cards), and Organisms (Sections).
- **Custom `useSlider` Hook**: Logic-extracted hook for consistent slider behavior across multiple sections.
- **Barrel Imports**: Clean import structures using `index.ts` files for rapid development.
- **Design System Tokens**: Centralized theme configuration in `src/constants/theme.ts`.

---

## 📦 Project Structure

```bash
src/
├── app/                  # Next.js App Router (Layouts & Pages)
├── sections/             # Large Page Sections (Hero, Projects, Media, etc.)
├── components/
│   ├── layout/           # Shared Header/Footer components
│   └── ui/               # Atomic Design Components (Atoms & Molecules)
│       ├── icons/        # Categorized SVG icon system
│       ├── cards/        # Modular card molecules
│       └── animations/   # Reusable animation wrappers
├── hooks/                # Custom React hooks (logic abstraction)
├── constants/            # Pure data, content, and theme tokens
└── types/                # Unified TypeScript interfaces
```

---

## ⚡ Performance Optimization

- **Image Audit**: Comprehensive `next/image` optimization using dynamic `sizes` attributes to slash mobile LCP.
- **Code Hygiene**: Removed 100% of unused imports and established strict TypeScript linting.
- **Production Ready**: Successfully tested against `next build` with zero runtime evaluation errors.

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [your-repo-link]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ✉️ Contact & Links

- **Website**: [HMF Consulting Engineering](https://hmf-project-task-16wl8320l-2hmedsabrys-projects.vercel.app/)
- **Location**: جازان - طريق الملك فيصل، المملكة العربية السعودية

---

© 2026 HMF Consulting Engineering. Digital Experience crafted with precision.
