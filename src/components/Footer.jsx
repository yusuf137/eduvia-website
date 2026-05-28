const footerLinks = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Paketler", href: "#paketler" },
  { label: "SSS", href: "#sss" },
  { label: "Demo Talep Et", href: "#demo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#" className="inline-block">
              <img
                src="/eduvia-logo.png"
                alt="Eduvia"
                className="h-10 w-auto max-w-[140px] object-contain"
              />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
              Eğitim kurumları için dijital yönetim sistemi.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark">Menü</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark">İletişim</h3>
            <a
              href="mailto:info@eduvia.com.tr"
              className="mt-4 inline-block text-sm font-medium text-primary transition hover:text-accent"
            >
              info@eduvia.com.tr
            </a>
            <a
              href="/hesap-silme"
              className="mt-3 block text-sm text-gray-600 transition hover:text-primary"
            >
              Hesap Silme Talebi
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
          © 2026 Eduvia. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
