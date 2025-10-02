import styles from "../formation-card/CardFormation.module.scss";

function CardFormation({ title, subtitle, date, children, layout = "side" }) {
    return (
        <article className={`${styles.card} ${styles[layout]}`}>
            <div className={styles.contenair}>
                <h3 className={styles.title}>{title}</h3>
                {subtitle && <p>{subtitle}</p>}
                {date && <span>{date}</span>}
            </div>

            {children && <div className={styles.iconsContenair}>{children}</div>}
        </article>
    );
}

export default CardFormation;
