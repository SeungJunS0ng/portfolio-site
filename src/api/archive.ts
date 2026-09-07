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

export async function getArchivePostById(id: string) {
  const { data, error } = await supabase
    .from("archive_posts")
    .select("id, title, content, code_language, code, tags, status, created_at")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateArchivePostStatus(
  id: string,
  status: ArchiveStatus,
) {
  const { data, error } = await supabase
    .from("archive_posts")
    .update({ status })
    .eq("id", id)
    .select("id, title, content, tags, status, created_at")
    .single();

  if (error) {
    throw error;
  }

  return data;
}
