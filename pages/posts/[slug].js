/* eslint react/no-children-prop: "off"
    --------
   React-Markdown needs the children prop to function.        
*/

import React from "react";
import ReactMarkdown from "react-markdown";

import Link from "next/link";
import Head from "next/head";

import matter from "gray-matter";

import BlogImage from "../../src/components/BlogImage";

const renderers = {
  
  img(props) {
    return BlogImage(props);
  },

  a(props) {
    return (
      <a {...props} target="_blank"></a>
    );
  }

};

function PostTemplate({ content, data }) {
  const frontmatter = data;
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      
      <ReactMarkdown components={renderers} children={content} />

      <Link href="/"><a>go back</a></Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const file = await import(`../../content/${slug}.md`); 
  const data = matter(file.default);

  return { 
    props: {
      content: data.content,
      data: data.data,
      isEmpty: data.isEmpty,
      excerpt: data.excerpt
    }
  };
}

export const getStaticPaths = async () => {
  const fs = await import("fs/promises");
  const path = await import("path");

  const pages = await Promise.all((await fs.readdir("./content")).filter(p => p.endsWith(".md")).map(async (filename) => {
    const content = await import(`../../content/${filename}`);
    const data = matter(content.default);

    return Promise.resolve({
      params: {
        slug: path.parse(filename).name
      }
    });
  }));


  return {
    paths: pages,
    fallback: false
  }
};

export default PostTemplate;
