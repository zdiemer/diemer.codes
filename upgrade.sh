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
# Resolve the secret from 1Password into RAM for the life of this run. It is
# never written to a persistent disk, and it is removed on exit.
#
# $SELFHOSTED_LOCAL_VALUES lets a caller supply a path instead. The on-disk
# values.local.yaml is the last resort, for a clone that predates this.
resolve_local_values() {
  local here="$1" rt="" d
  if [[ -n "${SELFHOSTED_LOCAL_VALUES:-}" ]]; then printf '%s
' "$SELFHOSTED_LOCAL_VALUES"; return 0; fi
  if [[ -f "${here}/values.local.tpl.yaml" ]] && command -v op >/dev/null 2>&1; then
    # A tmpfs, asserted rather than assumed: /tmp is ext4 on some of these hosts,
    # so falling back to it would quietly reintroduce the file this removes.
    for d in "${XDG_RUNTIME_DIR:-}" "/run/user/$(id -u)" /dev/shm; do
      [[ -n "$d" && -d "$d" && -w "$d" ]] || continue
      case "$(stat -f -c %T "$d" 2>/dev/null)" in tmpfs|ramfs) rt="$d"; break ;; esac
    done
    [[ -n "$rt" ]] || { echo "FAIL: no tmpfs available; refusing to write the secret to a disk" >&2; return 1; }
    local f; f="$(mktemp "${rt}/values.local.XXXXXX")" || return 1
    chmod 600 "$f"
    op inject -i "${here}/values.local.tpl.yaml" -o "$f" -f >/dev/null 2>&1 \
      || { rm -f "$f"; echo "FAIL: op inject failed. Signed in?  eval \$(op signin)" >&2; return 1; }
    printf '%s
' "$f"; return 0
  fi
  printf '%s
' "${here}/values.local.yaml"
}
LOCAL_VALUES="$(resolve_local_values "$HERE")" || exit 1
[[ "$LOCAL_VALUES" == "${HERE}/"* ]] || trap 'rm -f "$LOCAL_VALUES"' EXIT INT TERM

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
