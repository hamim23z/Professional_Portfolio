import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaKaggle, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import { profile } from "../data/profile";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import styles from "./Hero.module.css";

const stats = [
  { value: String(experience.length), label: "roles & internships" },
  { value: String(projects.length), label: "projects built" },
  { value: "10,000", label: "steps averaged every day" },
  { value: "7", label: "states/countries visited" },
];

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: FaGithub },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: profile.links.kaggle, label: "Kaggle", Icon: FaKaggle },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FaEnvelope },
];

export default function Hero() {
  return (
    <section id="about" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <Image
              src="/github_cool.jpg"
              alt=""
              width={44}
              height={44}
              className={styles.avatar}
              priority
            />
            <span className={styles.badgeText}>
              <span className={styles.dot} aria-hidden="true" />
              CCNY · BS Computer Science
            </span>
          </div>

          <h1 id="hero-title" className={styles.title}>
            {profile.name}
          </h1>
          <p className={styles.role}>
            <span aria-hidden="true">&gt; </span>
            {profile.role}
            <span className={styles.caret} aria-hidden="true" />
          </p>

          <div className={styles.about}>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              View projects
              <FaArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className={styles.secondary}>
              Get in touch
            </a>
          </div>

          <ul className={styles.socials} aria-label="Social links">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.social}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.terminal} role="img" aria-label="Terminal window summarising Hamim's profile">
          <div className={styles.termBar} aria-hidden="true">
            <span className={styles.lights}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.termTitle}>hamim@portfolio: ~</span>
          </div>
          <pre className={styles.termBody} aria-hidden="true">
            <code>
              <span className={styles.ps}>$</span> whoami{"\n"}
              <span className={styles.out}>hamim-choudhury</span>
              {"\n\n"}
              <span className={styles.ps}>$</span> cat profile.json{"\n"}
              <span className={styles.punc}>{"{"}</span>
              {"\n  "}
              <span className={styles.key}>&quot;role&quot;</span>
              <span className={styles.punc}>: </span>
              <span className={styles.str}>&quot;Systems/Software Engineer&quot;</span>
              <span className={styles.punc}>,</span>
              {"\n  "}
              <span className={styles.key}>&quot;education&quot;</span>
              <span className={styles.punc}>: </span>
              <span className={styles.str}>&quot;BS Computer Science, CCNY&quot;</span>
              <span className={styles.punc}>,</span>
              {"\n  "}
              <span className={styles.key}>&quot;latest&quot;</span>
              <span className={styles.punc}>: </span>
              <span className={styles.str}>&quot;Systems Engineer Intern @ Bloom Energy&quot;</span>
              <span className={styles.punc}>,</span>
              {"\n  "}
              <span className={styles.key}>&quot;stack&quot;</span>
              <span className={styles.punc}>: [</span>
              <span className={styles.str}>&quot;Python&quot;</span>
              <span className={styles.punc}>, </span>
              <span className={styles.str}>&quot;JS/TS&quot;</span>
              <span className={styles.punc}>, </span>
              <span className={styles.str}>&quot;AI/ML&quot;</span>
              <span className={styles.punc}>]</span>
              {"\n"}
              <span className={styles.punc}>{"}"}</span>
              {"\n\n"}
              <span className={styles.ps}>$</span> <span className={styles.caret} />
            </code>
          </pre>
        </div>
      </div>

      <div className={`container ${styles.statsWrap}`}>
        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
