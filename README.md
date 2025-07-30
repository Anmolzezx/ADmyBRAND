# 🚀 ADmyBRAND AI Suite – SaaS Landing Page

A modern, responsive, and animated single-page landing website for the **ADmyBRAND AI Suite**, built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**. This marketing page showcases product features, testimonials, pricing, FAQs, and more — all wrapped in a sleek **glassmorphism** aesthetic.

---
## 🚀 Live Demo
### 👉 [Visit Live Site](https://myaiadmybrand.netlify.app/)


## ✨ Features

- ⚡️ Blazing fast performance with Next.js 14 (App Router)
- 🎨 Beautiful glassmorphism design with soft gradients & blur effects
- 📱 Fully responsive across all screen sizes
- 🧠 Animated UI using Framer Motion (scroll & hover interactions)
- 🧩 Modular & reusable component system (shadcn/ui)
- 🌈 Custom fonts, icons, gradients & Tailwind CSS v4
- ✅ Accessible and semantic HTML structure
- Interactive Pricing Calculator
- Framer Motion

---

## 🏗️ Project Structure

```text
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx      # Root layout for the marketing page (sets font, base styles)
│   │   │   └── page.tsx        # Main page, assembles all sections
│   │   └── globals.css         # Global styles and Tailwind CSS configuration
│   ├── components/
│   │   ├── common/             # Reusable components used across multiple sections
│   │   │   ├── Accordion.tsx
│   │   │   ├── InteractivePricingCalculator.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── FeatureIcon.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── sections/           # Major page sections
│   │   │   ├── Contact.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── Testimonials.tsx
│   │   └── ui/   
│   │       └── button.tsx      # Base UI components from shadcn/ui (e.g., button.tsx)
│   ├── constants/ 
│   │   └── index.tsx           # Centralized constants (images, logos, icons)
│   └── lib/
│       └── utils.ts            # Utility functions (e.g., cn for classnames)
└── components.json             # Configuration file for shadcn/ui
```


## 🔧 Tech Stack

| Technology     | Description                                 |
|----------------|---------------------------------------------|
| **Next.js**    | React framework with App Router              |
| **TypeScript** | Type-safe component and prop definitions     |
| **Tailwind CSS** | Utility-first CSS for rapid styling        |
| **Framer Motion** | Declarative animations and transitions   |
| **shadcn/ui**  | UI primitives with design flexibility        |
| **styled-jsx** | Component-scoped animations & keyframes      |
| **Lucide React** | Icon set for UI & navigation               |
| **IBM Plex Sans** | Modern font loaded via next/font          |

---


## 📦 Installation


```bash
git clone https://github.com/your-username/admybrand-landing.git
cd admybrand-landing
npm install         # or npm install / yarn install
npm run dev         # starts the dev server on localhost:3000
