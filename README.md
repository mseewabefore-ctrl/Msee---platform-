# MSEE Free Launch Kit

This is a static website starter for MSEE. It is designed to work on Android phones and computers.

## Quick test
1. Extract the ZIP.
2. Open `site/index.html` in Chrome or another modern browser.
3. Search uses an existing public web search provider. Service cards open existing online providers.
4. Notes save locally in that browser only.

## Put it online for free (GitHub Pages example)
You need a GitHub account and an internet connection. These instructions use GitHub's website:
1. Create a new public repository named `msee-platform` at https://github.com/new
2. Upload the contents of the `site` folder (index.html, style.css, app.js) to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for the published site address to appear in the Pages section. It will be a GitHub Pages address, not a custom domain.

## Custom domain
A domain like `msee.com` must be checked and registered if available; it is usually not free. After registering, connect it through your hosting provider's custom-domain settings and configure the DNS records they give you. Do not guess or copy DNS values from random sites.

## What this is / isn't
This is a frontend prototype and launch kit, not a complete Google replacement. It has a MSEE-branded landing page, web-search shortcut, 20 service cards, local notes, a basic calculator, and dark mode. Some service cards link to existing providers. It does not create MSEE-owned mail, a global web index, proprietary AI, cloud sync, real authentication, payment processing, or an operating system.

To add real accounts, Google sign-in, AI, cloud storage, or payments, build a secure backend and configure the relevant providers. Never put private API keys or payment secrets in browser JavaScript.
