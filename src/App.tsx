import { lazy, Suspense, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Header } from "./components/common/Header/Header";
import { navigation } from "./data/navigation";
import { useActiveSection } from "./hooks/useActiveSection";
import { getArchivePosts } from "./api/archive";
import { ARCHIVE_POSTS_STALE_TIME } from "./hooks/useArchivePosts";
import { Home } from "./pages/Home/Home";

const Archive = lazy(() =>
  import("./pages/Archive/Archive").then(({ Archive: Page }) => ({ default: Page })),
);
const ArchiveDetail = lazy(() =>
  import("./pages/Archive/ArchiveDetail").then(({ ArchiveDetail: Page }) => ({ default: Page })),
);
const ArchiveEdit = lazy(() =>
  import("./pages/Archive/ArchiveEdit").then(({ ArchiveEdit: Page }) => ({ default: Page })),
);
const ArchiveWrite = lazy(() =>
  import("./pages/Archive/ArchiveWrite").then(({ ArchiveWrite: Page }) => ({ default: Page })),
);

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const activeSection = useActiveSection(navigation.map((item) => item.id));

  const prefetchArchive = useCallback((id: string) => {
    if (id !== "archive") return;

    void import("./pages/Archive/Archive");
    void queryClient.prefetchQuery({
      queryKey: ["archivePosts", null],
      queryFn: () => getArchivePosts(),
      staleTime: ARCHIVE_POSTS_STALE_TIME,
    });
  }, [queryClient]);

  const handleNavigate = useCallback(
    (id: string) => {
      if (id === "archive") {
        navigate("/archive");
        return;
      }

      if (location.pathname !== "/") {
        navigate(`/#${id}`);
        window.setTimeout(
          () => document.getElementById(id)?.scrollIntoView(),
          0,
        );
        return;
      }

      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    [location.pathname, navigate],
  );

  return (
    <>
      <Header
        items={navigation}
        activeId={location.pathname.startsWith("/archive") ? "archive" : activeSection}
        onNavigate={handleNavigate}
        onNavigateIntent={prefetchArchive}
      />
      <Suspense fallback={<main className="route-loading" role="status">화면을 불러오는 중입니다.</main>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/new" element={<ArchiveWrite />} />
          <Route path="/archive/:id" element={<ArchiveDetail />} />
          <Route path="/archive/:id/edit" element={<ArchiveEdit />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
