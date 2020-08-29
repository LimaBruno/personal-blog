require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Bruno César Lima`,
    position: `Tecnologia da Informação`,
    description: `Bruno César Lima - Um blog onde escrevo sobre o incrível mundo da tecnologia da informação e boas ideias legais!`,
    authorDescription: `"Apaixonado por tecnologia 🖥️ e compartilhar boas ideias 💡"`,
    author: `@brunolima`,
    siteUrl: `https://brunocesarlima.com.br`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name:"uploads",
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //Algolia Configuration
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    //PWA Configuration 1
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bruno Lima`,//View name in the browser
        short_name: `Bruno Lima`,
        start_url: `/`, //Definition start URL
        background_color: `#282a36`, //Backgrond in the mobile
        theme_color: `#282a36`, // Color browser mobile
        display: `minimal-ui`, //Style display
        icon: `static/assets/img/bruno-cesar-lima-icon.png`, // This path is relative to the root of the site.
     },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    
    //PWA Configuration 2 
    `gatsby-plugin-offline`, //Execute "gatsby build" and "gatsby serve"
    `gatsby-plugin-netlify-cms`,    
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://brunocesarlima.com.br`,
      },
    },
  ],
}
