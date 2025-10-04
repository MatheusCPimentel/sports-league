import { Leagues } from "@/types/leagues";
import { SeasonBadges } from "@/types/seasonBadges";

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

  // Note: API doesn't have a dedicated league search, so we'll filter client-side
  // but keep the structure ready for when we need backend filtering
  searchLeagues: async (query: string, sport?: string): Promise<Leagues> => {
    const response = await fetch(`${API_BASE_URL}/all_leagues.php`);

    if (!response.ok) {
      throw new Error("Failed to fetch leagues");
    }

    const data: Leagues = await response.json();

    const filtered = data.leagues.filter((league) => {
      const matchesQuery = query
        ? league.strLeague.toLowerCase().includes(query.toLowerCase())
        : true;

      const matchesSport =
        sport && sport !== "All Sports" ? league.strSport === sport : true;

      return matchesQuery && matchesSport;
    });

    return { leagues: filtered };
  },
};

export const seasonBadgesApi = {
  getSeasonBadges: async (leagueId: string): Promise<SeasonBadges> => {
    const response = await fetch(
      `${API_BASE_URL}/search_all_seasons.php?badge=1&id=${leagueId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch season badges");
    }

    const data = await response.json();
    return data;
  },
};
