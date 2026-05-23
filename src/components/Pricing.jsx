const packages = [
  {
    name: "Başlangıç",
    monthly: "1.990",
    setup: "7.500",
    popular: false,
    tagline: "Küçük kurumlar için temel yönetim paketi.",
    features: [
      "Öğrenci / eğitmen yönetimi",
      "Ders programı",
      "Yoklama",
      "Kayıt kodu sistemi",
      "Temel bildirimler",
      "Web admin panel",
    ],
  },
  {
    name: "Standart",
    monthly: "2.990",
    setup: "10.000",
    popular: true,
    tagline: "Ödeme ve finans takibini de isteyen kurumlar için.",
    features: [
      "Başlangıç paketindeki her şey",
      "Öğrenci ödemeleri",
      "Makbuz görüntüle / yazdır",
      "Finans gelir/gider",
      "Telafi talepleri",
      "Ders değişim talepleri",
      "Ders iptalleri",
      "Bildirim geçmişi",
    ],
  },
  {
    name: "Pro",
    monthly: "4.490",
    setup: "15.000",
    popular: false,
    tagline: "Video, mesajlaşma ve gelişmiş takip isteyen kurumlar için.",
    features: [
      "Standart paketindeki her şey",
      "Video havuzu",
      "Video takip",
      "Mesajlaşma",
      "Ders hatırlatmaları",
      "Dışa aktar",
      "Kuruma özel modül ayarları",
      "Öncelikli destek",
    ],
  },
  {
    name: "Özel",
    customPrice: true,
    popular: false,
    tagline: "Çok şubeli veya özel ihtiyaçları olan kurumlar için.",
    features: [
      "Çok şube",
      "Özel geliştirme",
      "Kuruma özel raporlar",
      "Öncelikli destek",
      "Geniş ölçekli kullanım",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="paketler" className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">Şeffaf paketler, net fiyatlar</h2>
          <p className="mt-3 text-gray-600">
            Kurumunuzun ölçeğine uygun paketi seçin. Tüm paketlerde kurulum desteği dahildir.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex h-full flex-col rounded-2xl border bg-card p-6 transition ${
                pkg.popular
                  ? "border-primary shadow-[0_12px_40px_rgba(91,75,255,0.18)] ring-1 ring-primary/30"
                  : "border-gray-100 shadow-soft hover:shadow-card"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  En Popüler
                </span>
              )}

              <header>
                <h3 className="text-lg font-bold text-dark">{pkg.name}</h3>
                <p className="mt-1.5 text-sm leading-snug text-gray-500">{pkg.tagline}</p>
              </header>

              <div className="mt-6 border-b border-gray-100 pb-6">
                {pkg.customPrice ? (
                  <div>
                    <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                      Teklif Alın
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Size özel fiyatlandırma</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
                      <span className="text-4xl font-bold tracking-tight text-dark">{pkg.monthly}</span>
                      <span className="text-base font-medium text-gray-500">TL / ay</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                      Kurulum:{" "}
                      <span className="font-semibold text-dark">{pkg.setup} TL</span>
                    </p>
                  </div>
                )}
              </div>

              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-6 flex min-h-[44px] items-center justify-center rounded-xl py-3 text-center text-sm font-semibold transition ${
                  pkg.popular
                    ? "bg-primary text-white shadow-card hover:bg-primary/90"
                    : "border border-primary/30 text-primary hover:bg-primary/5"
                }`}
              >
                Demo Talep Et
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Fiyatlar KDV hariçtir. Detaylı teklif için demo formunu doldurun.
        </p>
      </div>
    </section>
  );
}
