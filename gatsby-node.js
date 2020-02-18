/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/*Definindo o link slug de cada nó "node" de cada post (markdown), ou seja tem que criar um novo campo (com o nome do slug)
e depois informar na query. Para isso precisa do codigo "createFilepath" componente do (gatbsy-source-filesystem) 
e o metodo "createNodeField" esse metodo é para todas as vezes que um nó é criado (posts).

Link com slug tem que ser tratado via api.

createFilePath = https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
*/

const { createFilePath } = require(`gatsby-source-filesystem`)

//Metodo é para adicionar um "slug" para cada post.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files - SE O ARQUIVO FOR MARKDOWNREMARK ele vai executar
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages", //mudou para pages
    })

    // Creates new query'able field with name of 'slug' (slug = nome do arquivo)
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,//nome da const "slug" e definido o nome do slug

      /*
      a função slice vai começar a partir do 12º caractere
      Exmplo: "2015-01-03-two-things-are-infinite" vai ficar a partir do 12 "two-things-are-infinite"
      */
    })
  }
}