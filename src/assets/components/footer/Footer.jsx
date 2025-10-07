import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../footer/Footer.module.scss";
import ContactForm from "../contactForm/ContactForm";

function Footer() {
    return (
        <>
            <footer className={styles.footerContenair}>
                <div>
                    <ContactForm />
                </div>
                <div className={styles.liensContenair}>
                    <a target="_blank" href="https://github.com/AbelMRuso">
                        <FaGithub />{" "}
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/abel-martínez-ruso">
                        <FaLinkedin />{" "}
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
