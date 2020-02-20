module.exports = {
  siteMetadata: {
    title: `Bruno Lima`,
    position: `Tecnologia da Informação`,//criado a variavel position e seu valor em crase
    description: `Especialista em Tecnologia da Informação`,
    author: `@brunolima`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,//componente do styled-components
    `gatsby-plugin-react-helmet`,
    /*1º - Para funcionar corretamente o plugin "gatsby-remark-images",
    a pasta que vai receber as imagens dos "posts markdown" deverá ser a primeria do filesystem. 
    Depois configurar os plugins dentro "gatsby-transformer-remark" que fica abaixo */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, //apontamento da pasta de posts
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`, //componente do transformer-remark (instalado)
      options: {
        /*2º - Os pulguins deverao estar instalado e com configurados 
        gatsby-remark-images
        gatsby-remark-relative-images
        gatsby-remark-lazy-load (COMPLEMENTO npm install --save lazysizes)
        */
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name:"uploads" // o mesmo nome da pasta do filesystem
            }
          },
          {
            //O plugin mais important
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960, //Definido qual é o tamanho maixmo das imagens "fluídas" 960 é o tamanho maixmo que pode ter.
              linksImagesToOriginal: false //linksImagesToOriginal é para links externos neste caso não vai ter.
            }
          },
          `gatsby-remark-lazy-load`, //Tambem é necessário apontar o plugin.
          //conforme a documentação pede para importar o "import 'lazysizes'" no "gatsby-browser.js"
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
