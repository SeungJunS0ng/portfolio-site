import { useQuery } from "@tanstack/react-query";
import { getArchivePosts } from "../api/archive";
import type { ArchiveStatus } from "../types";

export function useArchivePosts(status: ArchiveStatus | null = null) {
  return useQuery({
    queryKey: ["archivePosts", status],
    queryFn: () => getArchivePosts(status),
  });
}
