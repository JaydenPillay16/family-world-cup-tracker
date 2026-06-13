export interface TeamPoints {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}

export interface FamilyLeaderboardEntry {
  name: string;
  points: number;
  teams: {
    team: string;
    points: number;
  }[];
}