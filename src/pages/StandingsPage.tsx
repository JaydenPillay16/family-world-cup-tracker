import ReactCountryFlag from "react-country-flag";
import { getTeamCode } from "../constants/teamFlags";
import { calculateGroupStandings } from "../utils/calculateGroupStandings";
import { useEffect, useState } from "react";
import { getMatches } from "../services/matchService";
import type { Match } from "../types/match";

function StandingsPage() {
  const [matches, setMatches] = useState<Match[]>([]);

useEffect(() => {
  getMatches().then(setMatches);

  const interval = setInterval(() => {
    getMatches().then(setMatches);
  }, 300000);

  return () => clearInterval(interval);
}, []);

const standings = calculateGroupStandings(matches);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-2 text-4xl font-black">📊 Group Standings</h2>
      <p className="mb-8 text-gray-400">
        Live group tables calculated from match results.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(standings).map(([groupName, teams]) => (
          <div
            key={groupName}
            className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl"
          >
            <h3 className="mb-4 text-2xl font-black text-yellow-300">
              Group {groupName}
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-400">
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-left">Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GD</th>
                    <th>Pts</th>
                  </tr>
                </thead>

                <tbody>
                  {teams.map((team, index) => (
                    <tr
                      key={team.team}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="py-3 font-bold">
                        <span className="mr-2 text-gray-400">{index + 1}</span>
                        <ReactCountryFlag
                          countryCode={getTeamCode(team.team)}
                          svg
                          className="mr-2"
                        />
                        {team.team}
                      </td>
                      <td className="text-center">{team.played}</td>
                      <td className="text-center">{team.won}</td>
                      <td className="text-center">{team.drawn}</td>
                      <td className="text-center">{team.lost}</td>
                      <td className="text-center">{team.goalDifference}</td>
                      <td className="text-center font-black text-yellow-300">
                        {team.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StandingsPage;