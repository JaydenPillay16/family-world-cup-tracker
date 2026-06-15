import { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import TeamsPage from "./pages/TeamsPage";
import MatchesPage from "./pages/MatchesPage";
import StandingsPage from "./pages/StandingsPage";
import Footer from "./components/Footer";
import PageBackground from "./components/PageBackground";


type Page = "dashboard" | "teams" | "matches" | "standings";

function App() {
  const [activePage, setActivePage] = useState<Page>("dashboard");

  return (
  <main className="relative min-h-screen overflow-hidden text-white">
    <PageBackground />

    <Navbar activePage={activePage} setActivePage={setActivePage} />

    {activePage === "dashboard" && <DashboardPage />}
    {activePage === "teams" && <TeamsPage />}
    {activePage === "matches" && <MatchesPage />}
    {activePage === "standings" && <StandingsPage />}

    <Footer />
  </main>
);
}

export default App;