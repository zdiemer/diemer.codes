# syntax=docker/dockerfile:1

# diemer.codes — Astro static build served by nginx.
#
# Normal shape for this cluster (see selfhosted README): the app repo owns its
# source, chart, and this Dockerfile, and is submodule'd into selfhosted at
# web/diemer-codes. Build context is the repo root.
#
# The posts live in content/posts, a PRIVATE submodule (zdiemer/diemer-codes-posts).
# docker/buildctl only sees the checked-out files, so the submodule must be
# inited in the context before building — build.sh asserts this. No token ever
# enters the image; the Markdown is read at build time and only the rendered
# HTML ships.

# ---------------------------------------------------------------- build stage
FROM node:22-alpine AS build

WORKDIR /src

# Manifests first so source edits don't re-run the install.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY astro.config.mjs tsconfig.json ./
COPY public/ ./public/
COPY src/ ./src/
COPY content/ ./content/

RUN npm run build

# Fail HERE, loudly, rather than in production, silently.
#   index + a writing page      -> the content collection actually found posts
#                                  (an empty submodule builds a site with no
#                                  writing and nothing else complains)
#   fonts                       -> the faces the whole design rides on shipped
#   rss/sitemap/robots/og       -> the SEO surface is really there
RUN set -eux; \
    test -s dist/index.html; \
    test -s dist/projects/index.html; \
    test -n "$(find dist/writing -name 'index.html' -size +0c | head -1)"; \
    test -s dist/fonts/DepartureMono-Regular.woff2; \
    test -s dist/fonts/MartianMono-Variable.woff2; \
    test -s dist/images/portrait-1bit.png; \
    test -s dist/rss.xml; \
    test -s dist/sitemap-index.xml; \
    test -s dist/robots.txt; \
    test -s dist/og.png; \
    grep -q 'Departure Mono' dist/index.html || grep -qr 'Departure Mono' dist/_astro/; \
    grep -q 'og:image' dist/index.html

# -------------------------------------------------------------- runtime stage
# Same base as web/old-diemer-codes and web/kelsey-green: uid 101, binds 8080,
# proven on this cluster under readOnlyRootFilesystem.
FROM nginxinc/nginx-unprivileged:1.29-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Root-owned on purpose: nginx runs as 101 and only ever reads.
COPY --from=build /src/dist/ /usr/share/nginx/html/

EXPOSE 8080
