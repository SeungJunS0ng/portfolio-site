import { Footer } from "./components/common/Footer/Footer";
import { ContactButton } from "./components/common/ContactButton/ContactButton";
import { Header } from "./components/common/Header/Header";
import { TopButton } from "./components/common/TopButton/TopButton";
import { navigation } from "./data/navigation";
import { useActiveSection } from "./hooks/useActiveSection";
import { useScrollTo } from "./hooks/useScrollTo";
import { About } from "./pages/About/About";
import { Archive } from "./pages/Archive/Archive";
import { Contact } from "./pages/Contact/Contact";
import { Experience } from "./pages/Experience/Experience";
import { Projects } from "./pages/Projects/Projects";
import { Skills } from "./pages/Skills/Skills";

function App() {
  const activeSection = useActiveSection(navigation.map((item) => item.id));
  const scrollTo = useScrollTo();
  return (
    <>
      <Header
        items={navigation}
        activeId={activeSection}
        onNavigate={scrollTo}
      />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Archive />
        <Contact />
      </main>
      <Footer />
      <ContactButton floating />
      <TopButton />
    </>
  );
}

export default App;
