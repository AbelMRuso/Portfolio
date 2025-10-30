import styles from "../navSection/navSection.module.scss";
import { FaAddressCard, FaCode, FaEnvelope, FaGraduationCap, FaHouseUser } from "react-icons/fa";

function NavSection() {
    return (
        <nav className={styles.section}>
            <ul className={styles.liste}>
                <li>
                    <FaHouseUser />
                </li>
                <li>
                    <FaAddressCard />
                </li>
                <li>
                    <FaGraduationCap />
                </li>
                <li>
                    <FaCode />
                </li>
                <li>
                    <FaEnvelope />
                </li>
            </ul>
        </nav>
    );
}

export default NavSection;
