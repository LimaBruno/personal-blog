require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Bruno Lima`,
    position: `Tecnologia da Informação`,
    description: `Especialista em Tecnologia da Informação`,
    author: `@brunolima`,
    siteUrl: `https://brunolima.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
            resolve: "gatsby-remark-relative-images",
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
        background_color: `#16202c`, //Backgrond in the mobile
        theme_color: `#16202c`, // Color browser mobile
        display: `minimal-ui`, //Style display
        icon: `src/images/bruno_fav.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    
    //PWA Configuration 2 
    `gatsby-plugin-offline`, //Execute "gatsby build" and "gatsby serve"
  ],
}
