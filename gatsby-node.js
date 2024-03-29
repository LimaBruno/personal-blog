/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug' (slug = nome do arquivo)
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
     
    })
  }
}

//createPage = https://www.gatsbyjs.org/docs/node-apis/#createPages

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  query PostItem {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            layout
            thumbnail
          }
          timeToRead
          fields {
            slug
          }
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,

        }
      
      })    
    })
    
    
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    
    Array.from({ length: numPages }).forEach((_, index) => {
      
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}