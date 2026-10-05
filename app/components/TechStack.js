import SectionHeading from "./SectionHeading";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlask,
  SiPandas,
  SiScikitlearn,
  SiOpenai,
  SiClaude,
  SiDocker,
  SiGit,
  SiSupabase,
} from "react-icons/si";
import { stackGroups } from "../data/stack";
import styles from "./TechStack.module.css";

const icons = {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlask,
  SiPandas,
  SiScikitlearn,
  SiOpenai,
  SiClaude,
  SiDocker,
  SiGit,
  SiSupabase,
};

export default function TechStack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <div className="container">
        <SectionHeading index="03" label="stack" title="Tech Stack" id="stack-title">
          The languages, frameworks, and tools I reach for most.
        </SectionHeading>

        <div className={styles.groups}>
          {stackGroups.map((group) => (
            <div key={group.id} className={styles.group}>
              <h3 className={styles.groupTitle}>
                <span aria-hidden="true">{"// "}</span>
                {group.title}
              </h3>
              <ul className={styles.list}>
                {group.items.map((item) => {
                  const Icon = icons[item.icon];
                  return (
                    <li
                      key={item.name}
                      className={styles.item}
                      style={{ "--brand": item.color }}
                    >
                      <Icon className={styles.icon} aria-hidden="true" />
                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
