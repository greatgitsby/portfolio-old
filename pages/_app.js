import Head from "next/head";

// Allows for exporting of CSS
import "../src/css/global.css";

// Default app
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
        <meta property="og:title" content="Portfolio of Trey Moen" />
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://treymoen.dev/">
        <meta property="og:description" content="Blog posts, resume, projects. A peek into my life.">
        <meta property="og:image" content="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/hundred-points_1f4af.png" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

