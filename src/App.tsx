import { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import TeamsPage from "./pages/TeamsPage";
import MatchesPage from "./pages/MatchesPage";
import StandingsPage from "./pages/StandingsPage";
import Footer from "./components/Footer";

type Page = "dashboard" | "teams" | "matches" | "standings";

function App() {
  const [activePage, setActivePage] = useState<Page>("dashboard");

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {activePage === "dashboard" && <DashboardPage />}
      {activePage === "matches" && <MatchesPage />}
      {activePage === "teams" && <TeamsPage />}
      {activePage === "standings" && <StandingsPage />}

<Footer />
</main>
  );
}

export default App;