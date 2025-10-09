import CardFormation from "../formation-card/CardFormation";
import openclassroomLogo from "../../images/openclassrooms_logo.webp";
import styles from "../formation-card/CardFormation.module.scss";
import {
    FaCss3,
    FaPaintBrush,
    FaHtml5,
    FaReact,
    FaServer,
    FaNodeJs,
    FaDatabase,
    FaTools,
    FaGithub,
    FaSitemap,
    FaCode,
    FaFigma,
    FaJsSquare,
} from "react-icons/fa";
import stackStyles from "../stackSection/StackSection.module.scss";

function StackSection() {
    return (
        <section className={stackStyles.sectionContenair}>
            <h2>Formation et stack technologique</h2>
            <div className={stackStyles.contenair}>
                <div className={stackStyles.columnContenair}>
                    <h3>Formation</h3>
                    <CardFormation layout="side" title={"Développeur Web"} subtitle={"OpenClasroom"} date={"avril - octobre 2025"}>
                        <img className={styles.logo} src={openclassroomLogo} alt="Logo du centre de formation Open Classroom" />
                    </CardFormation>
                </div>
                <div className={stackStyles.columnContenair}>
                    <h3>Stack technologique</h3>
                    <CardFormation
                        layout="stack"
                        title={
                            <>
                                <FaPaintBrush className={styles.paintBrush} />
                                Frontend
                            </>
                        }
                    >
                        <div className={styles.tech}>
                            <FaHtml5 className={styles.icons} />
                            <span>HTML</span>
                        </div>

                        <div className={styles.tech}>
                            <FaCss3 className={styles.icons} />
                            <span>CSS</span>
                        </div>

                        <div className={styles.tech}>
                            <FaJsSquare className={styles.icons} />
                            <span>JS</span>
                        </div>

                        <div className={styles.tech}>
                            <FaReact className={styles.icons} />
                            <span>React</span>
                        </div>
                    </CardFormation>

                    <CardFormation
                        layout="stack"
                        title={
                            <>
                                <FaServer className={styles.paintBrush} />
                                Backend
                            </>
                        }
                    >
                        <div className={styles.tech}>
                            <FaNodeJs className={styles.icons} />
                            <span>Node + Express</span>
                        </div>

                        <div className={styles.tech}>
                            <FaDatabase className={styles.icons} />
                            <span>MongoDB</span>
                        </div>
                    </CardFormation>

                    <CardFormation
                        layout="stack"
                        title={
                            <>
                                <FaTools className={styles.paintBrush} />
                                Tools
                            </>
                        }
                    >
                        <div className={styles.tech}>
                            <FaGithub className={styles.icons} />
                            <span>Github</span>
                        </div>

                        <div className={styles.tech}>
                            <FaSitemap className={styles.icons} />
                            <span>Notion</span>
                        </div>

                        <div className={styles.tech}>
                            <FaCode className={styles.icons} />
                            <span>VSCode</span>
                        </div>

                        <div className={styles.tech}>
                            <FaFigma className={styles.icons} />
                            <span>Figma</span>
                        </div>
                    </CardFormation>
                </div>
            </div>
        </section>
    );
}

export default StackSection;
