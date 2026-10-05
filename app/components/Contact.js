import { FaGithub, FaLinkedinIn, FaKaggle, FaFileLines, FaEnvelope } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import styles from "./Contact.module.css";

const channels = [
  {
    label: "LinkedIn",
    value: "in/hamimc",
    href: profile.links.linkedin,
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "hamim23z",
    href: profile.links.github,
    Icon: FaGithub,
  },
  {
    label: "Kaggle",
    value: "hamimc",
    href: profile.links.kaggle,
    Icon: FaKaggle,
  },
  {
    label: "Resume",
    value: "View on Google Drive",
    href: profile.links.resume,
    Icon: FaFileLines,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading index="04" label="contact" title="Let's build something" id="contact-title">
          Have a project, an opportunity, or just want to say hi? My inbox is open.
        </SectionHeading>

        <div className={styles.panel}>
          <a href={`mailto:${profile.email}`} className={styles.email}>
            <span className={styles.emailIcon}>
              <FaEnvelope aria-hidden="true" />
            </span>
            <span>
              <span className={styles.emailLabel}>Email</span>
              <span className={styles.emailValue}>{profile.email}</span>
            </span>
          </a>

          <ul className={styles.channels}>
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channel}
                >
                  <Icon className={styles.channelIcon} aria-hidden="true" />
                  <span className={styles.channelText}>
                    <span className={styles.channelLabel}>{label}</span>
                    <span className={styles.channelValue}>{value}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
