import ReactCountryFlag from "react-country-flag";
import { getTeamCode } from "../constants/teamFlags";
import type { FamilyLeaderboardEntry } from "../types/team";

interface LeaderboardProps {
  leaderboard: FamilyLeaderboardEntry[];
}

function Leaderboard({ leaderboard }: LeaderboardProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10">
      <h2 className="mb-5 text-3xl font-black">Leaderboard</h2>

      <div className="grid items-start gap-6 md:grid-cols-3">
        {leaderboard.map((person, index) => (
          <div
            key={person.name}
            className={`rounded-3xl border p-6 shadow-2xl backdrop-blur transition hover:-translate-y-1 ${
              index === 0
                ? "border-yellow-300/60 bg-yellow-400/10"
                : "border-white/10 bg-white/10"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-5xl">
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : "⚽"}
              </span>

              <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-black text-black">
                {person.points} pts
              </span>
            </div>

            <h3 className="text-3xl font-black">{person.name}</h3>

            <div className="mt-5 space-y-2">
              {person.teams
                .filter((team) => team.points > 0)
                .map((team) => (
                  <div
                    key={team.team}
                    className="flex justify-between rounded-xl bg-black/35 px-3 py-2 text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <ReactCountryFlag
                        countryCode={getTeamCode(team.team)}
                        svg
                      />
                      {team.team}
                    </span>

                    <span className="font-black text-yellow-300">
                      +{team.points}
                    </span>
                  </div>
                ))}

              {person.teams.every((team) => team.points === 0) && (
                <p className="rounded-xl bg-black/30 px-3 py-2 text-sm text-gray-400">
                  Waiting for their teams to play...
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leaderboard;