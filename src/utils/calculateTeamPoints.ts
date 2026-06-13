import type { Match } from "../types/match";

export function calculateTeamPoints(
  match: Match
): Record<string, number> | null {
  if (match.homeScore === null || match.awayScore === null) {
    return null;
  }

  if (match.homeScore > match.awayScore) {
    return {
      [match.homeTeam]: 3,
      [match.awayTeam]: 0,
    };
  }

  if (match.homeScore < match.awayScore) {
    return {
      [match.homeTeam]: 0,
      [match.awayTeam]: 3,
    };
  }

  return {
    [match.homeTeam]: 1,
    [match.awayTeam]: 1,
  };
}