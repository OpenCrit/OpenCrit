import { useState } from 'react';
import styles from './SearchTag.module.css';

export default function SearchTag({
    children,
    color,
}: {
    children: String;
    color: String;
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const hoverBackground = isHovered ? color : 'white';

    return (
        <div
            className={styles.searchTagContainer}
            style={{
                borderColor: color as string,
                backgroundColor: hoverBackground as string,
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <div className={styles.tagNames}>{children}</div>
        </div>
    );
}
