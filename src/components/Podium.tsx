import type { FamilyLeaderboardEntry } from "../types/team";

interface PodiumProps {
  leaderboard: FamilyLeaderboardEntry[];
}

function Podium({ leaderboard }: PodiumProps) {
  const first = leaderboard[0];
  const second = leaderboard[1];
  const third = leaderboard[2];

  if (!first || !second || !third) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-yellow-400/40" />
        <h2 className="text-center text-3xl font-black">
          🏆 Championship Race
        </h2>
        <div className="h-px flex-1 bg-yellow-400/40" />
      </div>

      <div className="grid items-end gap-5 md:grid-cols-3">
        <PodiumCard person={second} medal="🥈" height="md:h-64" />

        <PodiumCard
          person={first}
          medal="🥇"
          height="md:h-80"
          champion
        />

        <PodiumCard person={third} medal="🥉" height="md:h-56" />
      </div>
    </section>
  );
}

function PodiumCard({
  person,
  medal,
  height,
  champion = false,
}: {
  person: FamilyLeaderboardEntry;
  medal: string;
  height: string;
  champion?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-3xl border p-6 text-center shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${height} ${
        champion
          ? "border-yellow-300/70 bg-yellow-400/15 shadow-yellow-400/40"
          : "border-white/10 bg-black/35"
      }`}
    >
      <div>
        <div className="text-6xl">{medal}</div>

        <h3 className="mt-4 text-3xl font-black">{person.name}</h3>

        <p className="mt-2 font-black text-yellow-300">
          {person.points} pts
        </p>
      </div>

      <p className="mt-5 rounded-full bg-black/30 px-4 py-2 text-sm text-gray-300">
        {person.teams.filter((team) => team.points > 0).length} scoring teams
      </p>
    </div>
  );
}

export default Podium;