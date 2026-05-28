import { useEffect, useMemo, useState } from "react";
import { getLegalDocumentById, LEGAL_DOCUMENTS } from "../constants/legalDocuments";
import { fetchLegalDocument } from "../services/legalDocumentService";
import { formatLegalUpdatedAt, renderLegalContent } from "../utils/legalContentFormat";

/**
 * @param {{ docId: string }} props
 */
export default function LegalPage({ docId }) {
  const meta = useMemo(() => getLegalDocumentById(docId), [docId]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    if (!docId) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError("");
    setDoc(null);

    void fetchLegalDocument(docId)
      .then((row) => {
        if (!cancelled) {
          setDoc(row);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Metin yüklenirken bir hata oluştu.");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [docId]);

  useEffect(() => {
    const title = doc?.title?.trim() || meta?.defaultTitle;
    if (title) {
      document.title = `${title} | Eduvia`;
    }
  }, [doc, meta]);

  const pageTitle = doc?.title?.trim() || meta?.defaultTitle || "Yasal Metin";
  const hasContent = Boolean(doc?.content?.trim());
  const updatedLabel = formatLegalUpdatedAt(doc?.updatedAt);
  const otherLinks = LEGAL_DOCUMENTS.filter((d) => d.id !== docId);

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
          <h1 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">{pageTitle}</h1>

          {updatedLabel && hasContent && !loading && !error ? (
            <p className="mt-2 text-sm text-gray-500">Son güncelleme: {updatedLabel}</p>
          ) : null}

          {loading ? (
            <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center">
              <p className="font-medium text-gray-700">Yükleniyor...</p>
            </div>
          ) : null}

          {error ? (
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6">
              <p className="font-medium text-red-800">{error}</p>
            </div>
          ) : null}

          {!loading && !error && !hasContent ? (
            <p className="mt-8 text-gray-600 italic">Bu metin henüz yayınlanmamıştır.</p>
          ) : null}

          {!loading && !error && hasContent ? (
            <div className="mt-8">{renderLegalContent(doc.content)}</div>
          ) : null}
        </article>

        {otherLinks.length > 0 ? (
          <nav
            className="mt-8 flex flex-wrap justify-center gap-3"
            aria-label="Diğer yasal metinler"
          >
            {otherLinks.map((d) => (
              <a
                key={d.id}
                href={d.path}
                className="text-sm font-semibold text-primary transition hover:text-accent"
              >
                {d.label}
              </a>
            ))}
          </nav>
        ) : null}

        <p className="mt-8 text-center">
          <a href="/" className="text-sm font-semibold text-primary transition hover:text-accent">
            ← Ana sayfaya dön
          </a>
        </p>
      </main>
    </div>
  );
}
