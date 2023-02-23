import styles from './UserSettings.module.css';
import Button from 'components/Button/Button';
import { useState } from 'react';

export default function UserSettings() {
    const changeUserName = () => {};
    const updateBios = () => {};

    const [count, setCount] = useState(0);

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
                            Linked Email
                        </div>
                        <div className={styles.currentLinkedEmailText}>
                            HelloIAmYouAndYouAreMe@gmail.com
                            ----------CHANGE-------------
                        </div>
                    </div>
                    <div className={styles.changeUserName}>
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
                                inspirations! (Minimum 250 characters)
                            </div>
                            <div>
                                <textarea
                                    rows={6}
                                    cols={100}
                                    maxLength={600}
                                    onChange={(e) =>
                                        setCount(e.target.value.length)
                                    }
                                    className={styles.biosTextBox}
                                >
                                    ---PULL FROM BACKEND AND CHANGE DEFAULT
                                    CHARACTER COUNT USESTATE---
                                </textarea>
                                <div className={styles.charCount}>
                                    {`${count}/600 Characters`}
                                </div>
                            </div>
                        </div>
                        <div className={styles.updateBiosButton}>
                            <Button onClick={updateBios}>Update</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
