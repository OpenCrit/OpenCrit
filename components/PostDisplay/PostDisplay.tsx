import styles from './PostDisplay.module.css';

export default function PostDisplay({ post }: { post: any }) {
    const { author, createdDate, title, src, likes, critiques } = post;

    return (
        <div className={styles.postContainer}>
            <div className={styles.postHeader}>
                {`Posted by ${author} ${createdDate} days ago`}
            </div>
            <div className={styles.postTitle}>{title}</div>
            <div className={styles.postContent}>
                <img src={src} className={styles.image} />
            </div>
            <div className={styles.postFooter}>
                <div className={styles.stats}>{`${likes} Likes`}</div>
                <div className={styles.stats}>
                    {`${critiques.length} Critiques`}
                </div>
                <button className={styles.shareButton}>Share</button>
            </div>
        </div>
    );
}
