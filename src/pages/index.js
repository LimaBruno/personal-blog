import React from "react"
//import { Link } from "gatsby" Importando api de link do gatsby
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout" //depois que mudou a pasta alterar para "Layout - 'L' maisucluo DE TODOS"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  //Construção da Query
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostItem {
      allMarkdownRemark {
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
          }
        }
      }
    }
  `)
  // Execução da query na variavel postList
  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
        {/* Exporta a excução em um array, informando quais os dados que ira ser utilizado*/}
        {postList.map(({
          node:{
              frontmatter:{ background, category, date, description, title },
              timeToRead
          }
        }) =>(
          //Reinderizando o valor nas variaveis
          <PostItem 
            slug="/about/"
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
export default IndexPage


 /*
    MODELO HARDCODE (dados fixos)
    <Layout>
      <SEO title="Home" />
      <PostItem 
        slug="/about/"
        category="Misc"
        date="30 de Julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
      />     
    </Layout>
  */

