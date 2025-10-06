import { FaIdCard } from "react-icons/fa";
import styles from "../header/Header.module.scss";

function Header() {
    return (
        <>
            <header className={styles.headerContenair}>
                <p className={styles.logo}>
                    <FaIdCard />
                    "LOGO"
                </p>
                <nav className={styles.navContenair}>
                    <a href="">Accueil</a>
                    <a href="">À propos</a>
                </nav>
            </header>
        </>
    );
}

export default Header;
