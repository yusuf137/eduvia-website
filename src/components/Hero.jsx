const panels = [
  {
    title: "Admin Panel",
    desc: "Kurum, öğrenci ve ödeme yönetimi",
    gradient: "from-primary to-indigo-600",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    highlight: true,
  },
  {
    title: "Öğretmen Paneli",
    desc: "Ders, yoklama ve video",
    gradient: "from-accent to-purple-600",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Öğrenci Paneli",
    desc: "Program, ödeme ve makbuz",
    gradient: "from-indigo-500 to-primary",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Ödeme Takibi",
    desc: "Tahsilat ve finans",
    gradient: "from-violet-600 to-primary",
    icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
  },
  {
    title: "Yoklama",
    desc: "Anlık devam takibi",
    gradient: "from-indigo-600 to-accent",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const trustPoints = [
  "Kuruma özel modüller",
  "Öğretmen ve öğrenci mobil paneli",
  "Ödeme, makbuz ve yoklama takibi",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-primary/12 to-accent/8 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-indigo-500/8 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="inline-block rounded-md border border-primary/25 bg-white px-3 py-1.5 text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-primary sm:text-[11px] sm:tracking-[0.14em]">
            Eğitim kurumları için dijital yönetim sistemi
          </p>

          <h1 className="mt-5 text-[1.65rem] font-bold leading-[1.2] tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Eğitim kurumunuzu tek panelden yönetin.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base lg:mx-0 lg:text-lg">
            Eduvia; müzik kursları, sanat atölyeleri, spor akademileri, dil kursları ve özel eğitim
            kurumları için ders programı, yoklama, ödeme takibi, makbuz, telafi talepleri, video
            paylaşımı ve öğretmen/öğrenci panellerini tek sistemde toplar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#demo"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-card transition hover:bg-primary/90"
            >
              Demo Talep Et
            </a>
            <a
              href="#paketler"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-dark transition hover:border-primary/40 hover:text-primary"
            >
              Paketleri İncele
            </a>
          </div>

          <ul className="mt-8 space-y-2.5 sm:inline-block sm:text-left">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm text-gray-700">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_8px_40px_rgba(91,75,255,0.12)]">
            <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-4 py-3.5 sm:px-5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-semibold text-dark sm:text-sm">Eduvia Yönetim Özeti</span>
              </div>
            </div>

            <div className="space-y-2 p-3 sm:space-y-2.5 sm:p-4">
              {panels.map((panel) => (
                <div
                  key={panel.title}
                  className={`flex items-center gap-3 rounded-xl border p-3 sm:gap-4 sm:p-3.5 ${
                    panel.highlight
                      ? "border-primary/20 bg-primary/[0.04]"
                      : "border-gray-100 bg-gray-50/50"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br sm:h-11 sm:w-11 ${panel.gradient} text-white shadow-sm`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={panel.icon} />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-sm font-semibold text-dark">{panel.title}</p>
                    <p className="text-xs text-gray-500">{panel.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-700 sm:px-2.5 sm:text-xs">
                    Aktif
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 -z-10 hidden h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-2xl bg-gradient-to-br from-primary/15 to-indigo-600/10 lg:block" />
        </div>
      </div>
    </section>
  );
}
