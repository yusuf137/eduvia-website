import { useState } from "react";

const faqs = [
  {
    question: "Her kurumun verisi ayrı mı?",
    answer:
      "Evet. Eduvia kurum bazlı çalışır. Her kurum sadece kendi öğrencilerini, öğretmenlerini, ödemelerini ve derslerini görür.",
  },
  {
    question: "Eduvia hangi kurumlar için uygun?",
    answer:
      "Müzik kursları, sanat atölyeleri, spor akademileri, dil kursları, etüt merkezleri ve özel eğitim kurumları için uygundur.",
  },
  {
    question: "Her özellik zorunlu mu?",
    answer: "Hayır. Kuruma göre modüller açılıp kapatılabilir.",
  },
  {
    question: "Mobil uygulama var mı?",
    answer:
      "Evet. Öğretmen ve öğrenciler mobil uygulama üzerinden ders, ödeme, yoklama, video ve bildirim süreçlerini takip edebilir.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Kurumun ihtiyaçlarına göre genellikle kısa sürede demo ve kullanım ortamı hazırlanabilir.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sss" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">Sıkça sorulan sorular</h2>
          <p className="mt-3 text-gray-600">Karar vermeden önce merak ettikleriniz.</p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-card shadow-soft ${
                  isOpen ? "border-primary/25" : "border-gray-100"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-dark">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 px-5 pb-4 pt-2">
                    <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Başka sorunuz mu var?{" "}
          <a href="#demo" className="font-semibold text-primary hover:underline">
            Demo talep edin
          </a>
        </p>
      </div>
    </section>
  );
}
