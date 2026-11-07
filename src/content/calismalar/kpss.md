---
title: KPSS Coğrafya Harita Atölyesi
slug: kpss
order: 7
kind: diger
headline: Haritaya dokunarak KPSS coğrafyası çalışma
status: Tamamlandı
sector: Eğitim · kişisel proje
summary: Tamamen statik, internetsiz çalışan harita uygulaması. 12 katmanlı Türkiye haritası, 51 soru ve çıkmış soru analizi.
metrics: []
tech: [HTML, CSS, JavaScript, SVG]
techDetails:
  - "Saf HTML/CSS/JS, derleme adımı yok; çift tıklayınca açılıyor."
  - "12 katmanlı SVG Türkiye haritası: bölgeler, iklim, dağlar, ovalar, platolar, akarsular, göller, delta ovaları, karst, kıyı tipleri, madenler, enerji."
  - "İlerleme yalnız tarayıcının localStorage'ında; hiçbir veri dışarı gitmiyor."
# TODO(Emin): Cloudflare'de yayınlanınca canlı demo linkini ekle: links: [{ label: "Canlı demo", href: "https://..." }]
cover: /media/projects/kpss/cover.webp
---

## Ne yapıyor

KPSS Genel Kültür coğrafya bölümü için haritalı bir çalışma uygulaması. Haritada bir
noktaya, akarsuya ya da göle dokununca oluşumu, kısa bir notu ve sınavda ne sıklıkla
çıktığı açılıyor. Konu anlatımları çıkmış soruların dağılımına göre sıralı; 51 soruluk bir
soru bankası ve konu bazlı ilerleme takibi var.

## Neden burada

Küçük bir proje ama bir şeyi gösteriyor: her iş sunucu, veritabanı ve hesap gerektirmiyor.
Bazen en doğru çözüm, internetsiz çalışan tek bir sayfadır.
