import styles from './OwnPostView.module.css';

export default function OwnPostView({ post }: { post: any }) {
    const { createdDate, title, desc, src, likes, critiques } = post;

    return (
        <div className={styles.postContainer}>
            <div className={styles.postHeader}>
                {`Posted ${createdDate} days ago`}
            </div>
            <div className={styles.delete}>
                <button className={styles.buttonDelete}>DELETE</button>
            </div>
            <div className={styles.edit}>
                <button className={styles.buttonEdit}>EDIT</button>
            </div>
            <div className={styles.postTitle}>{title}</div>
            <div className={styles.postDesc}>{desc}</div>
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
