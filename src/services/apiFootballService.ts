import type { Match } from "../types/match";

export async function getMatchesFromApi(): Promise<Match[]> {
  const response = await fetch("/api/worldcup");

  if (!response.ok) {
    throw new Error("Failed to fetch World Cup matches");
  }

  return response.json();
}