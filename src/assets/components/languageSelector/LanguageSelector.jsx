import esFlag from "../../images/spain.png";
import frFlag from "../../images/france.png";
import enFlag from "../../images/united-kingdom.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "../languageSelector/LanguageSelector.module.scss";

function LanguageSelector() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "es", label: "Es", flag: esFlag },
        { code: "fr", label: "Fr", flag: frFlag },
        /* { code: "en", label: "English", flag: { enFlag } }, */
    ];

    const currentLang = languages.find((lang) => lang.code === i18n.language);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className={styles.langContainer}>
            {/* Botón principal (idioma activo) */}
            <button className={styles.langButton} onClick={() => setOpen((prev) => !prev)}>
                <img src={currentLang.flag} alt={currentLang.label} className={styles.flag} />
            </button>

            {/* Dropdown */}
            {open && (
                <ul className={styles.dropdown}>
                    {languages
                        .filter((lang) => lang.code !== i18n.language) // no mostrar el actual
                        .map((lang) => (
                            <li key={lang.code} onClick={() => changeLanguage(lang.code)} className={styles.option}>
                                <img src={lang.flag} alt={lang.label} className={styles.flag} />
                                <span>{lang.label}</span>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageSelector;
