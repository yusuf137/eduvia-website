import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import FootballTournamentsPrivacy from "./pages/FootballTournamentsPrivacy";
import LegalPage from "./pages/LegalPage";
import AccountDeletionPage from "./pages/AccountDeletionPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getLegalDocumentByPath, normalizePublicPath } from "./constants/legalDocuments";

const PRIVACY_PATH = "/football-tournaments-maker-privacy";
const ACCOUNT_DELETION_PATH = "/hesap-silme";

function resolvePage(path) {
  if (path === PRIVACY_PATH) {
    return <FootballTournamentsPrivacy />;
  }

  if (path === ACCOUNT_DELETION_PATH) {
    return <AccountDeletionPage />;
  }

  const legalMeta = getLegalDocumentByPath(path);
  if (legalMeta) {
    return <LegalPage docId={legalMeta.id} />;
  }

  if (path === "/") {
    return <LandingPage />;
  }

  return <NotFoundPage />;
}

export default function App() {
  const [path, setPath] = useState(() => normalizePublicPath(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(normalizePublicPath(window.location.pathname));
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  return resolvePage(path);
}
