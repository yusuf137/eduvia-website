import { sanitizeLegalPlainContent } from "./legalContentSanitize";

export function formatLegalUpdatedAt(updatedAt) {
  if (!updatedAt) {
    return null;
  }
  let date = null;
  if (typeof updatedAt.toDate === "function") {
    date = updatedAt.toDate();
  } else if (updatedAt instanceof Date) {
    date = updatedAt;
  } else if (typeof updatedAt.seconds === "number") {
    date = new Date(updatedAt.seconds * 1000);
  }
  if (!date || Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function renderLegalContent(content) {
  const text = sanitizeLegalPlainContent(content);
  if (!text) {
    return null;
  }

  const blocks = text.split(/\n\n+/);
  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").map((l) => l.trimEnd());
    const first = lines[0]?.trim() ?? "";

    if (first.startsWith("## ")) {
      return (
        <h2
          key={`b-${blockIndex}`}
          className="mt-6 text-lg font-semibold text-dark first:mt-0"
        >
          {first.slice(3).trim()}
        </h2>
      );
    }
    if (first.startsWith("# ")) {
      return (
        <h2
          key={`b-${blockIndex}`}
          className="mt-8 text-xl font-semibold text-dark first:mt-0"
        >
          {first.slice(2).trim()}
        </h2>
      );
    }

    const listLines = lines.filter((l) => l.trim().startsWith("- "));
    if (listLines.length === lines.length && listLines.length > 0) {
      return (
        <ul key={`b-${blockIndex}`} className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          {listLines.map((line, li) => (
            <li key={`li-${blockIndex}-${li}`} className="leading-relaxed">
              {line.trim().slice(2).trim()}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={`b-${blockIndex}`} className="mt-4 leading-relaxed text-gray-600 first:mt-0">
        {lines.map((line, li) => (
          <span key={`ln-${blockIndex}-${li}`}>
            {li > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </p>
    );
  });
}
