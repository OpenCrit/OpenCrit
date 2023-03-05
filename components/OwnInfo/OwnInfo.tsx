import styles from './OwnInfo.module.css';

export default function OwnInfo({ user }: { user: any }) {
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
            <div className={styles.editBio}>
                <button className={styles.buttonEdit}>Edit Bio</button>
            </div>
            <div className={styles.userSettings}>
                <button className={styles.buttonEdit}>My Settings</button>
            </div>
            <div className={styles.deleteProfile}>
                <button className={styles.buttonDelete}>DELETE Profile</button>
            </div>
        </div>
    );
}
