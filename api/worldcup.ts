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

    const matches = data.matches
      .filter((match: any) => match.stage === "GROUP_STAGE")
      .map((match: any) => ({
        id: String(match.id),
        group: match.group?.replace("GROUP_", "") ?? "",
        homeTeam:
          match.homeTeam.shortName === "USA"
            ? "USA"
            : match.homeTeam.name === "United States"
            ? "USA"
            : match.homeTeam.name === "Bosnia-Herzegovina"
            ? "Bosnia & Herzegovina"
            : match.homeTeam.name === "Türkiye"
            ? "Türkiye"
            : match.homeTeam.name,
        awayTeam:
          match.awayTeam.shortName === "USA"
            ? "USA"
            : match.awayTeam.name === "United States"
            ? "USA"
            : match.awayTeam.name === "Bosnia-Herzegovina"
            ? "Bosnia & Herzegovina"
            : match.awayTeam.name === "Türkiye"
            ? "Türkiye"
            : match.awayTeam.name,
        homeScore: match.score.fullTime.home,
        awayScore: match.score.fullTime.away,
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