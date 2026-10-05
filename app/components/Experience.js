import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="01"
          label="experience"
          title="Professional Experience"
          id="experience-title"
        >
          Internships and roles building software, data tools, and ML systems.
        </SectionHeading>

        <ol className={styles.timeline}>
          {experience.map((role, i) => (
            <li key={role.id} className={styles.item}>
              <div className={styles.when}>
                <time>{role.period}</time>
                {i === 0 ? <span className={styles.latest}>latest</span> : null}
              </div>
              <span className={styles.node} aria-hidden="true" />

              <article className={styles.card}>
                <header className={styles.head}>
                  <Image
                    src={role.logo}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.logo}
                  />
                  <div>
                    <h3 className={styles.role}>{role.title}</h3>
                    <p className={styles.company}>{role.company}</p>
                  </div>
                </header>

                {role.metrics.length > 0 ? (
                  <ul className={styles.metrics} aria-label="Highlights">
                    {role.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                ) : null}

                <ul className={styles.bullets}>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <ul className={styles.tags} aria-label="Technologies">
                  {role.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
