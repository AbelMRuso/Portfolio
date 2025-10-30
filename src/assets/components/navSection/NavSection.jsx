import styles from "../navSection/navSection.module.scss";
import { FaAddressCard, FaCode, FaEnvelope, FaGraduationCap, FaHouseUser } from "react-icons/fa";

function NavSection({ activeSection, onNavigate }) {
    return (
        <nav className={styles.section}>
            <ul className={styles.liste}>
                <li onClick={() => onNavigate("home")} className={activeSection === "home" ? styles.active : ""}>
                    <FaHouseUser />
                </li>
                <li onClick={() => onNavigate("about")} className={activeSection === "about" ? styles.active : ""}>
                    <FaAddressCard />
                </li>
                <li onClick={() => onNavigate("stack")} className={activeSection === "stack" ? styles.active : ""}>
                    <FaGraduationCap />
                </li>
                <li onClick={() => onNavigate("projects")} className={activeSection === "projets" ? styles.active : ""}>
                    <FaCode />
                </li>
                <li onClick={() => onNavigate("contact")} className={activeSection === "contact" ? styles.active : ""}>
                    <FaEnvelope />
                </li>
            </ul>
        </nav>
    );
}

export default NavSection;
