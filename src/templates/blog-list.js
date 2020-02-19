import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout" //depois que mudou a pasta alterar para "Layout - 'L' maisucluo DE TODOS"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

/*2º - metodo BlogPost recebendo o valor */
const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    //Renderizando o post
    return (
        <Layout>
        <SEO title="Home" />
          {/* 3º - Exporta a excução em um array, informando quais os dados que ira ser utilizado (node signfica nó, entao cada post é um nó*/}
          {postList.map(({
            node:{
              frontmatter:{ background, category, date, description, title },
              timeToRead,
              fields:{ slug, },
            }
          }) =>(
            //Reinderizando o valor nas variaveis
            <PostItem 
              //O link slug é criado via api, usando o "gatsby-node.js"
              slug= { slug }
              background = { background }
              category= { category }
              date= { date }
              timeToRead= { timeToRead }
              title= { title }
              description= { description }
            />     
          ))}
        
      </Layout>
    )
}
//1º - Executando a query e exportando 
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