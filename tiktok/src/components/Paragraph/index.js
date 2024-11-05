import styles from  "./paragraph.module.css"
import clsx from "clsx";

function Paragraph() {
    return (
        <div>
            <p className={clsx(styles.paragraph, styles.title, styles.t40)}>This is my Paragraph 1</p>
            <p className={styles.title}>This is my Paragraph 2 test css (My tile) active? - (My tile) no active</p>
            <button className={clsx(styles.btn)}>More</button>
            <button className={clsx(styles.btn, {
                [styles.active]: true,
            })}>Primary</button>
        </div>
    )
}

export default Paragraph;