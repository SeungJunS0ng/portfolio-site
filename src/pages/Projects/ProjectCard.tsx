import type { Project } from "../../types";
import styles from "./Projects.module.css";

type ProjectCardProps = { project: Project; index: number };
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.number}>0{index + 1}</div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className={styles.stack}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noreferrer">
          프로젝트 보기 ↗
        </a>
      </div>
    </article>
  );
}
