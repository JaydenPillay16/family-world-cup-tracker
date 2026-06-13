import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { calculateLeaderboard } from "../utils/calculateLeaderboard";
import { getTeamCode } from "../constants/teamFlags";
import { getMatches } from "../services/matchService";
import type { Match } from "../types/match";

function TeamsPage() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    getMatches().then(setMatches);
  }, []);

  const leaderboard = calculateLeaderboard(matches);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-2 text-4xl font-black">👥 Team Ownership</h2>
      <p className="mb-8 text-gray-400">
        Every family member, their assigned teams, and how many points each team
        has contributed.
      </p>

      <div className="grid items-start gap-6 md:grid-cols-2">
        {leaderboard.map((person, index) => (
          <div
            key={person.name}
            className={`rounded-3xl border p-6 shadow-xl ${
              index === 0
                ? "border-yellow-300/60 bg-yellow-400/10"
                : "border-white/10 bg-white/10"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                  Rank #{index + 1}
                </p>
                <h3 className="text-3xl font-black">{person.name}</h3>
              </div>

              <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-black text-black">
                {person.points} pts
              </span>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {person.teams.map((team) => (
                <div
                  key={team.team}
                  className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={getTeamCode(team.team)}
                      svg
                    />
                    {team.team}
                  </span>

                  <span
                    className={
                      team.points > 0
                        ? "font-black text-yellow-300"
                        : "font-bold text-gray-500"
                    }
                  >
                    {team.points > 0 ? `+${team.points}` : "0"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamsPage;