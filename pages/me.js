import React from "react";
import Link from "next/link";
import Head from "next/head";

function Author() {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>

      <h1>about me</h1>
      
      <h3>work experience</h3>
      <p>e&j gallo winery</p>
      <p>george fox university</p>
      <p>jnj software ltd</p>

      <h3>certifications</h3>
      <p>aws certified cloud practicioner - july 2021</p>

      <Link href="/"><a>go back</a></Link>
    </>
  )
}

export default Author
