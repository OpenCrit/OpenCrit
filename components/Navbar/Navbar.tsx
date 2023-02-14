import Button from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';
import styles from './Navbar.module.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const handlePost = () => {};
    const handleLogIn = () => {};
    const handleProfile = () => {};

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
                <img src="hello" />
            </div>
            <div className={styles.searchBarContainer}>
                <SearchBar />
            </div>
            <div className={styles.buttonContainer}>
                <Button onClick={handlePost}>Post</Button>
                <Button onClick={handleLogIn}>Log In</Button>
                <Button onClick={handleProfile} icon={faUser} />
            </div>
        </div>
    );
}
