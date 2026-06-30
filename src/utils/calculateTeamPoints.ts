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

 const homePenaltyScore = match.homePenaltyScore ?? null;
 const awayPenaltyScore = match.awayPenaltyScore ?? null;

if (isKnockout) {
  if (homePenaltyScore !== null && awayPenaltyScore !== null) {
    if (homePenaltyScore > awayPenaltyScore) {
      return {
        [homeTeam]: 3,
        [awayTeam]: 0,
      };
    }

    if (homePenaltyScore < awayPenaltyScore) {
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