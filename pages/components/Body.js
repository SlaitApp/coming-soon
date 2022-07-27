import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Body.module.css';

export default function Body() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        console.log(email)
        e.preventDefault();
        if (!email.length) return;

        const res = await fetch('/api/register', {
            body:
                JSON.stringify({email: email})
            , header: {
                "Content-Type": "application/json",
            },
            method: 'POST'
        });

        console.log(res);
    }

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
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Enter your email address' className={styles.input} />
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