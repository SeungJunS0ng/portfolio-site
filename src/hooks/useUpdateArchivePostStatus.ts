import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateArchivePostStatus } from "../api/archive";
import type { ArchiveStatus } from "../types";

export function useUpdateArchivePostStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: ArchiveStatus }) =>
      updateArchivePostStatus(id, status),
    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({ queryKey: ["archivePosts"] });
      const previousQueries = queryClient.getQueriesData({
        queryKey: ["archivePosts"],
      });

      queryClient.setQueriesData({ queryKey: ["archivePosts"] }, (data) => {
        if (!Array.isArray(data)) return data;

        return data.map((post) =>
          post && typeof post === "object" && "id" in post && post.id === id
            ? { ...post, status }
            : post,
        );
      });

      return { previousQueries };
    },
    onError: (_error, _variables, context) => {
      context?.previousQueries.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["archivePosts"] });
    },
  });
}
