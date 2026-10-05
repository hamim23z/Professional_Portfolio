"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { projects, categories } from "../data/projects";
import styles from "./Projects.module.css";

const statusLabels = {
  completed: "Completed",
  current: "In progress",
  paused: "Delayed",
};

const categoryLabels = Object.fromEntries(categories.map((c) => [c.id, c.label]));

function ProjectLink({ project }) {
  if (!project.link) {
    return <span className={`${styles.action} ${styles.disabled}`}>Link coming soon</span>;
  }
  const isGithub = project.linkType === "github";
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.action}
      aria-label={`${isGithub ? "View" : "Visit"} ${project.title} ${isGithub ? "on GitHub" : "live site"} (opens in a new tab)`}
    >
      {isGithub ? <FaGithub aria-hidden="true" /> : <FaArrowUpRightFromSquare aria-hidden="true" />}
      {isGithub ? "View on GitHub" : "Visit live site"}
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(() => new Set());

  const counts = useMemo(() => {
    const result = { all: projects.length };
    projects.forEach((p) => {
      result[p.category] = (result[p.category] || 0) + 1;
    });
    return result;
  }, []);

  const visible = useMemo(
    () =>
      projects
        .map((project, index) => ({ project, number: index + 1 }))
        .filter(({ project }) => filter === "all" || project.category === filter),
    [filter],
  );

  const toggle = (id) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          index="02"
          label="projects"
          title="Personal Projects"
          id="projects-title"
        >
          Everything I&apos;ve built outside of work, from ML experiments to full web apps.
        </SectionHeading>

        <div className={styles.toolbar}>
          <div className={styles.filters} role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`${styles.chip} ${filter === category.id ? styles.chipOn : ""}`}
                aria-pressed={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
                <span className={styles.count}>{counts[category.id] || 0}</span>
              </button>
            ))}
          </div>
          <p className={styles.summary} aria-live="polite">
            Showing {visible.length} of {projects.length}
          </p>
        </div>

        <ul className={styles.grid}>
          {visible.map(({ project, number }) => {
            const isOpen = expanded.has(project.id);
            return (
              <li key={project.id} className={styles.cell}>
                <article className={styles.card}>
                  <div className={styles.top}>
                    <Image
                      src={project.image}
                      alt=""
                      width={56}
                      height={56}
                      sizes="56px"
                      className={styles.thumb}
                    />
                    <span className={`${styles.status} ${styles[project.status]}`}>
                      <i aria-hidden="true" />
                      {statusLabels[project.status]}
                    </span>
                  </div>

                  <p className={styles.meta}>
                    <span>{String(number).padStart(2, "0")}</span>
                    <span aria-hidden="true">/</span>
                    <span>{categoryLabels[project.category]}</span>
                    <span aria-hidden="true">/</span>
                    <span>{project.date}</span>
                  </p>

                  <h3 className={styles.title}>{project.title}</h3>

                  <p
                    id={`desc-${project.id}`}
                    className={`${styles.desc} ${isOpen ? "" : styles.clamp}`}
                  >
                    {project.description}
                  </p>
                  <button
                    type="button"
                    className={styles.more}
                    aria-expanded={isOpen}
                    aria-controls={`desc-${project.id}`}
                    onClick={() => toggle(project.id)}
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>

                  <ul className={styles.tech} aria-label="Technologies">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className={styles.footer}>
                    <ProjectLink project={project} />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
