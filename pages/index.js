import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Slait - Language Exchange Platform</title>
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
