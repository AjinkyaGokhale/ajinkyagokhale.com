#!/usr/bin/env bash
#
# Fail the build if shipped assets blow their size budget. Scans the build
# output (dist/) — run it after `npm run build`. Used in CI before deploy so a
# bloated image or runaway JS bundle never reaches production.
#
# Budgets (override via env):
#   MAX_IMAGE_KB   per-image hard cap   (default 500)
#   MAX_JS_KB      total JS budget      (default 300)
#   MAX_CSS_KB     total CSS budget     (default 120)
#
# Usage:
#   ./scripts/check-asset-sizes.sh             # checks dist/
#   ./scripts/check-asset-sizes.sh build       # another dir
#   MAX_IMAGE_KB=400 ./scripts/check-asset-sizes.sh
set -euo pipefail

DIR="${1:-dist}"
MAX_IMAGE_KB="${MAX_IMAGE_KB:-500}"
MAX_JS_KB="${MAX_JS_KB:-300}"
MAX_CSS_KB="${MAX_CSS_KB:-120}"

if [ ! -d "$DIR" ]; then
  echo "error: '$DIR' not found — run 'npm run build' first" >&2
  exit 1
fi

kib() { echo $(( ( $(wc -c < "$1") + 1023 ) / 1024 )); }

fail=0
echo "Asset budget check on $DIR/ (image ≤ ${MAX_IMAGE_KB}K · js ≤ ${MAX_JS_KB}K · css ≤ ${MAX_CSS_KB}K)"

# Per-image hard cap.
while IFS= read -r -d '' f; do
  size=$(kib "$f")
  if [ "$size" -gt "$MAX_IMAGE_KB" ]; then
    echo "  ✗ ${f#"$DIR"/} is ${size}K (> ${MAX_IMAGE_KB}K)"
    fail=1
  fi
done < <(find "$DIR" -type f \( \
  -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \
  -o -iname '*.webp' -o -iname '*.avif' -o -iname '*.gif' \) -print0)

# Total JS / CSS budgets.
sum_kib() {
  local total=0 f
  while IFS= read -r -d '' f; do total=$(( total + $(wc -c < "$f") )); done
  echo $(( ( total + 1023 ) / 1024 ))
}
js_kb=$(find "$DIR" -type f -iname '*.js' -print0 | sum_kib)
css_kb=$(find "$DIR" -type f -iname '*.css' -print0 | sum_kib)
echo "  JS total:  ${js_kb}K"
echo "  CSS total: ${css_kb}K"

if [ "$js_kb" -gt "$MAX_JS_KB" ]; then
  echo "  ✗ JS total ${js_kb}K exceeds ${MAX_JS_KB}K"
  fail=1
fi
if [ "$css_kb" -gt "$MAX_CSS_KB" ]; then
  echo "  ✗ CSS total ${css_kb}K exceeds ${MAX_CSS_KB}K"
  fail=1
fi

if [ "$fail" -ne 0 ]; then
  echo "Asset budget check FAILED"
  exit 1
fi
echo "Asset budget check passed ✓"
