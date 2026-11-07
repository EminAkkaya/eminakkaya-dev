---
title: WhatsAgent
slug: whatsagent
order: 3
kind: vitrin
headline: "Patron telefondan soruyor: bugün ne sattık, kim ne kadar borçlu?"
status: Pilot aşamasında
sector: Toptancı, bayi, ERP kullanan işletmeler
period: Eylül 2026'dan beri
summary: ERP ekranında duran ciro, cari bakiye ve stok bilgisi WhatsApp'tan sorulup cevaplanıyor; carilere ekstre gönderiliyor.
metrics: []
tech: [Electron, Node.js, SQLite, MSSQL, Baileys, Gemini / OpenAI]
techDetails:
  - "Electron 34 + Node.js (ESM) masaüstü uygulaması; yerel veri better-sqlite3 (WAL) üzerinde."
  - "Logo / Byte ERP veritabanından (MSSQL) düzenli aktarım (ETL); asistan ERP'ye doğrudan yazmıyor."
  - "Sorular LLM function calling ile araçlara (bakiye, ekstre, stok, ciro, ölü stok, gün sonu raporu) yönlendiriliyor; LLM'e ulaşılamazsa kural tabanlı çevrimdışı motor devreye giriyor."
  - "Veri değiştiren her işlem (sipariş taslağı, ödeme linki vb.) iki adımlı onaydan geçiyor; risk limiti aşımında onay engelleniyor."
  - "WhatsApp kimlik eşleştirmesi (LID ↔ telefon) tek bir modülde; yalnız tanımlı carilere cevap veriliyor."
  - "544 otomatik test, GitHub Actions ile Windows derlemesi. Sürüm v2.1.7."
  - "Kod özel depoda (müşteri verisi içeriyor); ekran görüntüleri yalnız sahte (seed) veriyle."
cover: /media/projects/whatsagent/cover.webp
---

## Dert

Bugünkü ciro, bir carinin bakiyesi, bir ürünün stoğu: bu soruların cevabı ERP'de duruyor ama
öğrenmek için bilgisayar başına geçip ekranlar arasında gezinmek gerekiyor. Carilere ekstre
ve bakiye bilgisi de çoğu zaman elle hazırlanıp tek tek gönderiliyor.

## Ne yaptım

İşletmenin WhatsApp hattına bağlanan bir asistan geliştirdim. Yönetici telefondan "bugün ne
sattık?" ya da "en çok borcu olan cariler kim?" diye yazıyor, cevap ERP verisinden geliyor.
Cariler kendi bakiyesini, ekstresini ve ürün stoğunu sorabiliyor. Gün sonunda yöneticiye
kısa bir rapor gidiyor: ciro, kâr, vadesi geçen alacaklar, satılmayan stok.

Veriyi değiştiren her işlem için iki adımlı onay var: önce özet gösteriliyor, açık onay
gelmeden hiçbir şey kaydedilmiyor. Yapay zekâ kendi başına bir şeyi değiştiremiyor; yapay zekâ
hizmetine ulaşılamazsa temel sorular yine kural tabanlı olarak cevaplanıyor.

## Ne değişti

Proje şu an **pilot aşamasında**. Sonuçları pilot bitince, ölçülmüş rakamlarla buraya
yazacağım; o zamana kadar sonuç iddia etmiyorum.

- Yazılım **544 otomatik testle** korunuyor; her değişiklikten sonra bu testler çalışıyor.

<!-- TODO(Emin): pilot bitince ölçülen sonuçları ekle (ör. haftada kaç soru WhatsApp'tan cevaplandı, ekstre gönderimi). -->
<!-- TODO(Emin): pilot işletmeden yorum gelirse frontmatter'a quote ekle. -->
