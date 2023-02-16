import styles from './SignIn.module.css';
import React from 'react';
import PaintblobRed from '../../public/svg/PaintblobRed.svg';
import PaintblobBlue from '../../public/svg/PaintblobBlue.svg';
import PaintblobYellow from '../../public/svg/PaintblobYellow.svg';
import { GoogleLogin } from '@react-oauth/google';

export default function SignIn() {
    return (
        <div className={styles.signUpContainer}>
            <img src={PaintblobBlue.src} className={styles.paintBlue} />
            <img src={PaintblobRed.src} className={styles.paintRed} />
            <img src={PaintblobYellow.src} className={styles.paintYellow} />
            <div className={styles.signInContent}>
                <div className={styles.signInText}>Sign In</div>
                <div className={styles.googleButton}>
                    <GoogleLogin onSuccess={() => {}} />
                </div>
                <div className={styles.orText}>OR</div>
                <div className={styles.notPartText}>
                    Not a part of OpenCrit yet?
                </div>
                <div className={styles.signUpText}>
                    <a
                        href="http://localhost:3000/signup"
                        className={styles.signUpTextStyling}
                    >
                        Sign up today!
                    </a>
                </div>
            </div>
        </div>
    );
}
