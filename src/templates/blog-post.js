import React, { createRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"
import ReadingProgress from "../components/ReadingProgress"

import {
    PostHeader,
    PostDate,
    CalendarIcon,
    TimeIcon,
    PostTitle,
    PostDescription,
    MainContent,
    MarginDiv
} from "../styles/base"

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost
    const target = createRef()

    return (
        <div ref={target}>
            <Layout>
            <ReadingProgress target={target} />
                <SEO title={post.frontmatter.title} 
                    description={post.frontmatter.description}
                    image={post.frontmatter.image}
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
                </MainContent>
                <RecommendedPosts next={next} previous={previous} />
                <Comments url={post.fields.slug} title={post.frontmatter.title} />
                <MarginDiv/>
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
            image       
        }
        html
        timeToRead
        }
    }
`
export default BlogPost