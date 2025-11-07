import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../contactForm/ContactForm.module.scss";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const { t } = useTranslation("common");

    const form = useRef();
    const [statusMsg, setStatusMsg] = useState("");
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
            () => {
                setStatusMsg("✅ Message envoyé avec succès.");
                form.current.reset();
                setTimeout(() => {
                    setStatusMsg("");
                }, 3000);
            },
            (error) => {
                setStatusMsg("❌ Error d'envoi. Réessayez plus tard");
                console.error(error);
                setTimeout(() => {
                    setStatusMsg("");
                }, 3000);
            }
        );
    };

    return (
        <div className={styles.contenair}>
            <h3>{t("contactForm.title")}</h3>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <label htmlFor="name">{t("contactForm.name")}</label>
                <input type="text" id="name" name="user_name" required />

                <label htmlFor="email">{t("contactForm.email")}</label>
                <input type="email" id="email" name="user_email" required />

                <label htmlFor="message">{t("contactForm.message")}</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <div className={styles.button}>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
            {statusMsg && <p className={styles.statusMsg}>{statusMsg}</p>}
        </div>
    );
}
