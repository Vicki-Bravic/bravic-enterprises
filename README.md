# Bravic Enterprises Pty Ltd website

Independent, buildless HTML/CSS website prepared for Cloudflare Pages Free. Minimal vanilla JavaScript for copying the public demo password; no package installation, external assets, APIs, analytics, cookies, backend, Workers, Pages Functions, databases, bindings, secrets or paid services are required. No deployment or DNS changes have been performed.

## Files

- `index.html`: single-page website, six navigation sections, privacy section and SEO/Open Graph metadata.
- `demo-access.js`: clipboard copying with a browser fallback and accessible confirmation.
- `styles.css`: responsive layouts, keyboard focus styles and original CSS illustration.
- `assets/favicon.svg`: neutral placeholder favicon, not a company logo.
- `404.html`: accessible not-found page; also prevents Cloudflare Pages' implicit SPA fallback.
- `_headers`: security headers for static Cloudflare Pages hosting.
- `.gitignore`: excludes local scratch files and environment files.

## Local preview

From this repository's directory:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. Stop with Ctrl+C. Local Python hosting does not apply `_headers` or map missing URLs to the custom 404 page; open `/404.html` directly to review it. Do not use the development server for public hosting.

## Update content

Edit semantic sections in `index.html`; colours, type and spacing live in `styles.css`. The only portfolio facts included are the supplied public business description and general supplied examples; no operational systems or confidential data were accessed.

Confirmed business details: **info@bravic.com.au** · **ABN 73 650 113 303**.

Before launch, obtain:

1. Approval of service descriptions, public portfolio wording, privacy wording and branding.
2. Final domain when domain connection is separately authorised. Add an absolute `og:url` and canonical URL then; neither is invented now. Optional approved social image can be added with an absolute `og:image` URL.

Branding is plain text, not an invented logo. To rename the business, search the repository for `Bravic Enterprises` and update the header, introduction, contact, footer, titles, metadata, 404 page and README. Update the footer copyright year when appropriate. The SVG is a generic placeholder and the main illustration is decorative CSS.

The demo links to https://bravic-demo.myshopify.com and displays the intentionally public visitor password **demostore**. Visitors can copy it without registering or contacting us. If the store URL changes, update the Visit Demo Store link in `index.html`. Never commit administrator credentials or API tokens. The public contact email is an active mailto link.

## GitHub repository

Use the existing repository, `Vicki-Bravic/bravic-enterprises`. Review the visitor-access changes in a pull request before merging into `main`.

## Existing Cloudflare Pages deployment

Use the existing GitHub-connected Cloudflare Pages project. Do not create another project or repository or change DNS. Merging the reviewed pull request into its configured production branch allows the existing Pages integration to deploy the static files.

Keep the existing static settings: no framework, no build command, repository root output (`.`), no environment variables, bindings, Workers, Pages Functions or database. No subscriptions or paid services are needed.

Before merging, check the public password, Copy Password confirmation, Visit Demo Store link, keyboard navigation and mobile/tablet/desktop layouts. Where the existing project provides a branch preview, review that preview too. `_headers` permits only same-origin JavaScript so the local clipboard script can run; it adds no external connections.

The repository root is published, so README/source assets may be accessible; keep all tracked content public-safe. `_headers` is a static hosting configuration file, not executable code or a Function. No Wrangler setup is needed.

## Connect a domain later — separate authorisation required

Do not change anything now. Once explicitly authorised, open the existing Pages project's **Custom domains** settings and follow Cloudflare's instructions for the approved domain. Review whether the chosen apex/subdomain requires nameserver or CNAME changes before making them. Coordinate any GoDaddy DNS changes separately, preserve existing mail and other records, and verify HTTPS after setup. Only then add the final canonical and Open Graph URLs. Do not modify any other project, Worker, integration or domain.

## Scope

No Camping Mat Warehouse repository, Shopify store, Cloudflare resource, DNS record or integration is needed or accessed. The portfolio's public website URL is an ordinary outbound link, not an integration. This website is ready for review, not deployed.

## Photography

The introduction and Shopify service sections use locally hosted, responsive WebP stock photos. Meet Vicki uses Vicki’s supplied portrait, edited with AI for business clothing and background. See `assets/PHOTO-CREDITS.md` for source URLs, license and guidance for replacing them with Vicki's own photos. There are no third-party image requests. Update image alt text and dimensions when replacing a photo.
