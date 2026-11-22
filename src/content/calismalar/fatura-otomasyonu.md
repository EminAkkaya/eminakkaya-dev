---
title: e-Arşiv Fatura Otomasyonu
slug: fatura-otomasyonu
order: 2
kind: vitrin
headline: Tablodaki satışların e-Arşiv faturası kendiliğinden kesiliyor
status: Kullanımda
period: Mart 2026'dan beri · en uzun süredir çalışan işim
sector: e-Arşiv fatura kesen küçük işletmeler
summary: Her satış için portala girip aynı bilgileri yazmak yerine, satış listesi bir tabloda duruyor; faturaları araç sırayla kesiyor.
metrics:
  - { value: "~100", label: "günde kesilen fatura" }
  - { value: "3+ saat", label: "elle kesilseydi her gün giden süre" }
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

Araç, [WhatsApp sipariş otomasyonunun](/calismalar/whatsapp-siparis) devamı gibi çalışıyor:
WhatsApp'tan gelip kayda geçen siparişlerin faturası buradan kesiliyor.

## Ne değişti

- Aynı bilgi artık iki kez yazılmıyor: satış tabloya bir kez giriliyor, faturası oradan kesiliyor.
- Günde 100 civarı fatura elle tek tek kesilmiyor; bu iş elle yapılsaydı her gün 3 saatten
  fazla sürerdi.
- Ay sonunda biriken faturalar tek seferde, sırayla kesilebiliyor.
- Hangi satışın faturasının kesildiği tabloda yazılı; kontrol için portala girmek gerekmiyor.

<!-- TODO(Emin): kullanan işletmeden yorum varsa frontmatter'a quote ekle. -->
