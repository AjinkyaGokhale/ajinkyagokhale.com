#!/usr/bin/env bash
#
# Crop + compress all blog thumbnails to a single 16:9 size as WebP.
#
# Source images live in static/img/blog/. Raster files (png/jpg/jpeg/webp/tif)
# are center-cropped to 16:9, resized to ${WIDTH}x${HEIGHT}, and written as
# slug.webp in the same folder. SVGs are left alone — they're vector and scale
# for free. Reference the result from a post's frontmatter as:
#
#     cover: /img/blog/your-slug.webp
#
# Usage:
#   ./scripts/optimize-thumbnails.sh            # process static/img/blog
#   ./scripts/optimize-thumbnails.sh path/dir   # process another folder
#   WIDTH=1600 HEIGHT=900 ./scripts/optimize-thumbnails.sh
#
set -euo pipefail

DIR="${1:-static/img/blog}"
WIDTH="${WIDTH:-1280}"
HEIGHT="${HEIGHT:-720}"
QUALITY="${QUALITY:-80}"

if ! command -v magick >/dev/null 2>&1; then
  echo "error: ImageMagick (magick) not found — install with 'brew install imagemagick'" >&2
  exit 1
fi

if [ ! -d "$DIR" ]; then
  echo "error: directory not found: $DIR" >&2
  exit 1
fi

echo "Optimizing thumbnails in $DIR → ${WIDTH}x${HEIGHT} webp (q${QUALITY})"

shopt -s nullglob nocaseglob
found=0
for src in "$DIR"/*.{png,jpg,jpeg,webp,tif,tiff}; do
  found=1
  base="$(basename "$src")"
  slug="${base%.*}"
  out="$DIR/$slug.webp"

  # Center-crop to fill 16:9 then resize to exact target, strip metadata.
  magick "$src" \
    -auto-orient \
    -resize "${WIDTH}x${HEIGHT}^" \
    -gravity center \
    -extent "${WIDTH}x${HEIGHT}" \
    -strip \
    -quality "$QUALITY" \
    "$out"

  size="$(du -h "$out" | cut -f1)"
  echo "  ✓ $base → $slug.webp (${size})"
done

if [ "$found" -eq 0 ]; then
  echo "  no raster images found (only .svg or empty) — nothing to do"
fi
