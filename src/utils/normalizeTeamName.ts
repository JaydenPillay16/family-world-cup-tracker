const teamNameAliases: Record<string, string> = {
  "Cape Verde Islands": "Cape Verde",
  "Bosnia and Herzegovina": "Bosnia & Herzegovina",
  "United States": "USA",
  "Turkey": "Türkiye",
  "Curacao": "Curaçao",
  "Ivory Coast": "Ivory Coast",
  "Côte d'Ivoire": "Ivory Coast",
};

export function normalizeTeamName(team: string) {
  return teamNameAliases[team] || team;
}