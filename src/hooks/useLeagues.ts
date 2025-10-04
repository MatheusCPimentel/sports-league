import { useQuery } from "@tanstack/react-query";
import { leaguesApi } from "@/services/api";

export const useLeagues = () => {
  return useQuery({
    queryKey: ["leagues"],
    queryFn: leaguesApi.getAllLeagues,
  });
};
