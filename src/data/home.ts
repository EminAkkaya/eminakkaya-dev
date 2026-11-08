import type { IconName } from '../components/Icon.astro';

export const pains: { icon: IconName; title: string; text: string; href?: string }[] = [
  {
    icon: 'clipboard-list',
    title: 'Siparişleri WhatsApp\'tan tek tek yazmak',
    text: 'Fotoğraf, dekont, adres… Her gün biri oturup bunları bir yere geçiriyor; yoğun günde sipariş atlanıyor.',
    href: '/calismalar/whatsapp-siparis',
  },
  {
    icon: 'receipt',
    title: 'Her satış için faturayı elle kesmek',
    text: 'Tabloda zaten duran bilgileri e-Arşiv portalına yeniden yazmak; ay sonunda iş yığılıyor.',
    href: '/calismalar/fatura-otomasyonu',
  },
  {
    icon: 'chart',
    title: 'Ciroyu öğrenmek için ERP\'ye girmek',
    text: 'Bugün ne sattık, kim ne kadar borçlu? Cevap için bilgisayar başına geçip ekranlar arasında gezinmek.',
    href: '/calismalar/whatsagent',
  },
  {
    icon: 'database-backup',
    title: 'Yedeğin alınıp alınmadığını bilmemek',
    text: 'Yedek alınıyor sanılıyor; aksi, verinin gerçekten gerektiği gün anlaşılıyor.',
    href: '/calismalar/dncyedek',
  },
];

export const steps: { title: string; text: string }[] = [
  {
    title: 'Ücretsiz ön görüşme',
    text: 'Derdinizi ve bugün işin nasıl yapıldığını dinlerim. Yazılım gerçekten gerekli mi, birlikte bakarız.',
  },
  {
    title: 'Küçük bir deneme',
    text: 'İşin en çok zaman alan küçük bir parçasını önce çalışır hâle getiririm; sonucu kendi verinizle görürsünüz.',
  },
  {
    title: 'Kurulum',
    text: 'Sisteminize kurarım, kullanacak kişiye gösteririm. Veriler sizin bilgisayarınızda ya da hesabınızda kalır.',
  },
  {
    title: 'Destek ve güncelleme',
    text: 'Bağlı olduğu sistemler değiştikçe güncellerim. İşi teslim edip bırakmam.',
  },
];

export interface Testimonial {
  text: string;
  author: string;
  role?: string;
  project?: string; // çalışma slug'ı
}

// Müşteri yorumları. İlki ana sayfanın üst bölümünde gösterilir.
// İşletmenin adı izinle yazılacaksa author'u güncelle.
export const testimonials: Testimonial[] = [
  {
    text: "Eskiden akşam 10'da biten işimiz artık 8'de bitiyor. Bu program bize her gün 2 saat kazandırdı.",
    author: 'Butik sahibi',
    role: 'Sakarya',
    project: 'whatsapp-siparis',
  },
];
