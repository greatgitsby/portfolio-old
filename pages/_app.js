import Head from "next/head";

// Allows for exporting of CSS
import "../src/css/global.css";

// Default app
export default function TreySite({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>trey moen</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

