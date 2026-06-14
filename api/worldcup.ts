export default async function handler(
  req: any,
  res: any
) {
  try {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2026",
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      }
    );

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch World Cup data",
    });
  }
}