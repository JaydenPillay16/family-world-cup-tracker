export interface Match {
  id: string;
  group: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: "scheduled" | "live" | "completed";
  date: string;
}