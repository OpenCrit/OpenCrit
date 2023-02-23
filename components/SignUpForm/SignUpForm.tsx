import styles from './SignUpForm.module.css';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function SignUpForm() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.userNameText}>Username: *</div>
            <input
                className={styles.userNameInput}
                type="text"
                placeholder="Create your display username"
            />
            <div className={styles.addBiosText}>
                Add an artist bios statement: *
            </div>
            <div className={styles.biosReqText}>Minimum 250 characters</div>
            <textarea
                rows={10}
                cols={100}
                maxLength={600}
                onChange={(e) => setCount(e.target.value.length)}
                placeholder="A short description about yourself and your inspirations!"
                className={styles.biosTextBox}
            />
            <div className={styles.charCount}>{`${count}/600 Characters`}</div>
            <div className={styles.googleButton}>
                <GoogleLogin
                    text="signup_with"
                    width="400"
                    onSuccess={() => {}}
                />
            </div>
        </div>
    );
}
