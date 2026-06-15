import type { Match } from "../types/match";
import { normalizeTeamName } from "./normalizeTeamName";

export function calculateTeamPoints(
  match: Match
): Record<string, number> | null {
  if (match.homeScore === null || match.awayScore === null) {
    return null;
  }

  const homeTeam = normalizeTeamName(match.homeTeam);
  const awayTeam = normalizeTeamName(match.awayTeam);

  if (match.homeScore > match.awayScore) {
    return {
      [homeTeam]: 3,
      [awayTeam]: 0,
    };
  }

  if (match.homeScore < match.awayScore) {
    return {
      [homeTeam]: 0,
      [awayTeam]: 3,
    };
  }

  return {
    [homeTeam]: 1,
    [awayTeam]: 1,
  };
}