import styles from '../../styles/Footer.module.css'

export default function Body() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.icons}>
                    <a href="#" className='icon'><i className='fab fa-twitter'></i></a>
                    <a href="#" className='icon'><i className='fab fa-instagram'></i></a>
                    <a href="#" className='icon'><i className='fab fa-facebook'></i></a>
                </div>
            </div>
        </footer>
    );
}