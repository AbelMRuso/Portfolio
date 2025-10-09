import { FaCode, FaIdCard } from "react-icons/fa";
import styles from "../header/Header.module.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header className={styles.headerContenair}>
                <Link to="/" className={styles.logo}>
                    <FaCode className={styles.icon} />
                    MR.Dev
                </Link>
                <nav className={styles.navContenair}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                        Accueil
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
                        À propos
                    </NavLink>
                </nav>
            </header>
        </>
    );
}

export default Header;
