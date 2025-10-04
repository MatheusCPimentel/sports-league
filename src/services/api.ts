import { Leagues } from "@/types/leagues";

const API_BASE_URL = "https://www.thesportsdb.com/api/v1/json/3";

export const leaguesApi = {
  getAllLeagues: async (): Promise<Leagues> => {
    const response = await fetch(`${API_BASE_URL}/all_leagues.php`);

    if (!response.ok) {
      throw new Error("Failed to fetch leagues");
    }

    const data = await response.json();
    return data;
  },
};
