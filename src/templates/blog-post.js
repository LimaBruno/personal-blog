import React, { createRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"
import ReadingProgress from "../components/ReadingProgress"
import Share from "../components/Share"

import {
  PostHeader,
  PostDate,
  CalendarIcon,
  TimeIcon,
  PostTitle,
  PostDescription,
  MainContent
} from "../styles/base"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost
  const target = createRef()

  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "inLanguage": "pt-br",
    "url": data.site.siteMetadata.siteUrl+post.fields.slug,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.site.siteMetadata.siteUrl+post.fields.slug
    },
    "headline": post.frontmatter.title,
    "description": post.frontmatter.description,
    image: {
      "@type": "ImageObject",
      "url": data.site.siteMetadata.siteUrl+post.frontmatter.thumbnail,
    },        
    author: {
      "@type": "Person",
      "name": data.site.siteMetadata.title,
    },
  }

  return (
    <div ref={target}>
      <Layout>
        <ReadingProgress target={target} />
        <SEO title={post.frontmatter.title} description={post.frontmatter.description}
        thumbnail={data.site.siteMetadata.siteUrl+post.frontmatter.thumbnail}
        schemaMarkup={schema}
      />
      <PostHeader>
        <PostDate>
          <CalendarIcon/> {post.frontmatter.date} - <TimeIcon/> {post.timeToRead} min de leitura
        </PostDate>
        <PostTitle>
          {post.frontmatter.title}
        </PostTitle>
        <PostDescription>
          {post.frontmatter.description}
        </PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
        <Share slug={post.fields.slug} title={post.frontmatter.title} /> 
      </MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query Post($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    fields {
      slug
    }
  frontmatter {
    title
    description
    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
    layout
    thumbnail       
  }
  html
  timeToRead
  }
  site {
    siteMetadata {
      siteUrl
      title
    }
 }
}`
export default BlogPost