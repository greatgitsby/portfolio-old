import React from "react";
import Link from "next/link";

import matter from "gray-matter";

import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import MailOutlineRounded from "@material-ui/icons/MailOutlineRounded";
import { IconButton } from "@material-ui/core";

function Homepage(props) {
  return (
    <>
      <span className="title">{props.blogTitle}</span><br />
      <span className="subtitle">{props.blogDesc}</span><br />

      <div className="header">
        <span className="header-text"><Link href="/me" passHref><a>about me</a></Link></span>
        <span className="header-text"><Link href="/resume.pdf" passHref><a target="_blank">résumé</a></Link></span>
      </div>

      <div className="icons">
        
        <IconButton href="https://github.com/greatgitsby" aria-label="github" target="blank">
          <GitHub />
        </IconButton>
        
        <IconButton href="https://linkedin.com/in/trey-moen" aria-label="linkedin" target="blank">
          <LinkedIn />
        </IconButton>
        
        <IconButton href="https://instagram.com/treymoen" aria-label="instagram" target="blank">
          <Instagram />
        </IconButton>
        
        <IconButton href="mailto:tmoen18@georgefox.edu" aria-label="mail" target="blank">
          <MailOutlineRounded />
        </IconButton>
      
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
                <span className="blog-entry-text">{p.createdAt.toLocaleDateString()} - {p.description}</span>
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

  let pages = await Promise.all(
    filenames
      .filter(p => p.endsWith(".md"))
      .map(async (filename) => {
        const content = await import(`../content/${filename}`);
        const frontmatter = matter(content.default);
        
        frontmatter.data.slug = path.parse(filename).name;
        frontmatter.data.createdAt = new Date(frontmatter.data.createdAt);
        frontmatter.data.updatedAt = new Date(frontmatter.data.updatedAt);

        return Promise.resolve({ ...frontmatter.data });
      })
  );

  // Sort pages by create date descending
  pages = pages.sort((p1, p2) => p2.createdAt - p1.createdAt);
  
  return {
    props: {
      blogTitle: "trey moen",
      blogDesc: "a student for life",
      pages: pages
    }
  };
}

export default Homepage;
