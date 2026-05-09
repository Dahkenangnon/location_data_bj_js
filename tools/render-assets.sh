#!/usr/bin/env bash
#
# Regenerate brand-asset PNGs from their SVG sources.
#
# Outputs:
#   assets/banner.png        ← assets/banner.svg        (1200×420)
#   assets/og-image.png      ← assets/og-image.svg      (1280×640)
#   assets/logo-512.png      ← assets/logo.svg          (512×512)
#
#   public/banner.png              (1200×420)
#   public/banner-square.png       (1200×1200)
#   public/og-image.png            (1280×640,  used as og:image)
#   public/favicon-32.png          (32×32)
#   public/favicon-192.png         (192×192)
#   public/apple-touch-icon.png    (512×512, from logo.svg)
#   public/favicon.svg             (copied verbatim)
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

mkdir -p assets public

# ─── assets/ — canonical PNG renders kept in git for press / GitHub upload ───
rsvg-convert -w 1200          assets/banner.svg          -o assets/banner.png
rsvg-convert -w 1280 -h  640  assets/og-image.svg        -o assets/og-image.png
rsvg-convert -w  512          assets/logo.svg            -o assets/logo-512.png

# ─── public/ — served with the HTML page ─────────────────────────────────────
rsvg-convert -w 1200          assets/banner.svg          -o public/banner.png
rsvg-convert -w 1200 -h 1200  assets/banner-square.svg   -o public/banner-square.png
rsvg-convert -w 1280 -h  640  assets/og-image.svg        -o public/og-image.png
rsvg-convert -w   32          assets/favicon.svg         -o public/favicon-32.png
rsvg-convert -w  192          assets/favicon.svg         -o public/favicon-192.png
rsvg-convert -w  512          assets/logo.svg            -o public/apple-touch-icon.png

# Copy the SVG favicon so the browser can use it directly
cp assets/favicon.svg public/favicon.svg

echo "✓ assets re-rendered"
ls -la assets/*.png public/*.png public/favicon.svg 2>&1
