import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

export default function Button({
    children,
    icon,
    onClick,
}: {
    children?: String;
    icon?: IconProp;
    onClick: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}) {
    return icon ? (
        <div onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </div>
    ) : (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
