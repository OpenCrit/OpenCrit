import styles from './Critique.module.css';

export default function Critique({ critique }: { critique: any }) {
    const { profilePic, critiquer, critiqueDate, comment } = critique;
    return (
        <div className={styles.critiqueContainer}>
            <div className={styles.profilePicAndName}>
                <img src={profilePic as string} className={styles.profilePic} />
                <p className={styles.critiquer}>{`${critiquer}`}</p>
                <div
                    className={styles.critiqueDate}
                >{`${critiqueDate} days ago`}</div>
            </div>
            <div className={styles.comment}>{`${comment}`}</div>
        </div>
    );
}
