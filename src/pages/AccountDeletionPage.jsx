const CONTACT_EMAIL = "info@eduviaapp.com";

const requiredInfo = [
  "Ad soyad",
  "Kayıtlı e-posta adresi",
  "Bağlı olduğunuz kurum adı",
  "Hesap rolünüz: öğrenci / öğretmen / admin",
];

const deletableData = [
  "Hesap bilgileri",
  "Profil bilgileri",
  "Bildirim kayıtları",
  "Uygulama kullanımına bağlı kişisel veriler",
];

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center py-0.5">
            <img
              src="/eduvia-logo.png"
              alt="Eduvia"
              className="h-9 w-auto max-w-[140px] object-contain md:h-10"
            />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:p-10">
          <h1 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            Hesap ve Veri Silme Talebi
          </h1>

          <p className="mt-6 leading-relaxed text-gray-600">
            Eduvia hesabınızı ve hesabınıza bağlı kişisel verilerinizi silmek için bizimle iletişime
            geçebilirsiniz.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-dark">Talep göndermek için</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Aşağıdaki e-posta adresine talebinizi iletebilirsiniz:
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Hesap ve Veri Silme Talebi"
                )}`}
                className="mt-2 inline-block text-base font-semibold text-primary transition hover:text-accent"
              >
                {CONTACT_EMAIL}
              </a>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-dark">E-postanızda şu bilgileri belirtin</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-600">
                {requiredInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-dark">Süreç</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Talebiniz alındıktan sonra hesabınız ve kişisel verileriniz 30 gün içinde silinir
                veya anonim hale getirilir.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-dark">Silinebilecek veriler</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-600">
                {deletableData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-dark">İstisnalar</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Yasal veya finansal sebeplerle saklanması gereken ödeme/makbuz kayıtları, ilgili
                mevzuat süresince saklanabilir.
              </p>
            </section>
          </div>
        </article>

        <p className="mt-8 text-center">
          <a href="/" className="text-sm font-semibold text-primary transition hover:text-accent">
            ← Ana sayfaya dön
          </a>
        </p>
      </main>
    </div>
  );
}
