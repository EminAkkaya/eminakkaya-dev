---
title: e-Arşiv Fatura Otomasyonu
slug: fatura-otomasyonu
order: 2
kind: vitrin
headline: Tablodaki satışların e-Arşiv faturası kendiliğinden kesiliyor
# TODO(Emin): araç düzenli kullanılıyorsa status'ü "Kullanımda" yap.
status: Tamamlandı
sector: e-Arşiv fatura kesen küçük işletmeler
summary: Her satış için portala girip aynı bilgileri yazmak yerine, satış listesi bir tabloda duruyor; faturaları araç sırayla kesiyor.
# TODO(Emin): fatura başına önceki/sonraki süre ve aylık fatura adedi gelince ekle.
metrics: []
tech: [Python, Playwright, Streamlit, Google Sheets API]
techDetails:
  - "Satış satırları Google Sheets'ten (gspread + servis hesabı) okunuyor; her satır için e-Arşiv portalında fatura formu Playwright ile dolduruluyor."
  - "Portalın Kendo UI bileşenleri (açılır listeler, tarih seçiciler) için özel bekleme ve doğrulama adımları; hata olursa satır başına yeniden deneme; sonuç (Başarılı/Hata) tablodaki Durum sütununa geri yazılıyor."
  - "ÖTV'li kalemler için ayrı akış."
  - "Kullanıcı arayüzü Streamlit: tabloyu yükle, kesilecek satırları gör, tek tuşla başlat; tarayıcı istenirse arka planda (headless) çalışıyor."
  - "Kod ve kimlik bilgileri paylaşılmıyor; ekran görüntüleri sahte veriyle hazırlandı."
cover: /media/projects/fatura-otomasyonu/cover.webp
---

## Dert

Her satıştan sonra e-Arşiv portalına girip alıcı adını, ili, ilçeyi, tarihi, kalemi ve
tutarı yeniden yazmak gerekiyordu. Satış listesi zaten bir tabloda duruyordu; aynı bilgi iki
kez yazılıyor, ay sonunda iş yığılıyordu.

## Ne yaptım

Satışların tutulduğu tabloyu okuyan ve her satır için portalda faturayı sırayla kesen bir
araç yazdım. Basit bir ekrandan çalışıyor: tabloyu yükle, kesilecek satırları gör, başlat.
Her satırın sonucu tabloya geri yazılıyor: "Başarılı" ya da "Hata". Bir satırda sorun çıkarsa
araç birkaç kez tekrar deniyor; olmazsa o satırı "Hata" diye işaretleyip diğerlerine geçiyor,
böylece iş yarıda kalmıyor ve hangi faturanın kesildiği tablodan görülüyor. ÖTV'li ürünler
için ayrı bir akış var.

## Ne değişti

- Aynı bilgi artık iki kez yazılmıyor: satış tabloya bir kez giriliyor, faturası oradan kesiliyor.
- Ay sonunda biriken faturalar tek seferde, sırayla kesilebiliyor.
- Hangi satışın faturasının kesildiği tabloda yazılı; kontrol için portala girmek gerekmiyor.

<!-- TODO(Emin): fatura başına önceki süre (dk) → şimdiki süre (sn) -->
<!-- TODO(Emin): ayda kesilen fatura adedi -->
<!-- TODO(Emin): kullanan işletmeden yorum varsa frontmatter'a quote ekle. -->
