# eminakkaya.dev

Muhammet Emin Akkaya'nın hizmet ve çalışma sitesi. Astro, statik çıktı, ek UI kütüphanesi yok;
JavaScript yalnız demo videolarının görünür olunca oynaması için (birkaç satır).

## Kurulum

Node 22.22 veya üstü gerekir.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ klasörüne statik çıktı
npm run preview   # build çıktısını yerelde sun
```

## İçerik nasıl güncellenir

| Ne | Nerede |
|---|---|
| WhatsApp numarası, e-posta, GitHub, site başlığı | `src/config.ts` (`WHATSAPP_NUMBER` boşsa butonlar e-postaya düşer) |
| Çalışmalar (vaka sayfaları) | `src/content/calismalar/<slug>.md` |
| Ana sayfa dertleri, "Nasıl çalışıyorum" adımları, müşteri yorumları | `src/data/home.ts` (`testimonials: []` boşken yorum bölümü görünmez) |
| Hizmetler ve "Baştan söylediklerim" | `src/data/services.ts` |
| Hakkımda / İletişim / İngilizce özet | `src/pages/hakkimda.astro`, `iletisim.astro`, `en.astro` |
| Renk ve ölçü token'ları | `src/styles/tokens.css` (ham hex yalnız burada) |

### Yeni çalışma eklemek

`src/content/calismalar/` altına bir `.md` dosyası ekle. Frontmatter alanları
(`src/content.config.ts` şeması):

- `title`, `slug`, `order` (sıra), `kind`: `vitrin` | `urun` | `diger`
- `headline` (müşteri dilinde tek cümle), `summary`, `sector`, `period` (isteğe bağlı)
- `status`: ör. `Kullanımda`, `Pilot aşamasında`, `Mağazaya hazırlanıyor`, `Geliştiriliyor`, `Tamamlandı`
- `metrics`: yalnız **ölçülmüş** rakamlar, ör. `[{ value: "40", label: "günlük sipariş" }]`; bilinmiyorsa `[]`
- `tech`, `techDetails`: katlanır "Teknik detaylar" bölümü
- `quote: { text, author }`: varsa "Müşteri ne diyor" bölümü görünür
- `cover`, `shots`, `demo`, `links`

Gövde Markdown: `## Dert`, `## Ne yaptım`, `## Ne değişti` başlıklarıyla yaz.
Kaynakta `<!-- TODO(Emin): ... -->` notları bırakılabilir; build sonunda HTML'den silinir,
sitede görünmez. Açık işleri bulmak için: `grep -rn "TODO(Emin)" src`.

### Medya

`public/media/` altındaki sözleşme:

- `projects/<slug>/cover.webp` (16:10), `shot-1.webp`, `shot-2.webp`…, `demo.mp4` + `demo.webm` + `demo-poster.webp`
- `gen/<ad>.webp` (og.webp 1200x630, hero, hizmet çizimleri)
- `manifest.json`: alt metinler buradan okunur.

Dosya yoksa build kırılmaz: kartta düz renkli yer tutucu ve proje adının baş harfi görünür.
Videolar `muted loop playsinline preload="none"`; `prefers-reduced-motion` açıksa kendiliğinden oynamaz.

## Yayın (Cloudflare Pages)

- Build komutu: `npm run build`
- Çıktı klasörü: `dist`
- Ortam değişkeni: `NODE_VERSION=22.22.0` (veya üstü)

Sitemap (`/sitemap-index.xml`) ve `robots.txt` build sırasında üretilir. Analitik ve çerez yok.
