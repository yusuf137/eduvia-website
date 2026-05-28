import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { sanitizeLegalPlainContent } from "../utils/legalContentSanitize";

function mapLegalDoc(snap) {
  const data = snap.data() ?? {};
  return {
    id: snap.id,
    title: String(data.title ?? "").trim(),
    content: sanitizeLegalPlainContent(data.content ?? ""),
    updatedAt: data.updatedAt ?? null,
    updatedBy: String(data.updatedBy ?? ""),
  };
}

export async function fetchLegalDocument(documentId) {
  const id = String(documentId ?? "").trim();
  if (!id) {
    return null;
  }
  const snap = await getDoc(doc(db, "legalDocuments", id));
  if (!snap.exists()) {
    return null;
  }
  return mapLegalDoc(snap);
}
