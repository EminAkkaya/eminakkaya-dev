// Sitenin tek yerden değişen ayarları.

export const SITE = {
  name: 'Emin Akkaya',
  url: 'https://eminakkaya.dev',
  title: 'Emin Akkaya · İşletmeler için otomasyon',
  description:
    'WhatsApp sipariş otomasyonu, e-Arşiv fatura otomasyonu ve ERP raporları: işletmenizde elle yapılan işleri otomatikleştiriyorum. Sakarya ve uzaktan.',
  ogImage: '/media/gen/og.webp',
  locale: 'tr_TR',
};

// WhatsApp numarası: ülke koduyla, boşluksuz, başında + ve 0 olmadan (0551 154 66 98 → '905511546698').
// Boş bırakılırsa "WhatsApp'tan yaz" butonları e-postaya düşer.
export const WHATSAPP_NUMBER = '905511546698';

export const EMAIL = 'iletisim@eminakkaya.dev';
export const GITHUB_URL = 'https://github.com/EminAkkaya';
export const LOCATION = 'Sakarya ve uzaktan';

// WhatsApp'ta hazır açılan karşılama mesajı ("..." kısmını kullanıcı doldurur).
export const DEFAULT_MESSAGE =
  'Merhaba Emin, sitenden ulaşıyorum. İşletmem için ... konusunda konuşmak istiyorum.';

export interface ContactLink {
  href: string;
  label: string;
  channel: 'whatsapp' | 'email';
  external: boolean;
}

/** Birincil iletişim bağlantısı: numara varsa WhatsApp, yoksa e-posta. */
export function contactLink(message: string = DEFAULT_MESSAGE, labels?: { whatsapp?: string; email?: string }): ContactLink {
  if (WHATSAPP_NUMBER) {
    return {
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      label: labels?.whatsapp ?? "WhatsApp'tan yaz",
      channel: 'whatsapp',
      external: true,
    };
  }
  return {
    href: `mailto:${EMAIL}?subject=${encodeURIComponent('Ön görüşme')}&body=${encodeURIComponent(message)}`,
    label: labels?.email ?? 'E-postayla yaz',
    channel: 'email',
    external: false,
  };
}
