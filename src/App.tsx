import { useCallback } from "react";
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
import { Archive } from "./pages/Archive/Archive";
import { Home } from "./pages/Home/Home";

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useActiveSection(navigation.map((item) => item.id));

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
        activeId={location.pathname === "/archive" ? "archive" : activeSection}
        onNavigate={handleNavigate}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
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
