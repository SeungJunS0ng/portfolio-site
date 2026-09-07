import { supabase } from "../lib/supabaseClient";
import type {
  ArchiveComment,
  ArchivePost,
  ArchivePostInput,
  ArchivePostsPage,
  ArchiveStatus,
} from "../types";

export const ARCHIVE_POSTS_PAGE_SIZE = 10;

export async function getArchivePosts(
  status: ArchiveStatus | null = null,
  page = 0,
): Promise<ArchivePostsPage> {
  const from = page * ARCHIVE_POSTS_PAGE_SIZE;
  const to = from + ARCHIVE_POSTS_PAGE_SIZE;

  let query = supabase
    .from("archive_post_summaries")
    .select("id, title, excerpt, tags, status, created_at, comment_count")
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .range(from, to);

  if (status !== null) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  const posts = (data ?? []) as ArchivePostsPage["posts"];

  return {
    posts: posts.slice(0, ARCHIVE_POSTS_PAGE_SIZE),
    hasNextPage: posts.length > ARCHIVE_POSTS_PAGE_SIZE,
  };
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
