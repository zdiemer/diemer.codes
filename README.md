# diemer.codes

Personal site and blog. Amber phosphor edition: Astro static build styled
after amber CRT terminals, set in Departure Mono and Martian Mono.

## Layout

- `src/` — the site (Astro 5, zero client JS except the statusline fetch and
  the telemetry canvas)
- `content/posts/` — **private submodule** (`zdiemer/diemer-codes-posts`);
  every non-underscore `*.md` there becomes a post at `/writing/<slug>`
- `public/fonts/` — Departure Mono and Martian Mono, self-hosted woff2

## Develop

```sh
git clone --recurse-submodules git@github.com:zdiemer/diemer.codes.git
npm install
npm run dev
```

The posts submodule is private; cloning it needs a GitHub identity with
access (CI needs a token with `repo` read on `zdiemer/diemer-codes-posts`).

## Publish a post

Write in the posts repo, push, then bump the submodule here:

```sh
git -C content/posts pull origin main
git add content/posts && git commit -m "posts: bump content" && git push
```

## Status endpoint

The statusline renders build-time defaults and then tries `/status.json`:

```json
{ "nodes": "3/3", "uptime": "148d", "load": "0.42", "stamp": "2026-08-13 21:04" }
```

Serve that from the cluster (a tiny CronJob writing into the nginx pod, or an
ingress route to an exporter shim) and the bar goes live; without it the page
is fully static.
