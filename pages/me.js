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

      <Link href="/resume.pdf"><a>my résumé</a></Link>

      <h3>work experience</h3>
      <p>e&j gallo winery</p>
      <p>george fox university</p>
      <p>jnj software ltd</p>

      <h3>certifications</h3>
      <p>aws certified cloud practicioner - july '21</p>

      <h3>a short biography I wrote for the GFU IGNITE mentorship program</h3>
      <p>
        Although I am an engineer at heart, working with people and
        communicating what I love is even more enjoyable than development
        (I know, it sounds crazy). I love contributing to teams;
        seeing my peers succeed and overcome obstacles brings me the greatest
        joy. Obstacles and discomfort are not new to me, in either a
        technical and personal setting, but challenges guarantee growth in
        some fashion. I strive toward positive growth in these situations.
        For me the key ingredients are asking the right questions, learning,
        and moving on. More broadly, learning begets engagement in what I do:
        my goal is to be a student forever, and beyond university and a
        career, this mindset and discipline that must be cultivated in order
        for it to produce joy and meaning. In my eyes, learning about Christ
        and the world and everything He has made is the key to finding
        enjoyment and contentment in the present. In a technical and
        professional setting, these thoughts drive my desire to develop
        relationships and perfect my craft. George Fox ignited my passion
        in these areas which I hope to continue pursuing for the
        rest of my life.
      </p>
      <Link href="/"><a>go back</a></Link>
    </>
  )
}

export default Author
