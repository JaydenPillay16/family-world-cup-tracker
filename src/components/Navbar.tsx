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
        <h1 className="flex items-center gap-3 text-xl font-black">
  <span className="rounded-2xl bg-yellow-400 px-3 py-2 text-black shadow-lg shadow-yellow-400/30">
    🏆
  </span>

  <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
    Family World Cup
  </span>
</h1>

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