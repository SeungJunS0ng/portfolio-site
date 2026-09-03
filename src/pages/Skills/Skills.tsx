import { skills } from "../../data/skills";
import styles from "./Skills.module.css";

export function Skills() {
  const categories = [...new Set(skills.map((skill) => skill.category))];
  return (
    <section id="skills" className="section">
      <p className="section-label">03 / SKILLS</p>
      <h2>
        서비스의 흐름을 구성하는<br />
        기술 스택입니다.
      </h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category} className={styles.group}>
            <h3>{category}</h3>
            <ul className={styles.tags}>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <li key={skill.name} title={skill.level}>
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
