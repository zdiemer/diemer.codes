#!/usr/bin/env bash
# Apply the current chart to the running diemer-codes release.
#
# NOTE: if you changed the site, content pin, Dockerfile or nginx.conf, bump the
# tag (Chart.yaml version + appVersion and values.yaml image.tag move together)
# and run ./build.sh first. imagePullPolicy is IfNotPresent, so reusing a tag
# will NOT re-pull and nothing will change.

set -euo pipefail

RELEASE="${RELEASE:-diemer-codes}"
NAMESPACE="${NAMESPACE:-web}"
HERE="$(cd "$(dirname "$0")" && pwd)"
VALUES="${HERE}/values.yaml"
LOCAL_VALUES="${HERE}/values.local.yaml"
VALUE_ARGS=(-f "$VALUES")
# values.local.yaml carries imageCredentials.pat (the GHCR read:packages PAT
# for the private image). Gitignored; required for a fresh install to pull.
[[ -f "$LOCAL_VALUES" ]] && VALUE_ARGS+=(-f "$LOCAL_VALUES")

K="kubectl -n ${NAMESPACE}"

command -v helm    >/dev/null || { echo "helm required"; exit 1; }
command -v kubectl >/dev/null || { echo "kubectl required"; exit 1; }

echo "==> helm upgrade --install ${RELEASE} ${HERE} -n ${NAMESPACE}"
helm upgrade --install "$RELEASE" "$HERE" -n "$NAMESPACE" "${VALUE_ARGS[@]}" --atomic --cleanup-on-fail

echo "==> Waiting for ${RELEASE} rollout"
$K rollout status "deployment/${RELEASE}" --timeout=180s

echo "==> Pods"
$K get pods -l app.kubernetes.io/instance="${RELEASE}"
