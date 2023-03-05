import SearchTag from 'components/SearchTag/SearchTag';
import styles from './PostSpecific.module.css';
import Critique from 'components/Critique/critique';

export default function PostSpecific({ post }: { post: any }) {
    const { author, createdDate, title, desc, src, likes, critiques } = post;
    const searchTags = [
        { name: 'Painting', color: '#ffa9a9' },
        { name: 'Illustration', color: '#efb190' },
        { name: 'Sculpture', color: '#9bd634' },
    ];

    return (
        <div className={styles.postContainer}>
            <div className={styles.postHeader}>
                {`Posted by ${author} ${createdDate} days ago`}
            </div>
            <div className={styles.postTitle}>{title}</div>
            <div className={styles.postDesc}>{desc}</div>
            <div className={styles.postContent}>
                <img src={src} className={styles.image} />
            </div>
            <div className={styles.searchTagContainer}>
                {searchTags.map((tagObject) => (
                    <div>
                        <SearchTag color={tagObject['color']}>
                            {tagObject['name']}
                        </SearchTag>
                    </div>
                ))}
            </div>
            <div className={styles.postFooter}>
                <div className={styles.stats}>{`${likes} Likes`}</div>
                <div className={styles.stats}>
                    {`${critiques.length} Critiques`}
                </div>
                <button className={styles.shareButton}>Share</button>
            </div>
            <hr />
            <div className={styles.critiqueHeader}>Critiques</div>
            <div className={styles.critiqueContainer}>
                <Critique
                    critique={{
                        profilePic:
                            'https://media.printables.com/media/prints/375908/images/3160471_a5e402d6-017e-4791-b62c-500ea716844a/thumbs/cover/1280x960/jpeg/020ae98af02c4b6da2c8d1e1584cded3.webp',
                        critiquer: 'critiquer',
                        critiqueDate: 5,
                        comment:
                            'comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment comment',
                    }}
                />
            </div>
        </div>
    );
}
