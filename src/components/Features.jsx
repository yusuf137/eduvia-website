import {
  IconBell,
  IconCalendar,
  IconChart,
  IconChat,
  IconCheck,
  IconCog,
  IconPayment,
  IconRefresh,
  IconVideo,
} from "./icons";

const problems = [
  "Ödeme takibi dağınık",
  "Yoklama ve ders programı karışıyor",
  "Telafi ve ders değişimleri unutuluyor",
  "Öğretmen/öğrenci iletişimi tek yerde değil",
];

const features = [
  { title: "Ders Programı", Icon: IconCalendar },
  { title: "Yoklama", Icon: IconCheck },
  { title: "Ödeme & Makbuz", Icon: IconPayment },
  { title: "Finans", Icon: IconChart },
  { title: "Telafi Talepleri", Icon: IconRefresh },
  { title: "Video Havuzu", Icon: IconVideo },
  { title: "Mesajlaşma", Icon: IconChat },
  { title: "Bildirimler", Icon: IconBell },
  { title: "Modül Sistemi", Icon: IconCog },
];

const roles = [
  {
    title: "Admin Paneli",
    color: "from-primary to-indigo-600",
    items: [
      "Öğrenci ve eğitmen yönetimi",
      "Ödeme ve finans takibi",
      "Ders programı ve modüller",
    ],
  },
  {
    title: "Öğretmen Paneli",
    color: "from-accent to-purple-600",
    items: ["Derslerini görür", "Yoklama alır", "Video paylaşır ve mesajlaşır"],
  },
  {
    title: "Öğrenci Paneli",
    color: "from-indigo-500 to-primary",
    items: ["Ders programı ve ödemeler", "Makbuz görüntüleme", "Video ve bildirimler"],
  },
];

export function ProblemSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">
            WhatsApp, Excel ve defter karmaşasına son.
          </h2>
          <p className="mt-3 text-gray-600">
            Eduvia, kurumunuzdaki günlük operasyonları tek sistemde toplar ve takip edilebilir hale
            getirir.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem}
              className="flex items-start gap-3 rounded-2xl border border-red-100/80 bg-white p-4 shadow-soft"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm text-red-500">
                ✕
              </span>
              <p className="text-sm font-medium text-dark">{problem}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary via-primary to-accent px-6 py-7 text-center text-white shadow-card sm:px-10">
          <p className="text-base font-semibold sm:text-lg">
            Eduvia tüm süreci kurumunuza özel dijital sisteme taşır.
          </p>
          <a
            href="#demo"
            className="mt-4 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/95"
          >
            Ücretsiz demo talep edin
          </a>
        </div>
      </div>
    </section>
  );
}

export function RolesSection() {
  return (
    <section id="paneller" className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">Her rol için özel panel</h2>
          <p className="mt-3 text-gray-600">
            Admin, öğretmen ve öğrenciler kendi ekranlarından işini halleder — karmaşa biter.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-gray-100 bg-card p-6 shadow-soft transition hover:border-primary/20 hover:shadow-card"
            >
              <div
                className={`inline-flex rounded-xl bg-gradient-to-br ${role.color} px-3 py-1.5 text-sm font-semibold text-white`}
              >
                {role.title}
              </div>
              <ul className="mt-5 space-y-2.5">
                {role.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 shrink-0 text-primary">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    { step: "1", title: "Kurum oluşturulur", desc: "Kurumunuz sisteme tanımlanır." },
    { step: "2", title: "Modüller seçilir", desc: "İhtiyacınıza göre modüller açılır." },
    { step: "3", title: "Kullanıma başlanır", desc: "Tüm roller sistemi kullanır." },
  ];

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">3 adımda başlayın</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-soft">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-white">
                {item.step}
              </div>
              <h3 className="mt-4 font-semibold text-dark">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <section id="ozellikler" className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">Kurumunuzun ihtiyacı olan her şey</h2>
          <p className="mt-3 text-gray-600">
            Modüler yapı sayesinde yalnızca kullandığınız özellikleri açın, gereksiz karmaşadan kaçının.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, Icon }) => (
            <div
              key={title}
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-card p-5 shadow-soft transition hover:border-primary/25 hover:shadow-card"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition group-hover:from-primary group-hover:to-accent group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <p className="font-semibold text-dark">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
