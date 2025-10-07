import { FaIdCard } from "react-icons/fa";
import styles from "../header/Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className={styles.headerContenair}>
                <p className={styles.logo}>
                    <FaIdCard />
                    "LOGO"
                </p>
                <nav className={styles.navContenair}>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;
