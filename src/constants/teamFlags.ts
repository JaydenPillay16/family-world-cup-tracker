export const teamCodes: Record<string, string> = {
  USA: "US",
  Mexico: "MX",
  "South Africa": "ZA",
  "South Korea": "KR",
  Czechia: "CZ",
  Canada: "CA",
  "Bosnia & Herzegovina": "BA",
  Paraguay: "PY",
};

export function getTeamCode(team: string) {
  return teamCodes[team] || "";
}