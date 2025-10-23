import { Header } from "../Header/Header";
import styles from "./styles.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className={styles.containerPage}>
    <Header/>
    {children}
    </div>;
}
