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
		{ name: 'Painting', color: '#000000' },
		{ name: 'Illustration', color: '#000000' },
		{ name: 'Sculpture', color: '#000000' },
		{ name: 'Animation', color: '#000000' },
		{ name: 'Design', color: '#000000' },
		{ name: 'Video', color: '#000000' },
		{ name: 'Fashion', color: '#000000' },
		{ name: 'Fiber', color: '#000000' },
		{ name: 'Others', color: '#000000' },
	];

	const handleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.container}>
			<div className={styles.topContainer}>
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
