// Medya çözümleyici: public/media/manifest.json + dosya sözleşmesi.
// Dosya yoksa null döner; bileşen yer tutucu gösterir, build kırılmaz.
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const MANIFEST = path.join(PUBLIC_DIR, 'media', 'manifest.json');

export interface Shot { src: string; alt: string; w?: number; h?: number }
export interface Demo { mp4?: string; webm?: string; poster?: string }
/** Kart küçük görseli: kart için özel, okunaklı kırpım (manifest: projects.<slug>.thumb). */
export interface Thumb { src: string; alt: string; w?: number; h?: number }
export interface ProjectMedia {
  cover: string | null;
  coverAlt: string | null;
  /** Kartlarda kullanılır; yoksa kartlar cover'a düşer. Vaka sayfası üst görseli cover kalır. */
  thumb: Thumb | null;
  shots: Shot[];
  demo: Demo | null;
}

type AnyRecord = Record<string, unknown>;

function readManifest(): AnyRecord {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) as AnyRecord;
  } catch {
    return {};
  }
}

/** Yolu '/media/...' biçimine getirir ve dosyanın varlığını denetler. */
export function resolveMedia(p: unknown): string | null {
  if (typeof p !== 'string' || !p.trim()) return null;
  if (/^https?:\/\//.test(p)) return p;
  let rel = p.trim().replace(/^\.?\/+/, '').replace(/^public\//, '');
  const candidates = [rel, rel.startsWith('media/') ? '' : `media/${rel}`].filter(Boolean);
  for (const c of candidates) {
    if (fs.existsSync(path.join(PUBLIC_DIR, c))) return `/${c}`;
  }
  return null;
}

function asShot(s: unknown, fallbackAlt: string): Shot | null {
  if (typeof s === 'string') {
    const src = resolveMedia(s);
    return src ? { src, alt: fallbackAlt } : null;
  }
  if (s && typeof s === 'object') {
    const o = s as AnyRecord;
    const src = resolveMedia(o.src ?? o.path ?? o.file);
    const alt = typeof o.alt === 'string' && o.alt.trim() ? o.alt : fallbackAlt;
    if (!src) return null;
    const shot: Shot = { src, alt };
    if (typeof o.w === 'number' && typeof o.h === 'number') { shot.w = o.w; shot.h = o.h; }
    return shot;
  }
  return null;
}

function asDemo(d: unknown): Demo | null {
  if (!d) return null;
  if (typeof d === 'string') {
    const mp4 = resolveMedia(d);
    return mp4 ? { mp4 } : null;
  }
  const o = d as AnyRecord;
  const demo: Demo = {
    mp4: resolveMedia(o.mp4 ?? o.src) ?? undefined,
    webm: resolveMedia(o.webm) ?? undefined,
    poster: resolveMedia(o.poster) ?? undefined,
  };
  return demo.mp4 || demo.webm ? demo : null;
}

interface FrontmatterMedia {
  cover?: string;
  shots?: Shot[];
  demo?: Demo;
}

export function projectMedia(slug: string, title: string, fm: FrontmatterMedia = {}): ProjectMedia {
  const manifest = readManifest();
  const projects = (manifest.projects ?? {}) as AnyRecord;
  const entry = (projects[slug] ?? {}) as AnyRecord;
  const base = `media/projects/${slug}`;

  const cover =
    resolveMedia(entry.cover) ?? resolveMedia(fm.cover) ?? resolveMedia(`${base}/cover.webp`);

  const coverAlt =
    typeof entry.coverAlt === 'string' && entry.coverAlt.trim() ? entry.coverAlt : null;

  // thumb: manifest'te {src, alt, w, h} (ya da yalnız yol); yoksa sözleşmedeki thumb.webp.
  const thumb = asShot(entry.thumb ?? `${base}/thumb.webp`, coverAlt ?? `${title} ekranından bir görünüm`);

  const shots: Shot[] = [];
  const seen = new Set<string>();
  const push = (s: Shot | null) => {
    if (s && !seen.has(s.src)) { seen.add(s.src); shots.push(s); }
  };
  const manifestShots = Array.isArray(entry.shots) ? entry.shots : [];
  manifestShots.forEach((s, i) => push(asShot(s, `${title}: ekran görüntüsü ${i + 1}`)));
  (fm.shots ?? []).forEach((s) => push(asShot(s, s.alt)));
  if (shots.length === 0) {
    for (let i = 1; i <= 8; i++) push(asShot(`${base}/shot-${i}.webp`, `${title}: ekran görüntüsü ${i}`));
  }

  const demo =
    asDemo(entry.demo) ??
    asDemo(fm.demo) ??
    asDemo({ mp4: `${base}/demo.mp4`, webm: `${base}/demo.webm`, poster: `${base}/demo-poster.webp` });

  return { cover, coverAlt, thumb, shots, demo };
}

export interface GenImage { src: string; alt: string; width?: number; height?: number }

/** Gemini görselleri (public/media/gen/<ad>.webp); alt metni manifest'ten gelir. */
export function genImage(name: string, fallbackAlt = ''): GenImage | null {
  const src = resolveMedia(`media/gen/${name}`);
  if (!src) return null;
  const gen = readManifest().gen;
  const entry = Array.isArray(gen)
    ? (gen as AnyRecord[]).find((g) => typeof g?.src === 'string' && resolveMedia(g.src) === src)
    : undefined;
  return {
    src,
    alt: typeof entry?.alt === 'string' ? entry.alt : fallbackAlt,
    width: typeof entry?.w === 'number' ? entry.w : undefined,
    height: typeof entry?.h === 'number' ? entry.h : undefined,
  };
}
