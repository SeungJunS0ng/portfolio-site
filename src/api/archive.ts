import { supabase } from "../lib/supabaseClient";

export async function getArchivePosts() {
  const { data, error } = await supabase
    .from("archive_posts")
    .select("id, title, content, tags, status, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}
