# Bravic Enterprises Pty Ltd website

Independent, buildless HTML/CSS website prepared for Cloudflare Pages Free. No JavaScript, package installation, external assets, APIs, analytics, cookies, backend, Workers, Pages Functions, databases, bindings, secrets or paid services are required. No deployment or DNS changes have been performed.

## Files

- `index.html`: single-page website, six navigation sections, privacy section and SEO/Open Graph metadata.
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

1. Approved demo store URL. Replace the disabled “View Demo Store” button with an anchor using that URL and the same `button` class; remove its `disabled` attribute and update the “link coming soon” note. Keep password-required wording. Never commit the demo password; share it separately with prospective clients.
2. Approval of service descriptions, public portfolio wording, privacy wording and branding.
3. Final domain when domain connection is separately authorised. Add an absolute `og:url` and canonical URL then; neither is invented now. Optional approved social image can be added with an absolute `og:image` URL.

Branding is plain text, not an invented logo. To rename the business, search the repository for `Bravic Enterprises` and update the header, introduction, contact, footer, titles, metadata, 404 page and README. Update the footer copyright year when appropriate. The SVG is a generic placeholder and the main illustration is decorative CSS.

The demo URL is deliberately shown as pending until supplied. The public contact email is an active mailto link.

## GitHub repository

The designated repository already exists: `Vicki-Bravic/bravic-enterprises`. Use only this repository. To create a replacement independent repository later, create a new empty GitHub repository under your account, select the desired visibility, and upload these files, or initialise Git locally and add that new repository as `origin`. Never reuse another business project's repository or integrations. Keep secrets out of source control.

## Cloudflare Pages Free — after approval only

1. In Cloudflare, choose **Workers & Pages → Create application → Pages → Import an existing Git repository** (UI labels may vary). Choose Pages, not a Worker application.
2. Authorise only `Vicki-Bravic/bravic-enterprises` if prompted for repository access. Create a new, separate Pages project, for example `bravic-enterprises`. Do not select an existing project.
3. Configure:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Root directory | Blank (repository root) |
| Build command | Blank / None; use `exit 0` only if the UI requires a value |
| Build output directory | `.` (repository root, which contains `index.html`) |
| Environment variables / secrets | None |
| Worker bindings | None |

4. Deploy only after owner approval. Preview using the assigned free `https://<project-name>.pages.dev` address.
5. Check mobile and desktop layouts, keyboard navigation, security headers, contact and demo status, and a missing URL returning HTTP 404. Git-connected Pages will automatically deploy later pushes to the configured production branch.

The repository root is published, so README/source assets may be accessible; keep all tracked content public-safe. `_headers` is a static hosting configuration file, not executable code or a Function. No Wrangler setup is needed.

## Connect a domain later — separate authorisation required

Do not change anything now. Once explicitly authorised, open this new Pages project's **Custom domains** settings and follow Cloudflare's instructions for the approved domain. Review whether the chosen apex/subdomain requires nameserver or CNAME changes before making them. Coordinate any GoDaddy DNS changes separately, preserve existing mail and other records, and verify HTTPS after setup. Only then add the final canonical and Open Graph URLs. Do not modify any other project, Worker, integration or domain.

## Scope

No Camping Mat Warehouse repository, Shopify store, Cloudflare resource, DNS record or integration is needed or accessed. The portfolio's public website URL is an ordinary outbound link, not an integration. This website is ready for review, not deployed.
