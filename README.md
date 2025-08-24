# Globridge - Multilingual Landing Page

**Connect, Collaborate, Conquer – Anywhere**

A production-ready, multilingual landing page for Globridge, an AI-powered productivity tools startup designed for remote global teams. Built with Next.js 13+, TypeScript, Tailwind CSS, and i18next for internationalization.

## 🌟 Features

- **Multilingual Support**: English, Spanish, and French translations with i18next
- **Modern Design**: Clean, professional design with Globridge brand colors
- **Accessibility**: WCAG-compliant with semantic HTML, proper focus management, and keyboard navigation
- **SEO Optimized**: Comprehensive meta tags, Open Graph data, and structured data
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 13+ App Router and modern best practices
- **Animations**: Smooth animations with Framer Motion
- **Interactive Components**: Built with Headless UI for accessibility

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: react-i18next
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Components**: Headless UI
- **Font**: Inter (Google Fonts)

## 🎨 Brand Guidelines

- **Brand Name**: Globridge
- **Tagline**: "Connect, Collaborate, Conquer – Anywhere"
- **Colors**:
  - Deep Blue: `#1A237E`
  - Sky Blue: `#81D4FA`
  - Off-white: `#FAFAFA`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO meta tags
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── CTA.tsx           # Call-to-action section
│   ├── FAQ.tsx           # Frequently asked questions
│   ├── Features.tsx      # Features showcase
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── I18nProvider.tsx  # i18n context provider
│   ├── LanguageSwitcher.tsx  # Language selection
│   ├── Logo.tsx          # Brand logo component
│   ├── Navbar.tsx        # Navigation header
│   ├── Pricing.tsx       # Pricing plans
│   ├── Testimonials.tsx  # Customer testimonials
│   └── UseCases.tsx      # Use cases section
├── lib/
│   └── i18n.ts           # i18next configuration
└── locales/              # Translation files
    ├── en/common.json    # English translations
    ├── es/common.json    # Spanish translations
    └── fr/common.json    # French translations
```

## 🌐 Internationalization

The site supports three languages:

- **English** (default)
- **Spanish**
- **French**

Language detection is automatic based on browser settings, with manual switching available via the language picker in the navigation and footer.

## 📊 Page Sections

1. **Navigation** - Sticky header with language switcher
2. **Hero** - Main value proposition with CTAs
3. **Features** - AI-powered productivity tools showcase
4. **Use Cases** - Target audience scenarios
5. **Testimonials** - Social proof from global customers
6. **Pricing** - Transparent pricing plans with toggle
7. **FAQ** - Common questions and answers
8. **CTA** - Final conversion section
9. **Footer** - Links, legal, and language selection

## 🎯 SEO & Performance

- Optimized meta tags and Open Graph data
- Structured data for rich snippets
- Image optimization with Next.js Image component
- Lazy loading and code splitting
- Web vitals optimization
- Semantic HTML structure

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Languages

1. Create translation file in `src/locales/[locale]/common.json`
2. Add locale to `src/lib/i18n.ts`
3. Update `next.config.ts` i18n configuration
4. Add language option to `LanguageSwitcher.tsx`

## 📄 License

This project is for demonstration purposes. Globridge is a fictional company created for this landing page example.

## 🤝 Contributing

This is a demonstration project, but feel free to use it as a template for your own multilingual landing pages.

---

Built with ❤️ for global teams everywhere.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
