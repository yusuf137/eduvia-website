export function sanitizeLegalPlainContent(raw) {
  let text = String(raw ?? "");
  text = text.replace(/<[^>]*>/g, "");
  text = text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  return text.replace(/\r\n/g, "\n").trim();
}
