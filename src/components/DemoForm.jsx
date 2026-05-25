import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const initialForm = {
  kurumAdi: "",
  yetkiliAdi: "",
  telefon: "",
  email: "",
  kurumTuru: "",
  ogrenciSayisi: "",
  mesaj: "",
};

const kurumTurleri = [
  "Müzik kursu",
  "Sanat atölyesi",
  "Spor akademisi",
  "Dil kursu",
  "Etüt merkezi",
  "Özel eğitim kurumu",
  "Diğer",
];

function SuccessMessage({ onReset }) {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-soft">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="mt-4 text-xl font-bold text-dark">Talebiniz alındı</h3>
      <p className="mx-auto mt-2 max-w-md text-gray-600">
        Demo talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-full border border-green-300 bg-white px-6 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
      >
        Yeni talep gönder
      </button>
    </div>
  );
}

function validateForm(form) {
  const institutionName = form.kurumAdi.trim();
  const contactName = form.yetkiliAdi.trim();
  const phone = form.telefon.trim();
  const email = form.email.trim();

  if (!institutionName || !contactName || !phone || !email) {
    return "Lütfen zorunlu alanları doldurun.";
  }
  if (!email.includes("@")) {
    return "Geçerli bir e-posta adresi girin.";
  }
  if (!phone) {
    return "Telefon alanı boş olamaz.";
  }
  return null;
}

export default function DemoForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const validationError = validateForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    const requestData = {
      institutionName: form.kurumAdi.trim(),
      contactName: form.yetkiliAdi.trim(),
      phone: form.telefon.trim(),
      email: form.email.trim(),
      institutionType: form.kurumTuru,
      studentCount: form.ogrenciSayisi,
      message: form.mesaj.trim(),
      source: "website",
      status: "new",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    console.log("DEMO REQUEST DATA:", requestData);

    setSubmitting(true);
    setError("");

    try {
      const docRef = await addDoc(collection(db, "demoRequests"), requestData);
      console.log("DEMO REQUEST CREATED:", docRef.id);
      console.log("DEMO REQUEST SUCCESS");

      const notificationData = {
        title: "Yeni demo talebi",
        message: `${requestData.institutionName} demo talebi gönderdi.`,
        type: "demo_request",
        targetRole: "superAdmin",
        demoRequestId: docRef.id,
        read: false,
        createdAt: serverTimestamp(),
      };
      console.log("DEMO NOTIFICATION DATA:", notificationData);

      try {
        await addDoc(collection(db, "notifications"), notificationData);
        console.log("DEMO REQUEST NOTIFICATION CREATED");
      } catch (notificationError) {
        console.log(
          "DEMO REQUEST NOTIFICATION ERROR:",
          notificationError.code,
          notificationError.message,
        );
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      console.log("DEMO REQUEST ERROR:", err.code, err.message);
      setError("Talep gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm(initialForm);
    setError("");
  };

  const inputClass =
    "w-full min-h-[44px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm";

  return (
    <section id="demo" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-accent/5" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Hemen başlayın
          </span>
          <h2 className="mt-4 text-2xl font-bold text-dark sm:text-4xl">Ücretsiz demo talep edin</h2>
          <p className="mt-3 text-gray-600">
            Kurumunuza özel demo hesabı için formu doldurun. Ekibimiz en kısa sürede sizi arasın.
          </p>
          <p className="mx-auto mt-2 max-w-lg text-sm text-gray-500">
            Demo talebinizden sonra kurumunuza özel örnek admin, öğretmen ve öğrenci hesapları
            hazırlanır.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-100/80 bg-white p-6 shadow-card sm:p-8">
          {submitted ? (
            <SuccessMessage onReset={handleReset} />
          ) : (
            <form onSubmit={handleSubmit}>
              {error ? (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="kurumAdi" className="mb-1.5 block text-sm font-medium text-dark">
                    Kurum adı *
                  </label>
                  <input
                    id="kurumAdi"
                    name="kurumAdi"
                    type="text"
                    value={form.kurumAdi}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Örn. Melodi Müzik Kursu"
                  />
                </div>

                <div>
                  <label htmlFor="yetkiliAdi" className="mb-1.5 block text-sm font-medium text-dark">
                    Yetkili adı *
                  </label>
                  <input
                    id="yetkiliAdi"
                    name="yetkiliAdi"
                    type="text"
                    value={form.yetkiliAdi}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Ad Soyad"
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-dark">
                    Telefon *
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    value={form.telefon}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark">
                    E-posta *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="ornek@kurum.com"
                  />
                </div>

                <div>
                  <label htmlFor="kurumTuru" className="mb-1.5 block text-sm font-medium text-dark">
                    Kurum türü
                  </label>
                  <select
                    id="kurumTuru"
                    name="kurumTuru"
                    value={form.kurumTuru}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Seçiniz</option>
                    {kurumTurleri.map((tur) => (
                      <option key={tur} value={tur}>
                        {tur}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="ogrenciSayisi" className="mb-1.5 block text-sm font-medium text-dark">
                    Öğrenci sayısı
                  </label>
                  <input
                    id="ogrenciSayisi"
                    name="ogrenciSayisi"
                    type="text"
                    value={form.ogrenciSayisi}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Örn. 50-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="mesaj" className="mb-1.5 block text-sm font-medium text-dark">
                    Mesaj
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    rows={4}
                    value={form.mesaj}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Kurumunuz ve ihtiyaçlarınız..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full min-h-[48px] rounded-xl bg-primary py-4 text-base font-semibold text-white shadow-card transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
              >
                {submitting ? "Gönderiliyor..." : "Demo Talep Et"}
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                Bilgileriniz yalnızca demo talebi için kullanılır.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
