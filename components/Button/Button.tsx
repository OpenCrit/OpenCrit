import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

export default function Button({
    children,
    onClick,
}: {
    children: String;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
