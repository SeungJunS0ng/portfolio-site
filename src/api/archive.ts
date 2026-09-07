import { supabase } from "../lib/supabaseClient";
import type { ArchiveStatus } from "../types";

export async function getArchivePosts(status: ArchiveStatus | null = null) {
  let query = supabase
    .from("archive_posts")
    .select("id, title, content, tags, status, created_at")
    .order("created_at", { ascending: false });

  if (status !== null) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
}
