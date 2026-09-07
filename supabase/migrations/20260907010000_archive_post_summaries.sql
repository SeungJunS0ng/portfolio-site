-- Archive 목록은 전체 본문과 코드 대신 미리보기만 읽도록 별도 view를 사용합니다.
create or replace view public.archive_post_summaries
with (security_invoker = true) as
select
  posts.id,
  posts.title,
  left(posts.content, 150) as excerpt,
  posts.tags,
  posts.status,
  posts.created_at,
  count(comments.id)::integer as comment_count
from public.archive_posts as posts
left join public.archive_comments as comments on comments.post_id = posts.id
group by posts.id, posts.title, posts.content, posts.tags, posts.status, posts.created_at;

grant select on public.archive_post_summaries to anon, authenticated;

create index if not exists archive_posts_status_created_at_idx
  on public.archive_posts (status, created_at desc);

create index if not exists archive_comments_post_id_idx
  on public.archive_comments (post_id);
