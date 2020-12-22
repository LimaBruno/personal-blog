import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import styled from "styled-components"
import media from "styled-media-query"

export const MarginDiv = styled.div`
  margin-bottom: 3.4rem;
  
  ${media.lessThan("large")`
    margin-bottom: 0;
  `}
  
`

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges
    const { currentPage, numPages} = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    const schema = {
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "inLanguage": "pt-br",
      "url": props.data.site.siteMetadata.siteUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": props.data.site.siteMetadata.siteUrl
      },
      "headline": props.data.site.siteMetadata.title,
      "description": props.data.site.siteMetadata.description,
      image: {
        "@type": "ImageObject",
        "url": "https://brunocesarlima.com.br/assets/img/bruno-cesar-lima-card.png",
      },        
      author: {
        "@type": "Person",
        "name": props.data.site.siteMetadata.title,
      },      
    }

    return (
        <Layout>
        <SEO title="Home" schemaMarkup={schema} />
            {postList.map(({ node }, i) =>(
              <PostItem
                key={i}
                slug= {node.fields.slug}
                background = {node.frontmatter.background}
                category= {node.frontmatter.category}
                date= {node.frontmatter.date}
                timeToRead= {node.timeToRead}
                title= {node.frontmatter.title}
                description= {node.frontmatter.description}
              />     
            ))}
          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            currentPage={currentPage}
            numPages={numPages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
          <MarginDiv/>          
      </Layout>
    )
}

export const query = graphql`
    query PostItem ($skip: Int!, $limit: Int!){
        allMarkdownRemark (
            sort: {fields: frontmatter___date, order: DESC}
            limit: $limit
            skip: $skip 
            ){
            edges {
              node {
                  frontmatter {
                    background
                    category
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
                    title
                  }
                  timeToRead
                  fields {
                    slug
                  }
              }
            }
        }
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
    }
`
export default BlogList