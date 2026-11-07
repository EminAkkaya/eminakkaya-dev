---
title: LearnCard
slug: learncard
order: 4
kind: urun
headline: Fikirden mağazaya kadar tek başıma çıkardığım mobil uygulama
status: Mağazaya hazırlanıyor
sector: Kendi ürünüm · Eğitim
period: Ağustos 2026'dan beri
summary: İngilizce metin okurken kelimeye dokunup kart yapan, aralıklı tekrarla ve oyunlarla öğreten mobil uygulama. Çevrimdışı çalışıyor, hesap açmadan kullanılabiliyor.
metrics: []
tech: [Flutter, Riverpod, Drift (SQLite), Supabase]
techDetails:
  - "Flutter (Android ve iOS), durum yönetimi Riverpod, yerel veritabanı Drift (SQLite)."
  - "Hesap ve bulut: Supabase (kimlik doğrulama, Edge Function); satır düzeyinde güvenlik kuralları yalnız kullanıcının kendi verisine izin veriyor."
  - "Kendi yazdığım senkron motoru: cihaz çevrimdışıyken yapılan değişiklikler bağlantı gelince buluta aktarılıyor."
  - "Gömülü, çevrimdışı İngilizce–Türkçe sözlük (Wiktionary verisi, CC BY-SA)."
  - "Aralıklı tekrar (SRS) algoritması ve 4 mini oyun."
  - "200'ü aşkın otomatik test; ilk web prototipi React ile yapıldı, ardından Flutter'a geçildi."
cover: /media/projects/learncard/cover.webp
---

## Neden bu proje

Bu bir müşteri işi değil, kendi ürünüm. Burada olmasının nedeni şu: bir mobil uygulamayı
fikirden mağazaya kadar tek başıma götürebildiğimi gösteriyor. Müşteri uygulaması, sadakat
uygulaması ya da sahadaki ekip için bir mobil araç düşünen işletmeye referans olsun diye
buraya koydum.

## Ne yapıyor

İngilizce bir metin okurken anlamını bilmediğiniz kelimeye dokunuyorsunuz; Türkçe karşılığı,
okunuşu ve geçtiği cümle açılıyor, isterseniz kelime destenize ekleniyor. Aralıklı tekrar
sistemi kartı tam unutmak üzereyken karşınıza çıkarıyor; dört küçük oyunla pekiştiriyorsunuz.

## Neye dikkat ettim

- **Çevrimdışı çalışıyor:** sözlük uygulamanın içinde; internet olmadan da okuma ve tekrar yapılıyor.
- **Hesap şart değil:** misafir olarak kullanılabiliyor, veriler cihazda kalıyor. Hesap açılırsa
  cihazlar arasında senkronize oluyor.
- **Kullanıcının verisi korunuyor:** herkes yalnız kendi verisini görebiliyor; hesap ve tüm veriler
  uygulama içinden silinebiliyor. Reklam ve takip yok.
- **Mağaza hazırlığı:** gizlilik politikası, hesap silme ve veri güvenliği formları hazırlanıyor.

<!-- TODO(Emin): mağaza linkleri yayından sonra frontmatter links'e eklenecek: { label: "Google Play", href: "..." } -->
