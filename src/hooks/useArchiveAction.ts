import { useMutation, useQueryClient } from "@tanstack/react-query";
import { runArchiveAction } from "../api/archive";

export function useArchiveAction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ action, ...payload }: Parameters<typeof runArchiveAction>[1] & { action: Parameters<typeof runArchiveAction>[0] }) =>
      runArchiveAction(action, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archivePosts"] });
      queryClient.invalidateQueries({ queryKey: ["archivePost"] });
      queryClient.invalidateQueries({ queryKey: ["archiveComments"] });
    },
  });
}
