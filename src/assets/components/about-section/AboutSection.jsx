import styles from "../about-section/AboutSection.module.scss";
import profile from "../../images/profil-image.webp";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const AboutSection = forwardRef((props, ref) => {
    const { t } = useTranslation("common");
    return (
        <>
            <section ref={ref} className={styles.contenair} data-section="about">
                <div>
                    <h2>{t("about.title")}</h2>
                    <h3>{t("about.subTitle")}</h3>
                    <span className={styles.separateur}></span>
                </div>

                <div className={styles.flex}>
                    <div className={styles.textDistribution}>
                        <p>{t("about.paragraph1")}</p>
                        <br />
                        <p>{t("about.paragraph2")}</p>
                        <br />
                        {t("about.paragraph3")}
                    </div>
                    <img src={profile} alt="" />
                </div>
            </section>
        </>
    );
});

export default AboutSection;
