export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;

  group?: string;
  stage?: string;
  status?: string;
  date?: string;

  homePenaltyScore?: number | null;
  awayPenaltyScore?: number | null;
}