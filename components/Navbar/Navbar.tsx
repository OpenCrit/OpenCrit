import Button from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';
import styles from './Navbar.module.css';
import DropdownButton from 'components/DropdownButton/DropdownButton';

export default function Navbar() {
    const handlePost = () => {};
    const handleLogIn = () => {};

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
                <DropdownButton />
            </div>
        </div>
    );
}
