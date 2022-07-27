import Image from 'next/image';
import styles from '../../styles/Header.module.css';

export default function Header() {
    return (
        <div className={styles.nav}>
            <img className={styles.logo} src="/slite_logo.png" alt="Vercel Logo" />
        </div>
    )
}