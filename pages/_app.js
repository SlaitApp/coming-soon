import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Head>
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

    <meta property="twitter:card" content="summary" />
    <meta property="twitter:title" content="Slait Language Exchange Platform - Chat with natives in any language" />
    <meta property="twitter:description" content="Slait Language Exchange Platform - Learn a new language, improve your speaking skills by speaking with natives all over the world." />
    <meta property="twitter:image" content="https://slait.net/og_card.png" />
    <meta property="twitter:site" content="@slaitapp" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
