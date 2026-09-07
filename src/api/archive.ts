import { supabase } from "../lib/supabaseClient";
import type {
  ArchiveComment,
  ArchivePost,
  ArchivePostInput,
  ArchiveStatus,
} from "../types";

export async function getArchivePosts(
  status: ArchiveStatus | null = null,
): Promise<ArchivePost[]> {
  let query = supabase
    .from("archive_posts")
    .select("id, title, content, tags, status, created_at, archive_comments(count)")
    .order("created_at", { ascending: false });

  if (status !== null) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return (data ?? []).map(({ archive_comments, ...post }) => ({
    ...post,
    comment_count: archive_comments?.[0]?.count ?? 0,
  })) as ArchivePost[];
}

export async function getArchivePostById(
  id: string,
): Promise<ArchivePost | null> {
  const { data, error } = await supabase
    .from("archive_posts")
    .select("id, title, content, code_language, code, tags, status, created_at")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as ArchivePost | null;
}

export async function getArchiveComments(postId: string): Promise<ArchiveComment[]> {
  const { data, error } = await supabase
    .from("archive_comments")
    .select("id, post_id, author_name, content, created_at, updated_at")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []) as ArchiveComment[];
}

type ArchiveAction =
  | "createPost"
  | "updatePost"
  | "deletePost"
  | "updateStatus"
  | "createComment"
  | "updateComment"
  | "deleteComment";

type ArchiveActionPayload = {
  id?: string;
  postId?: string;
  input?: ArchivePostInput;
  status?: ArchiveStatus;
  authorName?: string;
  content?: string;
  password: string;
};

export async function runArchiveAction<T>(
  action: ArchiveAction,
  payload: ArchiveActionPayload,
): Promise<T> {
  const { data, error } = await supabase.functions.invoke("archive-actions", {
    body: { action, ...payload },
  });

  if (error) {
    throw error;
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data as T;
}
