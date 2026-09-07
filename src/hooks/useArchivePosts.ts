import { useInfiniteQuery } from "@tanstack/react-query";
import { getArchivePosts } from "../api/archive";
import type { ArchiveStatus } from "../types";

export const ARCHIVE_POSTS_STALE_TIME = 5 * 60 * 1000;

export function archivePostsQueryOptions(status: ArchiveStatus | null) {
  return {
    queryKey: ["archivePosts", status] as const,
    initialPageParam: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getArchivePosts(status, pageParam),
    getNextPageParam: (lastPage: Awaited<ReturnType<typeof getArchivePosts>>, allPages: unknown[]) =>
      lastPage.hasNextPage ? allPages.length : undefined,
    staleTime: ARCHIVE_POSTS_STALE_TIME,
    refetchOnWindowFocus: false,
  };
}

export function useArchivePosts(status: ArchiveStatus | null = null) {
  return useInfiniteQuery(archivePostsQueryOptions(status));
}
