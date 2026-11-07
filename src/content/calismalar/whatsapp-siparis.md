---
title: WhatsApp Sipariş Otomasyonu
slug: whatsapp-siparis
order: 1
kind: vitrin
headline: WhatsApp'a düşen siparişler kendiliğinden kayda geçiyor
status: Kullanımda
# TODO(Emin): işletmenin adı izinle yazılacaksa sector'a ekle (ör. "Butik · Sakarya").
sector: Butik / perakende
period: Ağustos 2026'dan beri
summary: Siparişler WhatsApp grubuna fotoğraf ve mesaj olarak geliyordu. Artık bir masaüstü uygulaması bunları okuyup kendiliğinden kaydediyor.
# TODO(Emin): işletmeden ölçülmüş rakamlar gelince ekle, ör. { value: "~40", label: "günlük sipariş" }
metrics: []
tech: [Electron, Node.js, Baileys, GPT-4o / Gemini Vision, SQLite, Playwright]
techDetails:
  - "Masaüstü uygulaması: Electron + Node.js; Windows kurulum paketi GitHub Actions ile derleniyor, uygulama kendini güncelliyor (auto-updater)."
  - "WhatsApp bağlantısı Baileys ile; yalnız belirlenen kaynak gruptaki mesajlar dinleniyor, sonuç hedef gruba onay mesajı olarak yazılıyor."
  - "Sipariş görselleri (sipariş ekranı, dekont, adres fişi) ve açıklamalar Vision LLM (OpenAI GPT-4o veya Google Gemini, arayüzden seçilir) ile yapılandırılmış JSON'a çevriliyor."
  - "Kayıtlar yerel SQLite veritabanında; sipariş paneli arama, durum filtresi, KPI kartları, panoya kopyalama ve Excel/CSV dışa aktarma sunuyor."
  - "Sahadan gelen ihtiyaçlarla eklenenler: düzenlenen mesajların siparişe yansıması, mükerrer ve birleşik siparişlerin ayıklanması, Türkiye saati (UTC+3) ile kayıt."
  - "Sürüm v1.3.26 · 51 commit (Ağustos–Ekim 2026)."
cover: /media/projects/whatsapp-siparis/cover.webp
---

## Dert

Butiğe gelen siparişler bir WhatsApp grubuna düşüyor: sipariş ekranının fotoğrafı, dekont,
adres, birkaç satır not. Birinin her gün bu mesajları tek tek okuyup ürün, adet, müşteri ve
adres bilgisini ayrı bir yere yazması gerekiyordu. Yoğun günlerde sipariş atlanabiliyor,
yanlış yazılabiliyor.

<!-- TODO(Emin): işletmeden öğren: "her gün X saat bunları yazmakla geçiyordu" cümlesini ekle. -->

## Ne yaptım

İşletmenin bilgisayarında çalışan bir masaüstü uygulaması kurdum. Uygulama sipariş grubunu
dinliyor; gelen fotoğrafı ve mesajı okuyup ürün, adet, müşteri ve adres bilgisine çeviriyor,
siparişi kendiliğinden kaydediyor ve ayrı bir gruba "kayda geçti" mesajı atıyor.

İşletme siparişleri tek bir ekranda görüyor: arıyor, durumuna göre süzüyor, gerekirse
düzeltiyor ve Excel olarak dışarı alıyor. Uygulama yeni sürüm çıktığında kendini güncelliyor;
kimsenin bir şey kurmasına gerek kalmıyor. Veriler işletmenin kendi bilgisayarında duruyor.

## Ne değişti

- Siparişler artık elle yazılmıyor; gruba düştüğü anda kayda geçiyor.
- Siparişler tek ekranda aranabilir ve Excel'e aktarılabilir hâlde.
- İşletmeden gelen geri bildirimlerle **26 güncelleme** çıktı: düzenlenen mesajlar, aynı
  siparişin iki kez gelmesi, saat dilimi gibi sahada ortaya çıkan durumlar tek tek çözüldü.

<!-- TODO(Emin): günlük sipariş sayısı (işletmeden) -->
<!-- TODO(Emin): önceden siparişleri yazmaya harcanan süre, ayda kazanılan saat -->
<!-- TODO(Emin): hatalı / atlanan sipariş durumundaki değişim -->
<!-- TODO(Emin): müşteri yorumu gelince frontmatter'a quote: { text: "...", author: "..." } ekle; "Müşteri ne diyor" bölümü kendiliğinden görünür. -->
