/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/*
siteUrl, configuração do "gatsby-config.js"
dentro da função SEO foi adicionada a variavel "image"
*/
function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  //pegando o valor definido no "siteUrl" do arquivo "gatsby-config.js"
  const url = site.siteMetadata.siteUrl
  //concatenando o siteUrl do siteMetadata e a imagem (caso tenha imagem vai pegar o nome da imagem se não vai pegar o padrão ""/assets/img/cover.jpg"")
  const ogImage = `${url}${image || "/assets/img/cover.jpg"}`

  /*
  Depois da configuração abaixo deverá acresentar o SEO do aruivo de posts "blog-post.js"
  1º
  <SEO title={post.frontmatter.title} 
                description={post.frontmatter.description}
                image={post.frontmatter.image} \>
  
  E acresentar na query abaixo do posts o item "image"
  frontmatter {
            title
            description
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            image       
  }
  2º
  Informar também na query do arquivo "gatsby-node.js" o "image"
  frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            image
          }
  3º
  Passar a tag "image" dentro de cada pots criado markdown
  */
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        //Chamando a const ogImage (seo de imagem do facebook)
        {
          property: `og:image`,
          content: ogImage,
        },
        //Define o tipo de conteudo que esta compartilhando (https://rockcontent.com/blog/meta-tags-para-redes-sociais/)
        {
          property: `og:type`,
          content: `website`,
        },
        //valor padrão: content: `summary`,
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        //com esta propriedade vai ter a imagem no card do twitter.
        {
          property: `twitter:image:src`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
