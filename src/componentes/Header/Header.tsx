import styles from "./styles.module.css"
import Logo from "../../assets/LogoGit.svg"

export function Header() {
    return <header className={styles.header}>
        <img src={Logo} alt="" />
    </header>
}