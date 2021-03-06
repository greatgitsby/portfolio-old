import Head from "next/head";

import "../src/css/global.css";

export default function TreySite({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>trey moen</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://treymoen.com/" />
        <meta property="og:image" content="/img/me.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

