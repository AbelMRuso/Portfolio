import styles from "../navSection/navSection.module.scss";
import { FaAddressCard, FaCode, FaEnvelope, FaGraduationCap, FaHouseUser } from "react-icons/fa";
import { useState, useEffect } from "react";

function NavSection({ activeSection, onNavigate }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 912);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 912);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`${styles.section} ${isMobile ? styles.hidden : ""}`}>
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
                <li onClick={() => onNavigate("projects")} className={activeSection === "projects" ? styles.active : ""}>
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
