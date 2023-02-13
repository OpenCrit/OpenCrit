import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.css';
import SearchTag from 'components/SearchTag/SearchTag';

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);

    const searchTags = [
        { name: 'Painting', color: '#ffa9a9' },
        { name: 'Illustration', color: '#efb190' },
        { name: 'Sculpture', color: '#9bd634' },
        { name: 'Animation', color: '#39ec39' },
        { name: 'Design', color: '#39eccb' },
        { name: 'Video', color: '#3995ec' },
        { name: 'Fashion', color: '#393fec' },
        { name: 'Fiber', color: '#8739ec' },
        { name: 'Others', color: '#d139ec' },
    ];

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const topContainerStyle = isOpen
        ? styles.topContainerOpen
        : styles.topContainer;

    return (
        <div className={styles.container}>
            <div className={topContainerStyle}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.magnifyingGlass}
                />
                <input
                    className={styles.searchBar}
                    type="text"
                    placeholder="Search Posts"
                />
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.dropDown}
                    onClick={handleDropdown}
                />
            </div>
            {isOpen ? (
                <div className={styles.bottomContainer}>
                    {searchTags.map((tagObject) => (
                        <div>
                            <SearchTag color={tagObject['color']}>
                                {tagObject['name']}
                            </SearchTag>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
