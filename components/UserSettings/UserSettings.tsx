import styles from './UserSettings.module.css';
import Button from 'components/Button/Button';

export default function UserSettings() {
    const changeUserName = () => {};
    const updateBios = () => {};
    const changeProfilePic = () => {};

    return (
        <div className={styles.settingsContainer}>
            <div className={styles.settingsTitle}>User Settings</div>
            <div className={styles.settingsBody}>
                <div className={styles.accountSettingsTitle}>
                    Account Settings
                </div>
                <div className={styles.settings}>
                    <div className={styles.linkedEmail}>
                        <div className={styles.linkedEmailText}>
                            Linked Email----------CHANGE-------------
                        </div>
                        <div className={styles.currentLinkedEmailText}>
                            HelloIAmYouAndYouAreMe@gmail.com
                        </div>
                    </div>
                    <div className={styles.changeUsername}>
                        <div className={styles.changeUserNameDetails}>
                            <div className={styles.userNameText}>User Name</div>
                            <div className={styles.currentUserNameText}>
                                @Current User Name
                                Here--------------CHANGE------------
                            </div>
                        </div>
                        <div className={styles.changeUserNameButton}>
                            <Button onClick={changeUserName}>Change</Button>
                        </div>
                    </div>
                    <div className={styles.updateBios}>
                        <div className={styles.updateBiosDetails}>
                            <div className={styles.updateBiosText}>
                                Bios & Artist Statement
                            </div>
                            <div className={styles.updateBiosDescriptionText}>
                                A short description about yourself and your
                                inspirations!
                            </div>
                            <div className={styles.biosBox}></div>
                        </div>
                        <div className={styles.updateBiosButton}>
                            <Button onClick={updateBios}>Update</Button>
                        </div>
                    </div>
                    <div className={styles.changeProfilePic}>
                        <div className={styles.changeProfilePicDetails}>
                            <div className={styles.changeProfilePicText}>
                                Change Profile Picture
                            </div>
                            <div className={styles.changeProfilePicDetailText}>
                                Images must be .png or .jpg format
                            </div>
                            <div className={styles.currentProfilePic}></div>
                        </div>
                        <div className={styles.changeProfilePicButton}>
                            <Button onClick={changeProfilePic}>Change</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
