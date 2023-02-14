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
                <img src="https://media.printables.com/media/prints/375908/images/3160471_a5e402d6-017e-4791-b62c-500ea716844a/thumbs/cover/1280x960/jpeg/020ae98af02c4b6da2c8d1e1584cded3.webp" />
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
