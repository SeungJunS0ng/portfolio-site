import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL과 Publishable key 환경변수를 설정해주세요.");
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  // 로그인 없이 공개 조회와 Edge Function 호출에 사용합니다.
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
