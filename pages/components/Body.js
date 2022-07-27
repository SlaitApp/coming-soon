import Image from 'next/image';
import styles from '../../styles/Body.module.css';

export default function Body() {
    return (
        <div className={'container'}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h4><span className={styles.line}></span> Coming Soon</h4>
                        <h1 className={styles.title}>Practice your language skills with native speakers</h1>
                    </div>
                    <div className={styles.formContainer}>
                        <h3 className={styles.formHeader}>Get notified when we launch</h3>
                        <form className={styles.form}>
                            <input type={'email'} name='email' placeholder='Enter your email address' className={styles.input} />
                            <button type='submit' className={styles.btn}>Notify Me</button>
                        </form>
                    </div>
                </div>
                <div className={styles.previewContainer}>
                    <div className={styles.preview}>
                        <div className={styles.androidBack}>
                            <img src="/android_back.png" alt="Vercel Logo" />
                        </div>
                        <div className={styles.android}>
                            <img src="/android.png" alt="Vercel Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}