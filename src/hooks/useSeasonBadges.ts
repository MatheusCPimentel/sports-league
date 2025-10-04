import { useQuery } from "@tanstack/react-query";
import { seasonBadgesApi } from "@/services/api";

export const useSeasonBadges = (leagueId: string | null) => {
  return useQuery({
    queryKey: ["seasonBadges", leagueId],
    queryFn: () => seasonBadgesApi.getSeasonBadges(leagueId!),
    enabled: !!leagueId,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
  });
};
