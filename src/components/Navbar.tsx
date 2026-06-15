import fifaLogo from "../assets/fifa-logo.png";

type Page = "dashboard" | "teams" | "matches" | "standings";

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

function Navbar({ activePage, setActivePage }: NavbarProps) {
  const pages: { key: Page; label: string }[] = [
  { key: "dashboard", label: "🏆 Dashboard" },
  { key: "teams", label: "👥 Teams" },
  { key: "matches", label: "⚽ Matches" },
  { key: "standings", label: "📊 Standings" },
];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-4">
  <img
    src={fifaLogo}
    alt="FIFA Logo"
    className="h-14 w-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]"
  />

  <div>
    <h1 className="text-xl font-black text-yellow-300">
      Munu Family World Cup
    </h1>

    <p className="text-xs uppercase tracking-widest text-gray-400">
      2026 Tournament
    </p>
  </div>
</div>

        <div className="flex gap-2">
          {pages.map((page) => (
            <button
              key={page.key}
              onClick={() => setActivePage(page.key)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activePage === page.key
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;