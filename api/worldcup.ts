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

    return res.status(response.status).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch football-data.org World Cup data",
    });
  }
}