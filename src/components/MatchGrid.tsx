import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { getTeamCode } from "../constants/teamFlags";
import { getMatches } from "../services/matchService";
import type { Match } from "../types/match";

function getStageBadgeStyle(stage: string) {
  const lowerStage = stage.toLowerCase();

  if (lowerStage.includes("group")) {
    return "bg-yellow-400 text-black shadow-yellow-400/30";
  }

  if (lowerStage.includes("round of 32")) {
    return "bg-blue-500 text-white shadow-blue-500/30";
  }

  if (lowerStage.includes("round of 16")) {
    return "bg-purple-500 text-white shadow-purple-500/30";
  }

  if (lowerStage.includes("quarter")) {
    return "bg-emerald-500 text-white shadow-emerald-500/30";
  }

  if (lowerStage.includes("semi")) {
    return "bg-orange-500 text-white shadow-orange-500/30";
  }

  if (lowerStage.includes("3rd")) {
    return "bg-pink-500 text-white shadow-pink-500/30";
  }

  if (lowerStage.includes("final")) {
    return "bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 text-black shadow-yellow-400/40";
  }

  return "bg-white/20 text-white shadow-white/20";
}

function getStageLabel(match: Match) {
  if (match.group) return `Group ${match.group}`;
  return match.stage ?? "Other";
}

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
      {matches.map((match) => {
        const stageLabel = getStageLabel(match);

        return (
          <div
            key={match.id}
            className="rounded-3xl border border-yellow-400/20 bg-black/35 p-5 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-yellow-400/50"
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-black shadow-lg ${getStageBadgeStyle(
                  stageLabel
                )}`}
              >
                {stageLabel}
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

            {match.homePenaltyScore !== null &&
              match.awayPenaltyScore !== null &&
              match.homePenaltyScore !== undefined &&
              match.awayPenaltyScore !== undefined && (
                <p className="mt-4 text-center text-sm font-bold text-gray-300">
                  Penalties:{" "}
                  <span className="text-yellow-300">
                    {match.homePenaltyScore} - {match.awayPenaltyScore}
                  </span>
                </p>
              )}
          </div>
        );
      })}
    </div>
  );
}

export default MatchGrid;