export const teamCodes: Record<string, string> = {
  USA: "US",
  "United States": "US",

  Mexico: "MX",
  "South Africa": "ZA",
  "South Korea": "KR",
  Czechia: "CZ",

  Canada: "CA",
  "Bosnia & Herzegovina": "BA",
  "Bosnia-Herzegovina": "BA",

  Paraguay: "PY",
  Qatar: "QA",
  Switzerland: "CH",

  Brazil: "BR",
  Morocco: "MA",
  Haiti: "HT",
  Scotland: "GB-SCT",

  Australia: "AU",
  Turkey: "TR",
  Türkiye: "TR",

  Germany: "DE",
  Curaçao: "CW",
  Curacao: "CW",
  "Ivory Coast": "CI",
  Ecuador: "EC",

  Netherlands: "NL",
  Japan: "JP",
  Sweden: "SE",
  Tunisia: "TN",

  Spain: "ES",
  "Cape Verde": "CV",
  "Cape Verde Islands": "CV",
  "Saudi Arabia": "SA",
  Uruguay: "UY",

  Belgium: "BE",
  Egypt: "EG",
  Iran: "IR",
  "New Zealand": "NZ",

  France: "FR",
  Senegal: "SN",
  Iraq: "IQ",
  Norway: "NO",

  Argentina: "AR",
  Algeria: "DZ",
  Austria: "AT",
  Jordan: "JO",

  Portugal: "PT",
  "Congo DR": "CD",
  "Congo DR": "CD",
  Uzbekistan: "UZ",
  Colombia: "CO",

  England: "GB-ENG",
  Croatia: "HR",
  Ghana: "GH",
  Panama: "PA",
};

export function getTeamCode(team: string) {
  return teamCodes[team] || "";
}