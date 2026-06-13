export interface Match {
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
}

export interface FamilyTeamMap {
  [person: string]: string[]
}