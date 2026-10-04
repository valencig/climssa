# SEO implementation: professional buyers and projects in CDMX

This change implements the confirmed website portion of the SEO plan. It does
not deploy the site, configure Google accounts, or claim improved rankings.

## Content and search intent

| Page | Main intent |
| --- | --- |
| `/` | Aire acondicionado en CDMX: venta e instalacion |
| `/proveedor-aire-acondicionado-instaladores/` | Provider for installers, resellers and maintenance businesses |
| `/proyectos/` | Supply and installation for architects and builders |
| `/aire-acondicionado-oficinas-comercios/` | Installation/replacement for administrators of offices and shops |
| `/productos/` and existing detail URLs | Equipment and spare-part references; confirm actual model and availability |
| `/servicios/` | Installation and maintenance in CDMX and the metropolitan area |
| `/contacto/` | Climssa / Climas de Sinaloa's actual location in CDMX |
| `/cotizacion/` | Equipment and project inquiries through existing WhatsApp links |

Equipment supply and installation projects retain equal prominence. Maintenance
and household customers are not removed. Large projects elsewhere in Mexico
are described as subject to scope/logistics review, not ordinary nationwide
service. No branch in Sinaloa is claimed.

New contact links preserve the buyer's context in a prefilled WhatsApp message.
Clicking a link does not send a message, confirm a lead, or prove a sale.
No wholesale program, guaranteed resale margin, stock, certification or
authorized-distributor relationship has been invented.

## Technical behavior

- All page titles include Climssa exactly once, including the home page.
  The helper uses an absolute title rather than relying on same-segment layout
  template inheritance in Next.js.
- Canonical and Open Graph page URLs use the final trailing slash.
  Asset URLs keep their original extensions without a trailing slash.
- The sitemap retains existing URLs and adds the two new landing pages.
  Build-time `lastmod` dates are omitted until real content dates are available.
- Local-business structured data describes CDMX and its metropolitan area.
  Sample products are no longer serialized as real commercial offers.
- Visible breadcrumbs and matching `BreadcrumbList` data appear on project,
  professional, office and equipment-reference pages.
- No fabricated prices, reviews, ratings or FAQ rich-result promises are added.
- Meta keywords are removed; the work targets actual visible content.

### Production and demonstration builds

Production defaults:

```sh
NEXT_PUBLIC_SITE_URL=https://www.climssa.com
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_ALLOW_INDEXING=true
```

GitHub Pages is a demonstration. Its existing workflow sets
`NEXT_PUBLIC_ALLOW_INDEXING=false`. Every page carries `noindex, follow`, its
sitemap has no URLs, and robots allows crawling so the directive can be read.
This does not require DNS, hosting, or Google Sites changes.

`NEXT_PUBLIC_SITE_URL` includes any deployment subpath; `NEXT_PUBLIC_BASE_PATH`
is the same subpath without a trailing slash. Both are build-time settings.
The indexing setting accepts only `true` or `false`. It defaults to `true`;
set it to `false` explicitly for other previews, including Vercel previews.
Do not copy the demo setting into production.

## Validation

No extra dependencies are needed. Tests use Node's built-in test runner and
inspect actual exported HTML, rather than just source metadata objects.
The GitHub Pages workflow also runs them after building, before uploading the
deployment artifact.

```sh
npm exec eslint -- src tests/seo-export.test.mjs
NEXT_PUBLIC_SITE_URL=https://www.climssa.com NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_ALLOW_INDEXING=true npm run build
NEXT_PUBLIC_SITE_URL=https://www.climssa.com NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_ALLOW_INDEXING=true node --test tests/seo-export.test.mjs
```

Run the same checks against a fresh demonstration export:

```sh
NEXT_PUBLIC_SITE_URL=https://valencig.github.io/climssa NEXT_PUBLIC_BASE_PATH=/climssa NEXT_PUBLIC_ALLOW_INDEXING=false npm run build
NEXT_PUBLIC_SITE_URL=https://valencig.github.io/climssa NEXT_PUBLIC_BASE_PATH=/climssa NEXT_PUBLIC_ALLOW_INDEXING=false node --test tests/seo-export.test.mjs
```

The test environment must match the preceding build. A build replaces `out/`.
Check mobile and desktop navigation and the prefilled WhatsApp text without
sending messages. After an authorized deployment, inspect the public pages
and Search Console; a valid sitemap does not guarantee indexation or ranking.

## Still requires owner data or a separate implementation

- The current catalog is illustrative, not an approved model inventory.
  Existing URLs and descriptive content remain available, with an explicit
  notice; replace them only after validating models, voltages, images and URL
  equivalents. This change does not invent products or technical specifications.
- The shared form remains a clearly labeled demonstration and does not deliver
  inquiries. The new commercial paths use WhatsApp. Email delivery needs an
  approved recipient/provider and must be tested end to end before promotion.
- Phone numbers and address values are preserved, not independently verified.
- Actual cases, manufacturer authorizations, guarantees and technical
  capabilities require evidence before publication.
- Analytics, consent, Google Business Profile, review collection, production
  hosting and third-party demonstration-site changes are not configured here.
- The broader Growth Strategy documents and financial hypotheses are separate;
  this commit does not approve or implement their CRM, advertising or credit plans.

## Safe rollback

The SEO work is isolated on a feature branch and in one commit. Leaving the
branch unmerged leaves `main` unchanged. If the commit is later applied and
must be undone, run `git revert <SEO-commit-SHA>` on the appropriate branch.
This creates a new inverse commit without rewriting history. Preserve any
unrelated uncommitted edits before switching branches or reverting.
