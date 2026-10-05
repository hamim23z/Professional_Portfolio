import styles from "./SectionHeading.module.css";

export default function SectionHeading({ index, label, title, children, id }) {
  return (
    <header className={styles.heading}>
      <p className={styles.eyebrow}>
        <span className={styles.index}>{index}</span>
        <span className={styles.rule} aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {children ? <p className={styles.blurb}>{children}</p> : null}
    </header>
  );
}
