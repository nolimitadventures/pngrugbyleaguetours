# PNG Rugby League Tours

Astro static site for pngrugbyleaguetours.com.au, a brand of No Limit Adventures (sister site to PNG Surf Adventures).

## Run locally

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs to dist/

## Where things live

- `src/data/site.ts` – contact details, ABN, nav, FAQs, Web3Forms key
- `src/data/trips.ts` – trip styles and extensions (text, photos, lengths)
- `src/pages/` – one file per page
- `src/styles/global.css` – colours, fonts, layout
- `public/images/` – photos (WebP)

## Deploy (Vercel, same as the surf site)

Import the repo in Vercel; it detects Astro automatically. Then add the domain
pngrugbyleaguetours.com.au under Project → Settings → Domains.

## Content rules

- Do not mention the NRL, PNG Chiefs or other club/competition names or logos.
- Match tickets and corporate boxes are not included in packages.
