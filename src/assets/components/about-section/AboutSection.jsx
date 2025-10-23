import styles from "../about-section/AboutSection.module.scss";
import profile from "../../images/profil-image.webp";

function AboutSection() {
    return (
        <>
            <section className={styles.contenair}>
                <h2>Bonjour, je suis Abel.</h2>
                <div className={styles.flex}>
                    <div className={styles.textDistribution}>
                        <h3>Développeur junior passionné par le front-end et le design d’interfaces.</h3>
                        <span className={styles.separateur}></span>
                        <p>
                            J’ai découvert le monde du développement presque par hasard, ce qui a immédiatement éveillé ma curiosité. J’ai commencé à
                            me former de manière autonome en juillet 2024, puis j’ai suivi un cursus complet de développement Full Stack que j’ai
                            achevé en octobre 2025. Bien que je nourrisse plusieurs projets personnels, mon objectif actuel est de rejoindre une
                            équipe afin de continuer à progresser, partager mes expériences et contribuer activement à des projets stimulants.{" "}
                        </p>
                        <br />
                        <p>
                            Avant d’être développeur, j’ai été professeur pendant la majeure partie de ma vie professionnelle. Aujourd’hui, les
                            compétences acquises en méthodologie, adaptabilité, communication et empathie me permettent d’être structuré tout en
                            restant flexible dans mes projets, toujours avec un objectif particulier en tête.
                        </p>
                        <br />
                        Originaire d’Alicante, en Espagne, ma passion pour le surf m’a amené jusqu’à la côte atlantique française, où j’ai donné un
                        nouvel élan à ma carrière professionnelle. Lorsqu’il ne s’agit pas de programmation, vous me trouverez probablement à la
                        plage, sur un terrain de football ou plongé dans un jeu vidéo.
                    </div>
                    <img src={profile} alt="" />
                </div>
            </section>
        </>
    );
}

export default AboutSection;
