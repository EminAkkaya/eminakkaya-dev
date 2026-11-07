---
title: Webnot
slug: webnot
order: 6
kind: diger
headline: Ekibin notları tek yerde, telefonda ve bilgisayarda aynı anda
status: Geliştiriliyor
sector: Ekip içi araç
period: Ekim–Kasım 2026
summary: Ekip içi not platformu. Çalışma alanları, etiketler, dosya ekleri ve anlık güncelleme; web, mobil uygulama ve kendi sunucusuyla.
metrics: []
tech: [PocketBase, JavaScript, Vite PWA, Flutter]
techDetails:
  - "Sunucu: PocketBase (Go, SQLite, gerçek zamanlı API, kimlik doğrulama); Ubuntu üzerinde systemd servisiyle 7/24."
  - "Web istemcisi: sade JavaScript + Vite, PWA olarak kurulabiliyor."
  - "Mobil uygulama: Flutter + Riverpod."
  - "Veri modeli: çalışma alanları (herkese açık / üyelere özel), renkli etiketler, Markdown notlar, ortak düzenleyiciler, not başına dosya ekleri."
cover: /media/projects/webnot/cover.webp
---

## Dert

Ekip notları farklı uygulamalara, mesaj gruplarına ve kâğıtlara dağılınca kimin neyi
yazdığı kayboluyor; dosyalar mesaj geçmişinde gömülü kalıyor.

## Ne yaptım

Ekibin kendi sunucusunda çalışan bir not platformu kurdum. Notlar çalışma alanlarına ve
etiketlere ayrılıyor, dosya eklenebiliyor, biri bir notu değiştirdiğinde diğerlerinin
ekranında anında güncelleniyor. Web'den, telefona kurulan uygulamadan ya da mobil
uygulamadan aynı notlara ulaşılıyor. Veriler ekibin kendi sunucusunda kalıyor.

## Durum

Sunucu, web ve mobil istemci tek elden, yaklaşık iki haftada çıktı; geliştirme sürüyor.
