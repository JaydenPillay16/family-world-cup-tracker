import ReactCountryFlag from "react-country-flag";
import { useEffect, useState } from "react";
import { getMatches } from "../services/matchService";
import type { Match } from "../types/match";
import { getTeamCode } from "../constants/teamFlags";

function MatchGrid() {
  const [matches, setMatches] = useState<Match[]>([]);

useEffect(() => {
  getMatches().then(setMatches);
}, []);
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {matches.map((match) => (
        <div
          key={match.id}
          className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-black">
              Group {match.group}
            </span>

            <span className="text-xs uppercase tracking-widest text-gray-400">
              {match.status}
            </span>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div>
              <ReactCountryFlag
                countryCode={getTeamCode(match.homeTeam)}
                svg
                style={{ width: "3rem", height: "3rem" }}
              />

              <p className="mt-2 font-bold">{match.homeTeam}</p>
            </div>

            <div className="rounded-2xl bg-black/40 px-5 py-3 text-2xl font-black text-yellow-300">
              {match.homeScore} - {match.awayScore}
            </div>

            <div className="text-right">
              <ReactCountryFlag
                countryCode={getTeamCode(match.awayTeam)}
                svg
                style={{ width: "3rem", height: "3rem" }}
              />

              <p className="mt-2 font-bold">{match.awayTeam}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MatchGrid;