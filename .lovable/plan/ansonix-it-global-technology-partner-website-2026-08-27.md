# Ansonix IT — Global Technology Partner Website

A premium, multi-page marketing site positioning Ansonix IT as a full-spectrum engineering partner, built around the uploaded logo, dark-first design, and the slogan "Money buys code. Trust builds partnerships."

## Brand & design system

- Logo used as-is (transparent PNG, CDN-hosted) in desktop nav, mobile nav, footer, contact/about pages, and favicon. No recolor, no redesign.
- Palette derived from the logo: deep black / charcoal surfaces, copper-bronze accent (#C87137-family in oklch), platinum-silver secondary accent.
- Dark mode default, an intentionally designed light mode (warm off-white paper, copper accents, silver-grey rules — not an inversion), and a polished theme switcher with no flash on load.
- Typography pairing with tight display headings and a highly legible body face; generous whitespace, restrained glass/glow, elegant hairline borders.
- Motion: scroll reveals, hero entrance, hover micro-interactions, animated gradient light — all gated behind `prefers-reduced-motion`.

## Pages

Home, About, Services (hub), Website Development, Software Development, Cloud & DevOps, AI/ML, Cybersecurity, Data & BI, UI/UX Design, IT Consulting, Engineering Teams, Industries, Portfolio, Careers, Contact, Privacy Policy, Terms of Service.

Home sections: hero ("Technology Built Around Your Business.") with an animated abstract tech visualization, capability grid, "How We Work" engagement models, "One Technology Partner. An Entire Engineering Team.", project-scale ladder, trust/partnership slogan section, 7-step process, industries strip, testimonial component with an explicit placeholder, closing CTA.

Each service page follows one template: hero, what we do, capability list, technology ecosystem, process fit, related services, CTA.

Engineering Teams page: "Need More Engineering Power?", the full role catalogue, engagement models, timezone/collaboration explainer, "Build Your Engineering Team" CTA.

## Content rules

No invented clients, logos, testimonials, stats, certifications, awards, or bios. Leadership shows Hiral Jain (CEO) and Anilkumar Jain (Founder) with clearly marked editable description slots. Portfolio uses labelled case-study placeholders with the full field structure so real projects drop in later.

## Contact & lead capture

Premium multi-step-feel form (Name, Company, Business Email, Phone, Country, Service, Engagement Type, Budget Range, Description, Preferred Contact Method) with Zod validation and a professional success state. Leads are stored in Lovable Cloud so nothing is lost, with both emails shown as direct contact options.

## SEO

Per-route title/description/og/twitter/canonical, semantic headings, JSON-LD (Organization + LocalBusiness sitewide, Service per service page, FAQPage and BreadcrumbList where relevant), sitemap route, robots.txt, alt text, lazy images. URL structure leaves room for future geo pages (/it-services-usa etc.) without any misleading location claims.

## Technical notes

The project runs on TanStack Start (React 19 + TypeScript + Tailwind v4) rather than Next.js — it provides the same SSR, routing, metadata, and code-splitting capabilities the brief asks for, so all requirements are met on this stack. Shared layout chrome (nav with services dropdown, animated mobile menu, footer, theme provider) lives in the root route. Reusable section components keep the 18 pages consistent and maintainable.

## Build order

1. Design system, tokens, logo asset, theme switcher, nav + footer shell.
2. Home page in full.
3. Services hub + eight service pages.
4. Engineering Teams, Industries, About, Portfolio, Careers.
5. Contact form + Cloud lead storage.
6. Legal pages, SEO/schema/sitemap, responsive and accessibility pass.
