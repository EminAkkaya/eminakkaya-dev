#!/usr/bin/env python3
"""Pars rozeti ana dosyalarından site ikonlarını üretir.

Girdi:  brand/pars-rozet.svg       (delikli rozet: header ve büyük boyutlar)
        brand/pars-rozet-dolu.svg  (deliksiz rozet: 48px ve altı ikonlar)
Çıktı:  public/favicon.svg, favicon.ico, apple-touch-icon.png, icon-192.png,
        icon-512.png, icon-maskable-512.png ve src/components/BrandMark.astro

Çalıştırma: python3 brand/build-icons.py   (playwright + ImageMagick gerekir)
Ana dosyalar Gemini konseptinden (brand/pars-rozet-kaynak.webp) potrace ile çizildi.
"""
import re
import subprocess
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"
TILE = "#4D6B5C"   # --accent-interactive
CREAM = "#FBFAF7"  # --bg (açık)


def path_of(name: str) -> str:
    svg = (ROOT / "brand" / name).read_text()
    return re.search(r' d="([^"]+)"', svg).group(1)


HOLED = path_of("pars-rozet.svg")
SOLID = path_of("pars-rozet-dolu.svg")


def tile_svg(d: str, inset: float, radius: float = 14) -> str:
    """Yeşil yuvarlak kare içinde krem rozet. inset: rozetin kenardan boşluğu (64'lük ızgara)."""
    s = (64 - 2 * inset) / 64
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
        f'<rect width="64" height="64" rx="{radius}" fill="{TILE}"/>'
        f'<path transform="translate({inset} {inset}) scale({s:.4f})" fill="{CREAM}" fill-rule="evenodd" d="{d}"/>'
        "</svg>"
    )


def render(svg: str, size: int, out: Path) -> None:
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False) as f:
        f.write(f'<html><body style="margin:0;background:transparent">'
                f'<div style="width:{size}px;height:{size}px">{svg.replace("<svg ", f"<svg width=\"{size}\" height=\"{size}\" ")}</div></body></html>')
        page_path = f.name
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": size, "height": size})
        pg.goto("file://" + page_path)
        pg.screenshot(path=str(out), omit_background=True)
        b.close()
    Path(page_path).unlink()


def main() -> None:
    small = tile_svg(SOLID, inset=5)
    (PUB / "favicon.svg").write_text(small + "\n")

    tmp = Path(tempfile.mkdtemp())
    for s in (16, 32, 48):
        render(small, s, tmp / f"{s}.png")
    subprocess.run(["magick", *(str(tmp / f"{s}.png") for s in (16, 32, 48)), str(PUB / "favicon.ico")], check=True)

    big = tile_svg(HOLED, inset=8)
    render(big, 192, PUB / "icon-192.png")
    render(big, 512, PUB / "icon-512.png")
    # Apple köşeleri kendisi yuvarlar: düz kare, kenarsız.
    render(tile_svg(HOLED, inset=10, radius=0), 180, PUB / "apple-touch-icon.png")
    # Maskable: güvenli alan için rozet %60'ta.
    render(tile_svg(HOLED, inset=13, radius=0), 512, PUB / "icon-maskable-512.png")

    (ROOT / "src" / "components" / "BrandMark.astro").write_text(
        "---\n"
        "// Pars rozeti (brand/pars-rozet.svg). brand/build-icons.py üretir; elle düzenlenmez.\n"
        "interface Props { size?: number }\n"
        "const { size = 28 } = Astro.props;\n"
        "---\n\n"
        '<svg class="brand-mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">\n'
        f'  <path fill="currentColor" fill-rule="evenodd" d="{HOLED}" />\n'
        "</svg>\n"
    )
    print("ok")


if __name__ == "__main__":
    main()
