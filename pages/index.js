import React from "react";
import Link from "next/link";
import Head from "next/head";

import matter from "gray-matter";

import { Description, GitHub, LinkedIn, Instagram, MailOutlineRounded, Twitter } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Homepage(props) {
  return (
    <>
      <span className="title">{props.blogTitle}</span><br />
      <span className="subtitle">{props.blogDesc}</span><br />

      <div className="header">
        <span className="header-text"><Link href="/me" passHref><a>about me</a></Link></span>
        <span className="header-text"><Link href="/resume.pdf" passHref><a>résumé</a></Link></span>
      </div>

      <div className="icons">
				<IconButton color="secondary" href="https://github.com/greatgitsby" aria-label="github" target="blank">
					<GitHub style={{ color: "#1c4969" }} />
				</IconButton>
				<IconButton color="secondary" href="https://linkedin.com/in/trey-moen" aria-label="linkedin" target="blank">
					<LinkedIn style={{ color: "#1c4969" }} />
				</IconButton>
				<IconButton color="secondary" href="https://instagram.com/treymoen" aria-label="instagram" target="blank">
					<Instagram style={{ color: "#1c4969" }} />
				</IconButton>
				<IconButton color="secondary" href="mailto:tmoen18@georgefox.edu" aria-label="mail" target="blank">
					<MailOutlineRounded style={{ color: "#1c4969" }} />
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
                <span>{new Date(p.createdAt).toLocaleDateString()} - {p.description}</span>
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
        const frontmatter = matter(content.default);
        
        frontmatter.data.slug = path.parse(filename).name
        
        return Promise.resolve({ ...frontmatter.data });
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
