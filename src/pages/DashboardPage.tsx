import { useEffect, useState } from "react";
import Leaderboard from "../components/Leaderboard";
import MatchGrid from "../components/MatchGrid";
import Podium from "../components/Podium";
import { calculateLeaderboard } from "../utils/calculateLeaderboard";
import { getMatches } from "../services/matchService";
import type { Match } from "../types/match";

function DashboardPage() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    getMatches().then(setMatches);
  }, []);

  const leaderboard = calculateLeaderboard(matches);

  const leaderGap =
    leaderboard.length > 1 ? leaderboard[0].points - leaderboard[1].points : 0;

  const lastUpdated = new Date().toLocaleString();

  return (
    <>
      <section className="relative px-6 py-14 text-center">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute left-10 top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.5em] text-yellow-300">
            Family Tournament
          </p>

          <div className="mb-4 animate-pulse text-8xl">🏆</div>

          <h2 className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            FAMILY WORLD CUP
          </h2>

          <p className="mt-3 text-2xl font-bold text-yellow-300">
            2026 Edition
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            A live family leaderboard where every goal, win and draw changes the
            race for bragging rights.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-center">
          <p className="text-sm uppercase tracking-widest text-yellow-300">
            Tournament Status
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <span className="font-bold">
              ⚽ Matches Played: {matches.length}
            </span>

            <span className="font-bold">
              🏆 Current Leader: {leaderboard[0]?.name ?? "-"}
            </span>

            <span className="font-bold">
              ⭐ Top Score: {leaderboard[0]?.points ?? 0} pts
            </span>

            <span className="font-bold">📈 Lead Gap: {leaderGap} pts</span>

            <span className="font-bold">🕒 Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl bg-white/10 p-6 text-center">
            <p className="text-4xl font-black text-yellow-300">
              {leaderboard.length}
            </p>
            <p className="text-gray-400">Players</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 text-center">
            <p className="text-4xl font-black text-yellow-300">
              {matches.length}
            </p>
            <p className="text-gray-400">Matches</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 text-center">
            <p className="text-4xl font-black text-yellow-300">
              {leaderboard[0]?.points ?? 0}
            </p>
            <p className="text-gray-400">Leading Score</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 text-center">
            <p className="text-4xl font-black text-yellow-300">
              {leaderboard[0]?.name ?? "-"}
            </p>
            <p className="text-gray-400">Current Leader</p>
          </div>
        </div>
      </section>

      <Podium leaderboard={leaderboard} />

      <Leaderboard leaderboard={leaderboard} />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-5 text-3xl font-black">Recent Matches</h2>
        <MatchGrid />
      </section>
    </>
  );
}

export default DashboardPage;