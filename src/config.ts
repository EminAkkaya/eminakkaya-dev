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

// TODO(Emin): WhatsApp iş hattı numarasını ülke koduyla, boşluksuz yaz (ör. '905xxxxxxxxx').
// Boş kaldığı sürece "WhatsApp'tan yaz" butonları e-postaya düşer.
export const WHATSAPP_NUMBER = '';

export const EMAIL = 'iletisim@eminakkaya.dev';
export const GITHUB_URL = 'https://github.com/EminAkkaya';
export const LOCATION = 'Sakarya ve uzaktan';

export const DEFAULT_MESSAGE =
  'Merhaba Emin, işletmemizde otomatikleştirmek istediğimiz bir iş var. Kısaca konuşabilir miyiz?';

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
