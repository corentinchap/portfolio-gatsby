
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Chapatte.CO Portfolio'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/
          }
        }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Chapatte CO Portfolio",
        short_name: "Chapatte CO",
        description: "Showcase of the work of Chapatte.CO",
        lang: 'en',
        start_url: "/",
        background_color: "#1e1d28",
        theme_color: "#174ffc",
        icon: "src/assets/favicon.png",
        localize: [
          {
            start_url: "/fr/",
            lang: "fr",
            short_name: "Chapatte CO",
            name: "Chapatte CO Portfolio",
            description: "Démo du travail de Chapatte.CO"
          }
        ]
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-46181834-6"
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
  ],
}
