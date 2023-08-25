#!/bin/sh
RANCHER_PASS="${RANCHER_PASS:-rancher-test}"
RANCHER_HTTPS_PORT="${RANCHER_HTTPS_PORT:-4000}"
RANCHER_HTTP_PORT="${RANCHER_HTTP_PORT:-8000}"
CONTAINER_RUNTIME="${1:-nerdctl}"

"$CONTAINER_RUNTIME" run -d --restart=unless-stopped -p "$RANCHER_HTTP_PORT":80 -p "$RANCHER_HTTPS_PORT":443 --privileged --name rancher -e CATTLE_BOOTSTRAP_PASSWORD="$RANCHER_PASS" rancher/rancher:v2.6-head
