import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

async function hash(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hasText(value: unknown, maximum: number) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maximum;
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "POST 요청만 허용됩니다." }, 405);

  const adminPassword = Deno.env.get("ARCHIVE_ADMIN_PASSWORD");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const supabaseUrl = Deno.env.get("SUPABASE_URL");

  if (!adminPassword || !serviceRoleKey || !supabaseUrl) {
    return json({ error: "Edge Function 환경변수가 설정되지 않았습니다." }, 500);
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return json({ error: "요청 형식이 올바르지 않습니다." }, 400);

  const { action, id, postId, input, status, authorName, content, password } = body as Record<string, unknown>;
  if (!hasText(password, 200)) return json({ error: "비밀번호를 입력해주세요." }, 400);

  const adminActions = ["createPost", "updatePost", "deletePost", "updateStatus"];
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  if (adminActions.includes(String(action))) {
    if (await hash(String(password)) !== await hash(adminPassword)) {
      return json({ error: "관리자 비밀번호가 올바르지 않습니다." }, 403);
    }
  }

  if (action === "createPost" || action === "updatePost") {
    if (!input || typeof input !== "object") return json({ error: "글 내용을 입력해주세요." }, 400);
    const postInput = input as Record<string, unknown>;
    if (!hasText(postInput.title, 100) || !hasText(postInput.content, 20000)) {
      return json({ error: "제목과 본문을 확인해주세요." }, 400);
    }
    const payload = {
      title: String(postInput.title).trim(),
      content: String(postInput.content).trim(),
      code_language: typeof postInput.code_language === "string" ? postInput.code_language : "text",
      code: typeof postInput.code === "string" ? postInput.code : "",
      tags: Array.isArray(postInput.tags) ? postInput.tags.filter((tag) => typeof tag === "string").slice(0, 10) : [],
    };
    const query = action === "createPost"
      ? supabase.from("archive_posts").insert(payload)
      : supabase.from("archive_posts").update(payload).eq("id", String(id));
    const { data, error } = await query.select().single();
    return error ? json({ error: error.message }, 400) : json(data as Record<string, unknown>);
  }

  if (action === "updateStatus") {
    if (!id || !["resolved", "unresolved"].includes(String(status))) return json({ error: "상태 값이 올바르지 않습니다." }, 400);
    const { data, error } = await supabase.from("archive_posts").update({ status }).eq("id", String(id)).select().single();
    return error ? json({ error: error.message }, 400) : json(data as Record<string, unknown>);
  }

  if (action === "deletePost") {
    if (!id) return json({ error: "글 ID가 필요합니다." }, 400);
    const { error } = await supabase.from("archive_posts").delete().eq("id", String(id));
    return error ? json({ error: error.message }, 400) : json({ ok: true });
  }

  if (action === "createComment") {
    if (!postId || !hasText(content, 5000)) return json({ error: "답변 내용을 입력해주세요." }, 400);
    const { data: comment, error } = await supabase.from("archive_comments")
      .insert({ post_id: String(postId), author_name: typeof authorName === "string" && authorName.trim() ? authorName.trim().slice(0, 30) : "익명", content: String(content).trim() })
      .select().single();
    if (error || !comment) return json({ error: error?.message ?? "답변을 저장하지 못했습니다." }, 400);
    const { error: secretError } = await supabase.from("archive_comment_secrets").insert({ comment_id: comment.id, password_hash: await hash(String(password)) });
    return secretError ? json({ error: secretError.message }, 400) : json(comment as Record<string, unknown>);
  }

  if (action === "updateComment" || action === "deleteComment") {
    if (!id) return json({ error: "답변 ID가 필요합니다." }, 400);
    const { data: secret } = await supabase.from("archive_comment_secrets").select("password_hash").eq("comment_id", String(id)).maybeSingle();
    if (!secret || secret.password_hash !== await hash(String(password))) return json({ error: "답변 비밀번호가 올바르지 않습니다." }, 403);
    const result = action === "updateComment"
      ? await supabase.from("archive_comments").update({ content: String(content ?? "").trim() }).eq("id", String(id)).select().single()
      : await supabase.from("archive_comments").delete().eq("id", String(id));
    return result.error ? json({ error: result.error.message }, 400) : json(("data" in result ? result.data : { ok: true }) as Record<string, unknown>);
  }

  return json({ error: "지원하지 않는 작업입니다." }, 400);
});
