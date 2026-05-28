export const LEGAL_DOCUMENT_IDS = {
  termsOfUse: "terms-of-use",
  privacyPolicy: "privacy-policy",
  kvkkDisclosure: "kvkk-disclosure",
};

export const LEGAL_PUBLIC_PATHS = {
  termsOfUse: "/kullanici-sozlesmesi",
  privacyPolicy: "/gizlilik-politikasi",
  kvkkDisclosure: "/kvkk-aydinlatma-metni",
};

export const LEGAL_DOCUMENTS = [
  {
    id: LEGAL_DOCUMENT_IDS.termsOfUse,
    path: LEGAL_PUBLIC_PATHS.termsOfUse,
    label: "Kullanıcı Sözleşmesi",
    defaultTitle: "Kullanıcı Sözleşmesi",
  },
  {
    id: LEGAL_DOCUMENT_IDS.privacyPolicy,
    path: LEGAL_PUBLIC_PATHS.privacyPolicy,
    label: "Gizlilik Politikası",
    defaultTitle: "Gizlilik Politikası",
  },
  {
    id: LEGAL_DOCUMENT_IDS.kvkkDisclosure,
    path: LEGAL_PUBLIC_PATHS.kvkkDisclosure,
    label: "KVKK Aydınlatma Metni",
    defaultTitle: "KVKK Aydınlatma Metni",
  },
];

export function normalizePublicPath(pathname) {
  const raw = String(pathname ?? "").split("?")[0].split("#")[0];
  if (!raw || raw === "/") {
    return "/";
  }
  const trimmed = raw.endsWith("/") ? raw.slice(0, -1) : raw;
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function getLegalDocumentByPath(pathname) {
  const normalized = normalizePublicPath(pathname);
  return LEGAL_DOCUMENTS.find((d) => d.path === normalized) ?? null;
}

export function getLegalDocumentById(documentId) {
  return LEGAL_DOCUMENTS.find((d) => d.id === documentId) ?? null;
}

export function isLegalPublicPath(pathname) {
  return Boolean(getLegalDocumentByPath(pathname));
}
