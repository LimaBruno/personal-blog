//Apos instalado o "dotenv" como administrador "npm install dotenv"
require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Bruno Lima`,
    position: `Tecnologia da Informação`,//criado a variavel position e seu valor em crase
    description: `Especialista em Tecnologia da Informação`,
    author: `@brunolima`,
    siteUrl: `https://brunolima.com`, //(usar esse nome por causa do pluguin "sitemap") siteUrl criado manualmente e configurado no componente de SEO.js (configuração de SEO de "image")
  },
  plugins: [
    `gatsby-plugin-transition-link`, //configurando manualmente - https://transitionlink.tylerbarnes.ca/docs/transitionlink/
    `gatsby-plugin-styled-components`,//componente do styled-components
    `gatsby-plugin-react-helmet`,
    /*1º - Para funcionar corretamente o plugin "gatsby-remark-images",
    a pasta que vai receber as imagens dos "posts markdown" deverá ser a primeria do filesystem. 
    Depois configurar os plugins dentro "gatsby-transformer-remark" que fica abaixo */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/static/assets/img`,
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
              name:"uploads", // o mesmo nome da pasta do filesystem
            }
          },
          {
            //O plugin mais important
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960, //Definido qual é o tamanho maixmo das imagens "fluídas" 960 é o tamanho maixmo que pode ter.
              linkImagesToOriginal: false, //linksImagesToOriginal é para links externos neste caso não vai ter.
            }
          },
          `gatsby-remark-lazy-load`, //Tambem é necessário apontar o plugin.
          //conforme a documentação pede para importar o "import 'lazysizes'" no "gatsby-browser.js"
          /*Depois de instalar o prismjs, a documentação informar que o plugin deve ser configurado
          dentro `gatsby-transformer-remark` porque faz parte dele e o pluguin deve ficar na ultima linha
          `gatsby-remark-prismjs`
          Tambem deverá incluir no arquivo "gatsby-browser.js" 
          require("prismjs/themes/prism-tomorrow.css")
          */
          `gatsby-remark-prismjs`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //Configuração do Algolia
    {
      resolve: `gatsby-plugin-algolia-search`,//conforme a documentação
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,//lendo as configurações do arquivo ".env"
        apiKey: process.env.ALGOLIA_ADMIN_KEY,//lendo as configurações do arquivo ".env"
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,//lendo as configurações do arquivo ".env"
        queries,//importando a query
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, //Para atualizar (quando for criar algum novo registro no algolia, mudar para false e volte para true)
      },
    },
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
    `gatsby-plugin-sitemap`, //plugin só funciona em produção para testar executar "gatsby build && gatsby serve" 
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
