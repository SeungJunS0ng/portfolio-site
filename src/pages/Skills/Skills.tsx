import { skills } from "../../data/skills";
import styles from "./Skills.module.css";

export function Skills() {
  const categories = [...new Set(skills.map((skill) => skill.category))];
  return (
    <section id="skills" className="section">
      <p className="section-label">02 / SKILLS</p>
      <h2>
        도구보다 중요한 건<br />
        문제를 바라보는 방식입니다.
      </h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category} className={styles.group}>
            <h3>{category}</h3>
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div className={styles.skill} key={skill.name}>
                  <span>{skill.name}</span>
                  <small>{skill.level}</small>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
