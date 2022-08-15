import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Slait Language Exchange Platform - Chat with natives in any language</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Slait Language Exchange Platform - Learn a new language, improve your speaking skills by speaking with natives all over the world." />
        <meta name="theme-color" content="#1A212E" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Slait Language Exchange Platform - Chat with natives in any language" />
        <meta property="og:description" content="Slait Language Exchange Platform - Learn a new language, improve your speaking skills by speaking with natives all over the world." />
        <meta property="og:url" content="https://slait.net/" />


        <meta property="og:image" content="https://slait.net/og_card.png" />
        <meta property="og:image:secure_url" content="https://slait.net/og_card.png" />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="900" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Slait Language Exchange Platform - Chat with natives in any language" />
        <meta name="twitter:description" content="Slait Language Exchange Platform - Learn a new language, improve your speaking skills by speaking with natives all over the world." />
        <meta name="twitter:image" content="https://slait.net/og_card.png" />
        <meta name="twitter:site" content="@slaitapp" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
