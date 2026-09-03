import type { Project } from "../../types";
import styles from "./Projects.module.css";

type ProjectCardProps = { project: Project; index: number };
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.number}>0{index + 1}</div>
      <div>
        <h3>
          {project.title}{" "}
          {project.badge && (
            <span className={styles.badge}>{project.badge}</span>
          )}
        </h3>
        <p>{project.description}</p>
        <p className={styles.meta}>
          {project.period} · {project.role}
        </p>
        <ul className={styles.highlights}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className={styles.stack}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className={styles.links}>
          <li>
            <a href={project.link} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
          {project.demo && (
            <li>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo ↗
              </a>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
