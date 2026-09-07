import { useEffect } from "react";
import { ContactButton } from "../../components/common/ContactButton/ContactButton";
import { Footer } from "../../components/common/Footer/Footer";
import { TopButton } from "../../components/common/TopButton/TopButton";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import styles from "./Home.module.css";

export function Home() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (sectionId) document.getElementById(sectionId)?.scrollIntoView();
  }, []);

  return (
    <div className={styles.page}>
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
