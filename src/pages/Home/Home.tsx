import { useNavigate } from "react-router-dom";
import { ContactButton } from "../../components/common/ContactButton/ContactButton";
import { Footer } from "../../components/common/Footer/Footer";
import { Header } from "../../components/common/Header/Header";
import { TopButton } from "../../components/common/TopButton/TopButton";
import { navigation } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollTo } from "../../hooks/useScrollTo";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import styles from "./Home.module.css";

export function Home() {
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
    <div className={styles.page}>
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
    </div>
  );
}
