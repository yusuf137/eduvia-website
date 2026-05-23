import { useState } from "react";

const navLinks = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Paneller", href: "#paneller" },
  { label: "Paketler", href: "#paketler" },
  { label: "SSS", href: "#sss" },
  { label: "Demo Talep Et", href: "#demo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center py-0.5">
          <img
            src="/eduvia-logo.png"
            alt="Eduvia"
            className="h-10 w-auto max-w-[160px] object-contain md:h-12 md:max-w-[190px]"
          />
        </a>

        <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary/90 sm:inline-block"
          >
            Demo Talep Et
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-600 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-gray-50 py-3.5 text-sm font-medium text-gray-700 last:border-0"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
