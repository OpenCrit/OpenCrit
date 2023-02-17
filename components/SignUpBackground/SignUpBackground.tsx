import styles from './SignUpBackground.module.css';
import PaintblobRed2 from '../../public/svg/PaintblobRed2.svg';
import PaintblobBlue2 from '../../public/svg/PaintblobBlue2.svg';
import PaintblobYellow2 from '../../public/svg/PaintblobYellow2.svg';

export default function SignUpBackground() {
    return (
        <div className={styles.signUpBackground}>
            <img src={PaintblobBlue2.src} className={styles.paintBlue} />
            <img src={PaintblobRed2.src} className={styles.paintRed} />
            <img src={PaintblobYellow2.src} className={styles.paintYellow} />
        </div>
    );
}
