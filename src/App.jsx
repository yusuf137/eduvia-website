import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import FootballTournamentsPrivacy from "./pages/FootballTournamentsPrivacy";

const PRIVACY_PATH = "/football-tournaments-maker-privacy";

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  if (path === PRIVACY_PATH) {
    return <FootballTournamentsPrivacy />;
  }

  return <LandingPage />;
}
