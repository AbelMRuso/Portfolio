import profil from "../../images/profil_image.png";
import styles from "../hero/Hero.module.scss";

function Hero() {
    return (
        <section className={styles.contenair}>
            <img className={styles.heroImg} src={profil} alt="Image de profil" />
            <div>
                <h1>Abel Martínez Ruso</h1>
                <h2 className={styles.subtitle}>Développeur full stack</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non beatae voluptatem illum ipsum</p>
            </div>
        </section>
    );
}

export default Hero;
