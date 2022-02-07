import React from "react";
import Link from "next/link";

import matter from "gray-matter";

import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import MailOutlineRounded from "@material-ui/icons/MailOutlineRounded";
import Image from "next/image";
import { IconButton } from "@material-ui/core";

import Pfp from "../public/img/me.jpeg";
import Head from "next/head";

function Homepage(props) {
  const iconColor = { color: "#5f0d0e" };

  const imgLoader = ({ src }) => src;

  return (
    <div className="blog">
      <Head>
        <meta name="og:title" content="trey moen" />
        <meta name="og:description" content="Blog posts, résumé, projects. A peek into my life." />
        <meta name="description" content="Blog posts, résumé, projects. A peek into my life." />
      </Head>

      <div className="header">
        <div className="pfp">
          <Image width={175} height={175} src={Pfp} alt="A picture of Trey" loader={imgLoader} unoptimized />
        </div>
        <div className="header-text-div">
          <span className="title">{props.blogTitle}</span>
          <span className="subtitle">{props.blogDesc}</span>
          <div className="icons">
            <IconButton href="https://github.com/greatgitsby" aria-label="github" target="blank">
              <GitHub style={iconColor} />
            </IconButton>
            <IconButton href="https://linkedin.com/in/trey-moen" aria-label="linkedin" target="blank">
              <LinkedIn style={iconColor} />
            </IconButton>
            <IconButton href="mailto:trey@moen.ai" aria-label="mail" target="blank">
              <MailOutlineRounded style={iconColor} />
            </IconButton>
          </div>
        </div>
      </div>

      <div>
        <ul>
          {
            props.pages.map((p, i) => (
              <li key={i}>
                <Link href={`/posts/${p.slug}`} passHref>
                  <a>{p.title}</a>
                </Link>
                <span className="blog-entry-text">{p.displayDate} - {p.description}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const fs = await import("fs/promises");
  const path = await import("path");

  const filenames = await fs.readdir("./content");

  let pages = await Promise.all(
    filenames
      .filter(p => p.endsWith(".md"))
      .map(async (filename) => {
        const content = await import(`../content/${filename}`);
        const frontmatter = matter(content.default);

        frontmatter.data.slug = path.parse(filename).name;
        frontmatter.data.createdAt = new Date(frontmatter.data.createdAt).toLocaleDateString();
        frontmatter.data.updatedAt = new Date(frontmatter.data.updatedAt).toLocaleDateString();

        // Get a "pretty" date out of the date string
        // Ex. Tue Jul 5 2021 -> Jul 2021
        const prettyDate = new Date(frontmatter.data.createdAt).toDateString().split(" ");
        frontmatter.data.displayDate = prettyDate[1] + " " + prettyDate[3];

        return Promise.resolve({ ...frontmatter.data });
      })
  );

  // Sort pages by create date descending
  pages = pages.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt));

  return {
    props: {
      blogTitle: "trey moen",
      blogDesc: "a student for life",
      pages: pages
    }
  };
}

export default Homepage;
