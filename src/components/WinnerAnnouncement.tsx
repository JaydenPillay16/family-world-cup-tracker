import ReactCountryFlag from "react-country-flag";
import { getTeamCode } from "../constants/teamFlags";
import type { FamilyLeaderboardEntry } from "../types/team";
import worldCupTrophy from "../assets/world-cup-trophy-transparent.png";
import Confetti from "react-confetti";

interface WinnerAnnouncementProps {
  winner?: FamilyLeaderboardEntry;
}

function WinnerAnnouncement({ winner }: WinnerAnnouncementProps) {
  if (!winner) return null;
  
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
        <Confetti
  width={width}
  height={height}
  numberOfPieces={250}
  recycle={false}
/>
      <div className="relative overflow-hidden rounded-[2rem] border border-yellow-300/70 bg-gradient-to-br from-yellow-400/20 via-black/70 to-blue-900/40 p-8 text-center shadow-[0_0_80px_rgba(250,204,21,0.35)] backdrop-blur md:p-12">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.25),transparent_40%)]" />

        <div className="relative">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.5em] text-yellow-300">
            Official Winner
          </p>

          <img
            src={worldCupTrophy}
            alt="Trophy"
            className="mx-auto mb-6 h-40 w-auto drop-shadow-[0_0_50px_rgba(250,204,21,0.9)]"
          />

          <h2 className="text-4xl font-black text-white md:text-6xl">
            🏆 Congratulations,{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              {winner.name}
            </span>
            !
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-200">
            After all the group stage drama, goals, shocks and close battles,
            <span className="font-bold text-yellow-300"> {winner.name}</span>{" "}
            finishes top of the family leaderboard with{" "}
            <span className="font-black text-yellow-300">
              {winner.points} points
            </span>
            . Bragging rights secured. Champion status confirmed.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-300/40 bg-black/40 p-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-yellow-300">
              Winning Teams
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {winner.teams.map((team) => (
                <div
                  key={team.team}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold"
                >
                  <ReactCountryFlag countryCode={getTeamCode(team.team)} svg />
                  <span>{team.team}</span>
                  <span className="text-yellow-300">+{team.points}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-2xl font-black text-yellow-300">
            👑 MUNU FAMILY WORLD CUP CHAMPION 👑
          </p>
        </div>
      </div>
    </section>
  );
}

export default WinnerAnnouncement;