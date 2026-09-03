import { experience } from "../../data/experience";
import { useScrollTo } from "../../hooks/useScrollTo";
import styles from "./Experience.module.css";

export function Experience() {
  const scrollTo = useScrollTo();
  return (
    <section id="experience" className="section">
      <p className="section-label">02 / EXPERIENCE</p>
      <h2>
        데이터를 흐르게 만들고,
        <br />
        운영 상태까지 확인합니다.
      </h2>
      <div className={styles.timeline}>
        {experience.map((item) => (
          <article className={styles.item} key={`${item.period}-${item.role}`}>
            <time>{item.period}</time>
            <div>
              <h3>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
              <p>{item.description}</p>
              {item.projectId && (
                <button
                  className={styles.projectLink}
                  onClick={() => scrollTo("projects")}
                >
                  프로젝트 보기 ↗
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
