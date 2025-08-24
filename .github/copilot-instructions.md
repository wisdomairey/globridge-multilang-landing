# Copilot Instructions for Globridge Landing Page

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Context

This is a Next.js 13+ landing page for Globridge, an AI-powered productivity tools startup for remote global teams. The project uses:

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Internationalization**: react-i18next (English, Spanish, French)
- **Components**: Headless UI for accessibility
- **Icons**: Heroicons
- **Animations**: Framer Motion

## Brand Guidelines

- **Brand Name**: Globridge
- **Tagline**: "Connect, Collaborate, Conquer – Anywhere"
- **Brand Colors**:
  - Deep Blue: #1A237E
  - Sky Blue: #81D4FA
  - Off-white background: #FAFAFA
- **Typography**: Clean sans-serif (Inter/Roboto system fonts)

## Code Style & Best Practices

- Follow WCAG accessibility guidelines
- Use semantic HTML elements
- Implement proper TypeScript types
- Create reusable, clean components
- Use Tailwind CSS utility classes
- Implement proper SEO meta tags
- Follow internationalization best practices with react-i18next
- Ensure mobile-first responsive design
- Use descriptive alt text for images
- Implement proper focus management for keyboard navigation

## File Structure

- Components in `src/components/`
- Pages in `src/app/`
- i18n configuration in `src/lib/i18n.ts`
- Translation files in `src/locales/`
- Types in `src/types/`
- Utilities in `src/lib/`

## Translation Keys

Use consistent naming for translation keys:

- `nav.home`, `nav.features`, etc. for navigation
- `hero.title`, `hero.subtitle`, etc. for hero section
- `features.title`, `features.subtitle`, etc. for features
- `cta.startTrial`, `cta.requestDemo` for call-to-action buttons
