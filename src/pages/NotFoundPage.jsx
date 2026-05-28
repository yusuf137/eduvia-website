export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-2xl font-bold text-dark">Sayfa bulunamadı</h1>
      <p className="mt-2 text-gray-600">Aradığınız sayfa mevcut değil.</p>
      <a
        href="/"
        className="mt-6 text-sm font-semibold text-primary transition hover:text-accent"
      >
        Ana sayfaya dön
      </a>
    </div>
  );
}
