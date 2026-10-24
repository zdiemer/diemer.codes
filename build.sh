#!/usr/bin/env bash
# Build and push to the private registry configured in values.yaml.
# Bump image.tag and Chart version/appVersion before building, then upgrade.sh.
# Registry credentials come from the developer Docker config; cluster nodes
# authenticate through selfhosted/infra/registry's managed containerd config.

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(awk -F'"' '/^  repository:/{print $0}' "${HERE}/values.yaml" | awk '{print $2}')"
TAG="$(awk -F'"' '/^  tag:/{print $2; exit}' "${HERE}/values.yaml")"
IMAGE="${REPO}:${TAG}"

# The posts are a PRIVATE submodule; a clone without --recurse-submodules (or
# without access) leaves content/posts empty and the site silently builds with
# zero writing. The Dockerfile asserts this too, but fail here with a message.
if ! ls "${HERE}"/content/posts/*.md >/dev/null 2>&1; then
  echo "content/posts/ is empty — the posts are a private submodule. Run:"
  echo "  git submodule update --init content/posts"
  exit 1
fi

if command -v docker >/dev/null; then
  echo "==> Building ${IMAGE} (docker)"
  docker build -t "${IMAGE}" "${HERE}"
  echo "==> Pushing ${IMAGE}"
  docker push "${IMAGE}"
elif command -v buildctl >/dev/null; then
  # Workspace-pod path: remote build on the in-cluster buildkitd, which pushes
  # straight to the registry. Auth is forwarded per-session from ~/.docker/config.json.
  [[ -f "${HOME}/.docker/config.json" ]] || {
    echo "missing ~/.docker/config.json — add the registry credential first (selfhosted/infra/registry/README.md)"
    echo "(see selfhosted/infra/registry/README.md)"; exit 1; }

  echo "==> Building + pushing ${IMAGE} (buildctl → ${BUILDKIT_HOST:-unset})"
  buildctl build \
    --frontend dockerfile.v0 \
    --local context="${HERE}" \
    --local dockerfile="${HERE}" \
    --output "type=image,\"name=${IMAGE}\",push=true"
else
  echo "docker or buildctl required"; exit 1
fi

echo "==> Done. Run upgrade.sh to roll the deployment onto the new image."
