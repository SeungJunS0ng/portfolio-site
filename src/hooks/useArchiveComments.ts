import { useQuery } from "@tanstack/react-query";
import { getArchiveComments } from "../api/archive";

export function useArchiveComments(postId: string) {
  return useQuery({
    queryKey: ["archiveComments", postId],
    queryFn: () => getArchiveComments(postId),
    enabled: postId.length > 0,
  });
}
