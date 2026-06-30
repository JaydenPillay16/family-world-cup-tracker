import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { getTeamCode } from "../constants/teamFlags";
import { getMatches } from "../services/matchService";
import type { Match } from "../types/match";
import { getGroupBadgeStyle } from "../constants/groupStyles";

function MatchGrid() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    getMatches().then(setMatches);

    const interval = setInterval(() => {
      getMatches().then(setMatches);
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {matches.map((match) => (
        <div
          key={match.id}
          className="rounded-3xl border border-yellow-400/20 bg-black/35 p-5 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-yellow-400/50"
        >
          <div className="mb-4 flex items-center justify-between">
            <span
  className={`rounded-full px-3 py-1 text-xs font-black shadow-lg ${getGroupBadgeStyle(
    match.group ?? match.stage ?? "Other"
  )}`}
>
  Group {match.group ?? match.stage ?? "Other"}
</span>

            {match.status === "live" ? (
              <span className="flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-black uppercase tracking-widest text-red-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                LIVE
              </span>
            ) : (
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {match.status}
              </span>
            )}
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
              {match.homeScore !== null && match.awayScore !== null
                ? `${match.homeScore} - ${match.awayScore}`
                : "-"}
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