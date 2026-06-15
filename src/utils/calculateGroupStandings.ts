import { groups } from "../data/groups";
import { normalizeTeamName } from "./normalizeTeamName";

export interface GroupStanding {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

import type { Match } from "../types/match";

export function calculateGroupStandings(matches: Match[]) {
  const standings: Record<string, GroupStanding[]> = {};

  Object.entries(groups).forEach(([groupName, teams]) => {
    const groupTable: Record<string, GroupStanding> = {};

    teams.forEach((team) => {
      groupTable[team] = {
        team,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
      };
    });

    matches
      .filter((match) => match.group === groupName)
      .forEach((match) => {
        if (match.homeScore === null || match.awayScore === null) return;

        const homeTeam = normalizeTeamName(match.homeTeam);
const awayTeam = normalizeTeamName(match.awayTeam);

const home = groupTable[homeTeam];
const away = groupTable[awayTeam];

        if (!home || !away) return;

        home.played += 1;
        away.played += 1;

        home.goalsFor += match.homeScore;
        home.goalsAgainst += match.awayScore;

        away.goalsFor += match.awayScore;
        away.goalsAgainst += match.homeScore;

        home.goalDifference = home.goalsFor - home.goalsAgainst;
        away.goalDifference = away.goalsFor - away.goalsAgainst;

        if (match.homeScore > match.awayScore) {
          home.won += 1;
          home.points += 3;
          away.lost += 1;
        } else if (match.homeScore < match.awayScore) {
          away.won += 1;
          away.points += 3;
          home.lost += 1;
        } else {
          home.drawn += 1;
          away.drawn += 1;
          home.points += 1;
          away.points += 1;
        }
      });

    standings[groupName] = Object.values(groupTable).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) {
        return b.goalDifference - a.goalDifference;
      }
      return b.goalsFor - a.goalsFor;
    });
  });

  return standings;
}