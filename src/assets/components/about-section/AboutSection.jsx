import AboutBlock from "../about-block/AboutBlock";
import styles from "../about-section/AboutSection.module.scss";
import img1 from "../../../../public/images/nina-1.png";
import img2 from "../../../../public/images/nina-2.png";

function AboutSection() {
    return (
        <>
            <main className={styles.contenair}>
                <h1>Mon histoire</h1>
                <AboutBlock
                    image={img1}
                    title={"Contexte"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non beatae voluptatem illum ipsum"}
                />
                <AboutBlock
                    image={img2}
                    title={"Parcours profesionnels"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non beatae voluptatem illum ipsum"}
                    reverse
                />
                <AboutBlock
                    image={img1}
                    title={"Methodologie et stack"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non beatae voluptatem illum ipsum"}
                />
                <AboutBlock
                    image={img2}
                    title={"Projets et ambitions"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non beatae voluptatem illum ipsum"}
                    reverse
                />
            </main>
        </>
    );
}

export default AboutSection;
