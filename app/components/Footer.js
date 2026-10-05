import { profile } from "../data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          <span className={styles.prompt}>~/</span>© {new Date().getFullYear()}{" "}
          {profile.name}
        </p>
        <p>
          Built with Next.js ·{" "}
          <a href={profile.repoUrl} target="_blank" rel="noopener noreferrer">
            view source
          </a>
        </p>
      </div>
    </footer>
  );
}
