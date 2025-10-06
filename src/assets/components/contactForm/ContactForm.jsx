import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../contactForm/ContactForm.module.scss";

export default function ContactForm() {
    const form = useRef();
    const [statusMsg, setStatusMsg] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "TU_SERVICE_ID", // tu Service ID
                "TU_TEMPLATE_ID", // tu Template ID
                form.current,
                "TU_PUBLIC_KEY" // tu Public Key
            )
            .then(
                () => {
                    setStatusMsg("✅ Message envoyé avec succés.");
                    form.current.reset();
                },
                (error) => {
                    setStatusMsg("❌ Error d'envoi.");
                    console.error(error);
                }
            );
    };

    return (
        <div className={styles.contenair}>
            <h3>¿Prêt pour travailler ensemble?</h3>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="user_name" required />

                <label htmlFor="email">Adresse mail</label>
                <input type="email" id="email" name="user_email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
            {statusMsg && <p className="status">{statusMsg}</p>}
        </div>
    );
}
