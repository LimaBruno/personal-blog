require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Bruno César Lima`,
    position: `Tecnologia da Informação`,
    description: `Bruno César Lima - Um blog onde escrevo sobre o incrível mundo da tecnologia da informação e boas ideias legais!`,
    authorDescription: `"Apaixonado por tecnologia 🖥️ e compartilhar boas ideias 💡"`,
    author: `@brunocesarlima_`,
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
    `gatsby-plugin-offline`, //PWA Configuration 2 - Execute "gatsby build && serve"
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://brunocesarlima.com.br`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        description
                        date
                      }
                      excerpt
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Bruno César Lima - RSS Feed'
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://www.google-analytics.com',
          'https://www.googletagmanager.com',
        ],
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}
