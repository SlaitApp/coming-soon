import styles from '../../styles/Header.module.css';

export default function Header() {
    return (
        <div className={styles.nav}>
            <img className={styles.logo} src="/slait_logo.png" alt="Slait Logo" />
        </div>
    )
}