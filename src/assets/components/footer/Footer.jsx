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
                    <a href="">
                        <FaGithub />{" "}
                    </a>
                    <a href="">
                        <FaLinkedin />{" "}
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
