import styles from './UserInfo.module.css';

export default function UserInfo({ user }: { user: any }) {
    const { name, profileImage, bio, date, points } = user;
    return (
        <div className={styles.UserInfo}>
            <div className={styles.profilePicAndName}>
                <img
                    src={profileImage as string}
                    className={styles.profilePic}
                />
                <p className={styles.name}>{`@${name}`}</p>
            </div>
            <div className={styles.bio}>{`Bio: ${bio}`}</div>
            <div className={styles.whiteBackground}>{`Date: ${date}`}</div>
            <div className={styles.whiteBackground}>{`Points ${points}`}</div>
        </div>
    );
}
