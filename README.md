# Pathik Impex Website

Professional import/export website for Pathik Impex, focused on product discovery and quotation inquiries through Formspree.

## Project Structure

```text
src/app/              Next.js routes and API endpoint
src/components/       Shared interface components
src/data/             Product catalog data
public/advantis/      Product showcase imagery used by the site
```

## Environment

Create `.env.local` from `.env.example` and add the live Formspree endpoint:

```env
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Notes

- The admin dashboard has been removed from the active site. The current inquiry workflow is email-first through Formspree.
- Generated folders such as `.next/`, temporary brochure renders, logs, and TypeScript cache files are intentionally ignored.
- The default Next.js public SVG assets were removed because the site does not use them.
