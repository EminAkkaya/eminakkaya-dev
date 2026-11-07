import type { IconName } from '../components/Icon.astro';

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  pain: string;
  deliver: string[];
  duration: string;
  price: string;
  example?: { label: string; href: string };
}

// TODO(Emin): "duration" satırlarındaki süreleri kendi takvimine göre gözden geçir.
const PRICE = 'İşe göre teklif. Önce ücretsiz ön görüşme yaparız; kapsam netleşince yazılı fiyat veririm.';

export const services: Service[] = [
  {
    id: 'whatsapp',
    icon: 'message-circle',
    title: 'WhatsApp otomasyonu',
    pain: 'Siparişler, sorular ve talepler WhatsApp\'a geliyor; biri bunları okuyup elle bir yere işliyor ya da aynı cevapları tekrar tekrar yazıyor.',
    deliver: [
      'Gelen mesaj ve fotoğrafları okuyup kayda geçiren masaüstü uygulaması',
      'Siparişleri görmek, aramak ve Excel\'e almak için sade bir ekran',
      'İstenirse ERP\'den bakiye, stok, ciro gibi soruları cevaplayan asistan',
      'Kurulum, kısa kullanım anlatımı ve kendini güncelleyen sürüm',
    ],
    duration: 'Küçük deneme genelde 1-2 hafta; tam kurulum işin kapsamına göre ön görüşmede netleşir.',
    price: PRICE,
    example: { label: 'Örnek: WhatsApp Sipariş Otomasyonu', href: '/calismalar/whatsapp-siparis' },
  },
  {
    id: 'entegrasyon',
    icon: 'file-spreadsheet',
    title: 'Excel, e-Arşiv ve ERP entegrasyonu',
    pain: 'Aynı bilgi önce Excel\'e, sonra fatura portalına, sonra ERP\'ye yeniden yazılıyor. Rapor almak için her ay tablolar elle birleştiriliyor.',
    deliver: [
      'Tablodaki satırlardan e-Arşiv faturası kesen ve sonucu tabloya geri yazan araç',
      'ERP verisinden (ör. Logo, Byte) düzenli rapor ya da gün sonu özeti',
      'Excel / Google Sheets ile sistemler arasında veri aktarımı',
    ],
    duration: 'Tek bir akış (ör. fatura kesme) genelde 1-3 hafta; ERP bağlantısı veritabanına erişime göre değişir.',
    price: PRICE,
    example: { label: 'Örnek: e-Arşiv Fatura Otomasyonu', href: '/calismalar/fatura-otomasyonu' },
  },
  {
    id: 'arac',
    icon: 'app-window',
    title: 'İşletmeye özel küçük masaüstü / web aracı',
    pain: 'Hazır programlar ya fazla büyük ya da işinize tam oturmuyor; iş bir Excel dosyası ve not kâğıtlarıyla yürüyor.',
    deliver: [
      'Tek bir işi iyi yapan, kurulumu kolay masaüstü ya da tarayıcı uygulaması',
      'Verinin sizde kaldığı yerel veritabanı ya da kendi sunucunuz',
      'Gerekirse yedekleme ve "yedek alınmadı" uyarısı',
    ],
    duration: 'Kapsamına göre birkaç gün ile birkaç hafta arası; ön görüşmede netleşir.',
    price: PRICE,
    example: { label: 'Örnek: DncYedek', href: '/calismalar/dncyedek' },
  },
  {
    id: 'mobil',
    icon: 'smartphone',
    title: 'Mobil uygulama',
    pain: 'Müşterilerinize ya da sahadaki ekibinize telefondan kullanılacak bir uygulama gerekiyor.',
    deliver: [
      'Android ve iOS için tek kod tabanıyla (Flutter) uygulama',
      'İnternet yokken de çalışan yerel veri ve senkronizasyon',
      'Mağaza hazırlığı: gizlilik politikası, hesap silme, mağaza metinleri',
    ],
    duration: 'Kapsama göre değişir; ilk çalışan sürüm için takvimi ön görüşmede birlikte çıkarırız.',
    price: PRICE,
    example: { label: 'Örnek: LearnCard', href: '/calismalar/learncard' },
  },
];

export const honesty: { title: string; text: string }[] = [
  {
    title: 'WhatsApp bağlantısının iki yolu var',
    text: 'Hazır projelerim WhatsApp\'a resmî olmayan bir yöntemle bağlanıyor. Ucuz ve hızlı kurulur, ama WhatsApp bu tür kullanımda numarayı kısıtlayabilir. Bu yüzden ayrı bir numara öneririm. Satış hattınız kritikse resmî WhatsApp Business Platform da bir seçenek: mesaj başına ücretli ve Meta onayı gerekiyor. Teklifte iki seçeneği ve farklarını yazılı veririm.',
  },
  {
    title: 'Otomasyonun bakımı olur',
    text: 'Bu araçlar WhatsApp, e-Arşiv portalı ya da ERP gibi başka sistemlere bağlı. Onlar değişince güncelleme gerekir. Bunu baştan söylüyorum ve aylık destek seçeneği sunuyorum.',
  },
  {
    title: 'Veriniz sizde kalır',
    text: 'Kurduğum sistemler verinizi kendi bilgisayarınızda ya da kendi hesabınızda tutar. Ekran görüntülerimde gerçek müşteri verisi yok; işletme adını yalnız izinle yazarım.',
  },
  {
    title: 'Abartmam',
    text: 'Pilot olan işi "pilot", tek işletmede çalışanı "bir işletmede" diye yazarım. Rakam yalnız ölçüldüyse yazılır. Bir portalın resmî API\'si varsa onu tercih ederim.',
  },
];
