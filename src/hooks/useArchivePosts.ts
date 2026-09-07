import { useQuery } from "@tanstack/react-query";
import { getArchivePosts } from "../api/archive";

export function useArchivePosts() {
  return useQuery({
    queryKey: ["archivePosts"],
    queryFn: getArchivePosts,
  });
}
