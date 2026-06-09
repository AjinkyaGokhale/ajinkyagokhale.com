#!/usr/bin/env bash
#
# Compress raster image assets in place: downscale oversized images, strip
# metadata, and re-encode at a sane quality. Run it after dropping new
# screenshots/photos into static/img and before committing, so the repo and the
# deployed site stay lean (no 4000px camera originals shipped to the browser).
#
#   PNG          → capped to MAX_DIM, metadata stripped, max lossless compression
#   JPG / JPEG   → capped to MAX_DIM, stripped + re-encoded at QUALITY
#   WebP         → capped to MAX_DIM, stripped + re-encoded at QUALITY
#   AVIF / SVG   → skipped (already optimal / vector)
#
# The longest edge is only ever shrunk to MAX_DIM, never enlarged.
#
# Usage:
#   ./scripts/compress-assets.sh                 # process static/img
#   ./scripts/compress-assets.sh static/other    # another folder
#   QUALITY=80 MAX_DIM=1280 ./scripts/compress-assets.sh
set -euo pipefail

DIR="${1:-static/img}"
QUALITY="${QUALITY:-82}"
MAX_DIM="${MAX_DIM:-1600}"

if ! command -v magick >/dev/null 2>&1; then
  echo "error: ImageMagick (magick) not found — install with 'brew install imagemagick'" >&2
  exit 1
fi
if [ ! -d "$DIR" ]; then
  echo "error: directory not found: $DIR" >&2
  exit 1
fi

echo "Compressing raster assets in $DIR (max ${MAX_DIM}px, jpg/webp q${QUALITY}, png lossless)"
shopt -s nocasematch

total_before=0
total_after=0
processed=0

while IFS= read -r -d '' src; do
  before=$(wc -c < "$src")
  case "$src" in
    *.png)
      magick "$src" -resize "${MAX_DIM}x${MAX_DIM}>" -strip \
        -define png:compression-level=9 -define png:compression-filter=5 "$src" ;;
    *.jpg|*.jpeg|*.webp)
      magick "$src" -resize "${MAX_DIM}x${MAX_DIM}>" -strip -quality "$QUALITY" "$src" ;;
    *)
      continue ;;
  esac
  after=$(wc -c < "$src")
  total_before=$(( total_before + before ))
  total_after=$(( total_after + after ))
  processed=$(( processed + 1 ))
  saved=$(( before - after ))
  printf '  ✓ %-32s %5sK → %5sK (-%sK)\n' \
    "$(basename "$src")" "$(( before / 1024 ))" "$(( after / 1024 ))" "$(( saved / 1024 ))"
done < <(find "$DIR" -type f \( \
  -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' \) -print0)

if [ "$processed" -eq 0 ]; then
  echo "  no compressible raster images found — nothing to do"
else
  echo "  ─────────────────────────────────────────────"
  printf '  total: %sK → %sK (-%sK across %s files)\n' \
    "$(( total_before / 1024 ))" "$(( total_after / 1024 ))" \
    "$(( ( total_before - total_after ) / 1024 ))" "$processed"
fi
