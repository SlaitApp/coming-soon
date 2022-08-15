import styles from '../../styles/Footer.module.css'

export default function Body() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.icons}>
                    <a href="https://twitter.com/slaitapp" target={'_blank'} className='icon' rel="noreferrer"><i className='fab fa-twitter'></i></a>
                </div>
            </div>
        </footer>
    );
}