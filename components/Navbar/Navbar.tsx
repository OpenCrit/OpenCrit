import Button from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';
import styles from './Navbar.module.css';
import DropdownButton from 'components/DropdownButton/DropdownButton';
import SignIn from 'components/SignIn/SignIn';
import { useState } from 'react';

export default function Navbar() {
    const [signInActive, setSignInActive] = useState(false);

    const handlePost = () => {};
    const handleLogin = () => {
        setSignInActive(true);
    };

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
                <Button onClick={handleLogin}>Log In</Button>
                <DropdownButton />
            </div>
            {signInActive ? (
                <div className={styles.signIn}>
                    <SignIn />
                </div>
            ) : null}
        </div>
    );
}
