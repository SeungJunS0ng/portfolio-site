-- Archive 답변과 비밀번호 기반 관리 기능에 필요한 보완 스키마입니다.
alter table public.archive_comments
  add column if not exists author_name text not null default '익명';

create table if not exists public.archive_comment_secrets (
  comment_id uuid primary key references public.archive_comments(id) on delete cascade,
  password_hash text not null,
  created_at timestamptz not null default now()
);

alter table public.archive_posts enable row level security;
alter table public.archive_comments enable row level security;
alter table public.archive_comment_secrets enable row level security;

grant select on public.archive_posts, public.archive_comments to anon, authenticated;

drop policy if exists "Anyone can read archive posts" on public.archive_posts;
create policy "Anyone can read archive posts"
on public.archive_posts for select to anon, authenticated using (true);

drop policy if exists "Anyone can read archive comments" on public.archive_comments;
create policy "Anyone can read archive comments"
on public.archive_comments for select to anon, authenticated using (true);
