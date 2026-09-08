-- 답변에 선택적 코드 스니펫을 저장합니다.
alter table public.archive_comments
  add column if not exists code_language text not null default 'text',
  add column if not exists code text not null default '';
