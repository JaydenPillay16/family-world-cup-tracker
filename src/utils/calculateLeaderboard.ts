import { familyTeams } from "../data/familyTeams";
import { calculateTeamPoints } from "./calculateTeamPoints";
import type { Match } from "../types/match";
import type { FamilyLeaderboardEntry } from "../types/team";

export function calculateLeaderboard(
  matches: Match[]
): FamilyLeaderboardEntry[] {
  const teamPoints: Record<string, number> = {};

  matches.forEach((match) => {
    const result = calculateTeamPoints(match);

    if (!result) return;

    Object.entries(result).forEach(([team, points]) => {
      teamPoints[team] = (teamPoints[team] || 0) + points;
    });
  });

  const leaderboard = familyTeams.map((member) => {
    const teams = member.teams.map((team) => ({
      team,
      points: teamPoints[team] || 0,
    }));

    const points = teams.reduce((total, team) => total + team.points, 0);

    return {
      name: member.name,
      points,
      teams,
    };
  });

  return leaderboard.sort((a, b) => b.points - a.points);
}