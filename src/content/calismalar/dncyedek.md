---
title: DncYedek
slug: dncyedek
order: 5
kind: diger
headline: "Yedeğiniz gerçekten alındı mı? Alınmadıysa haber veriyor"
status: Geliştiriliyor
sector: Yedekleme · bayi ve işletmeler
period: Ekim 2026'dan beri
summary: Birden çok işletmenin veritabanı yedeklerini tek merkezde toplayan sunucu; yedek gecikirse Telegram veya e-postayla uyarıyor.
metrics: []
tech: [Go, SQLite, Docker, Caddy]
techDetails:
  - "Yalnız Go standart kütüphanesi ve saf Go SQLite (WAL, ayrı okuma/yazma havuzları); harici web çatısı yok."
  - "Yüklemeler belleğe alınmadan sabit tamponla doğrudan diske akıyor; aynı anda SHA-256 hesaplanıyor, fsync ve atomik yeniden adlandırma ile kalıcı hâle geliyor."
  - "Çok kiracılı yapı: her işletmenin yedeği ayrı; bayi paneli ve lisans API'si."
  - "Arka plan işçileri: yetim dosya ve disk bütünlüğü denetimi, saklama süresi (son N yedeği tut), gecikme takibi ve Telegram/SMTP bildirimi."
  - "Yönetici girişi Argon2id + CSRF koruması; Caddy ile TLS, Docker ile kurulum; arayüz embed.FS ile gömülü."
cover: /media/projects/dncyedek/cover.webp
---

## Dert

Çoğu işletme yedeğinin alındığını varsayar ve bunun yanlış olduğunu, verinin gerçekten
gerektiği gün öğrenir. Yedek alınmış görünür ama dosya bozuktur ya da aylardır yeni yedek
gelmemiştir.

## Ne yaptım

Birden çok işletmenin veritabanı yedeklerini tek bir sunucuda toplayan bir sistem yazdım.
Her gelen yedeğin eksiksiz geldiği doğrulanıyor; beklenen saatte yedek gelmezse sistem
Telegram ya da e-postayla haber veriyor. Eski yedekler belirlenen kurala göre temizleniyor,
bayiler kendi müşterilerini ayrı bir panelden izliyor.

## Durum

Geliştirme sürüyor. Büyük dosyalar yüklenirken bile sunucunun bellek kullanımı neredeyse
artmıyor; bu yüzden küçük, ucuz bir sunucuda çalışabiliyor.
