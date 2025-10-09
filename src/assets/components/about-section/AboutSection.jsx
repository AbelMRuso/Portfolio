import AboutBlock from "../about-block/AboutBlock";
import styles from "../about-section/AboutSection.module.scss";
import imgContext from "../../../assets/images/img-contexte.jpeg";
import imgParcours from "../../../assets/images/img-parcours.jpg";
import imgStack from "../../../assets/images/img-stack2.jpg";
import imgAmbitions from "../../../assets/images/img-ambitions.jpg";

function AboutSection() {
    return (
        <>
            <main className={styles.contenair}>
                <h1>Mon histoire</h1>
                <AboutBlock
                    image={imgContext}
                    alt={"Abel se promenant sur la plage de Seignosse, dans les Landes, avec sa chienne"}
                    title={"Contexte"}
                    text={
                        <>
                            Toujours en quête de nouveaux défis, je me suis installé sur la côte Atlantique pour apprendre une nouvelle langue et
                            vivre de nouvelles expériences, tout en poursuivant ma passion pour le surf.<br></br>
                            <br></br> Mon intérêt pour la programmation est né lorsque, travaillant comme coordinateur logistique, un bug m’a amené à
                            collaborer avec des développeurs : ce moment a déclenché une véritable étincelle et a éveillé ma curiosité pour le code.
                        </>
                    }
                />
                <AboutBlock
                    image={imgParcours}
                    alt={"Abel réalisant une manœuvre en paddle surf durant sa période de moniteur de sports nautiques"}
                    title={"Parcours profesionnels"}
                    text={
                        <>
                            Mon parcours a toujours été guidé par le sport et l’enseignement. J’ai passé sept ans à encadrer des disciplines
                            nautiques, coordonner des équipes et gérer un centre, tout en restant en contact avec la nature et les personnes.<br></br>
                            <br></br> Ma formation en éducation primaire m’a apporté des compétences pédagogiques, psychologiques et méthodologiques
                            solides. Aujourd’hui, je mets ces acquis et cette expérience au service de ma reconversion vers le développement web, un
                            domaine où je peux allier rigueur, curiosité et goût pour les défis."
                        </>
                    }
                    reverse
                />
                <AboutBlock
                    image={imgStack}
                    alt={"Écran affichant un éditeur de code."}
                    title={"Methodologie et stack"}
                    text={
                        <>
                            Ayant principalement travaillé en solo, j’ai appris à apprécier l’organisation et le suivi rigoureux des projets,
                            notamment grâce aux méthodes agiles et à l’utilisation d’un tableau Kanban.<br></br>
                            <br></br> Bien que formé en full stack, c’est React qui me passionne le plus aujourd’hui, et je suis enthousiaste à l’idée
                            de relever de nouveaux défis, d’apprendre constamment et de contribuer à des projets concrets et innovants."
                        </>
                    }
                />
                <AboutBlock
                    image={imgAmbitions}
                    alt={"Image affichant, en format JS : si le cerveau n’est pas vide, continue à coder, sinon, demande un café."}
                    title={"Projets et ambitions"}
                    text={
                        <>
                            Mon rêve en tant que développeur est de créer une application pour les établissements scolaires qui motive les élèves via
                            la gamification et une interface en pixel art, tout en facilitant l’organisation et le contact avec les parents.<br></br>
                            <br></br> Pour y parvenir, je commence par travailler avec d’autres développeurs, réaliser des projets web pour de petites
                            entreprises et aider les indépendants, afin d’acquérir expérience et contacts pour concrétiser mon objectif.
                        </>
                    }
                    reverse
                />
            </main>
        </>
    );
}

export default AboutSection;
