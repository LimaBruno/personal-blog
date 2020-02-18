import React from "react"
//import { Link } from "gatsby" Importando api de link do gatsby
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout" //depois que mudou a pasta alterar para "Layout - 'L' maisucluo DE TODOS"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  /*1º - Construção da Query, para ordenar os post utilizar o filtro "sort",
  filtrando pela data, com ordem decrescente */
  
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostItem {
      allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}){
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
  `)
  //2º - Execução da query na variavel postList acessando "allMarkdownRemark.edges"
  const postList = allMarkdownRemark.edges

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