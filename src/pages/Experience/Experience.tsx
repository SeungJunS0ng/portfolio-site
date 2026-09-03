import { experience } from "../../data/experience";
import { useScrollTo } from "../../hooks/useScrollTo";
import styles from "./Experience.module.css";

export function Experience() {
  const scrollTo = useScrollTo();
  return (
    <section id="experience" className="section">
      <p className="section-label">03 / EXPERIENCE</p>
      <h2>
        배운 것을 쌓고,
        <br />
        다음 장면으로 옮깁니다.
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
