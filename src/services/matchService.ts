import { matches as manualMatches } from "../data/matches";
import type { Match } from "../types/match";
import { getMatchesFromApi } from "./apiFootballService";

const USE_API = false;

export async function getMatches(): Promise<Match[]> {
  if (!USE_API) {
    return manualMatches;
  }

  try {
    const apiMatches = await getMatchesFromApi();
    return apiMatches;
  } catch (error) {
    console.error("API failed. Falling back to manual matches.", error);
    return manualMatches;
  }
}