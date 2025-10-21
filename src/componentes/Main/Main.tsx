import styles from "./styles.module.css";

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return <div className={styles.main}>{children}</div>;
}
