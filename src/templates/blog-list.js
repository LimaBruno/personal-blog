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

    return (
      <Layout>
        <SEO title="Home" />
          {postList.map(({ node }, i) => (
          <PostItem
            key={i}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            timeToRead={node.timeToRead}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
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
    }
`
export default BlogList