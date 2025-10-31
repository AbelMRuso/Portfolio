import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../footer/Footer.module.scss";
import ContactForm from "../contactForm/ContactForm";
import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
    return (
        <>
            <footer ref={ref} className={styles.footerContenair} data-section="contact">
                <div>
                    <ContactForm />
                </div>
                <div className={styles.liensContenair}>
                    <a target="_blank" aria-label="Profil GitHub de Abel Martínez Ruso" href="https://github.com/AbelMRuso">
                        <FaGithub />{" "}
                    </a>
                    <a target="_blank" aria-label="Profil LinkedIn de Abel Martínez Ruso" href="https://www.linkedin.com/in/abel-martínez-ruso">
                        <FaLinkedin />{" "}
                    </a>
                </div>
            </footer>
        </>
    );
});

export default Footer;
