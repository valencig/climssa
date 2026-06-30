# GitHub Pages Deployment

This project is configured as a static Next.js export, so it can be published on GitHub Pages without Vercel.

Configured target URL:

```text
https://valencig.github.io/climssa/
```

## Local Static Test

Build the static site:

```bash
npm run build
```

Preview the generated `out/` folder:

```bash
npm run preview:static
```

Open the local URL printed by `serve`.

To test the same base path used by GitHub Pages, run:

```bash
NEXT_PUBLIC_BASE_PATH=/climssa NEXT_PUBLIC_SITE_URL=https://valencig.github.io/climssa npm run build
npm run preview:github
```

Then open:

```text
http://localhost:3000/climssa/
```

If port `3000` is busy, `serve` will print the port it used.

## GitHub Pages Setup

1. Push this repository to GitHub.
2. Go to the repository on GitHub.
3. Open `Settings` -> `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main` or run the workflow manually from the `Actions` tab.

The workflow builds the static site into `out/` and deploys it to GitHub Pages.

## Current Redirect Diagnosis

Chrome DevTools and `curl` showed this redirect:

```text
https://valencig.github.io/climssa/ -> 301 -> https://datalquimia.com.mx/climssa/
```

That redirect is coming from GitHub Pages configuration, not from this Next.js project. This repository does not contain a `CNAME` file, and the workflow removes `out/CNAME` before uploading the Pages artifact.

To fix it in GitHub:

1. Sign in to GitHub as the `valencig` account.
2. Open the repository settings for the Pages site.
3. Check both possible repositories:
	- `https://github.com/valencig/climssa/settings/pages`
	- `https://github.com/valencig/valencig.github.io/settings/pages`
4. In `Settings` -> `Pages`, find `Custom domain`.
5. If it says `datalquimia.com.mx`, remove it and save.
6. Make sure `Build and deployment` uses `GitHub Actions` for the `climssa` repo.
7. Re-run the `Deploy to GitHub Pages` workflow.

After the change, this command should no longer show `datalquimia.com.mx`:

```bash
curl -I -L https://valencig.github.io/climssa/
```

Expected result: final URL stays under `https://valencig.github.io/climssa/`.

## URL Cases

If your repository is a project site, for example `climssa`, GitHub Pages will publish to:

```text
https://valencig.github.io/climssa/
```

The workflow automatically sets:

```text
NEXT_PUBLIC_BASE_PATH=/climssa
NEXT_PUBLIC_SITE_URL=https://valencig.github.io/climssa
```

If your repository is a user/organization site named `YOUR_USER.github.io`, GitHub Pages publishes at the root:

```text
https://YOUR_USER.github.io/
```

In that case, the workflow leaves `NEXT_PUBLIC_BASE_PATH` empty.

## WhatsApp Number

The workflow sets:

```text
NEXT_PUBLIC_WHATSAPP_NUMBER=525527595300
```

This is the primary Climssa WhatsApp sales number.

## Custom Domain Later

If you later connect `climssa.com` to GitHub Pages, keep your email MX records intact. Only change the web records GitHub asks for, usually `A`, `AAAA`, or `CNAME`. Do not delete existing `MX`, `TXT`, SPF, DKIM, or DMARC records for email.