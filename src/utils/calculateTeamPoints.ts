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

  const isKnockout =
    match.stage?.toLowerCase().includes("round") ||
    match.stage?.toLowerCase().includes("quarter") ||
    match.stage?.toLowerCase().includes("semi") ||
    match.stage?.toLowerCase().includes("final") ||
    match.stage?.toLowerCase().includes("playoff");

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

  if (isKnockout) {
    if (match.homePenaltyScore !== null && match.awayPenaltyScore !== null) {
      if (match.homePenaltyScore > match.awayPenaltyScore) {
        return {
          [homeTeam]: 3,
          [awayTeam]: 0,
        };
      }

      if (match.homePenaltyScore < match.awayPenaltyScore) {
        return {
          [homeTeam]: 0,
          [awayTeam]: 3,
        };
      }
    }

    return {
      [homeTeam]: 0,
      [awayTeam]: 0,
    };
  }

  return {
    [homeTeam]: 1,
    [awayTeam]: 1,
  };
}