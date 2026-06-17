# Domain migration: koels.site → koels.net

The canonical domain is **koels.net**. **koels.site** is the legacy domain and
will be retired.

## Current state (soft migration — banner only)

A non-intrusive notice is shown **only** when the site is loaded from
`koels.site` (or `www.koels.site`). It tells visitors the site has moved,
provides a button to `https://koels.net` (preserving the current path), and can
be dismissed (remembered for 30 days via `localStorage`).

- Implementation: `src/components/page-enhancements.ts`
  (`domainNotice()` + `.koels-domain-notice` styles). This runs on every page
  because the enhancement script/styles are injected by
  `src/components/StaticHtmlPage.tsx`.
- The banner uses `position: fixed`, so appearing/dismissing it causes no layout
  shift. On `koels.net` it is never rendered.

There is currently **no server-side redirect** — this is intentional so the
legacy domain keeps working while visitors are nudged to update bookmarks.

## Is Vercel already configured to redirect?

No. `vercel.json` only configures the build (`cleanUrls`, `trailingSlash`, etc.)
and contains no `redirects`. Domain attachment/redirects are not defined in the
repo, so any current `koels.site` behavior is whatever is set in the Vercel
dashboard (by default it just serves the same deployment).

## Enabling a permanent redirect later (recommended approach)

When you're ready to fully retire `koels.site`, pick **one** of these. Both
issue a permanent (308) redirect and preserve the path.

### Option A — Vercel dashboard (recommended)

1. Project → **Settings → Domains**.
2. Ensure both `koels.site` and `www.koels.site` are added to the project.
3. For each, choose **Redirect to** → `koels.net` (Vercel handles apex + www and
   preserves the path automatically).

This needs no code change and is the cleanest for a pure domain redirect.

### Option B — `vercel.json` (in-repo, version controlled)

Add a host-conditioned redirect so only `koels.site` traffic is redirected
(requests already on `koels.net` are untouched):

```jsonc
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "(www\\.)?koels\\.site" }],
      "destination": "https://koels.net/:path*",
      "permanent": true
    }
  ]
}
```

> Note: GitHub Pages also serves this repo via the `CNAME` file (`koels.net`).
> Redirecting `koels.site` is a Vercel concern; the GitHub Pages `koels.net`
> deployment is unaffected.

## Once a redirect is enabled

The banner becomes effectively dead code — after the redirect, visitors never
land on `koels.site` long enough to see it. It is safe to leave (harmless) or to
remove `domainNotice()` and the `.koels-domain-notice` styles in a follow-up.
