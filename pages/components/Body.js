import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Body.module.css';

export default function Body() {
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        if (loading) return;
        setError('')
        setMessage('');
        e.preventDefault();
        if (!email.length) return;
        setLoading(true);
        const res = await fetch('/api/register', {
            body:
                JSON.stringify({ email: email })
            , header: {
                "Content-Type": "application/json",
            },
            method: 'POST'
        });
        setLoading(false);
        if (res.status === 500) {
            setError('Sorry, there was an issue. Please try again.')
            return;
        }
        setMessage('Congrats! You will be notified when we launch. :)');
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
                        {error && <span className={styles.error}>{error}</span>}
                        {message && <span className={styles.success}>{message}</span>}
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} name='email'
                                placeholder='Enter your email address' className={styles.input} required />
                            <button type='submit' disabled={loading} className={styles.btn}>{loading ? 'Submitting' : 'Notify Me'}</button>
                        </form>
                    </div>
                </div>
                <div className={styles.previewContainer}>
                    <div className={styles.preview}>
                        <div className={styles.androidBack}>
                            <img src="/android_back.png" alt="Slait Preview" />
                        </div>
                        <div className={styles.android}>
                            <img src="/android.png" alt="Slait Preview" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}