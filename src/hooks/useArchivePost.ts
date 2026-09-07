import { useQuery } from "@tanstack/react-query";
import { getArchivePostById } from "../api/archive";

export function useArchivePost(id: string) {
  return useQuery({
    queryKey: ["archivePost", id],
    queryFn: () => getArchivePostById(id),
    enabled: id.length > 0,
  });
}
