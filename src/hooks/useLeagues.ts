import { useQuery } from "@tanstack/react-query";
import { leaguesApi } from "@/services/api";

export const useAllLeagues = () => {
  return useQuery({
    queryKey: ["leagues", "all"],
    queryFn: leaguesApi.getAllLeagues,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};

export const useSearchLeagues = (query: string, sport: string) => {
  return useQuery({
    queryKey: ["leagues", "search", query, sport],
    queryFn: () => leaguesApi.searchLeagues(query, sport),
    staleTime: 2 * 60 * 1000, // Cache for 2 minutes
  });
};
