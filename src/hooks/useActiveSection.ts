import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      const currentSection = sectionIds.reduce<string | null>((current, id) => {
        const section = document.getElementById(id);

        return section && section.getBoundingClientRect().top <= activationLine
          ? id
          : current;
      }, null);

      setActiveSection(currentSection ?? sectionIds[0] ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
