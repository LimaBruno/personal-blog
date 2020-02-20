import React from "react"
import { graphql } from "gatsby"
/*2º - metodo BlogPost recebendo o valor */

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"

import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost

    //Renderizando o post
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <S.PostHeader>
                <S.PostDate>
                    {post.frontmatter.date} • {post.timeToRead} min de leitura
                </S.PostDate>
                <S.PostTitle>
                    {post.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                {/*a div está recebendo o html do post.html, por ser dados HTML o Reacat informa
            que é arriscado passar html e tem que ter o total conhecimento do html, pois podem acontecer ataques de xss.
            O nome "dangerousylSetInnerHTML", substitui o "innerHTML". Então precisa estar garantido a etrutura do html antes de passar.  */}
                <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </S.MainContent>
            <RecommendedPosts next={next} previous={previous} />
        </Layout>
    )
}
//1º - Executando a query e exportando 
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
        }
        html
        timeToRead
        }
    }
`


export default BlogPost