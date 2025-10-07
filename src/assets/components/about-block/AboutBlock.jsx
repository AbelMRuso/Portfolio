import styles from "../about-block/AboutBlock.module.scss";

function AboutBlock({ image, title, text, reverse }) {
    return (
        <>
            <section className={`${styles.contenair} ${reverse ? styles.reverse : ""}`}>
                <img src={image} alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>{text} </p>
                </div>
            </section>
        </>
    );
}

export default AboutBlock;
