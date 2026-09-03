import { Footer } from "./components/common/Footer/Footer";
import { ContactButton } from "./components/common/ContactButton/ContactButton";
import { Header } from "./components/common/Header/Header";
import { TopButton } from "./components/common/TopButton/TopButton";
import { navigation } from "./data/navigation";
import { useActiveSection } from "./hooks/useActiveSection";
import { useScrollTo } from "./hooks/useScrollTo";
import { About } from "./pages/About/About";
import { ArchivePlaceholder } from "./pages/Archive/ArchivePlaceholder";
import { Contact } from "./pages/Contact/Contact";
import { Experience } from "./pages/Experience/Experience";
import { Projects } from "./pages/Projects/Projects";
import { Skills } from "./pages/Skills/Skills";

function PortfolioPage() {
  const activeSection = useActiveSection(navigation.map((item) => item.id));
  const scrollTo = useScrollTo();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    if (id === "archive") {
      navigate("/archive");
      return;
    }

    scrollTo(id);
  };

  return (
    <>
      <Header
        items={navigation}
        activeId={activeSection}
        onNavigate={handleNavigate}
      />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ContactButton floating />
      <TopButton />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/archive" element={<ArchivePlaceholder />} />
    </Routes>
  );
}

export default App;
import { Route, Routes, useNavigate } from "react-router-dom";
