import styles from "../formation-card/CardFormation.module.scss";

function CardFormation({ title, subtitle, date, children, layout = "side" }) {
    return (
        <article className={`card ${layout}`}>
            <div className={styles.contenair}>
                <h3>{title}</h3>
                {subtitle && <p>{subtitle}</p>}
                {date && <span>{date}</span>}
            </div>

            {children && <div>{children}</div>}
        </article>
    );
}

export default CardFormation;
