# Kivoff

**Build the tools. Deploy the future. Powered by AI.**

The official website of Kivoff, an engineering team that designs, builds and deploys custom software and AI-powered tools for companies.

The site explains what Kivoff does, shows examples of what it can build, and routes visitors to the right conversation: sales, support or general inquiries.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router) and React |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui, Radix UI |
| Icons | Lucide React |
| Forms | Server Actions, [Zod](https://zod.dev) |
| Email | [Resend](https://resend.com) |
| Package manager | pnpm |
| Hosting | Vercel |

Animations are plain CSS (no animation library), and every animated element respects `prefers-reduced-motion`.

## Getting started

### Requirements

- Node.js 20.9 or later
- pnpm

### Installation

```bash
git clone https://github.com/YordiMarte/Kivoff.git
cd Kivoff
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

The contact forms send email through Resend. Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | API key from your Resend account |
| `CONTACT_FROM_EMAIL` | Sender address (must belong to a domain verified in Resend) |
| `CONTACT_TO_EMAIL` | Mailbox that receives inquiries |

In development, when these are missing, form submissions are logged to the terminal instead of sent. In production, missing variables make the form show an error rather than pretend to send.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

Run `pnpm lint` and `pnpm build` before every push.

## Project structure

```
src/
├── app/                      Routes (App Router)
│   ├── layout.tsx            Root layout: background, navbar, footer
│   ├── page.tsx              Home
│   ├── about/                About page
│   ├── pricing/              Pricing page
│   └── contact/
│       ├── page.tsx          Contact options
│       ├── sales/            Sales form and Server Action
│       └── support/          Support form and Server Action
├── components/
│   ├── layout/               Navbar, dropdown menu, site background
│   ├── sections/             Page sections (hero, capabilities, products, ...)
│   ├── forms/                Shared form field, honeypot
│   └── ui/                   shadcn/ui primitives
├── config/                   All site content and navigation as typed data
├── images/                   Statically imported images (logos, team, products)
└── lib/
    ├── validations/          Zod schemas and shared form state types
    ├── send-inquiry.ts       Email delivery through Resend
    └── utils.ts              Small helpers
```

The tree is abridged; see the source for the full list.

## Architecture notes

- **Content lives in `src/config/`.** Copy, navigation, pricing, products and team members are typed data files. Components only render them, so updating the site rarely means touching JSX.
- **One navigation source.** `config/navigation.ts` feeds the navbar dropdowns and the footer links, so they cannot drift apart.
- **One brand color.** Colors are CSS variables defined in `globals.css`. The accent is the `--brand` token, and glows, buttons and illustrations all read from it.
- **Forms are validated on the server.** Each form posts to a Server Action that validates with Zod, drops honeypot-filled submissions, and sends the email through a shared `sendInquiry` helper. Field errors are returned to the form with the submitted values preserved.
- **Accessibility.** Semantic landmarks and headings, labelled form fields with `aria-invalid` and `role="alert"` errors, a keyboard-operable dropdown (Escape, outside click, focus handling), and reduced-motion support.
- **Images.** Static imports through `next/image`, so dimensions are known at build time and layout shifts are avoided.

## Deployment

The site is designed for [Vercel](https://vercel.com):

1. Import the repository in Vercel.
2. Add the three environment variables under *Project Settings > Environment Variables*.
3. Deploy. Every push to `main` triggers a production deployment.

## Before going live

Some content is placeholder and must be replaced with real, approved information:

- Testimonials (`src/config/testimonials.ts`) are sample data.
- Contact email in `src/config/contact.ts`.
- LinkedIn URL and facts in `src/config/about.ts` (placeholders appear in square brackets).
- Pricing amounts and scope in the pricing config.
- Partner logos: confirm you have permission to display them.
- Product names and descriptions in `src/config/products.ts`.

## Roadmap

- [ ] Mobile navigation menu
- [ ] Privacy policy page
- [ ] `sitemap.ts`, `robots.ts` and Open Graph image
- [ ] GitHub Actions workflow running lint and build
- [ ] Custom 404 page
- [ ] Intro video on the About page

## Commit convention

This project follows [Conventional Commits](https://www.conventionalcommits.org):

```
feat(contact): add support page and share form building blocks
fix(capabilities): keep figure strokes visible on hover
style(design): restore indigo brand token
content(about): align About copy with design reference
```

Common types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`.

## Contact

Questions about the project or about working with Kivoff: use the [contact page](https://kivoff.com/contact).