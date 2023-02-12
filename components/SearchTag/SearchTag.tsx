import styles from './SearchTag.module.css';

export default function SearchTag({
    children,
    color,
}: {
    children: String;
    color: String;
}) {
    return (
        <div className={styles.searchTagContainer}>
            <div
                className={styles.dot}
                style={{ backgroundColor: color as string }}
            />
            <div>{children}</div>
        </div>
    );
}
