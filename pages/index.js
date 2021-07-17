import React from "react";
import Link from "next/link";
import Head from "next/head";

import matter from "gray-matter";

function Homepage(props) {
  return (
    <>
      <span className="title">{props.blogTitle}</span><br />
      <span className="subtitle">{props.blogDesc}</span><br />

      <div className="header">
        <span className="header-text"><Link href="/me" passHref><a>about me</a></Link></span>
        <span className="header-text"><Link href="/resume.pdf" passHref><a>résumé</a></Link></span>
      </div>

      <span className="subtitle">posts</span>
      <div className="blog-section">
        <div>
          <ul>
          {
            props.pages.map((p, i) => (
              <li key={i}>
                <Link href={`/posts/${p.slug}`} passHref>
                  <a>{p.title}</a>
                </Link>
                <span>{p.createdAt} - {p.description}</span>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const fs = await import("fs/promises");
  const path = await import("path");

  const filenames = await fs.readdir("./content");

  const pages = await Promise.all(
    filenames
      .filter(p => p.endsWith(".md"))
      .map(async (filename) => {
        const content = await import(`../content/${filename}`);
        const data = matter(content.default);

        return Promise.resolve({
          title: data.data.title,
          description: data.data.description,
          createdAt: data.data.createdAt,
          updatedAt: data.data.updatedAt,
          slug: path.parse(filename).name
        });
      })
  );
  
  return {
    props: {
      blogTitle: "trey moen",
      blogDesc: "a student for life",
      pages: pages
    }
  };
}

export default Homepage;
