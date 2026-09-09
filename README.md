# 송승준 포트폴리오

백엔드 개발자 **송승준**의 개인 포트폴리오 사이트입니다.

프로젝트 경험과 기술 스택을 소개하고, 개발 과정에서 마주한 문제와 해결 과정을 **Archive**에 기록합니다.

🔗 **Portfolio**
https://portfolio-site-seungjun1.vercel.app/


## 주요 기능

- 반응형 원페이지 포트폴리오
  - About, Experience, Skills, Projects, Contact 섹션 네비게이션
  - 활성 섹션 표시와 부드러운 스크롤
- Archive
  - 게시글 목록, 상세 조회, 작성·수정·삭제, 해결 상태 변경
  - 태그와 해결 상태 필터
  - 답변 작성 및 답변 내 코드 언어·코드 스니펫 지원
  - `IntersectionObserver` 기반 무한 스크롤
- 성능 개선
  - React Query의 `useInfiniteQuery`로 목록 서버 상태 관리
  - 목록 캐시 `staleTime` 5분 적용
  - 목록에서는 미리보기 정보만 조회하고, 본문·코드는 상세에서 조회
  - Archive 화면을 `React.lazy`로 분리

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Routing | React Router |
| Server state | TanStack React Query |
| Backend | Supabase (PostgreSQL, Edge Functions) |
| Styling | CSS Modules |
| Deployment | Vercel |

## 프로젝트 구조

```text
src/
├─ api/                 # Supabase API 호출
├─ components/          # 공통 UI 컴포넌트
├─ hooks/               # React Query 및 UI 훅
├─ pages/
│  ├─ Home/             # 포트폴리오 섹션
│  └─ Archive/          # 개발 기록 목록·상세·폼
├─ types/               # TypeScript 타입
└─ utils/               # 스크롤 등 공통 유틸리티

supabase/
├─ functions/           # 게시글·답변 관리 Edge Function
└─ migrations/          # Archive 데이터베이스 마이그레이션
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 만들고 Supabase 프로젝트 정보를 입력합니다.

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

### 3. 개발 서버 실행

```bash
npm run dev
```

## Supabase 설정

Archive 기능은 게시글·답변 데이터와 Edge Function을 사용합니다.

```bash
# 데이터베이스 마이그레이션 적용
npx supabase db push

# 게시글·답변 관리 Edge Function 배포
npx supabase functions deploy archive-actions
```

`archive-actions` 함수에는 다음 환경 변수가 필요합니다.

```bash
npx supabase secrets set ARCHIVE_ADMIN_PASSWORD=YOUR_ADMIN_PASSWORD
```

`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`는 Edge Function 환경에서 설정되어 있어야 합니다. 관리자 비밀번호는 게시글 작성·수정·삭제와 상태 변경에 사용하며, 답변은 작성자 비밀번호로 관리합니다.

## Archive 데이터 흐름

1. 목록 화면은 `archive_post_summaries`에서 제목, 미리보기, 태그, 상태, 날짜, 답변 수만 조회합니다.
2. `useInfiniteQuery`가 10개 단위로 데이터를 가져오고, 하단 감지 영역이 보이면 다음 목록을 요청합니다.
3. 목록 데이터는 5분 동안 캐시되어 재방문 시 빠르게 표시됩니다.
4. 게시글·답변 변경이 성공하면 관련 React Query 캐시를 무효화해 최신 데이터로 갱신합니다.
5. 본문과 코드는 상세 화면에서만 조회해 초기 목록 로딩 부담을 줄입니다.

## 스크립트

```bash
# 개발 서버
npm run dev

# 정적 검사
npm run lint

# 프로덕션 빌드
npm run build
```
