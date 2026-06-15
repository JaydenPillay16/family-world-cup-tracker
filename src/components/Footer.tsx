import fifaLogo from "../assets/fifa-logo.png";

function Footer() {
 return (
  <footer className="mt-16 border-t border-yellow-400/20 bg-black/20 px-6 py-8 text-center backdrop-blur">
    <div className="flex items-center justify-center gap-3">
      <img
        src={fifaLogo}
        alt="FIFA Logo"
        className="h-12 w-auto"
      />

      <div className="text-left">
        <h3 className="font-bold text-yellow-300">
          Family World Cup 2026
        </h3>

        <p className="text-xs uppercase tracking-widest text-gray-500">
          Tournament Tracker
        </p>
      </div>
    </div>

    <p className="mt-4 text-gray-500">
      Built by Jayden Pillay
    </p>

    <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
      Live Tournament Tracker • Family Leaderboard • Group Standings
    </p>
  </footer>
);
}

export default Footer;