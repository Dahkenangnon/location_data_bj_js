#!/usr/bin/env bash
#
# Regenerate brand-asset PNGs from their SVG sources (all in public/).
#
# Inputs (SVG sources in public/):
#   public/banner.svg, public/banner-square.svg, public/og-image.svg
#   public/logo.svg, public/favicon.svg
#
# Outputs (PNGs written to public/):
#   public/banner.png              (1200×420)
#   public/banner-square.png       (1200×1200)
#   public/og-image.png            (1280×640,  used as og:image)
#   public/logo-512.png            (512×512)
#   public/favicon-32.png          (32×32)
#   public/favicon-192.png         (192×192)
#   public/apple-touch-icon.png    (512×512)
#
# Requires: rsvg-convert (librsvg). Install:
#   Debian/Ubuntu: sudo apt install librsvg2-bin
#   macOS:         brew install librsvg
#
# Usage: bash tools/render-assets.sh   (from repo root)

set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v rsvg-convert >/dev/null; then
  echo "error: rsvg-convert not found — install librsvg2-bin (Linux) or librsvg (macOS)" >&2
  exit 1
fi

mkdir -p public

# ─── public/ — SVG sources and PNG outputs live together ─────────────────────
rsvg-convert -w 1200          public/banner.svg          -o public/banner.png
rsvg-convert -w 1200 -h 1200  public/banner-square.svg   -o public/banner-square.png
rsvg-convert -w 1280 -h  640  public/og-image.svg        -o public/og-image.png
rsvg-convert -w  512          public/logo.svg            -o public/logo-512.png
rsvg-convert -w   32          public/favicon.svg         -o public/favicon-32.png
rsvg-convert -w  192          public/favicon.svg         -o public/favicon-192.png
rsvg-convert -w  512          public/logo.svg            -o public/apple-touch-icon.png

echo "✓ assets re-rendered"
ls -la public/*.png public/*.svg 2>&1
