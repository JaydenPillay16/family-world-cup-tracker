function formatTeamName(team: any) {
  if (!team) return "TBD";

  if (team.shortName === "USA") return "USA";
  if (team.name === "United States") return "USA";
  if (team.name === "Bosnia-Herzegovina") return "Bosnia & Herzegovina";
  if (team.name === "Türkiye") return "Türkiye";

  return team.name ?? team.shortName ?? "TBD";
}

function formatStage(stage: string) {
  if (stage === "GROUP_STAGE") return "Group Stage";
  if (stage === "LAST_32") return "Round of 32";
  if (stage === "LAST_16") return "Round of 16";
  if (stage === "QUARTER_FINALS") return "Quarterfinal";
  if (stage === "SEMI_FINALS") return "Semifinal";
  if (stage === "THIRD_PLACE") return "3rd Place Playoff";
  if (stage === "FINAL") return "Final";

  return stage;
}

export default async function handler(req: any, res: any) {
  try {
    const token = process.env["FOOTBALL_DATA_TOKEN"];

    if (!token) {
      return res.status(500).json({
        error: "FOOTBALL_DATA_TOKEN is missing",
      });
    }

    const response = await fetch(
      "https://api.football-data.org/v4/competitions/WC/matches?season=2026",
      {
        headers: {
          "X-Auth-Token": token,
        },
      }
    );

    const data = await response.json();

    const matches = data.matches.map((match: any) => ({
      id: String(match.id),
      group:
        match.stage === "GROUP_STAGE"
          ? match.group?.replace("GROUP_", "") ?? ""
          : undefined,
      stage: formatStage(match.stage),
      homeTeam: formatTeamName(match.homeTeam),
      awayTeam: formatTeamName(match.awayTeam),
      homeScore: match.score.fullTime.home,
      awayScore: match.score.fullTime.away,
      homePenaltyScore: match.score.penalties?.home ?? null,
      awayPenaltyScore: match.score.penalties?.away ?? null,
      status:
        match.status === "FINISHED"
          ? "completed"
          : match.status === "IN_PLAY" || match.status === "PAUSED"
          ? "live"
          : "scheduled",
      date: match.utcDate,
    }));

    return res.status(200).json(matches);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch football-data.org World Cup data",
    });
  }
}