import { useQuery } from "@tanstack/react-query";
import { getArchivePosts } from "../api/archive";
import type { ArchiveStatus } from "../types";

export const ARCHIVE_POSTS_STALE_TIME = 5 * 60 * 1000;

export function useArchivePosts(status: ArchiveStatus | null = null) {
  return useQuery({
    queryKey: ["archivePosts", status],
    queryFn: () => getArchivePosts(status),
    staleTime: ARCHIVE_POSTS_STALE_TIME,
    refetchOnWindowFocus: false,
  });
}
